<template>
	<view class="addcar_view">
		<view class="page_bg"></view>
		<view class="addcar_number" @tap="inputKey">
			<text>车牌号：</text>
			<input type="text" :value="val" disabled placeholder="请输入车牌号" v-model="val">
			<!-- <view>{{val}}</view> -->
		</view>
		<view class="save_box">
			<button type="primary" class="submit_btn">保存信息</button>
		</view>
		<tki-float-keyboard ref="keybd" :mode="'car'" type="2" :title="'车牌键盘'" @del="keyCbDel" @val="keyCbVal" @hide="keyCbHide"></tki-float-keyboard>
	</view>
</template>

<script>
	import tkiFloatKeyboard from "@/components/tki-float-keyboard/tki-float-keyboard.vue";
	export default{
		data(){
			return{
				car_number: "",
				carIndex: -1,
				val: "",
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
		},
		onLoad() {
			
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