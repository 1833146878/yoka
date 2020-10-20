<template>
  <div>
    <headerone></headerone>
    <banner :imglist="banners" height="540px" :interval="10000" width="1180px"></banner>
    <frist></frist>
    <scend></scend>
    <three></three>
    <four></four>
  </div>
</template>
<style scoped>

</style>
<script>
import headerone from '../components/headerone.vue'
import banner from './home/banner.vue'
import frist from '../components/frist.vue'
import scend from '../components/scend.vue'
import three from '../components/three.vue'
import four from '../components/four.vue'


export default {
  components:{
    headerone,
    banner,
    frist,
    scend,
    three,
    four
  },
  data(){
    return {
      banners:[]
    }
  },
  created(){
    this.axios.get('/home/banner').then(res=>{
      console.log(res.data)
      this.banners = res.data
    })
  }
}
</script>