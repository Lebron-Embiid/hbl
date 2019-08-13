<template>
	<view class="quick_pay_view">
		<view class="quick_title">
			<picker :range="array" @change="bindPickerChange">
				<view class="pick_view">{{project_name}}<image src="../../static/down.png" mode="widthFix"></image></view>
			</picker>
		</view>
		<view class="pay_box">
			<view class="pay_item">
				<text class="pi_txt">消费金额：</text>
				<view class="pay_right">
					<text>￥</text>
					<input type="text" placeholder="0.00">
				</view>
			</view>
			<view class="pay_item between">
				<text class="pi_txt">卡券优惠：</text>
				<view class="pay_right">
					<picker class="picker" :range="ticket_arr" @change="bindTicketChange">
						<view class="pick_view"><text>{{select_ticket}}</text><image src="../../static/arrow1.png" mode="widthFix"></image></view>
					</picker>
				</view>
			</view>
			<view class="pay_item between point">
				<text class="pi_txt">积分抵扣：</text>
				<view class="pay_right">
					<picker class="picker" :range="point_arr" @change="bindPointChange">
						<view class="pick_view"><text>{{select_point}}</text><image src="../../static/arrow2.png" mode="widthFix"></image></view>
					</picker>
				</view>
			</view>
			<view class="pay_till">本单可返积分：</view>
			<view class="pay_till">本单可返卡券：</view>
		</view>
		<view class="pay_btn_box">
			<view class="all_price">共计￥<text>200.00</text></view>
			<button type="primary" class="submit_btn">确认支付</button>
		</view>
	</view>
</template>

<script>
	import api from '../../common/api.js'
	export default{
		data(){
			return{
				project_name: "项目名称·品牌民称",
				array: ['花伴里·hotwind'],
				select_ticket: "选择优惠券",
				ticket_arr: ["满90减10元"],
				select_point: "1000积分抵10元",
				point_arr: ["1000积分抵10元"]
			}
		},
		methods:{
			bindPickerChange(e){
				this.project_name = this.array[e.target.value];
			},
			bindTicketChange(e){
				this.select_ticket = this.ticket_arr[e.target.value];
			},
			bindPointChange(e){
				this.select_point = this.point_arr[e.target.value];
			}
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
	.quick_title{
		padding: 20upx 30upx;
		box-sizing: border-box;
		color: #262626;
		font-size: 20upx;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		.pick_view{
			display: flex;
			justify-content: flex-end;
			align-items: center;
			image{
				display: block;
				width: 15upx;
				height: 8upx;
				margin-left: 10upx;
			}
		}
	}
	.pay_box{
		padding: 0 30upx;
		box-sizing: border-box;
		.pay_item{
			padding: 20upx 25upx;
			box-sizing: border-box;
			background: #f7f7f7;
			border-radius: 10upx;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			margin-bottom: 20upx;
			.pi_txt{
				color: #262626;
				font-size: 24upx;
				margin-right: 40upx;
			}
			.pay_right{
				width: 70%;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				color: #262626;
				font-size: 28upx;
				input{
					color: #cacaca;
				}
				.picker{
					width: 100%;
				}
				.pick_view{
					width: 100%;
					display: flex;
					justify-content: space-between;
					align-items: center;
					color: #cacaca;
					font-size: 20upx;
					image{
						display: block;
						width: 18upx;
						height: 28upx;
					}
				}
			}
			&.between{
				justify-content: space-between;
				margin-bottom: 0;
				border-bottom: 1px solid #E7E7E7;
				.pi_txt{
					margin-right: 0;
				}
				.pay_right{
					width: 75%;
				}
			}
			&.point{
				border-bottom: 0;
				margin-bottom: 30upx;
				.pick_view{
					image{
						width: 28upx;
						height: 18upx;
					}
				}
			}
		}
		.pay_till{
			color: #cacaca;
			font-size: 24upx;
			margin-bottom: 15upx;
		}
	}
	.pay_btn_box{
		padding: 0 30upx;
		box-sizing: border-box;
		margin: 120upx auto 20upx;
		.all_price{
			color: #262626;
			font-size: 20upx;
			text-align: center;
			margin-bottom: 40upx;
			text{
				font-size: 28upx;
			}
		}
	}
</style>
