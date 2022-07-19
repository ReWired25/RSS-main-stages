import { Iproduct } from '../types/interfaces';
import LocalStorage from './local-storage-export';

export class CartMethods {
  static cart: HTMLParagraphElement;
  static counter = 0;
  static productsInCart: string[][] = [];

  static cartService(
    product: HTMLDivElement,
    cardButton: HTMLButtonElement,
    productObj: Iproduct,
    modalButton?: HTMLButtonElement
  ): void {
    if (!product.classList.contains('product-in-cart')) {
      CartMethods.counter++;
      CartMethods.cart.innerHTML = CartMethods.counter.toString();
      cardButton.innerHTML = 'remove from cart';
      if (modalButton) modalButton.innerHTML = 'remove from cart';

      CartMethods.productsInCart.push([productObj.Model, productObj.Package]);
      LocalStorage.add();

      product.classList.add('product-in-cart');
    } else {
      CartMethods.counter--;
      CartMethods.cart.innerHTML = CartMethods.counter.toString();
      cardButton.innerHTML = 'add to cart';
      if (modalButton) modalButton.innerHTML = 'add to cart';

      const currIndex = CartMethods.productsInCart.findIndex((item) => {
        if (item[0] === productObj.Model && item[1] === productObj.Package) {
          return true;
        }
      });
      CartMethods.productsInCart.splice(currIndex, 1);
      LocalStorage.add();

      product.classList.remove('product-in-cart');
    }
  }
}