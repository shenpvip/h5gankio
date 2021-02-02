<script>
	import urlServer from '@/config/ajaxUrl.js';

	export default {
		name: 'index',
		data() {
			return {
				selected: '',
				contentList: [],
				page: 1,
				typeList: [],
				isLoad: true,
				freshing: false
			}
		},
		watch: {
			selected: {
				handler(curVal) {
					this.contentList = [];
					this.getList();
				},
				deep: true
			}
		},
		onShow() {
			this.page = 1;
			this.getAllTypes()
		},
		methods: {
			/**
			 * 获取所有分类
			 */
			getAllTypes() {
				uni.showLoading({
					title: '加载中...'
				})
				uni.request({
					url: urlServer.ApiUrl + '/categories/GanHuo',
					success: res => {
						if (res.data.status === 100) {
							this.typeList = res.data.data;
							this.selected = res.data.data[0].type
							uni.hideLoading()
							return
						} else {
							uni.showToast({
								title: res.data.errMsg,
								icon: 'none'
							})
						}
					}
				})
			},
			/**
			 * [getList description]获取列表数据
			 * @return {[type]} [description]
			 */
			getList() {
				if (!this.isLoad) return;
				uni.showLoading({
					title: '加载中...'
				})
				uni.request({
					url: `${urlServer.ApiUrl}/data/category/GanHuo/type/${this.selected}/page/${this.page}/count/10`,
					success: res => {
						if (res.data.status === 100) {
							let data = res.data.data;
							if (data.length) {
								if (this.page == 1) {
									this.contentList = data;
								} else {
									this.contentList = this.contentList.concat(data);
								}
							}
							if (this.contentList.length >= data.total_counts) {
								this.isLoad = false;
							}
							uni.hideLoading()
						} else {
							uni.showToast({
								title: res.data.errMsg,
								icon: 'none'
							})
						}

					},
					complete: () => {
						this.freshing = false;
					}
				})
			},
			/**
			 * [loadBottom description]加载更多
			 * @param  {[type]} id [description]
			 * @return {[type]}    [description]
			 */
			loadBottom() {
				this.page = ++this.page
				this.getList();
			},
			refreshList() {
				this.freshing = true;
				this.page = 1;
				this.getList();
			}
		}
	}
</script>
<template>
	<view class="class-transition-content">
		<view class="nav_wrap">
			<view class="top_nav">
				<view class="tab_item" v-for="item in typeList" :class="selected === item.type ? 'active' : ''" @click.prevent="selected = item.type">{{item.title}}</view>
			</view>
		</view>
		<scroll-view class="content_wrap" scroll-y @scrolltolower="loadBottom" refresher-enabled enable-back-to-top
		 @refresherrefresh="refreshList" :refresher-triggered="freshing">
			<detail-list :contentlist="contentList" />
		</scroll-view>
	</view>
</template>
<style lang="scss">
	@import "../../sass/index.scss";
</style>
