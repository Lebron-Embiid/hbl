<template>
	<view class="repair_view">
		<view class="repair_board">报修看板</view>
		<view class="list_nav">
			<view v-for="(item,index) in navbar" :key="index" :class="[currentTab==index ? 'active' : '']" @click="navbarTap(index)">{{item.name}}</view>
		</view>
		<!-- 我要报修 -->
		<view class="repair_list" v-if="currentTab == 0">
			<view class="repair_info_box">
				<view class="repair_item">
					<view class="ri_txt">物业</view>
					<view class="ri_input"><input type="text" :value="property_val" placeholder="XXX小区3号1903室" /></view>
				</view>
				<view class="repair_item">
					<view class="ri_txt">报修人<text>*</text></view>
					<view class="ri_input"><input type="text" :value="repair_person" placeholder="根据报修人信息自动带出，可以修改" /></view>
				</view>
				<view class="repair_item">
					<view class="ri_txt">联系电话<text>*</text></view>
					<view class="ri_input"><input type="text" :value="repair_phone" placeholder="根据报修人信息自动带出，可以修改" /></view>
				</view>
				<view class="repair_item">
					<view class="ri_txt">报修时间</view>
					<view class="ri_input"><input type="text" :value="repair_time" placeholder="默认当前时间" /></view>
				</view>
				<view class="repair_item">
					<view class="ri_txt">报修位置<text>*</text></view>
					<view class="ri_input"><input type="text" :value="repair_address" placeholder="请输入需要保修的地址" /></view>
				</view>
				<view class="repair_item last">
					<view class="ri_txt">报修内容</view>
					<view class="ri_input"><textarea :value="repair_content" placeholder="请描述一下需要保修的内容" /></view>
				</view>
			</view>
			<view class="repair_photo_box">
				<view class="add_photo_box">
					<view class="add_btn" @tap="chooseImage"><image src="../../static/add_pic.png" mode="widthFix"></image></view>
					<!-- <view class="photo_box"> -->
						<view class="photo_item" @tap="previewImage(index)" v-for="(item,index) in photo_list" :key="index"><image :src="item" mode="widthFix"></image></view>
					<!-- </view> -->
				</view>
				<view class="add_txt">上传照片（最多可上传三张）</view>
				<button type="primary" class="submit_btn">提交</button>
			</view>
		</view>
		<!-- 待接单 -->
		<view class="repair_list" v-if="currentTab == 1">
			<common-order :list="order_list" :current="currentTab"></common-order>=
		</view>
		<!-- 待验收 -->
		<view class="repair_list" v-if="currentTab == 2">
			<common-order :list="accepte_list" :current="currentTab" @accepte="toAccepte"></common-order>
			<view class="accepte_shadow" @tap="hideAccepte" :class="[isAccepte == 1?'active':'']"></view>
			<view class="accepte_layer" :class="[isAccepte == 1?'active':'']">
				<view class="accepte_item">
					<text>区域位置</text>
					<view>{{accepte_property}}</view>
				</view>
				<view class="accepte_item">
					<text>报修人</text>
					<view>{{accepte_person}}</view>
				</view>
				<view class="accepte_item">
					<text>店铺名称</text>
					<view>{{accepte_shop}}</view>
				</view>
				<view class="accepte_item">
					<text>联系电话</text>
					<view>{{accepte_phone}}</view>
				</view>
				<view class="accepte_item">
					<text>报修时间</text>
					<view>{{accepte_time}}</view>
				</view>
				<view class="accepte_item">
					<text>详细位置</text>
					<view>{{accepte_address}}</view>
				</view>
				<view class="accepte_item">
					<text>报修内容</text>
					<view>{{accepte_content}}</view>
				</view>
				<view class="accepte_item">
					<text>验收结果</text>
					<view class="radio_box">
						<label class="radio" v-for="(item,index) in cart_list" :key="index" @tap="changeRadio(index)">
							<radio :value="item.value" color="#36c328" :checked="current == index && item.current == 1"/>{{item.value}}
						</label>
					</view>
				</view>
				<button type="primary" class="submit_btn">提交</button>
			</view>
		</view>
		<!-- 已完结 -->
		<view class="repair_list" v-if="currentTab == 3">
			<common-order :list="finish_list" :current="currentTab"></common-order>
		</view>
	</view>
</template>

<script>
	import api from '../../common/api.js'
	import commonOrder from "../../components/common_order.vue"
	export default{
		data(){
			return{
				navbar:[{name:"我要报修"},{name:"待接单(2)"},{name:"待验收(1)"},{name:"已完结(10)"}],
				currentTab:0,
				property_val: "",
				repair_person: "",
				repair_phone: "",
				repair_time: "",
				repair_address: "",
				repair_content: "",
				photo_list: "",
				order_list: [
					{
						id: 1,
						property: "XXX小区3号1903室",
						person: "小陈",
						phone: "158****0256",
						time: "2019-07-17",
						address: "龙岗电子商务港618",
						content: "xxx出现故障"
					},{
						id: 2,
						property: "XXX小区3号1903室",
						person: "小陈",
						phone: "158****0256",
						time: "2019-07-17",
						address: "龙岗电子商务港618",
						content: "xxx出现故障"
					}
				],
				accepte_list: [
					{
						id: 1,
						property: "XXX小区3号1903室",
						person: "小陈",
						phone: "158****0256",
						time: "2019-07-17",
						address: "龙岗电子商务港618",
						content: "xxx出现故障"
					}
				],
				finish_list: [
					{
						id: 1,
						property: "XXX小区3号1903室",
						person: "小陈",
						phone: "158****0256",
						time: "2019-07-17",
						address: "龙岗电子商务港618",
						content: "xxx出现故障"
					}
				],
				accepte_property: "XXX小区3号1903室",
				accepte_person: "小陈",
				accepte_shop: "店铺名称",
				accepte_phone: "158****0256",
				accepte_time: "2019-07-17",
				accepte_address: "龙岗电子商务港618",
				accepte_content: "xxx出现故障",
				cart_list: [
					{
						id: 1,
						current: 1,
						value: "OK"
					},{
						id: 2,
						current: 0,
						value: "NO"
					}
				],
				current: 0,
				isAccepte: 0
			}
		},
		components:{
			commonOrder
		},
		methods:{
			navbarTap: function(e){
				console.log(e)
				this.currentTab = e;
			},
			chooseImage(){
				var that = this;
				uni.chooseImage({
					count: 3, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: (res) => {
						uni.showLoading({
							title: '上传中'
						})
						that.photo_list = res.tempFilePaths;
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
			toAccepte(e){
				this.isAccepte = 1;
			},
			hideAccepte(e){
				this.isAccepte = 0;
			},
			changeRadio(idx){
				var that = this;
				for(let i in that.cart_list){
					that.cart_list[i].current = 0;
				}
				that.cart_list[idx].current = 1;
				that.current = idx;
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
	.repair_board{
		padding: 50upx 0;
		background: linear-gradient(left, #5da9ff,#1f88ff);
		color: #fff;
		font-size: 32upx;
		text-align: center;
		font-family: '黑体';
	}
	.list_nav{
		border-bottom: 1px solid #F1F1F1;
		view{
			width: 25%;
			border: 0;
			color: #595959;
			&.active{
				border-bottom: 4upx solid #1FA4FC;
				color: #1fa4fc;
				background: none;
			}
		}
	}
	.repair_info_box{
		padding: 30upx 30upx 10upx;
		box-sizing: border-box;
		border-bottom: 15upx solid #f7f7f7;
		.repair_item{
			display: flex;
			justify-content: flex-start;
			align-items: center;
			margin-bottom: 25upx;
			.ri_txt{
				color: #595959;
				font-size: 26upx;
				width: 150upx;
				text{
					color: #dd2626;
				}
			}
			.ri_input{
				width: 70%;
				border: 1px solid #ddd;
				padding: 15upx 20upx;
				box-sizing: border-box;
				input{
					display: block;
					width: 100%;
					color: #999;
					font-size: 20upx;
				}
				textarea{
					display: block;
					width: 100%;
					height: 130upx;
					color: #999;
					font-size: 20upx;
				}
			}
			&.last{
				align-items: flex-start;
				.ri_txt{
					margin-top: 13upx;
				}
			}
		}
	}
	
	.accepte_shadow{
		position: fixed;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,.28);
		left: 0;
		top: 0;
		z-index: 10;
		display: none;
		&.active{
			display: block;
		}
	}
	.accepte_layer{
		background: #fff;
		border-radius: 10upx;
		padding: 10upx 40upx 30upx;
		box-sizing: border-box;
		position: absolute;
		width: 94%;
		top: 51%;
		transform: translateY(-50%);
		left: 3%;
		z-index: 20;
		display: none;
		&.active{
			display: block;
		}
		.accepte_item{
			display: flex;
			justify-content: flex-start;
			align-items: center;
			padding: 30upx 0 20upx;
			box-sizing: border-box;
			border-bottom: 1px solid #EEEEEE;
			color: #999;
			font-size: 20upx;
			&:last-of-type{
				border-bottom: 0;
			}
			text{
				color: #595959;
				font-size: 26upx;
				width: 150upx;
				display: block;
			}
			.radio_box{
				display: flex;
				align-items: center;
				.radio{
					margin: 0 40upx;
					radio{
						transform: scale(.6);
					}
				}
			}
		}
		.submit_btn{
			margin-top: 40upx;
			width: 270upx;
			height: 77upx;
			line-height: 77upx;
		}
	}
</style>