(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-settingInfo-components-setSex"],{"2a2e":function(n,t,e){var a=e("24fb");t=a(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* 页面铺满屏幕 */.page-fill[data-v-4823ed1a]{width:100%;height:100%;position:absolute}.radio-sex[data-v-4823ed1a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.radio-single[data-v-4823ed1a]{padding:%?20?% %?20?%}.submitBtn[data-v-4823ed1a]{width:95%;margin-top:%?40?%}",""]),n.exports=t},"40a4":function(n,t,e){"use strict";e.r(t);var a=e("690d"),i=e.n(a);for(var s in a)"default"!==s&&function(n){e.d(t,n,(function(){return a[n]}))}(s);t["default"]=i.a},"690d":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{userInfo:{},sex:"未选择"}},onLoad:function(){var n=this;uni.request({url:this.server_url+"/users/find",method:"POST",success:function(t){n.userInfo=t.data.data[0],n.sex=t.data.data[0].sex},fail:function(n){console.log(n)}})},methods:{sexChange:function(n){this.sex=n.detail.value},formSubmitSex:function(){var n=this,t=n.sex;uni.request({url:n.server_url+"/users/modifySex",method:"POST",data:{id:n.userInfo.id,sex:t},success:function(n){uni.navigateBack({delta:1})}})}}};t.default=a},"90cb":function(n,t,e){"use strict";var a;e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return s})),e.d(t,"a",(function(){return a}));var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",[e("v-uni-form",{on:{submit:function(t){arguments[0]=t=n.$handleEvent(t),n.formSubmitSex.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"page-block",staticStyle:{"margin-top":"20upx"}},[e("v-uni-radio-group",{staticClass:"radio-sex",on:{change:function(t){arguments[0]=t=n.$handleEvent(t),n.sexChange.apply(void 0,arguments)}}},[e("v-uni-label",{staticClass:"radio-single"},[e("v-uni-radio",{attrs:{value:"男",checked:"男"==n.sex}},[n._v("男")])],1),e("v-uni-label",{staticClass:"radio-single"},[e("v-uni-radio",{attrs:{value:"女",checked:"女"==n.sex}},[n._v("女")])],1)],1)],1),e("v-uni-button",{staticClass:"submitBtn",attrs:{type:"primary","form-type":"submit"}},[n._v("提交")])],1)],1)},s=[]},"95b0":function(n,t,e){"use strict";var a=e("f8b2"),i=e.n(a);i.a},b4f8:function(n,t,e){"use strict";e.r(t);var a=e("90cb"),i=e("40a4");for(var s in i)"default"!==s&&function(n){e.d(t,n,(function(){return i[n]}))}(s);e("95b0");var o,u=e("f0c5"),r=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"4823ed1a",null,!1,a["a"],o);t["default"]=r.exports},f8b2:function(n,t,e){var a=e("2a2e");"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var i=e("4f06").default;i("4b2dfb01",a,!0,{sourceMap:!1,shadowMode:!1})}}]);