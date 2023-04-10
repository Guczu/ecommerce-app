import { Product } from "../interfaces";

export default function addToCart(product: Product, quantity: number): Product[] {
    const cartItems: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
    const isInCart: boolean = cartItems.some((item) => item._id === product._id);

    const newCart: Product[] = isInCart ? (
      cartItems.map(alreadyInCartItem => {
        if(alreadyInCartItem._id === product._id) {
          return {...alreadyInCartItem, cartQuantity: alreadyInCartItem.cartQuantity + quantity}
        } else {
          return alreadyInCartItem;
        }
      })
      ) : (
        [...cartItems, {...product, cartQuantity: quantity}]
    );
    localStorage.setItem('cart', JSON.stringify(newCart));

    return newCart;
}