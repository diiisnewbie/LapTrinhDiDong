import { db } from "./db";
import { Product } from "../models/types";

export async function getAllProducts(): Promise<Product[]> {
  const res = await db.getAllAsync<Product>("SELECT * FROM products");
  return res;
}
