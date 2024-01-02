<script>
import Navbar from '@/components/Navbar.vue'
export default {
  components: {
    Navbar
  }
}
</script>
<template>
  <div class="topbar">

    <div class="wrapper">

      <nav>

        <div class="nav-item logo">
          <a href="#"><img src="@/assets/shared/desktop/logo.svg" alt=""></a>
        </div>

        <Navbar />
        
        <div class="nav-item cart">
          <a href="#"><img src="@/assets/shared/desktop/icon-cart.svg" alt=""></a>
        </div>

      </nav>

    </div>
    
  </div>
</template>

<style scoped>
.topbar{
  width: 100%;
  margin: 0 auto;
  background-color: var(--second-black);
  z-index: 10;
}
.topbar nav{
  background-color: var(--second-black);
  padding: 25px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}


</style>