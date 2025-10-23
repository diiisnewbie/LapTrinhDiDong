import * as SQLite from "expo-sqlite";

export const db = SQLite.openDatabaseSync("shopping.db");

export async function initDb() {
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS products(
      product_id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      price REAL NOT NULL CHECK(price>=0),
      stock INTEGER NOT NULL CHECK(stock>=0)
    );
  `);

  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS cart_items(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      product_id TEXT NOT NULL,
      qty INTEGER NOT NULL CHECK(qty>0),
      UNIQUE(product_id),
      FOREIGN KEY(product_id) REFERENCES products(product_id)
    );
  `);

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
