import { Product } from "../interfaces";

export default function handleFavourites(product: Product) {
    const favouriteItems: Product[] = JSON.parse(localStorage.getItem('favourites') || '[]');
    const isInFavourites: boolean = favouriteItems.some((item) => item._id === product._id);
    let newFavourites: Product[];

    if(!isInFavourites) {
      newFavourites = [...favouriteItems, product];
    } else {
      newFavourites = favouriteItems.map(alreadyFavouriteItem => {
        if(alreadyFavouriteItem._id === product._id) {
          return {...alreadyFavouriteItem, cartQuantity: -1};
        } else {
          return alreadyFavouriteItem;
        }
      }).filter(item => item.cartQuantity !== -1);
    }
    localStorage.setItem('favourites', JSON.stringify(newFavourites));
}