<template>
	<view class="common_shop_view">
		<view class="shop_item" v-for="(item,index) in list" :key="index">
			<view class="shop_info">
				<image :src="item.src" class="shop_img" mode="aspectFill"></image>
				<view class="info_box">
					<view class="si_title">{{item.title}}<text>{{item.floor}}</text></view>
					<view class="si_phone">电话：{{item.phone}}</view>
					<block v-if="item.isPoint == 1">
						<view class="si_type">积分商户</view>
					</block>
				</view>
			</view>
			<image :src="item.star_icon" class="star_icon" @tap.stop="toCollect(index)" mode="widthFix"></image>
		</view>
	</view>
</template>

<script>
	import api from '../common/api.js'
	export default{
		data(){
			return{
				newdata: '',
			}
		},
		props:{
			list: Array,
			F_ID: String
		},
		methods:{
			toCollect(e){
				console.log(e);
				console.log("this.list[e]在这里",this.list[e]);
				console.log("this.list[e].star_cur",this.list[e].star_curt);
				let mid = this.F_ID;
				let SBID = this.list[e].SBID;
				if(this.list[e].star_cur == 0){
					// 收藏商家数据同步到用户收藏列表
					api.post('api/Common/CollectionAdd', { MemberID:mid,SBID:SBID }).then(res => {
						console.log('收藏成功看这里',res.data);
					}).catch(err => {
						
					});
					this.list[e].star_cur = 1;
					this.list[e].star_icon = "../../static/star2.png";
					uni.showToast({
						title: "收藏成功",
						icon: "none"
					})
				}else{
					// 取消收藏商家数据同步到用户收藏列表
					api.post('api/Common/CollectionDel', { MemberID:mid,SBID:SBID }).then(res => {
						console.log('取消收藏成功看这里',res.data);
					}).catch(err => {
						
					});
					console.log(this.list[e].star_cur);
					this.list[e].star_cur = 0;
					this.list[e].star_icon = "../../static/star1.png";
					uni.showToast({
						title: "取消收藏",
						icon: "none"
					})
				}
			}
		},watch:{
			list:function (newVal,oldVal) {
				this.newdata=newVal;//newVal就是获取的动态新数据，赋值给newdata
			}
		}
	}
</script>

<style scoped lang="scss">
	.shop_item{
		padding: 15upx 0;
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		.shop_info{
			display: flex;
			justify-content: flex-start;
			align-items: flex-start;
			color: #262626;
			font-size: 24upx;
			.si_title{
				text{
					margin-left: 10upx;
				}
			}
			.si_type{
				color: #dd2626;
			}
			.shop_img{
				display: block;
				width: 138upx;
				height: 138upx;
				margin-right: 30upx;
			}
			.si_phone{
				margin: 10upx 0;
			}
		}
		.star_icon{
			display: block;
			width: 42upx;
			height: 40upx;
			margin-top: 20upx;
		}
	}
</style>