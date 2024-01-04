<script setup>
import { RouterView } from 'vue-router'

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

import { onMounted,ref } from 'vue'
import axios from 'axios'

const props = defineProps({
  filteredData: {
    type: Object,
    default: () => ({
      headphonesData: [],
      earphonesData: [],
      speakersData: []
    })
  }
});


let allData = ref({})
let theDataExist = false


onMounted( async () => {
  getAllData()

  props.filteredData.headphonesData = allData.value.filter((item) => item.category == 'headphones')
  props.filteredData.earphonesData = allData.value.filter((item) => item.category == 'earphones')
  props.filteredData.speakersData = allData.value.filter((item) => item.category == 'speakers')

})

const getAllData = async () => {
  if(localStorage.getItem('products')){
    allData.value = JSON.parse(localStorage.getItem('products'))
  } else {
      // Check if 'data.json' file is available
      try {
      // let response = await axios.get('https://zolfikaar.github.io/live-project-name/data.json');
      let response = await axios.get('/data.json');

      allData.value = response.data.products;
      localStorage.setItem('products', JSON.stringify(allData.value));
    } catch (error) {

      console.error("Error loading data:", error);

      theDataExist = false
    }
  }
}

</script>

<template>
  
  <Header />
    
    <RouterView 
    :allData="allData"
    :headphonesData="filteredData.headphonesData"
    :earphonesData="filteredData.earphonesData"
    :speakersData="filteredData.speakersData"/>
    
    
  <Footer />

</template>