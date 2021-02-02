<template>
	<view class="detail_wrap">
		<view class="tips">由于个人版小程序无法使用web-view,请复制链接到浏览器查看</view>
		<view class="link_url">{{url}}</view>
		<button class="copy_btn" @click="copyUrl">点击复制</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url: ''
			}
		},
		onLoad(options) {
			if (options.url) {
				this.url = options.url
			}
		},
		methods: {
			copyUrl() {
				uni.setClipboardData({
					data: this.url
				})
			}
		}
	}
</script>

<style lang="scss">
	@import "../../sass/index.scss";
</style>
