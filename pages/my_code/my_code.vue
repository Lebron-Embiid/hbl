<template>
	<view class="my_code_view">
		<view class="page_bg"></view>
		<view class="my_code">
			<view class="my_code_info">
				<view class="blue">会员卡号：{{ card }}</view>
				<view>姓名：{{ memberName }}</view>
			</view>
			<view class="code_img"><image :src='QRCode' mode="widthFix"></image></view>
		</view>
	</view>
</template>

<script>
	import api from '../../common/api.js'
	export default{
		data(){
			return{
				card: '加载...',
				memberName: '加载...',
				QRCode: ''
			}
		},
		methods:{
			
		},
		onLoad(opt) {
			let OpenID = '1234567890';
			api.get('api/Common/GetMemberInfo', { OpenID: OpenID }).then(res => {
				console.log(res);
				console.log(res.data.code);
				let code = res.data.code
				if ( code == 1000 ) {
					uni.showLoading({
					    title: '加载失败'
					});
				}else {
					if ( res.data.model == '' ) {
						uni.showLoading({
						    title: '加载中'
						});
					}else {
						this.card = res.data.model.Card;
						this.memberName = res.data.model.MemberName;
						this.QRCode = res.data.model.QRCode;
					}
				}
				
				
				
			}).catch(err => {
				
			})
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