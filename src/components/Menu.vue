<script setup>
import { useCartStore } from '@/stores/cartStore'
import headphoneThumb from '@/assets/shared/desktop/image-category-thumbnail-headphones.png'
import speakersThumb from '@/assets/shared/desktop/image-category-thumbnail-speakers.png'
import earphonesThumb from '@/assets/shared/desktop/image-category-thumbnail-earphones.png'
</script>

<template>
  <div class="menu" v-if="useCartStore().menuOpen">
    <div class="categories-section">

      <div class="category-boxes">

        <router-link :to="{name: 'headphones'}">
          <div class="category-box">
              <img :src="headphoneThumb" alt="headphones category">
              <h4 class="category-title">Headphones</h4>
              <button class="btn3">Shop <span class="arrow">></span></button>
          </div>
        </router-link>

        <RouterLink :to="{name: 'speakers'}">
          <div class="category-box">
            <img :src="speakersThumb" alt="speakers category">
            <h4 class="category-title">Speakers</h4>
            <button class="btn3">Shop <span class="arrow">></span></button>
          </div>
        </RouterLink>

        <RouterLink :to="{name: 'earphones'}">
          <div class="category-box">
            <img :src="earphonesThumb" alt="earphones category">
            <h4 class="category-title">Earphones</h4>
            <button class="btn3">Shop <span class="arrow">></span></button>
          </div>
        </RouterLink>
      </div>

    </div>
  </div>
</template>


<style scoped>
.menu{
  position: absolute;
  top: 0;
  left: 0;
  background-color: #fff;
  height: 340px;
  width: 100%;
  margin: 100px 0;
  padding: 0 50px;
  z-index: 6;
}
.menu .categories-section{margin: 100px 0;}
.menu .categories-section .category-boxes{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 284px;
  position: relative;
}
.menu .categories-section .category-boxes a{
  text-decoration: unset;
  color: unset;
}
.menu .categories-section .category-boxes .category-box{
  width: 350px;
  height: 204px;
  background-color: var(--light-gray);
  border-radius: 8px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.menu .categories-section .category-boxes .category-box img{
  width: 180px;
  height: 160px;
  position: absolute;
  top: -10px;
}
.menu .categories-section .category-boxes .category-box h4{
  margin: 50px 0 10px 0;
  text-transform: uppercase;
}
.menu .categories-section .category-boxes .category-box button .arrow{
  font-size: 16px;
  font-weight: bold;
}
.menu .categories-section .category-boxes a:hover .category-box button {color: var(--main-orang);}

/* ----------------------------------------------- */
/* ---------------- Media Queries ---------------- */
/* ----------------------------------------------- */


/* ----------- Mobile ----------- */
@media only screen and (min-width: 350px) and (max-width: 600px) { 
  .menu{
    height: 850px;
  }
  .menu .categories-section{height: 690px;}
  .menu .categories-section .category-boxes{
    flex-direction: column;
  }
  .menu .categories-section .category-boxes a{margin-bottom: 100px;}
  .menu .categories-section .category-boxes .category-box{position: relative;}
  .menu .categories-section .category-boxes .category-box img{top: unset;}
  .menu .categories-section .category-boxes a:first-child .category-box img,
  .menu .categories-section .category-boxes a:nth-child(2) .category-box img,
  .menu .categories-section .category-boxes a:last-child .category-box img{top: -60px;}

  .menu .categories-section .category-boxes .category-box{
    height: 165px;
  }
  .menu .categories-section .category-boxes .category-box .category-title{
    font-size: 15px;
    margin-bottom: unset;
    letter-spacing: 1.07px;
  }
}

/* ----------- Tablet ----------- */
@media only screen and (min-width: 601px) and (max-width: 1024px) {

  .menu .categories-section .category-boxes .category-box{
    width: 223px;
    height: 165px;
  }
  .menu .categories-section .category-boxes .category-box .category-title{
    font-size: 15px;
    margin-bottom: unset;
    letter-spacing: 1.07px;
  }
}
</style>