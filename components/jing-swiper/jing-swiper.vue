<template>
	<view class="my-plan-style">
		<!-- 3D轮播 -->
		<swiper class="imageContainer" @change="handleChange" previous-margin="140rpx" next-margin="140rpx" circular autoplay>
			<block v-for="(item,index) in imgList" :key="index">
				<swiper-item class="swiperitem">
					 <!-- :class="currentIndex == index ? 'swiperactive': ''" -->
					<!-- <image class="itemImg" :src="item" lazy-load mode="scaleToFill"></image> -->
					<view class="itemImg">
						<view class="lock_top">
							<view class="lock_title">{{item.title}}</view>
							<view class="lock_info">{{item.info}}</view>
						</view>
						<button type="primary" class="submit_btn lock_btn"><image src="../../static/lock.png" mode="widthFix"></image></button>
					</view>
				</swiper-item>
			</block>
		</swiper>
		<view class="lock_txt">左右滚动选择要开的门</view>
	</view>
</template>
<script>
	export default {
		data(){
			return {
				currentIndex: 0,
				imgList:[
					{
						id: 1,
						title: "聚龙苑小区",
						info: "西北2门"
					},{
						id: 2,
						title: "聚龙苑小区",
						info: "西北2门"
					},{
						id: 3,
						title: "聚龙苑小区",
						info: "西北2门"
					}
				]
			}
		},
		methods:{
			handleChange(e){
				console.log(e.target.current);
				this.currentIndex = e.target.current;
			}
		}
	}	
</script>
<style lang="scss">
	.lock_txt{
		color: #999;
		font-size: 20upx;
		text-align: center;
	}
	// 3D轮播样式
	.imageContainer {
		width: 100%;
		/* height: 500rpx; */
		/* background: #000; */
		height: 300upx;
		background-color: #fff;
		margin: 20upx auto 10upx;
	}
	
	.swiperitem {
		/* height: 500rpx; */
		height: 260upx;
		padding: 0upx 20upx;
		box-sizing: border-box;
		position: relative;
		.swiperText {
			display: flex;
			flex-direction: column;
			align-items: center;
			position: absolute;
			top: 56upx;
			left: 51upx;
			z-index: 998;
			width:162upx;
			height:163upx;
			background:rgba(255,255,255,1);
			border-radius:8upx;
			padding:10upx;
			.name {
				font-size:26upx;
				font-weight:500;
				color:rgba(253,57,91,1);
				line-height:37upx;
				margin-bottom: 10upx;
			}
			.zq,.cz {
				font-size:20upx;
				color:rgba(253,57,91,1);
				line-height:35upx;
			}
			.addNl {
				width:120upx;
				height:26upx;
				background:rgba(253,57,91,1);
				border-radius:13upx;
				font-size:20upx;
				font-weight:500;
				color:rgba(255,255,255,1);
				text-align: center;
				line-height: 26upx;
				margin-top: 10upx;
			}
			
		}
	}
	
	.itemImg {
		position: absolute;
		width: 95%;
		/* height: 380rpx; */
		height: 260upx;
		border-radius: 15upx;
		z-index: 5;
		// opacity: 0.7;
		top: 5%;
		box-shadow:0px 0 15upx 0px rgba(153,153,153,0.24);
		display: flex;
		justify-content: center;
		align-items: flex-end;
		flex-wrap: wrap;
		.lock_top{
			width: 100%;
			text-align: center;
			color: #262626;
			font-family: '黑体';
			.lock_title{
				font-size: 32upx;
				margin-bottom: 15upx;
			}
			.lock_info{
				font-size: 20upx;
			}
		}
		.lock_btn{
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 15upx;
			border-top-left-radius: 0;
			border-top-right-radius: 0;
			background: linear-gradient(left, #5ea9ff,#1e88ff);
			image{
				display: block;
				width: 32upx;
				height: 38upx;
			}
		}
	}
	
	.swiperactive {
		width: 95%;
		opacity: 1;
		z-index: 10;
		/* height: 430rpx; */
		height: 287upx;
		top: 1%;
		transition: all .2s ease-in 0s;
	}
	
	.zhankai{
		text-align: center;
		.iconfont{
			margin-left: 10upx;
		}
	}
</style>