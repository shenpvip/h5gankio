<script>
	export default {
		props: {
			contentlist: {
				type: Array
			},
			contenttype: {
				type: String
			}
		},
		methods: {
			toDetail(url) {
				if (this.contenttype) {
					return
				}
				uni.navigateTo({
					url: '../detail/detail?url=' + url
				})
			},
			toPreview(url) {
				if (!this.contenttype) {
					return
				}
				// 预览图片
				uni.previewImage({
					urls: [url],
					longPressActions: {
						itemList: ['发送给朋友', '保存图片', '收藏'],
						success: function(data) {
							console.log('选中了第');
						},
						fail: function(err) {
							console.log(err.errMsg);
						}
					}
				});
			}
		}
	}
</script>
<template>
	<div class="block">
		<li class="list_item" v-for="list in contentlist">
			<div class="list_block" @click.stop="toDetail(list.url)">
				<p class="list_title">{{contenttype ? list.desc:list.title}}</p>
				<div class="list_info clearfix">
					<span class="pull-left auther">via {{list.author}}</span>
					<span class="pull-right public_time">{{list.publishedAt | dateFilter}}</span>
				</div>
				<div :class="contenttype?'':'img_box'" v-if="list.images" v-for="img in list.images">
					<image :mode="contenttype ? 'widthFix':'aspectFill'" class="info_img" :src="img" alt="" @click="toPreview(img)">
				</div>
			</div>
		</li>
	</div>
</template>
