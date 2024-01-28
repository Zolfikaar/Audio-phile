import { defineStore } from "pinia";
import axios from "axios";
import { onMounted, ref } from "vue";

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
      if (localStorage.getItem("products")) {
        this.products = JSON.parse(localStorage.getItem("products"));
      } else {
        // Check if 'data.json' file is available
        try {
          // let response = await axios.get('https://zolfikaar.github.io/live-project-name/data.json');
          let response = await axios.get("/data.json");

          this.products = response.data.products;
          localStorage.setItem("products", JSON.stringify(this.products));
        } catch (error) {
          // console.error("Error loading data:", error);
          return error;
        }
      }

      return this.products;
    },
  },
});
