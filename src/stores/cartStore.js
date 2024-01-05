import { reactive, readonly } from "vue";
import { defineStore } from "pinia";
// import productData from "@/assets/data.json";

export const useCartStore = defineStore("cart", () => {
  const state = reactive({
    isOpen: false,
  });

  const methods = {
    openCart() {
      state.isOpen = true;
      console.log("work from stor [openCart] function");
    },
    closeCart() {
      state.isOpen = false;
      console.log("work from stor [closeCart] function");
    },

    toggleCart() {
      state.isOpen = !state.isOpen;
      console.log("working from stor [toggleCart] function");
      console.log(state.isOpen);
    },
  };

  const toggleCart = () => {
    state.isOpen = !state.isOpen;
    console.log("working from stor [toggleCart] function");
    console.log(state.isOpen);
  };

  return { state, methods, toggleCart };
});

// export default {
//   state: readonly(state),
//   ...methods,
// };
