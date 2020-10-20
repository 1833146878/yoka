<template>
  <div id="app">
    <router-view/>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from './components/Footer.vue';
export default {
    components:{
      Footer,
  },
}
</script>
<style>
@import './assets/css/public.css';
#app{
  min-width: 1300px;
}
</style>
