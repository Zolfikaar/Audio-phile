<template>
  <div class="hero-section">
      <div class="wrapper">
        
        <!-- New Product -->
        <div class="product-box">

          <div class="product-info">
            <p class="new-product">New product</p>
            <h1 class="product-title">XX99 Mark II Headphones</h1>
            <p class="product-description">Experience natural, lifelike audio and exceptional build quality made for the
              passionate music enthusiast.</p>
            <button class="btn1"><a href="#">See Product</a></button>
          </div>

          <div class="product-image">
            <img src="@/assets/home/desktop/image-hero.jpg" alt="image hero">
          </div>

        </div>

      </div>
    </div>
</template>

<style scoped>
.hero-section{
  position: relative;
  background-color: var(--second-black);
  padding: 20px 0;
  color: white;
  height: 100vh;
}
.product-box{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.product-box .product-info{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
}
.product-box .product-info .new-product{
  text-transform: uppercase;
  letter-spacing: 10px;
  font-size: 14px;
  opacity: 50%;
  margin-bottom: 20px;
}
.product-box .product-info .product-title{
  text-transform: uppercase;
  font-weight: bold;
  font-size: 58px;
  letter-spacing: 2px;
  line-height: 60px;
}
.product-box .product-info .product-description{
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  opacity: 75%;
  width: 350px;
  margin: 20px 0 30px 0;
}
.product-box .product-info button{border: none;}
.product-box .product-info button a{
  text-transform: uppercase;
  color: white;
  text-decoration: none;
}
.product-box .product-image img{
  width: 100%;
  height: 595px;
  object-fit: cover;
}
</style>