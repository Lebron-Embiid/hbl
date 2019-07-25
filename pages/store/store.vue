<template>
	<view class="store_view">
		<view class="store_top">
			<view class="over_score">可用积分：<text>56000</text></view>
			<navigator url="">兑换记录</navigator>
		</view>
		<view class="select_nav_box">
			<view class="select_nav_item">
				<picker :range="class_arr" @change="select_class">
					<view class="sni_title">{{class_def}}<image src="../../static/down.png" mode="widthFix"></image></view>
				</picker>
			</view>
			<view class="select_nav_item">
				<picker :range="sort_arr" @change="select_sort">
					<view class="sni_title">{{sort_def}}<image src="../../static/down.png" mode="widthFix"></image></view>
				</picker>
			</view>
			<view class="select_nav_item">
				<picker :range="exchange_arr" @change="select_exchange">
					<view class="sni_title">{{exchange_def}}<image src="../../static/down.png" mode="widthFix"></image></view>
				</picker>
			</view>
		</view>
		<view class="store_content_view">
			<view class="store_item" v-for="(item,index) in store_list" :key="index">
				<image :src="item.src" mode="aspectFill"></image>
				<view class="si_title">{{item.title}}</view>
				<view class="si_point">{{item.num}}积分</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				class_def: "分类",
				class_arr: ["分类1","分类2","分类3"],
				sort_def: "排序",
				sort_arr: ["正序","倒序"],
				exchange_def: "我能兑换",
				exchange_arr: ["兑换1","兑换2","兑换3"],
				store_list: [
					{
						id: 1,
						src: "../../static/store_img1.jpg",
						title: "欧亚利手表男士全自动机械表",
						num: "4500"
					},{
						id: 2,
						src: "../../static/store_img1.jpg",
						title: "欧亚利手表男士全自动机械表",
						num: "4500"
					},{
						id: 3,
						src: "../../static/store_img1.jpg",
						title: "欧亚利手表男士全自动机械表",
						num: "4500"
					}
				]
			}
		},
		methods:{
			select_class(e){
				this.class_def = this.class_arr[e.target.value];
			},
			select_sort(e){
				this.sort_def = this.sort_arr[e.target.value];				
			},
			select_exchange(e){
				this.exchange_def = this.exchange_arr[e.target.value];				
			}
		},
		onLoad() {
			
		}
	}
</script>

<style scoped lang="scss">
	.store_top{
		padding: 20upx 30upx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 15upx solid #f5f5f5;
		.over_score{
			color: #262626;
			font-size: 28upx;
			text{
				color: #dd2626;
			}
		}
		navigator{
			display: block;
			width: 172upx;
			height: 58upx;
			line-height: 58upx;
			text-align: center;
			background: linear-gradient(left, #5ea9ff,#1d88ff);
			border-radius: 10upx;
			color: #fff;
			font-size: 24upx;
		}
	}
	.store_content_view{
		display: flex;
		justify-content: space-between;
		align-items: stretch;
		flex-wrap: wrap;
		.store_item{
			width: 49%;
			font-size: 24upx;
			background: #f7f7f7;
			margin-bottom: 25upx;
			image{
				display: block;
				width: 100%;
				height: 336upx;
			}
			.si_title{
				color: #262626;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				padding: 15upx 20upx 25upx;
				box-sizing: border-box;
			}
			.si_point{
				height: 70upx;
				line-height: 70upx;
				color: #fff;
				background: #f2acac;
				text-align: center;
			}
		}
	}
</style>