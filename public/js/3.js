webpackJsonp([3,6],{

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

	var disposed = false
	var Component = __webpack_require__(31)(
	  /* script */
	  __webpack_require__(66),
	  /* template */
	  __webpack_require__(67),
	  /* styles */
	  null,
	  /* scopeId */
	  null,
	  /* moduleIdentifier (server only) */
	  null
	)
	Component.options.__file = "d:\\project\\gankio\\src\\components\\home\\subComponents\\detailList.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] detailList.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-d323c484", Component.options)
	  } else {
	    hotAPI.reload("data-v-d323c484", Component.options)
	  }
	  module.hot.dispose(function (data) {
	    disposed = true
	  })
	})()}

	module.exports = Component.exports


/***/ }),

/***/ 66:
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
		}
	};

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "block"
	  }, _vm._l((_vm.contentlist), function(list) {
	    return _c('li', {
	      staticClass: "list_item"
	    }, [_c('a', {
	      staticClass: "list_block",
	      attrs: {
	        "href": list.url
	      }
	    }, [_c('p', {
	      staticClass: "list_title",
	      domProps: {
	        "textContent": _vm._s(list.desc)
	      }
	    }), _vm._v(" "), _c('div', {
	      staticClass: "list_info clearfix"
	    }, [_c('span', {
	      staticClass: "pull-left auther"
	    }, [_vm._v("via" + _vm._s(list.who))]), _vm._v(" "), _c('span', {
	      staticClass: "pull-right public_time"
	    }, [_vm._v(_vm._s(_vm._f("dateFilter")(list.publishedAt)))])]), _vm._v(" "), _vm._l((list.images), function(img) {
	      return (list.images) ? _c('div', {
	        staticClass: "img_box"
	      }, [_c('img', {
	        staticClass: "info_img",
	        attrs: {
	          "src": img,
	          "alt": ""
	        }
	      })]) : _vm._e()
	    })], 2)])
	  }))
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-d323c484", module.exports)
	  }
	}

/***/ })

});