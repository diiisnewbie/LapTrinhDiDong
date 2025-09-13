import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Review() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.productContainer}>
        <Image
          source={require("../assets/usb.png")}
          style={styles.productImage}
        />
        <Text style={styles.productTitle}>
          USB Bluetooth Music Receiver HJX-001 - Biến loa thường thành loa
          bluetooth
        </Text>
      </View>

      <Text style={styles.label}>Cực kỳ hài lòng</Text>
      <View style={styles.ratingContainer}>
        {[1, 2, 3, 4, 5].map((star) => (
          <TouchableOpacity key={star} onPress={() => setRating(star)}>
            <Icon
              name="star"
              size={32}
              color={rating >= star ? "gold" : "#ccc"}
              style={{ marginHorizontal: 5 }}
            />
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.uploadBtn}>
        <Icon name="camera" size={20} color="#000" style={{ marginRight: 8 }} />
        <Text>Thêm hình ảnh</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.textArea}
        placeholder="Hãy chỉ sẻ những điều mà bạn thích về sản phẩm"
        multiline
        value={comment}
        onChangeText={setComment}
      />
      <Text style={styles.link}>https://meet.google.com/nsj-ojwi-xpp</Text>

      <TouchableOpacity style={styles.submitBtn}>
        <Text style={styles.submitText}>Gửi</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  productContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  productImage: {
    width: 60,
    height: 60,
    marginRight: 10,
    resizeMode: "contain",
  },
  productTitle: {
    flex: 1,
    fontSize: 14,
    fontWeight: "bold",
  },
  label: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
    fontWeight: "500",
  },
  ratingContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  uploadBtn: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#007BFF",
    borderRadius: 6,
    padding: 10,
    marginBottom: 20,
    justifyContent: "center",
  },
  textArea: {
    height: 100,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 6,
    padding: 10,
    textAlignVertical: "top",
    marginBottom: 10,
  },
  link: {
    color: "blue",
    textAlign: "center",
    marginBottom: 20,
  },
  submitBtn: {
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    borderRadius: 6,
  },
  submitText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
});
