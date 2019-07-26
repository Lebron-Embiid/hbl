<template>
	<view class="suggest_view">
		<view class="suggest_btn">
			<button type="primary" class="submit_btn" @tap="toAddSuggest"><text>+</text>添加</button>
		</view>
		<view class="suggest_item" v-for="(item,index) in suggest_list" :key="index">
			<view class="suggest_title">
				<view>{{item.name}}</view>
				<text>{{item.time}}</text>
			</view>
			<view class="suggest_info">
				<view>{{item.info}}</view>
				<text class="red" v-if="item.status == 0">处理中</text>
				<text v-if="item.status == 1">予以采纳</text>
				<text class="no" v-if="item.status == 2">不予以采纳</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				suggest_list: [
					{
						name: "项目名称(商业)",
						time: "2019-03-08  13:10:25",
						info: "关于XXX的事项",
						status: "0"
					},{
						name: "项目名称(住宅)",
						time: "2019-03-08  13:10:25",
						info: "关于XXX的事项",
						status: "1"
					},{
						name: "项目名称(住宅)",
						time: "2019-03-08  13:10:25",
						info: "关于XXX的事项",
						status: "2"
					}
				]
			}
		},
		methods:{
			toAddSuggest(){
				uni.navigateTo({
					url: "/pages/add_suggest/add_suggest"
				})
			}
		},
		onLoad() {
			
		}
	}
</script>

<style scoped lang="scss">
	.suggest_view{
		padding: 0 30upx;
		box-sizing: border-box;
		.suggest_item{
			padding: 25upx 0;
			border-bottom: 1px solid #F2F2F2;
			.suggest_title{
				display: flex;
				justify-content: space-between;
				align-items: center;
				color: #262626;
				font-size: 24upx;
				margin-bottom: 30upx;
				view{
					width: 60%;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
				text{
					color: #595959;
					font-size: 20upx;
				}
			}
			.suggest_info{
				display: flex;
				justify-content: space-between;
				align-items: center;
				color: #595959;
				font-size: 24upx;
				text{
					color: #36c328;
					&.red{
						color: #dd2626;
					}
					&.no{
						color: #999;
					}
				}
			}
		}
	}
</style>