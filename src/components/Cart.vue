<script setup>
import {onMounted, ref} from 'vue'
import { useCartStore } from '@/stores/cartStore'

let cart = ref()
let cartLength = ref()
let cartTotal = ref()
const maxProductQuantity = ref(10)
const removeAllItems = useCartStore().emptyingTheCart

onMounted(async () => {
 cart.value = JSON.parse(localStorage.getItem('cart'))
 cartLength.value = await cart.value !== null ? cart.value.length : 0
 cartTotal.value = cart.value !== null ? cart.value.reduce((total, item) => total + item.price * item.quantity, 0) : 0

})

const decrementProductQuantity = (item) => {
  if(item.quantity > 1) {
    let currentItem = cart.value.filter((product) => product.id == item.id)[0];
    currentItem.quantity--
    localStorage.setItem('cart',JSON.stringify(cart.value))
  }

}
const incrementProductQuantity = (item) => {
  if(item.quantity < maxProductQuantity.value) {
    let currentItem = cart.value.filter((product) => product.id == item.id)[0];
    currentItem.quantity++
    localStorage.setItem('cart',JSON.stringify(cart.value))
  }
}
</script>

<template>

<div class="cart" :class="{'empty-cart': cartLength == 0}">
    <div class="cart-wrapper" v-if="cartLength > 0">
      <div>
        <div class="cart-header">
          <h6>CART ({{ cartLength }})</h6>
          <span class="remove-all" @click="removeAllItems">Remov All</span>
        </div>
        <div class="cart-items">
          <div class="cart-item" v-for="(item) in cart" :key="item">
            <div class="info-box">
              <div class="item-image">
                <img :src="'/src/' + item.image" alt="">
              </div>
              <div class="item-info">
                <span class="item-name">{{ item.name }}</span>
                <span class="item-price">${{ item.price }}</span>
              </div>
            </div>
            <div class="qty-box">
              <div class="item-qty">
                <span class="minus" @click="decrementProductQuantity(item)">-</span>
                <div class="value">{{ item.quantity }}</div>
                <span class="plus" @click="incrementProductQuantity(item)">+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="cart-total">
          <span>TOTAL</span>
          <span>${{ cartTotal }}</span>
        </div>
        <button class="btn1 checkout-btn"><router-link to="">Checkout</router-link></button>
      </div>
    </div>

    <div class="" v-else>
      <h3>Shopping Cart is Empty</h3>
    </div>

</div>

</template>

<style>
.cart{
  width: 377px;
  height: 488px;
  border-radius: 10px;
  padding: 35px;
  background-color: #fff;
  position: absolute;
  top: 100px;
  right: 10%;
  z-index: 10;
  overflow-x: hidden;
}
.cart-wrapper{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.cart-wrapper .cart-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.remove-all:hover{cursor: pointer;color: var(--main-orang);text-decoration: underline;}
.cart-wrapper .cart-items{margin: 30px 0;}
.cart-wrapper .cart-items .cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
}
.cart-wrapper .cart-items .cart-item .info-box{display: flex;align-items: center;}
.cart-wrapper .cart-items .cart-item .info-box .item-image{
  width: 64px;
  height: 64px;
  margin-right: 10px;
}
.cart-wrapper .cart-items .cart-item .info-box .item-image img{
  width: 64px;
  height: 64px;
  border-radius: 10px;
  background-size: cover;
}
.cart-wrapper .cart-items .cart-item .info-box .item-info .item-name,
.cart-wrapper .cart-items .cart-item .info-box .item-info .item-price{display: block;}
.cart-wrapper .cart-items .cart-item .info-box .item-info .item-name{font-weight: bold;font-size: 14px;}
.cart-wrapper .cart-items .cart-item .info-box .item-info .item-price{color: rgba(0, 0, 0,.5);font-size: 14px;}
.cart-wrapper .cart-total{
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.cart-wrapper .cart-total span:first-child{
  color: rgba(0, 0, 0,.5);
  font-size: 15px;
}
.cart-wrapper .cart-total span:nth-child(2){font-weight: bold;font-size: 18px;}
.cart-wrapper .checkout-btn{width: 100%;}
.cart-wrapper .cart-items .cart-item .qty-box .item-qty{
  width: 96px;
  height: 32px;
  background-color: var(--light-gray);
  display: flex;
}
.cart-wrapper .cart-items .cart-item .qty-box .item-qty .minus,
.cart-wrapper .cart-items .cart-item .qty-box .item-qty .value,
.cart-wrapper .cart-items .cart-item .qty-box .item-qty .plus{
  width: 32px;
  height: 32px;
  line-height: 32px;
  text-align: center;
}
.cart-wrapper .cart-items .cart-item .qty-box .item-qty .minus:hover,
.cart-wrapper .cart-items .cart-item .qty-box .item-qty .plus:hover{color: var(--main-orang);cursor: pointer;}
.cart.empty-cart{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>