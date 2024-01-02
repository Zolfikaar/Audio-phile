<script>
import HeroComp from '@/components/Home/HeroComp.vue'
import CategoriesComp from '@/components/shared/CategoriesComp.vue'
import TopProductsComp from '@/components/Home/TopProductsComp.vue'
import BestGearComp from '@/components/Shared/BestGearComp.vue'

export default{
  components:{
    HeroComp,
    CategoriesComp,
    TopProductsComp,
    BestGearComp
  }
}
</script>
<template>
  <section class="home">
    
    <HeroComp />
    
    <CategoriesComp />

    <TopProductsComp />

    <BestGearComp />

  </section>
</template>