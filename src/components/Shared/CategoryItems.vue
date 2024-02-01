<script setup>
const props = defineProps({
  categoryData: {
    type: Object,
    required: true
  },
  categoryName: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="category-content">

    <div class="category-header">
      <h1>{{ props.categoryName }}</h1>
    </div>

    <div class="wrapper">

      <div class="products" >

        <div class="product" v-for="product in props.categoryData" :key="product">

          <div class="product-image">
            <img :src="'src/' + product.image.desktop" alt="">
          </div>

          <div class="product-info">
            <span class="new overline" v-if="product.new">New Product</span>
            <h1>{{ product.name }}</h1>
            <p class="desc">{{ product.description }}</p>
            <router-link :to="'/product/' + product.slug"><button class="btn1">See Product</button></router-link>
          </div>
          
        </div>

      </div>

    </div>

  </div>
</template>


<style>
.category-content .category-header{
  height: 250px;
  text-align: center;
  background-color: var(--second-black);
  color: #fff;
}
.category-content .category-header h1{line-height: 250px;}
.category-content .products{
  display: flex;
  flex-direction: column;
}
.speaker .category-content .products{
  flex-direction: column-reverse !important;
}
.category-content .products .product{
  display: flex;
  margin-top: 100px;
}
.category-content .products .product:nth-child(even){flex-direction: row-reverse;}
.category-content .products .product .product-image img{
  background-size: cover;
  width: 540px;
  height: 560px;
}
.category-content .products .product .product-info{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 240px;
}
.category-content .products .product:nth-child(even) .product-info{
  margin-left: unset;
  margin-right: 240px;
}
.category-content .products .product .product-info .desc{
  margin: 30px  0;
  width: 100%;
}

/* ----------------------------------------------- */
/* ---------------- Media Queries ---------------- */
/* ----------------------------------------------- */


/* ----------- Mobile ----------- */
@media only screen and (min-width: 350px) and (max-width: 600px) { 
  .category-content .category-header h1{
    font-size: 28px;
    letter-spacing: 2px;
  }
  .category-content .products{flex-direction: column;}
  .category-content .products .product:nth-child(even),
  .category-content .products .product{
    flex-direction: column;
    align-items: center;
  }
  
  .category-content .products .product:nth-child(even) .product-info,
  .category-content .products .product .product-info{
    align-items: center;
    margin: 40px 0 0 0;
    text-align: center;
  }
  .category-content .products .product .product-info h1{
    font-size: 28px;
    letter-spacing: 1px;
  }
}

/* ----------- Tablet ----------- */
@media only screen and (min-width: 601px) and (max-width: 1024px) {
  .category-content .category-header h1{
    font-size: 40px;
    letter-spacing: 1.43px;
  }
  .category-content .products{flex-direction: column;}
  .category-content .products .product:nth-child(even),
  .category-content .products .product{
    flex-direction: column;
    align-items: center;
  }
  
  .category-content .products .product:nth-child(even) .product-info,
  .category-content .products .product .product-info{
    align-items: center;
    margin: 40px 90px 0 90px;
    text-align: center;
  }
}
</style>