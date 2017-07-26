webpackJsonp([4,6],{

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

	var disposed = false
	var Component = __webpack_require__(31)(
	  /* script */
	  __webpack_require__(69),
	  /* template */
	  __webpack_require__(70),
	  /* styles */
	  null,
	  /* scopeId */
	  null,
	  /* moduleIdentifier (server only) */
	  null
	)
	Component.options.__file = "d:\\project\\gankio\\src\\components\\home\\subComponents\\commonList.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] commonList.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-a6661550", Component.options)
	  } else {
	    hotAPI.reload("data-v-a6661550", Component.options)
	  }
	  module.hot.dispose(function (data) {
	    disposed = true
	  })
	})()}

	module.exports = Component.exports


/***/ }),

/***/ 69:
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		props: {
			contentlist: {
				type: Array
			}
		},
		methods: {
			toDetail: function toDetail(time, title) {
				var t = time.substring(0, time.indexOf("T"));
				var til = title.replace("今日力推：", "");
				this.$router.push({ name: 'detail', query: { time: t, title: til } });
			}
		}
	};

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "block"
	  }, _vm._l((_vm.contentlist), function(list) {
	    return _c('li', {
	      staticClass: "list_item"
	    }, [_c('a', {
	      staticClass: "list_block",
	      on: {
	        "click": function($event) {
	          $event.preventDefault();
	          _vm.toDetail(list.updated_at, list.title)
	        }
	      }
	    }, [_c('p', {
	      staticClass: "title_block"
	    }, [_vm._v("\n\t\t\t\t["), _c('span', {
	      staticClass: "public_date"
	    }, [_vm._v(_vm._s(_vm._f("timeFilter")(list.updated_at)))]), _vm._v("]\n\t\t\t\t"), _c('span', {
	      staticClass: "list_title"
	    }, [_vm._v(_vm._s(_vm._f("titleFilter")(list.title)))])]), _vm._v(" "), _c('img', {
	      staticClass: "list_img",
	      attrs: {
	        "src": _vm._f("imgUrl")(list.img),
	        "alt": ""
	      }
	    })])])
	  }))
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-a6661550", module.exports)
	  }
	}

/***/ })

});