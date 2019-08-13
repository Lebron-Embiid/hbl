<template>
	<view class="visitor_invite_view">
		<view class="invite_box">
			<view class="invite_item">
				<text>授权房屋</text>
				<view class="ivt_right">聚龙苑小区10号405室</view>
			</view>
			<view class="invite_item">
				<text>有效时间</text>
				<view class="ivt_right">
					<view class="time_item" :class="[current == index?'active':'']" v-for="(item,index) in time_arr" :key="index" @tap="selectTime(index)">{{item}}</view>
				</view>
			</view>
			<view class="invite_item">
				<text>开始时间</text>
				<view class="ivt_right">
					<view class="time_txt">2019-05-01 12:30</view>
				</view>
			</view>
			<view class="invite_item">
				<text>结束时间</text>
				<view class="ivt_right">
					<view class="time_txt">2019-05-01 13:30</view>
				</view>
			</view>
			<view class="code_box">
				<image src="../../static/code.jpg" mode="widthFix"></image>
			</view>
			<view class="code_txt">通过分享或截图发送给好友,好友点击分享链接或长按识别二维码领取通行证后,在有效时间内可使用微信扫描门禁二维码进行开门。</view>
			<button type="primary" class="submit_btn share_btn">点击分享</button>
		</view>
	</view>
</template>

<script>
	import api from '../../common/api.js'
	export default{
		data(){
			return{
				current: '-1',
				time_arr: ["一小时","四小时","当天"]
			}
		},
		methods:{
			selectTime(e){
				this.current = e;
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
	.visitor_invite_view{
		padding: 35upx 50upx;
		box-sizing: border-box;
		.invite_box{
			padding: 30upx 30upx 40upx;
			box-sizing: border-box;
			box-shadow: 0 0 15upx #F1F1F0;
			border-radius: 10upx;
			.invite_item{
				display: flex;
				justify-content: flex-start;
				align-items: center;
				color: #262626;
				font-size: 24upx;
				margin-bottom: 20upx;
				text{
					color: #999;
					margin-right: 40upx;
				}
				.ivt_right{
					display: flex;
					justify-content: flex-start;
					align-items: center;
					.time_item{
						display: block;
						width: 128upx;
						height: 52upx;
						line-height: 52upx;
						text-align: center;
						color: #fff;
						font-size: 20upx;
						background: #d1d1d1;
						border-radius: 10upx;
						margin: 15upx 12upx 10upx 0;
						&.active{
							background: #1fa4fc;
						}
					}
					.time_txt{
						padding: 15upx;
						box-sizing: border-box;
						border: 1px solid #DBDBDB;
						width: 350upx;
						font-size: 20upx;
					}
				}
			}
			.code_box{
				width: 236upx;
				height: 236upx;
				border: 1px solid #F5F5F5;
				padding: 5upx;
				box-sizing: border-box;
				margin: 30upx auto;
				image{
					display: block;
					width: 100%;
					height: 100%;
				}
			}
			.code_txt{
				color: #999;
				font-size: 20upx;
				margin-bottom: 40upx;
			}
			.share_btn{
				width: 270upx;
				height: 77upx;
				line-height: 77upx;
			}
		}
	}
</style>