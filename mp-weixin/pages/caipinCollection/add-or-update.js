(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/caipinCollection/add-or-update"],{"12c7":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=o(t("a34a"));function o(e){return e&&e.__esModule?e:{default:e}}function r(e,n,t,i,o,r,c){try{var a=e[r](c),u=a.value}catch(l){return void t(l)}a.done?n(u):Promise.resolve(u).then(i,o)}function c(e){return function(){var n=this,t=arguments;return new Promise((function(i,o){var c=e.apply(n,t);function a(e){r(c,i,o,a,u,"next",e)}function u(e){r(c,i,o,a,u,"throw",e)}a(void 0)}))}}var a=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("b7aa"))}.bind(null,t)).catch(t.oe)},u={data:function(){return{cross:"",ro:{caipinId:!1,yonghuId:!1,caipinCollectionTypes:!1,insertTime:!1,createTime:!1},ruleForm:{caipinId:"",yonghuId:"",caipinCollectionTypes:"",caipinCollectionValue:"",insertTime:"",createTime:""},user:{},caipinCollectionTypesOptions:[],caipinCollectionTypesIndex:0}},components:{wPicker:a},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(e){var n=this;return c(i.default.mark((function t(){var o,r,c;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o={page:1,limit:100,dicCode:"caipin_collection_types"},t.next=3,n.$api.page("dictionary",o);case 3:if(r=t.sent,n.caipinCollectionTypesOptions=r.data.list,!e.id){t.next=11;break}return n.ruleForm.id=e.id,t.next=9,n.$api.info("caipinCollection",n.ruleForm.id);case 9:c=t.sent,n.ruleForm=c.data;case 11:e.caipinCollectionId&&(n.ruleForm.caipinCollectionId=e.caipinCollectionId);case 12:case"end":return t.stop()}}),t)})))()},methods:{caipinCollectionTypesChange:function(e){this.caipinCollectionTypesIndex=e.target.value,this.ruleForm.caipinCollectionValue=this.caipinCollectionTypesOptions[this.caipinCollectionTypesIndex].indexName,this.ruleForm.caipinCollectionTypes=this.caipinCollectionTypesOptions[this.caipinCollectionTypesIndex].codeIndex},insertTimeConfirm:function(e){console.log(e),this.ruleForm.insertTime=e.result,this.$forceUpdate()},createTimeConfirm:function(e){console.log(e),this.ruleForm.createTime=e.result,this.$forceUpdate()},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return c(i.default.mark((function t(){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n.ruleForm.id){t.next=5;break}return t.next=3,n.$api.update("caipinCollection",n.ruleForm);case 3:t.next=7;break;case 5:return t.next=7,n.$api.save("caipinCollection",n.ruleForm);case 7:e.setStorageSync("pingluenStateState",!0),n.$utils.msgBack("提交成功");case 9:case"end":return t.stop()}}),t)})))()},getDate:function(e){var n=new Date,t=n.getFullYear(),i=n.getMonth()+1,o=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),i=i>9?i:"0"+i,o=o>9?o:"0"+o,"".concat(t,"-").concat(i,"-").concat(o)},toggleTab:function(e){this.$refs[e].show()}}};n.default=u}).call(this,t("543d")["default"])},"3d8f":function(e,n,t){"use strict";t.r(n);var i=t("a84a"),o=t("6e85");for(var r in o)"default"!==r&&function(e){t.d(n,e,(function(){return o[e]}))}(r);t("3e96");var c,a=t("f0c5"),u=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,"38ee506d",null,!1,i["a"],c);n["default"]=u.exports},"3e96":function(e,n,t){"use strict";var i=t("528a"),o=t.n(i);o.a},"4e1f":function(e,n,t){"use strict";(function(e){t("48e8");i(t("66fd"));var n=i(t("3d8f"));function i(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t("543d")["createPage"])},"528a":function(e,n,t){},"6e85":function(e,n,t){"use strict";t.r(n);var i=t("12c7"),o=t.n(i);for(var r in i)"default"!==r&&function(e){t.d(n,e,(function(){return i[e]}))}(r);n["default"]=o.a},a84a:function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return r})),t.d(n,"a",(function(){return i}));var i={wPicker:function(){return Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(t.bind(null,"b7aa"))}},o=function(){var e=this,n=e.$createElement;e._self._c},r=[]}},[["4e1f","common/runtime","common/vendor"]]]);