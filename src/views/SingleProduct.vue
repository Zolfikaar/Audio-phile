<script setup>
import { ref, onMounted, onBeforeUnmount, defineProps } from 'vue';
import { useProductsStore } from '@/stores/productsStore';
import { useCartStore } from '@/stores/cartStore';
import CategoriesComp from '@/components/shared/CategoriesComp.vue';
import BestGearComp from '@/components/Shared/BestGearComp.vue';

const products = ref(useProductsStore().products);
const cartStore = useCartStore();

const { slug } = defineProps(['slug']);

const product = ref({});
const productQuantity = ref(1);
const maxProductQuantity = ref(10);

onMounted( () => {
  let currentProduct = products.value.find((item) => item.slug === slug);
  product.value = currentProduct;

  window.addEventListener('resize', updateScreenWidth);

});


onBeforeUnmount(() => {
  window.removeEventListener('resize', updateScreenWidth);
});

const screenWidth = ref(window.innerWidth);

// Choose the appropriate image based on the screen width
const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth;
};

const getProductImage = (product) => {

  const images = product.categoryImage;

  if (screenWidth.value >= 1024 && images?.desktop) {
    // return '/src/' + images.desktop;
    return `${import.meta.env.BASE_URL}src/${images.desktop}`
  }
  if (screenWidth.value >= 601 && screenWidth.value <= 1023 && images?.tablet) {
    // return '/src/' + images.tablet;
    return `${import.meta.env.BASE_URL}src/${images.tablet}`
  }
  if (screenWidth.value >= 350 && screenWidth.value <= 600 && images?.mobile) {
    // return '/src/' + images.mobile;
    return `${import.meta.env.BASE_URL}src/${images.mobile}`
  } 
  
};

const incrementProductQuantity = () => {
  if (productQuantity.value < maxProductQuantity.value) {
    productQuantity.value++;
  }
};

const decrementProductQuantity = () => {
  if (productQuantity.value > 1) {
    productQuantity.value--;
  }
};

const addToCart = cartStore.addToCart;
</script>


<template>

<div class="wrapper">
  <a class="backBtn-anchor" @click="$router.go(-1)">
    <span class="backBtn">Go Back</span>
  </a>

  <div class="product" >

    <div class="product-image">
      <img :src="getProductImage(product) " alt="">
    </div>

    <div class="product-info">
      <span class="new overline" v-if="product.new">New Product</span>
      <h1>{{ product.name }}</h1>
      <p class="desc">{{ product.description }}</p>

      <h6 class="price">${{ product.price }}</h6>

      <div class="btns">
        <div class="qty-box">
          <span class="minus" @click="decrementProductQuantity">-</span>
          <span class="value">{{ productQuantity }}</span>
          <span class="plus" @click="incrementProductQuantity">+</span>
        </div>
        
        <button class="btn1" @click="addToCart(product, productQuantity)"><a>Add To Cart</a></button>
      </div>
    </div>
    
  </div>

  <div class="features">
    <div class="features-box">
      <h3>features</h3>
      <p>{{ product.features }}</p>
    </div>
    <div class="in-the-box">
      <h3>In the Box</h3>
      <div class="box-items">
        <div class="box-item" v-for="item in product.includes" :key="item">
          <span class="item-count">{{ item.quantity }}x</span>
          <span class="item-name">{{ item.item }}</span>
        </div>
      </div>
    </div>
  </div>

  <div class="gallery">
    <div class="small">
      <div class="first">
        <img :src="'/src/' + product.gallery?.first.desktop" alt="">
      </div>
      <div class="second">
        <img :src="'/src/' + product.gallery?.second.desktop" alt="">
      </div>
    </div>
    <div class="big">
      <div class="third">
        <img :src="'/src/' + product.gallery?.third.desktop" alt="">
      </div>
    </div>
  </div>

  <div class="other-products">
    <h3>You May also like</h3>
    <div class="items">
      <div class="item" v-for="item in product.others" :key="item">
        <div class="item-image">
          <img :src="'/src/' + item.image?.desktop" alt="">
        </div>
        <h5>{{ item.name }}</h5>
        <button class="btn1" @click="$router.go()"><router-link :to="'/product/' + item.slug">See Product</router-link></button>
      </div>
    </div>
  </div>

  
</div>

<CategoriesComp />

<BestGearComp />
</template>

<style>
.backBtn-anchor{display: block; padding-top: 50px;}
span.backBtn:hover{cursor: pointer;color: var(--main-orang);}
.product{
  display: flex;
  margin: 50px 0;
}
.product .product-image img{
  background-size: cover;
  width: 540px;
  height: 560px;
}
.product .product-info{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 240px;
}
.product .product-info .desc{
  margin: 30px  0;
  width: 100%;
}
.product .product-info .price{margin-bottom: 30px;}
.product .product-info .btns{display: flex;}
.product .product-info .btns .qty-box{
  width: 120px;
  height: 48px;
  margin-right: 20px;
  background-color: var(--light-gray);
  display: flex;
}
.product .product-info .btns .qty-box .minus,
.product .product-info .btns .qty-box .value,
.product .product-info .btns .qty-box .plus{
  width: 40px;
  height: 48px;
  line-height: 48px;
  text-align: center;
}
.product .product-info .btns .qty-box .minus:hover,
.product .product-info .btns .qty-box .plus:hover{color: var(--main-orang);cursor: pointer;}

/* ==================================================== */
/* ==================== Features ====================== */
/* ==================================================== */
.features{
  margin: 100px 0;
  display: flex;
  justify-content: space-between;
}
.features .features-box{width: 635px;}
.features .in-the-box h3,
.features .features-box h3{margin-bottom: 30px;}
.features .features-box p{margin: 20px 0;}
.features .in-the-box{
  width: 350px;
  display: flex;
  flex-direction: column;
}
.features .in-the-box .box-items .box-item:not(:first-child){margin: 5px 0;}
.features .in-the-box .box-items .box-item .item-count {color: var(--main-orang); margin-right: 20px; font-weight: bold;}
/* ==================================================== */
/* ==================== Gallery ====================== */
/* ==================================================== */
.gallery{
  display: flex;
  justify-content: space-between;
  margin-bottom: 100px;
}
.gallery .small{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.gallery .small .first,
.gallery .small .second{
  width: 445px;
  height: 280px;
}
.gallery .small .first img,
.gallery .small .second img{
  background-size: cover;
  border-radius: 10px;
}
.gallery .big .third{
  width: 635px;
  height: 592px;
}
.gallery .big .third img{background-size: cover;border-radius: 10px;}
/* ==================================================== */
/* ==================== other Products ====================== */
/* ==================================================== */
.other-products{margin: 150px 0;}
.other-products h3{text-transform: uppercase;margin: 50px 0; text-align: center;}
.other-products .items{
  display: flex;
  justify-content: space-between;
}
.other-products .items .item{
  width: 350px;
  height: 470px;
}
.other-products .items .item h5{text-transform: uppercase;margin: 30px 0;text-align: center;}
.other-products .items .item .item-image{
  width: 350px;
  height: 318px;
}
.other-products .items .item .item-image img{
  background-size: cover;
  border-radius: 10px;
  width: 100%;
}
.other-products .items .item button{display: block; margin: 0 auto;}

/* ----------------------------------------------- */
/* ---------------- Media Queries ---------------- */
/* ----------------------------------------------- */


/* ----------- Mobile ----------- */
@media only screen and (min-width: 350px) and (max-width: 600px) { 
  .product{flex-direction: column;}
  .product .product-image img{
    width: 100%;
    height: 327px;
  }
  .product .product-info{margin-left: unset;}
  .product .product-info h1{
    font-size: 28px;
    letter-spacing: 1px;
    line-height: normal;
  }
  .features{flex-direction: column;}
  .features .features-box{width: 100%}
  .features .in-the-box{width: 100%;margin-top: 50px;}
  .gallery{flex-direction: column;}
  .gallery .small .first, .gallery .small .second,
  .gallery .small .first img, .gallery .small .second img{
    width: 100%;
    height: 174px;
    margin-bottom: 20px;
  }
  .gallery .big .third,
  .gallery .big .third img{
    width: 100%;
    height: 368px;
  }
  .other-products .items{flex-direction: column;}
  .other-products .items .item{
    height: 265px;
    width: 100%;
    margin-bottom: 60px;
  }
  .other-products .items .item .item-image{width: 100%;height: unset;}
  .other-products .items .item .item-image img{
    height: 120px;
  }
}

/* ----------- Tablet ----------- */
@media only screen and (min-width: 601px) and (max-width: 1024px) {
  .product .product-image img{
    width: 280px;
    height: 480px;
  }
  .product .product-info{margin-left: 40px;}
  .features{flex-direction: column;}
  .features .in-the-box{width: 100%;margin-top: 50px; flex-direction: row;justify-content: space-between;}
  .features .in-the-box .box-items{margin-right: 100px;}
  .gallery .small .first, .gallery .small .second,
  .gallery .small .first img, .gallery .small .second img{
    width: 277px;
    height: 174px;
  }
  .gallery .big .third,
  .gallery .big .third img{
    width: 395px;
    height: 368px;
  }
  .other-products .items .item{height: 471;width: 223px;}
  .other-products .items .item .item-image img{
    width: 223px;
    height: 318px;
  }
}
</style>