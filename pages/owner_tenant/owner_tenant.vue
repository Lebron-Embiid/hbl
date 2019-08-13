<template>
	<view class="owner_tenant_view">
		<view class="suggest_btn">
			<button type="primary" class="submit_btn" @tap="addOwnerTenant"><text>+</text>添加住宅</button>
		</view>
		<view class="owner_item" v-for="(item,index) in owner_list" :key="index">
			<view class="owner_left">
				<view class="ol_title">{{item.title}}</view>
				<view class="ol_info">{{item.info}}</view>
			</view>
			<text>{{item.belong}}</text>
		</view>
	</view>
</template>

<script>
	import api from '../../common/api.js'
	export default{
		data(){
			return{
				owner_list:[
					{
						id: 1,
						title: "项目名称（住宅）",
						info: "1号楼19楼1902室",
						belong: "业主"
					},{
						id: 2,
						title: "项目名称（住宅）",
						info: "1号楼19楼1902室",
						belong: "业主"
					},{
						id: 3,
						title: "项目名称（住宅）",
						info: "1号楼19楼1902室",
						belong: "业主"
					}
				]
			}
		},
		methods:{
			addOwnerTenant(){
				uni.navigateTo({
					url: "/pages/add_owner_tenant/add_owner_tenant"
				})
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
	.owner_tenant_view{
		padding: 20upx 30upx;
		box-sizing: border-box;
		.suggest_btn{
			.submit_btn{
				width: auto;
			}
		}
		.owner_item{
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 20upx;
			box-sizing: border-box;
			box-shadow: 0 10upx 10upx #E7E7E6;
			border-radius: 10upx;
			margin-bottom: 25upx;
			color: #262626;
			font-size: 24upx;
			.ol_info{
				color: #595959;
				margin-top: 30upx;
			}
		}
	}
</style>