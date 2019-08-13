<template>
	<view class="door_lock_view">
		<scroll-swiper></scroll-swiper>
	</view>
</template>

<script>
	import api from '../../common/api.js'
	import scrollSwiper from '../../components/jing-swiper/jing-swiper.vue'
	export default{
		data(){
			return{
				
			}
		},
		components:{
			scrollSwiper
		},
		methods:{
			
		},
		onLoad(opt) {
			api.get('', {}).then(res => {
				console.log(res.data);
			}).catch(err => {
				
			})
		}
	}
</script>

<style scoped lang="scss">
	.door_lock_view{
	}
</style>