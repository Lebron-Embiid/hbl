(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/refund/refund"],{"24e0":function(e,n,t){"use strict";var u=function(){var e=this,n=e.$createElement;e._self._c},a=[];t.d(n,"a",function(){return u}),t.d(n,"b",function(){return a})},"514d":function(e,n,t){"use strict";t.r(n);var u=t("24e0"),a=t("ffda");for(var f in a)"default"!==f&&function(e){t.d(n,e,function(){return a[e]})}(f);t("f91f");var r=t("2877"),c=Object(r["a"])(a["default"],u["a"],u["b"],!1,null,"5e2067ce",null);n["default"]=c.exports},6720:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={data:function(){return{items:[{value:"refund1",name:"本单相应商品(如有)已退回；"},{value:"refund2",name:"本单赠送积分348，将会作废；"},{value:"refund3",name:"本单赠送卡卷XXX，将会作废；"},{value:"refund4",name:"本单赠送卡卷XXX已使用，则在退款金额中扣除;"},{value:"refund5",name:"本单赠送礼品XXX，已退回；"},{value:"refund6",name:"本单赠送礼品XXX不能回收，则在退款金额中扣除;"}],refund_price:""}},methods:{checkboxChange:function(e){for(var n=this.items,t=e.detail.value,u=0,a=n.length;u<a;++u){var f=n[u];t.includes(f.value)?this.$set(f,"checked",!0):this.$set(f,"checked",!1)}console.log(t)}},onLoad:function(){}};n.default=u},f7fb:function(e,n,t){},f91f:function(e,n,t){"use strict";var u=t("f7fb"),a=t.n(u);a.a},ffda:function(e,n,t){"use strict";t.r(n);var u=t("6720"),a=t.n(u);for(var f in u)"default"!==f&&function(e){t.d(n,e,function(){return u[e]})}(f);n["default"]=a.a}},[["6187","common/runtime","common/vendor"]]]);