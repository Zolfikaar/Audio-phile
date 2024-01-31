<template>
  
  <div class="top-products">
      <div class="wrapper">
        <div class="top-products-box">
          <div class="box zx9">
            <div class="left-box image-box"></div>
            <div class="right-box">
              <h1>ZX9 SPEAKER</h1>
              <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
              <button class="btn4">See Product</button>
            </div>
          </div>
          <div class="box zx7">
            <div class="left-box">
              <h2>ZX7 SPEAKER</h2>
              <button class="btn2">See Product</button>
            </div>
            <div class="right-box image-box"></div>
          </div>
          <div class="box yx1">
            <div class="left-box image-box"></div>
            <div class="right-box">
                <h2>YX1 EARPHONES</h2>
                <button class="btn2">See Product</button>
            </div>
          </div>
        </div>
      </div>
    </div>

</template>

<style scoped>
.top-products .top-products-box .box{
  margin: 20px 0;
  width: 100%;
  border-radius: 8px;
}
.top-products .top-products-box .box.zx9{
  display: flex;
  justify-content: space-between;
  height: 560px;
  background-color: var(--main-orang);
  background-image: url(@/assets/home/desktop/pattern-circles.svg);
  overflow: hidden;
}
.top-products .top-products-box .box.zx9 .left-box.image-box{
  background-image: url('/src/assets/home/desktop/image-speaker-zx9.png');
  background-size: cover;
  width: 410px;
  height: 493px;
  position: relative;
  bottom: -80px;
  left: 100px;
}
.top-products .top-products-box .box.zx9 .right-box{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 40%;
}
.top-products .top-products-box .box.zx9 .right-box h1{
  color: white;
  width: 50%;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 58px;
  letter-spacing: 2px;
  line-height: 60px;
}
.top-products .top-products-box .box.zx9 .right-box p{
  color: white;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  opacity: 75%;
  width: 350px;
  margin: 20px 0 30px 0;
}
.top-products .top-products-box .box.zx9 .right-box button{border: none;}
.top-products .top-products-box .box.zx9 .right-box button a{
  text-transform: uppercase;
  color: white;
  text-decoration: none;
}
.top-products .top-products-box .box.zx7{position: relative;}
.top-products .top-products-box .box.zx7 .right-box.image-box{
  background-image: url('/src/assets/home/desktop/image-speaker-zx7.jpg');
  background-size: cover;
  border-radius: 8px;
  width: 100%;
  overflow: hidden;
}
.top-products .top-products-box .box.zx7 .left-box{
  position: absolute;
  top: 40%;
  left: 15%;
  transform: translate(-40%,-15%);
}
.top-products .top-products-box .box.zx7 .left-box h2,
.top-products .top-products-box .box.yx1 .right-box h2{
  margin-bottom: 20px;
  letter-spacing: 2px;
  font-size: 28px;
  font-weight: bold;
}
.top-products .top-products-box .box.yx1{
  display: flex;
  justify-content: space-between;
}
.top-products .top-products-box .box.yx1 .right-box{
  background-color: var(--light-gray);
  width: 100%;
  margin-left: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.top-products .top-products-box .box.yx1 .left-box.image-box{
  border-radius: 8px;
  background-image: url('/src/assets/home/desktop/image-earphones-yx1.jpg');
  background-size: cover;
}
.top-products .top-products-box .box.yx1 .right-box button{margin-left: -80px;}

/* ----------------------------------------------- */
/* ---------------- Media Queries ---------------- */
/* ----------------------------------------------- */


/* ----------- Mobile ----------- */
@media only screen and (min-width: 350px) and (max-width: 600px) { 
  .top-products .top-products-box .box.zx9{
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 600px;
    background-size: cover;
    background-position-x: center;
    background-position-y: top;
  }
  .top-products .top-products-box .box.zx9 .right-box{
    text-align: center;
    width: 100%;
    align-items: center;
  }
  .top-products .top-products-box .box.zx9 .left-box.image-box{
    background-image: url('/src/assets/home/mobile/image-speaker-zx9.png');
    width: 172px;
    height: 207px;
    bottom: unset;
    left: unset;
    margin-bottom: 0;
    
  }
  .top-products .top-products-box .box.zx9 .right-box h1{
    font-size: 36px;
    line-height: 40px;
    letter-spacing: 1.29px;
  }
  .top-products .top-products-box .box.zx9 .right-box p{padding: 0 20px;}

  .top-products .top-products-box .box.zx7 .right-box.image-box{
    background-image: url('/src/assets/home/mobile/image-speaker-zx7.jpg');
    height: 320px;
  }
  .top-products .top-products-box .box.zx7 .left-box{left: 30%;}
  .top-products .top-products-box .box.yx1{
    flex-direction: column;
  }
  .top-products .top-products-box .box.yx1 .left-box.image-box{
    width: 100%; 
    background-image: url('/src/assets/home/mobile/image-earphones-yx1.jpg');
    height: 200px;
    background-size: cover;
  }
  .top-products .top-products-box .box.yx1 .right-box{
    margin-left: unset; 
    width: 100%;
    height: 200px;
    margin-top: 20px;
  }
}

/* ----------- Tablet ----------- */
@media only screen and (min-width: 601px) and (max-width: 1024px) {
  .top-products .top-products-box .box.zx9{
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 670px;
    background-size: unset;
    background-position-x: center;
    background-position-y: bottom;
  }
  .top-products .top-products-box .box.zx9 .right-box{
    text-align: center;
    width: 100%;
    align-items: center;
  }
  .top-products .top-products-box .box.zx9 .left-box.image-box{
    background-image: url('/src/assets/home/tablet/image-speaker-zx9.png');
    width: 172px;
    height: 207px;
    bottom: unset;
    left: unset;
    margin-bottom: 50px;
  }
  .top-products .top-products-box .box.zx7 .right-box.image-box{
    background-image: url('/src/assets/home/tablet/image-speaker-zx7.jpg');
    height: 320px;
  }
  .top-products .top-products-box .box.zx7 .left-box{
    left: 23%;
  }
  .top-products .top-products-box .box.zx7,
  .top-products .top-products-box .box.yx1{
    height: 320px;
  }
  .top-products .top-products-box .box.yx1 .left-box.image-box{
    width: 50%; 
    background-image: url('/src/assets/home/tablet/image-earphones-yx1.jpg');
    height: 320px;
  }
  .top-products .top-products-box .box.yx1 .right-box{margin-left: 10px; width: 50%;}
}
</style>