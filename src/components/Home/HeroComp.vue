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
              <router-link to="/product/xx99-mark-two-headphones"><button class="btn1">See Product</button></router-link>
          </div>

          <div class="product-image">
            <img src="/src/assets/home/desktop/image-hero.jpg" alt="">
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
.product-box .product-image{height: 595px;width: 100%;}
.product-box .product-image img{
  width: 100%;
  height: 595px;
  object-fit: cover;
}

/* ----------------------------------------------- */
/* ---------------- Media Queries ---------------- */
/* ----------------------------------------------- */


/* ----------- Mobile ----------- */
@media only screen and (min-width: 350px) and (max-width: 600px) { 
  /* .home .hero-section .wrapper{display: none;} */
  .hero-section{height: 620px;}
  .hero-section .product-box{
    position: relative;
    display: unset;
  }
  .hero-section .product-box .product-info{
    z-index: 3;
    position: relative;
    left: 50%;
    transform: translate(-50%,50%);
    width: 100%;
    text-align: center;
  }
  .hero-section .product-box .product-info .product-title{
    font-size: 36px;
    line-height: 40px;
    letter-spacing: 1.29px;
  }
  .hero-section .product-box .product-info .product-description{
    width: 100%;
    padding: 0 20px;
    margin-top: 50px;
    margin-bottom: 50px;
  }
  .hero-section .product-box .product-info button{align-self: center;}
  .hero-section .product-box .product-image{
    z-index: 1;
    position: relative;
    left: 50%;
    transform: translate(-50%,-60%);
  }

}

/* ----------- Tablet ----------- */
@media only screen and (min-width: 601px) and (max-width: 1024px) {
  .hero-section{height: unset;}
  .hero-section .product-box{
    position: relative;
    display: unset;
  }
  .hero-section .product-box .product-info{
    z-index: 3;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%,77%);
    width: 100%;
    text-align: center;
  }
  .hero-section .product-box .product-info .product-description{
    width: 100%;
    padding: 0 190px;
    margin-top: 50px;
    margin-bottom: 50px;
  }
  .hero-section .product-box .product-info button{align-self: center;}
  .hero-section .product-box .product-image{
    z-index: 1;
    position: relative;
    left: 50%;
    transform: translate(-50%,-74%);
  }
  .hero-section .product-box .product-image img{zoom: 1.4;}
  .product-box .product-image img{height: 730px;}
}
</style>