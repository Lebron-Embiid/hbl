<template>
	<view class="index_view">
		<view class="title_top">
			<text>尊敬的金卡会员{{vip_name}}，您好！当前可用积分{{integral}}</text>
			<picker :range="array" @change="bindPickerChange">
				<view class="pick_view">{{project_name}}<image src="../../static/down.png" mode="widthFix"></image></view>
			</picker>
		</view>
		<swiper class="swiper" :indicator-dots="indicatorDots" :circular="loop" :autoplay="autoplay" :interval="interval" :duration="duration">
			<swiper-item v-for="(item,index) in swiperLists" :key="index">
				<view class="swiper-item"><image :src="item" mode="widthFix"></image></view>
			</swiper-item>
		</swiper>
		<view class="want_view" v-if="istype == 0">
			<navigator url="/pages/quick_pay/quick_pay" class="want_btn">我要买单</navigator>
			<view class="want_nav">
				<view class="want_nav_item" v-for="(item,index) in nav_list" @tap="toAutoPage(index)" :key="index">
					<view class="wni_img"><image :src="item.icon" mode="widthFix"></image></view>
					<text>{{item.title}}</text>
				</view>
			</view>
		</view>
		<view class="want_view" v-else>
			<view class="want_lock_top">
				<button type="primary" class="submit_btn">立即认证/3号1903室</button>
				<picker class="picker_box" :range="array1" @change="bindPropertyChange">
					<view class="pick_view">{{property_name}}<image src="../../static/down.png" mode="widthFix"></image></view>
				</picker>
			</view>
			<view class="want_nav">
				<view class="want_nav_item" v-for="(item,index) in nav_list1" @tap="toAutoPage1(index)" :key="index">
					<view class="wni_img wni_img1"><image :src="item.icon" mode="widthFix"></image></view>
					<text>{{item.title}}</text>
				</view>
			</view>
		</view>
		<view class="index_content_view">
			<view class="icv_title">【Social House】Fresh 插花之旅</view>
			<image src="../../static/flower_img1.jpg" mode="widthFix"></image>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				vip_name: "张湘",
				integral: "56,000",
				project_name: "项目名称",
				property_name: "多套物业选择",
				array: ['花伴里'],
				array1: ['物业选择1'],
				swiperLists: ["../../static/banner.jpg","../../static/banner.jpg","../../static/banner.jpg"],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				loop: true,
				istype: 0,
				nav_list: [
					{title: "我要找店",icon: "../../static/want_icon1.png",url: "/pages/find_shop/find_shop"},
					{title: "我要停车",icon: "../../static/want_icon2.png",url: "/pages/parking/parking"},
					{title: "我要签到",icon: "../../static/want_icon3.png",url: "/pages/check_in/check_in"},
					{title: "我要卡券",icon: "../../static/want_icon4.png",url: "/pages/ticket/ticket"},
					{title: "拍照积分",icon: "../../static/want_icon5.png",url: "/pages/photo_credit/photo_credit"},
					{title: "我的二维码",icon: "../../static/want_icon6.png",url: "/pages/my_code/my_code"}
				],
				nav_list1: [
					{title: "门禁钥匙",icon: "../../static/want1_icon1.png",url: "/pages/door_lock/door_lock"},
					{title: "呼叫管家",icon: "../../static/want1_icon2.png",url: ""},
					{title: "物业缴费",icon: "../../static/want1_icon3.png",url: "/pages/property_pay/property_pay"},
					{title: "访客邀请",icon: "../../static/want1_icon4.png",url: "/pages/visitor_invite/visitor_invite"},
					{title: "我要报修",icon: "../../static/want1_icon5.png",url: "/pages/repair/repair"},
					{title: "小区告示",icon: "../../static/want1_icon6.png"}
				]
			}
		},
		methods:{
			bindPickerChange(e){
				this.project_name = this.array[e.target.value];
			},
			bindPropertyChange(e){
				this.property_name = this.array1[e.target.value];
			},
			toAutoPage(e){
				uni.navigateTo({
					url: this.nav_list[e].url
				})
			},
			toAutoPage1(e){
				uni.navigateTo({
					url: this.nav_list1[e].url
				})
			}
		},
		onLoad() {
			
		}
	}
</script>

<style scoped lang="scss">
	.swiper{
		height: 370upx;
		.swiper-item image{
			display: block;
			width: 100%;
		}
	}
	.want_view{
		padding: 0 30upx;
		box-sizing: border-box;
		.want_btn{
			display: block;
			width: 100%;
			height: 76upx;
			line-height: 76upx;
			background: linear-gradient(left, #5ea9ff,#1d88ff);
			margin: 15upx 0 40upx;
			border-radius: 8upx;
			color: #fff;
			font-size: 28upx;
			text-align: center;
		}
		.want_lock_top{
			display: flex;
			justify-content: space-between;
			align-items: stretch;
			margin: 15upx 0 30upx;
			.submit_btn{
				width: 49%;
				margin: 0;
				padding: 0;
				box-sizing: border-box;
				border-radius: 0;
			}
			.picker_box{
				width: 49%;
				border: 1px solid #B9B9B9;
				.pick_view{
					height: 72upx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 0 30upx;
					box-sizing: border-box;
					color: #262626;
					font-size: 28upx;
					image{
						display: block;
						width: 15upx;
						height: 8upx;
						margin-left: 10upx;
					}
				}
			}
		}
		.want_nav{
			display: flex;
			justify-content: space-between;
			align-items: stretch;
			flex-wrap: wrap;
			.want_nav_item{
				width: 30%;
				color: #262626;
				font-size: 24upx;
				text-align: center;
				margin-bottom: 20upx;
				.wni_img{
					width: 100upx;
					height: 100upx;
					border-radius: 50%;
					background: #fff;
					box-shadow: 0 0 15upx #F5F5F5;
					display: flex;
					justify-content: center;
					align-items: center;
					margin: 0 auto 15upx;
					image{
						display: block;
						width: 48upx;
						height: 44upx;
					}
					&.wni_img1{
						image{
							width: 48upx;
							height: 48upx;
						}
					}
				}
			}
		}
	}
	.index_content_view{
		padding: 0 0 30upx;
		.icv_title{
			color: #262626;
			font-size: 28upx;
			padding: 20upx 30upx;
			box-sizing: border-box;
		}
		image{
			display: block;
			width: 100%;
		}
	}
</style>