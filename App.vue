<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	.page_bg{background: #f7f7f7 !important;min-height: 100%;position: fixed;width: 100%;z-index: -1;left: 0;top: 0;}
	// 选项卡
	.list_nav{
		// position: fixed;
		// width: 100%;
		// left: 0;
		// top: 0;
		// z-index: 20;
		background: #fff;
		font-size: 28upx;
		text-align: center;
		overflow: hidden;
		view{
			color: #262626;
			width: 33.3%;
			float: left;
			padding: 20upx 0;
			border-bottom: 1upx solid #fff;
			&.active{
				color: #1fa4fc;
				border-bottom: 4upx solid #1fa4fc;
			}
		}
	}
	/* 搜索 */
	.search_box{
		padding: 20upx 30upx;
		background: #fff;
		box-sizing: border-box;
		border-bottom: 15upx solid #f5f5f5;
		.common_search{
			display: block;
			background: #fff;
			border-radius: 50upx;
			border: 1px solid #F4F4F4;
			position: relative;
			image{
				position: absolute;
				left: 20upx;
				top: 50%;
				transform: translateY(-50%);
				width: 34upx;
				height: 34upx;
			}
			.input_box{
				width: 80%;
				height: 60upx;
				padding-left: 70upx;
				display: flex;
				align-items: center;
				input{
					color: #999;
					font-size: 24upx;
				}
			}
		}
	}
	// 筛选导航
	.select_nav_box{
		display: flex;
		justify-content: flex-start;
		align-items: center;
		.select_nav_item{
			width: 25%;
			padding: 25upx 0;
			color: #585858;
			font-size: 24upx;
			.sni_title{
				display: flex;
				justify-content: center;
				align-items: center;
				image{
					display: block;
					width: 15upx;
					height: 8upx;
					margin-left: 20upx;
				}
			}
		}
	}
	// 公共
	.submit_btn{
		color: #fff;
		font-size: 28upx;
		height: 76upx;
		line-height: 76upx;
		background: linear-gradient(left, #5ea9ff,#1d87ff);
		&:after{
			border: 0;
		}
	}
	.oc_title{
		color: #262626;
		font-size: 28upx;
	}
	.oc_info{
		color: #999;
		font-size: 24upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 12upx 0 12upx;
		text{
			color: #262626;
		}
	}
	.oc_time{
		color: #999;
		font-size: 20upx;
		text{
			color: #262626;
		}
	}
	
	
	.title_top{
		padding: 20upx 30upx;
		box-sizing: border-box;
		color: #262626;
		font-size: 20upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.pick_view{
			display: flex;
			justify-content: flex-end;
			align-items: center;
			image{
				display: block;
				width: 15upx;
				height: 8upx;
				margin-left: 10upx;
			}
		}
	}
	
	.list_nav{
		display: flex;
		justify-content: space-between;
		align-items: stretch;
		font-size: 24upx;
		text-align: center;
		view{
			width: 50%;
			color: #1fa4fc;
			background: #fff;
			padding: 20upx 0;
			box-sizing: border-box;
			border-top: 1px solid #40B1FC;
			border-bottom: 1px solid #40B1FC;
			&.active{
				border: 0;
				border-color: #1d87ff;
				color: #fff;
				background: linear-gradient(left, #5ea9ff,#1e88ff);
			}
		}
	}
</style>
