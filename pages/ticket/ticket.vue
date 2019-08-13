<template>
	<view class="ticket_view">
		<view class="list_nav" style="top: 44px">
			<view v-for="(item,index) in navbar" :key="index" :class="[currentTab==index ? 'active' : '']" @click="navbarTap(index)">{{item.name}}</view>
		</view>
		<scroll-view class="ticket_type" scroll-x>
			<view v-for="(item,index) in ticket_type" :key="index">{{item}}</view>
		</scroll-view>
		<!-- 未使用 -->
		<view class="ticket_list" v-if="currentTab == 0">
			<view class="ticket_item" :class="[item.type == 0?'djq':'' || item.type == 1?'zkq':'' || item.type == 2?'lpq':'' || item.type == 3?'mzq':'']" v-for="(item,index) in ticket_list" :key="index">
				<!-- <image src="../../static/ticket_bg.jpg" mode="aspectFill"></image> -->
				<view class="ticket_content">
					<view class="ticket_top">
						<view class="ticket_left">
							<view class="tc_title">{{item.title}}</view>
							<view class="tc_time">有效期：{{item.start_date}}~{{item.end_date}}</view>
							<view class="tc_use">立即使用</view>
						</view>
					</view>
					<view class="tc_discount">规则：{{item.rule}}</view>
				</view>
			</view>
		</view>
		<!-- 已使用 -->
		<view class="ticket_list" v-if="currentTab == 1">
			<view class="ticket_item" :class="[item.type == 0?'djq':'' || item.type == 1?'zkq':'' || item.type == 2?'lpq':'' || item.type == 3?'mzq':'']" v-for="(item,index) in ticket_list1" :key="index">
				<!-- <image src="../../static/ticket_bg.jpg" mode="aspectFill"></image> -->
				<view class="ticket_content">
					<view class="ticket_top">
						<view class="ticket_left">
							<view class="tc_title">{{item.title}}</view>
							<view class="tc_time">有效期：{{item.start_date}}~{{item.end_date}}</view>
							<view class="tc_use">立即使用</view>
						</view>
					</view>
					<view class="tc_discount">规则：{{item.rule}}</view>
				</view>
			</view>
		</view>
		<!-- 已过期 -->
		<view class="ticket_list" v-if="currentTab == 2">
			<view class="ticket_item" :class="[item.type == 0?'djq':'' || item.type == 1?'zkq':'' || item.type == 2?'lpq':'' || item.type == 3?'mzq':'']" v-for="(item,index) in ticket_list2" :key="index">
				<!-- <image src="../../static/ticket_bg.jpg" mode="aspectFill"></image> -->
				<view class="ticket_content">
					<view class="ticket_top">
						<view class="ticket_left">
							<view class="tc_title">{{item.title}}</view>
							<view class="tc_time">有效期：{{item.start_date}}~{{item.end_date}}</view>
							<view class="tc_use">立即使用</view>
						</view>
					</view>
					<view class="tc_discount">规则：{{item.rule}}</view>
				</view>
			</view>	
		</view>
	</view>
</template>

<script>
	import api from '../../common/api.js'
	export default{
		data(){
			return{
				navbar:[{name:"未使用"},{name:"已使用"},{name:"已过期"}],
				currentTab:0,
				ticket_type: ["代金券","折扣券","礼品券","满赠券"],
				ticket_list: [
					{
						id: 1,
						type: 0,
						title: "全场餐饮店铺",
						start_date: "2019-03-01",
						end_date: "2019-03-10",
						rule: "消费满200到400优惠20"
					},{
						id: 2,
						type: 1,
						title: "H&M，HotWind，IT",
						start_date: "2019-03-01",
						end_date: "2019-03-10",
						rule: "消费满500到1000，九折"
					},{
						id: 3,
						type: 2,
						title: "全场店铺",
						start_date: "2019-03-01",
						end_date: "2019-03-10",
						rule: "每200送电影票一张"
					},{
						id: 4,
						type: 3,
						title: "全场餐饮店铺",
						start_date: "2019-03-01",
						end_date: "2019-03-10",
						rule: "消费满200到400优惠20"
					}
				],
				ticket_list1: [
					{
						id: 1,
						type: 0,
						title: "麦乐送",
						start_date: "2019-03-01",
						end_date: "2019-03-10",
						rule: "消费满200到400优惠20"
					},{
						id: 2,
						type: 1,
						title: "炸鸡汉堡专属6元",
						start_date: "2019-03-01",
						end_date: "2019-03-10",
						rule: "消费满500到1000，九折"
					}
				],
				ticket_list2: [
					{
						id: 1,
						type: 0,
						title: "无门槛15元",
						start_date: "2019-03-01",
						end_date: "2019-03-10",
						rule: "消费满200到400优惠20"
					},{
						id: 2,
						type: 1,
						title: "熊猫蛋糕",
						start_date: "2019-03-01",
						end_date: "2019-03-10",
						rule: "消费满500到1000，3.5折"
					}
				]
			}
		},
		methods:{
			navbarTap: function(e){
				this.currentTab = e;
				let _e = e+1;
				let mid = '99f0b12e-a0a3-40e9-8011-a1477262a667';
				api.get('api/Common/GetCouponList', {MemberID:mid,IsMake:_e,CouponType:''}).then(res => {
					console.log(res.data);
					const data = res.data.data;
					if(data != ''){
						let ticketList = [];
						for(let i in data){
							let _data = data[i]
							let ticketObj = {name:_data.ProjectName, type: _data.CouponType, title:_data.Title, start_date:_data.StartDate,end_date:_data.EndDate,rule:_data.Discount };
							ticketList.push(ticketObj);
						}
						if ( _e == 1 ) {
							this.ticket_list = ticketList;
							console.log(1);
						}else if (_e == 2) {
							this.ticket_list1 = ticketList;
							console.log(2);
						}else {
							this.ticket_list2 = ticketList;
							console.log(3);
						}
					}
				}).catch(err => {
					
				});
			}
		},
		onLoad(opt) {
			let mid = '99f0b12e-a0a3-40e9-8011-a1477262a667';
			api.get('api/Common/GetCouponList', {MemberID:mid,IsMake:'1',CouponType:''}).then(res => {
				console.log(res.data);
			}).catch(err => {
				
			});
		}
	}
</script>

<style scoped lang="scss">
	.ticket_type{
		padding: 20upx 30upx;
		box-sizing: border-box;
		white-space: nowrap;
		view{
			display: inline-block;
			width: 132upx;
			height: 44upx;
			line-height: 44upx;
			text-align: center;
			color: #fff;
			font-size: 24upx;
			background: #1fa4fc;
			border-radius: 10upx;
			margin-right: 25upx;
			&:last-child{
				margin-right: 0;
			}
		}
	}
	.ticket_list{
		background: #f7f7f7;
		padding: 0 30upx 25upx;
		box-sizing: border-box;
		overflow: hidden;
		.ticket_item{
			margin-top: 15upx;
			display: flex;
			justify-content: flex-end;
			align-items: stretch;
			box-shadow: 0 0 20upx #E7E7E7;
			background: #fff;
			&.djq{
				background: #fff url('../../static/ticket_bg.jpg') center left no-repeat;
				background-size: 188upx 100%;
			}
			&.zkq{
				background: #fff url('../../static/ticket_bg1.jpg') center left no-repeat;
				background-size: 188upx 100%;
			}
			&.lpq{
				background: #fff url('../../static/ticket_bg2.jpg') center left no-repeat;
				background-size: 188upx 100%;
			}
			&.mzq{
				background: #fff url('../../static/ticket_bg3.jpg') center left no-repeat;
				background-size: 188upx 100%;
			}
			// position: relative;
			image{
				display: block;
				width: 188upx;
				height: 190upx;
				// height: 100%;
				// position: absolute;
				// left: 0;
				// top: 0;
			}
			.ticket_content{
				width: 72%;
				padding: 0 20upx 10upx;
				box-sizing: border-box;
				.ticket_top{
					display: flex;
					justify-content: space-between;
					align-items: flex-start;
					padding: 10upx 0;
					border-bottom: 1px solid #F8F9FC;
					margin-bottom: 10upx;
					.ticket_left{
						width: 100%;
						.tc_title{
							color: #111;
							font-size: 32upx;
						}
						.tc_time{
							color: #999;
							font-size: 20upx;
							margin: 10upx 0 5upx;
						}
					}
					.tc_use{
						color: #fff;
						font-size: 17upx;
						background: linear-gradient(left, #1eaaff,#1eaaff);
						height: 36upx;
						line-height: 36upx;
						padding: 5upx 20upx;
						text-align: center;
						border-radius: 50upx;
						float: right;
					}
				}
				.tc_discount{
					color: #747474;
					font-size: 18upx;
				}
			}
		}
	}
</style>