<template>
	<view class="common_shop_view">
		<view class="shop_item" v-for="(item,index) in list" :key="index">
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
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		props:{
			list: Array
		},
		methods:{
			toCollect(e){
				console.log(e);
				if(this.list[e].star_cur == 0){
					this.list[e].star_cur = 1;
					this.list[e].star_icon = "../../static/star2.png";
					uni.showToast({
						title: "收藏成功",
						icon: "none"
					})
				}else{
					this.list[e].star_cur = 0;
					this.list[e].star_icon = "../../static/star1.png";
					uni.showToast({
						title: "取消收藏",
						icon: "none"
					})
				}
			}
		},
		onLoad() {
			
		}
	}
</script>

<style scoped lang="scss">
	.shop_item{
		padding: 15upx 0;
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		.shop_info{
			display: flex;
			justify-content: flex-start;
			align-items: flex-start;
			color: #262626;
			font-size: 24upx;
			.si_title{
				text{
					margin-left: 10upx;
				}
			}
			.si_type{
				color: #dd2626;
			}
			.shop_img{
				display: block;
				width: 138upx;
				height: 138upx;
				margin-right: 30upx;
			}
			.si_phone{
				margin: 10upx 0;
			}
		}
		.star_icon{
			display: block;
			width: 42upx;
			height: 40upx;
			margin-top: 20upx;
		}
	}
</style>