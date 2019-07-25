<template>
	<view class="search_box">
		<form class="common_search">
			<image src="../static/search.png" mode="aspectFit"></image>
			<view class="input_box"><input type="text" @input="formSubmit" :value="keywords" :placeholder="placeholder" /></view>
		</form>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		props:{
			keywords: String,
			placeholder: String
		},
		methods:{
			formSubmit(e){
				console.log(e.detail.value)
			}
		}
	}
</script>

<style>
</style>
