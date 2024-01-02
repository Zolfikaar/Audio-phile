<template>

<div class="best-gear-section">
      <div class="wrapper">
        <div class="box">
          <div class="left-box">
            <h1>Bringing you the <span class="base-color">best</span> audio gear</h1>
            <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
          </div>
          <img src="@/assets/shared/desktop/image-best-gear.jpg" alt="">
        </div>
      </div>
    </div>
  
</template>

<style scoped>
.best-gear-section{margin: 150px 0;}
.best-gear-section .box{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.best-gear-section .left-box{width: 40%;}
.best-gear-section .left-box h1 {
  font-size: 40px;
  font-weight: bold;
  letter-spacing: 1.43px;
  line-height: 40px;
  margin-bottom: 30px;
  text-transform: uppercase;
}
.best-gear-section .left-box p {
  font-size: 15px;
  line-height: 25px;
  opacity: .5;
}
.best-gear-section .left-box h1 .base-color{color: var(--main-orang);}
.best-gear-section img{
  border-radius: 8px;
  width: 40%;
}
</style>