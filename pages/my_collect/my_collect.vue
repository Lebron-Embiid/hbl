<template>
	<view class="my_collect_view">
		<common-shop :list="shop_list"></common-shop>
	</view>
</template>

<script>
	import api from '../../common/api.js'
	import commonShop from '../../components/common_shop.vue'
	export default{
		data(){
			return{
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
					},{
						id: 2,
						src: "../../static/shop_img2.jpg",
						title: "即墨海尚海",
						floor: "F305",
						phone: "15811252064",
						isPoint: 1,
						star_cur: 0,
						star_icon: "../../static/star1.png"
					},{
						id: 3,
						src: "../../static/shop_img3.jpg",
						title: "即墨海尚海",
						floor: "F305",
						phone: "15811252064",
						isPoint: 0,
						star_cur: 0,
						star_icon: "../../static/star1.png"
					}
				]
			}
		},
		components:{
			commonShop
		},
		methods:{
			
		},
		onLoad(opt) {
			console.log(opt.F_ID);
			let mid = '99f0b12e-a0a3-40e9-8011-a1477262a667';
			api.get('api/Common/GetCollectionList', {MemberID:mid}).then(res => {
				console.log("我的收藏",res.data);
				let data = res.data.data;
				if(data != ''){
					let shopList = [];
					for(let i in data){	
						let _data = data[i]
						let shopObj = {id:i, src:_data.Logo, title:_data.Title, floor:_data.Floor, phone:_data.Tels, isPoint: _data.IsIntegralBus,star_cur: '0',star_icon:'../../static/star1.png' };
						shopList.push(shopObj);
					}
					this.shop_list = shopList;
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
	.my_collect_view{
		padding: 0 30upx;
		box-sizing: border-box;
	}
</style>