<template>
	<view class="person_view">
		<view class="page_bg"></view>
		<image src="../../static/person_bg.jpg" class="person_bg" mode="widthFix"></image>
		<view class="person_info_box">
			<view class="pib_avatar"><image src="../../static/order_img1.jpg" mode="aspectFill"></image></view>
			<view class="pib_name">张湘</view>
			<navigator url="/pages/person_info/person_info" class="pib_info">完善个人信息，可以额外获得300积分! 前去完善>></navigator>
			<view class="person_check_box">
				<view class="pcb_left">
					<view class="pl_point">当前可用积分<text>56,000</text></view>
					<view class="pl_till">签到获取更多积分~</view>
				</view>
				<view class="check_btn" @tap="toCheckIn">签到 ></view>
			</view>
		</view>
		<navigator url="/pages/person_info/person_info" class="person_nav_item">
			<view><image src="../../static/person_icon1.png" mode="widthFix"></image>个人信息</view>
			<image src="../../static/arrow1.png" class="arrow" mode="widthFix"></image>
		</navigator>
		<navigator url="/pages/point_detail/point_detail" class="person_nav_item">
			<view><image src="../../static/person_icon2.png" mode="widthFix"></image>积分明细</view>
			<image src="../../static/arrow1.png" class="arrow" mode="widthFix"></image>
		</navigator>
		<navigator url="/pages/my_collect/my_collect" class="person_nav_item">
			<view><image src="../../static/person_icon3.png" mode="widthFix"></image>我的收藏</view>
			<image src="../../static/arrow1.png" class="arrow" mode="widthFix"></image>
		</navigator>
		<navigator url="" class="person_nav_item">
			<view><image src="../../static/person_icon4.png" mode="widthFix"></image>我是业主/租客</view>
			<image src="../../static/arrow1.png" class="arrow" mode="widthFix"></image>
		</navigator>
		<navigator url="/pages/suggestions/suggestions" class="person_nav_item">
			<view><image src="../../static/person_icon5.png" mode="widthFix"></image>建议投诉</view>
			<image src="../../static/arrow1.png" class="arrow" mode="widthFix"></image>
		</navigator>
		<navigator url="" class="person_nav_item">
			<view><image src="../../static/person_icon6.png" mode="widthFix"></image>会员权益</view>
			<image src="../../static/arrow1.png" class="arrow" mode="widthFix"></image>
		</navigator>
		<!-- <navigator url="" class="person_nav_item">
			<view><image src="../../static/person_icon7.png" mode="widthFix"></image>积分转让</view>
			<image src="../../static/arrow1.png" class="arrow" mode="widthFix"></image>
		</navigator> -->
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			toCheckIn(e){
				uni.navigateTo({
					url: "/pages/check_in/check_in"
				})
			}
		},
		onLoad() {
			
		}
	}
</script>

<style scoped lang="scss">
	page{
		position: relative;
	}
	.person_view{
		padding-bottom: 40upx;
	}
	.person_bg{
		position: absolute;
		width: 100%;
		left: 0;
		top: 0;
		z-index: -1;
	}
	.person_info_box{
		padding: 40upx 30upx 20upx;
		box-sizing: border-box;
		color: #fff;
		.pib_avatar{
			width: 122upx;
			height: 122upx;
			margin: 0 auto 15upx;
			image{
				display: block;
				width: 100%;
				height: 100%;
				border-radius: 50%;
				border: 4upx solid #fff;
				box-sizing: border-box;
			}
		}
		.pib_name{
			font-size: 28upx;
			text-align: center;
		}
		.pib_info{
			display: block;
			margin: 20upx 0;
			text-align: center;
			font-size: 24upx;
		}
		.person_check_box{
			background: #fff;
			border-radius: 20upx;
			padding: 45upx 35upx 45upx 40upx;
			box-sizing: border-box;
			box-shadow: 0 10upx 10upx #E6E6E6;
			color: #505050;
			font-size: 24upx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.pl_point{
				margin-bottom: 20upx;
				text{
					font-size: 32upx;
					margin-left: 20upx;
					font-weight: bold;
				}
			}
			.pl_till{
				color: #999;
				font-size: 20upx;
			}
			.check_btn{
				display: block;
				width: 170upx;
				height: 58upx;
				line-height: 58upx;
				background: linear-gradient(left, #2959ff,#4cb1f9);
				border-radius: 50upx;
				box-shadow: 0 10upx 30upx #BED3F0;
				color: #fff;
				font-size: 28upx;
				text-align: center;
			}
		}
	}
	.person_nav_item{
		background: #fff;
		padding: 30upx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 15upx;
		view{
			display: flex;
			justify-content: flex-start;
			align-items: center;
			color: #666;
			font-size: 26upx;
			image{
				display: block;
				width: 30upx;
				height: 30upx;
				margin-right: 15upx;
			}
		}
		.arrow{
			display: block;
			width: 18upx;
			height: 28upx;
		}
	}
</style>
