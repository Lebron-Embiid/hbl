<template>
	<view class="my_order_view">
		<view class="page_bg"></view>
		<common-search :keywords="keywords" :F_ID="F_ID" :type="type" @searchData="getData" :placeholder="placeholder"></common-search>
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
					<view class="del_btn" @tap="delOrder(item.id)">删除订单</view>
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
	import api from '../../common/api.js'
	import commonSearch from '../../components/common_search.vue'
	import store from '../../store/store'
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
					}
				],
				F_ID: '',
				type: true,
			}
		},
		components:{
			commonSearch
		},
		methods:{
			toCommit(e){
				let F_SBID = this.order_list[e].F_ID;
				uni.navigateTo({
					url: "/pages/order_eval/order_eval?id="+e+"&F_SBID="+F_SBID+'&F_ID='+this.F_ID,
				})
			},
			toRefund(e){
				uni.navigateTo({
					url: "/pages/refund/refund?id="+e
				})
			},
			// 删除订单
			delOrder(e) {
				// console.log('--',this._data.order_list[e].F_ID);
				
				const _this = this;
				uni.showModal({
				    title: '删除--订单',
				    content: '删除再也不出现在列表页',
				    success: function (res) {
				        if (res.confirm) {
				            console.log('用户点击确定');
							console.log('e',e);
							console.log('order_list',_this);
							
							let F_ID = _this.order_list[e].F_ID;
							api.get('api/Common/OrderDel', { OrderID:F_ID }).then(res => {
								console.log(res.data);
								api.get('api/Common/GetOrderList', {MemberID: _this.F_ID,SearchKey: ''}).then(res => {
									console.log(res.data);
									console.log(res.data.data);
									const data = res.data.data;
									if(data != ''){
										let orderList = [];
										for(let i in data){
											console.log(i)
											let _data = data[i]
											let orderObj = {id:i, src: _data.Logo, title:_data.STitles, price:_data.ChargingPrice,  integral:_data.Integral, time: _data.F_CreateDate,status: '0',F_ID:_data.F_ID };
											orderList.push(orderObj);
										}
										_this.order_list = orderList;
									}
								}).catch(err => {
									
								})
							}).catch(err => {
								
							})
							
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
				
				
			},
			getData(val) {
			    console.log('父组件接受收---',val)
				const data = val;
				if(data != ''){
					let orderList = [];
					for(let i in data){
						console.log(i)
						let _data = data[i]
						let orderObj = {id:i, src: _data.Logo, title:_data.STitles, price:_data.ChargingPrice,  integral:_data.Integral, time: _data.F_CreateDate,status: '0',F_ID:_data.F_ID };
						orderList.push(orderObj);
					}
					this.order_list = orderList;
				}
			}
		},
		onLoad(opt) {
			let OpenID = store.state.OpenID;
			let MemberID = this.F_ID;
			api.get('api/Common/GetMemberInfo', {OpenID:OpenID}).then(res => {
				console.log(res.data);
				let fid = this.F_ID = res.data.model.F_ID;
				if( fid != 0 ) {
					api.get('api/Common/GetOrderList', {MemberID: fid,SearchKey: ''}).then(res => {
						console.log(res.data);
							
						const data = res.data.data;
						if(data != ''){
							let orderList = [];
							for(let i in data){
								console.log(i)
								let _data = data[i]
								let orderObj = {id:i, src: _data.Logo, title:_data.STitles, price:_data.ChargingPrice,  integral:_data.Integral, time: _data.F_CreateDate,status: _data.Iscomment,F_ID:_data.F_ID };
								orderList.push(orderObj);
							}
							this.order_list = orderList;
						}
					}).catch(err => {
						
					})
				}
				
			}).catch(err => {
				
			})
		},
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