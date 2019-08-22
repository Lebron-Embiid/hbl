<template>
	<view class="find_shop_view">
		<common-search 
		:keywords="keywords" 
		v-on:formSubmit="receive"
		:info="[F_ID,floor_def,business_def]"
		:type="type"
		@searchData="getData"
		></common-search>
		<view class="select_nav_box">
			<view class="select_nav_item">
				<picker :range="floor_arr" @change="select_floor">
					<view class="sni_title">{{floor_def}}<image src="../../static/down.png" mode="widthFix"></image></view>
				</picker>
			</view>
			<view class="select_nav_item">
				<picker :range="business_arr" @change="select_business">
					<view class="sni_title">{{business_def}}<image src="../../static/down.png" mode="widthFix"></image></view>
				</picker>
			</view>
		</view>
		<scroll-view scroll-y="true" class="shop_list_view">
			<common-shop :list="shop_list" :F_ID="F_ID"></common-shop>
			<!-- <view class="shop_item" v-for="(item,index) in shop_list" :key="index">
				<view class="shop_info">
					<image :src="item.src" class="shop_img" mode="aspectFill"></image>
					<view class="info_box">
						<view class="si_title">{{item.title}}<text>{{item.floor}}</text></view>
						<view class="si_phone">电话：{{item.phone}}</view>
						<block v-if="item.isPoint == 1">
							<view class="si_type">积分商户</view>
						</block>
					</view>
				</view>
				<image :src="item.star_icon" class="star_icon" @tap.stop="toCollect(index)" mode="widthFix"></image>
			</view> -->
		</scroll-view>
	</view>
</template>

<script>
	import api from '../../common/api.js'
	import commonSearch from '../../components/common_search.vue'
	import commonShop from '../../components/common_shop.vue'
	export default{
		data(){
			return{
				type: false,
				F_ID: '',
				keywords: "",
				placeholder: "输入商户关键字搜索",
				floor_def: "楼层",
				floor_arr: ["F301","F302","F303","F304","F305"],
				business_def: "业态",
				business_arr: ["业态1","业态2","业态3"],
				shop_list: [
					{
						id: 1,
						src: "../../static/shop_img1.jpg",
						title: "即墨海尚海",
						floor: "F305",
						phone: "15811252064",
						isPoint: 1,
						star_cur: 0,
						star_icon: "../../static/star1.png"
					}
				]
			}
		},
		components:{
			commonSearch,
			commonShop
		},
		methods:{
			select_floor(e){
				this.floor_def = this.floor_arr[e.target.value];
			},
			select_business(e){
				this.business_def = this.business_arr[e.target.value];				
			},
			 //接收子组件传递的值，val参数是传递过来的值 ，子组件改变父组件的值
			  getData(val){
				console.log(val);
				let data = val;
				if(data != ''){
					let businessesList = [];
					for(let i in data){	
						let _data = data[i]
						let businessesObj = {id:i, src:_data.Logo, title:_data.Title, floor:_data.Floor, SBID:_data.SBID, phone:_data.Tels,IsCollection:_data.IsCollection, isPoint: _data.IsIntegralBus,star_cur: '0',star_icon:'../../static/star1.png' };
						businessesList.push(businessesObj);
					}
					this.shop_list = businessesList;
				}
			  }
		},
		onLoad(opt) {
			console.log(opt.F_ID);
			let MemberID = this.F_ID = opt.F_ID;
			api.get('api/Common/GetBusinessList', {Floor: '', Operat: '', BusinessKey:'',MemberID:MemberID}).then(res => {
				console.log('res.data',res.data);
				let data = res.data.data;
				console.log(data[0].Title);
				if(data != ''){
					let businessesList = [];
					for(let i in data){	
						let _data = data[i]
						let businessesObj = {id:i, src:_data.Logo, title:_data.Title, floor:_data.Floor, SBID:_data.SBID, phone:_data.Tels,IsCollection:_data.IsCollection, isPoint: _data.IsIntegralBus,star_cur: '0',star_icon:'../../static/star1.png' };
						businessesList.push(businessesObj);
					}
					this.shop_list = businessesList;
				}
			}).catch(err => {

			})
		},
		updated() {
			console.log('updated父组件',this.shop_list);
			let _this = this;
			let data = this.shop_list;
			for (let i in data) {
				let _data = data[i];
				if (_data.IsCollection == '是') {
					_this.shop_list[i].star_cur = 1;
					_this.shop_list[i].star_icon = "../../static/star2.png";
				}else {
					_this.shop_list[i].star_cur = 0;
					_this.shop_list[i].star_icon = "../../static/star1.png";
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.shop_list_view{
		max-height: 78vh;
		padding: 0 30upx;
		box-sizing: border-box;
	}
</style>