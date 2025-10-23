import { db } from "./db";
import { CartItem } from "../models/types";

export async function getCartItems(): Promise<CartItem[]> {
  return await db.getAllAsync<CartItem>(`
    SELECT c.*, p.name, p.price, p.stock
    FROM cart_items c
    JOIN products p ON p.product_id = c.product_id
  `);
}

export async function addToCart(product_id: string) {
  const item = await db.getFirstAsync<{ qty: number; stock: number }>(
    `SELECT c.qty, p.stock
     FROM products p
     LEFT JOIN cart_items c ON p.product_id = c.product_id
     WHERE p.product_id = ?`,
    [product_id]
  );

  if (item?.qty && item.qty >= item.stock) {
    throw new Error("Vượt tồn kho");
  }

  if (item?.qty) {
    await db.runAsync(`UPDATE cart_items SET qty = qty + 1 WHERE product_id = ?`, [product_id]);
  } else {
    await db.runAsync(`INSERT INTO cart_items (product_id, qty) VALUES (?, 1)`, [product_id]);
  }
}

export async function updateQty(id: number, qty: number) {
  // Nếu qty <= 0 → xóa dòng khỏi giỏ
  if (qty <= 0) {
    await db.runAsync(`DELETE FROM cart_items WHERE id = ?`, [id]);
    return;
  }

  // Lấy thông tin product_id & tồn kho hiện tại
  const item = await db.getFirstAsync<{ product_id: string }>(
    `SELECT product_id FROM cart_items WHERE id = ?`,
    [id]
  );

  if (!item) throw new Error("Không tìm thấy sản phẩm trong giỏ!");

  const product = await db.getFirstAsync<{ stock: number }>(
    `SELECT stock FROM products WHERE product_id = ?`,
    [item.product_id]
  );

  if (!product) throw new Error("Sản phẩm không tồn tại!");
  if (qty > product.stock) {
    alert(`Không thể vượt quá tồn kho (${product.stock})!`)
    return;
  }

  // Nếu hợp lệ → cập nhật lại số lượng
  await db.runAsync(`UPDATE cart_items SET qty = ? WHERE id = ?`, [qty, id]);
}


export async function clearCart() {
  await db.execAsync("DELETE FROM cart_items");
}
