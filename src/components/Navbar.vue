<script setup>
let activeNav = ''
const changeActiveNav = (nav) => activeNav = nav

</script>
<template>
  <div class="navs">

    <ul>
      <li><RouterLink :to="{name: 'home'}" :class="{'router-link-active':activeNav === 'home'}" @click="changeActiveNav('home')">Home</RouterLink></li>
      <li><RouterLink :to="{name: 'headphones'}" :class="{'router-link-active':activeNav === 'headphones'}" @click="changeActiveNav('headphones')">Headphones</RouterLink></li>
      <li><RouterLink :to="{name: 'speakers'}" :class="{'router-link-active':activeNav === 'speakers'}" @click="changeActiveNav('speakers')">Speakers</RouterLink></li>
      <li><RouterLink :to="{name: 'earphones'}" :class="{'router-link-active':activeNav === 'earphones'}" @click="changeActiveNav('earphones')">Earphones</RouterLink></li>
    </ul>
      
  </div>
</template>

<style>
.navs ul li a.router-link-active,
.navs ul li a.router-link-exact-active{
  color: var(--main-orang);
}

/* ----------------------------------------------- */
/* ---------------- Media Queries ---------------- */
/* ----------------------------------------------- */


/* ----------- Mobile ----------- */
@media only screen and (min-width: 350px) and (max-width: 600px) { 
  /* .navs{display: none;} */
}

/* ----------- Tablet ----------- */
@media only screen and (min-width: 601px) and (max-width: 1024px) {
  /* .navs{display: none;} */
}
</style>