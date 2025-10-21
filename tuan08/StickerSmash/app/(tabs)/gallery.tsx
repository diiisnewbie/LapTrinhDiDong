import { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import * as MediaLibrary from "expo-media-library";

const { width, height } = Dimensions.get("window");

export default function GalleryScreen() {
  const [photos, setPhotos] = useState<MediaLibrary.Asset[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();

  // 📌 Load ảnh khi được cấp quyền
  useEffect(() => {
    (async () => {
      if (!permissionResponse?.granted) {
        await requestPermission();
      } else {
        await loadPhotos();
      }
    })();
  }, [permissionResponse]);

  // 📌 Hàm lấy ảnh trong album StickerSmash
  const loadPhotos = async () => {
    try {
      const album = await MediaLibrary.getAlbumAsync("StickerSmash");

      if (!album) {
        setPhotos([]);
        return;
      }

      const assets = await MediaLibrary.getAssetsAsync({
        first: 50,
        mediaType: ["photo"],
        album,
        sortBy: [["creationTime", false]],
      });

      // ✅ Chuyển `ph://` → `file://` để iOS đọc được
      const resolved = await Promise.all(
        assets.assets.map(async (asset) => {
          const info = await MediaLibrary.getAssetInfoAsync(asset.id);
          return { ...asset, uri: info.localUri || asset.uri };
        })
      );

      setPhotos(resolved);
    } catch (error) {
      console.log("Error loading photos:", error);
    }
  };

  // 📌 Giao diện
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🖼️ My Saved Stickers</Text>

      {photos.length === 0 ? (
        <Text style={styles.text}>No saved images found yet.</Text>
      ) : (
        <FlatList
          data={photos}
          keyExtractor={(item) => item.id}
          numColumns={3}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => setSelectedPhoto(item.uri)}>
              <Image source={{ uri: item.uri }} style={styles.image} />
            </TouchableOpacity>
          )}
          contentContainerStyle={styles.list}
        />
      )}

      {/* 📸 Modal xem ảnh full-screen */}
      <Modal visible={!!selectedPhoto} transparent={true} animationType="fade">
        <View style={styles.modalBackground}>
          <TouchableOpacity
            style={styles.closeArea}
            onPress={() => setSelectedPhoto(null)}
          />
          <Image source={{ uri: selectedPhoto! }} style={styles.fullImage} />
        </View>
      </Modal>
    </View>
  );
}

// 🎨 Style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    paddingTop: 40,
    paddingHorizontal: 10,
  },
  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },
  text: {
    color: "#ccc",
    textAlign: "center",
    marginTop: 30,
  },
  list: {
    justifyContent: "center",
  },
  image: {
    width: width / 3 - 12,
    height: width / 3 - 12,
    margin: 4,
    borderRadius: 10,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.9)",
    justifyContent: "center",
    alignItems: "center",
  },
  closeArea: {
    ...StyleSheet.absoluteFillObject,
  },
  fullImage: {
    width: width * 0.9,
    height: height * 0.8,
    resizeMode: "contain",
    borderRadius: 12,
  },
});