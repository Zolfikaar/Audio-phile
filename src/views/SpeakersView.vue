<script setup>
import { onMounted,ref } from 'vue'
import { useProductsStore } from '@/stores/productsStore'
import CategoriesComp from '@/components/shared/CategoriesComp.vue'
import BestGearComp from '@/components/Shared/BestGearComp.vue'
import CategoryItems from '@/components/Shared/CategoryItems.vue'


const speakersData = ref(useProductsStore().speakers)
const categoryName = ref(useProductsStore().headphones[0].category)

onMounted(async  () => {
  useProductsStore().getProducts()
})


</script>
<template>
  <div class="speaker">
      
    <CategoryItems class="category" :categoryData="speakersData" :categoryName="categoryName"/>
          
    <CategoriesComp />

    <BestGearComp />


  </div>
</template>