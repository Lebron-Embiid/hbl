<template>
	<view class="addcar_view">
		<view class="page_bg"></view>
		<view class="addcar_number" @tap="inputKey">
			<text>车牌号：</text>
			<input type="text" :value="val" disabled placeholder="请输入车牌号" v-model="val">
			<!-- <view>{{val}}</view> -->
		</view>
		<view class="save_box">
			<button type="primary" class="submit_btn" v-on:click="storeInfo">保存信息</button>
		</view>
		<tki-float-keyboard ref="keybd" :mode="'car'" type="2" :title="'车牌键盘'" @del="keyCbDel" @val="keyCbVal" @hide="keyCbHide"></tki-float-keyboard>
	</view>
</template>

<script>
	import api from '../../common/api.js'
	import tkiFloatKeyboard from "@/components/tki-float-keyboard/tki-float-keyboard.vue";
	export default{
		data(){
			return{
				car_number: "",
				carIndex: -1,
				val: "",
				F_ID: ''
			}
		},
		components:{
			tkiFloatKeyboard
		},
		methods:{
			// 判定是否为空
			empty(v) {
				let tp = typeof v,
					rt = false;
				if (tp == "number" && String(v) == "") {
					rt = true
				} else if (tp == "undefined") {
					rt = true
				} else if (tp == "object") {
					if (JSON.stringify(v) == "{}" || JSON.stringify(v) == "[]" || v == null) rt = true
				} else if (tp == "string") {
					if (v == "" || v == "undefined" || v == "null" || v == "{}" || v == "[]") rt = true
				} else if (tp == "function") {
					rt = false
				}
				return rt
			},
			inputKey(e) {
				let that = this;
				that.keyShow();
			},
			keyShow() {
				this.$refs.keybd._keyShow();
			},
			keyHide() {
				this.$refs.keybd._keyHide();
			},
			keyCbDel(e) {
				let d = this.val;
				this.val = d.substring(0,d.length-1)
				console.log(this.val)
			},
			keyCbVal(e) {
				let that = this;
				that.val = that.val+e;
				console.log(that.val)
			},
			keyCbHide() {
				if (this.carIndex != -3 || this.carIndex != -2) {
					this.carIndex = -1;
				}
			},
			// 保存信息
			storeInfo () {
				let fid = this.F_ID;
				let cnum = this.val;
				let _this = this;
				if ( cnum == '' ) {
					uni.showToast({
					    title: '车牌号不能为空',
					    duration: 2000
					});
					return;
				}
				console.log('输入的车牌号',cnum);
				api.post('api/Common/EditMemberCarNumber', {F_ID:fid, CarNumber:cnum}).then(res => {
					console.log(res.data);
					let code = res.data.code
					// if ( code == 1000 || code == 1014 ) {
						if ( code == 1000  ) {
						uni.showToast({
						    title: '保存失败',
						    duration: 2000
						});
					}else {
						uni.showToast({
						    title: '保存成功',
						    duration: 2000
						});
						setTimeout(function () {
							wx.navigateBack({
							  delta:1
							})
						}, 2000);
					}
				}).catch(err => {
					
				});
			}
		},
		onLoad(opt) {
			console.log(opt);
			this.F_ID = opt.F_ID;
			// let mid = '99f0b12e-a0a3-40e9-8011-a1477262a667';
			// let cnum = this.val;
			// console.log('输入的车牌号',cnum);
			// api.get('api/Common/EditMemberCarNumber', {MemberID:mid, CarNumber: cnum}).then(res => {
			// 	console.log(res.data);
			// }).catch(err => {
			// 	
			// })
		}
	}
</script>

<style scoped lang="scss">
	.addcar_number{
		padding: 40upx 50upx;
		box-sizing: border-box;
		background: #fff;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		font-size: 26upx;
		text{
			color: #262626;
		}
		input{
			color: #999;
			display: block;
			width: 80%;
		}
	}
	.save_box{
		padding: 0 30upx;
		box-sizing: border-box;
		margin-top: 150upx;
		.submit_btn{
			background: linear-gradient(left, #1daaff,#5daaff);
			font-size: 24upx;
		}
	}
</style>