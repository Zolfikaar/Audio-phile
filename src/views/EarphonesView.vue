<script setup>
import { onMounted,ref } from 'vue'
import { useProductsStore } from '@/stores/productsStore'
import CategoriesComp from '@/components/shared/CategoriesComp.vue'
import BestGearComp from '@/components/Shared/BestGearComp.vue'
import CategoryItems from '@/components/Shared/CategoryItems.vue'


const earphonesData = ref(useProductsStore().earphones)
const categoryName = ref(useProductsStore().earphones[0].category)


onMounted(async  () => {
  useProductsStore().getProducts()
})

</script>
<template>
  <div class="earphones">    
      
      <CategoryItems class="category"  :categoryData="earphonesData" :categoryName="categoryName"/>
      
      <CategoriesComp />
      
      <BestGearComp />

  </div>
</template>