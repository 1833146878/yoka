<template>
	<div class="fFocus">
		<div class="mask" :style="{width: width,height:height}">
			<div class="focus">
				<div class="item" :style="{opacity: Number(showIndex == index),'transition-duration':transition}" v-for="(banner,index) in imglist.slice(0,5)" :key="index">
					<a href="#">
						<img :src="banner.banner" alt="">
					</a>
				</div>
			</div>
			<div class="point">
				<span class="g-point" v-for="n in imglist.slice(0,5).length" :key="n" @click="clickTrun(n)" :class="{'on':showIndex == n-1}">
				</span>
			</div>
			<div class="right" @click="trunRight">
			</div>
			<div class="left" @click="trunLeft">
			</div>
			<slot></slot>
		</div>
	</div>

</template>

<script>
	export default {
		props:{
			imglist:{
				type: Array,
				required:true
			},
			width:{
				type:String,
				default:'100%'
			},
			isSide:{
				type: Boolean,
				default: false
			},
			interval:{
				type:Number,
				default: 3000
			},
			height:{
				type:String,
				required:true
			},
			transition:{
				type:String,
				default: '1s'
			}
		},
		data(){
			return {
				showIndex:0,
				timer:0
			}
		},
		methods:{
			setTimer(){
				return setInterval(()=>{
					this.showIndex ++ ;
					if(this.showIndex >= this.imglist.length){
						this.showIndex =0
					}
				},this.interval)
			},
			controlTimer(){
				if(this.timer){
					console.log(this.timer)
					clearInterval(this.timer)
				}
				this.timer = this.setTimer()
			},
			clickTrun(n){
				this.showIndex = n -1
				this.controlTimer()
			},
			trunLeft(){
				this.showIndex --
				if(this.showIndex < 0){
					this.showIndex = this.imglist.length -1
				}
				this.controlTimer()
			},
			trunRight(){
				this.showIndex ++
				if(this.showIndex >= this.imglist.length){
					this.showIndex = 0
				}
				this.controlTimer()
			}
		},
		created(){
			this.timer = this.setTimer()
		}
	}
</script>

<style>

</style>