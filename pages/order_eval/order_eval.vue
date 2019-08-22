<template>
	<view class="order_eval_view">
		<view class="page_bg"></view>
		<view class="order_eval_info">
			<image :src="order_src" mode="aspectFill"></image>
			<view class="order_center">
				<view class="oc_title">{{title}}</view>
				<view class="oc_info">
					<view>金额：<text>{{price}}</text></view>
					<view>积分：<text>{{integral}}</text></view>
				</view>
				<view class="oc_time">时间：<text>{{time}}</text></view>
			</view>
		</view>
		<view class="shop_eval_box">
			<view class="seb_title">店铺评价</view>
			<view class="shop_eval_item">
				<text>商品质量</text>
				<sunui-star :defaultStar="0" :maxStar="5" :starSize='"1.2em"' @changeStar="changeStar1" class='sunui-star' />
			</view>
			<view class="shop_eval_item">
				<text>服务态度</text>
				<sunui-star :defaultStar="0" :maxStar="5" :starSize='"1.2em"' @changeStar="changeStar2" class='sunui-star' />
			</view>
			<view class="shop_eval_item">
				<text>店铺环境</text>
				<sunui-star :defaultStar="0" :maxStar="5" :starSize='"1.2em"' @changeStar="changeStar3" class='sunui-star' />
			</view>
		</view>
		<textarea class="eval_textarea" v-model="eval_content" :value="eval_content" placeholder="分享您的消费体验，超过10字的文字可以获赠10积分" />
		<view class="upload_box">
			<view class="upload_content">
				<view class="upload_btn" @tap="toChoosePhoto"><image src="../../static/camera.png" class="camera" mode="widthFix"></image></view>
				<view class="upload_photo_item" v-for="(item,index) in photo_list" @tap="previewImage(index)" :key="index">
					<image :src="item" mode="aspectFill" class="img"></image>
					<image src="../../static/close.jpg" @tap.stop="delete_photo(index)" mode="widthFix" class="del_icon"></image>
				</view>
			</view>
			<text>上传照片赠送积分10</text>
		</view>
		<button type="primary" class="submit_btn" v-on:click="onEvaluation">我要评价</button>
	</view>
</template>

<script>
	import api from '../../common/api.js'
	import sunuiStar from '../../components/sunui-star/sunui-star.vue'
	export default{
		data(){
			return{
				order_src: "../../static/order_img1.jpg",
				title: "Hotwind",
				price: "368.00",
				integral: 368,
				time: "2019-01-25 18:30:24",
				eval_content: "",
				photo_list: [],
				F_ID:'',
				SBID:'',
				Commodity:'',
				Attitude:'',
				Environment:'',
				OrderID: ''
			}
		},
		components:{
			sunuiStar
		},
		methods:{
			changeStar1: function(e) {
                console.log('curStar1:', e.curStar)
				this.Commodity = e.curStar;
            },
			changeStar2: function(e) {
			    console.log('curStar2:', e.curStar)
				this.Attitude = e.curStar;
			},
			changeStar3: function(e) {
			    console.log('curStar3:', e.curStar)
				this.Environment = e.curStar;
			},
			toChoosePhoto(){
				var that = this;
				uni.chooseImage({
					count: 6, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: function (res) {
						for(let i in res.tempFilePaths){
							// uni.uploadFile({
							// 	url: '', //图片接口
							// 	filePath: res.tempFilePaths[0],
							// 	name: 'image',
							// 	success: (uploadFileRes) => {
							// 		var data = JSON.parse(uploadFileRes.data);
							// 	}
							// });
							that.photo_list.push(res.tempFilePaths[i]);
							console.log(that.photo_list);
						}
					}
				})
			},
			previewImage(e){
				uni.previewImage({
					urls: this.photo_list,
					current: this.photo_list[e]
				});
			},
			delete_photo(e){
				var that = this;
				uni.showModal({
					title: "确定删除该图片？",
					success:function(res){
						if(res.confirm){
							that.photo_list.splice(e, 1)
						}
					}
				})
			},
			// 提交评价
			onEvaluation (e) {
				let _this = this;
				let mid = this.F_ID;
				let SBID = this.SBID;
				let Contents = this.eval_content;
				let Commodity = this.Commodity;
				let Attitude = this.Attitude;
				let Environment = this.Environment;
				let ImagesUrl = this.photo_list;
				let OrderID = this.OrderID;
				let STitles = this.title;
				if ( Commodity == '' || Attitude == '' || Environment == '' ) {
					let showTitle = '店铺评价必选'
					this.openShow(showTitle)
					return
				}
				api.post('api/Common/CommentAdd', {
					MemberID: mid,
					SBID: SBID,
					Contents: Contents,
					Commodity: Commodity,
					Attitude: Attitude,
					Environment: Environment,
					ImagesUrl: ImagesUrl,
					OrderID: OrderID,
					STitles: STitles
				}).then(res => {
					let code = res.data.code;
					if ( code == 0 ) {
						uni.showToast({
						    title: '提交成功',
						    duration: 2000
						});
						setTimeout(function () {
							wx.navigateBack({
							  delta:1
							})
						}, 2000);
					}else {
						uni.showToast({
						    title: '提交失败',
						    duration: 2000
						});
					}
					
					console.log(res.data);
				}).catch(err => {
					
				})
			},
			// 提示
			openShow(e) {
				uni.showToast({
				    title: e,
				    duration: 2000,
					icon: "none"
				});
			}
		},
		onLoad(opt) {
			let _this = this;
			let e = opt.id;
			let F_ID = opt.F_ID;
			let F_SBID = opt.F_SBID;
			
			// 获取对应商户信息
			api.get('api/Common/GetOrderInfo', {OrderID: F_SBID}).then(res => {
				let data = res.data.model;
				console.log('商户列表',data);
				_this.SBID = data.SBID, //商家编号
				_this.OrderID = data.Batch, //交易流水号
				_this.STitles = data.STitles //商家编号
			}).catch(err => {
				
			})
		}
	}
</script>

<style scoped lang="scss">
	.order_eval_view{
		padding: 15upx 30upx;
		box-sizing: border-box;
		.order_eval_info{
			padding: 20upx 30upx;
			box-sizing: border-box;
			background: #fff;
			margin-bottom: 25upx;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			image{
				display: block;
				width: 118upx;
				height: 118upx;
				margin-right: 30upx;
			}
			.order_center{
				width: 75%;
			}
		}
	}
	.shop_eval_box{
		padding: 20upx 30upx;
		box-sizing: border-box;
		background: #fff;
		margin-bottom: 25upx;
		.seb_title{
			color: #262626;
			font-size: 24upx;
			margin-bottom: 20upx;
		}
		.shop_eval_item{
			display: flex;
			justify-content: flex-start;
			align-items: center;
			margin-bottom: 20upx;
			text{
				color: #696969;
				font-size: 24upx;
			}
		}
	}
	.sunui-star{
		width: 60%;
	}
	.eval_textarea{
		padding: 20upx 30upx;
		background: #fff;
		box-sizing: border-box;
		width: 100%;
		color: #696969;
		font-size: 20upx;
		margin-bottom: 25upx;
	}
	.upload_box{
		margin-bottom: 80upx;
		.upload_content{
			display: flex;
			justify-content: flex-start;
			flex-wrap: wrap;
			align-items: flex-start;
			.upload_btn,.upload_photo_item{
				width: 128upx;
				height: 128upx;
				margin: 0 25upx 25upx 0;
				background: #fff;
				display: flex;
				justify-content: center;
				align-items: center;
				.camera{
					display: block;
					width: 56upx;
					height: 48upx;
				}
				.img{
					display: block;
					width: 100%;
					height: 100%;
				}
			}
			.upload_photo_item{
				background: none;
				position: relative;
				.del_icon{
					position: absolute;
					width: 30upx;
					height: 30upx;
					right: 0;
					top: 0;
				}
			}
		}
		text{
			display: block;
			color: #696969;
			font-size: 20upx;
		}
	}
</style>