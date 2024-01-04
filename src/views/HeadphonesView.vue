<script setup>
import CategoriesComp from '@/components/shared/CategoriesComp.vue'
import BestGearComp from '@/components/Shared/BestGearComp.vue'
import CategoryItems from '../components/Shared/CategoryItems.vue'
import { onMounted,ref } from 'vue'

const props = defineProps({
  headphonesData: {
    type: Object
  }
})

onMounted(async() => {
  // console.log(props.headphonesData);
})

</script>
<template>
  <div class="headphones">

    <CategoryItems class="category" :categoryData="props.headphonesData"/>
           
    <CategoriesComp />

    <BestGearComp />


  </div>
</template>

<style>
.category .category-content .products .product{
  display: flex;
  margin-top: 100px;
}
.category .category-content .products .product:nth-child(even){
  flex-direction: row-reverse;
}
</style>
