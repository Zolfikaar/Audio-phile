<script setup>
import { onMounted,ref } from 'vue'
import { useProductsStore } from '@/stores/productsStore'
import CategoriesComp from '@/components/shared/CategoriesComp.vue'
import BestGearComp from '@/components/Shared/BestGearComp.vue'
import CategoryItems from '@/components/Shared/CategoryItems.vue'

const headphonesData = ref(useProductsStore().headphones)
const categoryName = ref(useProductsStore().headphones[0].category)

onMounted(async  () => {
  useProductsStore().getProducts()
})

</script>
<template>
  <div class="headphones">

    <CategoryItems class="category" :categoryData="headphonesData" :categoryName="categoryName"/>

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
