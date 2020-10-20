<template>
  <div class="hello">
		<div v-for="(bitem,bindex) in banners" :key="bindex">
			<img :src="bitem.banner" alt="" >
		</div>
  </div>
</template>

<script>
	import { getBanner } from '../network/request.js'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
	data(){
		return {
			banners:[]
		}
	},
	mounted(){
		getBanner().then(res=>{
			console.log(res)
			this.banners = res.data
		})
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
