<script setup>
    
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
                <div class="group-item">
                  <label>Email Address</label>
                  <input type="email">
                </div>
                <div class="group-item">
                  <label>Phone Number</label>
                  <input type="number">
                </div>
              </div>
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

<style>
.checkout-page{margin: 50px 0;}
.checkout-page .checkout-header{margin-bottom: 50px;}
.checkout-page .checkout-content{
  display: flex;
  justify-content: space-between;
}
.checkout-page .checkout-content .cart-summary,
.checkout-page .checkout-content .checkout-form{
  border-radius: 10px;
  background-color: #f2f0f0;
  padding: 30px 20px;
}
.checkout-page .checkout-content .checkout-form{
  width: 75%;
  margin-right: 20px;
}
.checkout-page .checkout-content .checkout-form form .form-group .group-title{
  text-transform: uppercase;
  color: var(--main-orang);
  margin:  40px 0 20px 0;
  font-weight: bold;
}
.checkout-page .checkout-content .checkout-form form .form-group .group{
  display: flex;
  flex-wrap: wrap;
}
.checkout-page .checkout-content .checkout-form form .form-group .group .group-item:first-child{
  margin-right: 20px;
}
.checkout-page .checkout-content .checkout-form form .form-group .group .group-item{
  width: 48%;
  margin-bottom: 20px;
}
.checkout-page .checkout-content .checkout-form form .form-group .group .group-item label{
  display: block;
  font-weight: bold;
  font-size: 12px;
}
.checkout-page .checkout-content .checkout-form form .form-group .group .group-item input{
  border: 1px solid #acacac;
  border-radius: 10px;
  height: 56px;
  width: 100%;
  padding: 0 10px;
}
.checkout-page .checkout-content .checkout-form form .form-group .group .group-item input:focus{
  outline: 1px solid var(--main-orang);
  border: unset;
}
.checkout-page .checkout-content .cart-summary{
  width: 25%;
}


</style>