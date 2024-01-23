// import { reactive, readonly } from "vue";
import { defineStore } from "pinia";
import { onMounted, ref } from "vue";

export const useCartStore = defineStore("cart", {
  state: () => ({
    isOpen: false,
    cart: [],
  }),

  actions: {
    toggleCart() {
      this.isOpen = !this.isOpen;
    },

    emptyingTheCart() {
      this.cart = [];
    },

    addToCart(item, itemQty) {
      let itemData = this.prepareProductData(item, itemQty);

      let currentItemIndex = this.cart.findIndex(
        (ele) => ele.id === itemData.id
      );

      if (currentItemIndex === -1) {
        // Item not found in the cart, so add it
        this.cart.push(itemData);
        localStorage.setItem("cart", JSON.stringify(this.cart));
      } else {
        // Item found in the cart, update its quantity
        this.cart[currentItemIndex].quantity = itemQty;
        localStorage.setItem("cart", JSON.stringify(this.cart));
      }

      // console.log(itemData.name);
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
