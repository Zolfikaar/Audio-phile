<script setup>
import Cart from './components/Cart.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

import { onMounted } from 'vue';
import { useProductsStore } from '@/stores/productsStore'
import { useCartStore } from '@/stores/cartStore'

onMounted(async () => useProductsStore().getProducts() )

</script>

<template>
  
  <Header />
  
  <Cart v-if="useCartStore().isOpen" />
  
  <div id="app-overlay" v-if="useCartStore().isOpen"></div>
  
  <RouterView />
  
  <Footer />

</template>

<style>
#app-overlay{
  background-color: rgba(0, 0, 0, .3);
  z-index: 5;
  position: absolute;
  width: 100%;
  height: 98%;
}
</style>