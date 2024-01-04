<template>

<div class="categories-section">
      <div class="wrapper">
        <div class="category-boxes">

          <router-link :to="{name: 'headphones'}">
            <div class="category-box">
                <img src="@/assets/shared/desktop/image-category-thumbnail-headphones.png" alt="headphones category">
                <h4 class="category-title">Headphones</h4>
                <button class="btn3">Shop <span class="arrow">></span></button>
            </div>
          </router-link>

          <RouterLink :to="{name: 'speakers'}">
            <div class="category-box">
              <img src="@/assets/shared/desktop/image-category-thumbnail-speakers.png" alt="speakers category">
              <h4 class="category-title">Speakers</h4>
              <button class="btn3">Shop <span class="arrow">></span></button>
            </div>
          </RouterLink>

          <RouterLink :to="{name: 'earphones'}">
            <div class="category-box">
              <img src="@/assets/shared/desktop/image-category-thumbnail-earphones.png" alt="earphones category">
              <h4 class="category-title">Earphones</h4>
              <button class="btn3">Shop <span class="arrow">></span></button>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  
</template>

<style scoped>
.categories-section{
  margin: 100px 0;
  
}
.categories-section .category-boxes{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 284px;
  position: relative;
}
.categories-section .category-boxes a{
  text-decoration: unset;
  color: unset;
}
.categories-section .category-boxes .category-box{
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
.categories-section .category-boxes .category-box img{
  width: 180px;
  height: 160px;
  position: absolute;
  top: -10px;
}
.categories-section .category-boxes .category-box h4{
  margin: 50px 0 10px 0;
  text-transform: uppercase;
}
.categories-section .category-boxes .category-box button .arrow{
  font-size: 16px;
  font-weight: bold;
}
.categories-section .category-boxes a:hover .category-box button {
  color: var(--main-orang);
}
</style>