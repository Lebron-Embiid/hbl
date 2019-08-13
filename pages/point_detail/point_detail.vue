<template>
	<view class="point_detail_view">
		<view class="point_item" v-for="(item,index) in point_list" :key="index">
			<view class="point_title">
				<view>{{item.name}}</view>
				<text>{{item.time}}</text>
			</view>
			<view class="point_info">
				<view>{{item.from}}</view>
				<text :class="[item.point < 0?'down':'']">{{item.point}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import api from '../../common/api.js'
	export default{
		data(){
			return{
				point_list: [
					{
						name: "项目名称·品牌名称",
						time: "2019-03-08  13:10:25",
						from: "积分兑现",
						point: "-1000"
					},{
						name: "花伴里",
						time: "2019-03-08  13:10:25",
						from: "签到兑现",
						point: "+5",
						
					},{
						name: "项目名称·肯德基",
						time: "2019-03-08  13:10:25",
						from: "评价积分",
						point: "+10"
					},{
						name: "项目名称·海底捞",
						time: "2019-03-08  13:10:25",
						from: "消费积分",
						point: "+150"
					},{
						name: "项目名称·海底捞",
						time: "2019-03-08  13:10:25",
						from: "新用户积分奖励",
						point: "+300"
					}
				]
			}
		},
		methods:{
			
		},
		onLoad(opt) {
			console.log(opt);
			let mid = '99f0b12e-a0a3-40e9-8011-a1477262a667';
			api.get('api/Common/GetIntegralList', {MemberID:mid}).then(res => {
				console.log(res.data);
				const data = res.data.data;
				if(data != ''){
					let pointList = [];
					for(let i in data){
						let _data = data[i]
						let pointObj = {name:_data.ProjectName, time: _data.CreateDate, from:_data.SorceType, point:_data.Integral };
						pointList.push(pointObj);
					}
					this.point_list = pointList;
				}else {
					let pointList = [];
					let pointObj = {name:'暂无数据', time: '', from: '', point:'' };
					pointList.push(pointObj);
					this.point_list = pointList;
				}
			}).catch(err => {
				
			})
		}
	}
</script>

<style scoped lang="scss">
	.point_detail_view{
		padding: 0 30upx;
		box-sizing: border-box;
		.point_item{
			padding: 25upx 0;
			border-bottom: 1px solid #F2F2F2;
			.point_title{
				display: flex;
				justify-content: space-between;
				align-items: center;
				color: #262626;
				font-size: 24upx;
				margin-bottom: 30upx;
				view{
					width: 60%;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
				text{
					color: #595959;
					font-size: 20upx;
				}
			}
			.point_info{
				display: flex;
				justify-content: space-between;
				align-items: center;
				color: #595959;
				font-size: 24upx;
				text{
					color: #36c328;
					&.down{
						color: #dd2626;
					}
				}
			}
		}
	}
</style>