<script setup>
import axios from 'axios'
import Cart from './components/Cart.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

import { onMounted,ref } from 'vue';

import { useProductsStore } from '@/stores/productsStore'
import { useCartStore } from '@/stores/cartStore'

const products = ref({})

onMounted(async  () => {
  useProductsStore().getProducts()

  products.value = useProductsStore().products


  // getProductsData()
})

// const getProductsData = async () => {
//   try {
//     let data = await useProductsStore().getProducts();
//     console.log(data);
//   } catch (error) {
//     console.error('Error fetching products:', error);
//   }
// }
// console.log(useProductsStore.getProducts);
// console.log(products.value);

// const props = defineProps({
//   filteredData: {
//     type: Object,
//     default: () => ({
//       headphonesData: [],
//       earphonesData: [],
//       speakersData: []
//     })
//   }
// });


// let allData = ref({})


// onMounted( async () => {
//   getAllData()

//   props.filteredData.headphonesData = allData.value.filter((item) => item.category == 'headphones')
//   props.filteredData.earphonesData = allData.value.filter((item) => item.category == 'earphones')
//   props.filteredData.speakersData = allData.value.filter((item) => item.category == 'speakers')

//   // console.log(cart);

//   // console.log(products);

//   useProductsStore.getProducts

// })

// const getAllData = async () => {
//   if(localStorage.getItem('products')){
//     allData.value = JSON.parse(localStorage.getItem('products'))
//   } else {
//       // Check if 'data.json' file is available
//       try {
//       // let response = await axios.get('https://zolfikaar.github.io/live-project-name/data.json');
//       let response = await axios.get('/data.json');

//       allData.value = response.data.products;
//       localStorage.setItem('products', JSON.stringify(allData.value));
//       if(!localStorage.getItem('cart')) {
//         localStorage.setItem('cart', JSON.stringify([]));
//       }

//     } catch (error) {
//       console.error("Error loading data:", error);
//     }
//   }
// }

</script>

<template>
  
  <Header />
  
  <Cart v-if="useCartStore().isOpen" />
  
  <div id="app-overlay" v-if="useCartStore().isOpen"></div>

  <!-- <RouterView 
  :allData="allData"
  :headphonesData="filteredData.headphonesData"
  :earphonesData="filteredData.earphonesData"
  :speakersData="filteredData.speakersData"/> -->
  
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