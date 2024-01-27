<script setup>
import {ref,onMounted} from 'vue'
import iconCashOn from '@/components/icons/iconCashOn.vue'

let cart = ref([]);
let total = ref(0);
let shipping = ref(50);
let vat = ref(0);
let grandTotal = ref(0);

onMounted(async () => {
  const storedCart = localStorage.getItem('cart');
  if (storedCart) {
    cart.value = JSON.parse(storedCart)
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
const handleCheckoutInfo = () => {

  if(name.value === ''){
    emptyName.value = true
  } else if (name.value.length < 6) {
    shortName.value = true
    emptyName.value = false
  } else {
    emptyName.value = false
    shortName.value = false
  }

  if(email.value === ''){
    emptyEmail.value = true
    notValidEmail.value = false
  } else if (!isValidEmail(email.value)) {
    notValidEmail.value = true
    emptyEmail.value = false
  } else {
    emptyName.value = false
    notValidEmail.value = false
  }
  
  let phoneNumberLength = phone.value.toString().length
  if(phone.value === ''){
    emptyPhoneNum.value = true
    shortPhoneNum.value = false
  } else if(phoneNumberLength < 8) {
    shortPhoneNum.value = true
    emptyPhoneNum.value = false
  } else {
    emptyPhoneNum.value = false
    shortPhoneNum.value = false
  }

  if(address.value === ''){
    emptyAddress.value = true
  } else {
    emptyAddress.value = false
  }

  let zipCodeLength = zip.value.toString().length
  if(zip.value === ''){
    emptyZipCode.value = true
    invalidZipCode.value = false
  } else if(zipCodeLength !== 5){
    invalidZipCode.value = true
    emptyZipCode.value = false
  } else {
    emptyZipCode.value = false
    invalidZipCode.value = false

  }

  if(city.value === '') {
    emptyCity.value = true
  }else{
    emptyCity.value = false
  }

  if(country.value === '') {
    emptyCountry.value = true
  }else{
    emptyCountry.value = false
  }
  
  let EmoneyNumLength = emoney_num.value.toString().length
  if(emoney_num.value === ''){
    emptyEmoneyNum.value = true
    invalidEmoneyNum.value = false
  } else if(EmoneyNumLength !== 9){
    invalidEmoneyNum.value = true
    emptyEmoneyNum.value = false
  } else {
    emptyEmoneyNum.value = false
    invalidEmoneyNum.value = false

  }

  let EmoneyPinLength = emoney_pin.value.toString().length
  if(emoney_pin.value === ''){
    emptyEmoneyPin.value = true
    invalidEmoneyPin.value = false
  } else if(EmoneyPinLength !== 4){
    invalidEmoneyPin.value = true
    emptyEmoneyPin.value = false
  } else {
    emptyEmoneyPin.value = false
    invalidEmoneyPin.value = false

  }
}

function isValidEmail(email) {
  // Regular expression for a basic email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
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
                        <img :src="'/src/' + item.image" alt="">
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
</template>

<style >
/* ========================================================== */
/* ==================== Checkout Form ======================= */
/* ========================================================== */
#app.checkout-page{background-color: #f1f1f1 !important;}
.checkout-page .checkout-header{margin: 50px 0;}
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
.checkout-page .checkout-content .checkout-form form .form-group.on-delivery-info p{
  margin-left: 20px;
}
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
</style>