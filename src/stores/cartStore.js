import { reactive, readonly } from "vue";
import { defineStore } from "pinia";
// import productData from "@/assets/data.json";

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
  },
});
