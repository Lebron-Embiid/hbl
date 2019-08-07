<template>
	<view class="person_info_view">
		<view class="page_bg"></view>
		<view class="person_info_top">
			<view class="pit_item">
				<text>昵称</text>
				<input type="text" :value="username" v-model="username" />
			</view>
			<view class="pit_item">
				<text>手机号</text>
				<input type="text" :value="phone" v-model="phone" />
			</view>
		</view>
		<view class="person_info_bottom">
			<view class="pib_item">
				<view class="pi_left">姓名<text>*</text></view>
				<view class="pi_right">
					<input type="text" placeholder-style="color: #999;" placeholder="请输入真实姓名" :value="real_name" v-model="real_name" />
				</view>
			</view>
			<view class="pib_item">
				<view class="pi_left">证件类型<text>*</text></view>
				<picker style="width: 70%;" class="picker" :range="number_arr" @change="bindNumberChange">
					<view class="pi_right pick">
						<view>{{number_type}}</view>
						<image src="../../static/arrow2.png" mode="widthFix"></image>
					</view>
				</picker>
			</view>
			<view class="pib_item">
				<view class="pi_left">证件号<text>*</text></view>
				<view class="pi_right">
					<input type="text" placeholder-style="color: #999;" placeholder="请输入正确的证件号" :value="number" v-model="number" />
				</view>
			</view>
			<view class="pib_item">
				<view class="pi_left">出手日期<text>*</text></view>
				<picker style="width: 70%;" class="picker" mode="date" @change="bindDateChange">
					<view class="pi_right pick date">
						<view>{{date_txt}}</view>
						<image src="../../static/date.png" mode="widthFix"></image>
					</view>
				</picker>
			</view>
			<view class="pib_item">
				<view class="pi_left">性别<text>*</text></view>
				<view class="pi_right nobor">
					<radio-group class="radio_group" @change="radioChange">
						<label v-for="(item, index) in items" :key="item.value">
							<radio :value="item.value" color="#36c328" :checked="index === current" />
							<view>{{item.name}}</view>
						</label>
					</radio-group>
				</view>
			</view>
			<view class="pib_remark">注：更换手机号，积分转赠等会员行为时需要真实的身份认证。</view>
		</view>
		<view class="save_box">
			<button type="primary" class="submit_btn">保存</button>
		</view>
	</view>
</template>

<script>
	import api from '../../common/api.js'
	export default{
		data(){
			return{
				username: "张湘",
				phone: "13888888888",
				real_name: "",
				number: "",
				number_type: "请选择证件号类型",
				number_arr: ["身份证"],
				date_txt: "请选择出生日期",
				items: [
					{
						value: 'fale',
						name: '男'
					},{
						value: 'mefale',
						name: '女'
					}
				],
				current: 0
			}
		},
		methods:{
			bindNumberChange(e){
				this.number_type = this.number_arr[e.target.value];
			},
			bindDateChange(e){
				this.date_txt = e.target.value;
			},
			radioChange: function(evt) {
				for (let i = 0; i < this.items.length; i++) {
					if (this.items[i].value === evt.target.value) {
						this.current = i;
						break;
					}
				}
				console.log(evt.detail.value)
			}
		},
		onLoad(opt) {
			api.get('api/Common/GetBusinessList', {}).then(res => {
				console.log(res.data);
				
			}).catch(err => {
				
			})
		}
	}
</script>

<style scoped lang="scss">
	.person_info_top{
		padding: 0 30upx;
		margin-bottom: 12upx;
		background: #fff;
		.pit_item{
			padding: 25upx 0;
			border-bottom: 1px solid #F8F8F8;
			color: #595959;
			font-size: 26upx;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			&:last-child{
				border-bottom: 0;
			}
			text{
				width: 140upx;
				margin-right: 10upx;
			}
		}
	}
	.person_info_bottom{
		padding: 20upx 30upx;
		box-sizing: border-box;
		background: #fff;
		.pib_item{
			color: #595959;
			font-size: 26upx;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			margin-bottom: 30upx;
			.pi_left{
				width: 140upx;
				margin-right: 10upx;
				text{
					color: #dd2626;
				}
			}
			.pi_right{
				border: 1px solid #E8E8E8;
				height: 58upx;
				padding: 5upx 20upx;
				box-sizing: border-box;
				display: flex;
				align-items: center;
				width: 70%;
				color: #999;
				font-size: 20upx;
				input{
					color: #999;
					font-size: 20upx;
				}
				&.nobor{
					border: 0;
					padding: 5upx 0;
					.radio_group{
						display: flex;
						justify-content: flex-start;
						align-items: center;
						label{
							display: flex;
							justify-content: flex-start;
							align-items: center;
							margin-right: 80upx;
							color: #595959;
							font-size: 26upx;
							&:last-child{
								margin-right: 0;
							}
							radio{
								transform: scale(.8);
							}
						}
					}
				}
				&.pick{
					width: 100%;
					display: flex;
					justify-content: space-between;
					align-items: center;
					image{
						display: block;
						width: 28upx;
						height: 18upx;
					}
				}
				&.date{
					image{
						width: 26upx;
						height: 26upx;
					}
				}
			}
		}
		.pib_remark{
			color: #999;
			font-size: 20upx;
		}
	}
	.save_box{
		padding: 0 30upx;
		box-sizing: border-box;
		margin-top: 70upx;
	}
</style>