<template>
	<view class="search_box">
		<form class="common_search">
			<image src="../static/search.png" mode="aspectFit"></image>
			<view class="input_box" v-if="type"><input type="text" @input="formSubmitOrder" :value="keywords" :placeholder="placeholder" /></view>
			<view class="input_box" v-else><input type="text" @input="formSubmit" :value="keywords" :placeholder="placeholder" /></view>
		</form>
	</view>
</template>

<script>
	import api from '../common/api.js'
	export default{
		data(){
			return{
				newdata: '',
				searchDate: "",
			}
		},
		props:{
			// 商家和订单搜索页面
			keywords: String,
			// 商家页面
			placeholder: String,
			info: Array,
			//订单页面
			F_ID: String,
			type: Boolean
		},
		methods:{
			formSubmit(e){
				console.log(e.detail.value)
				let SearchKey = e.detail.value;
				let MemberID = this.newdata[0];
				let Floor = this.newdata[1];
				let Operat = this.newdata[2];
				console.log('Operat',Operat);
				if ( SearchKey != '' ) {
					api.get('api/Common/GetBusinessList', {
						Floor: '',
						Operat: '',
						MemberID: MemberID,
						BusinessKey: SearchKey
					}).then(res => {
						console.log(res.data);
						console.log('子组件搜索的内容',res.data.data);
						let code = res.data.code;
						if ( code == 0 ) {
							this.searchDate = res.data.data;
							this.$emit('searchData',this.searchDate)
						} else if ( code == 1006 ) {
							uni.showToast({
							    title: '未查到该商家信息',
							    duration: 2000,
								icon: "none"
							});
						}else {
							uni.showToast({
							    title: '查询失败',
							    duration: 2000,
								icon: "none"
							});
						}
						
					}).catch(err => {
						
					});
				}else {
					api.get('api/Common/GetBusinessList', {Floor: '', Operat: '', BusinessKey:'',MemberID:MemberID}).then(res => {
						console.log('res.data',res.data);
						let data = res.data.data;
						console.log('子组件搜索的内容',res.data.data);
							let code = res.data.code;
							if ( code == 0 ) {
								this.searchDate = res.data.data;
								this.$emit('searchData',this.searchDate)
							} else if ( code == 1006 ) {
								uni.showToast({
								    title: '未查到该商家信息',
								    duration: 2000,
									icon: "none"
								});
							}else {
								uni.showToast({
								    title: '查询失败',
								    duration: 2000,
									icon: "none"
								});
							}
							
						}).catch(err => {
							
						});
				}
				
			},
			formSubmitOrder(e) {
				console.log(e.detail.value)
				let SearchKey = e.detail.value;
				let MemberID = this.F_ID;
				if ( SearchKey != '' ) {
					api.get('api/Common/GetOrderList', { SearchKey:SearchKey,MemberID:MemberID }).then(res => {
						console.log(res.data);
						console.log('子组件搜索的内容',res.data.data);
						let code = res.data.code;
						if ( code == 0 ) {
							this.searchDate = res.data.data;
							this.$emit('searchData',this.searchDate)
						} else if ( code == 1007 ) {
							uni.showToast({
							    title: '未查到订单信息',
							    duration: 2000,
								icon: "none"
							});
						}else {
							uni.showToast({
							    title: '查询失败',
							    duration: 2000,
								icon: "none"
							});
						}
					}).catch(err => {
						
					});
				}else {
					api.get('api/Common/GetOrderList', { SearchKey:SearchKey,MemberID:MemberID }).then(res => {
						console.log(res.data);
						console.log('子组件搜索的内容',res.data.data);
						let code = res.data.code;
						if ( code == 0 ) {
							this.searchDate = res.data.data;
							this.$emit('searchData',this.searchDate)
						} else if ( code == 1007 ) {
							uni.showToast({
							    title: '未查到订单信息',
							    duration: 2000,
								icon: "none"
							});
						}else {
							uni.showToast({
							    title: '查询失败',
							    duration: 2000,
								icon: "none"
							});
						}
					}).catch(err => {
						
					});
				}
			}
		},watch:{
			info:function (newVal,oldVal) {
				this.newdata=newVal;//newVal就是获取的动态新数据，赋值给newdata
			}
		}
	}
</script>

<style>
</style>
