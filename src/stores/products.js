import { defineStore } from "pinia";
import axios from "axios";

export const useProductsStore = defineStore("products", {
  state: () => ({
    products: [],
  }),
  getters: {
    headphones(state) {
      return state.products
        .filter((product) => product.category === "headphones")
        .reverse();
    },

    earphones(state) {
      return state.products
        .filter((product) => product.category === "earphones")
        .reverse();
    },

    speakers(state) {
      return state.products.filter(
        (product) => product.category === "speakers"
      );
    },
  },
  actions: {
    async getProducts() {
      fetch("http://localhost:3000/products")
        .then((res) => res.json())
        .then((data) => (this.products = data))
        .catch((err) => console.log(err));
      // try {
      //   const data = await axios.get("http://localhost:3000/products");
      //   this.products = data.json();
      // } catch (error) {
      //   console.log(error);
      // }
    },
  },
  // mounted() {
  //   fetch("http://localhost:3000/products")
  //     .then((res) => res.json())
  //     .then((data) => (this.products = data))
  //     .catch((err) => console.log(err)),
  // }
});
