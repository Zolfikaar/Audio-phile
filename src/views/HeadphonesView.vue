<script setup>
import CategoriesComp from '@/components/shared/CategoriesComp.vue'
import BestGearComp from '@/components/Shared/BestGearComp.vue'
import { onMounted,ref } from 'vue'

const props = defineProps({
  headphonesData: {
    type: Object
  }
})

onMounted(async() => {
  console.log(props.headphonesData);
})

</script>
<template>
  <div class="headphones">

    <div v-for="product in props.headphonesData" :key="product">

      <div>
        <h1>{{ product.name }}</h1>
      </div>
    </div>
    
           
    <CategoriesComp />

    <BestGearComp />


  </div>
</template>

<style>

</style>
