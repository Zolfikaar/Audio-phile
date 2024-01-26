import { createRouter, createWebHistory } from "vue-router";
import { useCartStore } from "@/stores/cartStore";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/headphones",
      name: "headphones",
      component: () => import("@/views/HeadphonesView.vue"),
    },
    {
      path: "/speakers",
      name: "speakers",
      component: () => import("@/views/SpeakersView.vue"),
    },
    {
      path: "/earphones",
      name: "earphones",
      component: () => import("@/views/EarphonesView.vue"),
    },
    {
      path: "/product/:slug",
      name: "singleProduct",
      component: () => import("@/views/singleProduct.vue"),
      props: true,
    },
    {
      path: "/checkout",
      name: "checkout",
      component: () => import("@/views/CheckoutView.vue"),
      beforeEnter(to, from, next) {
        // hide shopping cart
        useCartStore().isOpen = false;
        // Apply the checkout-page class to the #app element
        document.getElementById("app").classList.add("checkout-page");
        next();
      },
      beforeLeave(to, from) {
        // Remove the checkout-page class when leaving the checkout page
        document.getElementById("app").classList.remove("checkout-page");
      },
    },
  ],
});

export default router;
