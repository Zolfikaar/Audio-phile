<script setup>
import HeroComp from '@/components/Home/HeroComp.vue'
import TopProductsComp from '@/components/Home/TopProductsComp.vue'
import CategoriesComp from '@/components/shared/CategoriesComp.vue'
import BestGearComp from '@/components/Shared/BestGearComp.vue'

</script>
<template>
  <section class="home">
    
    <HeroComp />
    
    <CategoriesComp />

    <TopProductsComp />

    <BestGearComp />

  </section>
</template>