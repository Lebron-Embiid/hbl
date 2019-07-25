<template>
	<view class="wait_order_box">
		<view class="wait_order_item" v-for="(item,index) in list" :key="index">
			<view class="woi_item">
				<view class="woi_left">物业</view>
				<view class="woi_right">{{item.property}}</view>
			</view>
			<view class="woi_item">
				<view class="woi_left">报修人<text>*</text></view>
				<view class="woi_right">{{item.person}}</view>
			</view>
			<view class="woi_item">
				<view class="woi_left">联系电话<text>*</text></view>
				<view class="woi_right">{{item.phone}}</view>
			</view>
			<view class="woi_item">
				<view class="woi_left">报修时间</view>
				<view class="woi_right">{{item.time}}</view>
			</view>
			<view class="woi_item">
				<view class="woi_left">报修位置<text>*</text></view>
				<view class="woi_right">{{item.address}}</view>
			</view>
			<view class="woi_item">
				<view class="woi_left">报修内容</view>
				<view class="woi_right">{{item.content}}</view>
			</view>
			<view class="woi_bottom">
				<text>状态</text>
				<block v-if="current == 1">
					<button type="primary">待接单</button>
				</block>
				<block v-if="current == 2">
					<button type="primary" @tap="accepte(index)">验收</button>
				</block>
				<block v-if="current == 3">
					<button type="primary" class="finish">已完结</button>
				</block>
			</view>
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
			current: Number,
			list: Array
		},
		methods:{
			accepte(e){
				this.$emit('accepte',e)
			}
		},
		onLoad() {
			
		}
	}
</script>

<style scoped lang="scss">
	.wait_order_box{
		padding: 20upx 40upx;
		box-sizing: border-box;
		.wait_order_item{
			padding: 0 40upx 30upx;
			box-sizing: border-box;
			margin-bottom: 30upx;
			box-shadow: 0 0 15upx #F2F2F1;
			border-radius: 10upx;
			.woi_item{
				padding: 35upx 0 20upx;
				border-bottom: 1px solid #EFEFEF;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				color: #595959;
				font-size: 26upx;
				.woi_left{
					width: 150upx;
					text{
						color: #dd2626;
					}
				}
				.woi_right{
					color: #999;
					font-size: 20upx;
				}
			}
			.woi_bottom{
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-top: 30upx;
				text{
					color: #999;
					font-size: 24upx;
				}
				button{
					color: #fff;
					font-size: 24upx;
					background: #ff6666;
					border-radius: 10upx;
					margin: 0;
					padding: 0;
					width: 130upx;
					height: 45upx;
					line-height: 45upx;
					&:after{
						border: 0;
					}
					&.finish{
						background: #ccc;
					}
				}
			}
		}
	}
</style>