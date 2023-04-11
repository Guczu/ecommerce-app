import { Product, FiltersList } from "../interfaces";
import fetchAllProducts from "./fetchAllProducts";

export default async function applyFilters(filters: FiltersList): Promise<Product[]> {
    const fetchedProducts: Product[] = await fetchAllProducts();
    let filteredProducts = fetchedProducts;

    if(filters.price) {
        filteredProducts = fetchedProducts.filter(product => {
            if(filters.price) {
                return product.price >= filters.price[0] && product.price <= filters.price[1]
            } else {
                filteredProducts = filteredProducts;
            }
        });
    }

    if(filters.category && filters.category.length > 0) {
        filteredProducts = filteredProducts.filter(product => {
            if (filters.category && filters.category.some(category => product.category.includes(category))) {
                return true;
            } else {
                return false;
            }
        });
    }

    if(filters.color && filters.color.length > 0) {
        filteredProducts = filteredProducts.filter(product => {
            if (filters.color && filters.color.some(color => product.color.includes(color))) {
                return true;
            } else {
                return false;
            }
        });
    }

    if(filters.sortBy){
        switch (filters.sortBy) {
            case 'low-to-high':
                filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
                break;
            case 'high-to-low':
                filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
                break;
            default:
                filteredProducts = filteredProducts;
        }
    }

    return filteredProducts;
}