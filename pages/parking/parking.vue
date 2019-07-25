<template>
	<view class="parking_view">
		<view class="page_bg"></view>
		<view class="add_car_box">
			<button type="primary" @tap="toAddCar" class="submit_btn"><text>+</text>添加车辆</button>
		</view>
		<picker :range="car_arr" @change="bindCarChange">
			<view class="select_car_box">
				<view>{{car_number}}</view>
				<image src="../../static/down1.png" mode="widthFix"></image>
			</view>
		</picker>
		<view class="park_info_box">
			<view class="park_info_item">
				<text>进场时间：</text>
				<text>7月12号 15:00</text>
			</view>
			<view class="park_info_item">
				<text>出场时间：</text>
				<text>7月12号 20:00</text>
			</view>
			<view class="park_info_item">
				<text>停车时长：</text>
				<text>05:00:00</text>
			</view>
			<view class="park_info_item">
				<text>优惠时长：</text>
				<text>0.5小时</text>
			</view>
			<view class="park_bottom_box">
				<view class="park_info_item">
					<text>计费时长：</text>
					<text>5小时</text>
				</view>
				<view class="park_info_item">
					<text>计费金额：</text>
					<text>￥200.00</text>
				</view>
			</view>
		</view>
		<view class="car_point_box">
			<view class="car_point">
				<text>积分抵扣</text>
				<picker :range="car_point_arr" @change="bindPointChange">
					<view class="car_pick">
						<view>{{car_point}}</view>
						<image src="../../static/arrow2.png" mode="widthFix"></image>
					</view>
				</picker>
				<switch checked color="#36c328" @change="bindSwitch" />
			</view>
			<view class="car_price">
				需支付金额：<view>￥<text>200.00</text></view>
			</view>
			<label class="checkbox">
				<checkbox value="" />我同意在后续的即墨海尚海停车时，使用无感支付
			</label>
		</view>
		<view class="query_box">
			<button type="primary" class="submit_btn">确认支付</button>
			<navigator url="">停车缴费规则说明 ></navigator>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				car_number: "粤B123455",
				car_arr: ["粤B123455","粤B123454"],
				car_point: "500积分抵5元",
				car_point_arr: ["500积分抵5元","1000积分抵10元"]
			}
		},
		methods:{
			toAddCar(e){
				uni.navigateTo({
					url: "/pages/add_car/add_car"
				})
			},
			bindCarChange(e){
				this.car_number = this.car_arr[e.detail.value];
			},
			bindPointChange(e){
				this.car_point = this.car_point_arr[e.detail.value];
			},
			bindSwitch(e){
				console.log(e.detail.value);
			}
		},
		onLoad() {
			
		}
	}
</script>

<style scoped lang="scss">
	.add_car_box{
		padding: 20upx 30upx;
		box-sizing: border-box;
		.submit_btn{
			background: linear-gradient(left, #1daaff,#5daaff);
		}
	}
	.select_car_box{
		color: #262626;
		font-size: 32upx;
		background: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 30upx 0;
		margin-bottom: 15upx;
		image{
			display: block;
			width: 24upx;
			height: 14upx;
			margin-left: 35upx;
		}
	}
	.park_info_box{
		padding: 20upx 30upx 10upx;
		box-sizing: border-box;
		background: #fff;
		margin-bottom: 15upx;
		.park_info_item{
			color: #262626;
			font-size: 24upx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 20upx;
		}
		.park_bottom_box{
			padding-top: 20upx;
			border-top: 1px solid #FBFBFB;
		}
	}
	.car_point_box{
		padding: 30upx;
		box-sizing: border-box;
		background: #fff;
		.car_point{
			display: flex;
			justify-content: flex-start;
			align-items: center;
			color: #999;
			font-size: 24upx;
			.car_pick{
				border: 1px solid #E0E0E0;
				width: 380upx;
				height: 55upx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 0 30upx 0 20upx;
				box-sizing: border-box;
				margin: 0 60upx 0 45upx;
				image{
					display: block;
					width: 28upx;
					height: 18upx;
				}
			}
		}
		.car_price{
			color: #999;
			font-size: 24upx;
			display: flex;
			align-items: center;
			justify-content: flex-start;
			margin: 30upx 0 40upx;
			view{
				margin-left: 40upx;
				color: #262626;
				font-size: 18upx;
				text{
					font-size: 28upx;
				}
			}
		}
		.checkbox{
			color: #999;
			font-size: 20upx;
			display: flex;
			align-items: center;
			checkbox{
				transform: scale(.7);
			}
		}
	}
	.query_box{
		padding: 30upx;
		text-align: center;
		box-sizing: border-box;
		navigator{
			color: #999;
			font-size: 24upx;
			margin-top: 40upx;
		}
	}
</style>