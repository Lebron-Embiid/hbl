<template>
	<view class="find_shop_view">
		<common-search :keywords="keywords" :placeholder="placeholder"></common-search>
		<view class="select_nav_box">
			<view class="select_nav_item">
				<picker :range="floor_arr" @change="select_floor">
					<view class="sni_title">{{floor_def}}<image src="../../static/down.png" mode="widthFix"></image></view>
				</picker>
			</view>
			<view class="select_nav_item">
				<picker :range="business_arr" @change="select_business">
					<view class="sni_title">{{business_def}}<image src="../../static/down.png" mode="widthFix"></image></view>
				</picker>
			</view>
		</view>
		<scroll-view scroll-y="true" class="shop_list_view">
			<common-shop :list="shop_list"></common-shop>
			<!-- <view class="shop_item" v-for="(item,index) in shop_list" :key="index">
				<view class="shop_info">
					<image :src="item.src" class="shop_img" mode="aspectFill"></image>
					<view class="info_box">
						<view class="si_title">{{item.title}}<text>{{item.floor}}</text></view>
						<view class="si_phone">电话：{{item.phone}}</view>
						<block v-if="item.isPoint == 1">
							<view class="si_type">积分商户</view>
						</block>
					</view>
				</view>
				<image :src="item.star_icon" class="star_icon" @tap.stop="toCollect(index)" mode="widthFix"></image>
			</view> -->
		</scroll-view>
	</view>
</template>

<script>
	import commonSearch from '../../components/common_search.vue'
	import commonShop from '../../components/common_shop.vue'
	export default{
		data(){
			return{
				keywords: "",
				placeholder: "输入商户关键字搜索",
				floor_def: "楼层",
				floor_arr: ["F301","F302","F303","F304","F305"],
				business_def: "业态",
				business_arr: ["业态1","业态2","业态3"],
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
			commonSearch,
			commonShop
		},
		methods:{
			select_floor(e){
				this.floor_def = this.floor_arr[e.target.value];
			},
			select_business(e){
				this.business_def = this.business_arr[e.target.value];				
			}
		},
		onLoad() {
			
		}
	}
</script>

<style scoped lang="scss">
	.shop_list_view{
		max-height: 78vh;
		padding: 0 30upx;
		box-sizing: border-box;
	}
</style>