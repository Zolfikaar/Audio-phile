<script setup>
import CategoriesComp from '@/components/shared/CategoriesComp.vue'
import BestGearComp from '@/components/Shared/BestGearComp.vue'
import CategoryItems from '../components/Shared/CategoryItems.vue'

import { onMounted,ref } from 'vue'

// const props = defineProps({
//   earphonesData: {
//     type: Object
//   }
// })

onMounted(async() => {
  // console.log(props.earphonesData);
})

</script>
<template>
  <div class="earphones">    
      
      <!-- <CategoryItems :categoryData="props.earphonesData"/> -->
      <CategoryItems />
      
      <CategoriesComp />
      
      <BestGearComp />

  </div>
</template>