import { db } from "./db";
export async function checkout() {
  await db.withTransactionAsync(async () => {
    // Lấy dữ liệu giỏ hàng + giá
    const cartItems = await db.getAllAsync<{
      product_id: string;
      qty: number;
      price: number;
    }>(`
      SELECT c.product_id, c.qty, p.price
      FROM cart_items c
      JOIN products p ON p.product_id = c.product_id
    `);

    if (cartItems.length === 0) throw new Error("Giỏ hàng trống!");

    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.qty,
      0
    );

    // Tạo đơn hàng
    const result = await db.runAsync(
      `INSERT INTO orders (total_amount) VALUES (?)`,
      [total]
    );
    const orderId = result.lastInsertRowId;

    // Ghi chi tiết đơn hàng + cập nhật tồn kho
    for (const item of cartItems) {
      await db.runAsync(
        `INSERT INTO order_items (order_id, product_id, qty, price)
         VALUES (?, ?, ?, ?)`,
        [orderId, item.product_id, item.qty, item.price]
      );

      await db.runAsync(
        `UPDATE products
         SET stock = stock - ?
         WHERE product_id = ? AND stock >= ?`,
        [item.qty, item.product_id, item.qty]
      );
    }

    // Xoá giỏ hàng
    await db.runAsync("DELETE FROM cart_items");
  });

  return true;
}