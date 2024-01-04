<script setup>
import CategoriesComp from '@/components/shared/CategoriesComp.vue'
import BestGearComp from '@/components/Shared/BestGearComp.vue'
import CategoryItems from '../components/Shared/CategoryItems.vue'

import { onMounted,ref } from 'vue'

const props = defineProps({
  speakersData: {
    type: Object
  }
})

onMounted(async() => {
  // console.log(props.speakersData);
})


</script>
<template>
  <div class="speaker">
      
    <CategoryItems :categoryData="props.speakersData"/>
          
    <CategoriesComp />

    <BestGearComp />


  </div>
</template>