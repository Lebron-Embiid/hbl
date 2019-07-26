<template>
	<view class="my_order_view">
		<view class="page_bg"></view>
		<common-search :keywords="keywords" :placeholder="placeholder"></common-search>
		<view class="order_content">
			<view class="order_item" v-for="(item,index) in order_list" :key="index">
				<view class="order_top">
					<image :src="item.src" mode="aspectFill"></image>
					<view class="order_center">
						<view class="oc_title">{{item.title}}</view>
						<view class="oc_info">
							<view>金额：<text>{{item.price}}</text></view>
							<view>积分：<text>{{item.integral}}</text></view>
						</view>
						<view class="oc_time">时间：<text>{{item.time}}</text></view>
					</view>
					<view class="del_btn">删除订单</view>
				</view>
				<view class="order_bottom">
					<view class="ob_status" :class="[item.status == 1?'red':'']">评价状态：{{item.status == 0?'未评价':'已评价'}}</view>
					<view class="ob_btn">
						<block v-if="item.status == 0">
							<view class="btn commit_btn" @tap="toCommit(item.id)">评价送积分</view>
						</block>
						<view class="btn refund_btn" @tap="toRefund(item.id)">退款申请</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import commonSearch from '../../components/common_search.vue'
	export default{
		data(){
			return{
				keywords: "",
				placeholder: "输入关键字搜索",
				order_list: [
					{
						id: 1,
						src: "../../static/order_img1.jpg",
						title: "Hotwind",
						price: "368.00",
						integral: 368,
						time: "2019-01-25 18:30:24",
						status: 0
					},{
						id: 2,
						src: "../../static/order_img2.jpg",
						title: "海底捞",
						price: "668.00",
						integral: 668,
						time: "2019-01-25 18:30:24",
						status: 0
					},{
						id: 3,
						src: "../../static/order_img3.jpg",
						title: "孩子王",
						price: "368.00",
						integral: 368,
						time: "2019-01-25 18:30:24",
						status: 1
					}
				]
			}
		},
		components:{
			commonSearch
		},
		methods:{
			toCommit(e){
				uni.navigateTo({
					url: "/pages/order_eval/order_eval?id="+e
				})
			},
			toRefund(e){
				uni.navigateTo({
					url: "/pages/refund/refund?id="+e
				})
			}
		},
		onLoad() {
			
		}
	}
</script>

<style scoped lang="scss">
	.search_box{
		border-bottom: 0;
		padding-bottom: 0;
		background: #fff;
	}
	.order_content{
		.order_item{
			padding: 20upx 30upx 0;
			box-sizing: border-box;
			margin-bottom: 15upx;
			background: #fff;
			.order_top{
				display: flex;
				justify-content: space-between;
				align-items: flex-start;
				padding-bottom: 20upx;
				border-bottom: 1px solid #F9F9F9;
				image{
					display: block;
					width: 118upx;
					height: 118upx;
					margin-right: 30upx;
				}
				.order_center{
					width: 50%;
					margin-right: 40upx;
				}
				.del_btn{
					color: #1fa4fc;
					font-size: 24upx;
					border: 1px solid #1fa4fc;
					padding: 0 20upx;
					height: 44upx;
					line-height: 44upx;
					border-radius: 10upx;
					text-align: center;
				}
			}
			.order_bottom{
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 15upx 0 15upx 30upx;
				box-sizing: border-box;
				.ob_status{
					position: relative;
					color: #999;
					font-size: 20upx;
					&:before{
						content: "";
						display: block;
						width: 5px;
						height: 5px;
						border-radius: 50%;
						position: absolute;
						left: -25upx;
						top: 50%;
						transform: translateY(-50%);
						background: #999;
					}
					&.red:before{
						background: #ff6666;
					}
				}
				.ob_btn{
					display: flex;
					justify-content: flex-end;
					align-items: center;
					.btn{
						color: #1fa4fc;
						font-size: 24upx;
						border: 1px solid #1fa4fc;
						padding: 0 20upx;
						height: 44upx;
						line-height: 44upx;
						border-radius: 10upx;
						text-align: center;
						margin-left: 20upx;
					}
					.commit_btn{
						margin-left: 0;
						color: #fff;
						background: #ff6666;
						border-color: #ff6666;
						padding: 0 15upx;
					}
					.refund_btn{
						color: #999;
						border-color: #999;
					}
				}
			}
		}
	}
</style>