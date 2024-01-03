<script setup>
import CategoriesComp from '@/components/shared/CategoriesComp.vue'
import BestGearComp from '@/components/Shared/BestGearComp.vue'

import { onMounted,ref } from 'vue'

const props = defineProps({
  speakersData: {
    type: Object
  }
})

onMounted(async() => {
  console.log(props.speakersData);
})


</script>
<template>
  <div class="speaker">
      
    <div v-for="product in props.speakersData" :key="product">

      <div>
        <h1>{{ product.name }}</h1>
      </div>
    </div>
            
      <CategoriesComp />

      <BestGearComp />


  </div>
</template>