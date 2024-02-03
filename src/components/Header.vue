<script setup>
import { useRoute } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import { useCartStore } from '@/stores/cartStore'
import Menu from '@/components/Menu.vue'

const route = useRoute();
// prevent shopping cart from showing at checkout page
const toggleCart = () => (route.name !== 'checkout' ? useCartStore().toggleCart() : undefined);
const toggleMenu = () => useCartStore().toggleMenu()
</script>
<template>
  <div class="topbar">

    <div class="wrapper">

      <nav>

        <Menu />
        
        <div class="nav-item logo">
          <div class="hamburger" @click="toggleMenu">
            <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="evenodd"><path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z"/></g></svg>
          </div>
          <RouterLink :to="{name: 'home'}"><img src="/src/assets/shared/desktop/logo.svg" alt=""></RouterLink>
        </div>

        <Navbar />
        
        <div class="nav-item cart-icon" @click="toggleCart">
          <img src="/src/assets/shared/desktop/icon-cart.svg" alt="Shopping Cart">
        </div>

      </nav>

    </div>
    
  </div>
</template>

<style scoped>
.topbar{
  width: 100%;
  margin: 0 auto;
  background-color: var(--second-black);
  z-index: 10;
}
.topbar nav{
  background-color: var(--second-black);
  padding: 25px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}
.cart-icon:hover{cursor: pointer;}
.topbar nav .hamburger{display: none;}

/* ----------------------------------------------- */
/* ---------------- Media Queries ---------------- */
/* ----------------------------------------------- */


/* ----------- Mobile ----------- */
@media only screen and (min-width: 350px) and (max-width: 600px) { 
  .topbar nav .nav-item{
    display: flex;
    align-items: center;
  }
  .topbar nav .navs{display: none;}
  .topbar nav .hamburger{display: inline-block;margin-right: 30px;}
}

/* ----------- Tablet ----------- */
@media only screen and (min-width: 601px) and (max-width: 1024px) {
  .topbar nav .nav-item{
    display: flex;
    align-items: center;
  }
  .topbar nav .navs{display: none;}
  .topbar nav .hamburger{display: inline-block;margin-right: 30px;}
  .topbar nav .hamburger:hover{cursor: pointer;}
}
</style>