<script setup>
import CategoriesComp from '@/components/shared/CategoriesComp.vue'
import BestGearComp from '@/components/Shared/BestGearComp.vue'

import { onMounted,ref } from 'vue'

const props = defineProps({
  earphonesData: {
    type: Object
  }
})

onMounted(async() => {
  console.log(props.earphonesData);
})

</script>
<template>
  <div class="earphones">
      
    <div v-for="product in props.earphonesData" :key="product">

    <div>
      <h1>{{ product.name }}</h1>
    </div>
    </div>
            
      <CategoriesComp />

      <BestGearComp />

  </div>
</template>