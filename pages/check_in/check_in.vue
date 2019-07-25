<template>
	<view class="check_in_view">
		<view class="check_today">{{today}}</view>
		<view class="check_top">
			<image src="../../static/check_bg1.jpg" class="top_bg" mode="widthFix"></image>
			<view class="check_top_box">
				<view class="ctb_title">连续签到赢<text>好礼</text></view>
				<view class="check_rotate_box">
					<view class="check_rotate">
						<view class="check_rotate_item" :class="[item.isrotate == 1?'rotate':'']" @tap="checkRotate(index)" v-for="(item,index) in rotate_list" :key="index">
							<image :src="item.poster" class="rotate_img" mode="widthFix"></image>
							<view class="rotate_layer" :class="[item.isshow == 1?'active':'']">
								<image :src="item.src" mode="widthFix"></image>
								<view>获得{{item.num}}积分</view>
							</view>
						</view>
						<!-- <view class="check_rotate_item">
							<image src="../../static/rotate_img2.png" class="rotate_img" mode="widthFix"></image>
						</view>
						<view class="check_rotate_item rotate">
							<image src="../../static/rotate_img3.png" class="rotate_img" mode="widthFix"></image>
							<view class="rotate_layer">
								<image src="../../static/check_img.jpg" mode="widthFix"></image>
								<view>获得27积分</view>
							</view>
						</view>
						<view class="check_rotate_item">
							<image src="../../static/rotate_img4.png" class="rotate_img" mode="widthFix"></image>
						</view> -->
					</view>
					<view class="check_till">已连续签到{{day}}天</view>
				</view>
			</view>
		</view>
		<view class="check_bottom" :class="[isturn == 1?'active':'']">
			<image src="../../static/check_bg2.jpg" class="bottom_bg" mode="widthFix"></image>
			<view class="check_bottom_box">
				<view class="check_img_box">
					<image src="../../static/check_img2.png" mode="widthFix"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				today: "2019-04-01  星期一 农历 二月廿六",
				day: 2,
				rotate_list: [
					{
						poster: "../../static/rotate_img1.png",
						src: "../../static/check_img.jpg",
						num: 27,
						isshow: 0,
						isrotate: 0
					},{
						poster: "../../static/rotate_img2.png",
						src: "../../static/check_img.jpg",
						num: 27,
						isshow: 0,
						isrotate: 0
					},{
						poster: "../../static/rotate_img3.png",
						src: "../../static/check_img.jpg",
						num: 27,
						isshow: 0,
						isrotate: 0
					},{
						poster: "../../static/rotate_img4.png",
						src: "../../static/check_img.jpg",
						num: 27,
						isshow: 0,
						isrotate: 0
					}
				],
				isturn: 0
			}
		},
		methods:{
			checkRotate(e){
				var that = this;
				if(that.isturn != 1){
					that.rotate_list[e].isrotate = 1;
					setTimeout(function(){
						that.rotate_list[e].isshow = 1;
						that.isturn = 1;
						that.day = that.day+1;
					},1000)
				}else{
					uni.showToast({
						title: "您今天已签到！",
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
	.check_today{
		padding: 25upx 30upx;
		box-sizing: border-box;
		background: #fff;
		color: #262626;
		font-size: 20upx;
	}
	.check_top{
		position: relative;
		.top_bg{
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			z-index: -1;
		}
		.check_top_box{
			padding: 20upx;
			box-sizing: border-box;
			overflow: hidden;
			.ctb_title{
				width: 420upx;
				height: 76upx;
				line-height: 76upx;
				background: #edeffe;
				border-top-left-radius: 30upx;
				border-top-right-radius: 30upx;
				color: #5d54cb;
				font-size: 34upx;
				font-weight: bold;
				text-align: center;
				margin: 275upx auto 0;
				text{
					color: #bf01f1;
				}
			}
			.check_rotate_box{
				padding: 20upx 25upx 40upx;
				box-sizing: border-box;
				background: #fff;
				border-radius: 50upx;
				.check_rotate{
					background: #5b51ca;
					padding: 100upx 15upx;
					box-sizing: border-box;
					display: flex;
					justify-content: space-between;
					align-items: center;
					border-radius: 30upx;
					.check_rotate_item{
						position: relative;
						overflow: hidden;
						transition: all 1s ease;
						&.rotate{
							transform: rotateY(360deg);
						}
						.rotate_img{
							display: block;
							width: 148upx;
							height: 200upx;
						}
						.rotate_layer{
							position: absolute;
							left: 0;
							top: 0;
							width: 100%;
							height: 100%;
							z-index: 2;
							display: none;
							&.active{
								display: block;
							}
							image{
								display: block;
								width: 100%;
								height: 154upx;
							}
							view{
								color: #dd2626;
								font-size: 20upx;
								height: 46upx;
								line-height: 46upx;
								background: #fff;
								text-align: center;
								border-bottom-left-radius: 15upx;
								border-bottom-right-radius: 15upx;
							}
						}
					}
				}
				.check_till{
					width: 80%;
					height: 100upx;
					line-height: 100upx;
					background: #6c7df2;
					color: #fff;
					font-size: 36upx;
					text-align: center;
					border-radius: 50upx;
					box-shadow: 0 5upx 5upx #593DC5;
					margin: 35upx auto 0;
				}
			}
		}
	}
	.check_bottom{
		position: relative;
		// padding-top: 20upx;
		display: none;
		&.active{
			display: block;
		}
		.bottom_bg{
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			z-index: -1;
		}
		.check_bottom_box{
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			z-index: 3;
			padding: 20upx;
			box-sizing: border-box;
			.check_img_box{
				border: 2upx solid #fff;
				border-radius: 30upx;
				padding: 20upx;
				box-sizing: border-box;
				image{
					display: block;
					width: 100%;
				}
			}
		}
	}
</style>