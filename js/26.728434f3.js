(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[26],{a646:function(e,t,a){"use strict";a("de14")},a994:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e._self._c;return t("div",[15155==e.idUsuario?t("div",{staticClass:"q-pa-md"},[t("div",{staticClass:"row q-gutter-md q-pa-md justify-end"},[t("div",{staticClass:"col-2"},[t("q-input",{attrs:{filled:"",mask:"date",rules:["date"],label:"Data inicial"},scopedSlots:e._u([{key:"append",fn:function(){return[t("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[t("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[t("q-date",{model:{value:e.datein,callback:function(t){e.datein=t},expression:"datein"}},[t("div",{staticClass:"row items-center justify-end"},[t("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Close",color:"primary",flat:""}})],1)])],1)],1)]},proxy:!0}],null,!1,499039178),model:{value:e.datein,callback:function(t){e.datein=t},expression:"datein"}})],1),t("div",{staticClass:"col-2"},[t("q-input",{attrs:{filled:"",mask:"date",rules:["date"],label:"Data final"},scopedSlots:e._u([{key:"append",fn:function(){return[t("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[t("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[t("q-date",{model:{value:e.datefim,callback:function(t){e.datefim=t},expression:"datefim"}},[t("div",{staticClass:"row items-center justify-end"},[t("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Close",color:"primary",flat:""}})],1)])],1)],1)]},proxy:!0}],null,!1,1005627311),model:{value:e.datefim,callback:function(t){e.datefim=t},expression:"datefim"}})],1),t("div",{staticClass:"col-6"},[t("q-select",{attrs:{filled:"",multiple:"",options:e.entidades,label:"Entidades","transition-show":"jump-up","transition-hide":"jump-up"},model:{value:e.entSelect,callback:function(t){e.entSelect=t},expression:"entSelect"}})],1),t("div",{staticClass:"col-1"},[t("q-btn",{staticClass:"q-py-sm",attrs:{color:"primary",icon:"search"},on:{click:e.getProducao}})],1)]),t("div",{staticClass:"row justify-evenly",staticStyle:{height:"100%"}},[t("div",{staticClass:"col-4"},[t("q-table",{staticStyle:{height:"40vw"},attrs:{title:"Tabela de preços",data:e.tabPreco,columns:e.tabPreColumns,"row-key":"codExame",pagination:e.pagination,"rows-per-page-options":[0]},on:{"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"top",fn:function(){return[t("div",{staticClass:"text-h6"},[e._v("Tabela de preços")]),t("q-space"),e.tabPreco.length>0?t("q-btn",{attrs:{color:"primary",icon:"download"},on:{click:e.downloadTabelaPreco}}):e._e()]},proxy:!0}],null,!1,2221256546)})],1),t("div",{staticClass:"col-7"},[t("q-table",{staticStyle:{height:"40vw"},attrs:{title:"Produção",data:e.producao,columns:e.proColumns,"row-key":"codExame",pagination:e.pagination,"rows-per-page-options":[0]},on:{"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"top",fn:function(){return[t("div",{staticClass:"text-h6"},[e._v("Produção")]),t("q-space"),e.producao.length>0?t("q-btn",{attrs:{color:"primary",icon:"download"},on:{click:e.downloadProducaoExcel}}):e._e()]},proxy:!0}],null,!1,266209832)})],1)])]):t("div",[t("div",{staticClass:"image-container"},[t("q-img",{staticClass:"logo",attrs:{src:a("4349")}})],1)])])},o=[],r=(a("e260"),a("d81d"),a("a9e3"),a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("96cf"),a("c973")),i=a.n(r),s=a("bc3a"),l=a.n(s),c=(a("bd4c"),{name:"Home",components:{},data:function(){return{pagination:{rowsPerPage:0},tabPreColumns:[{name:"tpiExame",align:"left",label:"Cod. Exame",field:"tpiExame",sortable:!0},{name:"ExaNome",align:"left",label:"Exame",field:"ExaNome",sortable:!0},{name:"tpiPreco",label:"Valor",field:"tpiPreco",sortable:!0}],tabPreco:[],proColumns:[{name:"solExame",align:"left",label:"Cod. Exame",field:"solExame",sortable:!0},{name:"ExaNome",align:"left",label:"Exame",field:"ExaNome",sortable:!0},{name:"Qtde",align:"left",label:"Qtde",field:"Qtde",sortable:!0},{name:"Valor",align:"left",label:"Valor",field:"Valor",sortable:!0}],producao:[],entidades:[],entSelect:null,datein:null,datefim:null}},beforeCreate:function(){localStorage.getItem("token")||this.$router.push("/"),localStorage.getItem("id")&&(this.idUsuario=localStorage.getItem("id"))},created:function(){},mounted:function(){this.getEntidades(),this.getValorExame()},beforeDestroy:function(){},methods:{getEntidades:function(){var e=this;return i()(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={},t.prev=1,t.next=4,l.a.post("https://c096-187-49-94-172.ngrok-free.app/listaEntidades",a,{timeout:4e3});case 4:n=t.sent,e.entidades=n.data.map((function(e){return{label:e.ENTFANTASIA,value:e.entsid}})),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](1),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))()},getValorExame:function(){var e=this;return i()(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={entsid:e.idUsuario},t.prev=1,t.next=4,l.a.post("https://c096-187-49-94-172.ngrok-free.app/listarTabelaPreco",a,{timeout:2e3});case 4:n=t.sent,e.tabPreco=n.data.map((function(e){return{tpiExame:e.tpiExame,ExaNome:e.ExaNome,tpiPreco:parseFloat(e.tpiPreco)}})),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](1),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))()},getProducao:function(){var e=this;return i()(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={entidades:e.entSelect.map((function(e){return e.value})),datainicial:e.datein,datafinal:e.datefim},t.prev=1,t.next=4,l.a.post("https://c096-187-49-94-172.ngrok-free.app/listaProducaoEntidade",a,{timeout:2e3});case 4:n=t.sent,e.producao=n.data.map((function(e){return{solExame:e.solExame,ExaNome:e.ExaNome,Qtde:Number(e.Qtde),Valor:parseFloat(e.Valor)}})),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](1),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))()},downloadProducaoExcel:function(){var e=this;return i()(regeneratorRuntime.mark((function t(){var a,n,o,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.entSelect&&0!==e.entSelect.length){t.next=3;break}return e.$q.notify({type:"negative",message:"Por favor, selecione pelo menos uma entidade.",position:"top"}),t.abrupt("return");case 3:if(e.datein&&e.datefim){t.next=6;break}return e.$q.notify({type:"negative",message:"As datas de início e fim são obrigatórias.",position:"top"}),t.abrupt("return");case 6:return a={entidades:e.entSelect.map((function(e){return e.value})),datainicial:e.datein,datafinal:e.datefim},t.prev=7,t.next=10,l.a.post("https://c096-187-49-94-172.ngrok-free.app/export/listaProducaoEntidade",a,{responseType:"blob",timeout:3e3});case 10:n=t.sent,o=window.URL.createObjectURL(new Blob([n.data])),r=document.createElement("a"),r.href=o,r.setAttribute("download","producao_entidade.xlsx"),document.body.appendChild(r),r.click(),r.remove(),t.next=23;break;case 20:t.prev=20,t.t0=t["catch"](7),console.error(t.t0);case 23:case"end":return t.stop()}}),t,null,[[7,20]])})))()},downloadTabelaPreco:function(){var e=this;return i()(regeneratorRuntime.mark((function t(){var a,n,o,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={entsid:e.idUsuario},t.prev=1,t.next=4,l.a.post("https://c096-187-49-94-172.ngrok-free.app/export/listarTabelaPreco",a,{timeout:3e3,responseType:"blob"});case 4:n=t.sent,o=window.URL.createObjectURL(new Blob([n.data])),r=document.createElement("a"),r.href=o,r.setAttribute("download","tabela_preco.xlsx"),document.body.appendChild(r),r.click(),r.remove(),t.next=17;break;case 14:t.prev=14,t.t0=t["catch"](1),console.error(t.t0);case 17:case"end":return t.stop()}}),t,null,[[1,14]])})))()}}}),d=c,u=(a("a646"),a("2877")),p=a("27f9"),m=a("0016"),f=a("7cbe"),b=a("52ee"),v=a("9c40"),x=a("ddd8"),g=a("eaac"),h=a("2c91"),w=a("068f"),k=a("7f67"),y=a("eebe"),E=a.n(y),C=Object(u["a"])(d,n,o,!1,null,"1197f6db",null);t["default"]=C.exports;E()(C,"components",{QInput:p["a"],QIcon:m["a"],QPopupProxy:f["a"],QDate:b["a"],QBtn:v["a"],QSelect:x["a"],QTable:g["a"],QSpace:h["a"],QImg:w["a"]}),E()(C,"directives",{ClosePopup:k["a"]})},de14:function(e,t,a){}}]);