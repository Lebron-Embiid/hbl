<template>
	<view class="photo_credit_view">
		<view class="credit_item">
			<text class="credit_left">消费商铺</text>
			<view class="credit_right">
				<input type="text" :value="shop_name" v-model="shop_name" />
			</view>
		</view>
		<view class="credit_item">
			<text class="credit_left">消费金额</text>
			<view class="credit_right">
				<input type="text" :value="consume_price" v-model="consume_price" />
			</view>
		</view>
		<view class="credit_item">
			<text class="credit_left">消费日期</text>
			<view class="credit_right">
				<picker mode="date" @change="selectDate">
					<input type="text" disabled :value="consume_date" v-model="consume_date" />
				</picker>
			</view>
		</view>
		<view class="credit_item">
			<text class="credit_left"></text>
			<view class="credit_right no">
				<view class="repair_photo_box">
					<view class="add_photo_box">
						<view class="add_btn" @tap="chooseImage">
							<image src="../../static/camera1.png" mode="widthFix"></image>
							<text>拍照上传</text>
						</view>
						<!-- <view class="photo_box"> -->
							<view class="photo_item" @tap="previewImage(index)" v-for="(item,index) in photo_list" :key="index"><image :src="item" class="img" mode="widthFix"></image><image src="../../static/close.jpg" @tap.stop="deletePhoto(index)" mode="widthFix" class="del_icon"></image></view>
						<!-- </view> -->
					</view>
				</view>
			</view>
		</view>
		<button type="primary" class="submit_btn credit_btn">确认上传</button>
		<view class="credit_bottom">
			<view class="cre_title">温馨提示：</view>
			<view class="cre_txt">1.请将购物小票清晰、无误地拍照上传，准确填写相应消费记录，工作人员会在7日内进行审核，审核确认前请您保留小票以便核对；</view>
			<view class="cre_txt">2.购物小票须整张拍照，购物小票中的流水号码、消费日期、消费金额、消费店铺等信息须清晰可见；</view>
			<view class="cre_txt">3.如出现上传照片失真、信息缺失或填写信息与小票内容不一致等情况，积分将作失效；</view>
			<view class="cre_txt">4.请于消费之日起7日内完成积分操作，逾期不再积分；</view>
			<view class="cre_txt">5.会员可通过“我的积分”，查询14天内积分明细；</view>
		</view>
	</view>
</template>

<script>
	import api from '../../common/api.js'
	export default{
		data(){
			return{
				shop_name: "海底捞",
				consume_price: "489",
				consume_date: "2019-07-18",
				photo_list: []
			}
		},
		methods:{
			selectDate(e){
				this.consume_date = e.detail.value;
			},
			chooseImage(){
				var that = this;
				uni.chooseImage({
					count: 3, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['camera'], //拍照选择
					success: (res) => {
						uni.showLoading({
							title: '上传中'
						})
						for(let i in res.tempFilePaths){
							that.photo_list.push(res.tempFilePaths[i]);
						}
						// for(let i in res.tempFilePaths){
						// 	uni.uploadFile({
						// 		url: "", //图片接口
						// 		filePath: res.tempFilePaths[i],
						// 		name: 'image',
						// 		success: (uploadFileRes) => {
						// 			var data = JSON.parse(uploadFileRes.data);
						// 			console.log(data.data.url);
						// 			if(that.photo_list.length >= 3){
						// 				uni.showToast({
						// 					title: "最多上传3张图片",
						// 					icon: "none"
						// 				})
						// 				return false;
						// 			}
						// 			that.photo_list.push(data.data.url);
						// 		}
						// 	});
						// }
						uni.hideLoading();
					}
				});
			},
			previewImage(e){
				var that = this;
				uni.previewImage({
					current: that.photo_list[e],
					urls: that.photo_list
				});
			},
			deletePhoto(e){
				uni.showModal({
					title: "提示",
					content: "确定删除图片？",
					success: (res) => {
						if(res.confirm){
							this.photo_list.splice(e, 1);
						}
					}
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
	.photo_credit_view{
		padding: 40upx 30upx;
		box-sizing: border-box;
		.credit_item{
			display: flex;
			justify-content: flex-start;
			align-items: center;
			margin-bottom: 25upx;
			color: #595959;
			font-size: 26upx;
			.credit_left{
				width: 150upx;
			}
			.credit_right{
				width: 70%;
				border-radius: 10upx;
				border: 1px solid #E9E9E9;
				color: #262626;
				font-size: 20upx;
				&.no{
					border: 0;
				}
				input{
					height: 58upx;
					font-size: 20upx;
					padding: 0 20upx;
					box-sizing: border-box;
				}
				.repair_photo_box{
					padding: 0;
					.add_photo_box{
						.add_btn{
							align-items: center;
							flex-wrap: wrap;
							padding: 10upx 0;
							image{
								display: block;
								width: 57upx;
								height: 48upx;
							}
							text{
								display: block;
								width: 100%;
								text-align: center;
								color: #999;
								font-size: 24upx;
							}
						}
					}
				}
			}
		}
		.credit_btn{
			background: #adadad;
			margin: 60upx auto 50upx;
		}
		.credit_bottom{
			padding-right: 30upx;
			box-sizing: border-box;
			.cre_title{
				margin-bottom: 15upx;
				color: #262626;
				font-size: 24upx;			
			}
			.cre_txt{
				color: #595959;
				font-size: 18upx;
				margin-bottom: 10upx;
			}
		}
	}
</style>