<script setup>
import HeroComp from '@/components/Home/HeroComp.vue'
import CategoriesComp from '@/components/shared/CategoriesComp.vue'
import TopProductsComp from '@/components/Home/TopProductsComp.vue'
import BestGearComp from '@/components/Shared/BestGearComp.vue'

// import { onMounted,ref } from 'vue'
// import axios from 'axios'

// const props = defineProps(['headphonesData','earphonesData','speakersData']);


// let allData = ref({})
// let theDataExist = false
// // let headphonesData = ref({})
// // let earphonesData = ref({})
// // let speakersData = ref({})


// onMounted( async () => {
//   getAllData()

//   // headphonesData.value = allData.value.filter((item) => item.category == 'headphones')
//   // earphonesData.value = allData.value.filter((item) => item.category == 'earphones')
//   // speakersData.value = allData.value.filter((item) => item.category == 'speakers')

//   props.headphonesData = allData.value.filter((item) => item.category == 'headphones')
//   props.earphonesData = allData.value.filter((item) => item.category == 'earphones')
//   props.speakersData = allData.value.filter((item) => item.category == 'speakers')

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
//     } catch (error) {

//       console.error("Error loading data:", error);

//       theDataExist = false
//     }
//   }
// }

</script>
<template>
  <section class="home">
    
    <HeroComp />
    
    <CategoriesComp />

    <TopProductsComp />

    <BestGearComp />

  </section>
</template>