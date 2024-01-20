// import { reactive, readonly } from "vue";
import { defineStore } from "pinia";
import { onMounted, ref } from "vue";

export const useCartStore = defineStore("cart", {
  state: () => ({
    isOpen: false,
    cart: [], // JSON.parse(localStorage.getItem('cart'))

    cartCount: ref(0),
  }),

  actions: {
    toggleCart() {
      this.isOpen = !this.isOpen;
    },

    emptyingTheCart() {
      // this.cart = [];
    },

    addToCart() {
      console.log("log from store");
      this.cartCount++;
      console.log(this.cartCount);
    },
  },
});
