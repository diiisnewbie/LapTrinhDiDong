import * as SQLite from "expo-sqlite";

export const db = SQLite.openDatabaseSync("shopping.db");

export async function initDb() {
  // Tạo bảng sản phẩm
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS products(
      product_id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      price REAL NOT NULL CHECK(price>=0),
      stock INTEGER NOT NULL CHECK(stock>=0)
    );
  `);

  // Tạo bảng giỏ hàng
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS cart_items(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      product_id TEXT NOT NULL,
      qty INTEGER NOT NULL CHECK(qty>0),
      UNIQUE(product_id),
      FOREIGN KEY(product_id) REFERENCES products(product_id)
    );
  `);

  // 🆕 Tạo bảng đơn hàng
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS orders(
      order_id INTEGER PRIMARY KEY AUTOINCREMENT,
      created_at TEXT NOT NULL DEFAULT (datetime('now', 'localtime')),
      total_amount REAL NOT NULL CHECK(total_amount >= 0)
    );
  `);

  // 🆕 Tạo bảng chi tiết đơn hàng
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS order_items(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      order_id INTEGER NOT NULL,
      product_id TEXT NOT NULL,
      qty INTEGER NOT NULL CHECK(qty > 0),
      price REAL NOT NULL CHECK(price >= 0),
      FOREIGN KEY(order_id) REFERENCES orders(order_id),
      FOREIGN KEY(product_id) REFERENCES products(product_id)
    );
  `);

  // Insert dữ liệu mẫu nếu rỗng
  const count = await db.getFirstAsync<{ count: number }>(
    "SELECT COUNT(*) as count FROM products"
  );

  if (count?.count === 0) {
    await db.execAsync(`
      INSERT INTO products (product_id, name, price, stock) VALUES
      ('p1', 'Cà phê sữa', 30000, 10),
      ('p2', 'Trà đào', 25000, 8),
      ('p3', 'Bánh ngọt', 20000, 5);
    `);
  }
}
