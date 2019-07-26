<template>
	<view class="refund_view">
		<view class="refund_title">项目名称·孩子王</view>
		<view class="refund_info_box">
			<view class="rib_item">
				<text class="ri_txt">消费金额：</text>
				<view class="ri_info">￥368.00</view>
			</view>
			<view class="rib_item">
				<text class="ri_txt">卡券优惠：</text>
				<view class="ri_info">
					<view><text>商场卷</text>满100优惠5元，可叠加</view>
					<view><text>商场卷</text>满100优惠5元，可叠加</view>
				</view>
			</view>
			<view class="rib_item">
				<text class="ri_txt">积分抵扣：</text>
				<view class="ri_info">1000积分可抵10元</view>
			</view>
			<view class="rib_item">
				<text class="ri_txt">积分抵扣：</text>
				<view class="ri_info">￥348.00</view>
			</view>
		</view>
		<view class="refund_check_box">
			<checkbox-group @change="checkboxChange">
				<label class="uni-list-cell uni-list-cell-pd" v-for="item in items" :key="item.value">
					<view class="check_view"><checkbox :value="item.value" :checked="item.checked" />{{item.name}}</view>
				</label>
			</checkbox-group>
		</view>
		<view class="refund_bottom_box">
			<view class="rbb_price_box">
				<view class="rpb_item">
					<text class="rpb_txt">退款金额：</text>
					<view class="rpb_info">
						<view class="rpbi_ipt"><text>￥</text><input type="text" :value="refund_price" v-model="refund_price" placeholder="请输入退款金额" /></view>
						<view>赠送卡卷已使用，扣除10元；</view>
						<view>赠送礼品不能回收，扣除10元</view>
					</view>
				</view>
				<view class="rpb_item">
					<text class="rpb_txt">退款金额：</text>
					<view class="rpb_info">￥20.00</view>
				</view>
				<view class="rpb_item">
					<text class="rpb_txt">退款金额：</text>
					<view class="rpb_info">￥130.00</view>
				</view>
			</view>
			<button type="primary" class="submit_btn refund_submit">退款申请</button>
			<view class="refund_till">本单剩余金额可返积分：</view>
			<view class="refund_till">本单剩余金额可返卡卷：<text>有限期内</text></view>
			<view class="refund_till">本单剩余金额可送礼品：<text>有限期内</text></view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				items: [
					{
                        value: 'refund1',
                        name: '本单相应商品(如有)已退回；'
                    },
                    {
                        value: 'refund2',
                        name: '本单赠送积分348，将会作废；'
                    },
                    {
                        value: 'refund3',
                        name: '本单赠送卡卷XXX，将会作废；'
                    },
                    {
                        value: 'refund4',
                        name: '本单赠送卡卷XXX已使用，则在退款金额中扣除;'
                    },
                    {
                        value: 'refund5',
                        name: '本单赠送礼品XXX，已退回；'
                    },
                    {
                        value: 'refund6',
                        name: '本单赠送礼品XXX不能回收，则在退款金额中扣除;'
                    }
                ],
				refund_price: ""
			}
		},
		methods:{
			checkboxChange: function (e) {
                var items = this.items,
                    values = e.detail.value;
                for (var i = 0, lenI = items.length; i < lenI; ++i) {
                    const item = items[i]
                    if(values.includes(item.value)){
                        this.$set(item,'checked',true)
                    }else{
                        this.$set(item,'checked',false)
                    }
                }
				console.log(values)
            }
		},
		onLoad() {
			
		}
	}
</script>

<style scoped lang="scss">
	.refund_title{
		padding: 15upx 30upx;
		box-sizing: border-box;
		border-bottom: 15upx solid #f7f7f7;
		color: #262626;
		font-size: 28upx;
	}
	.refund_info_box{
		padding: 15upx 30upx 0;
		box-sizing: border-box;
		border-bottom: 15upx solid #f7f7f7;
		.rib_item{
			display: flex;
			justify-content: flex-start;
			align-items: flex-start;
			margin-bottom: 25upx;
			color: #262626;
			font-size: 24upx;
			.ri_txt{
				color: #999;
			}
			.ri_info{
				view{
					margin-bottom: 10upx;
					&:last-child{
						margin-bottom: 0;
					}
				}
			}
		}
	}
	.refund_check_box{
		padding: 30upx 30upx 20upx;
		box-sizing: border-box;
		border-bottom: 15upx solid #f7f7f7;
		.check_view{
			color: #262626;
			font-size: 24upx;
			display: flex;
			align-items: center;
			margin-bottom: 10upx;
			checkbox{
				transform: scale(.7);
			}
		}
	}
	.refund_bottom_box{
		padding: 25upx 30upx;
		box-sizing: border-box;
		.rbb_price_box{
			.rpb_item{
				margin-bottom: 25upx;
				display: flex;
				justify-content: flex-start;
				align-items: flex-start;
				color: #262626;
				font-size: 24upx;
				.rpb_txt{
					color: #999;
				}
				.rpb_info{
					view{
						color: #999;
						font-size: 20upx;
					}
					.rpbi_ipt{
						color: #262626;
						font-size: 24upx;
						display: flex;
						justify-content: flex-start;
						align-items: flex-start;
						margin-bottom: 20upx;
						input{
							color: #999;
							font-size: 20upx;
							margin-left: 10upx;
							padding-bottom: 8upx;
							border-bottom: 1px solid #C7C7C7;
						}
					}
				}
			}
		}
		.refund_submit{
			margin: 50upx auto 20upx;
		}
		.refund_till{
			color: #999;
			font-size: 20upx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 10upx;
		}
	}
</style>