<script setup>

</script>

<template>
  <div class="cart">
    <div class="cart-header">
      <h6>CART (3)</h6>
      <span>Remov All</span>
    </div>
    <div class="cart-items">
      <div class="cart-item">
        <div class="item-image">
          <img src="" alt="">
        </div>
        <div class="item-info">
          <span class="item-name">XX99 MK II</span>
          <span class="item-price">$2,999</span>
        </div>
        <div class="item-qty">
          <span class="minus">-</span>
          <span class="value">1</span>
          <span class="plus">+</span>
        </div>
      </div>
    </div>
    <div class="cart-total">
      <span>TOTAL</span>
      <span>$5,465</span>
    </div>
    <button class="btn1"><router-link to="">Checkout</router-link></button>
  </div>
</template>

<style>
.cart{
  width: 377px;
  height: 488px;
  border-radius: 10px;
  padding: 20px;
  background-color: #fff;
  position: absolute;
  top: 100px;
  right: 10%;
  z-index: 10;
}

.product .product-info .btns .item-qty{
  width: 96px;
  height: 32px;
  background-color: var(--light-gray);
  display: flex;
}
.product .product-info .btns .item-qty .minus,
.product .product-info .btns .item-qty .value,
.product .product-info .btns .item-qty .plus{
  width: 32px;
  height: 32px;
  line-height: 48px;
  text-align: center;
}
.product .product-info .btns .item-qty .minus:hover,
.product .product-info .btns .item-qty .plus:hover{color: var(--main-orang);cursor: pointer;}

</style>