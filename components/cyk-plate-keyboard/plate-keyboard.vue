<template>
	<view :class="'uni-keyboard ' + (!show?'uni-keyboard-hide':'')">
		<view class="uni-keyboard-head">
			<text @click="complete">完成</text>
		</view>
		<view class="uni-keyboard-body">
			<view class="uni-keyboard-type" v-show="type == 1">
				<view class="uni-keyboard-body-line" v-for="(group,i) in keyboardProvince" :key="i">
					<view hover-class="uni-keyboard-keycap-hover" @click="hitKeycap" :data-i="i" :data-j="j" class="uni-keyboard-keycap"
					 v-for="(item,j) in group" :key="j">{{item}}</view>
				</view>
				<view class="uni-keyboard-delete" @click="hitDelete"></view>
			</view>
			<view class="uni-keyboard-type" v-show="type != 1">
				<view class="uni-keyboard-body-line" v-for="(group,i) in keyboardValue" :key="i">
					<view hover-class="uni-keyboard-keycap-hover" @click="hitKeycap" :data-i="i" :data-j="j" class="uni-keyboard-keycap"
					 v-for="(item,j) in group" :key="j">{{item}}</view>
				</view>
				<view class="uni-keyboard-delete" @click="hitDelete"></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'plate-keyboard',

		props: {
			type: {
				type: Number,
				default: 1 //1,省份键盘 2数字英文键盘

			},
			show: {
				type: Boolean,
				default: true //显示 隐藏
			}
		},
		data() {
			return {
				keyboardProvince: [
					['京', '津', '沪', '渝', '冀', '豫', '云', '辽', '黑', '湘'],
					['皖', '鲁', '新', '苏', '浙', '赣', '鄂', '桂', '甘', '晋'],
					['蒙', '陕', '吉', '闽', '贵', '粤', '青', '藏'],
					['川', '宁', '琼', '港', '澳', '台']
				],
				keyboardValue: [
					[1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
					['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
					['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
					['Z', 'X', 'C', 'V', 'B', 'N', 'M']
				]
			};
		},
		methods: {
			hitKeycap(e) {
				const that = this;
				const i = e.currentTarget.dataset.i;
				const j = e.currentTarget.dataset.j;
				let value = ''
				if (that.type == 1) {
					value = that.keyboardProvince[i][j]

				} else {
					value = that.keyboardValue[i][j]
				}
				that.$emit('hit', value)
			},
			hitDelete() {
				const that = this;
				that.$emit('hit', 'delete')
			},
			complete() {
				const that = this;
				that.$emit('complete')

			}
		}
	}
</script>

<style>
	.uni-keyboard {
		padding-bottom: env(safe-area-inset-bottom);
		width: 100%;
		height: 464upx;
		position: fixed;
		bottom: 0;
		background: #cfd4db;
		border-top: 2upx solid #eeeeee;
		overflow: hidden;
		transition: height .2s ease-in;
	}

	.uni-keyboard-hide {
		height: 0;
	}


	.uni-keyboard-head {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		height: 70upx;
		background-color: #FFFFFF;
		font-size: 32upx;
		color: #0099FF;
	}

	.uni-keyboard-head text {
		margin-right: 34upx;
		display: inline-block;
		font-size: 30upx;
	}

	.uni-keyboard-body,
	.uni-keyboard-type {
		position: relative;
	}

	.uni-keyboard-body-line {
		text-align: center;
	}

	.uni-keyboard-keycap {
		text-decoration: none;
		width: 66upx;
		height: 83upx;
		display: inline-block;
		font-size: 36upx;
		text-align: center;
		line-height: 85upx;
		background-color: #fff;
		margin: 8upx 5upx;
		border-radius: 8upx;
		box-shadow: 0 2upx 0upx #888992;
		font-weight: 500;
	}

	.uni-keyboard-delete {
		background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTIiIGhlaWdodD0iNDQiIHZpZXdCb3g9IjAgMCA1MiA0NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHRpdGxlPuWIoOmZpDwvdGl0bGU+PGRlZnM+PHBhdGggZD0iTTUgMGg0MWE1IDUgMCAwIDEgNSA1djMyLjVhNSA1IDAgMCAxLTUgNUg1YTUgNSAwIDAgMS01LTVWNWE1IDUgMCAwIDEgNS01eiIgaWQ9ImIiLz48ZmlsdGVyIHg9Ii0xJSIgeT0iLTEuMiUiIHdpZHRoPSIxMDIlIiBoZWlnaHQ9IjEwNC43JSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiBpZD0iYSI+PGZlT2Zmc2V0IGR5PSIxIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+PGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAuNTI1NDkwMTk2IDAgMCAwIDAgMC41MzcyNTQ5MDIgMCAwIDAgMCAwLjU1Njg2Mjc0NSAwIDAgMCAxIDAiIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiLz48L2ZpbHRlcj48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSguNSAuNSkiPjx1c2UgZmlsbD0iIzAwMCIgZmlsdGVyPSJ1cmwoI2EpIiB4bGluazpocmVmPSIjYiIvPjx1c2UgZmlsbD0iI0E4QjBCRCIgeGxpbms6aHJlZj0iI2IiLz48L2c+PGcgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMTEuMjAzIDIxLjMzOGExIDEgMCAwIDAgLjAxMyAxLjIyNWw2Ljc2OCA4LjU1N2ExIDEgMCAwIDAgLjc4NS4zOGgxOS4zNGEzIDMgMCAwIDAgMy0zVjE1YTMgMyAwIDAgMC0zLTNIMTguNzhhMSAxIDAgMCAwLS43OTcuMzk2bC02Ljc4IDguOTQyeiIgc3Ryb2tlPSIjMTcxODFEIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNMjkuNDUgMjEuNTQ2bDIuNzggMi44MjNhMSAxIDAgMCAxLTEuNDI1IDEuNDA0bC0yLjc4LTIuODIzLTIuODIzIDIuNzhhMSAxIDAgMCAxLTEuNDA0LTEuNDI1bDIuODIzLTIuNzgtMi43OC0yLjgyM2ExIDEgMCAwIDEgMS40MjUtMS40MDRsMi43OCAyLjgyMyAyLjgyMy0yLjc4YTEgMSAwIDAgMSAxLjQwNCAxLjQyNWwtMi44MjMgMi43OHoiIGZpbGw9IiMxNzE4MUQiLz48L2c+PC9nPjwvc3ZnPg==) no-repeat 90%;
		height: 83upx;
		position: absolute;
		width: 103upx;
		right: 8upx;
		bottom: 8upx;
		border-radius: 8upx;
	}

	.uni-keyboard-keycap-hover {
		background: rgb(110, 119, 142);
	}
</style>
