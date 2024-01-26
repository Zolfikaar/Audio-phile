import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/headphones",
      name: "headphones",
      component: () => import("../views/HeadphonesView.vue"),
    },
    {
      path: "/speakers",
      name: "speakers",
      component: () => import("../views/SpeakersView.vue"),
    },
    {
      path: "/earphones",
      name: "earphones",
      component: () => import("../views/EarphonesView.vue"),
    },
    {
      path: "/product/:slug",
      name: "singleProduct",
      component: () => import("../views/singleProduct.vue"),
      props: true,
    },
    {
      path: "/checkout",
      name: "checkout",
      component: () => import("../views/CheckoutView.vue"),
    },
  ],
});

export default router;
