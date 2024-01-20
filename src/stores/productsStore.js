import { defineStore } from "pinia";
import axios from "axios";
import productData from "../assets/data.json";

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
      console.log("products from store");
      console.log(productData);
      // fetch("http://localhost:3000/products")
      // .then((res) => res.json())
      // .then((data) => (this.products = data))
      // .catch((err) => console.log(err));
      // try {
      //   const data = await axios.get("http://localhost:3000/products");
      //   this.products = data.json();
      // } catch (error) {
      //   console.log(error);
      // }
      // if (localStorage.getItem("products")) {
      //   this.products = JSON.parse(localStorage.getItem("products"));
      // } else {
      //   // Check if 'data.json' file is available
      //   try {
      //     // let response = await axios.get('https://zolfikaar.github.io/live-project-name/data.json');
      //     let response = await axios.get("/src/assets/data.json");
      //     this.products = response.data.products;
      //     localStorage.setItem("products", JSON.stringify(this.products));
      //   } catch (error) {
      //     console.error("Error loading data:", error);
      //   }
      // }
    },
  },
});
