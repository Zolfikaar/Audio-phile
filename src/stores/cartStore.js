import { defineStore } from "pinia";
import { onMounted, ref } from "vue";

export const useCartStore = defineStore("cart", {
  state: () => ({
    menuOpen: false,
    isOpen: false,
    cart: [],
    productQuantity: null,
    maxProductQuantity: ref(10),
  }),

  actions: {
    toggleCart() {
      this.isOpen = !this.isOpen;
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },

    emptyingTheCart() {
      this.cart = [];
      localStorage.removeItem("cart");
      this.isOpen = false;
    },

    addToCart(item, itemQty) {
      let itemData = this.prepareProductData(item, itemQty);

      // Check if there is existing cart data in local storage
      let existingCart = JSON.parse(localStorage.getItem("cart")) || [];

      let currentItemIndex = existingCart.findIndex(
        (ele) => ele.id === itemData.id
      );

      if (currentItemIndex === -1) {
        // Item not found in the existing cart, add it
        existingCart.push(itemData);
      } else {
        // Item found in the existing cart, update its quantity
        existingCart[currentItemIndex].quantity += itemQty;
      }

      // Update the store's cart state
      this.cart = existingCart;

      // Update local storage
      localStorage.setItem("cart", JSON.stringify(existingCart));
    },

    prepareProductData(item, itemQty) {
      // trim product name from unnessery words for proper cart design
      let wordsToRemove = ["Headphones", "Speaker", "Wireless", "Earphones"];
      let trimedName = item.name;

      wordsToRemove.forEach((word) => {
        trimedName.includes(word);
        trimedName = trimedName.replace(word, "");
      });

      let itemData = {
        id: item.id,
        name: trimedName,
        price: item.price,
        image: item.image.mobile,
        quantity: itemQty,
      };

      return itemData;
    },
  },
});
