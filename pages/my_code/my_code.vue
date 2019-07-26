<template>
	<view class="my_code_view">
		<view class="page_bg"></view>
		<view class="my_code">
			<view class="my_code_info">
				<view class="blue">会员卡号：1652225269</view>
				<view>姓名：小陈</view>
			</view>
			<view class="code_img"><image src="../../static/code.jpg" mode="widthFix"></image></view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			
		},
		onLoad() {
			
		}
	}
</script>

<style scoped lang="scss">
	.my_code_view{
		padding: 30upx 50upx;
		box-sizing: border-box;
		.my_code{
			background: #fff;
			padding: 50upx 40upx 80upx;
			box-sizing: border-box;
			border-radius: 10upx;
			box-shadow: 0 0 10upx #EAEAE9;
			.my_code_info{
				display: flex;
				justify-content: space-between;
				align-items: center;
				view{
					width: 48%;
					height: 76upx;
					line-height: 76upx;
					text-align: center;
					color: #1fa4fc;
					font-size: 20upx;
					border: 1px solid #64C0FD;
					box-sizing: border-box;
					&.blue{
						background: #1fa4fc;
						border-color: #1fa4fc;
						color: #fff;
					}
				}
			}
			.code_img{
				width: 420upx;
				height: 420upx;
				padding: 10upx;
				border: 1px solid #F7F7F7;
				box-sizing: border-box;
				margin: 70upx auto 0;
				image{
					display: block;
					width: 100%;
					height: 100%;
				}
			}
		}
	}
</style>