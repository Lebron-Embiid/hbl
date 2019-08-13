<template>
	<view class="property_pay_view">
		<view class="title_top">
			<picker :range="array" @change="bindPickerChange">
				<view class="pick_view">{{project_name}}<image src="../../static/down.png" mode="widthFix"></image></view>
			</picker>
		</view>
		<view class="list_nav">
			<view v-for="(item,index) in navbar" :key="index" :class="[currentTab==index ? 'active' : '']" @click="navbarTap(index)">{{item.name}}</view>
		</view>
		<!-- 应用缴费 -->
		<view class="pay_list" v-if="currentTab == 0">
			<view class="table_box">
				<view class="th_box">
					<view class="th_item">项目</view>
					<view class="th_item">日期</view>
					<view class="th_item">金额</view>
				</view>
				<view class="td_box" v-for="(item,index) in pay_list1" :key="index">
					<view class="td_item">{{item.name}}</view>
					<view class="td_item">{{item.date}}</view>
					<view class="td_item">{{item.price}}</view>
				</view>
				<view class="td_box">
					<view class="td_item">合计</view>
					<view class="td_item">-</view>
					<view class="td_item">504</view>
				</view>
			</view>
			<button type="primary" class="submit_btn pay_btn">现在缴费</button>
		</view>
		<!-- 缴费记录 -->
		<view class="pay_list" v-if="currentTab == 1">
			
		</view>
	</view>
</template>

<script>
	import api from '../../common/api.js'
	export default{
		data(){
			return{
				project_name: "聚龙苑小区10号405室",
				array: ['聚龙苑小区10号405室'],
				navbar:[{name:"应用缴费"},{name:"缴费记录"}],
				currentTab:0,
				pay_list1:[
					{
						name: "物业费",
						date: "2019/07/17",
						price: "168"
					},{
						name: "水费",
						date: "2019/07/17",
						price: "168"
					},{
						name: "电费",
						date: "2019/07/17",
						price: "168"
					}
				]
			}
		},
		methods:{
			bindPickerChange(e){
				this.project_name = this.array[e.target.value];
			},
			navbarTap: function(e){
				this.currentTab = e;
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
	.title_top{
		justify-content: flex-end;
	}
	.pay_list{
		padding: 30upx;
		box-sizing: border-box;
		.table_box{
			border: 1px solid #F3F3F3;
			border-bottom: 0;
			margin-bottom: 90upx;
			.th_box,.td_box{
				display: flex;
				justify-content: center;
				align-items: center;
				color: #999;
				font-size: 20upx;
				.th_item,.td_item{
					width: 33.3%;
					text-align: center;
					padding: 15upx 0;
					border-bottom: 1px solid #F3F3F3;
					border-right: 1px solid #F3F3F3;
					&:nth-child(3n){
						border-right: 0;
					}
				}
			}
			.td_box{
				.td_item{
					color: #262626;
					font-size: 24upx;
				}
			}
		}
		.pay_btn{
			width: 265upx;
			height: 75upx;
			line-height: 75upx;
		}
	}
</style>