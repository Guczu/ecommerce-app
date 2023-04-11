import axios from "axios";
import { Product } from "../interfaces";

export default async function fetchAllProducts(): Promise<Product[]> {
    const products = await axios.get('https://ecommerce-app-server.vercel.app/products');
    return products.data;
}