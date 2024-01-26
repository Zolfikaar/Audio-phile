<script setup>
import iconCashOn from '@/components/icons/iconCashOn.vue'
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
                <div class="group-item">
                  <label>Name</label>
                  <input type="text">
                </div>
                <div class="group-item error-state">
                  <label>Email Address <span class="error">Wrong Format</span></label>
                  <input type="email">
                </div>
                <div class="group-item">
                  <label>Phone Number</label>
                  <input type="number">
                </div>
              </div>
            </div>

            <div class="form-group">
              <div class="group-title">Shipping Info</div>
              <div class="group">
                <div class="group-item address">
                  <label>Address</label>
                  <input type="text">
                </div>
                <div class="group-item zip-code">
                  <label>Zip Code</label>
                  <input type="number">
                </div>
                <div class="group-item">
                  <label>City</label>
                  <input type="text">
                </div>
                <div class="group-item">
                  <label>Country</label>
                  <input type="text">
                </div>
              </div>
            </div>

            <div class="form-group payment-details">
              <div class="group-title">payment details</div>
              <div class="group-item">
                <label>Payment Method</label>
                <div class="payment-options">
                  <div class="option ">
                    <span class="checkbox"></span>
                    <span>e-Money</span>
                  </div>
                  <div class="option checked">
                    <span class="checkbox"></span>
                    <span>Cash on Delivery</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="form-group emoney-info">
              <div class="group">
                <div class="group-item">
                  <label>e-Money Number</label>
                  <input type="number">
                </div>
                <div class="group-item">
                  <label>e-Money Pin</label>
                  <input type="number">
                </div>
              </div>
            </div>
            
            <div class="form-group on-delivery-info">
              <div class="icon">
                <iconCashOn />
              </div>
              <p>The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
            </div>

          </form>
        </div>

        <div class="cart-summary">
          cart summary
        </div>

      </div>

    </div>

  </div>
</template>

<style >
#app.checkout-page{background-color: #f1f1f1 !important;}
.checkout-page .checkout-header{margin: 50px 0;}
.checkout-page .checkout-content{
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
}
.checkout-page .checkout-content .cart-summary{width: 35%;}
.checkout-page .checkout-content .cart-summary,
.checkout-page .checkout-content .checkout-form{
  border-radius: 10px;
  background-color: white;
}
.checkout-page .checkout-content .checkout-form{
  width: 65%;
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


</style>