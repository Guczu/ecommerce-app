import { Product } from "../interfaces";

export default function addToCart(product: Product, quantity: number): Product[] {
    const cartItems: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
    const isInCart: boolean = cartItems.some((item) => item._id === product._id);

    const newCart: Product[] = isInCart ? (
      cartItems.map(item => {
        if(item._id === product._id) {
          return {...item, cartQuantity: item.cartQuantity + quantity}
        } else {
          return item;
        }
      })
      ) : (
        [...cartItems, {...product, cartQuantity: quantity}]
    );
    localStorage.setItem('cart', JSON.stringify(newCart));

    return newCart;
}