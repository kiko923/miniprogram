(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/wxcomponents/struggler-uniapp-add-tip/struggler-uniapp-add-tip"],{"32cd":function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){}));var i=function(){var t=this.$createElement;this._self._c},u=[]},"3f81":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{showTip:!1}},mounted:function(){var n=this;this.showTip=!t.getStorageInfoSync().keys.includes("SHOW_TIP"),setTimeout((function(){n.showTip=!1}),3e3*this.duration)},props:{tip:{type:String,default:"点击「添加小程序」，下次访问更便捷",required:!0},duration:{type:Number,default:5,required:!1}},methods:{hideTip:function(){t.setStorageSync("SHOW_TIP",!0),this.showTip=!1}}};n.default=e}).call(this,e("df3c")["default"])},"51ef":function(t,n,e){},"564a":function(t,n,e){"use strict";var i=e("51ef"),u=e.n(i);u.a},"9da0":function(t,n,e){"use strict";e.r(n);var i=e("3f81"),u=e.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(r);n["default"]=u.a},d93a:function(t,n,e){"use strict";e.r(n);var i=e("32cd"),u=e("9da0");for(var r in u)["default"].indexOf(r)<0&&function(t){e.d(n,t,(function(){return u[t]}))}(r);e("564a");var a=e("828b"),o=Object(a["a"])(u["default"],i["b"],i["c"],!1,null,"b6fbe972",null,!1,i["a"],void 0);n["default"]=o.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/wxcomponents/struggler-uniapp-add-tip/struggler-uniapp-add-tip-create-component',
    {
        'components/wxcomponents/struggler-uniapp-add-tip/struggler-uniapp-add-tip-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('df3c')['createComponent'](__webpack_require__("d93a"))
        })
    },
    [['components/wxcomponents/struggler-uniapp-add-tip/struggler-uniapp-add-tip-create-component']]
]);
