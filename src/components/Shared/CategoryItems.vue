<script setup>
import {onMounted, ref,onBeforeUnmount} from 'vue'

import xx59Desktop from '/src/assets/product-xx59-headphones/desktop/image-category-page-preview.jpg'
import xx59Tablet from '/src/assets/product-xx59-headphones/tablet/image-category-page-preview.jpg'
import xx59Mobile from '/src/assets/product-xx59-headphones/mobile/image-category-page-preview.jpg'
import xx99mk1Desktop from '/src/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg'
import xx99mk1Tablet from '/src/assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg'
import xx99mk1Mobile from '/src/assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg'
import xx99mk2Desktop from '/src/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg'
import xx99mk2Tablet from '/src/assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg'
import xx99mk2Mobile from '/src/assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg'
import yx1Desktop from '/src/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg'
import yx1Tablet from '/src/assets/product-yx1-earphones/tablet/image-category-page-preview.jpg'
import yx1Mobile from '/src/assets/product-yx1-earphones/mobile/image-category-page-preview.jpg'
import zx7Desktop from '/src/assets/product-zx7-speaker/desktop/image-category-page-preview.jpg'
import zx7Tablet from '/src/assets/product-zx7-speaker/tablet/image-category-page-preview.jpg'
import zx7Mobile from '/src/assets/product-zx7-speaker/mobile/image-category-page-preview.jpg'
import zx9Desktop from '/src/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg'
import zx9Tablet from '/src/assets/product-zx9-speaker/tablet/image-category-page-preview.jpg'
import zx9Mobile from '/src/assets/product-zx9-speaker/mobile/image-category-page-preview.jpg'


const props = defineProps({
  categoryData: {
    type: Object,
    required: true
  },
  categoryName: {
    type: String,
    required: true
  }
})


const screenWidth = ref(window.innerWidth);

// Choose the appropriate image based on the screen width
const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener('resize', updateScreenWidth);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateScreenWidth);
});

const getProductImage = (index) => {
  
  const product = props.categoryData[index];

  // Check if product and categoryImage exist
  if (product && product.categoryImage) {
    
    const images = product.categoryImage;
  
    if (screenWidth.value >= 1024 && images?.desktop) {
      return '/src/' + images.desktop;
    }
    if (screenWidth.value >= 601 && screenWidth.value <= 1023 && images?.tablet) {
      return '/src/' + images.tablet;
    }
    if (screenWidth.value >= 350 && screenWidth.value <= 600 && images?.mobile) {
      return '/src/' + images.mobile;
    } 
  }
};
</script>

<template>
  <div class="category-content">

    <div class="category-header">
      <h1>{{ props.categoryName }}</h1>
    </div>

    <div class="wrapper">

      <div class="products" >

        <div class="product" v-for="product in props.categoryData" :key="product">

          <div class="product-image">
            <img :src="getProductImage(product)" alt="">
          </div>

          <div class="product-info">
            <span class="new overline" v-if="product.new">New Product</span>
            <h1>{{ product.name }}</h1>
            <p class="desc">{{ product.description }}</p>
            <router-link :to="'/product/' + product.slug"><button class="btn1">See Product</button></router-link>
          </div>
          
        </div>

      </div>

    </div>

  </div>
</template>


<style>
.category-content .category-header{
  height: 250px;
  text-align: center;
  background-color: var(--second-black);
  color: #fff;
}
.category-content .category-header h1{line-height: 250px;}
.category-content .products{
  display: flex;
  flex-direction: column;
}
.speaker .category-content .products{
  flex-direction: column-reverse !important;
}
.category-content .products .product{
  display: flex;
  margin-top: 100px;
}
.category-content .products .product:nth-child(even){flex-direction: row-reverse;}
.category-content .products .product .product-image img{
  background-size: cover;
  width: 540px;
  height: 560px;
}
.category-content .products .product .product-info{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 240px;
}
.category-content .products .product:nth-child(even) .product-info{
  margin-left: unset;
  margin-right: 240px;
}
.category-content .products .product .product-info .desc{
  margin: 30px  0;
  width: 100%;
}

/* ----------------------------------------------- */
/* ---------------- Media Queries ---------------- */
/* ----------------------------------------------- */


/* ----------- Mobile ----------- */
@media only screen and (min-width: 350px) and (max-width: 600px) { 
  .category-content .category-header h1{
    font-size: 28px;
    letter-spacing: 2px;
  }
  .category-content .products{flex-direction: column;}
  .category-content .products .product:nth-child(even),
  .category-content .products .product{
    flex-direction: column;
    align-items: center;
  }
  
  .category-content .products .product:nth-child(even) .product-info,
  .category-content .products .product .product-info{
    align-items: center;
    margin: 40px 0 0 0;
    text-align: center;
  }
  .category-content .products .product .product-info h1{
    font-size: 28px;
    letter-spacing: 1px;
  }
}

/* ----------- Tablet ----------- */
@media only screen and (min-width: 601px) and (max-width: 1024px) {
  .category-content .category-header h1{
    font-size: 40px;
    letter-spacing: 1.43px;
  }
  .category-content .products{flex-direction: column;}
  .category-content .products .product:nth-child(even),
  .category-content .products .product{
    flex-direction: column;
    align-items: center;
  }
  
  .category-content .products .product:nth-child(even) .product-info,
  .category-content .products .product .product-info{
    align-items: center;
    margin: 40px 90px 0 90px;
    text-align: center;
  }
}
</style>