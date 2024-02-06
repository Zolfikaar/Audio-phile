<script setup>
import {ref,onMounted} from 'vue'
import { useRouter } from 'vue-router'

import iconCashOn from '@/components/icons/iconCashOn.vue'
import iconCheck from '@/components/icons/iconCheck.vue'

const router = useRouter()
let cart = ref([]);
let cartLength = ref()
let shortView = ref(true)
let total = ref(0);
let shipping = ref(50);
let vat = ref(0);
let grandTotal = ref(0);

onMounted(async () => {
  const storedCart = localStorage.getItem('cart');
  if (storedCart) {
    cart.value = JSON.parse(storedCart)
    cartLength.value = cart.value !== null ? cart.value.length : 0
    total.value = cart.value.reduce((acc, item) => acc + item.price * item.quantity, 0)
    // Calculate VAT based on 20% of the product total (excluding shipping)
    vat.value = Math.floor((total.value - shipping.value) * 0.2)
    grandTotal.value = total.value + shipping.value + vat.value
  }
})

let paymentSelected = ref('cash')
const changeSelectedPayment = (payment) => {
  if(payment == 'emoney'){
    paymentSelected.value = 'emoney'
  } else {
    paymentSelected.value = 'cash'
  }
}

let name = ref('')
let email = ref('')
let phone = ref('')
let address = ref('')
let zip = ref('')
let city = ref('')
let country = ref('')
let emoney_num = ref('')
let emoney_pin = ref('')

let emptyName = ref(false)
let shortName = ref(false)

let emptyEmail = ref(false)
let notValidEmail = ref(false)

let emptyPhoneNum = ref(false)
let shortPhoneNum = ref(false)

let emptyAddress = ref(false)
let emptyZipCode = ref(false)
let invalidZipCode = ref(false)
let emptyCity = ref(false)
let emptyCountry = ref(false)

let emptyEmoneyNum = ref(false)
let invalidEmoneyNum = ref(false)
let emptyEmoneyPin = ref(false)
let invalidEmoneyPin = ref(false)

let showModal = ref(false)
const handleCheckoutInfo = () => {

  let data = {
    name: name.value,
    email: email.value,
    phone: phone.value,
    address: address.value,
    zip: zip.value,
    city: city.value,
    country: country.value,
    emoney_num: emoney_num.value,
    emoney_pin: emoney_pin.value,
  }

  let validInfo = checkValidation(data)

  if(validInfo) {
    showModal.value = true
  }

}

function isValidEmail(email) {
  // Regular expression for a basic email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

const checkValidation = (data) => {
  let checkoutInfoValid = false

  let nameLength = data.name.toString().length
  let validName = false
  if(data.name === ''){
    emptyName.value = true
    shortName.value = false
  } else if (nameLength < 6) {
    shortName.value = true
    emptyName.value = false
  } else {
    emptyName.value = false
    shortName.value = false
    validName = true
  }

  let validEmail = false
  if(data.email === ''){
    emptyEmail.value = true
    notValidEmail.value = false
  } else if (!isValidEmail(data.email)) {
    notValidEmail.value = true
    emptyEmail.value = false
  } else {
    emptyName.value = false
    notValidEmail.value = false
    validEmail = true
  }
  
  let phoneNumberLength = data.phone.toString().length
  let vaildPhone = false
  if(data.phone === ''){
    emptyPhoneNum.value = true
    shortPhoneNum.value = false
  } else if(phoneNumberLength < 8) {
    shortPhoneNum.value = true
    emptyPhoneNum.value = false
  } else {
    emptyPhoneNum.value = false
    shortPhoneNum.value = false
    vaildPhone = true
  }

  let vaildAddress = false
  if(data.address === ''){
    emptyAddress.value = true
  } else {
    emptyAddress.value = false
    vaildAddress = true
  }

  let zipCodeLength = data.zip.toString().length
  let vaildZip = false
  if(data.zip === ''){
    emptyZipCode.value = true
    invalidZipCode.value = false
  } else if(zipCodeLength !== 5){
    invalidZipCode.value = true
    emptyZipCode.value = false
  } else {
    emptyZipCode.value = false
    invalidZipCode.value = false
    vaildZip = true
  }

  let validCity = false
  if(data.city === '') {
    emptyCity.value = true
  }else{
    emptyCity.value = false
    validCity = true
  }

  let validCountry = false
  if(data.country === '') {
    emptyCountry.value = true
  }else{
    emptyCountry.value = false
    validCountry = true
  }
  
  let EmoneyNumLength = data.emoney_num.toString().length
  let validEmNum = false
  if(data.emoney_num === ''){
    emptyEmoneyNum.value = true
    invalidEmoneyNum.value = false
  } else if(EmoneyNumLength !== 9){
    invalidEmoneyNum.value = true
    emptyEmoneyNum.value = false
  } else {
    emptyEmoneyNum.value = false
    invalidEmoneyNum.value = false
    validEmNum = true
  }

  let EmoneyPinLength = data.emoney_pin.toString().length
  let validEmpin = false
  if(data.emoney_pin === ''){
    emptyEmoneyPin.value = true
    invalidEmoneyPin.value = false
  } else if(EmoneyPinLength !== 4){
    invalidEmoneyPin.value = true
    emptyEmoneyPin.value = false
  } else {
    emptyEmoneyPin.value = false
    invalidEmoneyPin.value = false
    validEmpin = true
  }

  if (paymentSelected == 'emoney') {
    if(validName && validEmail && vaildPhone && vaildAddress && vaildZip && validCity && validCountry && validEmNum && validEmpin) {
      checkoutInfoValid = true
    } else {
      checkoutInfoValid = false
    }
  } else {
    if(validName && validEmail && vaildPhone && vaildAddress && vaildZip && validCity && validCountry) {
      checkoutInfoValid = true
    } else {
      checkoutInfoValid = false
    }
  }

  return checkoutInfoValid
}

const completeOrderGoHome = () => {
  localStorage.removeItem('cart')
  router.push({name:'home'})
}
</script>

<template>
  <div class="wrapper">

    <div class="checkout-page">
      <div class="checkout-header">
        <a class="backBtn-anchor" @click="$router.go(-1)">
        <span class="backBtn">Go Back</span>
        </a>
      </div>

      <div class="checkout-content">

        <div class="checkout-form">
          <h3>Checkout</h3>
          <form>

            <div class="form-group">
              <div class="group-title">Billing Details</div>
              <div class="group">
                <div class="group-item" :class="emptyName || shortName ? 'error-state' : ''">
                  <label>Name 
                    <span class="error" v-if="emptyName || shortName">{{ emptyName ? "Can't be empty" : (shortName ? "Name is too short" : '') }}</span>
                  </label>
                  <input type="text" placeholder="Alexei Ward" v-model="name">
                </div>
                <div class="group-item" :class="emptyEmail || notValidEmail ? 'error-state' : ''">
                  <label>Email Address
                    <span class="error" v-if="emptyEmail || notValidEmail">{{ emptyEmail ? "Can't be empty" : (notValidEmail ? "Wrong format" : '') }}</span>
                  </label>
                  <input type="email" placeholder="alexei@mail.com" v-model="email">
                </div>
                <div class="group-item" :class="emptyPhoneNum || shortPhoneNum ? 'error-state' : ''">
                  <label>Phone Number
                    <span class="error" v-if="emptyPhoneNum || shortPhoneNum">{{ emptyPhoneNum ? "Can't be empty" : (shortPhoneNum ? "phone number is too short" : '') }}</span>
                  </label>
                  <input type="number" placeholder="+1 202-555-0136" v-model="phone">
                </div>
              </div>
            </div>

            <div class="form-group">
              <div class="group-title">Shipping Info</div>
              <div class="group">
                <div class="group-item address" :class="emptyAddress ? 'error-state': ''">
                  <label>Address
                    <span class="error" v-if="emptyAddress">{{ emptyAddress ? "Can't be empty" : '' }}</span>
                  </label>
                  <input type="text" placeholder="1137 Williams Avenue" v-model="address">
                </div>
                <div class="group-item zip-code" :class="emptyZipCode || invalidZipCode ? 'error-state': ''">
                  <label>Zip Code
                    <span class="error" v-if="emptyZipCode || invalidZipCode">{{ emptyZipCode ? "Can't be empty" : (invalidZipCode ? "Invalid zip code" : '') }}</span>
                  </label>
                  <input type="number" placeholder="10001" v-model="zip">
                </div>
                <div class="group-item" :class="emptyCity ? 'error-state': ''">
                  <label>City
                    <span class="error" v-if="emptyCity">{{ emptyCity ? "Can't be empty" : '' }}</span>
                  </label>
                  <input type="text" placeholder="New York" v-model="city">
                </div>
                <div class="group-item" :class="emptyCountry ? 'error-state': ''">
                  <label>Country
                    <span class="error" v-if="emptyCountry">{{ emptyCountry ? "Can't be empty" : '' }}</span>
                  </label>
                  <input type="text" placeholder="United States" v-model="country">
                </div>
              </div>
            </div>

            <div class="form-group payment-details">
              <div class="group-title">payment details</div>
              <div class="group-item">
                <label>Payment Method</label>
                <div class="payment-options">
                  <div class="option" :class="paymentSelected == 'emoney' ? 'checked' : '' " @click="changeSelectedPayment('emoney')">
                    <span class="checkbox"></span>
                    <span>e-Money</span>
                  </div>
                  <div class="option" :class="paymentSelected == 'cash' ? 'checked' : '' " @click="changeSelectedPayment('cash')">
                    <span class="checkbox"></span>
                    <span>Cash on Delivery</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="form-group emoney-info" v-if="paymentSelected == 'emoney'">
              <div class="group">
                <div class="group-item" :class="emptyEmoneyNum || invalidEmoneyNum ? 'error-state': ''">
                  <label>e-Money Number
                    <span class="error" v-if="emptyEmoneyNum || invalidEmoneyNum">{{ emptyEmoneyNum ? "Can't be empty" : (invalidEmoneyNum ? "Invalid number" : '') }}</span>
                  </label>
                  <input type="number" placeholder="238521993" v-model="emoney_num">
                </div>
                <div class="group-item" :class="emptyEmoneyPin || invalidEmoneyPin ? 'error-state': ''">
                  <label>e-Money Pin
                    <span class="error" v-if="emptyEmoneyPin || invalidEmoneyPin">{{ emptyEmoneyPin ? "Can't be empty" : (invalidEmoneyPin ? "Invalid pin" : '') }}</span>
                  </label>
                  <input type="number" placeholder="6891" v-model="emoney_pin">
                </div>
              </div>
            </div>
            
            <div class="form-group on-delivery-info" v-if="paymentSelected == 'cash'">
              <div class="icon">
                <iconCashOn />
              </div>
              <p>The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
            </div>

          </form>
        </div>

        <div class="cart-summary">
          <div class="cart">
            <div class="cart-wrapper">
              <div>
                <div class="cart-header">
                  <h6>Summary</h6>
                </div>
                <div class="cart-items">
                  <div class="cart-item" v-for="item in cart" :key="item">
                    <div class="info-box">
                      <div class="item-image">
                        <img :src="'.' + item.image" alt="">
                      </div>
                      <div class="item-info">
                        <span class="item-name">{{ item.name }}</span>
                        <span class="item-price">${{ item.price }}</span>
                      </div>
                    </div>
                    <div class="qty-box">
                      x{{ item.quantity }}
                    </div>
                  </div>
                </div>
              </div>

              <div class="totals">
                <div class="total">
                  <span>TOTAL</span>
                  <span>${{ total.toLocaleString() }}</span>
                </div>
                <div class="shipping">
                  <span>SHIPPING</span>
                  <span>${{ shipping }}</span>
                </div>
                <div class="vat">
                  <span>VAT(INCLUDED)</span>
                  <span>${{ vat.toLocaleString() }}</span>
                </div>
                <div class="grand-total">
                  <span>GRAND TOTAL</span>
                  <span>${{ grandTotal.toLocaleString() }}</span>
                </div>
                <button class="btn1 pay-btn" @click="handleCheckoutInfo">CONTINUE & PAY</button>
              </div>

            </div>

        </div>
        </div>

      </div>

    </div>

  </div>

  <div class="modal-wrapper" v-if="showModal">
    <div class="checkout-modal">
      <iconCheck />
      <h3>THANK YOU <br> FOR YOUR ORDER</h3>
      <p>You will receive an email confirmation shortly.</p>
      <div class="cart-box">
        <div class="left-side">

          <div class="cart-box-items" v-if="shortView">
            <div class="cart-box-item">
              <div class="item-info">
                <div class="item-other-info">
                  <div class="item-image">
                    <img :src="'.' + cart[0].image" alt="">
                  </div>
                  <div class="item-name-and-price">
                    <div class="item-name">{{ cart[0].name }}</div>
                    <div class="item-price">${{ cart[0].price.toLocaleString() }}</div>
                  </div>
                </div>
                <div class="item-quantity">x{{ cart[0].quantity }}</div>
              </div>
            </div>
          </div>

          <div class="cart-box-items" v-else>
            <div class="cart-box-item" v-for="item in cart" :key="item">
              <div class="item-info">
                <div class="item-other-info">
                  <div class="item-image">
                    <img :src="'.' + item.image" alt="">
                  </div>
                  <div class="item-name-and-price">
                    <div class="item-name">{{ item.name }}</div>
                    <div class="item-price">${{ item.price.toLocaleString() }}</div>
                  </div>
                </div>
                <div class="item-quantity">x{{ item.quantity }}</div>
              </div>
            </div>
          </div>

          <hr>

          <div class="cart-box-footer" :class="cartLength == 1 ? 'no-more-items' : ''" v-if="cartLength == 1">
            No other items
          </div>
          <div class="cart-box-footer" v-else-if="shortView" @click="shortView = !shortView">
            and {{ cartLength - 1 }} other item{{ cartLength - 1 > 1 ? 's' : '' }}
          </div>
          <div class="cart-box-footer" v-else @click="shortView = !shortView">
            View less
          </div>
          
        </div>
        <div class="right-side">
          <div>GRAND TOTAL</div>
          <div>$ {{ grandTotal.toLocaleString() }}</div>
        </div>
      </div>
      <button class="btn1" @click="completeOrderGoHome">BACK TO HOME</button>
    </div>
  </div>

</template>

<style>
/* ========================================================== */
/* ==================== Checkout Form ======================= */
/* ========================================================== */
#app.checkout-page{background-color: #f1f1f1 !important;}
.checkout-page .checkout-header{margin: 50px 0;}
.checkout-page .checkout-header .backBtn-anchor{padding-top: unset !important;}
.checkout-page .checkout-content{
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
}
.checkout-page .checkout-content .cart-summary,
.checkout-page .checkout-content .checkout-form{
  border-radius: 10px;
  background-color: white;
}
.checkout-page .checkout-content .checkout-form{
  margin-right: 30px;
  padding: 50px;
}
.checkout-page .checkout-content .checkout-form form .form-group:nth-child(2){margin: 30px 0;}
.checkout-page .checkout-content .checkout-form form .form-group .group-title{
  text-transform: uppercase;
  color: var(--main-orang);
  margin:  40px 0 15px 0;
  font-weight: bold;
}
.checkout-page .checkout-content .checkout-form form .form-group .group{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.checkout-page .checkout-content .checkout-form form .form-group .group .group-item:first-child{margin-right: 20px;}
.checkout-page .checkout-content .checkout-form form .form-group:nth-child(2) .group-item.address{width: 100%; margin-right: unset;}
.checkout-page .checkout-content .checkout-form form .form-group:nth-child(2) .group-item.zip-code{margin-right: 20px;}
.checkout-page .checkout-content .checkout-form form .form-group .group .group-item{
  width: 48%;
  margin-bottom: 20px;
}
.checkout-page .checkout-content .checkout-form form .form-group .group .group-item.error-state label{color: red;}
.checkout-page .checkout-content .checkout-form form .form-group .group .group-item.error-state input{
  border: unset;
  outline: 2px solid red;
}
.checkout-page .checkout-content .checkout-form form .form-group.payment-details .group-item label,
.checkout-page .checkout-content .checkout-form form .form-group .group .group-item label{
  display: block;
  font-weight: bold;
  font-size: 12px;
  letter-spacing: -.21px;
}
.checkout-page .checkout-content .checkout-form form .form-group .group .group-item label .error{
  color: red;
  font-weight: bold;
  font-size: 12px;
  float: right;
}
.checkout-page .checkout-content .checkout-form form .form-group .group .group-item input{
  border: 1px solid #cfcfcf;
  border-radius: 10px;
  height: 56px;
  width: 100%;
  padding: 0 20px;
}
.checkout-page .checkout-content .checkout-form form .form-group .group .group-item input:focus{
  outline: 1px solid var(--main-orang);
  border: unset;
}
.checkout-page .checkout-content .checkout-form form .form-group.payment-details{margin-bottom: 30px;}
.checkout-page .checkout-content .checkout-form form .form-group.payment-details .group-item{
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
}
.checkout-page .checkout-content .checkout-form form .form-group.payment-details .group-item .payment-options{width: 48%;}
.checkout-page .checkout-content .checkout-form form .form-group.payment-details .group-item .payment-options .option:first-child{margin-bottom: 20px;}
.checkout-page .checkout-content .checkout-form form .form-group.payment-details .group-item .payment-options .option {
  height: 56px;
  width: 100%;
  border-radius: 10px;
  border: 1px solid #cfcfcf;
  display: flex;
  align-items: center;
  padding-left: 20px;
  position: relative;
}
.checkout-page .checkout-content .checkout-form form .form-group.payment-details .group-item .payment-options .option:hover{
  cursor: pointer;
  border: 1px solid var(--main-orang);
}
.checkout-page .checkout-content .checkout-form form .form-group.payment-details .group-item .payment-options .option.checked{border: 1px solid var(--main-orang);}
.checkout-page .checkout-content .checkout-form form .form-group.payment-details .group-item .payment-options .option.checked .checkbox{border: 1px solid var(--main-orang);}
.checkout-page .checkout-content .checkout-form form .form-group.payment-details .group-item .payment-options .option .checkbox{
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #cfcfcf;
}
/* Create the indicator (the dot/circle - hidden when not checked) */
.checkout-page .checkout-content .checkout-form form .form-group.payment-details .group-item .payment-options .option .checkbox:after {
  content: "";
  position: absolute;
  display: none;
}
.checkout-page .checkout-content .checkout-form form .form-group.payment-details .group-item .payment-options .option.checked .checkbox:after {display: block;}
/* Style the indicator (dot/circle) */
.checkout-page .checkout-content .checkout-form form .form-group.payment-details .group-item .payment-options .option .checkbox:after{
  top: 22px;
  left: 34px;
  width: 12px;
  height: 11px;
  border-radius: 50%;
  background: var(--main-orang);
}
.checkout-page .checkout-content .checkout-form form .form-group.payment-details .group-item .payment-options .option span{
  font-weight: bold;
  font-size: 14px;
  letter-spacing: -.25px;
  margin-left: 10px;
}
.checkout-page .checkout-content .checkout-form form .form-group.on-delivery-info,
.checkout-page .checkout-content .checkout-form form .form-group.emoney-info{margin: 30px 0;}
.checkout-page .checkout-content .checkout-form form .form-group.on-delivery-info{display: flex;align-items: center;}
.checkout-page .checkout-content .checkout-form form .form-group.on-delivery-info p{margin-left: 20px;}
/* ========================================================== */
/* ==================== Cart Summary ======================== */
/* ========================================================== */
.cart-summary{height: fit-content;}
.cart-summary .cart{
  width: 377px;
  height: unset;
  border-radius: 10px;
  padding: 35px;
  background-color: #fff;
  position: unset;
  overflow-x: hidden;
}
.cart-summary .cart .cart-wrapper{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.cart-summary .cart .cart-wrapper .cart-items{margin: 30px 0;}
.cart-summary .cart .cart-wrapper .cart-items .cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
}
.cart-summary .cart .cart-wrapper .cart-items .cart-item .info-box{display: flex;align-items: center;}
.cart-summary .cart .cart-wrapper .cart-items .cart-item .info-box .item-image{
  width: 64px;
  height: 64px;
  margin-right: 10px;
}
.cart-summary .cart .cart-wrapper .cart-items .cart-item .info-box .item-image img{
  width: 64px;
  height: 64px;
  border-radius: 10px;
  background-size: cover;
}
.cart-summary .cart .cart-wrapper .cart-items .cart-item .info-box .item-info .item-name,
.cart-summary .cart .cart-wrapper .cart-items .cart-item .info-box .item-info .item-price{display: block;}
.cart-summary .cart .cart-wrapper .cart-items .cart-item .info-box .item-info .item-name{font-weight: bold;font-size: 14px;}
.cart-summary .cart .cart-wrapper .cart-items .cart-item .info-box .item-info .item-price{color: rgba(0, 0, 0,.5);font-size: 14px;}
.cart-summary .cart .cart-wrapper .totals .total,
.cart-summary .cart .cart-wrapper .totals .shipping,
.cart-summary .cart .cart-wrapper .totals .vat,
.cart-summary .cart .cart-wrapper .totals .grand-total{
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.cart-summary .cart .cart-wrapper .totals .total span:first-child,
.cart-summary .cart .cart-wrapper .totals .shipping span:first-child,
.cart-summary .cart .cart-wrapper .totals .vat span:first-child,
.cart-summary .cart .cart-wrapper .totals .grand-total span:first-child{
  color: rgba(0, 0, 0,.5);
  font-size: 15px;
}
.cart-summary .cart .cart-wrapper .totals .grand-total span:nth-child(2){color: var(--main-orang);}
.cart-summary .cart .cart-wrapper .totals .total span:nth-child(2){font-weight: bold;font-size: 18px;}
.cart-summary .cart .cart-wrapper .totals .shipping span:nth-child(2){font-weight: bold;font-size: 18px;}
.cart-summary .cart .cart-wrapper .totals .vat span:nth-child(2){font-weight: bold;font-size: 18px;}
.cart-summary .cart .cart-wrapper .totals .grand-total span:nth-child(2){font-weight: bold;font-size: 18px;}
.cart-summary .cart .cart-wrapper .pay-btn{width: 100%;}
/* ========================================================== */
/* ==================== Checkout Modal ======================== */
/* ========================================================== */
.modal-wrapper{
  position: absolute;
  top: 80px;
  left: 0;
  width: 100%;
  height:calc(100% - 80px);
  background-color: rgba(0, 0, 0,.5);
  z-index: 3;
}
.checkout-modal{
  position: relative;
  top: 5%;
  left: 50%;
  transform: translate(-50%, -5%);
  width: 540px;
  background-color: white;
  border-radius: 10px;
  z-index: 4;
  padding: 50px;
}
.checkout-modal h3{margin: 30px 0;}
.checkout-modal p{margin-bottom: 40px;}
.checkout-modal .cart-box{
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
}
.checkout-modal .cart-box .left-side{
  width: 60%;
  background-color: var(--light-gray);
  padding: 20px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
.checkout-modal .cart-box .left-side hr{border-color: rgba(0, 0, 0,.2);}
.checkout-modal .cart-box .left-side .cart-box-items .cart-box-item{margin: 10px;}
.checkout-modal .cart-box .left-side .cart-box-items .cart-box-item .item-info{
  display: flex;
  justify-content: space-between;
}
.checkout-modal .cart-box .left-side .cart-box-items .cart-box-item .item-info .item-other-info{
  display: flex;
  justify-content: space-between;
}
.checkout-modal .cart-box .left-side .cart-box-items .cart-box-item .item-info .item-image{margin-right: 25px;}
.checkout-modal .cart-box .left-side .cart-box-items .cart-box-item .item-info .item-image img{
  width: 50px;
  height: 50px;
  background-size: cover;
  background-repeat: no-repeat;
}
.checkout-modal .cart-box .left-side .cart-box-items .cart-box-item .item-info .item-name-and-price .item-name,
.checkout-modal .cart-box .left-side .cart-box-items .cart-box-item .item-info .item-name-and-price .item-price,
.checkout-modal .cart-box .left-side .cart-box-items .cart-box-item .item-info .item-quantity{
  font-weight: bold;
  line-height: 25px;
}
.checkout-modal .cart-box .left-side .cart-box-items .cart-box-item .item-info .item-name-and-price .item-name{font-size: 15px;}
.checkout-modal .cart-box .left-side .cart-box-items .cart-box-item .item-info .item-name-and-price .item-price{font-size: 14px;color: rgba(0, 0, 0,.5);}
.checkout-modal .cart-box .left-side .cart-box-items .cart-box-item .item-info .item-quantity{text-align: right;color: rgba(0, 0, 0,.5);}

.checkout-modal .cart-box .cart-box-footer{
  margin-top: 10px ;
  text-align: center;
  color: rgba(0, 0, 0,.5);
  font-size: 12px;
  letter-spacing: -.21px;
  font-weight: bold;
}
.checkout-modal .cart-box .cart-box-footer:hover{cursor: pointer;}
.checkout-modal .cart-box .cart-box-footer.no-more-items:hover{cursor: unset;}
.checkout-modal .cart-box .right-side{
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 20px;
  width: 40%;
  background-color: black;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: end;
}
.checkout-modal .cart-box .right-side div:first-child{
  font-size: 15px;
  font-weight: normal;
  color: rgba(255, 255, 255,.5);
  line-height: 25px;
  margin-bottom: 10px;
}
.checkout-modal .cart-box .right-side div:nth-child(2){
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 20px;
}
.checkout-modal button{width: 100%;}

/* ----------------------------------------------- */
/* ---------------- Media Queries ---------------- */
/* ----------------------------------------------- */


/* ----------- Mobile ----------- */
@media only screen and (min-width: 350px) and (max-width: 600px) { 
  .checkout-page .checkout-content {
    flex-direction: column;
  }
  .checkout-page .checkout-content .checkout-form {
    margin-right: unset;
    margin-bottom: 30px;
    padding: 30px 20px;
  }
  .checkout-page .checkout-content .checkout-form form .form-group .group {
    display: unset;
  }
  .checkout-page .checkout-content .checkout-form form .form-group .group .group-item{
    margin-right: unset;
    width: 100%;
  }
  .checkout-page .checkout-content .checkout-form form .form-group.payment-details .group-item {
    display: unset;
  }
  .checkout-page .checkout-content .checkout-form form .form-group.payment-details .group-item .payment-options {
    width: 100%;
  }
  .checkout-page .checkout-content .cart-summary .cart{
    width: 100%;
    padding: 30px 20px;
  }
}

/* ----------- Tablet ----------- */
@media only screen and (min-width: 601px) and (max-width: 1024px) {
  .checkout-page .checkout-content {
    flex-direction: column;
  }
  .checkout-page .checkout-content .checkout-form {
    margin-right: unset;
    margin-bottom: 30px;
  }
  .checkout-page .checkout-content .cart-summary .cart{
    width: 100%;
  }
}
</style>