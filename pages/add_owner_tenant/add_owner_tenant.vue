<template>
	<view class="add_owner_tenant_view">
		<view class="page_bg"></view>
		<view class="add_suggest_top">
			<view class="owner_radio_box">
				<label class="radio" v-for="(item,index) in cart_list" :key="index" @tap="changeRadio(index)">
					<radio :value="item.value" color="#36c328" :checked="current == index && item.current == 1"/>{{item.title}}
				</label>
			</view>
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
				<view class="asi_left">楼号<text>*</text></view>
				<view class="asi_right">
					<input type="text" :value="floor" v-model="floor" placeholder="请输入所在楼号" placeholder-style="color: #999;" />
				</view>
			</view>
			<view class="add_suggest_item">
				<view class="asi_left">楼层<text>*</text></view>
				<view class="asi_right">
					<input type="text" :value="layer" v-model="layer" placeholder="请输入所在楼层" placeholder-style="color: #999;" />
				</view>
			</view>
			<view class="add_suggest_item">
				<view class="asi_left">室号<text>*</text></view>
				<view class="asi_right">
					<input type="text" :value="room" v-model="room" placeholder="请输入所在室号" placeholder-style="color: #999;" />
				</view>
			</view>
			<button type="primary" class="submit_btn">保存</button>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				cart_list: [
					{
						id: 1,
						current: 1,
						title: "业主",
						value: "own"
					},{
						id: 2,
						current: 0,
						title: "租客",
						value: "ten"
					}
				],
				current: 0,
				array: ['住宅项目列表', '住宅项目列表1', '住宅项目列表2', '住宅项目列表3'],
				index: 0,
				floor: "",
				layer: "",
				room: ""
			}
		},
		methods:{
			changeRadio: function(idx){
				var that = this;
				for(let i in that.cart_list){
					that.cart_list[i].current = 0;
				}
				that.cart_list[idx].current = 1;
				that.current = idx;
			},
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index = e.target.value
			}
		},
		onLoad() {
			
		}
	}
</script>

<style scoped lang="scss">
	.owner_radio_box{
		margin-bottom: 30upx;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		.radio{
			margin: 0 60upx 0 20upx;
			color: #595959;
			font-size: 26upx;
			radio{
				transform: scale(.7);
			}
		}
	}
	.add_suggest_top{
		padding: 20upx 40upx 60upx;
		background: #fff;
		.submit_btn{
			width: 270upx;
			height: 77upx;
			line-height: 77upx;
			margin-top: 80upx;
		}
	}
</style>