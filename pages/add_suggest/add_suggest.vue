<template>
	<view class="add_suggest_view">
		<view class="add_suggest_top">
			<view class="add_suggest_item">
				<view class="asi_left">项目<text>*</text></view>
				<view class="asi_right">
					<picker @change="bindPickerChange" :value="index" :range="array">
						<view class="picker_box">
							<view class="uni-input">{{array[index]}}</view>
							<image src="../../static/down.png" mode="widthFix"></image>
						</view>
					</picker>
				</view>
			</view>
			<view class="add_suggest_item">
				<view class="asi_left">主题<text>*</text></view>
				<view class="asi_right">
					<input type="text" :value="theme" v-model="theme" placeholder="请输入投诉主题" placeholder-style="color: #999;" />
				</view>
			</view>
			<view class="add_suggest_item">
				<view class="asi_left">内容<text>*</text></view>
				<view class="asi_right">
					<textarea :value="suggest" v-model="suggest" placeholder="请输入您想提出的建议" placeholder-style="color: #999;" />
				</view>
			</view>
		</view>
		<view class="repair_photo_box">
			<view class="add_photo_box">
				<view class="add_btn" @tap="chooseImage"><image src="../../static/camera1.png" mode="widthFix"></image></view>
				<!-- <view class="photo_box"> -->
					<view class="photo_item" @tap="previewImage(index)" v-for="(item,index) in photo_list" :key="index"><image :src="item" mode="widthFix"></image></view>
				<!-- </view> -->
			</view>
			<view class="add_txt">如果您的投诉建议得到采纳，将会赠送积分给您。</view>
			<button type="primary" class="submit_btn">保存</button>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				array: ['住宅项目列表', '住宅项目列表1', '住宅项目列表2', '住宅项目列表3'],
				index: 0,
				theme: "",
				suggest: "",
				photo_list: ""
			}
		},
		methods:{
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index = e.target.value
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
						that.photo_list = res.tempFilePaths
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
			}
		},
		onLoad() {
			
		}
	}
</script>

<style scoped lang="scss">
	.repair_photo_box{
		.add_photo_box{
			.add_btn{
				width: 116upx;
				height: 116upx;
				image{
					width: 57upx;
					height: 48upx;
				}
			}
			.photo_item{
				width: 116upx;
				height: 116upx;
			}
		}
		.add_txt{
			margin-bottom: 60upx;
		}
	}
</style>