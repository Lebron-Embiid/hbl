<template>
	<view class="my_collect_view">
		<common-shop :list="shop_list"></common-shop>
	</view>
</template>

<script>
	import commonShop from '../../components/common_shop.vue'
	export default{
		data(){
			return{
				shop_list: [
					{
						id: 1,
						src: "../../static/shop_img1.jpg",
						title: "即墨海尚海",
						floor: "F305",
						phone: "15811252064",
						isPoint: 1,
						star_cur: 0,
						star_icon: "../../static/star1.png"
					},{
						id: 2,
						src: "../../static/shop_img2.jpg",
						title: "即墨海尚海",
						floor: "F305",
						phone: "15811252064",
						isPoint: 1,
						star_cur: 0,
						star_icon: "../../static/star1.png"
					},{
						id: 3,
						src: "../../static/shop_img3.jpg",
						title: "即墨海尚海",
						floor: "F305",
						phone: "15811252064",
						isPoint: 0,
						star_cur: 0,
						star_icon: "../../static/star1.png"
					}
				]
			}
		},
		components:{
			commonShop
		},
		methods:{
			
		},
		onLoad() {
			
		}
	}
</script>

<style scoped lang="scss">
	.my_collect_view{
		padding: 0 30upx;
		box-sizing: border-box;
	}
</style>