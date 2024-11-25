const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["css/append_new-Cep1_vfb.css","css/append_darwin-DbNibQAC.css","css/append_linux-oF398HMQ.css","css/append_linux_vibrancy-COiZq8MS.css","css/append_vibrancy-N_4jhJkL.css","css/append_win32-CQeNEjvl.css"])))=>i.map(i=>d[i]);
var sn=Object.defineProperty;var en=(s,e,n)=>e in s?sn(s,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[e]=n;var ks=(s,e,n)=>en(s,typeof e!="symbol"?e+"":e,n);import{r as nn}from"./v-viewer-CbVtLeGu.js";import{V as tn}from"./vue-clipboard2-DAgEH5fF.js";import{S as on}from"./spacingjs-BfHbCk5U.js";import{E as W,d as S,v as C,e as m,f as d,t,u as c,I as hs,m as v,J as R,F as I,z as $,q as b,A as L,B as H,C as y,K as fs,n as $e,L as Ms,M as rs,N as Ls,O as j,D as T,x as z,p as V,P as Q,y as Rs,Q as Os,a as rn,R as ms,S as _e,U as an,H as un}from"./@vue-plFwtcew.js";import{x as ee}from"./xss-BoJgOivI.js";import{p as As}from"./tiny-pinyin-moALDqOr.js";import{_ as Ks}from"./@stapxs-B_FtFArD.js";import{j as Ds}from"./jsonpath-C-yRjj45.js";import{F as gn}from"./js-file-downloader-CSUU4O-j.js";import{c as Hs}from"./semver-compare-B226SgSQ.js";import{_ as B,C as ne,M as ve}from"./vue3-bcui-Ba_U8FWL.js";import{P as pn}from"./pofile-Chw_eO2T.js";import{v as Te}from"./uuid-D1YlAPgV.js";import{f as cn}from"./vue3-danmaku-BuweZBsi.js";import{d as Pe}from"./detect-browser-ClY_l-h2.js";import{l as te,f as ln,a as mn,b as dn,c as fn,i as _n,d as vn,F as hn}from"./@fortawesome-B3Mtom2b.js";import{a as bn}from"./animejs-BNELU3II.js";import{i as yn}from"./browser-image-compression-BzWLnoYn.js";import{c as En}from"./vue-i18n-1OldYTaI.js";import"./viewerjs-BqZfc7kc.js";import"./clipboard-CUxp2LTz.js";import"./cssfilter-BjxKUPhv.js";import"./axios-DAyGmqK_.js";import"./rollup-plugin-node-polyfills-DhcwZ_kt.js";import"./@intlify-DqB41OTx.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const p of a)if(p.type==="childList")for(const g of p.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&o(g)}).observe(document,{childList:!0,subtree:!0});function n(a){const p={};return a.integrity&&(p.integrity=a.integrity),a.referrerPolicy&&(p.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?p.credentials="include":a.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function o(a){if(a.ep)return;a.ep=!0;const p=n(a);fetch(a.href,p)}})();const wn="stapxs-qq-lite",On="3.0.0",Dn="Stapx Steve [林槐]",In="一个兼容 OneBot 的非官方网页版 QQ 客户端，使用 Vue 重制的全新版本。",Ln="http://github.com/Stapxs/Stapxs-QQ-Lite-2.0",qn="Apache-2.0",kn="./out/main/index.js",Cn="module",An={lint:"eslint . --ext .js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts,.vue --fix",typecheck:"tsc --noEmit -p tsconfig.node.json --composite false && vue-tsc --noEmit -p tsconfig.web.json --composite false",start:"vite preview","start:electron":"electron-vite preview",dev:"vite dev","dev:electron":"electron-vite dev",build:"vite build","build:electron":"electron-vite build",postinstall:"electron-builder install-app-deps","build:unpack":"electron-vite build && electron-builder --dir","build:win":"electron-vite build && electron-builder --win","build:mac":"electron-vite build && electron-builder --mac","build:linux":"electron-vite build && electron-builder --linux"},$n={"@electron-toolkit/preload":"^3.0.0","@electron-toolkit/utils":"^3.0.0","electron-store":"^10.0.0","electron-window-state":"^5.0.3",log4js:"^6.9.1","rollup-plugin-node-polyfills":"^0.2.1",ws:"^8.18.0"},Tn={"@electron-toolkit/eslint-config":"^1.0.2","@electron-toolkit/eslint-config-ts":"^2.0.0","@electron-toolkit/tsconfig":"^1.0.1","@fortawesome/fontawesome-svg-core":"^6.7.0","@fortawesome/free-regular-svg-icons":"^6.7.0","@fortawesome/free-solid-svg-icons":"^6.7.0","@fortawesome/vue-fontawesome":"^3.0.8","@modyfi/vite-plugin-yaml":"^1.1.0","@rushstack/eslint-patch":"^1.10.3","@stapxs/umami-logger-typescript":"^1.0.12","@types/jsonpath":"^0.2.4","@types/node":"^20.14.8","@vitejs/plugin-vue":"^5.0.5","@vue/eslint-config-typescript":"^13.0.0",animejs:"^3.2.2","browser-image-compression":"^2.0.2","detect-browser":"^5.3.0",electron:"^31.0.2","electron-builder":"^24.13.3","electron-vite":"^2.3.0",eslint:"^8.57.0","eslint-plugin-vue":"^9.26.0","js-file-downloader":"^1.1.25",jsonpath:"^1.1.1",pofile:"^1.1.4","rollup-plugin-visualizer":"^5.12.0",spacingjs:"^1.0.8","tiny-pinyin":"^1.3.2",typescript:"^5.5.2",uuid:"^11.0.3","v-viewer":"^3.0.21",vite:"^5.3.1","vite-plugin-pwa":"^0.21.0","vite-plugin-vue-devtools":"^7.6.4",vue:"^3.4.30","vue-clipboard2":"^0.3.3","vue-i18n":"^10.0.4","vue-tsc":"^2.0.22","vue3-bcui":"^0.2.6","vue3-danmaku":"^1.6.1",xss:"^1.0.15"},is={name:wn,version:On,private:!1,author:Dn,description:In,homepage:Ln,license:qn,main:kn,type:Cn,scripts:An,dependencies:$n,devDependencies:Tn},Pn="modulepreload",Vn=function(s){return"/Stapxs-QQ-Lite-2.0/"+s},he={},r=function(e,n,o){let a=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const g=document.querySelector("meta[property=csp-nonce]"),u=(g==null?void 0:g.nonce)||(g==null?void 0:g.getAttribute("nonce"));a=Promise.allSettled(n.map(l=>{if(l=Vn(l),l in he)return;he[l]=!0;const _=l.endsWith(".css"),E=_?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${E}`))return;const h=document.createElement("link");if(h.rel=_?"stylesheet":Pn,_||(h.as="script"),h.crossOrigin="",h.href=l,u&&h.setAttribute("nonce",u),document.head.appendChild(h),_)return new Promise((f,q)=>{h.addEventListener("load",f),h.addEventListener("error",()=>q(new Error(`Unable to preload CSS for ${l}`)))})}))}function p(g){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=g,window.dispatchEvent(u),!u.defaultPrevented)throw g}return a.then(g=>{for(const u of g||[])u.status==="rejected"&&p(u.reason);return e().catch(p)})},Ve=(s,e,n)=>{const o=s[e];return o?typeof o=="function"?o():Promise.resolve(o):new Promise((a,p)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(p.bind(null,new Error("Unknown variable dynamic import: "+e+(e.split("/").length!==n?". Note that variables only represent file names one level deep.":""))))})},cs=[{value:"zh-CN",lang:"zh-CN",name:"简体中文"},{value:"zh-CAT",lang:"zh-CN",name:"简体中文（喵星）"},{value:"zh-TW",lang:"zh-TW",name:"繁體中文（台灣）"},{value:"zh-YUE",lang:"zh-HK",name:"粵語（香港）",fallback:"zh-TW"},{value:"en-US",lang:"en-US",name:"English (US)"}];var N=(s=>(s[s.WS=0]="WS",s[s.UI=1]="UI",s[s.ERR=2]="ERR",s[s.INFO=3]="INFO",s[s.DEBUG=4]="DEBUG",s))(N||{});class G{constructor(){ks(this,"logTypeInfo");this.logTypeInfo=[["7abb7e","fff"],["b573f7","fff"],["ff5370","fff"],["99b3db","fff"],["677480","fff"]]}add(e,n,o="",a=!1){const p=k.get("log_level");p==="all"?this.print(e,n,o,a):p==="debug"&&(e===4||e===1)?this.print(e,n,o,a):p==="info"&&e===3?this.print(e,n,o,a):p==="err"&&e===2&&this.print(e,n,o,a)}info(e,n=!1){this.add(3,e,void 0,n)}error(e,n,o=!1){e?this.add(2,n+`
`,e,o):this.add(2,n,void 0,o)}debug(e,n=!1){this.add(4,e,void 0,n)}print(e,n,o,a){const p=new Error;let g;const u=p.stack;if(u){const _=u.split(`
`);for(let E=1;E<_.length;E++)if(!_[E].includes("at Logger")){g=_[E].replace(/\(|\)/g,"").split(" ").pop()||"",g=g.replace("webpack-internal:///./","webpack-internal:///"),g.startsWith("webpack-internal:///node_modules")&&(g=void 0);break}}let l=N[e];l==="WS"&&(n.startsWith("GET")?(n=n.substring(4),l="<<<"):n.startsWith("PUT")&&(n=n.substring(4),l=">>>")),!a&&g?console.log(`%c${l}%c${g}%c
${n}`,`background:#${this.logTypeInfo[e][0]};color:#${this.logTypeInfo[e][1]};border-radius:7px 0 0 7px;padding:2px 4px 2px 7px;margin-bottom:7px;`,"background:#e3e8ec;color:#000;padding:2px 7px 4px 4px;border-radius:0 7px 7px 0;margin-bottom:7px;","",o):console.log(`%c${l}%c ${n}`,`background:#${this.logTypeInfo[e][0]};color:#${this.logTypeInfo[e][1]};border-radius:7px;padding:2px 4px 2px 7px;margin-bottom:7px;`,"",o)}}var P=(s=>(s.INFO="circle-info",s.ERR="circle-exclamation",s))(P||{});class M{add(e,n,o=!0){const a={id:ts.length,svg:e,text:n,autoClose:o};ts.splice(ts.length,0,a),a.autoClose&&setTimeout(()=>{this.remove(a.id)},5e3)}remove(e){const n=ts.findIndex(o=>o.id===e);n!==-1&&ts.splice(n,1)}clear(){setTimeout(()=>{ts.splice(0,ts.length)},300)}}const ts=W([]),Fn={name:"LLOneBot",redirect:"NapCat.Onebot"},ie=Object.freeze(Object.defineProperty({__proto__:null,default:Fn},Symbol.toStringTag,{value:"Module"})),Mn={name:"Lagrange.OneBot",version_info:"$.data",login_info:{uin:"$.data.user_id",bkn:"",nickname:"$.data.nickname"},user_list:{name:"get_friend_list|get_group_list",source:"$.data[*]",list:{group_id:"/group_id",group_name:"/group_name",member_count:"/member_count",admin_flag:null,class_id:"$.group.group_id",class_name:"$.group.group_name",user_id:"/user_id",nickname:"/nickname",remark:"/remark"}},roaming_stamp:{name:"fetch_custom_face",reverse:!0},message_list:{name:"get_group_msg_history",private_name:"get_friend_msg_history",source:"$.data.messages[*]",type:"$.data",message_type:{user:"private",group:"group"},list:{message_id:"/message_id",target_id:"/target_id",message_type:"/message_type",time:"/time",post_type:null,group_id:"/group_id",sender:"/sender",message:"/message",raw_message:"/raw_message"}},forward_msg:{name:"get_forward_msg",source:"$.data.message[*].data"},message_info:{message_id:"$.message_id",private_id:"$.user_id",group_id:"$.group_id",target_id:"$.target_id",sender:"$.sender.user_id"},get_message:"$.message",message_value:{image:{url:"$.file"}}},oe=Object.freeze(Object.defineProperty({__proto__:null,default:Mn},Symbol.toStringTag,{value:"Module"})),Rn={name:"NapCat.Onebot",version_info:"$.data",login_info:{uin:"$.data.user_id",bkn:"",nickname:"$.data.nickname"},friend_list:{name:"get_friends_with_category",source:"$.data[*].buddyList[*]",list:{class_id:null,class_name:null,user_id:"/user_id",nickname:"/nickname",remark:"/remark",longNick:"/longNick"}},group_list:{name:"get_group_list",source:"$.data[*]",list:{group_id:"/group_id",group_name:"/group_name",member_count:"/member_count",admin_flag:null}},friend_category:{name:"get_friends_with_category",source:"$.data[*]",list:{class_id:"/categoryId",class_name:"/categoryName",sort_id:"/categorySortId",users:"$.buddyList[*].user_id"}},message_list:{name:"get_group_msg_history",private_name:"get_friend_msg_history",source:"$.data.messages[*]",pagerType:"full",type:"$.data",message_type:{user:"private",group:"group"},list:{message_id:"/message_id",target_id:"/target_id",message_type:"/message_type",time:"/time",post_type:"/post_type",group_id:"/group_id",sender:"/sender",message:"/message",raw_message:"/raw_message"}},forward_msg:{name:"get_forward_msg",source:"$.data.messages[*]",list:{message_id:"/message_id",target_id:null,message_type:"/message_type",time:"/time",post_type:"/post_type",group_id:"/group_id",sender:"/sender",message:"/content",raw_message:null}},message_info:{message_id:"$.message_id",private_id:"$.user_id",group_id:"$.group_id",target_id:"$.target_id",sender:"$.sender.user_id"},get_message:"$.message",message_value:{file:{name:"$.file"}},set_message_read:{name:"mark_group_msg_as_read",private_name:"mark_private_msg_as_read"},send_respond:{name:"set_msg_emoji_like"},group_notices:{name:"_get_group_notice",source:"$.data[*]",list:{content:"$.message.text",sender:"/sender_id",time:"/publish_time",is_read:null,read_num:null}},group_essence:{name:"get_essence_msg_list",source:"$.data[*]",list:{sender_uin:"/sender_id",sender_nick:"/sender_nick",sender_time:"/operator_time",msg_content:"/content",add_digest_uin:"/operator_id",add_digest_nick:"/operator_nick",add_digest_time:"/operator_time"},is_end:null},group_member_info:{name:"get_group_member_info",source:"$.data",list:{group_id:"/group_id",user_id:"/user_id",nickname:"/nickname",card:"/card",sex:"/sex",age:"/age",join_time:"/join_time",last_sent_time:"/last_sent_time",is_robot:"/is_robot",shut_up_timestamp:"/shut_up_timestamp"}},leave_group:{name:"set_group_leave"},roaming_stamp:{name:"fetch_custom_face",pagerType:"full"},recent_contact:{name:"get_recent_contact",source:"$.data[*]",list:{user_id:"/peerUin",time:"/msgTime",chat_type:"/chatType",name:"/peerName"}},poke:{name:"group_poke",private_name:"friend_poke"}},re=Object.freeze(Object.defineProperty({__proto__:null,default:Rn},Symbol.toStringTag,{value:"Module"})),Bn="/Stapxs-QQ-Lite-2.0/txt/qed-CrYuCm0r.txt",Sn=S({name:"DepPan",data(){return{openLink:ss}}}),Nn="/Stapxs-QQ-Lite-2.0/png/Vue-lEhHouxB.png",Un={class:"main"},jn={class:"ss-card power-by"},Hn={style:{color:"var(--color-font-2)","font-size":"0.8rem"}},Qn={class:"dept-list"},zn={class:"ss-card info"},Wn={id:"deptLink"},Gn={class:"dept"};function Kn(s,e,n,o,a,p){const g=C("font-awesome-icon");return m(),d("div",Un,[t("div",jn,[e[5]||(e[5]=t("img",{src:Nn,alt:"logo",class:"logo"},null,-1)),t("span",Hn,c(s.$t("驱动自")),1),e[6]||(e[6]=hs('<span class="name" data-v-b58a1781>Vue.js</span><div class="tech" data-v-b58a1781><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-v-b58a1781><path d="M86.76,255a9.89,9.89,0,0,0,4.87-1.29,9.82,9.82,0,0,0,3.65-13.43c-16.46-28.56-17.81-52.12-7.45-70,14.26-24.57,53.61-33.65,105.27-24.29a9.86,9.86,0,0,0,11.45-7.9,9.84,9.84,0,0,0-7.93-11.44c-29.19-5.28-56-5.18-77.39.3-22.3,5.71-39,17.28-48.45,33.48-14,24.19-12.7,54.73,7.42,89.62A9.85,9.85,0,0,0,86.76,255Z" data-v-b58a1781></path><path d="M361.61,143.73c32.24.42,52.61,9.31,62.79,26.86,14.21,24.48,2.52,62.81-31.27,102.52a9.82,9.82,0,0,0,7.51,16.18,9.88,9.88,0,0,0,7.52-3.46c19.12-22.47,32.35-45.54,38.25-66.71,6.14-22,4.43-42.21-5-58.38-13.8-23.78-40.13-36.15-79.59-36.67h-.14a9.83,9.83,0,0,0-.12,19.66Z" data-v-b58a1781></path><path d="M326.47,414.89a9.88,9.88,0,0,0-13.5,3.35c-16.41,27.15-36.57,42.1-56.77,42.1-28.49,0-56-29.31-73.73-78.42A9.87,9.87,0,0,0,169.88,376a9.83,9.83,0,0,0-6,12.58c10,27.77,23.47,50.75,39,66.46,16.11,16.34,34.55,25,53.32,25,27.38,0,53.54-18.33,73.65-51.61a9.81,9.81,0,0,0-3.38-13.5Z" data-v-b58a1781></path><path d="M431.7,338.54a32.14,32.14,0,0,0-29.9,44.33C360,402.37,282,387.66,209.93,346.25c-32.91-18.9-62.16-41.86-84.6-66.39a9.9,9.9,0,0,0-13.91-.65,9.8,9.8,0,0,0-.65,13.9c23.79,26,54.68,50.28,89.33,70.18,40.28,23.13,82.27,38.63,121.43,44.81a225.54,225.54,0,0,0,35,2.91c23.12,0,43-4.3,58.51-12.79a32.2,32.2,0,1,0,16.7-59.68Zm0,44.66a12.6,12.6,0,0,1-7.82-2.72,10,10,0,0,0-2.2-2.21,12.61,12.61,0,1,1,10,4.93Z" data-v-b58a1781></path><path d="M82.09,338.59c.57-21.26,12.41-47,33.68-73.16,23.19-28.45,56.69-56,94.34-77.65,33.25-19.1,65.2-31.9,98.07-38.91a9.83,9.83,0,1,0-4.12-19.22c-34.85,7.43-68.78,21-103.79,41.09C116.09,219.09,59.9,289.88,62.46,343.9a32.32,32.32,0,1,0,19.63-5.31ZM80.3,383.2a12.5,12.5,0,1,1,12.59-12.5A12.56,12.56,0,0,1,80.3,383.2Z" data-v-b58a1781></path><path d="M256.2,96.32a32.23,32.23,0,0,0,26.53-13.81c17.89,11.69,34,35,45.81,66.12,13,34.39,19.84,75.38,19.84,118.54,0,37.18-5.19,72.35-15,103.6a9.72,9.72,0,0,0,.66,7.49,9.82,9.82,0,0,0,5.8,4.84,9.89,9.89,0,0,0,12.34-6.44c10.42-33.14,15.93-70.34,15.93-109.49,0-47.17-7.77-91.77-22.47-129-14.41-36.48-34.13-62.4-57.14-75.16A32.3,32.3,0,1,0,256.2,96.32Zm0-44.66a12.5,12.5,0,1,1-12.59,12.5A12.56,12.56,0,0,1,256.2,51.66Z" data-v-b58a1781></path><path d="M251,243.36h0a24.35,24.35,0,0,0,5.16,48.16,24.68,24.68,0,0,0,5.16-.55A24.36,24.36,0,1,0,251,243.36Z" data-v-b58a1781></path></svg></div>',2))]),t("div",Qn,[t("div",zn,[v(g,{icon:["fas","circle-info"]}),t("span",Wn,c(s.$t("你可以在项目仓库的依赖关系图中找到大部分依赖，而这里列出了一些不由包管理管理的依赖。")),1)]),t("div",Gn,[t("div",{class:"ss-card jump-card",onClick:e[0]||(e[0]=u=>s.openLink("https://lbs.amap.com/api/javascript-api/summary"))},[e[7]||(e[7]=t("header",null,[t("div"),t("div",null,[R("aMap"),t("span",null,"高德地图")])],-1)),v(g,{icon:["fas","angle-right"]})]),t("div",{class:"ss-card jump-card",onClick:e[1]||(e[1]=u=>s.openLink("https://github.com/Stapxs/Border-Card-UI/tree/js-bcui"))},[e[8]||(e[8]=t("header",null,[t("div"),t("div",null,[R("Border Card UI"),t("span",null,"bcui.js")])],-1)),e[9]||(e[9]=t("div",null,"Apache 2.0",-1)),v(g,{icon:["fas","angle-right"]})]),t("div",{class:"ss-card jump-card",onClick:e[2]||(e[2]=u=>s.openLink("http://fontawesome.com"))},[e[10]||(e[10]=t("header",null,[t("div"),R(" Font Awesome ")],-1)),e[11]||(e[11]=t("div",null,"SIL OFL 1.1",-1)),v(g,{icon:["fas","angle-right"]})]),t("div",{class:"ss-card jump-card",onClick:e[3]||(e[3]=u=>s.openLink("https://github.com/koishijs/QFace"))},[e[12]||(e[12]=t("header",null,[t("div"),R(" QFace ")],-1)),e[13]||(e[13]=t("div",null,"MIT",-1)),v(g,{icon:["fas","angle-right"]})]),t("div",{class:"ss-card jump-card",onClick:e[4]||(e[4]=u=>s.openLink("https://github.com/SAWARATSUKI/KawaiiLogos"))},[e[14]||(e[14]=t("header",null,[t("div"),t("div",null,[R("ServiceLogos"),t("span",null,"vue.js logo")])],-1)),v(g,{icon:["fas","angle-right"]})])])])])}const Jn=B(Sn,[["render",Kn],["__scopeId","data-v-b58a1781"]]),Zn=S({name:"AboutPan",props:{showUI:{type:Boolean,default:!1}},data(){return{packageInfo:is,openLink:ss,constList:[]}},mounted(){const s=["doodlehuang"];fetch("https://api.github.com/repos/stapxs/stapxs-qq-lite-2.0/contributors").then(e=>e.json()).then(e=>{for(let n=0;n<e.length;n++)this.constList.push({url:e[n].avatar_url,link:e[n].html_url,title:e[n].login,isMe:e[n].login=="Stapxs",isSuperThakns:s.includes(e[n].login)})})},methods:{dependencies(){i.popBoxList=[];const s={title:this.$t("许可版权声明"),template:Jn};i.popBoxList.push(s)},goGithub(){ss("https://github.com/Stapxs/Stapxs-QQ-Lite-2.0"),x("click_statistics",{name:"visit_github"})},goBlog(){ss("https://blog.stapxs.cn/About.html"),x("click_statistics",{name:"visit_blog"})}}}),Yn={class:"about-pan"},Xn={style:{"text-align":"center"}},xn={class:"buttons"},st={key:0,class:"ss-card contributors-card"},et=["title","onClick"];function nt(s,e,n,o,a,p){const g=C("font-awesome-icon");return m(),d("div",Yn,[t("div",{id:"logo-card",class:L("ss-card logo-card"+(s.showUI?"":" hidd-sha"))},[e[4]||(e[4]=hs('<svg viewBox="0 0 1080 1080" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M537 1080C833.577 1080 1074 839.577 1074 543C1074 246.423 833.577 6 537 6C240.423 6 0 246.423 0 543C0 839.577 240.423 1080 537 1080Z"></path><path d="M540.28 803.2C493.78 803.2 451.18 787.7 423.68 764.4C409.78 768.6 391.88 775.3 380.68 783.6C371.08 790.7 372.28 798 373.98 800.9C381.58 813.8 504.68 809.1 540.28 805.1V803.2ZM540.28 803.2C586.78 803.2 629.38 787.7 656.88 764.4C670.78 768.6 688.68 775.3 699.88 783.6C709.48 790.7 708.28 798 706.58 800.9C698.98 813.8 575.88 809.1 540.28 805.1V803.2Z"></path><path d="M540.58 524.8C617.28 524.3 678.78 509.4 699.58 503.7C704.58 502.3 707.18 499.9 707.18 499.9C707.18 499.2 707.48 487.4 707.48 481.3C707.48 378.9 659.18 276 540.18 276C421.28 276 372.88 378.9 372.88 481.3C372.88 487.4 373.18 499.2 373.18 499.9C373.18 499.9 375.38 502.2 379.28 503.3C398.48 508.7 461.18 524.2 539.78 524.8H540.58ZM749.08 610.1C744.28 594.8 737.88 576.9 731.28 559.8C731.28 559.8 727.48 559.3 725.58 559.9C666.58 577 595.08 588 540.58 587.3H539.98C485.78 587.9 414.78 577.2 355.98 560.2C353.78 559.6 349.28 559.8 349.28 559.8C342.68 576.9 336.18 594.8 331.48 610.1C308.78 683.1 316.18 713.3 321.78 714C333.78 715.5 368.48 659.1 368.48 659.1C368.48 716.4 420.18 804.4 538.68 805.2H541.78C660.28 804.4 711.98 716.4 711.98 659.1C711.98 659.1 746.68 715.5 758.68 714C764.38 713.3 771.68 683.1 749.08 610.1Z"></path><path d="M497.98 427.3C481.88 428 468.08 409.7 467.18 386.3C466.28 362.9 478.68 343.4 494.78 342.7C510.88 342 524.68 360.3 525.58 383.7C526.48 407.1 514.08 426.6 497.98 427.3ZM613.38 386.3C612.48 409.7 598.78 428 582.58 427.3C566.48 426.6 554.08 407 554.98 383.7C555.88 360.3 569.58 342 585.78 342.7C601.88 343.4 614.28 362.9 613.38 386.3Z"></path><path d="M517.78 386.7C518.48 395.9 513.48 404.1 506.48 405C499.48 405.9 493.28 399.1 492.48 389.9C491.78 380.7 496.78 372.5 503.78 371.6C510.78 370.7 517.08 377.4 517.78 386.7ZM562.08 389.7C563.48 387.1 573.18 373.7 593.28 378.6C598.58 379.9 600.98 381.8 601.48 382.5C602.28 383.6 602.48 385.2 601.68 387.3C600.18 391.5 596.98 391.4 595.28 390.5C594.18 390 580.18 380.6 567.28 394.6C566.38 395.6 564.78 395.9 563.28 394.7C561.88 393.6 561.28 391.3 562.08 389.7Z"></path><path d="M540.58 583.9H539.98C502.88 584.3 457.98 579.4 414.48 570.9C410.78 592.5 408.48 619.6 410.48 651.9C415.38 733.6 463.88 785 538.78 785.7H541.78C616.68 785 665.18 733.6 670.08 651.9C671.98 619.6 669.78 592.5 666.08 570.9C622.58 579.5 577.68 584.4 540.58 583.9Z"></path><path d="M435.08 577.1V657.5C435.08 657.5 471.88 664.9 508.78 659.8V585.6C485.38 584.3 460.18 581.4 435.08 577.1Z"></path><path d="M707.28 499.9C707.28 499.9 635.68 522.5 540.58 523.2H539.98C445.08 522.6 373.58 500 373.28 499.9L349.28 559.8C409.28 577.9 483.68 589.6 539.88 588.9H540.48C596.68 589.6 671.08 577.9 731.18 559.8L707.28 499.9Z"></path></svg>',1)),t("div",null,[t("span",null,c(s.$t("Stapxs QQ Lite")),1)]),t("span",Xn,c(s.$t("一个兼容 OneBot 的非官方网页版 QQ 客户端")),1),t("a",null,"v"+c(s.packageInfo.version),1),t("div",xn,[t("a",{class:"ss-button",onClick:e[0]||(e[0]=u=>s.goGithub())},c(s.$t("访问 GitHub 仓库")),1),t("a",{class:"ss-button",style:{width:"30px"},onClick:e[1]||(e[1]=u=>s.goBlog())},[v(g,{icon:["fas","circle-info"]})])]),s.constList.length>0?(m(),d("div",st,[t("div",null,[(m(!0),d(I,null,$(s.constList,u=>(m(),d("div",{key:"contributors-"+u.title,title:u.title,style:H("background-image: url("+u.url+");"),class:L((u.isMe?"me":"")+(u.isSuperThakns?" super-thanks":"")),onClick:l=>s.openLink(u.link)},null,14,et))),128))])])):b("",!0)],2),t("div",{class:"ss-card jump-card",style:H(s.showUI?"":"background: var(--color-card-1);"),onClick:e[2]||(e[2]=(...u)=>s.dependencies&&s.dependencies(...u))},[t("header",null,[e[5]||(e[5]=t("div",null,null,-1)),R(" "+c(s.$t("许可版权声明")),1)]),v(g,{icon:["fas","angle-right"]})],4),s.showUI?(m(),d("div",{key:0,class:"ss-card bcd-about",onClick:e[3]||(e[3]=u=>s.openLink("https://stapxs.github.io/Border-Card-UI/docs/"))},e[6]||(e[6]=[hs('<div><div><div class="bcd-body" style="width:45%;display:flex;justify-content:flex-end;border-radius:0 5px 0 0;"><div style="background:var(--color-card-2);border-radius:16px;width:25%;margin:5px 0 5px 5px;"></div><div style="background:var(--color-card-2);border-radius:100%;width:7px;margin:5px 8px 5px 5px;"></div></div></div><div><div class="bcd-body" style="width:20%;margin-right:25%;"></div><div class="bcd-body" style="width:55%;display:flex;justify-content:flex-end;"><div style="background:var(--color-card-2);width:calc(25% + 26px);margin-right:5px;border-radius:5px 5px 0 0;display:flex;justify-content:flex-end;"><div style="background:var(--color-main);border-radius:100%;width:7px;margin:10px 5px 0 5px;"></div><div style="background:var(--color-card-1);border-radius:16px;width:calc(100% - 25px);margin:10px 7px 0 0;"></div></div></div></div><div><div class="bcd-body" style="width:10%;margin-right:20%;"></div><div class="bcd-body" style="width:40%;display:flex;justify-content:flex-end;"><div style="background:var(--color-card-2);width:calc(35% + 25px);margin-right:5px;display:flex;justify-content:flex-end;"><div style="background:var(--color-card-1);border-radius:16px;width:calc(100% - 14px);height:calc(100% - 10px);margin-top:2.5px;margin-right:7px;"></div></div></div></div><div><div class="bcd-body" style="width:15%;margin-right:40%;"></div><div class="bcd-body" style="width:35%;display:flex;justify-content:flex-end;"><div style="background:var(--color-card-2);width:calc(40% + 25px);margin-right:5px;border-radius:0 0 5px 5px;"></div></div></div><div><div class="bcd-body" style="width:43%;"></div></div><div><div class="bcd-body" style="width:13%;margin-right:20%;"></div><div class="bcd-body" style="width:49%;"></div></div><div><div class="bcd-body" style="width:57%;"></div></div><div><div class="bcd-body" style="width:17%;margin-right:26%;"></div><div class="bcd-body" style="width:52%;"></div></div><div><div class="bcd-body" style="width:8%;margin-right:8%;"></div><div class="bcd-body" style="width:60%;"><div style="background:var(--color-card-2);width:calc(100% - 7px);height:calc(100% - 7px);margin-top:7px;border-radius:0 7px 0 0;"></div></div></div><div><div class="bcd-body" style="width:40%;border-radius:0 0 7px 0;"><div style="background:var(--color-card-2);width:calc(100% - 7px);height:calc(100% - 7px);margin-right:7px;border-radius:0 0 7px 0;"></div></div></div></div><span>Border Card UI For Web</span><br><a>version rolling</a>',4)]))):b("",!0)])}const Fe=B(Zn,[["render",nt]]),tt=`msgid ""
msgstr ""
"POT-Creation-Date: \\n"
"MIME-Version: 1.0\\n"
"Content-Type: text/plain; charset=utf-8\\n"
"Content-Transfer-Encoding: 8bit\\n"
"Language: en_US\\n"
"PO-Revision-Date: 2023-05-24\\n"
"Language-Team: Doodle Huang (doodlehuang)\\n"

#: src/components/AboutPan.vue:22
#: src/components/WelPan.vue:13
#: src/function/utils/appUtil.ts:389
#: src/function/utils/appUtil.ts:391
#: src/function/utils/appUtil.ts:392
#: src/function/utils/appUtil.ts:394
#: src/function/utils/appUtil.ts:397
#: src/function/utils/appUtil.ts:459
#: src/pages/options/OptFunction.vue:139
msgid "Stapxs QQ Lite"
msgstr "Stapxs QQ Lite"

#: src/components/WelPan.vue:31
#: src/pages/options/OptView.vue:16
# 这是当前语言的作者，请自行修改
msgid "Stapx Steve"
msgstr "Doodle Huang"

#: src/pages/options/OptView.vue:17
# 这是当前语言的介绍，请自行发挥
msgid "你好世界！这是 Stapxs QQ Lite 的默认简体中文。"
msgstr "Hello world! This is the official English translation of Stapxs QQ Lite!"

#: src/pages/options/OptView.vue:15
# 这是当前语言的名字，请自行修改
msgid "简体中文"
msgstr "English (United States)"

#: src/pages/Friends.vue:23
#: src/pages/Friends.vue:32
#: src/pages/Chat.vue:388
#: src/pages/Info.vue:85
msgid "搜索 ……"
msgstr "Search ..."

#: src/pages/Info.vue:64
msgid "地区"
msgstr "Region"

#: src/pages/Info.vue:53
msgid "生日"
msgstr "DOB. "

#: src/pages/Info.vue:59
msgid "鼠&牛&虎&兔&龙&蛇&马&羊&猴&鸡&狗&猪"
msgstr "Rat&Ox&Tiger&Rabbit&Dragon&Snake&Horse&Goat&Monkey&Rooster&Dog&Pig"

#: src/pages/Info.vue:75
#: src/pages/Info.vue:120
#: src/pages/Options.vue:12
msgid "设置"
msgstr "Settings"

#: src/components/FileBody.vue:22
msgid "天后"
msgstr "d"

#: src/pages/Info.vue:108
#: src/pages/Chat.vue:183
#: src/function/utils/msgUtil.ts:232
msgid "文件"
msgstr "Files"

#: src/components/FileBody.vue:24
msgid "共 {num} 个文件"
msgstr "{num} file in total | {num} files in total"

#: src/pages/Info.vue:12
msgid "群资料"
msgstr "Group Profile"

#: src/pages/Info.vue:26
msgid "介绍"
msgstr "Introduction"

#: src/pages/Info.vue:45
#: src/pages/Info.vue:48
msgid "签名"
msgstr "Bio"

#: src/pages/Info.vue:82
msgid "成员"
msgstr "Members"

#: src/pages/Info.vue:29
msgid "群主很懒，还没有群介绍哦～"
msgstr "No introduction available"

#: src/pages/Info.vue:50
msgid "其他信息"
msgstr "Other Info"

#: src/pages/Info.vue:13
msgid "好友"
msgstr "Friend"

#: src/components/FacePan.vue:27
# 这儿的空间比较小，请尽量使用更短的句子（或者是词）
msgid "一无所有"
msgstr "No Stickers Available"

#: src/pages/Chat.vue:187
#: src/function/utils/msgUtil.ts:226
msgid "表情"
msgstr "Emotes"

#: src/components/MsgBody.vue:35
#: src/pages/Chat.vue:179
#: src/function/utils/msgUtil.ts:229
msgid "图片"
msgstr "Image"

#: src/pages/Chat.vue:285
msgid "{time} 加入群聊"
msgstr "Joined on {time}"

#: src/pages/Chat.vue:26
#: src/pages/chat-view/Chat弹幕.vue:152
msgid "上次消息 - {time}"
msgstr "Last Seen: {time}"

#: src/components/NoticeBody.vue:18
#: src/pages/Info.vue:36
#: src/pages/Chat.vue:280
msgid "成员类型_admin"
msgstr "Admin"

#: src/pages/Chat.vue:280
msgid "成员类型_owner"
msgstr "Owner"

#: src/pages/Chat.vue:247
msgid "合并消息"
msgstr "Combined Chat History"

#: src/pages/Chat.vue:324
#: src/pages/options/OptDev.vue:347
#: src/pages/options/OptDev.vue:370
msgid "复制"
msgstr "Copy"

#: src/pages/Chat.vue:328
msgid "复制选中文本"
msgstr "Copy Selected Texts"

#: src/pages/Chat.vue:316
msgid "转发"
msgstr "Forward"

#: src/pages/Chat.vue:320
msgid "多选"
msgstr "Select"

#: src/pages/Chat.vue:312
msgid "回复"
msgstr "Reply"

#: src/pages/Chat.vue:340
msgid "撤回"
msgstr "Revoke"

#: src/pages/Chat.vue:48
msgid "没有更多消息了"
msgstr "No more messages available"

#: src/pages/Chat.vue:30
#: src/pages/chat-view/Chat弹幕.vue:157
msgid "暂无消息"
msgstr "No messages found"

#: src/pages/Chat.vue:128
#: src/pages/Chat.vue:362
msgid "发送"
msgstr "Send"

#: src/pages/Chat.vue:361
msgid "发送图片"
msgstr "Send Image"

#: src/pages/Friends.vue:84
#: src/pages/Messages.vue:61
msgid "选择联系人开始聊天"
msgstr "Select a contact to start massaging"

#: src/components/MsgBody.vue:86
msgid "不支持的消息"
msgstr "(Unsupported message)"

#: src/components/MsgBody.vue:35
#: src/components/MsgBody.vue:305
msgid "预览图片"
msgstr "Image Preview"

#: src/components/AboutPan.vue:25
msgid "一个兼容 OneBot 的非官方网页版 QQ 客户端"
msgstr "An unofficial web QQ client compatible with OneBot"

#: src/pages/Friends.vue:17
msgid "联系人"
msgstr "Contacts"

#: src/App.vue:46
msgid "连接地址"
msgstr "Address"

#: src/App.vue:62
msgid "自动连接"
msgstr "Auto Connect"

#: src/App.vue:65
msgid "连接"
msgstr "Connect"

#: src/App.vue:69
msgid "如何连接"
msgstr "How to Connect"

#: src/App.vue:51
msgid "连接密钥"
msgstr "Key"

#: src/App.vue:57
msgid "记住密码"
msgstr "Save Credentials"

#: src/App.vue:42
msgid "连接到 OneBot"
msgstr "Connect to OneBot"

#: src/App.vue:38
msgid "主页"
msgstr "Home"

#: src/pages/options/OptAccount.vue:54
msgid "后端信息"
msgstr "Backend Info"

#: src/pages/options/OptAccount.vue:61
msgid "这是你连接的 QQ Bot 的相关信息"
msgstr "This is the infomation about your connected QQ Bot"

#: src/pages/options/OptAccount.vue:27
msgid "账号设置"
msgstr "Account Settings"

#: src/pages/Options.vue:13
msgid "账号"
msgstr "Account"

#: src/pages/Options.vue:16
msgid "高级"
msgstr "Advanced"

#: src/pages/Options.vue:15
msgid "功能"
msgstr "Options"

#: src/pages/Options.vue:14
msgid "界面"
msgstr "Interface"

#: src/pages/options/OptDev.vue:111
msgid "应用消息测试"
msgstr "App message test field"

#: src/pages/options/OptDev.vue:112
msgid "#$&*#$= ……"
msgstr "#$&*#$= ……"

#: src/pages/options/OptFunction.vue:58
msgid "消息防撤回"
msgstr "Anti-revoking"

#: src/pages/options/OptFunction.vue:59
msgid "说出去的话就像泼出去的水 ……"
msgstr "Don't you cry over spilled milk!"

#: src/pages/options/OptFunction.vue:59
msgid "说了不做这功能就是不做"
msgstr "No, we will never work on this feature!"

#: src/pages/options/OptFunction.vue:71
msgid "禁用图片发送框"
msgstr "Do not group images to be sent"

#: src/pages/options/OptFunction.vue:72
msgid "你也向往自由吗？"
msgstr "Allow images to be inserted into text field"

#: src/pages/options/OptView.vue:116
msgid "消息页面主题"
msgstr ""

#: src/pages/options/OptView.vue:117
msgid "一些好玩的主题！"
msgstr ""

#: src/pages/options/OptDev.vue:28
msgid "兼容选项"
msgstr "Compatibility Options"

#: src/pages/options/OptDev.vue:35
msgid "发送心跳包"
msgstr "Send keepalive packets"

#: src/pages/options/OptDev.vue:36
msgid "没救了，拖出去吧"
msgstr "Sometimes a CPR would help :)"

#: src/pages/options/OptDev.vue:30
msgid "这儿是兼容性相关的高级选项，包括 bot 附加功能、热插拔组件等。"
msgstr "Advanced options for bot compatibility and additional settings"

#: src/pages/options/OptDev.vue:87
msgid "禁用消息渲染"
msgstr "Disable message rendering"

#: src/pages/options/OptDev.vue:88
msgid "点击进行 CAPTCHA 验证"
msgstr ""

#: src/pages/options/OptDev.vue:70
msgid "开发者选项"
msgstr "Developer Options"

#: src/pages/options/OptDev.vue:74
msgid "日志等级"
msgstr "Logging level"

#: src/pages/options/OptDev.vue:81
msgid "全部"
msgstr "All (Verbose)"

#: src/pages/options/OptDev.vue:79
msgid "调试"
msgstr "Debug"

#: src/pages/options/OptDev.vue:78
msgid "错误"
msgstr "Error"

#: src/pages/options/OptDev.vue:80
msgid "基本"
msgstr "Info"

#: src/pages/options/OptDev.vue:75
msgid "ReferenceError: moYu is not defined"
msgstr "ReferenceError: slackOff is not defined"

#: src/pages/options/OptFunction.vue:29
msgid "通知所有新消息"
msgstr "Notifications for all messages"

#: src/pages/options/OptFunction.vue:30
msgid "让暴风雨来得更猛烈些吧！"
msgstr "https://youtu.be/BU79Rfuk72Y"

#: src/pages/options/OptFunction.vue:15
msgid "禁用通知"
msgstr "Disable all notifications"

#: src/pages/options/OptFunction.vue:16
msgid "好嘛 …… 不烦你 ……"
msgstr "Hush!"

#: src/pages/options/OptDev.vue:99
msgid "调试"
msgstr "Debugging"

#: src/pages/options/OptDev.vue:103
msgid "发送原始消息"
msgstr "Send raw message"

#: src/pages/options/OptDev.vue:104
msgid "咻 ——"
msgstr "Humans Need Not Apply!"

#: src/pages/options/OptFunction.vue:41
msgid "聊天选项"
msgstr "Chat Options"

#: src/pages/options/OptFunction.vue:107
msgid "分析信息"
msgstr "Message stats"

#: src/pages/options/OptFunction.vue:132
msgid "后端类型分析"
msgstr "Backend stats"

#: src/pages/options/OptFunction.vue:133
msgid "在连接后上传所使用的 bot 的类型分析"
msgstr "Tells us the type of bots you're using"

#: src/pages/options/OptFunction.vue:123
msgid "我们使用 Umami 对应用的使用情况进行分析，它将不会上传精确到用户的信息；你也可以在这儿控制分析功能的开关和额外分析项。同时我们的统计信息公开展示在此处以便查阅："
msgstr "We utilize Umami to analyze the usage of the app. All the data are solely for usage analyses only and don't include identifiable infomation (unless you explicitly enable it). You can opt in or out of it from here."

#: src/pages/options/OptFunction.vue:126
msgid "访问统计信息" 
msgstr ""

#: src/pages/options/OptFunction.vue:112
msgid "关闭分析"
msgstr "Fully opt-out"

#: src/pages/options/OptFunction.vue:113
msgid "真的不让看吗（小声"
msgstr "Disable all telemetry functions"

#: src/pages/options/OptFunction.vue:11
msgid "通知选项"
msgstr "Notification Options"

#: src/components/AboutPan.vue:29
msgid "访问 GitHub 仓库"
msgstr "View on GitHub"

#: src/pages/options/OptView.vue:51
msgid "自动深色模式"
msgstr "Dark mode on demand"

#: src/pages/options/OptView.vue:51
msgid "Biubiu ——，自动变黑！"
msgstr "Turns dark, when you're in the dark!"

#: src/pages/options/OptView.vue:38
msgid "深色模式"
msgstr "Dark mode"

#: src/pages/options/OptView.vue:39
msgid "是五彩斑斓的黑色！"
msgstr "He's there in the dark, he's there in my heart ~"

#: src/pages/options/OptView.vue:11
msgid "本土化"
msgstr "Localization"

#: src/pages/options/OptView.vue:23
msgid "语言（Language）"
msgstr "Language"

#: src/pages/options/OptView.vue:24
msgid "喵喵喵喵？"
msgstr "Languages for more, all around the world!"

#: src/pages/options/OptView.vue:33
msgid "主题与颜色"
msgstr "Themes & Colors"

#: src/pages/options/OptView.vue:66
msgid "主题色"
msgstr "Theme color"

#: src/pages/options/OptView.vue:67
msgid "换个心情 🎵 ~"
msgstr "Colors you can choose, for your mood 🎵 ~"

#: src/pages/options/OptDev.vue:119
msgid "输出运行时"
msgstr "Enable runtime outputs"

#: src/pages/options/OptDev.vue:120
msgid "全都吐出来！"
msgstr "Enable all outputs from runtime"

#: src/pages/options/OptDev.vue:123
#: src/pages/options/OptDev.vue:133
#: src/pages/options/OptDev.vue:157
#: src/pages/options/OptDev.vue:171
#: src/pages/options/OptDev.vue:181
#: src/pages/options/OptDev.vue:191
msgid "执行"
msgstr "Run"

#: src/components/NoticeBody.vue:12
msgid "撤回了一条消息"
msgstr "revoked a message"

#: src/components/BulletinBody.vue:30
msgid "已读"
msgstr "Read"

#: src/components/BulletinBody.vue:30
msgid "未读"
msgstr "Unread"

#: src/components/BulletinBody.vue:29
msgid "{readNum} 人已读 | {isRead}"
msgstr "{readNum} read | {isRead}"

#: src/components/BulletinBody.vue:12
#: src/pages/Info.vue:98
msgid "公告"
msgstr "Announcements"

#: src/pages/options/OptDev.vue:140
msgid "让我康康 ~"
msgstr "Show test interfaces"

#: src/function/utils/appUtil.ts:110
msgid "加载历史消息失败（构建消息 ID 失败）"
msgstr "Message history failed to load (message ID failed to merge)"

#: src/components/MsgBody.vue:256
msgid "定位图片失败"
msgstr "Failed to locate picture"

#: src/function/connect.ts:85
#: src/function/connect.ts:155
#: src/function/connect.ts:161
msgid "连接失败"
msgstr "Connection failed"

#: src/function/model/msg-body.ts:233
msgid "合并消息层级过多，解析失败。"
msgstr ""

#: src/function/msg.ts:540
msgid "加载群文件失败（{code}）"
msgstr ""

#: src/function/msg.ts:735
#: src/function/msg.ts:763
msgid "获取消息失败，正在重试"
msgstr "Messages failed to load. Retrying ..."

#: src/function/msg.ts:757
#: src/function/msg.ts:772
msgid "获取消息失败"
msgstr "Messages failed to load"

#: src/pages/Chat.vue:613
msgid "无法定位上下文"
msgstr "Unable to locate message"

#: src/pages/Chat.vue:1065
#: src/pages/Chat.vue:1080
#: src/pages/options/OptDev.vue:350
#: src/pages/options/OptDev.vue:373
msgid "复制成功"
msgstr "Copied"

#: src/pages/Chat.vue:1067
#: src/pages/Chat.vue:1082
msgid "复制失败"
msgstr "Failed to copy"

#: src/pages/chat-view/Chat弹幕.vue:285
#: src/pages/chat-view/Chat终端.vue:363
msgid "图片过大"
msgstr "Image to proccess is too large"

#: src/pages/options/OptDev.vue:242
msgid "你不是人（逃"
msgstr "Oh no, you're not a human :D"

#: src/registerServiceWorker.ts:14
msgid "应用已通过 service worker 服务从缓存中加载，更多信息请查看 https://goo.gl/AFskqB。"
msgstr "App is being served from cache by a service worker. For more details, visit https://goo.gl/AFskqB"

#: src/registerServiceWorker.ts:17
msgid "Service worker 服务注册成功。"
msgstr "Service worker has been registered."

#: src/registerServiceWorker.ts:21
msgid "内容已完成缓存便于离线使用。"
msgstr "Content has been cached for offline use."

#: src/registerServiceWorker.ts:24
msgid "正在下载新的内容 ……"
msgstr "New content is downloading."

#: src/registerServiceWorker.ts:27
msgid "新的内容已缓存完成，请刷新以生效。"
msgstr "New content is available; please refresh."

#: src/registerServiceWorker.ts:33
msgid "没有有效的网络连接，应用正在以离线模式运行。"
msgstr "No internet connection found. App is running in offline mode."

#: src/registerServiceWorker.ts:35
msgid "注册 service worker 时发生错误。"
msgstr "Error during service worker registration"

#: src/registerServiceWorker.ts:32
msgid "没有网络"
msgstr "No internet connection found."

#: src/components/MsgBody.vue:295
msgid "加载图片失败"
msgstr "Image failed to load"

#: src/pages/Chat.vue:116
#: src/pages/Chat.vue:193
msgid "精华消息"
msgstr "Messages of Essence"

#: src/pages/Messages.vue:17
#: src/pages/Messages.vue:22
msgid "消息"
msgstr "Messages"

#: src/pages/Chat.vue:130
msgid "{time}，由 {name} 设置"
msgstr "{time}, added by {name}"

#: src/components/UpdatePan.vue:3
msgid "更新记录"
msgstr "Changelog"

#: src/App.vue:408
#: src/function/utils/appUtil.ts:601
#: src/function/utils/appUtil.ts:626
#: src/pages/options/OptFunction.vue:178
msgid "知道了"
msgstr "OK"

#: src/function/utils/appUtil.ts:610
#: src/function/utils/appUtil.ts:623
msgid "查看…"
msgstr "View..."

#: src/pages/Chat.vue:174
msgid "没有找到匹配的群成员"
msgstr "No matching member found"

#: src/components/WelPan.vue:31
#: src/pages/options/OptView.vue:16
msgid "作者："
msgstr "Author: "

#: src/pages/options/OptFunction.vue:86
msgid "小尾巴"
msgstr "Tail"

#: src/pages/options/OptFunction.vue:87
msgid "只会追加在最后一段话后面"
msgstr "A text that will be attached to your messages"

#: src/components/MsgBody.vue:80
msgid "（点击查看合并转发消息）"
msgstr "(Click here to view chat history)"

#: src/components/WelPan.vue:38
#: src/function/utils/appUtil.ts:649
msgid "好耶"
msgstr "Yay"

#: src/function/utils/appUtil.ts:645
msgid "好耶！Stapxs QQ Lite 已经被打开 {times} 次了！"
msgstr "Yay! You have used Stapxs QQ Lite for {times} times!"

#: src/function/utils/appUtil.ts:646
msgid "真的不去点个 star 吗 ……"
msgstr "Consider starring our project?"

#: src/function/utils/appUtil.ts:657
msgid "好喔"
msgstr "Yay!"

#: src/function/utils/appUtil.ts:654
msgid "不要"
msgstr "Nah"

#: src/App.vue:404
#: src/pages/Chat.vue:1119
#: src/pages/options/OptFunction.vue:174
msgid "提醒"
msgstr "Tips"

#: src/App.vue:405
msgid "连接密钥将以明文存储在浏览器 Cookie 中，请确保设备安全以防止密钥泄漏。"
msgstr "Connection token provided will be saved as plain texts in browser cookies, please keep your device secured to prevent potential leaks"

#: src/pages/options/OptAccount.vue:31
msgid "昵称"
msgstr "Nickname"

#: src/pages/options/OptAccount.vue:32
msgid "就只是个名字而已 ……"
msgstr "Not necessarily your legal name"

#: src/pages/options/OptAccount.vue:39
msgid "签名"
msgstr "Bio"

#: src/pages/options/OptAccount.vue:40
msgid "啊吧啊吧（智慧的眼神）"
msgstr "Write something about you here"

#: src/pages/Messages.vue:43
msgid "系统通知"
msgstr "System Messages"

#: src/pages/options/OptDev.vue:129
msgid "输出调试信息"
msgstr "Output debugging info"

#: src/pages/options/OptDev.vue:130
msgid "到底用的什么版本呢 ……"
msgstr "Helps you figure out the version you're on."

#: src/function/option.ts:511
#: src/function/utils/appUtil.ts:721
#: src/pages/Chat.vue:1000
#: src/pages/Chat.vue:1123
#: src/pages/options/OptDev.vue:354
#: src/pages/options/OptDev.vue:377
#: src/pages/options/OptDev.vue:396
#: src/pages/options/OptDev.vue:423
#: src/pages/options/OptInfo.vue:98
msgid "确定"
msgstr "OK"

#: src/pages/options/OptDev.vue:344
msgid "调试信息"
msgstr "Debugging Info"

#: src/function/utils/appUtil.ts:721
msgid "继续"
msgstr "Next"

#: src/pages/options/OptDev.vue:163
msgid "维护与备份"
msgstr "Maintenance & Backups"

#: src/pages/options/OptDev.vue:167
#: src/pages/options/OptDev.vue:367
msgid "导出设置项"
msgstr "Export settings"

#: src/pages/options/OptDev.vue:168
msgid "tar zcvf config.tar.gz /localStorage"
msgstr "tar zcvf config.tar.gz /localStorage"

#: src/pages/options/OptDev.vue:177
#: src/pages/options/OptDev.vue:389
msgid "导入设置项"
msgstr "Import settings"

#: src/pages/options/OptDev.vue:178
msgid "tar zxvf cache.tar.gz /localStorage"
msgstr "tar zxvf cache.tar.gz /cookies/config"

#: src/function/option.ts:523
#: src/pages/Chat.vue:996
#: src/pages/Chat.vue:1137
#: src/pages/options/OptDev.vue:392
#: src/pages/options/OptDev.vue:438
#: src/pages/options/OptInfo.vue:116
msgid "取消"
msgstr "Cancel"

#: src/pages/options/OptDev.vue:407
msgid "导入设置项失败"
msgstr "Unable to import settings"

#: src/pages/options/OptDev.vue:187
#: src/pages/options/OptDev.vue:420
msgid "重置应用"
msgstr "Reset app"

#: src/pages/options/OptDev.vue:188
msgid "sudo rm -rf /localStorage"
msgstr "sudo rm -rf /localStorage"

#: src/components/MsgBody.vue:83
msgid "（查看回复消息）"
msgstr "(Replied message)"

#: src/pages/options/OptDev.vue:419
msgid "确认要重置应用吗，重置应用将会失去所有设置内容（包括设置的置顶群组），但是可能可以解决一些因为浏览器缓存导致的奇怪问题。"
msgstr "Are you sure you want to reset the app? It may fix problems caused by incorrect browser cookies, but all your settings (including pinned contacts)."

#: src/components/WelPan.vue:18
msgid "下面是一点点简单的使用引导 …… 如果不想看可以直接戳跳过（小声），但是也没多长啦"
msgstr "This is a brief setup wizard. It can be skipped if you want, but it won't take too long."

#: src/components/WelPan.vue:23
msgid "选择语言"
msgstr "Select a Language"

#: src/components/WelPan.vue:39
msgid "该说的都说了 —— 那么就可以愉快的用啦（大声），如果遇到什么奇怪的问题，尽管来 GitHub 仓库问哦。"
msgstr "Now it's time for you to enjoy the app! If you run into any problems, don't hesitate to file an issue at our GitHub repository!"

#: src/pages/Chat.vue:344
msgid "提及"
msgstr "Mention"

#: src/pages/options/OptView.vue:158
msgid "页面"
msgstr "Page"

#: src/pages/options/OptView.vue:162
msgid "缩放比例"
msgstr "Page scaling factor"

#: src/pages/options/OptView.vue:163
msgid "调整页面在移动端的缩放比例"
msgstr "Adjust the scaling of the page for better experience (mostly used on mobile devices)"

#: src/pages/Messages.vue:188
msgid "已标记为已读"
msgstr "Marked as read"

#: src/pages/Chat.vue:399
msgid "群组"
msgstr "Group"

#: src/function/msg.ts:466
msgid "消息已转发"
msgstr "Message forwarded"

#: src/pages/Chat.vue:385
#: src/pages/Chat.vue:991
msgid "转发消息"
msgstr "Forward to"

#: src/pages/options/OptFunction.vue:95
msgid "使用 shift enter 换行"
msgstr "Use Shift + Enter to create new lines"

#: src/pages/options/OptFunction.vue:96
msgid "I have a shift I have an enter ..."
msgstr "I have a shift I have an enter ..."

#: src/pages/options/OptFunction.vue:175
msgid "开启 shift enter 换行可能会在一些拥有特殊选词模式的输入法上出现问题，如 微软注音2003、新注音2003 和 绝大部分很早期的拼音输入法；如果在使用的时候遇到问题可以尝试关闭此功能。（或者换个更现代的输入法）"
msgstr "Enable multi-line editing for messages (Problems may occur if you use an IME)."

#: src/components/BulletinBody.vue:20
msgid "点击展开"
msgstr "Click to view"

#: src/pages/options/OptDev.vue:48
msgid "消息类型"
msgstr "Message type"

#: src/pages/options/OptDev.vue:49
msgid "[CQ:faceid=1]你好啊👋，这个选项将会强制覆盖自动检测"
msgstr "[CQ:face,id=1] Hi 👋, your selection here will replace the default which is \\"Auto\\"."

#: src/pages/options/OptDev.vue:455
msgid "自动检测"
msgstr "Auto"

#: src/pages/options/OptInfo.vue:26
msgid "我的本群昵称"
msgstr "Nickname in group"

#: src/pages/options/OptInfo.vue:27
msgid "￡爺↘僞ηι慹著彡"
msgstr ""

#: src/pages/options/OptInfo.vue:17
msgid "群聊名称"
msgstr "Group name"

#: src/pages/options/OptInfo.vue:18
msgid "“你们真是害人不浅呐你们这个群”"
msgstr "Also try \\"Discord Jail\\""

#: src/pages/chat-view/SystemNotice.vue:30
#: src/pages/chat-view/SystemNotice.vue:45
msgid "同意"
msgstr "Agree"

#: src/pages/chat-view/SystemNotice.vue:29
#: src/pages/chat-view/SystemNotice.vue:44
msgid "拒绝"
msgstr "Decline"

#: src/function/utils/appUtil.ts:613
msgid "刷新页面"
msgstr ""

#: src/pages/chat-view/SystemNotice.vue:14
msgid "系统消息"
msgstr "System Messages"

#: src/pages/Chat.vue:348
msgid "移出群聊"
msgstr "Remove from group"

#: src/pages/options/OptView.vue:85
msgid "自动跟随 GTK 主题"
msgstr "Follow GTK color settings"

#: src/pages/options/OptView.vue:86
msgid "（实验性）自动从 GTK 配置获取主题配色"
msgstr "(Experimental) Automatically apply theme color from GTK configurations."

#: src/pages/options/OptView.vue:101
msgid "自动跟随主题色"
msgstr "Followaccent color"

#: src/pages/options/OptView.vue:102
msgid "自动获取的主题色设置并应用"
msgstr "Automatically apply theme color fromsettings."

#: src/pages/options/OptView.vue:127
msgid "背景图片"
msgstr "Background image"

#: src/pages/options/OptView.vue:128
msgid "嘿嘿嘿（痴呆"
msgstr "Also try your wallpaper!"

#: src/pages/options/OptView.vue:136
msgid "背景模糊"
msgstr "Background blur"

#: src/pages/options/OptView.vue:137
msgid "什么都看不见了（恼"
msgstr "Raise its percentage if you're using a furry image (uwu) or something too colorful."

#: src/pages/Chat.vue:1402
msgid "压缩图片失败"
msgstr "Failed to compress image"

#: src/pages/Chat.vue:1397
msgid "正在压缩图片 ……"
msgstr "Compressing image ..."

#: src/pages/Chat.vue:1120
msgid "真的要将 {user} 移出群聊吗"
msgstr "Are you sure you want to remove {user} from the group?"

#: src/function/option.ts:508
#: src/pages/options/OptDev.vue:153
msgid "重启应用"
msgstr "Restart app"

#: src/pages/options/OptDev.vue:154
msgid "99% 的特性都能通过重启解决！"
msgstr "Should solve most problems :D"

#: src/function/utils/appUtil.ts:84
msgid "关闭"
msgstr "Close"

#: src/function/utils/appUtil.ts:73
msgid "打开…"
msgstr "Open..."

#: src/pages/Chat.vue:1353
msgid "发送文件失败"
msgstr "Failed to send files"

#: src/pages/Chat.vue:1357
msgid "发送文件错误"
msgstr "Error when sending files"

#: src/pages/Chat.vue:1335
msgid "正在发送文件 {percent}%"
msgstr "Sending ..."

#: src/components/MsgBody.vue:69
msgid "文件预览"
msgstr "File preview"

#: src/function/msg.ts:1403
#: src/pages/Info.vue:194
msgid "临时会话"
msgstr "Temporary chat session"

#: src/function/msg.ts:125
msgid "添加好友 {name} 成功！"
msgstr "Successfully added {name} as friend!"

#: src/pages/Chat.vue:23
msgid "来自群聊：{group}"
msgstr "From group: {group}"

#: src/pages/Messages.vue:30
msgid "置顶"
msgstr "Pin"

#: src/pages/Messages.vue:31
msgid "取消置顶"
msgstr "Unpin"

#: src/pages/Messages.vue:32
msgid "删除"
msgstr "Delete"

#: src/pages/Messages.vue:33
msgid "标记已读"
msgstr "Mark as read"

#: src/function/msg.ts:439
msgid "获取合并转发消息失败"
msgstr "Error loading combined messages"

#: src/components/msg-component/CardMessage.vue:81
#: src/function/model/msg-body.ts:120
msgid "解析消息错误"
msgstr ""

#: src/function/utils/appUtil.ts:389
msgid "应用显示完成，应用初始化完成！欢迎使用 {name}！"
msgstr ""

#: src/function/model/msg-body.ts:433
msgid "刷新用户列表成功"
msgstr ""

#: src/function/connect.ts:177
msgid "正在断开链接……"
msgstr ""

#: src/pages/Chat.vue:332
msgid "下载图片"
msgstr ""

#: src/components/AboutPan.vue:43
#: src/components/AboutPan.vue:159
msgid "许可版权声明"
msgstr ""

#: src/components/DepPan.vue:21
msgid "你可以在项目仓库的依赖关系图中找到大部分依赖，而这里列出了一些不由包管理管理的依赖。"
msgstr ""

#: src/pages/options/OptView.vue:173
msgid "圆角适配"
msgstr ""

#: src/pages/options/OptView.vue:174
msgid "适配全面屏设备防止四角出界"
msgstr ""

#: src/pages/Chat.vue:42
#: src/pages/Chat.vue:252
msgid "加载中"
msgstr ""

#: src/function/utils/msgUtil.ts:345
msgid "发送中"
msgstr ""

#: src/components/DepPan.vue:12
msgid "驱动自"
msgstr ""

#: src/components/UpdatePan.vue:3
msgid "新版本"
msgstr ""

#: src/function/utils/appUtil.ts:604
msgid "下载更新…"
msgstr ""

#: src/function/utils/appUtil.ts:69
msgid "请不要在内嵌页面中输入敏感信息，内嵌页面并不安全。"
msgstr ""

#: src/pages/options/OptDev.vue:255
msgid "正在收集调试消息……"
msgstr ""

#: src/pages/options/OptAccount.vue:49
msgid "还没有连接到 OneBot 耶"
msgstr ""

#: src/pages/options/OptAccount.vue:50
msgid "去连接"
msgstr ""

#: src/pages/options/OptView.vue:198
msgid "不要点这个"
msgstr ""

#: src/pages/options/OptView.vue:199
msgid "啊吧啊吧（智慧）"
msgstr ""

#: src/pages/options/OptView.vue:120
#: src/pages/options/OptView.vue:151
msgid "默认"
msgstr ""

#: src/pages/Chat.vue:308
msgid "+ 1"
msgstr ""

#: src/pages/options/OptFunction.vue:72
msgid "关闭回应功能"
msgstr ""

#: src/pages/options/OptFunction.vue:73
msgid "如果你不想用它或者 bot 不支持，可以关闭这个功能"
msgstr ""

#: src/components/MsgBody.vue:426
msgid "（获取回复消息失败）"
msgstr ""

#: src/pages/options/OptDev.vue:11
msgid "进阶功能"
msgstr ""

#: src/pages/options/OptDev.vue:28
msgid "已启用"
msgstr ""

#: src/pages/options/OptDev.vue:29
msgid "已禁用"
msgstr ""

#: src/pages/options/OptDev.vue:59
msgid "解析配置"
msgstr ""

#: src/pages/options/OptDev.vue:60
msgid "不同框架之间的化学反应我们将其称之为达利园效应"
msgstr ""

#: src/pages/options/OptDev.vue:63
msgid "未连接"
msgstr ""

#: src/pages/options/OptDev.vue:453
msgid "CQ 码"
msgstr ""

#: src/pages/options/OptDev.vue:454
msgid "Array 数组"
msgstr ""

#: src/pages/Messages.vue:34
msgid "开启通知"
msgstr ""

#: src/pages/Messages.vue:35
msgid "关闭通知"
msgstr ""

#: src/pages/Chat.vue:218
msgid "已被禁言至：{time}"
msgstr ""

#: src/components/NoticeBody.vue:20
msgid "禁言了你"
msgstr ""

#: src/components/NoticeBody.vue:24
msgid "管理员禁言了"
msgstr ""

#: src/components/NoticeBody.vue:29
msgid "管理员解除了 {name} 的禁言"
msgstr ""

#: src/components/NoticeBody.vue:80
msgid "天"
msgstr ""

#: src/components/NoticeBody.vue:83
msgid "小时"
msgstr ""

#: src/components/NoticeBody.vue:86
msgid "分钟"
msgstr ""

#: src/components/NoticeBody.vue:89
msgid "秒"
msgstr ""

#: src/components/NoticeBody.vue:29
#: src/function/msg.ts:198
msgid "你"
msgstr ""

#: src/pages/options/OptInfo.vue:34
msgid "退出群聊"
msgstr ""

#: src/pages/options/OptInfo.vue:95
msgid "确定要退出群聊吗？"
msgstr ""

#: src/pages/chat-view/SystemNotice.vue:25
#: src/pages/chat-view/SystemNotice.vue:40
msgid "留言"
msgstr ""

#: src/pages/chat-view/SystemNotice.vue:22
msgid "请求加为好友"
msgstr ""

#: src/pages/chat-view/SystemNotice.vue:37
msgid "邀请你加入群聊"
msgstr ""

#: src/components/MsgBody.vue:195
msgid "全体成员"
msgstr ""

#: src/pages/options/OptView.vue:184
msgid "置顶窗口"
msgstr ""

#: src/pages/options/OptView.vue:185
msgid "你也不想想让 ta 知道你不在看消息吧 ~"
msgstr ""

#: src/pages/options/OptView.vue:152
msgid "完整模糊"
msgstr ""

#: src/pages/options/OptView.vue:153
msgid "完整透明"
msgstr ""

#: src/pages/options/OptView.vue:147
msgid "窗口透明模式"
msgstr ""

#: src/pages/options/OptView.vue:148
msgid "怎么看光还要挑三拣四的"
msgstr ""

#: src/function/option.ts:498
msgid "此操作将在重启应用后生效，现在就要重启吗？"
msgstr ""

#: src/function/option.ts:502
msgid "此操作仅供娱乐，将会在下次关闭时恢复。"
msgstr ""

#: src/pages/options/OptAccount.vue:66
# 连接正常（{timeout} > {step} s）
msgid "连接_normal"
msgstr ""

#: src/pages/options/OptAccount.vue:66
# 连接延迟（{timeout} > {step} s）
msgid "连接_slow"
msgstr ""

#: src/pages/options/OptAccount.vue:66
# 正在收集连接信息……
msgid "连接_loading"
msgstr ""

#: src/pages/Chat.vue:196
msgid "搜索消息"
msgstr ""

#: src/pages/Chat.vue:154
msgid "搜索已加载的消息"
msgstr ""

#: src/function/utils/appUtil.ts:392
#: src/function/utils/appUtil.ts:459
#: src/pages/Options.vue:17
msgid "关于"
msgstr ""

#: src/function/utils/appUtil.ts:393
msgid "检查更新…"
msgstr ""

#: src/function/utils/appUtil.ts:394
msgid "隐藏"
msgstr ""

#: src/function/utils/appUtil.ts:395
msgid "隐藏其他"
msgstr ""

#: src/function/utils/appUtil.ts:396
msgid "全部显示"
msgstr ""

#: src/function/utils/appUtil.ts:397
msgid "退出"
msgstr ""

#: src/function/utils/appUtil.ts:407
msgid "账户"
msgstr ""

#: src/function/connect.ts:135
#: src/function/utils/appUtil.ts:408
msgid "连接"
msgstr ""

#: src/function/msg.ts:1017
#: src/function/utils/appUtil.ts:410
msgid "用户列表（{count}）"
msgstr ""

#: src/function/utils/appUtil.ts:411
msgid "刷新列表…"
msgstr ""

#: src/function/utils/appUtil.ts:409
msgid "登出"
msgstr ""

#: src/function/utils/appUtil.ts:399
msgid "编辑"
msgstr ""

#: src/function/utils/appUtil.ts:400
msgid "撤销"
msgstr ""

#: src/function/utils/appUtil.ts:401
msgid "重做"
msgstr ""

#: src/function/utils/appUtil.ts:402
msgid "剪切"
msgstr ""

#: src/function/utils/appUtil.ts:404
msgid "粘贴"
msgstr ""

#: src/function/utils/appUtil.ts:405
msgid "全选"
msgstr ""

#: src/function/utils/appUtil.ts:413
msgid "帮助"
msgstr ""

#: src/function/utils/appUtil.ts:414
msgid "帮助文档"
msgstr ""

#: src/function/utils/appUtil.ts:415
msgid "在 Github 上反馈问题"
msgstr ""

#: src/function/utils/appUtil.ts:416
msgid "许可协议"
msgstr ""

#: src/pages/Chat.vue:191
msgid "戳一戳"
msgstr ""

#: src/function/utils/msgUtil.ts:230
msgid "语音"
msgstr ""

#: src/function/utils/msgUtil.ts:231
msgid "视频"
msgstr ""

#: src/pages/Chat.vue:159
msgid "合并转发"
msgstr ""

#: src/pages/Chat.vue:163
msgid "截图"
msgstr ""

msgid "“{body}” 以及 {num} 条消息"
msgstr ""`,it=`msgid ""
msgstr ""
"POT-Creation-Date: \\n"
"MIME-Version: 1.0\\n"
"Content-Type: text/plain; charset=utf-8\\n"
"Content-Transfer-Encoding: 8bit\\n"
"Language: zh_CN\\n"
"PO-Revision-Date: 2024-09-20\\n"
"Language-Team: Stapx Steve (stapxs)\\n"

#: src/pages/options/OptView.vue:17
# 这是当前语言的介绍，请自行发挥
msgid "你好世界！这是 Stapxs QQ Lite 的默认简体中文。"
msgstr "喵喵喵！这是喵星文化与宣传部提供的 Stapxs QQ Lite 默认喵体中文。"

#: src/pages/options/OptView.vue:15
# 这是当前语言的名字，请自行修改
msgid "简体中文"
msgstr "简体中文（喵体）"

#: src/pages/Friends.vue:23
#: src/pages/Friends.vue:32
#: src/pages/Chat.vue:388
#: src/pages/Info.vue:85
msgid "搜索 ……"
msgstr "翻找 ……"

#: src/pages/Info.vue:64
msgid "地区"
msgstr "喵区"

#: src/pages/Info.vue:59
msgid "鼠&牛&虎&兔&龙&蛇&马&羊&猴&鸡&狗&猪"
msgstr "鼠&牛&虎&猫&龙&蛇&马&羊&猴&鸡&狗&猪"

#: src/pages/Info.vue:12
msgid "群资料"
msgstr "喵群资料"

#: src/pages/Info.vue:26
msgid "介绍"
msgstr "喵喵介绍"

#: src/pages/Info.vue:45
#: src/pages/Info.vue:48
msgid "签名"
msgstr "喵爪"

#: src/pages/Info.vue:82
msgid "成员"
msgstr "喵群成员"

#: src/pages/Info.vue:29
msgid "群主很懒，还没有群介绍哦～"
msgstr "主子很懒，还没有喵群介绍哦～"

#: src/pages/Info.vue:13
msgid "好友"
msgstr "喵朋友"

#: src/components/FacePan.vue:27
# 这儿的空间比较小，请尽量使用更短的句子（或者是词）
msgid "一无所有"
msgstr "没有鱼干"

#: src/pages/Chat.vue:285
msgid "{time} 加入群聊"
msgstr "{time} 加入喵群"

#: src/pages/Chat.vue:26
#: src/pages/chat-view/Chat弹幕.vue:152
msgid "上次消息 - {time}"
msgstr "上次喵喵 - {time}"

#: src/components/NoticeBody.vue:18
#: src/pages/Info.vue:36
#: src/pages/Chat.vue:280
msgid "成员类型_admin"
msgstr "发小鱼干的"

#: src/pages/Chat.vue:280
msgid "成员类型_owner"
msgstr "喵主子"

#: src/pages/Chat.vue:247
msgid "合并消息"
msgstr "合并喵喵"

#: src/pages/Chat.vue:328
msgid "复制选中文本"
msgstr "复制选中喵喵"

#: src/pages/Chat.vue:48
msgid "没有更多消息了"
msgstr "没有更多喵喵了"

#: src/pages/Chat.vue:30
#: src/pages/chat-view/Chat弹幕.vue:157
msgid "暂无消息"
msgstr "暂无喵喵"

#: src/pages/Chat.vue:128
#: src/pages/Chat.vue:362
msgid "发送"
msgstr "喵喵"

#: src/pages/Friends.vue:84
#: src/pages/Messages.vue:61
msgid "选择联系人开始聊天"
msgstr "选择喵开始聊天"

#: src/components/MsgBody.vue:86
msgid "不支持的消息"
msgstr "不支持的喵喵"

#: src/pages/Friends.vue:17
msgid "联系人"
msgstr "喵朋友"

#: src/App.vue:46
msgid "连接地址"
msgstr "母星地址"

#: src/pages/options/OptAccount.vue:54
msgid "后端信息"
msgstr "喵堡信息"

#: src/pages/options/OptAccount.vue:27
msgid "账号设置"
msgstr "喵号设置"

#: src/pages/Options.vue:13
msgid "账号"
msgstr "喵号"

#: src/pages/options/OptFunction.vue:58
msgid "消息防撤回"
msgstr "喵喵防撤回"

#: src/pages/options/OptFunction.vue:59
msgid "说出去的话就像泼出去的水 ……"
msgstr "送出去的鱼干怎么能要回来 ……"

#: src/pages/options/OptFunction.vue:59
msgid "说了不做这功能就是不做"
msgstr "说了不给就是不给"

#: src/pages/options/OptFunction.vue:72
msgid "你也向往自由吗？"
msgstr "猫猫才不要被关在笼子里"

#: src/pages/options/OptView.vue:117
msgid "一些好玩的主题！"
msgstr "要用这个联系喵星吗"

#: src/pages/options/OptDev.vue:30
msgid "这儿是兼容性相关的高级选项，包括 bot 附加功能、热插拔组件等。"
msgstr ""

#: src/pages/options/OptDev.vue:88
msgid "点击进行 CAPTCHA 验证"
msgstr "喵喵喵喵喵！"

#: src/pages/options/OptDev.vue:70
msgid "开发者选项"
msgstr "工程喵选项"

#: src/pages/options/OptFunction.vue:29
msgid "通知所有新消息"
msgstr "通知左右新喵喵"

#: src/pages/options/OptFunction.vue:30
msgid "让暴风雨来得更猛烈些吧！"
msgstr "让喵喵风暴来得更猛烈些吧！"

#: src/pages/options/OptFunction.vue:16
msgid "好嘛 …… 不烦你 ……"
msgstr "不可以喵喵！"

#: src/pages/options/OptDev.vue:104
msgid "咻 ——"
msgstr "喵 ——"

#: src/pages/options/OptFunction.vue:113
msgid "真的不让看吗（小声"
msgstr "猫猫那么可爱，真的不让看吗（小声"

#: src/components/AboutPan.vue:29
msgid "访问 GitHub 仓库"
msgstr "访问 CatHub 仓库"

#: src/pages/options/OptView.vue:51
msgid "Biubiu ——，自动变黑！"
msgstr "看不清了！喵！"

#: src/pages/options/OptView.vue:33
msgid "主题与颜色"
msgstr "装饰和毛色"

#: src/pages/options/OptView.vue:66
msgid "主题色"
msgstr "毛色"

#: src/pages/options/OptView.vue:67
msgid "换个心情 🎵 ~"
msgstr "混搭一些橘色怎么样？"

#: src/pages/options/OptDev.vue:120
msgid "全都吐出来！"
msgstr "把小鱼干都交出来！"

#: src/components/NoticeBody.vue:12
msgid "撤回了一条消息"
msgstr "抢回去了一条小鱼干"

#: src/components/BulletinBody.vue:12
#: src/pages/Info.vue:98
msgid "公告"
msgstr "通知"

#: src/function/connect.ts:85
#: src/function/connect.ts:155
#: src/function/connect.ts:161
msgid "连接失败"
msgstr "和喵星通信失败了"

#: src/function/model/msg-body.ts:233
msgid "合并消息层级过多，解析失败。"
msgstr "太多喵喵了！解析失败。"

#: src/pages/Chat.vue:116
#: src/pages/Chat.vue:193
msgid "精华消息"
msgstr "精华喵喵"

#: src/pages/Messages.vue:17
#: src/pages/Messages.vue:22
msgid "消息"
msgstr "喵喵"

#: src/App.vue:408
#: src/function/utils/appUtil.ts:601
#: src/function/utils/appUtil.ts:626
#: src/pages/options/OptFunction.vue:178
msgid "知道了"
msgstr "喵喵！"

#: src/pages/Chat.vue:174
msgid "没有找到匹配的群成员"
msgstr "没有找到匹配的猫猫"

#: src/components/WelPan.vue:31
#: src/pages/options/OptView.vue:16
msgid "作者："
msgstr "作者猫："

#: src/components/MsgBody.vue:80
msgid "（点击查看合并转发消息）"
msgstr "（点击查看合并转发喵喵）"

#: src/pages/options/OptAccount.vue:32
msgid "就只是个名字而已 ……"
msgstr "这是哪只猫猫 ……"

#: src/pages/options/OptAccount.vue:40
msgid "啊吧啊吧（智慧的眼神）"
msgstr "奇怪的喵喵"

#: src/pages/options/OptDev.vue:130
msgid "到底用的什么版本呢 ……"
msgstr "快给工程猫猫看看版本！"

#: src/pages/options/OptDev.vue:168
msgid "tar zcvf config.tar.gz /localStorage"
msgstr "正在上传到喵星数据中心……"

#: src/pages/options/OptDev.vue:178
msgid "tar zxvf cache.tar.gz /localStorage"
msgstr "正在从喵星数据中心下载存档……"

#: src/pages/options/OptDev.vue:407
msgid "导入设置项失败"
msgstr "啊哦，装载数据失败"

#: src/components/MsgBody.vue:83
msgid "（查看回复消息）"
msgstr "（查看回复喵喵）"

#: src/pages/Chat.vue:399
msgid "群组"
msgstr "喵圈"

#: src/function/msg.ts:466
msgid "消息已转发"
msgstr "喵喵已转发"

#: src/pages/Chat.vue:385
#: src/pages/Chat.vue:991
msgid "转发消息"
msgstr "转发喵喵"

#: src/pages/options/OptFunction.vue:96
msgid "I have a shift I have an enter ..."
msgstr "大力出奇迹喵！"

#: src/pages/options/OptDev.vue:48
msgid "消息类型"
msgstr "喵喵类型"

#: src/pages/options/OptInfo.vue:26
msgid "我的本群昵称"
msgstr "我的喵圈昵称"

#: src/pages/options/OptInfo.vue:27
msgid "￡爺↘僞ηι慹著彡"
msgstr "叫喵喵喵呢还是叫喵喵喵喵呢"

#: src/pages/options/OptInfo.vue:17
msgid "群聊名称"
msgstr "喵圈名称"

#: src/pages/options/OptInfo.vue:18
msgid "“你们真是害人不浅呐你们这个群”"
msgstr "很好的喵圈，使小鱼干消失。"

#: src/pages/Chat.vue:348
msgid "移出群聊"
msgstr "移出喵圈"

#: src/pages/Chat.vue:1120
msgid "真的要将 {user} 移出群聊吗"
msgstr "真的要将 {user} 移出喵圈吗"

#: src/function/msg.ts:1403
#: src/pages/Info.vue:194
msgid "临时会话"
msgstr "临时喵喵"

#: src/function/msg.ts:125
msgid "添加好友 {name} 成功！"
msgstr "添加喵友 {name} 成功！"

#: src/pages/Chat.vue:23
msgid "来自群聊：{group}"
msgstr "来自 {group} 喵圈"

#: src/function/msg.ts:439
msgid "获取合并转发消息失败"
msgstr "获取合并转发喵喵失败"

#: src/components/msg-component/CardMessage.vue:81
#: src/function/model/msg-body.ts:120
msgid "解析消息错误"
msgstr "解析喵喵错误"

#: src/function/utils/appUtil.ts:389
msgid "应用显示完成，应用初始化完成！欢迎使用 {name}！"
msgstr "应用显示完成，应用初始化完成！欢迎连接到喵星！"

#: src/function/model/msg-body.ts:433
msgid "刷新用户列表成功"
msgstr "刷新猫猫列表成功"

#: src/function/connect.ts:177
msgid "正在断开链接……"
msgstr "正在断开和猫星链接……"

#: src/pages/options/OptAccount.vue:49
msgid "还没有连接到 OneBot 耶"
msgstr "还没有连接到猫星耶"

#: src/pages/options/OptView.vue:199
msgid "啊吧啊吧（智慧）"
msgstr "好奇心害死猫！"

#: src/components/MsgBody.vue:426
msgid "（获取回复消息失败）"
msgstr "（获取回复喵喵失败）"

#: src/components/NoticeBody.vue:24
msgid "管理员禁言了"
msgstr "发小鱼干的禁言了"

#: src/components/NoticeBody.vue:29
msgid "管理员解除了 {name} 的禁言"
msgstr "发小鱼干的解除了 {name} 的禁言"

#: src/pages/options/OptInfo.vue:34
msgid "退出群聊"
msgstr "退出喵圈"

#: src/pages/options/OptInfo.vue:95
msgid "确定要退出群聊吗？"
msgstr "确定要退出喵圈吗？"

#: src/pages/chat-view/SystemNotice.vue:22
msgid "请求加为好友"
msgstr "请求加为喵友"

#: src/pages/chat-view/SystemNotice.vue:37
msgid "邀请你加入群聊"
msgstr "邀请你加入喵圈"

#: src/components/MsgBody.vue:195
msgid "全体成员"
msgstr "全体猫猫"

#: src/pages/Chat.vue:196
msgid "搜索消息"
msgstr "搜索喵喵"

#: src/pages/Chat.vue:154
msgid "搜索已加载的消息"
msgstr "搜索已加载的喵喵"

#: src/function/utils/appUtil.ts:407
msgid "账户"
msgstr "喵号"

#: src/function/msg.ts:1017
#: src/function/utils/appUtil.ts:410
msgid "用户列表（{count}）"
msgstr "猫猫列表（{count}）"

#: src/function/utils/appUtil.ts:415
msgid "在 Github 上反馈问题"
msgstr "在 Cathub 上反馈问题"

#: src/pages/options/OptDev.vue:60
msgid "不同框架之间的化学反应我们将其称之为达利园效应"
msgstr "不同的喵星之间可是会打起来的！"`,ot=`msgid ""
msgstr ""
"POT-Creation-Date: \\n"
"MIME-Version: 1.0\\n"
"Content-Type: text/plain; charset=utf-8\\n"
"Content-Transfer-Encoding: 8bit\\n"
"Language: zh_CN\\n"
"PO-Revision-Date: 2024-09-19\\n"
"Language-Team: Stapx Steve (stapxs)\\n"

#: src/components/AboutPan.vue:22
#: src/components/WelPan.vue:13
#: src/function/utils/appUtil.ts:389
#: src/function/utils/appUtil.ts:391
#: src/function/utils/appUtil.ts:392
#: src/function/utils/appUtil.ts:394
#: src/function/utils/appUtil.ts:397
#: src/function/utils/appUtil.ts:459
#: src/pages/options/OptFunction.vue:139
msgid "Stapxs QQ Lite"
msgstr ""

#: src/components/WelPan.vue:31
#: src/pages/options/OptView.vue:16
# 这是当前语言的作者，请自行修改
msgid "Stapx Steve"
msgstr ""

#: src/pages/options/OptView.vue:17
# 这是当前语言的介绍，请自行发挥
msgid "你好世界！这是 Stapxs QQ Lite 的默认简体中文。"
msgstr ""

#: src/pages/options/OptView.vue:15
# 这是当前语言的名字，请自行修改
msgid "简体中文"
msgstr ""

#: src/pages/Friends.vue:23
#: src/pages/Friends.vue:32
#: src/pages/Chat.vue:388
#: src/pages/Info.vue:85
msgid "搜索 ……"
msgstr ""

#: src/pages/Info.vue:64
msgid "地区"
msgstr ""

#: src/pages/Info.vue:53
msgid "生日"
msgstr ""

#: src/pages/Info.vue:59
msgid "鼠&牛&虎&兔&龙&蛇&马&羊&猴&鸡&狗&猪"
msgstr ""

#: src/pages/Info.vue:75
#: src/pages/Info.vue:120
#: src/pages/Options.vue:12
msgid "设置"
msgstr ""

#: src/components/FileBody.vue:22
msgid "天后"
msgstr ""

#: src/pages/Info.vue:108
#: src/pages/Chat.vue:183
#: src/function/utils/msgUtil.ts:232
msgid "文件"
msgstr ""

#: src/components/FileBody.vue:24
msgid "共 {num} 个文件"
msgstr ""

#: src/pages/Info.vue:12
msgid "群资料"
msgstr ""

#: src/pages/Info.vue:26
msgid "介绍"
msgstr ""

#: src/pages/Info.vue:45
#: src/pages/Info.vue:48
msgid "签名"
msgstr ""

#: src/pages/Info.vue:82
msgid "成员"
msgstr ""

#: src/pages/Info.vue:29
msgid "群主很懒，还没有群介绍哦～"
msgstr ""

#: src/pages/Info.vue:50
msgid "其他信息"
msgstr ""

#: src/pages/Info.vue:13
msgid "好友"
msgstr ""

#: src/components/FacePan.vue:27
# 这儿的空间比较小，请尽量使用更短的句子（或者是词）
msgid "一无所有"
msgstr ""

#: src/pages/Chat.vue:187
#: src/function/utils/msgUtil.ts:226
msgid "表情"
msgstr ""

#: src/components/MsgBody.vue:35
#: src/pages/Chat.vue:179
#: src/function/utils/msgUtil.ts:229
msgid "图片"
msgstr ""

#: src/pages/Chat.vue:285
msgid "{time} 加入群聊"
msgstr ""

#: src/pages/Chat.vue:26
#: src/pages/chat-view/Chat弹幕.vue:152
msgid "上次消息 - {time}"
msgstr ""

#: src/components/NoticeBody.vue:18
#: src/pages/Info.vue:36
#: src/pages/Chat.vue:280
msgid "成员类型_admin"
msgstr "管理员"

#: src/pages/Chat.vue:280
msgid "成员类型_owner"
msgstr "群主"

#: src/pages/Chat.vue:247
msgid "合并消息"
msgstr ""

#: src/pages/Chat.vue:324
#: src/pages/options/OptDev.vue:347
#: src/pages/options/OptDev.vue:370
#: src/function/utils/appUtil.ts:403
msgid "复制"
msgstr ""

#: src/pages/Chat.vue:328
msgid "复制选中文本"
msgstr ""

#: src/pages/Chat.vue:316
msgid "转发"
msgstr ""

#: src/pages/Chat.vue:320
msgid "多选"
msgstr ""

#: src/pages/Chat.vue:312
msgid "回复"
msgstr ""

#: src/pages/Chat.vue:340
msgid "撤回"
msgstr ""

#: src/pages/Chat.vue:48
msgid "没有更多消息了"
msgstr ""

#: src/pages/Chat.vue:30
#: src/pages/chat-view/Chat弹幕.vue:157
msgid "暂无消息"
msgstr ""

#: src/pages/Chat.vue:128
#: src/pages/Chat.vue:362
msgid "发送"
msgstr ""

#: src/pages/Chat.vue:361
msgid "发送图片"
msgstr ""

#: src/pages/Friends.vue:84
#: src/pages/Messages.vue:61
msgid "选择联系人开始聊天"
msgstr ""

#: src/components/MsgBody.vue:86
msgid "不支持的消息"
msgstr ""

#: src/components/MsgBody.vue:35
#: src/components/MsgBody.vue:305
msgid "预览图片"
msgstr ""

#: src/components/AboutPan.vue:25
msgid "一个兼容 OneBot 的非官方网页版 QQ 客户端"
msgstr ""

#: src/pages/Friends.vue:17
msgid "联系人"
msgstr ""

#: src/App.vue:46
msgid "连接地址"
msgstr ""

#: src/App.vue:62
msgid "自动连接"
msgstr ""

#: src/App.vue:65
msgid "连接"
msgstr ""

#: src/App.vue:69
msgid "如何连接"
msgstr ""

#: src/App.vue:51
msgid "连接密钥"
msgstr ""

#: src/App.vue:57
msgid "记住密码"
msgstr ""

#: src/App.vue:42
msgid "连接到 OneBot"
msgstr ""

#: src/App.vue:38
msgid "主页"
msgstr ""

#: src/pages/options/OptAccount.vue:54
msgid "后端信息"
msgstr ""

#: src/pages/options/OptAccount.vue:61
msgid "这是你连接的 QQ Bot 的相关信息"
msgstr ""

#: src/pages/options/OptAccount.vue:27
msgid "账号设置"
msgstr ""

#: src/pages/Options.vue:13
msgid "账号"
msgstr ""

#: src/pages/Options.vue:16
msgid "高级"
msgstr ""

#: src/pages/Options.vue:15
msgid "功能"
msgstr ""

#: src/pages/Options.vue:14
msgid "界面"
msgstr ""

#: src/pages/options/OptDev.vue:111
msgid "应用消息测试"
msgstr ""

#: src/pages/options/OptDev.vue:112
msgid "#$&*#$= ……"
msgstr ""

#: src/pages/options/OptFunction.vue:58
msgid "消息防撤回"
msgstr ""

#: src/pages/options/OptFunction.vue:59
msgid "说出去的话就像泼出去的水 ……"
msgstr ""

#: src/pages/options/OptFunction.vue:59
msgid "说了不做这功能就是不做"
msgstr ""

#: src/pages/options/OptFunction.vue:71
msgid "禁用图片发送框"
msgstr ""

#: src/pages/options/OptFunction.vue:72
msgid "你也向往自由吗？"
msgstr ""

#: src/pages/options/OptView.vue:116
msgid "消息页面主题"
msgstr ""

#: src/pages/options/OptView.vue:117
msgid "一些好玩的主题！"
msgstr ""

#: src/pages/options/OptDev.vue:28
msgid "兼容选项"
msgstr ""

#: src/pages/options/OptDev.vue:35
msgid "发送心跳包"
msgstr ""

#: src/pages/options/OptDev.vue:36
msgid "没救了，拖出去吧"
msgstr ""

#: src/pages/options/OptDev.vue:30
msgid "这儿是兼容性相关的高级选项，包括 bot 附加功能、热插拔组件等。"
msgstr ""

#: src/pages/options/OptDev.vue:87
msgid "禁用消息渲染"
msgstr ""

#: src/pages/options/OptDev.vue:88
msgid "点击进行 CAPTCHA 验证"
msgstr ""

#: src/pages/options/OptDev.vue:70
msgid "开发者选项"
msgstr ""

#: src/pages/options/OptDev.vue:74
msgid "日志等级"
msgstr ""

#: src/pages/options/OptDev.vue:81
msgid "全部"
msgstr ""

#: src/pages/options/OptDev.vue:79
msgid "调试"
msgstr ""

#: src/pages/options/OptDev.vue:78
msgid "错误"
msgstr ""

#: src/pages/options/OptDev.vue:80
msgid "基本"
msgstr ""

#: src/pages/options/OptDev.vue:75
msgid "ReferenceError: moYu is not defined"
msgstr ""

#: src/pages/options/OptFunction.vue:29
msgid "通知所有新消息"
msgstr ""

#: src/pages/options/OptFunction.vue:30
msgid "让暴风雨来得更猛烈些吧！"
msgstr ""

#: src/pages/options/OptFunction.vue:15
msgid "禁用通知"
msgstr ""

#: src/pages/options/OptFunction.vue:16
msgid "好嘛 …… 不烦你 ……"
msgstr ""

#: src/pages/options/OptDev.vue:99
msgid "调试"
msgstr ""

#: src/pages/options/OptDev.vue:103
msgid "发送原始消息"
msgstr ""

#: src/pages/options/OptDev.vue:104
msgid "咻 ——"
msgstr ""

#: src/pages/options/OptFunction.vue:41
msgid "聊天选项"
msgstr ""

#: src/pages/options/OptFunction.vue:107
msgid "分析信息"
msgstr ""

#: src/pages/options/OptFunction.vue:132
msgid "后端类型分析"
msgstr ""

#: src/pages/options/OptFunction.vue:133
msgid "在连接后上传所使用的 bot 的类型分析"
msgstr ""

#: src/pages/options/OptFunction.vue:123
msgid "我们使用 Umami 对应用的使用情况进行分析，它将不会上传精确到用户的信息；你也可以在这儿控制分析功能的开关和额外分析项。同时我们的统计信息公开展示在此处以便查阅："
msgstr ""

#: src/pages/options/OptFunction.vue:126
msgid "访问统计信息" 
msgstr ""

#: src/pages/options/OptFunction.vue:112
msgid "关闭分析"
msgstr ""

#: src/pages/options/OptFunction.vue:113
msgid "真的不让看吗（小声"
msgstr ""

#: src/pages/options/OptFunction.vue:11
msgid "通知选项"
msgstr ""

#: src/components/AboutPan.vue:29
msgid "访问 GitHub 仓库"
msgstr ""

#: src/pages/options/OptView.vue:51
msgid "自动深色模式"
msgstr ""

#: src/pages/options/OptView.vue:51
msgid "Biubiu ——，自动变黑！"
msgstr ""

#: src/pages/options/OptView.vue:38
msgid "深色模式"
msgstr ""

#: src/pages/options/OptView.vue:39
msgid "是五彩斑斓的黑色！"
msgstr ""

#: src/pages/options/OptView.vue:11
msgid "本土化"
msgstr ""

#: src/pages/options/OptView.vue:23
msgid "语言（Language）"
msgstr ""

#: src/pages/options/OptView.vue:24
msgid "喵喵喵喵？"
msgstr ""

#: src/pages/options/OptView.vue:33
msgid "主题与颜色"
msgstr ""

#: src/pages/options/OptView.vue:66
msgid "主题色"
msgstr ""

#: src/pages/options/OptView.vue:67
msgid "换个心情 🎵 ~"
msgstr ""

#: src/pages/options/OptDev.vue:119
msgid "输出运行时"
msgstr ""

#: src/pages/options/OptDev.vue:120
msgid "全都吐出来！"
msgstr ""

#: src/pages/options/OptDev.vue:123
#: src/pages/options/OptDev.vue:133
#: src/pages/options/OptDev.vue:157
#: src/pages/options/OptDev.vue:171
#: src/pages/options/OptDev.vue:181
#: src/pages/options/OptDev.vue:191
msgid "执行"
msgstr ""

#: src/components/NoticeBody.vue:12
msgid "撤回了一条消息"
msgstr ""

#: src/components/BulletinBody.vue:30
msgid "已读"
msgstr ""

#: src/components/BulletinBody.vue:30
msgid "未读"
msgstr ""

#: src/components/BulletinBody.vue:29
msgid "{readNum} 人已读 | {isRead}"
msgstr ""

#: src/components/BulletinBody.vue:12
#: src/pages/Info.vue:98
msgid "公告"
msgstr ""

#: src/pages/options/OptDev.vue:140
msgid "让我康康 ~"
msgstr ""

#: src/function/utils/appUtil.ts:110
msgid "加载历史消息失败（构建消息 ID 失败）"
msgstr ""

#: src/components/MsgBody.vue:256
msgid "定位图片失败"
msgstr ""

#: src/function/connect.ts:85
#: src/function/connect.ts:155
#: src/function/connect.ts:161
msgid "连接失败"
msgstr ""

#: src/function/model/msg-body.ts:233
msgid "合并消息层级过多，解析失败。"
msgstr ""

#: src/function/msg.ts:540
msgid "加载群文件失败（{code}）"
msgstr ""

#: src/function/msg.ts:735
#: src/function/msg.ts:763
msgid "获取消息失败，正在重试"
msgstr ""

#: src/function/msg.ts:757
#: src/function/msg.ts:772
msgid "获取消息失败"
msgstr ""

#: src/pages/Chat.vue:613
msgid "无法定位上下文"
msgstr ""

#: src/pages/Chat.vue:1065
#: src/pages/Chat.vue:1080
#: src/pages/options/OptDev.vue:350
#: src/pages/options/OptDev.vue:373
msgid "复制成功"
msgstr ""

#: src/pages/Chat.vue:1067
#: src/pages/Chat.vue:1082
msgid "复制失败"
msgstr ""

#: src/pages/chat-view/Chat弹幕.vue:285
#: src/pages/chat-view/Chat终端.vue:363
msgid "图片过大"
msgstr ""

#: src/pages/options/OptDev.vue:242
msgid "你不是人（逃"
msgstr ""

#: src/registerServiceWorker.ts:14
msgid "应用已通过 service worker 服务从缓存中加载，更多信息请查看 https://goo.gl/AFskqB。"
msgstr ""

#: src/registerServiceWorker.ts:17
msgid "Service worker 服务注册成功。"
msgstr ""

#: src/registerServiceWorker.ts:21
msgid "内容已完成缓存便于离线使用。"
msgstr ""

#: src/registerServiceWorker.ts:24
msgid "正在下载新的内容 ……"
msgstr ""

#: src/registerServiceWorker.ts:27
msgid "新的内容已缓存完成，请刷新以生效。"
msgstr ""

#: src/registerServiceWorker.ts:33
msgid "没有有效的网络连接，应用正在以离线模式运行。"
msgstr ""

#: src/registerServiceWorker.ts:35
msgid "注册 service worker 时发生错误。"
msgstr ""

#: src/registerServiceWorker.ts:32
msgid "没有网络"
msgstr ""

#: src/components/MsgBody.vue:295
msgid "加载图片失败"
msgstr ""

#: src/pages/Chat.vue:116
#: src/pages/Chat.vue:193
msgid "精华消息"
msgstr ""

#: src/pages/Messages.vue:17
#: src/pages/Messages.vue:22
msgid "消息"
msgstr ""

#: src/pages/Chat.vue:130
msgid "{time}，由 {name} 设置"
msgstr ""

#: src/components/UpdatePan.vue:3
msgid "更新记录"
msgstr ""

#: src/App.vue:408
#: src/function/utils/appUtil.ts:601
#: src/function/utils/appUtil.ts:626
#: src/pages/options/OptFunction.vue:178
msgid "知道了"
msgstr ""

#: src/function/utils/appUtil.ts:610
#: src/function/utils/appUtil.ts:623
msgid "查看…"
msgstr ""

#: src/pages/Chat.vue:174
msgid "没有找到匹配的群成员"
msgstr ""

#: src/components/WelPan.vue:31
#: src/pages/options/OptView.vue:16
msgid "作者："
msgstr ""

#: src/pages/options/OptFunction.vue:86
msgid "小尾巴"
msgstr ""

#: src/pages/options/OptFunction.vue:87
msgid "只会追加在最后一段话后面"
msgstr ""

#: src/components/MsgBody.vue:80
msgid "（点击查看合并转发消息）"
msgstr ""

#: src/components/WelPan.vue:38
#: src/function/utils/appUtil.ts:649
msgid "好耶"
msgstr ""

#: src/function/utils/appUtil.ts:645
msgid "好耶！Stapxs QQ Lite 已经被打开 {times} 次了！"
msgstr ""

#: src/function/utils/appUtil.ts:646
msgid "真的不去点个 star 吗 ……"
msgstr ""

#: src/function/utils/appUtil.ts:657
msgid "好喔"
msgstr ""

#: src/function/utils/appUtil.ts:654
msgid "不要"
msgstr ""

#: src/App.vue:404
#: src/pages/Chat.vue:1119
#: src/pages/options/OptFunction.vue:174
msgid "提醒"
msgstr ""

#: src/App.vue:405
msgid "连接密钥将以明文存储在浏览器 Cookie 中，请确保设备安全以防止密钥泄漏。"
msgstr ""

#: src/pages/options/OptAccount.vue:31
msgid "昵称"
msgstr ""

#: src/pages/options/OptAccount.vue:32
msgid "就只是个名字而已 ……"
msgstr ""

#: src/pages/options/OptAccount.vue:39
msgid "签名"
msgstr ""

#: src/pages/options/OptAccount.vue:40
msgid "啊吧啊吧（智慧的眼神）"
msgstr ""

#: src/pages/Messages.vue:43
msgid "系统通知"
msgstr ""

#: src/pages/options/OptDev.vue:129
msgid "输出调试信息"
msgstr ""

#: src/pages/options/OptDev.vue:130
msgid "到底用的什么版本呢 ……"
msgstr ""

#: src/function/option.ts:511
#: src/function/utils/appUtil.ts:721
#: src/pages/Chat.vue:1000
#: src/pages/Chat.vue:1123
#: src/pages/options/OptDev.vue:354
#: src/pages/options/OptDev.vue:377
#: src/pages/options/OptDev.vue:396
#: src/pages/options/OptDev.vue:423
#: src/pages/options/OptInfo.vue:98
msgid "确定"
msgstr ""

#: src/pages/options/OptDev.vue:344
msgid "调试信息"
msgstr ""

#: src/function/utils/appUtil.ts:721
msgid "继续"
msgstr ""

#: src/pages/options/OptDev.vue:163
msgid "维护与备份"
msgstr ""

#: src/pages/options/OptDev.vue:167
#: src/pages/options/OptDev.vue:367
msgid "导出设置项"
msgstr ""

#: src/pages/options/OptDev.vue:168
msgid "tar zcvf config.tar.gz /localStorage"
msgstr ""

#: src/pages/options/OptDev.vue:177
#: src/pages/options/OptDev.vue:389
msgid "导入设置项"
msgstr ""

#: src/pages/options/OptDev.vue:178
msgid "tar zxvf cache.tar.gz /localStorage"
msgstr ""

#: src/function/option.ts:523
#: src/pages/Chat.vue:996
#: src/pages/Chat.vue:1137
#: src/pages/options/OptDev.vue:392
#: src/pages/options/OptDev.vue:438
#: src/pages/options/OptInfo.vue:116
msgid "取消"
msgstr ""

#: src/pages/options/OptDev.vue:407
msgid "导入设置项失败"
msgstr ""

#: src/pages/options/OptDev.vue:187
#: src/pages/options/OptDev.vue:420
msgid "重置应用"
msgstr ""

#: src/pages/options/OptDev.vue:188
msgid "sudo rm -rf /localStorage"
msgstr ""

#: src/components/MsgBody.vue:83
msgid "（查看回复消息）"
msgstr ""

#: src/pages/options/OptDev.vue:419
msgid "确认要重置应用吗，重置应用将会失去所有设置内容（包括设置的置顶群组），但是可能可以解决一些因为浏览器缓存导致的奇怪问题。"
msgstr ""

#: src/components/WelPan.vue:18
msgid "下面是一点点简单的使用引导 …… 如果不想看可以直接戳跳过（小声），但是也没多长啦"
msgstr ""

#: src/components/WelPan.vue:23
msgid "选择语言"
msgstr ""

#: src/components/WelPan.vue:39
msgid "该说的都说了 —— 那么就可以愉快的用啦（大声），如果遇到什么奇怪的问题，尽管来 GitHub 仓库问哦。"
msgstr ""

#: src/pages/Chat.vue:344
msgid "提及"
msgstr ""

#: src/pages/options/OptView.vue:158
msgid "页面"
msgstr ""

#: src/pages/options/OptView.vue:162
msgid "缩放比例"
msgstr ""

#: src/pages/options/OptView.vue:163
msgid "调整页面在移动端的缩放比例"
msgstr ""

#: src/pages/Messages.vue:188
msgid "已标记为已读"
msgstr ""

#: src/pages/Chat.vue:399
msgid "群组"
msgstr ""

#: src/function/msg.ts:466
msgid "消息已转发"
msgstr ""

#: src/pages/Chat.vue:385
#: src/pages/Chat.vue:991
msgid "转发消息"
msgstr ""

#: src/pages/options/OptFunction.vue:95
msgid "使用 shift enter 换行"
msgstr ""

#: src/pages/options/OptFunction.vue:96
msgid "I have a shift I have an enter ..."
msgstr ""

#: src/pages/options/OptFunction.vue:175
msgid "开启 shift enter 换行可能会在一些拥有特殊选词模式的输入法上出现问题，如 微软注音2003、新注音2003 和 绝大部分很早期的拼音输入法；如果在使用的时候遇到问题可以尝试关闭此功能。（或者换个更现代的输入法）"
msgstr ""

#: src/components/BulletinBody.vue:20
msgid "点击展开"
msgstr ""

#: src/pages/options/OptDev.vue:48
msgid "消息类型"
msgstr ""

#: src/pages/options/OptDev.vue:49
msgid "[CQ:faceid=1]你好啊👋，这个选项将会强制覆盖自动检测"
msgstr ""

#: src/pages/options/OptDev.vue:455
msgid "自动检测"
msgstr ""

#: src/pages/options/OptInfo.vue:26
msgid "我的本群昵称"
msgstr ""

#: src/pages/options/OptInfo.vue:27
msgid "￡爺↘僞ηι慹著彡"
msgstr ""

#: src/pages/options/OptInfo.vue:17
msgid "群聊名称"
msgstr ""

#: src/pages/options/OptInfo.vue:18
msgid "“你们真是害人不浅呐你们这个群”"
msgstr ""

#: src/pages/chat-view/SystemNotice.vue:30
#: src/pages/chat-view/SystemNotice.vue:45
msgid "同意"
msgstr ""

#: src/pages/chat-view/SystemNotice.vue:29
#: src/pages/chat-view/SystemNotice.vue:44
msgid "拒绝"
msgstr ""

#: src/function/utils/appUtil.ts:613
msgid "刷新页面"
msgstr ""

#: src/pages/chat-view/SystemNotice.vue:14
msgid "系统消息"
msgstr ""

#: src/pages/Chat.vue:348
msgid "移出群聊"
msgstr ""

#: src/pages/options/OptView.vue:85
msgid "自动跟随 GTK 主题"
msgstr ""

#: src/pages/options/OptView.vue:86
msgid "（实验性）自动从 GTK 配置获取主题配色"
msgstr ""

#: src/pages/options/OptView.vue:101
msgid "自动跟随主题色"
msgstr ""

#: src/pages/options/OptView.vue:102
msgid "自动获取的主题色设置并应用"
msgstr ""

#: src/pages/options/OptView.vue:127
msgid "背景图片"
msgstr ""

#: src/pages/options/OptView.vue:128
msgid "嘿嘿嘿（痴呆"
msgstr ""

#: src/pages/options/OptView.vue:136
msgid "背景模糊"
msgstr ""

#: src/pages/options/OptView.vue:137
msgid "什么都看不见了（恼"
msgstr ""

#: src/pages/Chat.vue:1402
msgid "压缩图片失败"
msgstr ""

#: src/pages/Chat.vue:1397
msgid "正在压缩图片 ……"
msgstr ""

#: src/pages/Chat.vue:1120
msgid "真的要将 {user} 移出群聊吗"
msgstr ""

#: src/function/option.ts:508
#: src/pages/options/OptDev.vue:153
msgid "重启应用"
msgstr ""

#: src/pages/options/OptDev.vue:154
msgid "99% 的特性都能通过重启解决！"
msgstr ""

#: src/function/utils/appUtil.ts:84
msgid "关闭"
msgstr ""

#: src/function/utils/appUtil.ts:73
msgid "打开…"
msgstr ""

#: src/pages/Chat.vue:1353
msgid "发送文件失败"
msgstr ""

#: src/pages/Chat.vue:1357
msgid "发送文件错误"
msgstr ""

#: src/pages/Chat.vue:1335
msgid "正在发送文件 {percent}%"
msgstr ""

#: src/components/MsgBody.vue:69
msgid "文件预览"
msgstr ""

#: src/function/msg.ts:1403
#: src/pages/Info.vue:194
msgid "临时会话"
msgstr ""

#: src/function/msg.ts:125
msgid "添加好友 {name} 成功！"
msgstr ""

#: src/pages/Chat.vue:23
msgid "来自群聊：{group}"
msgstr ""

#: src/pages/Messages.vue:30
msgid "置顶"
msgstr ""

#: src/pages/Messages.vue:31
msgid "取消置顶"
msgstr ""

#: src/pages/Messages.vue:32
msgid "删除"
msgstr ""

#: src/pages/Messages.vue:33
msgid "标记已读"
msgstr ""

#: src/function/msg.ts:439
msgid "获取合并转发消息失败"
msgstr ""

#: src/components/msg-component/CardMessage.vue:81
#: src/function/model/msg-body.ts:120
msgid "解析消息错误"
msgstr ""

#: src/function/utils/appUtil.ts:389
msgid "应用显示完成，应用初始化完成！欢迎使用 {name}！"
msgstr ""

#: src/function/model/msg-body.ts:433
msgid "刷新用户列表成功"
msgstr ""

#: src/function/connect.ts:177
msgid "正在断开链接……"
msgstr ""

#: src/pages/Chat.vue:332
msgid "下载图片"
msgstr ""

#: src/components/AboutPan.vue:43
#: src/components/AboutPan.vue:159
msgid "许可版权声明"
msgstr ""

#: src/components/DepPan.vue:21
msgid "你可以在项目仓库的依赖关系图中找到大部分依赖，而这里列出了一些不由包管理管理的依赖。"
msgstr ""

#: src/pages/options/OptView.vue:173
msgid "圆角适配"
msgstr ""

#: src/pages/options/OptView.vue:174
msgid "适配全面屏设备防止四角出界"
msgstr ""

#: src/pages/Chat.vue:42
#: src/pages/Chat.vue:252
msgid "加载中"
msgstr ""

#: src/function/utils/msgUtil.ts:345
msgid "发送中"
msgstr ""

#: src/components/DepPan.vue:12
msgid "驱动自"
msgstr ""

#: src/components/UpdatePan.vue:3
msgid "新版本"
msgstr ""

#: src/function/utils/appUtil.ts:604
msgid "下载更新…"
msgstr ""

#: src/function/utils/appUtil.ts:69
msgid "请不要在内嵌页面中输入敏感信息，内嵌页面并不安全。"
msgstr ""

#: src/pages/options/OptDev.vue:255
msgid "正在收集调试消息……"
msgstr ""

#: src/pages/options/OptAccount.vue:49
msgid "还没有连接到 OneBot 耶"
msgstr ""

#: src/pages/options/OptAccount.vue:50
msgid "去连接"
msgstr ""

#: src/pages/options/OptView.vue:198
msgid "不要点这个"
msgstr ""

#: src/pages/options/OptView.vue:199
msgid "啊吧啊吧（智慧）"
msgstr ""

#: src/pages/options/OptView.vue:120
#: src/pages/options/OptView.vue:151
msgid "默认"
msgstr ""

#: src/pages/Chat.vue:308
msgid "+ 1"
msgstr ""

#: src/pages/options/OptFunction.vue:72
msgid "关闭回应功能"
msgstr ""

#: src/pages/options/OptFunction.vue:73
msgid "如果你不想用它或者 bot 不支持，可以关闭这个功能"
msgstr ""

#: src/components/MsgBody.vue:426
msgid "（获取回复消息失败）"
msgstr ""

#: src/pages/options/OptDev.vue:11
msgid "进阶功能"
msgstr ""

#: src/pages/options/OptDev.vue:28
msgid "已启用"
msgstr ""

#: src/pages/options/OptDev.vue:29
msgid "已禁用"
msgstr ""

#: src/pages/options/OptDev.vue:59
msgid "解析配置"
msgstr ""

#: src/pages/options/OptDev.vue:60
msgid "不同框架之间的化学反应我们将其称之为达利园效应"
msgstr ""

#: src/pages/options/OptDev.vue:63
msgid "未连接"
msgstr ""

#: src/pages/options/OptDev.vue:453
msgid "CQ 码"
msgstr ""

#: src/pages/options/OptDev.vue:454
msgid "Array 数组"
msgstr ""

#: src/pages/Messages.vue:34
msgid "开启通知"
msgstr ""

#: src/pages/Messages.vue:35
msgid "关闭通知"
msgstr ""

#: src/pages/Chat.vue:218
msgid "已被禁言至：{time}"
msgstr ""

#: src/components/NoticeBody.vue:20
msgid "禁言了你"
msgstr ""

#: src/components/NoticeBody.vue:24
msgid "管理员禁言了"
msgstr ""

#: src/components/NoticeBody.vue:29
msgid "管理员解除了 {name} 的禁言"
msgstr ""

#: src/components/NoticeBody.vue:80
msgid "天"
msgstr ""

#: src/components/NoticeBody.vue:83
msgid "小时"
msgstr ""

#: src/components/NoticeBody.vue:86
msgid "分钟"
msgstr ""

#: src/components/NoticeBody.vue:89
msgid "秒"
msgstr ""

#: src/components/NoticeBody.vue:29
#: src/function/msg.ts:198
msgid "你"
msgstr ""

#: src/pages/options/OptInfo.vue:34
msgid "退出群聊"
msgstr ""

#: src/pages/options/OptInfo.vue:95
msgid "确定要退出群聊吗？"
msgstr ""

#: src/pages/chat-view/SystemNotice.vue:25
#: src/pages/chat-view/SystemNotice.vue:40
msgid "留言"
msgstr ""

#: src/pages/chat-view/SystemNotice.vue:22
msgid "请求加为好友"
msgstr ""

#: src/pages/chat-view/SystemNotice.vue:37
msgid "邀请你加入群聊"
msgstr ""

#: src/components/MsgBody.vue:195
msgid "全体成员"
msgstr ""

#: src/pages/options/OptView.vue:184
msgid "置顶窗口"
msgstr ""

#: src/pages/options/OptView.vue:185
msgid "你也不想想让 ta 知道你不在看消息吧 ~"
msgstr ""

#: src/pages/options/OptView.vue:152
msgid "完整模糊"
msgstr ""

#: src/pages/options/OptView.vue:153
msgid "完整透明"
msgstr ""

#: src/pages/options/OptView.vue:147
msgid "窗口透明模式"
msgstr ""

#: src/pages/options/OptView.vue:148
msgid "怎么看光还要挑三拣四的"
msgstr ""

#: src/function/option.ts:498
msgid "此操作将在重启应用后生效，现在就要重启吗？"
msgstr ""

#: src/function/option.ts:502
msgid "此操作仅供娱乐，将会在下次关闭时恢复。"
msgstr ""

#: src/pages/options/OptAccount.vue:66
# 连接正常（{timeout} > {step} s）
msgid "连接_normal"
msgstr "连接正常（{timeout} > {step} s）"

#: src/pages/options/OptAccount.vue:66
# 连接延迟（{timeout} > {step} s）
msgid "连接_slow"
msgstr "连接延迟（{timeout} > {step} s）"

#: src/pages/options/OptAccount.vue:66
# 正在收集连接信息……
msgid "连接_loading"
msgstr "正在收集连接信息……"

#: src/pages/Chat.vue:196
msgid "搜索消息"
msgstr ""

#: src/pages/Chat.vue:154
msgid "搜索已加载的消息"
msgstr ""

#: src/function/utils/appUtil.ts:392
#: src/function/utils/appUtil.ts:459
#: src/pages/Options.vue:17
msgid "关于"
msgstr ""

#: src/function/utils/appUtil.ts:393
msgid "检查更新…"
msgstr ""

#: src/function/utils/appUtil.ts:394
msgid "隐藏"
msgstr ""

#: src/function/utils/appUtil.ts:395
msgid "隐藏其他"
msgstr ""

#: src/function/utils/appUtil.ts:396
msgid "全部显示"
msgstr ""

#: src/function/utils/appUtil.ts:397
msgid "退出"
msgstr ""

#: src/function/utils/appUtil.ts:407
msgid "账户"
msgstr ""

#: src/function/connect.ts:135
#: src/function/utils/appUtil.ts:408
msgid "连接"
msgstr ""

#: src/function/msg.ts:1017
#: src/function/utils/appUtil.ts:410
msgid "用户列表（{count}）"
msgstr ""

#: src/function/utils/appUtil.ts:411
msgid "刷新列表…"
msgstr ""

#: src/function/utils/appUtil.ts:409
msgid "登出"
msgstr ""

#: src/function/utils/appUtil.ts:399
msgid "编辑"
msgstr ""

#: src/function/utils/appUtil.ts:400
msgid "撤销"
msgstr ""

#: src/function/utils/appUtil.ts:401
msgid "重做"
msgstr ""

#: src/function/utils/appUtil.ts:402
msgid "剪切"
msgstr ""

#: src/function/utils/appUtil.ts:404
msgid "粘贴"
msgstr ""

#: src/function/utils/appUtil.ts:405
msgid "全选"
msgstr ""

#: src/function/utils/appUtil.ts:413
msgid "帮助"
msgstr ""

#: src/function/utils/appUtil.ts:414
msgid "帮助文档"
msgstr ""

#: src/function/utils/appUtil.ts:415
msgid "在 Github 上反馈问题"
msgstr ""

#: src/function/utils/appUtil.ts:416
msgid "许可协议"
msgstr ""

#: src/pages/Chat.vue:191
msgid "戳一戳"
msgstr ""

#: src/function/utils/msgUtil.ts:230
msgid "语音"
msgstr ""

#: src/function/utils/msgUtil.ts:231
msgid "视频"
msgstr ""

#: src/pages/Chat.vue:159
msgid "合并转发"
msgstr ""

#: src/pages/Chat.vue:163
msgid "截图"
msgstr ""

msgid "“{body}” 以及 {num} 条消息"
msgstr ""`,rt=`msgid ""
msgstr ""
"POT-Creation-Date: \\n"
"MIME-Version: 1.0\\n"
"Content-Type: text/plain; charset=utf-8\\n"
"Content-Transfer-Encoding: 8bit\\n"
"Language: zh_TW\\n"
"PO-Revision-Date: 2023-05-24\\n"
"Language-Team: Doodle Huang (doodlehuang), kuohuanhuan\\n"

#: src/components/AboutPan.vue:22
#: src/components/WelPan.vue:13
#: src/function/utils/appUtil.ts:389
#: src/function/utils/appUtil.ts:391
#: src/function/utils/appUtil.ts:392
#: src/function/utils/appUtil.ts:394
#: src/function/utils/appUtil.ts:397
#: src/function/utils/appUtil.ts:459
#: src/pages/options/OptFunction.vue:139
msgid "Stapxs QQ Lite"
msgstr "Stapxs QQ Lite"

#: src/components/WelPan.vue:31
#: src/pages/options/OptView.vue:16
# 这是当前语言的作者，请自行修改
msgid "Stapx Steve"
msgstr "Doodle Huang, kuohuanhuan"

#: src/pages/options/OptView.vue:17
# 这是当前语言的介绍，请自行发挥
msgid "你好世界！这是 Stapxs QQ Lite 的默认简体中文。"
msgstr "你好！這是 Stapxs QQ Lite 內建的繁體中文（台灣）語系。"

#: src/pages/options/OptView.vue:15
# 这是当前语言的名字，请自行修改
msgid "简体中文"
msgstr "繁體中文（台灣）"

#: src/pages/Friends.vue:23
#: src/pages/Friends.vue:32
#: src/pages/Chat.vue:388
#: src/pages/Info.vue:85
msgid "搜索 ……"
msgstr "搜尋……"

#: src/pages/Info.vue:64
msgid "地区"
msgstr "地區"

#: src/pages/Info.vue:53
msgid "生日"
msgstr "生日"

#: src/pages/Info.vue:59
msgid "鼠&牛&虎&兔&龙&蛇&马&羊&猴&鸡&狗&猪"
msgstr "鼠&牛&虎&兔&龍&蛇&馬&羊&猴&雞&狗&豬"

#: src/pages/Info.vue:75
#: src/pages/Info.vue:120
#: src/pages/Options.vue:12
msgid "设置"
msgstr "設定"

#: src/components/FileBody.vue:22
msgid "天后"
msgstr "天後"

#: src/pages/Info.vue:108
#: src/pages/Chat.vue:183
#: src/function/utils/msgUtil.ts:232
msgid "文件"
msgstr "檔案"

#: src/components/FileBody.vue:24
msgid "共 {num} 个文件"
msgstr "共 {num} 個檔案"

#: src/pages/Info.vue:12
msgid "群资料"
msgstr "群組資料"

#: src/pages/Info.vue:26
msgid "介绍"
msgstr "簡介"

#: src/pages/Info.vue:45
#: src/pages/Info.vue:48
msgid "签名"
msgstr "簽名檔"

#: src/pages/Info.vue:82
msgid "成员"
msgstr "群組成員"

#: src/pages/Info.vue:29
msgid "群主很懒，还没有群介绍哦～"
msgstr "群組擁有者很懶，還沒有寫群簡介哦～"

#: src/pages/Info.vue:50
msgid "其他信息"
msgstr "其他資訊"

#: src/pages/Info.vue:13
msgid "好友"
msgstr "聯絡人"

#: src/components/FacePan.vue:27
# 这儿的空间比较小，请尽量使用更短的句子（或者是词）
msgid "一无所有"
msgstr "沒有貼圖"

#: src/pages/Chat.vue:187
#: src/function/utils/msgUtil.ts:226
msgid "表情"
msgstr "表情"

#: src/components/MsgBody.vue:35
#: src/pages/Chat.vue:179
#: src/function/utils/msgUtil.ts:229
msgid "图片"
msgstr "圖片"

#: src/pages/Chat.vue:285
msgid "{time} 加入群聊"
msgstr "於 {time} 加入群組"

#: src/pages/Chat.vue:26
#: src/pages/chat-view/Chat弹幕.vue:152
msgid "上次消息 - {time}"
msgstr "最新訊息 - {time}"

#: src/components/NoticeBody.vue:18
#: src/pages/Info.vue:36
#: src/pages/Chat.vue:280
msgid "成员类型_admin"
msgstr "管理員"

#: src/pages/Chat.vue:280
msgid "成员类型_owner"
msgstr "群組擁有者"

#: src/pages/Chat.vue:247
msgid "合并消息"
msgstr "合併訊息"

#: src/pages/Chat.vue:324
#: src/pages/options/OptDev.vue:347
#: src/pages/options/OptDev.vue:370
#: src/function/utils/appUtil.ts:403
msgid "复制"
msgstr "複製"

#: src/pages/Chat.vue:328
msgid "复制选中文本"
msgstr "複製選取的文字"

#: src/pages/Chat.vue:316
msgid "转发"
msgstr "轉傳"

#: src/pages/Chat.vue:320
msgid "多选"
msgstr "複選"

#: src/pages/Chat.vue:312
msgid "回复"
msgstr "回覆"

#: src/pages/Chat.vue:340
msgid "撤回"
msgstr "收回"

#: src/pages/Chat.vue:48
msgid "没有更多消息了"
msgstr "找不到更多訊息了"

#: src/pages/Chat.vue:30
#: src/pages/chat-view/Chat弹幕.vue:157
msgid "暂无消息"
msgstr "沒有訊息"

#: src/pages/Chat.vue:128
#: src/pages/Chat.vue:362
msgid "发送"
msgstr "傳送"

#: src/pages/Chat.vue:361
msgid "发送图片"
msgstr "傳送圖片"

#: src/pages/Friends.vue:84
#: src/pages/Messages.vue:61
msgid "选择联系人开始聊天"
msgstr "選取聯絡人來開始聊天"

#: src/components/MsgBody.vue:86
msgid "不支持的消息"
msgstr "不支援的訊息類型"

#: src/components/MsgBody.vue:35
#: src/components/MsgBody.vue:305
msgid "预览图片"
msgstr "檢視圖片"

#: src/components/AboutPan.vue:25
msgid "一个兼容 OneBot 的非官方网页版 QQ 客户端"
msgstr "一個與 OneBot 相容的非官方網頁版 QQ 用戶端"

#: src/pages/Friends.vue:17
msgid "联系人"
msgstr "聯絡人"

#: src/App.vue:46
msgid "连接地址"
msgstr "連線位址"

#: src/App.vue:62
msgid "自动连接"
msgstr "自動連線"

#: src/App.vue:65
msgid "连接"
msgstr "連線"

#: src/App.vue:69
msgid "如何连接"
msgstr "如何連線？"

#: src/App.vue:51
msgid "连接密钥"
msgstr "連線金鑰"

#: src/App.vue:57
msgid "记住密码"
msgstr "儲存密碼"

#: src/App.vue:42
msgid "连接到 OneBot"
msgstr "連線到 OneBot"

#: src/App.vue:38
msgid "主页"
msgstr "主頁"

#: src/pages/options/OptAccount.vue:54
msgid "后端信息"
msgstr "後端資訊"

#: src/pages/options/OptAccount.vue:61
msgid "这是你连接的 QQ Bot 的相关信息"
msgstr "這是你目前對接的 QQ Bot 的相關資訊"

#: src/pages/options/OptAccount.vue:27
msgid "账号设置"
msgstr "帳號設定"

#: src/pages/Options.vue:13
msgid "账号"
msgstr "帳號"

#: src/pages/Options.vue:16
msgid "高级"
msgstr "進階"

#: src/pages/Options.vue:15
msgid "功能"
msgstr "功能"

#: src/pages/Options.vue:14
msgid "界面"
msgstr "介面"

#: src/pages/options/OptDev.vue:111
msgid "应用消息测试"
msgstr "套用訊息測試"

#: src/pages/options/OptDev.vue:112
msgid "#$&*#$= ……"
msgstr "#$&*#$= ……"

#: src/pages/options/OptFunction.vue:58
msgid "消息防撤回"
msgstr "預防收回訊息"

#: src/pages/options/OptFunction.vue:59
msgid "说出去的话就像泼出去的水 ……"
msgstr "「側翼網軍這下還能興風作浪？」"

#: src/pages/options/OptFunction.vue:59
msgid "说了不做这功能就是不做"
msgstr "算了，你還是螢幕錄影吧。"

#: src/pages/options/OptFunction.vue:71
msgid "禁用图片发送框"
msgstr "停用圖片預覽視窗"

#: src/pages/options/OptFunction.vue:72
msgid "你也向往自由吗？"
msgstr "「你也嚮往自由嗎？」"

#: src/pages/options/OptView.vue:116
msgid "消息页面主题"
msgstr ""

#: src/pages/options/OptView.vue:117
msgid "一些好玩的主题！"
msgstr ""

#: src/pages/options/OptDev.vue:28
msgid "兼容选项"
msgstr "相容性設定"

#: src/pages/options/OptDev.vue:35
msgid "发送心跳包"
msgstr "傳送心跳封包"

#: src/pages/options/OptDev.vue:36
msgid "没救了，拖出去吧"
msgstr "「這個嘛，我想是這樣子啦：他真的沒救了。」"

#: src/pages/options/OptDev.vue:30
msgid "这儿是兼容性相关的高级选项，包括 bot 附加功能、热插拔组件等。"
msgstr "這裡是關於 Bot 相容性的進階選項，包括 Bot 的附加功能等。"

#: src/pages/options/OptDev.vue:87
msgid "禁用消息渲染"
msgstr "停用訊息算繪"

#: src/pages/options/OptDev.vue:88
msgid "点击进行 CAPTCHA 验证"
msgstr "點選以進行 CAPTCHA 驗證"

#: src/pages/options/OptDev.vue:70
msgid "开发者选项"
msgstr "開發人員選項"

#: src/pages/options/OptDev.vue:74
msgid "日志等级"
msgstr "日誌等級"

#: src/pages/options/OptDev.vue:81
msgid "全部"
msgstr "全部"

#: src/pages/options/OptDev.vue:79
msgid "调试"
msgstr "偵錯"

#: src/pages/options/OptDev.vue:78
msgid "错误"
msgstr "僅致命錯誤"

#: src/pages/options/OptDev.vue:80
msgid "基本"
msgstr "基本"

#: src/pages/options/OptDev.vue:75
msgid "ReferenceError: moYu is not defined"
msgstr "ReferenceError: moYu is not defined"

#: src/pages/options/OptFunction.vue:29
msgid "通知所有新消息"
msgstr "通知所有新訊息"

#: src/pages/options/OptFunction.vue:30
msgid "让暴风雨来得更猛烈些吧！"
msgstr "讓暴風雨來得更猛烈些吧！"

#: src/pages/options/OptFunction.vue:15
msgid "禁用通知"
msgstr "停用通知"

#: src/pages/options/OptFunction.vue:16
msgid "好嘛 …… 不烦你 ……"
msgstr "好嘛……不煩你……"

#: src/pages/options/OptDev.vue:99
msgid "调试"
msgstr "偵錯"

#: src/pages/options/OptDev.vue:103
msgid "发送原始消息"
msgstr "傳送原始訊息"

#: src/pages/options/OptDev.vue:104
msgid "咻 ——"
msgstr "咻——"

#: src/pages/options/OptFunction.vue:41
msgid "聊天选项"
msgstr "聊天室設定"

#: src/pages/options/OptFunction.vue:107
msgid "分析信息"
msgstr "分析資訊"

#: src/pages/options/OptFunction.vue:132
msgid "后端类型分析"
msgstr "後端類型統計"

#: src/pages/options/OptFunction.vue:133
msgid "在连接后上传所使用的 bot 的类型分析"
msgstr "成功連線後上傳所使用的 Bot 的類型統計"

#: src/pages/options/OptFunction.vue:123
msgid "我们使用 Umami 对应用的使用情况进行分析，它将不会上传精确到用户的信息；你也可以在这儿控制分析功能的开关和额外分析项。同时我们的统计信息公开展示在此处以便查阅："
msgstr "我們使用 Umami 對應用程式的使用情形進行分析。所有分析資訊均不會包含精確到使用者的資料，並僅限用於使用情形的分析。你可以在這裡控制分析功能及額外分析項目的啟用狀況。"

#: src/pages/options/OptFunction.vue:126
msgid "访问统计信息" 
msgstr ""

#: src/pages/options/OptFunction.vue:112
msgid "关闭分析"
msgstr "關閉分析"

#: src/pages/options/OptFunction.vue:113
msgid "真的不让看吗（小声"
msgstr "真的不給看嗎（小聲"

#: src/pages/options/OptFunction.vue:11
msgid "通知选项"
msgstr "通知設定"

#: src/components/AboutPan.vue:29
msgid "访问 GitHub 仓库"
msgstr "瀏覽 GitHub 專案儲存庫"

#: src/pages/options/OptView.vue:51
msgid "自动深色模式"
msgstr "自動開啟深色模式"

#: src/pages/options/OptView.vue:51
msgid "Biubiu ——，自动变黑！"
msgstr "Biu~biu~——自動變黑！"

#: src/pages/options/OptView.vue:38
msgid "深色模式"
msgstr "深色模式"

#: src/pages/options/OptView.vue:39
msgid "是五彩斑斓的黑色！"
msgstr "是五彩斑斕的黑色！"

#: src/pages/options/OptView.vue:11
msgid "本土化"
msgstr "在地化"

#: src/pages/options/OptView.vue:23
msgid "语言（Language）"
msgstr "語言（Language）"

#: src/pages/options/OptView.vue:24
msgid "喵喵喵喵？"
msgstr "希望你會使感覺這是正港 ê 啦！"

#: src/pages/options/OptView.vue:33
msgid "主题与颜色"
msgstr "主題與配色"

#: src/pages/options/OptView.vue:66
msgid "主题色"
msgstr "主題配色"

#: src/pages/options/OptView.vue:67
msgid "换个心情 🎵 ~"
msgstr "換個心情 🎵 ~"

#: src/pages/options/OptDev.vue:119
msgid "输出运行时"
msgstr "輸出執行環境"

#: src/pages/options/OptDev.vue:120
msgid "全都吐出来！"
msgstr "全都吐出來！"

#: src/pages/options/OptDev.vue:123
#: src/pages/options/OptDev.vue:133
#: src/pages/options/OptDev.vue:157
#: src/pages/options/OptDev.vue:171
#: src/pages/options/OptDev.vue:181
#: src/pages/options/OptDev.vue:191
msgid "执行"
msgstr "執行"

#: src/components/NoticeBody.vue:12
msgid "撤回了一条消息"
msgstr "收回了一則訊息"

#: src/components/BulletinBody.vue:30
msgid "已读"
msgstr "已讀"

#: src/components/BulletinBody.vue:30
msgid "未读"
msgstr "未讀"

#: src/components/BulletinBody.vue:29
msgid "{readNum} 人已读 | {isRead}"
msgstr "{readNum} 人已讀 | {isRead}"

#: src/components/BulletinBody.vue:12
#: src/pages/Info.vue:98
msgid "公告"
msgstr "公告"

#: src/pages/options/OptDev.vue:140
msgid "让我康康 ~"
msgstr "「讓我看看！！！」"

#: src/function/utils/appUtil.ts:110
msgid "加载历史消息失败（构建消息 ID 失败）"
msgstr "無法載入歷史訊息（構建訊息 ID 失敗）"

#: src/components/MsgBody.vue:256
msgid "定位图片失败"
msgstr "無法取得圖片"

#: src/function/connect.ts:85
#: src/function/connect.ts:155
#: src/function/connect.ts:161
msgid "连接失败"
msgstr "連線失敗"

#: src/function/model/msg-body.ts:233
msgid "合并消息层级过多，解析失败。"
msgstr "合併訊息層數過多，解析失敗。"

#: src/function/msg.ts:540
msgid "加载群文件失败（{code}）"
msgstr "無法載入群組儲存（{code}）"

#: src/function/msg.ts:735
#: src/function/msg.ts:763
msgid "获取消息失败，正在重试"
msgstr "無法取得訊息。正在重試……"

#: src/function/msg.ts:757
#: src/function/msg.ts:772
msgid "获取消息失败"
msgstr "無法取得訊息"

#: src/pages/Chat.vue:613
msgid "无法定位上下文"
msgstr "無法定位訊息"

#: src/pages/Chat.vue:1065
#: src/pages/Chat.vue:1080
#: src/pages/options/OptDev.vue:350
#: src/pages/options/OptDev.vue:373
msgid "复制成功"
msgstr "已複製"

#: src/pages/Chat.vue:1067
#: src/pages/Chat.vue:1082
msgid "复制失败"
msgstr "無法複製訊息"

#: src/pages/chat-view/Chat弹幕.vue:285
#: src/pages/chat-view/Chat终端.vue:363
msgid "图片过大"
msgstr "圖片過大"

#: src/pages/options/OptDev.vue:242
msgid "你不是人（逃"
msgstr "你不是人（逃"

#: src/registerServiceWorker.ts:14
msgid "应用已通过 service worker 服务从缓存中加载，更多信息请查看 https://goo.gl/AFskqB。"
msgstr "應用程式現在由 Service Worker 從快取中載入，更多資訊請參閱 https://goo.gl/AFskqB。"

#: src/registerServiceWorker.ts:17
msgid "Service worker 服务注册成功。"
msgstr "Service Worker 註冊成功。"

#: src/registerServiceWorker.ts:21
msgid "内容已完成缓存便于离线使用。"
msgstr "已將內容存入快取以便在離線時存取。"

#: src/registerServiceWorker.ts:24
msgid "正在下载新的内容 ……"
msgstr "正在下載新的內容……"

#: src/registerServiceWorker.ts:27
msgid "新的内容已缓存完成，请刷新以生效。"
msgstr "新的內容已存入快取，並在重新整理後生效。"

#: src/registerServiceWorker.ts:33
msgid "没有有效的网络连接，应用正在以离线模式运行。"
msgstr "沒有有效的網路連線，應用程式目前以離線模式維持運作。"

#: src/registerServiceWorker.ts:35
msgid "注册 service worker 时发生错误。"
msgstr "註冊 Service Worker 時發生錯誤"

#: src/registerServiceWorker.ts:32
msgid "没有网络"
msgstr "沒有網際網路連線"

#: src/components/MsgBody.vue:295
msgid "加载图片失败"
msgstr "圖片載入失敗"

#: src/pages/Chat.vue:116
#: src/pages/Chat.vue:193
msgid "精华消息"
msgstr "精華訊息"

#: src/pages/Messages.vue:17
#: src/pages/Messages.vue:22
msgid "消息"
msgstr "訊息"

#: src/pages/Chat.vue:130
msgid "{time}，由 {name} 设置"
msgstr "{time}，由 {name} 加入"

#: src/components/UpdatePan.vue:3
msgid "更新记录"
msgstr "更新記錄"

#: src/App.vue:408
#: src/function/utils/appUtil.ts:601
#: src/function/utils/appUtil.ts:626
#: src/pages/options/OptFunction.vue:178
msgid "知道了"
msgstr "已瞭解"

#: src/function/utils/appUtil.ts:610
#: src/function/utils/appUtil.ts:623
msgid "查看…"
msgstr "檢視…"

#: src/pages/Chat.vue:174
msgid "没有找到匹配的群成员"
msgstr "沒有找到符合條件的群組成員"

#: src/components/WelPan.vue:31
#: src/pages/options/OptView.vue:16
msgid "作者："
msgstr "作者："

#: src/pages/options/OptFunction.vue:86
msgid "小尾巴"
msgstr "小尾巴"

#: src/pages/options/OptFunction.vue:87
msgid "只会追加在最后一段话后面"
msgstr "附加在訊息結尾的文本"

#: src/components/MsgBody.vue:80
msgid "（点击查看合并转发消息）"
msgstr "（點選以檢視合併訊息）"

#: src/components/WelPan.vue:38
#: src/function/utils/appUtil.ts:649
msgid "好耶"
msgstr "好耶"

#: src/function/utils/appUtil.ts:645
msgid "好耶！Stapxs QQ Lite 已经被打开 {times} 次了！"
msgstr "好耶！Stapxs QQ Lite 已經被使用 {times} 次了！"

#: src/function/utils/appUtil.ts:646
msgid "真的不去点个 star 吗 ……"
msgstr "真的不想給我的專案一個 Star 嗎……"

#: src/function/utils/appUtil.ts:657
msgid "好喔"
msgstr "好ㄛ"

#: src/function/utils/appUtil.ts:654
msgid "不要"
msgstr "不要"

#: src/App.vue:404
#: src/pages/Chat.vue:1119
#: src/pages/options/OptFunction.vue:174
msgid "提醒"
msgstr "提示"

#: src/App.vue:405
msgid "连接密钥将以明文存储在浏览器 Cookie 中，请确保设备安全以防止密钥泄漏。"
msgstr "連線金鑰將以明文儲存在瀏覽器 Cookie 中，請確保裝置安全以防止金鑰洩漏。"

#: src/pages/options/OptAccount.vue:31
msgid "昵称"
msgstr "暱稱"

#: src/pages/options/OptAccount.vue:32
msgid "就只是个名字而已 ……"
msgstr "就只是個名字而已……"

#: src/pages/options/OptAccount.vue:39
msgid "签名"
msgstr "簽名檔"

#: src/pages/options/OptAccount.vue:40
msgid "啊啊吧啊吧（充滿智慧的眼神）吧啊吧（智慧的眼神）"
msgstr ""

#: src/pages/Messages.vue:43
msgid "系统通知"
msgstr "系統通知"

#: src/pages/options/OptDev.vue:129
msgid "输出调试信息"
msgstr "輸出偵錯資訊"

#: src/pages/options/OptDev.vue:130
msgid "到底用的什么版本呢 ……"
msgstr "我在用的是什麼版本？"

#: src/function/option.ts:511
#: src/function/utils/appUtil.ts:721
#: src/pages/Chat.vue:1000
#: src/pages/Chat.vue:1123
#: src/pages/options/OptDev.vue:354
#: src/pages/options/OptDev.vue:377
#: src/pages/options/OptDev.vue:396
#: src/pages/options/OptDev.vue:423
#: src/pages/options/OptInfo.vue:98
msgid "确定"
msgstr "確認"

#: src/pages/options/OptDev.vue:344
msgid "调试信息"
msgstr "偵錯資訊"

#: src/function/utils/appUtil.ts:721
msgid "继续"
msgstr "繼續"

#: src/pages/options/OptDev.vue:163
msgid "维护与备份"
msgstr "修復與備份"

#: src/pages/options/OptDev.vue:167
#: src/pages/options/OptDev.vue:367
msgid "导出设置项"
msgstr "匯出設定"

#: src/pages/options/OptDev.vue:168
msgid "tar zcvf config.tar.gz /localStorage"
msgstr "tar zcvf config.tar.gz /localStorage"

#: src/pages/options/OptDev.vue:177
#: src/pages/options/OptDev.vue:389
msgid "导入设置项"
msgstr "匯入設定"

#: src/pages/options/OptDev.vue:178
msgid "tar zxvf cache.tar.gz /localStorage"
msgstr "tar zxvf cache.tar.gz /localStorage"

#: src/function/option.ts:523
#: src/pages/Chat.vue:996
#: src/pages/Chat.vue:1137
#: src/pages/options/OptDev.vue:392
#: src/pages/options/OptDev.vue:438
#: src/pages/options/OptInfo.vue:116
msgid "取消"
msgstr "取消"

#: src/pages/options/OptDev.vue:407
msgid "导入设置项失败"
msgstr "匯入設定失敗"

#: src/pages/options/OptDev.vue:187
#: src/pages/options/OptDev.vue:420
msgid "重置应用"
msgstr "重設應用程式"

#: src/pages/options/OptDev.vue:188
msgid "sudo rm -rf /localStorage"
msgstr "sudo rm -rf /localStorage"

#: src/components/MsgBody.vue:83
msgid "（查看回复消息）"
msgstr "（檢視回覆訊息）"

#: src/pages/options/OptDev.vue:419
msgid "确认要重置应用吗，重置应用将会失去所有设置内容（包括设置的置顶群组），但是可能可以解决一些因为浏览器缓存导致的奇怪问题。"
msgstr "確認要重設應用程式嗎？重新設定應用程式時所有的設定將會被刪除（包括已釘選的群組），但是或許可以解決瀏覽器快取引起的問題。"

#: src/components/WelPan.vue:18
msgid "下面是一点点简单的使用引导 …… 如果不想看可以直接戳跳过（小声），但是也没多长啦"
msgstr "接下來是簡單的初始設定……可以直接略過（小聲），但是它不會很長唷~"

#: src/components/WelPan.vue:23
msgid "选择语言"
msgstr "選取語言"

#: src/components/WelPan.vue:39
msgid "该说的都说了 —— 那么就可以愉快的用啦（大声），如果遇到什么奇怪的问题，尽管来 GitHub 仓库问哦。"
msgstr "說了這麼多——是時候祝你使用愉快啦（大聲）。如果你遇到什麼奇怪的問題，都歡迎到 GitHub 專案儲存庫問哦~"

#: src/pages/Chat.vue:344
msgid "提及"
msgstr "標記對方"

#: src/pages/options/OptView.vue:158
msgid "页面"
msgstr "頁面"

#: src/pages/options/OptView.vue:162
msgid "缩放比例"
msgstr "縮放比例"

#: src/pages/options/OptView.vue:163
msgid "调整页面在移动端的缩放比例"
msgstr "調整頁面在行動裝置上的縮放比例"

#: src/pages/Messages.vue:188
msgid "已标记为已读"
msgstr "已標示為已讀"

#: src/pages/Chat.vue:399
msgid "群组"
msgstr "群組"

#: src/function/msg.ts:466
msgid "消息已转发"
msgstr "訊息已轉傳"

#: src/pages/Chat.vue:385
#: src/pages/Chat.vue:991
msgid "转发消息"
msgstr "轉傳到"

#: src/pages/options/OptFunction.vue:95
msgid "使用 shift enter 换行"
msgstr "啟用 Shift + Enter 換行"

#: src/pages/options/OptFunction.vue:96
msgid "I have a shift I have an enter ..."
msgstr "I have a shift I have an enter ..."

#: src/pages/options/OptFunction.vue:175
msgid "开启 shift enter 换行可能会在一些拥有特殊选词模式的输入法上出现问题，如 微软注音2003、新注音2003 和 绝大部分很早期的拼音输入法；如果在使用的时候遇到问题可以尝试关闭此功能。（或者换个更现代的输入法）"
msgstr "啟用 Shift + Enter 換行後可能會在使用一些具有特殊選詞方式的輸入法時遇到问题，如「微軟注音 2003」、「新注音 2003」以及絕大部分較為早期的拼音輸入法；如果在使用的時候遇到問題，可以嘗試關閉此功能（或者改用更現代的輸入法）。"

#: src/components/BulletinBody.vue:20
msgid "点击展开"
msgstr "點選以展開"

#: src/pages/options/OptDev.vue:48
msgid "消息类型"
msgstr "訊息類型"

#: src/pages/options/OptDev.vue:49
msgid "[CQ:faceid=1]你好啊👋，这个选项将会强制覆盖自动检测"
msgstr "[CQ:face,id=1] 嗨👋，這個選項將會強制取代預設設定"

#: src/pages/options/OptDev.vue:455
msgid "自动检测"
msgstr "自動偵測"

#: src/pages/options/OptInfo.vue:26
msgid "我的本群昵称"
msgstr "我在本群組的暱稱"

#: src/pages/options/OptInfo.vue:27
msgid "￡爺↘僞ηι慹著彡"
msgstr "￡爺↘僞ηι慹著彡"

#: src/pages/options/OptInfo.vue:17
msgid "群聊名称"
msgstr "群組名稱"

#: src/pages/options/OptInfo.vue:18
msgid "“你们真是害人不浅呐你们这个群”"
msgstr "“D7一下，你就知道”"

#: src/pages/chat-view/SystemNotice.vue:30
#: src/pages/chat-view/SystemNotice.vue:45
msgid "同意"
msgstr "同意"

#: src/pages/chat-view/SystemNotice.vue:29
#: src/pages/chat-view/SystemNotice.vue:44
msgid "拒绝"
msgstr "拒絕"

#: src/function/utils/appUtil.ts:613
msgid "刷新页面"
msgstr ""

#: src/pages/chat-view/SystemNotice.vue:14
msgid "系统消息"
msgstr "系統訊息"

#: src/pages/Chat.vue:348
msgid "移出群聊"
msgstr "移出群組"

#: src/pages/options/OptView.vue:85
msgid "自动跟随 GTK 主题"
msgstr "套用 GTK 主題的主題色"

#: src/pages/options/OptView.vue:86
msgid "（实验性）自动从 GTK 配置获取主题配色"
msgstr "（實驗設定）自動從 GTK 設定取得主題色"

#: src/pages/options/OptView.vue:101
msgid "自动跟随主题色"
msgstr "自動套用主題色"

#: src/pages/options/OptView.vue:102
msgid "自动获取的主题色设置并应用"
msgstr "使本程式的主題色與的設定一致"

#: src/pages/options/OptView.vue:127
msgid "背景图片"
msgstr "背景圖片"

#: src/pages/options/OptView.vue:128
msgid "嘿嘿嘿（痴呆"
msgstr "SS：「嘿嘿嘿（痴呆」"

#: src/pages/options/OptView.vue:136
msgid "背景模糊"
msgstr "背景模糊度"

#: src/pages/options/OptView.vue:137
msgid "什么都看不见了（恼"
msgstr "調整背景圖片的模糊程度，以免內容受到遮擋。"

#: src/pages/Chat.vue:1402
msgid "压缩图片失败"
msgstr "圖片壓縮失敗"

#: src/pages/Chat.vue:1397
msgid "正在压缩图片 ……"
msgstr "正在壓縮圖片……"

#: src/pages/Chat.vue:1120
msgid "真的要将 {user} 移出群聊吗"
msgstr "真的要將 {user} 移出群組嗎？"

#: src/function/option.ts:508
#: src/pages/options/OptDev.vue:153
msgid "重启应用"
msgstr "重新啟動應用程式"

#: src/pages/options/OptDev.vue:154
msgid "99% 的特性都能通过重启解决！"
msgstr "SS：「99% 的特性都能透過重啟解決！」"

#: src/function/utils/appUtil.ts:84
msgid "关闭"
msgstr "關閉"

#: src/function/utils/appUtil.ts:73
msgid "打开…"
msgstr "開啟…"

#: src/pages/Chat.vue:1353
msgid "发送文件失败"
msgstr "檔案傳送失敗"

#: src/pages/Chat.vue:1357
msgid "发送文件错误"
msgstr "檔案傳送時出錯"

#: src/pages/Chat.vue:1335
msgid "正在发送文件 {percent}%"
msgstr "正在傳送檔案 {percent}%"

#: src/components/MsgBody.vue:69
msgid "文件预览"
msgstr "檔案檢視"

#: src/function/msg.ts:1403
#: src/pages/Info.vue:194
msgid "临时会话"
msgstr "臨時對話"

#: src/function/msg.ts:125
msgid "添加好友 {name} 成功！"
msgstr "成功新增聯絡人 {name}！"

#: src/pages/Chat.vue:23
msgid "来自群聊：{group}"
msgstr "來自群組：{group}"

#: src/pages/Messages.vue:30
msgid "置顶"
msgstr "釘選"

#: src/pages/Messages.vue:31
msgid "取消置顶"
msgstr "取消釘選"

#: src/pages/Messages.vue:32
msgid "删除"
msgstr "删除"

#: src/pages/Messages.vue:33
msgid "标记已读"
msgstr "標示為已讀"

#: src/function/msg.ts:439
msgid "获取合并转发消息失败"
msgstr "無法取得合併訊息"

#: src/components/msg-component/CardMessage.vue:81
#: src/function/model/msg-body.ts:120
msgid "解析消息错误"
msgstr ""

#: src/function/utils/appUtil.ts:389
msgid "应用显示完成，应用初始化完成！欢迎使用 {name}！"
msgstr ""

#: src/function/model/msg-body.ts:433
msgid "刷新用户列表成功"
msgstr ""

#: src/function/connect.ts:177
msgid "正在断开链接……"
msgstr ""

#: src/pages/Chat.vue:332
msgid "下载图片"
msgstr ""

#: src/components/AboutPan.vue:43
#: src/components/AboutPan.vue:159
msgid "许可版权声明"
msgstr ""

#: src/components/DepPan.vue:21
msgid "你可以在项目仓库的依赖关系图中找到大部分依赖，而这里列出了一些不由包管理管理的依赖。"
msgstr ""

#: src/pages/options/OptView.vue:173
msgid "圆角适配"
msgstr ""

#: src/pages/options/OptView.vue:174
msgid "适配全面屏设备防止四角出界"
msgstr ""

#: src/pages/Chat.vue:42
#: src/pages/Chat.vue:252
msgid "加载中"
msgstr ""

#: src/function/utils/msgUtil.ts:345
msgid "发送中"
msgstr ""

#: src/components/DepPan.vue:12
msgid "驱动自"
msgstr ""

#: src/components/UpdatePan.vue:3
msgid "新版本"
msgstr ""

#: src/function/utils/appUtil.ts:604
msgid "下载更新…"
msgstr ""

#: src/function/utils/appUtil.ts:69
msgid "请不要在内嵌页面中输入敏感信息，内嵌页面并不安全。"
msgstr ""

#: src/pages/options/OptDev.vue:255
msgid "正在收集调试消息……"
msgstr ""

#: src/pages/options/OptAccount.vue:49
msgid "还没有连接到 OneBot 耶"
msgstr ""

#: src/pages/options/OptAccount.vue:50
msgid "去连接"
msgstr ""

#: src/pages/options/OptView.vue:198
msgid "不要点这个"
msgstr ""

#: src/pages/options/OptView.vue:199
msgid "啊吧啊吧（智慧）"
msgstr ""

#: src/pages/options/OptView.vue:120
#: src/pages/options/OptView.vue:151
msgid "默认"
msgstr ""

#: src/pages/Chat.vue:308
msgid "+ 1"
msgstr ""

#: src/pages/options/OptFunction.vue:72
msgid "关闭回应功能"
msgstr ""

#: src/pages/options/OptFunction.vue:73
msgid "如果你不想用它或者 bot 不支持，可以关闭这个功能"
msgstr ""

#: src/components/MsgBody.vue:426
msgid "（获取回复消息失败）"
msgstr ""

#: src/pages/options/OptDev.vue:11
msgid "进阶功能"
msgstr ""

#: src/pages/options/OptDev.vue:28
msgid "已启用"
msgstr ""

#: src/pages/options/OptDev.vue:29
msgid "已禁用"
msgstr ""

#: src/pages/options/OptDev.vue:59
msgid "解析配置"
msgstr ""

#: src/pages/options/OptDev.vue:60
msgid "不同框架之间的化学反应我们将其称之为达利园效应"
msgstr ""

#: src/pages/options/OptDev.vue:63
msgid "未连接"
msgstr ""

#: src/pages/options/OptDev.vue:453
msgid "CQ 码"
msgstr ""

#: src/pages/options/OptDev.vue:454
msgid "Array 数组"
msgstr ""

#: src/pages/Messages.vue:34
msgid "开启通知"
msgstr ""

#: src/pages/Messages.vue:35
msgid "关闭通知"
msgstr ""

#: src/pages/Chat.vue:218
msgid "已被禁言至：{time}"
msgstr ""

#: src/components/NoticeBody.vue:20
msgid "禁言了你"
msgstr ""

#: src/components/NoticeBody.vue:24
msgid "管理员禁言了"
msgstr ""

#: src/components/NoticeBody.vue:29
msgid "管理员解除了 {name} 的禁言"
msgstr ""

#: src/components/NoticeBody.vue:80
msgid "天"
msgstr ""

#: src/components/NoticeBody.vue:83
msgid "小时"
msgstr ""

#: src/components/NoticeBody.vue:86
msgid "分钟"
msgstr ""

#: src/components/NoticeBody.vue:89
msgid "秒"
msgstr ""

#: src/components/NoticeBody.vue:29
#: src/function/msg.ts:198
msgid "你"
msgstr ""

#: src/pages/options/OptInfo.vue:34
msgid "退出群聊"
msgstr ""

#: src/pages/options/OptInfo.vue:95
msgid "确定要退出群聊吗？"
msgstr ""

#: src/pages/chat-view/SystemNotice.vue:25
#: src/pages/chat-view/SystemNotice.vue:40
msgid "留言"
msgstr ""

#: src/pages/chat-view/SystemNotice.vue:22
msgid "请求加为好友"
msgstr ""

#: src/pages/chat-view/SystemNotice.vue:37
msgid "邀请你加入群聊"
msgstr ""

#: src/components/MsgBody.vue:195
msgid "全体成员"
msgstr ""

#: src/pages/options/OptView.vue:184
msgid "置顶窗口"
msgstr ""

#: src/pages/options/OptView.vue:185
msgid "你也不想想让 ta 知道你不在看消息吧 ~"
msgstr ""

#: src/pages/options/OptView.vue:152
msgid "完整模糊"
msgstr ""

#: src/pages/options/OptView.vue:153
msgid "完整透明"
msgstr ""

#: src/pages/options/OptView.vue:147
msgid "窗口透明模式"
msgstr ""

#: src/pages/options/OptView.vue:148
msgid "怎么看光还要挑三拣四的"
msgstr ""

#: src/function/option.ts:498
msgid "此操作将在重启应用后生效，现在就要重启吗？"
msgstr ""

#: src/function/option.ts:502
msgid "此操作仅供娱乐，将会在下次关闭时恢复。"
msgstr ""

#: src/pages/options/OptAccount.vue:66
# 连接正常（{timeout} > {step} s）
msgid "连接_normal"
msgstr ""

#: src/pages/options/OptAccount.vue:66
# 连接延迟（{timeout} > {step} s）
msgid "连接_slow"
msgstr ""

#: src/pages/options/OptAccount.vue:66
# 正在收集连接信息……
msgid "连接_loading"
msgstr ""

#: src/pages/Chat.vue:196
msgid "搜索消息"
msgstr ""

#: src/pages/Chat.vue:154
msgid "搜索已加载的消息"
msgstr ""

#: src/function/utils/appUtil.ts:392
#: src/function/utils/appUtil.ts:459
#: src/pages/Options.vue:17
msgid "关于"
msgstr ""

#: src/function/utils/appUtil.ts:393
msgid "检查更新…"
msgstr ""

#: src/function/utils/appUtil.ts:394
msgid "隐藏"
msgstr ""

#: src/function/utils/appUtil.ts:395
msgid "隐藏其他"
msgstr ""

#: src/function/utils/appUtil.ts:396
msgid "全部显示"
msgstr ""

#: src/function/utils/appUtil.ts:397
msgid "退出"
msgstr ""

#: src/function/utils/appUtil.ts:407
msgid "账户"
msgstr ""

#: src/function/connect.ts:135
#: src/function/utils/appUtil.ts:408
msgid "连接"
msgstr ""

#: src/function/msg.ts:1017
#: src/function/utils/appUtil.ts:410
msgid "用户列表（{count}）"
msgstr ""

#: src/function/utils/appUtil.ts:411
msgid "刷新列表…"
msgstr ""

#: src/function/utils/appUtil.ts:409
msgid "登出"
msgstr ""

#: src/function/utils/appUtil.ts:399
msgid "编辑"
msgstr ""

#: src/function/utils/appUtil.ts:400
msgid "撤销"
msgstr ""

#: src/function/utils/appUtil.ts:401
msgid "重做"
msgstr ""

#: src/function/utils/appUtil.ts:402
msgid "剪切"
msgstr ""

#: src/function/utils/appUtil.ts:404
msgid "粘贴"
msgstr ""

#: src/function/utils/appUtil.ts:405
msgid "全选"
msgstr ""

#: src/function/utils/appUtil.ts:413
msgid "帮助"
msgstr ""

#: src/function/utils/appUtil.ts:414
msgid "帮助文档"
msgstr ""

#: src/function/utils/appUtil.ts:415
msgid "在 Github 上反馈问题"
msgstr ""

#: src/function/utils/appUtil.ts:416
msgid "许可协议"
msgstr ""

#: src/pages/Chat.vue:191
msgid "戳一戳"
msgstr ""

#: src/function/utils/msgUtil.ts:230
msgid "语音"
msgstr ""

#: src/function/utils/msgUtil.ts:231
msgid "视频"
msgstr ""

#: src/pages/Chat.vue:159
msgid "合并转发"
msgstr ""

#: src/pages/Chat.vue:163
msgid "截图"
msgstr ""

msgid "“{body}” 以及 {num} 条消息"
msgstr ""`,at=`msgid ""
msgstr ""
"POT-Creation-Date: \\n"
"MIME-Version: 1.0\\n"
"Content-Type: text/plain; charset=utf-8\\n"
"Content-Transfer-Encoding: 8bit\\n"
"Language: zh_YUE\\n"
"PO-Revision-Date: 2023-05-24\\n"
"Language-Team: Doodle Huang (doodlehuang)\\n"

#: src/components/AboutPan.vue:22
#: src/components/WelPan.vue:13
#: src/function/utils/appUtil.ts:389
#: src/function/utils/appUtil.ts:391
#: src/function/utils/appUtil.ts:392
#: src/function/utils/appUtil.ts:394
#: src/function/utils/appUtil.ts:397
#: src/function/utils/appUtil.ts:459
#: src/pages/options/OptFunction.vue:139
msgid "Stapxs QQ Lite"
msgstr "Stapxs QQ Lite"

#: src/components/WelPan.vue:31
#: src/pages/options/OptView.vue:16
# 这是当前语言的作者，请自行修改
msgid "Stapx Steve"
msgstr "Doodle Huang"

#: src/pages/options/OptView.vue:17
# 这是当前语言的介绍，请自行发挥
msgid "你好世界！这是 Stapxs QQ Lite 的默认简体中文。"
msgstr "你好！呢個係 Stapxs QQ Lite 嘅廣東話版。"

#: src/pages/options/OptView.vue:15
# 这是当前语言的名字，请自行修改
msgid "简体中文"
msgstr "粵語（香港）"

#: src/pages/Friends.vue:23
#: src/pages/Friends.vue:32
#: src/pages/Chat.vue:388
#: src/pages/Info.vue:85
msgid "搜索 ……"
msgstr "搜尋 ……"

#: src/pages/Info.vue:64
msgid "地区"
msgstr "地區"

#: src/pages/Info.vue:53
msgid "生日"
msgstr "生日"

#: src/pages/Info.vue:59
msgid "鼠&牛&虎&兔&龙&蛇&马&羊&猴&鸡&狗&猪"
msgstr "鼠&牛&虎&兔&龍&蛇&馬&羊&猴&雞&狗&豬"

#: src/pages/Info.vue:75
#: src/pages/Info.vue:120
#: src/pages/Options.vue:12
msgid "设置"
msgstr "Settings"

#: src/components/FileBody.vue:22
msgid "天后"
msgstr "日"

#: src/pages/Info.vue:108
#: src/pages/Chat.vue:183
#: src/function/utils/msgUtil.ts:232
msgid "文件"
msgstr "File"

#: src/components/FileBody.vue:24
msgid "共 {num} 个文件"
msgstr "總共有 {num} 個 file"

#: src/pages/Info.vue:12
msgid "群资料"
msgstr "Group 資料"

#: src/pages/Info.vue:26
msgid "介绍"
msgstr "簡介"

#: src/pages/Info.vue:45
#: src/pages/Info.vue:48
msgid "签名"
msgstr "Bio"

#: src/pages/Info.vue:82
msgid "成员"
msgstr "成員"

#: src/pages/Info.vue:29
msgid "群主很懒，还没有群介绍哦～"
msgstr "Group owner 好懶，仲未寫簡介"

#: src/pages/Info.vue:50
msgid "其他信息"
msgstr "其他資訊"

#: src/pages/Info.vue:13
msgid "好友"
msgstr "Friend"

#: src/components/FacePan.vue:27
# 这儿的空间比较小，请尽量使用更短的句子（或者是词）
msgid "一无所有"
msgstr "無表情"

#: src/pages/Chat.vue:187
#: src/function/utils/msgUtil.ts:226
msgid "表情"
msgstr "表情"

#: src/components/MsgBody.vue:35
#: src/pages/Chat.vue:179
#: src/function/utils/msgUtil.ts:229
msgid "图片"
msgstr "圖"

#: src/pages/Chat.vue:285
msgid "{time} 加入群聊"
msgstr "{time} 入 group"

#: src/pages/Chat.vue:26
#: src/pages/chat-view/Chat弹幕.vue:152
msgid "上次消息 - {time}"
msgstr "上條訊息 - {time}"

#: src/components/NoticeBody.vue:18
#: src/pages/Info.vue:36
#: src/pages/Chat.vue:280
msgid "成员类型_admin"
msgstr "管理員"

#: src/pages/Chat.vue:280
msgid "成员类型_owner"
msgstr "Group Owner"

#: src/pages/Chat.vue:247
msgid "合并消息"
msgstr "合併訊息"

#: src/pages/Chat.vue:324
#: src/pages/options/OptDev.vue:347
#: src/pages/options/OptDev.vue:370
#: src/function/utils/appUtil.ts:403
msgid "复制"
msgstr "Copy"

#: src/pages/Chat.vue:328
msgid "复制选中文本"
msgstr "Copy 揀中文本"

#: src/pages/Chat.vue:316
msgid "转发"
msgstr "轉傳"

#: src/pages/Chat.vue:320
msgid "多选"
msgstr "多選"

#: src/pages/Chat.vue:312
msgid "回复"
msgstr "回覆"

#: src/pages/Chat.vue:340
msgid "撤回"
msgstr "收回"

#: src/pages/Chat.vue:48
msgid "没有更多消息了"
msgstr "無更多訊息"

#: src/pages/Chat.vue:30
#: src/pages/chat-view/Chat弹幕.vue:157
msgid "暂无消息"
msgstr "暫無訊息"

#: src/pages/Chat.vue:128
#: src/pages/Chat.vue:362
msgid "发送"
msgstr "Send"

#: src/pages/Chat.vue:361
msgid "发送图片"
msgstr "傳送圖片"

#: src/pages/Friends.vue:84
#: src/pages/Messages.vue:61
msgid "选择联系人开始聊天"
msgstr "揀人傾計"

#: src/components/MsgBody.vue:86
msgid "不支持的消息"
msgstr "未 support 到嘅訊息"

#: src/components/MsgBody.vue:35
#: src/components/MsgBody.vue:305
msgid "预览图片"
msgstr "圖片 preview"

#: src/components/AboutPan.vue:25
msgid "一个兼容 OneBot 的非官方网页版 QQ 客户端"
msgstr "一個同 OneBot 相容嘅非官方網頁 QQ client"

#: src/pages/Friends.vue:17
msgid "联系人"
msgstr "聯絡人"

#: src/App.vue:46
msgid "连接地址"
msgstr "連接地址"

#: src/App.vue:62
msgid "自动连接"
msgstr "自動連接"

#: src/App.vue:65
msgid "连接"
msgstr "連接"

#: src/App.vue:69
msgid "如何连接"
msgstr "如何連接"

#: src/App.vue:51
msgid "连接密钥"
msgstr "連接 token"

#: src/App.vue:57
msgid "记住密码"
msgstr "記住密碼"

#: src/App.vue:42
msgid "连接到 OneBot"
msgstr "連接到 OneBot"

#: src/App.vue:38
msgid "主页"
msgstr "Home"

#: src/pages/options/OptAccount.vue:54
msgid "后端信息"
msgstr "Backend 資訊"

#: src/pages/options/OptAccount.vue:61
msgid "这是你连接的 QQ Bot 的相关信息"
msgstr "呢個係你連接的 QQ Bot 的相關信息"

#: src/pages/options/OptAccount.vue:27
msgid "账号设置"
msgstr "Account Settings"

#: src/pages/Options.vue:13
msgid "账号"
msgstr "Account"

#: src/pages/Options.vue:16
msgid "高级"
msgstr "進階"

#: src/pages/Options.vue:15
msgid "功能"
msgstr "功能"

#: src/pages/Options.vue:14
msgid "界面"
msgstr "介面"

#: src/pages/options/OptDev.vue:111
msgid "应用消息测试"
msgstr "App 訊息測試"

#: src/pages/options/OptDev.vue:112
msgid "#$&*#$= ……"
msgstr "#$&*#$= ……"

#: src/pages/options/OptFunction.vue:58
msgid "消息防撤回"
msgstr "防止訊息收回"

#: src/pages/options/OptFunction.vue:59
msgid "说出去的话就像泼出去的水 ……"
msgstr "黑猫警長最愛"

#: src/pages/options/OptFunction.vue:59
msgid "说了不做这功能就是不做"
msgstr "唔想得罪 Tencent，你自己 cap 圖好過喇"

#: src/pages/options/OptFunction.vue:71
msgid "禁用图片发送框"
msgstr "停用 send 圖 box"

#: src/pages/options/OptFunction.vue:72
msgid "你也向往自由吗？"
msgstr "反正 SS 都話佢唔用呢個 box 嘅"

#: src/pages/options/OptView.vue:116
msgid "消息页面主题"
msgstr ""

#: src/pages/options/OptView.vue:117
msgid "一些好玩的主题！"
msgstr ""

#: src/pages/options/OptDev.vue:28
msgid "兼容选项"
msgstr "相容性選項"

#: src/pages/options/OptDev.vue:35
msgid "发送心跳包"
msgstr "Send 心跳"

#: src/pages/options/OptDev.vue:36
msgid "没救了，拖出去吧"
msgstr "Call 999 save your life"

#: src/pages/options/OptDev.vue:30
msgid "这儿是兼容性相关的高级选项，包括 bot 附加功能、热插拔组件等。"
msgstr "呢度係同 bot 相容性有關嘅進階選項，包括一哋 bot 的附加功能等。"

#: src/pages/options/OptDev.vue:87
msgid "禁用消息渲染"
msgstr "停用訊息 render"

#: src/pages/options/OptDev.vue:88
msgid "点击进行 CAPTCHA 验证"
msgstr "reCaptcha"

#: src/pages/options/OptDev.vue:70
msgid "开发者选项"
msgstr "開發人員選項"

#: src/pages/options/OptDev.vue:74
msgid "日志等级"
msgstr "Log level"

#: src/pages/options/OptDev.vue:81
msgid "全部"
msgstr "All"

#: src/pages/options/OptDev.vue:79
msgid "调试"
msgstr "Debug"

#: src/pages/options/OptDev.vue:78
msgid "错误"
msgstr "Error"

#: src/pages/options/OptDev.vue:80
msgid "基本"
msgstr "Info"

#: src/pages/options/OptDev.vue:75
msgid "ReferenceError: moYu is not defined"
msgstr "小心老闆叫你 OT debug 囉"

#: src/pages/options/OptFunction.vue:29
msgid "通知所有新消息"
msgstr "通知所有訊息"

#: src/pages/options/OptFunction.vue:30
msgid "让暴风雨来得更猛烈些吧！"
msgstr "電 腦 大 爆 炸！！！"

#: src/pages/options/OptFunction.vue:15
msgid "禁用通知"
msgstr "停用通知"

#: src/pages/options/OptFunction.vue:16
msgid "好嘛 …… 不烦你 ……"
msgstr "遠離煩人巴打 :sosad:"

#: src/pages/options/OptDev.vue:99
msgid "调试"
msgstr "Debug"

#: src/pages/options/OptDev.vue:103
msgid "发送原始消息"
msgstr "傳送原始訊息"

#: src/pages/options/OptDev.vue:104
msgid "咻 ——"
msgstr "咻 ——"

#: src/pages/options/OptFunction.vue:41
msgid "聊天选项"
msgstr "聊天選項"

#: src/pages/options/OptFunction.vue:107
msgid "分析信息"
msgstr "Analytics"

#: src/pages/options/OptFunction.vue:132
msgid "后端类型分析"
msgstr "Backend 類型分析"

#: src/pages/options/OptFunction.vue:133
msgid "在连接后上传所使用的 bot 的类型分析"
msgstr "喺連接後 upload bot 類型"

#: src/pages/options/OptFunction.vue:123
msgid "我们使用 Umami 对应用的使用情况进行分析，它将不会上传精确到用户的信息；你也可以在这儿控制分析功能的开关和额外分析项。同时我们的统计信息公开展示在此处以便查阅："
msgstr "我哋使用 Umami 對 App 嘅使用情況進行分析，所有分析資訊唔會精確到使用者，而且僅用於進行使用情況分析。你可以喺呢度控制分析功能的開關和額外分析項。"

#: src/pages/options/OptFunction.vue:126
msgid "访问统计信息" 
msgstr ""

#: src/pages/options/OptFunction.vue:112
msgid "关闭分析"
msgstr "停用 Analytics"

#: src/pages/options/OptFunction.vue:113
msgid "真的不让看吗（小声"
msgstr "真係不俾睇？（小聲"

#: src/pages/options/OptFunction.vue:11
msgid "通知选项"
msgstr "通知選項"

#: src/components/AboutPan.vue:29
msgid "访问 GitHub 仓库"
msgstr "訪問 GitHub Repo"

#: src/pages/options/OptView.vue:51
msgid "自动深色模式"
msgstr "自動開啓深色模式"

#: src/pages/options/OptView.vue:51
msgid "Biubiu ——，自动变黑！"
msgstr "點解霎時間會冇電嘅？"

#: src/pages/options/OptView.vue:38
msgid "深色模式"
msgstr "深色模式"

#: src/pages/options/OptView.vue:39
msgid "是五彩斑斓的黑色！"
msgstr "無間道咁黑囉"

#: src/pages/options/OptView.vue:11
msgid "本土化"
msgstr "本地化"

#: src/pages/options/OptView.vue:23
msgid "语言（Language）"
msgstr "語言（Language）"

#: src/pages/options/OptView.vue:24
msgid "喵喵喵喵？"
msgstr "喵喵喵喵？"

#: src/pages/options/OptView.vue:33
msgid "主题与颜色"
msgstr "主題和顏色"

#: src/pages/options/OptView.vue:66
msgid "主题色"
msgstr "主題色"

#: src/pages/options/OptView.vue:67
msgid "换个心情 🎵 ~"
msgstr "換個心情 🎵 ~"

#: src/pages/options/OptDev.vue:119
msgid "输出运行时"
msgstr "輸出 runtime"

#: src/pages/options/OptDev.vue:120
msgid "全都吐出来！"
msgstr "全都吐出來！"

#: src/pages/options/OptDev.vue:123
#: src/pages/options/OptDev.vue:133
#: src/pages/options/OptDev.vue:157
#: src/pages/options/OptDev.vue:171
#: src/pages/options/OptDev.vue:181
#: src/pages/options/OptDev.vue:191
msgid "执行"
msgstr "Run"

#: src/components/NoticeBody.vue:12
msgid "撤回了一条消息"
msgstr "收回咗條訊息"

#: src/components/BulletinBody.vue:30
msgid "已读"
msgstr "已讀"

#: src/components/BulletinBody.vue:30
msgid "未读"
msgstr "未讀"

#: src/components/BulletinBody.vue:29
msgid "{readNum} 人已读 | {isRead}"
msgstr "{readNum} 人已讀 | {isRead}"

#: src/components/BulletinBody.vue:12
#: src/pages/Info.vue:98
msgid "公告"
msgstr "公告"

#: src/pages/options/OptDev.vue:140
msgid "让我康康 ~"
msgstr "點解我要 OT 啊？"

#: src/function/utils/appUtil.ts:110
msgid "加载历史消息失败（构建消息 ID 失败）"
msgstr "載入歷史訊息失敗（構建消息 ID 失敗）"

#: src/components/MsgBody.vue:256
msgid "定位图片失败"
msgstr "定位圖片失敗"

#: src/function/connect.ts:85
#: src/function/connect.ts:155
#: src/function/connect.ts:161
msgid "连接失败"
msgstr "連接失敗"

#: src/function/model/msg-body.ts:233
msgid "合并消息层级过多，解析失败。"
msgstr "合併訊息層數過多，解析失敗。"

#: src/function/msg.ts:540
msgid "加载群文件失败（{code}）"
msgstr "無法載入 group file（{code}）"

#: src/function/msg.ts:735
#: src/function/msg.ts:763
msgid "获取消息失败，正在重试"
msgstr "獲取訊息失敗，正在重試"

#: src/function/msg.ts:757
#: src/function/msg.ts:772
msgid "获取消息失败"
msgstr "獲取訊息失敗"

#: src/pages/Chat.vue:613
msgid "无法定位上下文"
msgstr "無法定位上下文"

#: src/pages/Chat.vue:1065
#: src/pages/Chat.vue:1080
#: src/pages/options/OptDev.vue:350
#: src/pages/options/OptDev.vue:373
msgid "复制成功"
msgstr "成功 copy"

#: src/pages/Chat.vue:1067
#: src/pages/Chat.vue:1082
msgid "复制失败"
msgstr "Copy 失敗"

#: src/pages/chat-view/Chat弹幕.vue:285
#: src/pages/chat-view/Chat终端.vue:363
msgid "图片过大"
msgstr "圖片過大"

#: src/pages/options/OptDev.vue:242
msgid "你不是人（逃"
msgstr "你不是人（逃"

#: src/registerServiceWorker.ts:14
msgid "应用已通过 service worker 服务从缓存中加载，更多信息请查看 https://goo.gl/AFskqB。"
msgstr "App 已經通過 service worker 從 cache 中加載，更多資訊請參閱 https://goo.gl/AFskqB。"

#: src/registerServiceWorker.ts:17
msgid "Service worker 服务注册成功。"
msgstr "Service worker 註冊成功。"

#: src/registerServiceWorker.ts:21
msgid "内容已完成缓存便于离线使用。"
msgstr "已將內容存入 cache 以便離線時使用。"

#: src/registerServiceWorker.ts:24
msgid "正在下载新的内容 ……"
msgstr "正在 download 新的內容 ……"

#: src/registerServiceWorker.ts:27
msgid "新的内容已缓存完成，请刷新以生效。"
msgstr "新的內容已存入 cache，reload 後生效。"

#: src/registerServiceWorker.ts:33
msgid "没有有效的网络连接，应用正在以离线模式运行。"
msgstr "未連上網絡，app 正在以離線模式運行。"

#: src/registerServiceWorker.ts:35
msgid "注册 service worker 时发生错误。"
msgstr "註冊 service worker 時出錯"

#: src/registerServiceWorker.ts:32
msgid "没有网络"
msgstr "未連上網絡"

#: src/components/MsgBody.vue:295
msgid "加载图片失败"
msgstr "圖片載入失敗"

#: src/pages/Chat.vue:116
#: src/pages/Chat.vue:193
msgid "精华消息"
msgstr "精華訊息"

#: src/pages/Messages.vue:17
#: src/pages/Messages.vue:22
msgid "消息"
msgstr "訊息"

#: src/pages/Chat.vue:130
msgid "{time}，由 {name} 设置"
msgstr "{time}, set by {name}"

#: src/components/UpdatePan.vue:3
msgid "更新记录"
msgstr "Update 記錄"

#: src/App.vue:408
#: src/function/utils/appUtil.ts:601
#: src/function/utils/appUtil.ts:626
#: src/pages/options/OptFunction.vue:178
msgid "知道了"
msgstr "OK"

#: src/function/utils/appUtil.ts:610
#: src/function/utils/appUtil.ts:623
msgid "查看…"
msgstr "Check…"

#: src/pages/Chat.vue:174
msgid "没有找到匹配的群成员"
msgstr "搵唔到要求嘅 group member"

#: src/components/WelPan.vue:31
#: src/pages/options/OptView.vue:16
msgid "作者："
msgstr "作者："

#: src/pages/options/OptFunction.vue:86
msgid "小尾巴"
msgstr "尾"

#: src/pages/options/OptFunction.vue:87
msgid "只会追加在最后一段话后面"
msgstr "Add 喺訊息結尾嘅文字"

#: src/components/MsgBody.vue:80
msgid "（点击查看合并转发消息）"
msgstr "（按此看合併訊息）"

#: src/components/WelPan.vue:38
#: src/function/utils/appUtil.ts:649
msgid "好耶"
msgstr "好啊"

#: src/function/utils/appUtil.ts:645
msgid "好耶！Stapxs QQ Lite 已经被打开 {times} 次了！"
msgstr "好啊！Stapxs QQ Lite 已經俾你用咗 {times} 次喇！"

#: src/function/utils/appUtil.ts:646
msgid "真的不去点个 star 吗 ……"
msgstr "Star 下我哋嘅 project 好唔好啊？"

#: src/function/utils/appUtil.ts:657
msgid "好喔"
msgstr "好啊"

#: src/function/utils/appUtil.ts:654
msgid "不要"
msgstr "唔好"

#: src/App.vue:404
#: src/pages/Chat.vue:1119
#: src/pages/options/OptFunction.vue:174
msgid "提醒"
msgstr "提示"

#: src/App.vue:405
msgid "连接密钥将以明文存储在浏览器 Cookie 中，请确保设备安全以防止密钥泄漏。"
msgstr "連接 token 會以明文儲存喺 browser 嘅 cookies 入面，請確保裝置安全以避免 token 洩漏。"

#: src/pages/options/OptAccount.vue:31
msgid "昵称"
msgstr "Nickname"

#: src/pages/options/OptAccount.vue:32
msgid "就只是个名字而已 ……"
msgstr "淨係個名啫 ……"

#: src/pages/options/OptAccount.vue:39
msgid "签名"
msgstr "Bio"

#: src/pages/options/OptAccount.vue:40
msgid "啊吧啊吧（智慧的眼神）"
msgstr "自我介紹資訊"

#: src/pages/Messages.vue:43
msgid "系统通知"
msgstr "系統通知"

#: src/pages/options/OptDev.vue:129
msgid "输出调试信息"
msgstr "輸出"

#: src/pages/options/OptDev.vue:130
msgid "到底用的什么版本呢 ……"
msgstr "我喺度用緊乜嘢啊……"

#: src/function/option.ts:511
#: src/function/utils/appUtil.ts:721
#: src/pages/Chat.vue:1000
#: src/pages/Chat.vue:1123
#: src/pages/options/OptDev.vue:354
#: src/pages/options/OptDev.vue:377
#: src/pages/options/OptDev.vue:396
#: src/pages/options/OptDev.vue:423
#: src/pages/options/OptInfo.vue:98
msgid "确定"
msgstr "確認"

#: src/pages/options/OptDev.vue:344
msgid "调试信息"
msgstr "排錯訊息"

#: src/function/utils/appUtil.ts:721
msgid "继续"
msgstr "繼續"

#: src/pages/options/OptDev.vue:163
msgid "维护与备份"
msgstr "修復和備份"

#: src/pages/options/OptDev.vue:167
#: src/pages/options/OptDev.vue:367
msgid "导出设置项"
msgstr "匯出設定"

#: src/pages/options/OptDev.vue:168
msgid "tar zcvf config.tar.gz /localStorage"
msgstr "tar zcvf config.tar.gz /localStorage"

#: src/pages/options/OptDev.vue:177
#: src/pages/options/OptDev.vue:389
msgid "导入设置项"
msgstr "匯入設定"

#: src/pages/options/OptDev.vue:178
msgid "tar zxvf cache.tar.gz /localStorage"
msgstr "tar zxvf cache.tar.gz /localStorage"

#: src/function/option.ts:523
#: src/pages/Chat.vue:996
#: src/pages/Chat.vue:1137
#: src/pages/options/OptDev.vue:392
#: src/pages/options/OptDev.vue:438
#: src/pages/options/OptInfo.vue:116
msgid "取消"
msgstr "取消"

#: src/pages/options/OptDev.vue:407
msgid "导入设置项失败"
msgstr "匯入設定時出錯"

#: src/pages/options/OptDev.vue:187
#: src/pages/options/OptDev.vue:420
msgid "重置应用"
msgstr "重設 app"

#: src/pages/options/OptDev.vue:188
msgid "sudo rm -rf /localStorage"
msgstr "sudo rm -rf /localStorage"

#: src/components/MsgBody.vue:83
msgid "（查看回复消息）"
msgstr "（查看回覆訊息）"

#: src/pages/options/OptDev.vue:419
msgid "确认要重置应用吗，重置应用将会失去所有设置内容（包括设置的置顶群组），但是可能可以解决一些因为浏览器缓存导致的奇怪问题。"
msgstr "真係要重設 app？重設 app 會刪除你所有嘅 settings（包括置頂嘅 group），不過或許可以解決一啲由 browser cache 引發嘅問題。"

#: src/components/WelPan.vue:18
msgid "下面是一点点简单的使用引导 …… 如果不想看可以直接戳跳过（小声），但是也没多长啦"
msgstr "下面係一個簡單嘅初次設定，你可以直接 skip 咗佢，但係佢其實好簡短。"

#: src/components/WelPan.vue:23
msgid "选择语言"
msgstr "選擇語言"

#: src/components/WelPan.vue:39
msgid "该说的都说了 —— 那么就可以愉快的用啦（大声），如果遇到什么奇怪的问题，尽管来 GitHub 仓库问哦。"
msgstr "係時候好好享受我哋嘅 app 喇！如果你遇到任何問題，都歡迎到我哋嘅 GitHub repository 度講！"

#: src/pages/Chat.vue:344
msgid "提及"
msgstr "Tag"

#: src/pages/options/OptView.vue:158
msgid "页面"
msgstr "頁面"

#: src/pages/options/OptView.vue:162
msgid "缩放比例"
msgstr "縮放比例"

#: src/pages/options/OptView.vue:163
msgid "调整页面在移动端的缩放比例"
msgstr "調整頁面在流動裝置上的縮放比例"

#: src/pages/Messages.vue:188
msgid "已标记为已读"
msgstr "已標示為已讀"

#: src/pages/Chat.vue:399
msgid "群组"
msgstr "Group"

#: src/function/msg.ts:466
msgid "消息已转发"
msgstr "訊息已轉傳"

#: src/pages/Chat.vue:385
#: src/pages/Chat.vue:991
msgid "转发消息"
msgstr "轉傳到"

#: src/pages/options/OptFunction.vue:95
msgid "使用 shift enter 换行"
msgstr "使用 Shift + Enter 換行"

#: src/pages/options/OptFunction.vue:96
msgid "I have a shift I have an enter ..."
msgstr "I have a shift I have an enter ..."

#: src/pages/options/OptFunction.vue:175
msgid "开启 shift enter 换行可能会在一些拥有特殊选词模式的输入法上出现问题，如 微软注音2003、新注音2003 和 绝大部分很早期的拼音输入法；如果在使用的时候遇到问题可以尝试关闭此功能。（或者换个更现代的输入法）"
msgstr "啟用 Shift + Enter 換行後可能會在使用一些具有特殊選詞方式的輸入法時遇到问题，如7 內建的繁體中文輸入法 以及 絕大部分很早期的拼音輸入法；如果在使用的時候遇到問題，可以嘗試關閉此功能。（或者改用更現代的輸入法）"

#: src/components/BulletinBody.vue:20
msgid "点击展开"
msgstr "點按以展開"

#: src/pages/options/OptDev.vue:48
msgid "消息类型"
msgstr "訊息類型"

#: src/pages/options/OptDev.vue:49
msgid "[CQ:faceid=1]你好啊👋，这个选项将会强制覆盖自动检测"
msgstr "[CQ:face,id=1]你好啊👋，這個選項將會強制取代預設設定"

#: src/pages/options/OptDev.vue:455
msgid "自动检测"
msgstr "自動偵測"

#: src/pages/options/OptInfo.vue:26
msgid "我的本群昵称"
msgstr "我喺呢個群組嘅暱稱"

#: src/pages/options/OptInfo.vue:27
msgid "￡爺↘僞ηι慹著彡"
msgstr "￡爺↘僞ηι慹著彡"

#: src/pages/options/OptInfo.vue:17
msgid "群聊名称"
msgstr "群組名稱"

#: src/pages/options/OptInfo.vue:18
msgid "“你们真是害人不浅呐你们这个群”"
msgstr "“D7一下，你就知道”"

#: src/pages/chat-view/SystemNotice.vue:30
#: src/pages/chat-view/SystemNotice.vue:45
msgid "同意"
msgstr "同意"

#: src/pages/chat-view/SystemNotice.vue:29
#: src/pages/chat-view/SystemNotice.vue:44
msgid "拒绝"
msgstr "拒絕"

#: src/function/utils/appUtil.ts:613
msgid "刷新页面"
msgstr ""

#: src/pages/chat-view/SystemNotice.vue:14
msgid "系统消息"
msgstr "系統訊息"

#: src/pages/Chat.vue:348
msgid "移出群聊"
msgstr "踢出群組"

#: src/pages/options/OptView.vue:85
msgid "自动跟随 GTK 主题"
msgstr "跟隨 GTK 主題設定"

#: src/pages/options/OptView.vue:86
msgid "（实验性）自动从 GTK 配置获取主题配色"
msgstr "（實驗設定）自動使用 GTK 設定的主題色"

#: src/pages/options/OptView.vue:101
msgid "自动跟随主题色"
msgstr "跟隨主題色"

#: src/pages/options/OptView.vue:102
msgid "自动获取的主题色设置并应用"
msgstr "自動取得的主題色並套用到本程式"

#: src/pages/options/OptView.vue:127
msgid "背景图片"
msgstr "背景圖片"

#: src/pages/options/OptView.vue:128
msgid "嘿嘿嘿（痴呆"
msgstr "SS：嘿嘿嘿（cs"

#: src/pages/options/OptView.vue:136
msgid "背景模糊"
msgstr "背景模糊"

#: src/pages/options/OptView.vue:137
msgid "什么都看不见了（恼"
msgstr "調較背景圖片的模糊程度，以防內容被遮擋。"

#: src/pages/Chat.vue:1402
msgid "压缩图片失败"
msgstr "圖片壓縮失敗"

#: src/pages/Chat.vue:1397
msgid "正在压缩图片 ……"
msgstr "正在壓縮圖片……"

#: src/pages/Chat.vue:1120
msgid "真的要将 {user} 移出群聊吗"
msgstr "真喺要將 {user} 踢出個 group？"

#: src/function/option.ts:508
#: src/pages/options/OptDev.vue:153
msgid "重启应用"
msgstr "重新啟動 App"

#: src/pages/options/OptDev.vue:154
msgid "99% 的特性都能通过重启解决！"
msgstr "Restart app and you have no 茶煲"

#: src/function/utils/appUtil.ts:84
msgid "关闭"
msgstr "關閉"

#: src/function/utils/appUtil.ts:73
msgid "打开…"
msgstr "開啟…"

#: src/pages/Chat.vue:1353
msgid "发送文件失败"
msgstr "傳送 file 失敗"

#: src/pages/Chat.vue:1357
msgid "发送文件错误"
msgstr "傳送 file 時出錯"

#: src/pages/Chat.vue:1335
msgid "正在发送文件 {percent}%"
msgstr "傳送緊 file {percent}%"

#: src/components/MsgBody.vue:69
msgid "文件预览"
msgstr "File preview"

#: src/function/msg.ts:1403
#: src/pages/Info.vue:194
msgid "临时会话"
msgstr "臨時對話"

#: src/function/msg.ts:125
msgid "添加好友 {name} 成功！"
msgstr "成功新增聯絡人 {name}！"

#: src/pages/Chat.vue:23
msgid "来自群聊：{group}"
msgstr "來自 group：{group}"

#: src/pages/Messages.vue:30
msgid "置顶"
msgstr "置頂"

#: src/pages/Messages.vue:31
msgid "取消置顶"
msgstr "取消置頂"

#: src/pages/Messages.vue:32
msgid "删除"
msgstr "删除"

#: src/pages/Messages.vue:33
msgid "标记已读"
msgstr "標示為已讀"

#: src/function/msg.ts:439
msgid "获取合并转发消息失败"
msgstr ""

#: src/components/msg-component/CardMessage.vue:81
#: src/function/model/msg-body.ts:120
msgid "解析消息错误"
msgstr ""

#: src/function/utils/appUtil.ts:389
msgid "应用显示完成，应用初始化完成！欢迎使用 {name}！"
msgstr ""

#: src/function/model/msg-body.ts:433
msgid "刷新用户列表成功"
msgstr ""

#: src/function/connect.ts:177
msgid "正在断开链接……"
msgstr ""

#: src/pages/Chat.vue:332
msgid "下载图片"
msgstr ""

#: src/components/AboutPan.vue:43
#: src/components/AboutPan.vue:159
msgid "许可版权声明"
msgstr ""

#: src/components/DepPan.vue:21
msgid "你可以在项目仓库的依赖关系图中找到大部分依赖，而这里列出了一些不由包管理管理的依赖。"
msgstr ""

#: src/pages/options/OptView.vue:173
msgid "圆角适配"
msgstr ""

#: src/pages/options/OptView.vue:174
msgid "适配全面屏设备防止四角出界"
msgstr ""

#: src/pages/Chat.vue:42
#: src/pages/Chat.vue:252
msgid "加载中"
msgstr ""

#: src/function/utils/msgUtil.ts:345
msgid "发送中"
msgstr ""

#: src/components/DepPan.vue:12
msgid "驱动自"
msgstr ""

#: src/components/UpdatePan.vue:3
msgid "新版本"
msgstr ""

#: src/function/utils/appUtil.ts:604
msgid "下载更新…"
msgstr ""

#: src/function/utils/appUtil.ts:69
msgid "请不要在内嵌页面中输入敏感信息，内嵌页面并不安全。"
msgstr ""

#: src/pages/options/OptDev.vue:255
msgid "正在收集调试消息……"
msgstr ""

#: src/pages/options/OptAccount.vue:49
msgid "还没有连接到 OneBot 耶"
msgstr ""

#: src/pages/options/OptAccount.vue:50
msgid "去连接"
msgstr ""

#: src/pages/options/OptView.vue:198
msgid "不要点这个"
msgstr ""

#: src/pages/options/OptView.vue:199
msgid "啊吧啊吧（智慧）"
msgstr ""

#: src/pages/options/OptView.vue:120
#: src/pages/options/OptView.vue:151
msgid "默认"
msgstr ""

#: src/pages/Chat.vue:308
msgid "+ 1"
msgstr ""

#: src/pages/options/OptFunction.vue:72
msgid "关闭回应功能"
msgstr ""

#: src/pages/options/OptFunction.vue:73
msgid "如果你不想用它或者 bot 不支持，可以关闭这个功能"
msgstr ""

#: src/components/MsgBody.vue:426
msgid "（获取回复消息失败）"
msgstr ""

#: src/pages/options/OptDev.vue:11
msgid "进阶功能"
msgstr ""

#: src/pages/options/OptDev.vue:28
msgid "已启用"
msgstr ""

#: src/pages/options/OptDev.vue:29
msgid "已禁用"
msgstr ""

#: src/pages/options/OptDev.vue:59
msgid "解析配置"
msgstr ""

#: src/pages/options/OptDev.vue:60
msgid "不同框架之间的化学反应我们将其称之为达利园效应"
msgstr ""

#: src/pages/options/OptDev.vue:63
msgid "未连接"
msgstr ""

#: src/pages/options/OptDev.vue:453
msgid "CQ 码"
msgstr ""

#: src/pages/options/OptDev.vue:454
msgid "Array 数组"
msgstr ""

#: src/pages/Messages.vue:34
msgid "开启通知"
msgstr ""

#: src/pages/Messages.vue:35
msgid "关闭通知"
msgstr ""

#: src/pages/Chat.vue:218
msgid "已被禁言至：{time}"
msgstr ""

#: src/components/NoticeBody.vue:20
msgid "禁言了你"
msgstr ""

#: src/components/NoticeBody.vue:24
msgid "管理员禁言了"
msgstr ""

#: src/components/NoticeBody.vue:29
msgid "管理员解除了 {name} 的禁言"
msgstr ""

#: src/components/NoticeBody.vue:80
msgid "天"
msgstr ""

#: src/components/NoticeBody.vue:83
msgid "小时"
msgstr ""

#: src/components/NoticeBody.vue:86
msgid "分钟"
msgstr ""

#: src/components/NoticeBody.vue:89
msgid "秒"
msgstr ""

#: src/components/NoticeBody.vue:29
#: src/function/msg.ts:198
msgid "你"
msgstr ""

#: src/pages/options/OptInfo.vue:34
msgid "退出群聊"
msgstr ""

#: src/pages/options/OptInfo.vue:95
msgid "确定要退出群聊吗？"
msgstr ""

#: src/pages/chat-view/SystemNotice.vue:25
#: src/pages/chat-view/SystemNotice.vue:40
msgid "留言"
msgstr ""

#: src/pages/chat-view/SystemNotice.vue:22
msgid "请求加为好友"
msgstr ""

#: src/pages/chat-view/SystemNotice.vue:37
msgid "邀请你加入群聊"
msgstr ""

#: src/components/MsgBody.vue:195
msgid "全体成员"
msgstr ""

#: src/pages/options/OptView.vue:184
msgid "置顶窗口"
msgstr ""

#: src/pages/options/OptView.vue:185
msgid "你也不想想让 ta 知道你不在看消息吧 ~"
msgstr ""

#: src/pages/options/OptView.vue:152
msgid "完整模糊"
msgstr ""

#: src/pages/options/OptView.vue:153
msgid "完整透明"
msgstr ""

#: src/pages/options/OptView.vue:147
msgid "窗口透明模式"
msgstr ""

#: src/pages/options/OptView.vue:148
msgid "怎么看光还要挑三拣四的"
msgstr ""

#: src/function/option.ts:498
msgid "此操作将在重启应用后生效，现在就要重启吗？"
msgstr ""

#: src/function/option.ts:502
msgid "此操作仅供娱乐，将会在下次关闭时恢复。"
msgstr ""

#: src/pages/options/OptAccount.vue:66
# 连接正常（{timeout} > {step} s）
msgid "连接_normal"
msgstr ""

#: src/pages/options/OptAccount.vue:66
# 连接延迟（{timeout} > {step} s）
msgid "连接_slow"
msgstr ""

#: src/pages/options/OptAccount.vue:66
# 正在收集连接信息……
msgid "连接_loading"
msgstr ""

#: src/pages/Chat.vue:196
msgid "搜索消息"
msgstr ""

#: src/pages/Chat.vue:154
msgid "搜索已加载的消息"
msgstr ""

#: src/function/utils/appUtil.ts:392
#: src/function/utils/appUtil.ts:459
#: src/pages/Options.vue:17
msgid "关于"
msgstr ""

#: src/function/utils/appUtil.ts:393
msgid "检查更新…"
msgstr ""

#: src/function/utils/appUtil.ts:394
msgid "隐藏"
msgstr ""

#: src/function/utils/appUtil.ts:395
msgid "隐藏其他"
msgstr ""

#: src/function/utils/appUtil.ts:396
msgid "全部显示"
msgstr ""

#: src/function/utils/appUtil.ts:397
msgid "退出"
msgstr ""

#: src/function/utils/appUtil.ts:407
msgid "账户"
msgstr ""

#: src/function/connect.ts:135
#: src/function/utils/appUtil.ts:408
msgid "连接"
msgstr ""

#: src/function/msg.ts:1017
#: src/function/utils/appUtil.ts:410
msgid "用户列表（{count}）"
msgstr ""

#: src/function/utils/appUtil.ts:411
msgid "刷新列表…"
msgstr ""

#: src/function/utils/appUtil.ts:409
msgid "登出"
msgstr ""

#: src/function/utils/appUtil.ts:399
msgid "编辑"
msgstr ""

#: src/function/utils/appUtil.ts:400
msgid "撤销"
msgstr ""

#: src/function/utils/appUtil.ts:401
msgid "重做"
msgstr ""

#: src/function/utils/appUtil.ts:402
msgid "剪切"
msgstr ""

#: src/function/utils/appUtil.ts:404
msgid "粘贴"
msgstr ""

#: src/function/utils/appUtil.ts:405
msgid "全选"
msgstr ""

#: src/function/utils/appUtil.ts:413
msgid "帮助"
msgstr ""

#: src/function/utils/appUtil.ts:414
msgid "帮助文档"
msgstr ""

#: src/function/utils/appUtil.ts:415
msgid "在 Github 上反馈问题"
msgstr ""

#: src/function/utils/appUtil.ts:416
msgid "许可协议"
msgstr ""

#: src/pages/Chat.vue:191
msgid "戳一戳"
msgstr ""

#: src/function/utils/msgUtil.ts:230
msgid "语音"
msgstr ""

#: src/function/utils/msgUtil.ts:231
msgid "视频"
msgstr ""

#: src/pages/Chat.vue:159
msgid "合并转发"
msgstr ""

#: src/pages/Chat.vue:163
msgid "截图"
msgstr ""

msgid "“{body}” 以及 {num} 条消息"
msgstr ""`;function Js(){const s=navigator.userAgent;return s.indexOf("Android")>-1||s.indexOf("Adr")>-1?"Android":s.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)?"iOS":s.indexOf("Mac OS X")>-1?"MacOS":"Other"}function Z(){let s="zh-CN";return cs.forEach(e=>{e.value===w.config.globalProperties.$i18n.locale&&(s=e.lang)}),s}function Zs(s){const e=Object.assign({"/src/assets/l10n/en-US.po":tt,"/src/assets/l10n/zh-CAT.po":it,"/src/assets/l10n/zh-CN.po":ot,"/src/assets/l10n/zh-TW.po":rt,"/src/assets/l10n/zh-YUE.po":at}),n=Object.keys(e).find(a=>a.includes(s)),o={};if(n){const a=e[n],p=pn.parse(a).items;for(const g of p)o[g.msgid]=g.msgstr[0]==""?g.msgid:g.msgstr[0]}return o}function Ys(s){let e="";return s.length===0?"":(e=s.replace(/&amp;/g,"&"),e=e.replace(/&lt;/g,"<"),e=e.replace(/&gt;/g,">"),e=e.replace(/&nbsp;/g," "),e=e.replace(/&#39;/g,"'"),e=e.replace(/&quot;/g,'"'),e)}function ut(s){return{":art:":"🎨",":zap:":"⚡️",":fire:":"🔥",":bug:":"🐛",":ambulance:":"🚑️",":sparkles:":"✨",":memo:":"📝",":rocket:":"🚀",":lipstick:":"💄",":tada:":"🎉",":white_check_mark:":"✅",":lock:":"🔒️",":closed_lock_with_key:":"🔐",":bookmark:":"🔖",":rotating_light:":"🚨",":construction:":"🚧",":green_heart:":"💚",":arrow_down:":"⬇️",":arrow_up:":"⬆️",":pushpin:":"📌",":construction_worker:":"👷",":chart_with_upwards_trend:":"📈",":recycle:":"♻️",":heavy_plus_sign:":"➕",":heavy_minus_sign:":"➖",":wrench:":"🔧",":hammer:":"🔨",":globe_with_meridians:":"🌐",":pencil2:":"✏️",":poop:":"💩",":rewind:":"⏪️",":twisted_rightwards_arrows:":"🔀",":package:":"📦️",":alien:":"👽️",":truck:":"🚚",":page_facing_up:":"📄",":boom:":"💥",":bento:":"🍱",":wheelchair:":"♿️",":bulb:":"💡",":beers:":"🍻",":speech_balloon:":"💬",":card_file_box:":"🗃️",":loud_sound:":"🔊",":mute:":"🔇",":busts_in_silhouette:":"👥",":children_crossing:":"🚸",":building_construction:":"🏗️",":iphone:":"📱",":clown_face:":"🤡",":egg:":"🥚",":see_no_evil:":"🙈",":camera_flash:":"📸",":alembic:":"⚗️",":mag:":"🔍️",":label:":"🏷️",":seedling:":"🌱",":triangular_flag_on_post:":"🚩",":goal_net:":"🥅",":dizzy:":"💫",":wastebasket:":"🗑️",":passport_control:":"🛂",":adhesive_bandage:":"🩹",":monocle_face:":"🧐",":coffin:":"⚰️",":test_tube:":"🧪",":necktie:":"👔",":stethoscope:":"🩺",":bricks:":"🧱",":technologist:":"🧑‍💻",":money_with_wings:":"💸",":thread:":"🧵",":safety_vest:":"🦺"}[s]}function gt(s,e,n){s/=255,e/=255,n/=255;const o=Math.max(s,e,n),a=Math.min(s,e,n);let p=0,g;const u=(o+a)/2;if(o==a)p=g=0;else{const l=o-a;switch(g=u>.5?l/(2-o-a):l/(o+a),o){case s:p=(e-n)/l+(e<n?6:0);break;case e:p=(n-s)/l+2;break;case n:p=(s-e)/l+4;break}p/=6}return[p,g,u]}function pt(s,e,n){let o,a,p;if(e==0)o=a=p=n;else{const g=function(E,h,f){return f<0&&(f+=1),f>1&&(f-=1),f<.16666666666666666?E+(h-E)*6*f:f<.5?h:f<.6666666666666666?E+(h-E)*(.6666666666666666-f)*6:E},u=n<.5?n*(1+e):n+e-n*e,l=2*n-u;o=g(l,u,s+1/3),a=g(l,u,s),p=g(l,u,s-1/3)}return[Math.round(o*255),Math.round(a*255),Math.round(p*255)]}function Me(s){if(!s)return"";const e=1024;return s<e?s+"B":s<Math.pow(e,2)?(s/e).toFixed(2)+"K":s<Math.pow(e,3)?(s/Math.pow(e,2)).toFixed(2)+"M":s<Math.pow(e,4)?(s/Math.pow(e,3)).toFixed(2)+"G":(s/Math.pow(e,4)).toFixed(2)+"T"}function ct(s,e){switch(arguments.length){case 1:return parseInt((Math.random()*s+1).toString(),10);case 2:return parseInt((Math.random()*(e-s+1)+s).toString(),10);default:return 0}}function Us(s){return s.toString().length===10?s*1e3:s}function Re(s){const e={hour:"numeric",minute:"numeric",second:"numeric"},n=new Date,o=new Date().setHours(0,0,0,0),a=s.setHours(0,0,0,0);return o!=a&&(n.getFullYear()==s.getFullYear()&&n.getMonth()==s.getMonth()?e.weekday="short":n.getFullYear()==s.getFullYear()?(e.day="numeric",e.month="short"):(e.day="numeric",e.month="short",e.year="numeric")),e}const lt=S({name:"UpdatePan",props:["version","date","user","message","updated"],data(){return{openLink:ss,getTrueLang:Z,info:{title:"",content:[]}}},mounted(){const s=this.message.split(`
`);this.info.title=s[0];for(let e=1;e<s.length;e++){const n={text:""};let o=s[e];if(o.startsWith(":")){const l=o.substring(1).indexOf(":"),_=o.substring(0,l+2),E=ut(_);E!=null&&(o=o.replace(_,E))}const a=/<- #(\d+)/,p=o.match(a);if(p){const l=p[1];o=o.replace(a,""),n.issue=l}const g=/[a-f0-9]{40}/,u=o.match(g);if(u){const l=u[0];o=o.replace(l,l.substring(0,7))}n.text=o,this.info.content.push(n)}}}),mt={class:"update-info"},dt={class:"title"},ft=["src"],_t=["href"],vt={class:"info"},ht={key:0,class:"log-issue"},bt=["onClick"];function yt(s,e,n,o,a,p){return m(),d("div",mt,[t("span",null,c(s.updated?s.$t("更新记录"):s.$t("新版本")),1),t("a",null,c(s.version),1),t("div",dt,[t("img",{src:s.user.avatar},null,8,ft),t("a",{href:s.user.url},c(s.user.name),9,_t),t("span",null,c(Intl.DateTimeFormat(s.getTrueLang(),{year:"numeric",month:"short",day:"numeric"}).format(new Date(s.date))),1)]),t("div",vt,[t("span",null,c(s.info.title),1),t("div",null,[(m(!0),d(I,null,$(s.info.content,(g,u)=>(m(),d("div",{key:"changelog-"+u},[t("span",null,c(g.text),1),g.issue?(m(),d("div",ht,[e[0]||(e[0]=t("span",null," -> ",-1)),e[1]||(e[1]=t("div",null,null,-1)),t("a",{onClick:l=>s.openLink(`https://github.com/Stapxs/Stapxs-QQ-Lite-2.0/issues/${g.issue}`,!0)},"#"+c(g.issue),9,bt)])):b("",!0)]))),128))])])])}const Et=B(lt,[["render",yt],["__scopeId","data-v-29cc8298"]]),wt=S({name:"WelcomePan",props:["data"],data(){return{languages:cs,runtimeData:i,save:ys,show:"home"}},methods:{gaLanguage(s){const e=s.target;x("use_language",{name:e.value})},setPage(s){this.show=s}}}),Ot="/Stapxs-QQ-Lite-2.0/img/icons/icon.svg",Dt={key:0,class:"wel-home"},It={key:1,class:"wel-language"},Lt={class:"l10n-info",style:{width:"calc(100% - 40px)"}},qt={style:{overflow:"hidden"}},kt=["value"],Ct={class:"author"},At={key:2,class:"wel-end"};function $t(s,e,n,o,a,p){const g=C("font-awesome-icon");return s.show=="home"?(m(),d("div",Dt,[e[5]||(e[5]=t("img",{src:Ot},null,-1)),e[6]||(e[6]=t("span",null,"WELCOME",-1)),t("div",null,[t("span",null,c(s.$t("Stapxs QQ Lite")),1),e[4]||(e[4]=t("a",null,"2.0",-1))]),e[7]||(e[7]=t("hr",null,null,-1)),t("a",null,c(s.$t("下面是一点点简单的使用引导 …… 如果不想看可以直接戳跳过（小声），但是也没多长啦")),1),t("button",{class:"ss-button wel-next",onClick:e[0]||(e[0]=u=>s.setPage("language"))}," next ")])):s.show=="language"?(m(),d("div",It,[t("span",null,c(s.$t("选择语言")),1),e[8]||(e[8]=t("a",null,"Select a language",-1)),t("div",Lt,[v(g,{style:{"margin-right":"30px"},icon:["fas","language"]}),t("div",qt,[y(t("select",{"onUpdate:modelValue":e[1]||(e[1]=u=>s.runtimeData.sysConfig.language=u),name:"language",title:"language",onChange:e[2]||(e[2]=u=>{s.save(u),s.gaLanguage(u)})},[(m(!0),d(I,null,$(s.languages,u=>(m(),d("option",{key:u.value,value:u.value},c(u.name),9,kt))),128))],544),[[fs,s.runtimeData.sysConfig.language]]),t("span",Ct,c(s.$t("作者："))+c(s.$t("Stapx Steve")),1)])]),t("button",{class:"ss-button wel-next",onClick:e[3]||(e[3]=u=>s.setPage("end"))}," next ")])):s.show=="end"?(m(),d("div",At,[e[9]||(e[9]=hs('<svg id="Layer_1" height="60px" width="60px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 448.019 448.019" xml:space="preserve"><g transform="translate(0 -1020.36)"><g shape-rendering="auto" image-rendering="auto" color-rendering="auto" color-interpolation="sRGB"><path style="fill:var(--color-font-1);" d="M254.087,1160.22c-2.724-0.061-5.291,1.271-6.813,3.531l-12.813,18.969l-18.469-19.938c-3.013-3.232-8.076-3.408-11.308-0.395c-1.827,1.703-2.753,4.162-2.505,6.646l2.376,22.781l-26.938-3.406c-4.384-0.553-8.386,2.555-8.937,6.939c-0.314,2.498,0.565,4.998,2.374,6.748l16.469,15.938l-22.843,14.719c-3.706,2.406-4.759,7.361-2.352,11.068c1.358,2.09,3.614,3.43,6.101,3.619l22.875,1.623l-8.062,25.969c-1.286,4.227,1.099,8.697,5.327,9.982c2.394,0.729,4.99,0.295,7.017-1.172l18.531-13.438l10.531,25.063c1.728,4.066,6.425,5.963,10.492,4.236c2.308-0.98,4.023-2.986,4.633-5.42l5.563-22.219l24.187,12.438c3.932,2.018,8.754,0.465,10.77-3.467c1.15-2.242,1.177-4.895,0.073-7.158l-10.03-20.594l26.499-6c4.311-0.971,7.018-5.252,6.047-9.563c-0.557-2.475-2.255-4.539-4.575-5.563l-20.906-9.314l16.437-21.656c2.677-3.516,1.997-8.535-1.519-11.213c-2.016-1.535-4.641-2.023-7.075-1.318l-22,6.314l-1.344-27.156c-0.211-4.176-3.602-7.484-7.781-7.594L254.087,1160.22z"></path><path style="fill:var(--color-font-2);" d="M220.586,1191.282l9,9.719c3.007,3.238,8.069,3.426,11.307,0.42c0.45-0.418,0.851-0.887,1.194-1.396l5-7.438l0.656,13.219c0.211,4.414,3.959,7.82,8.373,7.611c0.614-0.029,1.223-0.131,1.814-0.299l8.626-2.469l-8,10.531c-2.674,3.518-1.991,8.537,1.526,11.211c0.494,0.377,1.031,0.693,1.599,0.945l8.187,3.656l-12.907,2.938c-4.309,0.977-7.011,5.262-6.035,9.57c0.134,0.592,0.334,1.166,0.598,1.711l3.938,8.094l-11.781-6.063c-3.932-2.016-8.754-0.463-10.77,3.469c-0.275,0.537-0.489,1.104-0.637,1.688l-2.187,8.719l-5.126-12.219c-1.716-4.072-6.408-5.982-10.48-4.266c-0.56,0.236-1.09,0.535-1.582,0.891l-7.25,5.25l3.907-12.623c1.304-4.223-1.061-8.701-5.282-10.006c-0.589-0.182-1.197-0.295-1.812-0.338l-8.97-0.623l11.157-7.188c3.71-2.4,4.772-7.354,2.371-11.064c-0.33-0.51-0.718-0.98-1.155-1.404l-6.437-6.219l13.125,1.658c4.383,0.559,8.39-2.541,8.949-6.924c0.079-0.617,0.085-1.24,0.019-1.859L220.586,1191.282z"></path><path style="fill:var(--color-font-1);" d="M231.891,1044.45c-4.418,0.068-7.944,3.707-7.875,8.125l0,0v79.813c-0.062,4.418,3.469,8.051,7.887,8.113c4.418,0.063,8.051-3.469,8.113-7.887c0.001-0.076,0.001-0.15,0-0.227v-79.813c0.069-4.418-3.456-8.056-7.875-8.125C232.058,1044.449,231.975,1044.449,231.891,1044.45z"></path></g><g><path style="fill:var(--color-font-1);" d="M224.019,1156.368c0,4.418,3.582,8,8,8s8-3.582,8-8s-3.582-8-8-8S224.019,1151.95,224.019,1156.368z"></path><path style="fill:var(--color-font-1);" d="M176.019,1172.368c0,4.418,3.582,8,8,8s8-3.582,8-8s-3.582-8-8-8S176.019,1167.95,176.019,1172.368z"></path><path style="fill:var(--color-font-1);" d="M152.019,1220.368c0,4.418,3.582,8,8,8s8-3.582,8-8s-3.582-8-8-8S152.019,1215.95,152.019,1220.368z"></path><path style="fill:var(--color-font-1);" d="M160.019,1268.368c0,4.418,3.582,8,8,8s8-3.582,8-8s-3.582-8-8-8S160.019,1263.95,160.019,1268.368z"></path><path style="fill:var(--color-font-1);" d="M200.019,1300.368c0,4.418,3.582,8,8,8s8-3.582,8-8s-3.582-8-8-8S200.019,1295.95,200.019,1300.368z"></path><path style="fill:var(--color-font-1);" d="M256.019,1300.368c0,4.418,3.582,8,8,8s8-3.582,8-8s-3.582-8-8-8S256.019,1295.95,256.019,1300.368z"></path><path style="fill:var(--color-font-1);" d="M288.019,1268.368c0,4.418,3.582,8,8,8s8-3.582,8-8s-3.582-8-8-8S288.019,1263.95,288.019,1268.368z"></path><path style="fill:var(--color-font-1);" d="M296.019,1212.368c0,4.418,3.582,8,8,8s8-3.582,8-8s-3.582-8-8-8S296.019,1207.95,296.019,1212.368z"></path><path style="fill:var(--color-font-1);" d="M272.019,1172.368c0,4.418,3.582,8,8,8s8-3.582,8-8s-3.582-8-8-8S272.019,1167.95,272.019,1172.368z"></path><g shape-rendering="auto" image-rendering="auto" color-rendering="auto" color-interpolation="sRGB"><g><path style="fill:var(--color-font-1);" d="M103.734,1068.388c-4.417,0.137-7.886,3.828-7.749,8.244c0.076,2.453,1.274,4.736,3.25,6.193c27.302,20.898,41.291,44.17,53.531,69c1.959,3.961,6.758,5.584,10.719,3.625s5.584-6.758,3.625-10.719c-12.643-25.648-28.357-51.818-58.157-74.625C107.471,1068.934,105.623,1068.327,103.734,1068.388z"></path><path style="fill:var(--color-font-1);" d="M93.203,1208.7c-15.382,1.072-31.39,4.859-48.406,12.344c-4.047,1.777-5.887,6.5-4.109,10.547s6.5,5.887,10.547,4.109l0,0c30.981-13.627,56.35-13.629,83.03-7.531c4.279,1.102,8.641-1.475,9.742-5.754c1.101-4.279-1.475-8.641-5.754-9.742c-0.141-0.037-0.282-0.068-0.425-0.098C123.354,1209.266,108.587,1207.624,93.203,1208.7L93.203,1208.7z"></path><path style="fill:var(--color-font-1);" d="M369.984,1201.263c-14.917-0.225-28.656,2.047-42.469,3.125c-4.41,0.336-7.712,4.184-7.376,8.592c0.336,4.41,4.183,7.713,8.592,7.377c29.392-2.293,50.901-8.68,83.813,7.219c3.904,2.068,8.747,0.582,10.816-3.322s0.582-8.746-3.322-10.816c-0.182-0.096-0.367-0.186-0.556-0.268c-18.512-8.943-34.582-11.68-49.499-11.906H369.984z"></path><path style="fill:var(--color-font-1);" d="M360.016,1068.388c-1.796,0.014-3.535,0.629-4.938,1.75c-31.296,24.119-45.662,50.006-58.125,74.531c-2.002,3.943-0.428,8.764,3.516,10.766c3.944,2.002,8.764,0.428,10.766-3.516c12.293-24.191,24.757-46.9,53.594-69.125c3.538-2.648,4.259-7.662,1.611-11.199C364.926,1069.571,362.544,1068.382,360.016,1068.388z"></path><path style="fill:var(--color-font-1);" d="M328.111,1276.419c-4.417-0.107-8.086,3.385-8.194,7.803c-0.097,3.949,2.704,7.379,6.594,8.072c23.91,4.873,38.286,21.146,50.374,43.781c1.977,3.951,6.784,5.553,10.735,3.574c3.952-1.977,5.552-6.783,3.575-10.734c-0.068-0.137-0.14-0.27-0.216-0.402c-13.146-24.615-31.597-45.855-61.282-51.906c-0.526-0.117-1.062-0.182-1.6-0.191L328.111,1276.419z"></path><path style="fill:var(--color-font-1);" d="M271.797,1316.294c-4.418,0.09-7.927,3.742-7.838,8.16c0.038,1.875,0.732,3.676,1.962,5.09c23.275,27.518,21.758,48.701,22.094,74.938c0.055,4.418,3.681,7.955,8.099,7.9c4.418-0.055,7.956-3.68,7.901-8.098c0-0.01,0-0.018,0-0.027c-0.336-25.648,0.416-53.975-25.875-85.063c-1.559-1.889-3.896-2.959-6.344-2.906L271.797,1316.294z"></path><path style="fill:var(--color-font-1);" d="M144.173,1276.325c-0.718,0-1.433,0.096-2.125,0.287c-38.275,9.793-48.533,33.836-60.438,51.063c-2.626,3.555-1.873,8.564,1.681,11.189c3.554,2.625,8.564,1.873,11.189-1.682c0.1-0.135,0.195-0.273,0.286-0.414c13.403-19.395,17.99-36.146,51.25-44.656c4.297-1.029,6.946-5.348,5.916-9.645c-0.861-3.592-4.067-6.127-7.759-6.137V1276.325z"></path><path style="fill:var(--color-font-1);" d="M200.266,1316.263c-2.917-0.059-5.635,1.473-7.093,4c-16.816,28.021-22.731,57.02-17,85.686c0.816,4.342,4.999,7.201,9.341,6.385s7.201-4.998,6.385-9.342c-0.012-0.064-0.026-0.131-0.04-0.197c-4.926-24.648-0.176-48.984,15.032-74.314c2.329-3.754,1.174-8.688-2.581-11.016C203.094,1316.708,201.697,1316.294,200.266,1316.263z"></path></g><path style="fill:var(--color-font-1);" d="M58.743,1071.813c-2.153,0.059-4.193,0.982-5.656,2.563l-15.75,16.938l-21.25-9.094	c-4.061-1.742-8.765,0.137-10.507,4.197c-0.983,2.293-0.842,4.912,0.383,7.084l11.25,20.188l-15.219,17.406	c-2.918,3.318-2.593,8.373,0.726,11.291c1.877,1.65,4.418,2.328,6.868,1.834l22.656-4.469l11.875,19.844	c2.266,3.793,7.178,5.031,10.972,2.766c2.128-1.271,3.547-3.459,3.841-5.92l2.75-22.969l22.562-5.125	c4.307-0.986,6.999-5.277,6.012-9.586c-0.553-2.414-2.195-4.438-4.444-5.477l-20.968-9.719l2.062-23.031	c0.398-4.4-2.847-8.291-7.248-8.689c-0.302-0.025-0.605-0.037-0.909-0.029L58.743,1071.813z M48.867,1102.438l-0.464,5.313	c-0.315,3.369,1.524,6.574,4.594,8l4.813,2.219l-5.157,1.184c-3.302,0.742-5.78,3.482-6.187,6.844l-0.624,5.281l-2.718-4.563	c-1.735-2.91-5.116-4.412-8.438-3.748l-5.218,0.992l3.499-4c2.225-2.541,2.616-6.203,0.976-9.156l-2.594-4.656l4.907,2.094	c3.102,1.326,6.702,0.563,9-1.906L48.867,1102.438z"></path><path style="fill:var(--color-font-1);" d="M354.898,1378.251c-1.342,0.037-2.652,0.412-3.811,1.088c-1.876,1.09-3.23,2.895-3.75,5	l-5.531,22.406l-23,2.344c-4.399,0.416-7.629,4.318-7.214,8.717c0.236,2.502,1.634,4.748,3.775,6.064l19.658,12.219	l-4.875,22.594c-0.932,4.32,1.814,8.576,6.134,9.508c2.418,0.521,4.941-0.104,6.834-1.695l17.688-14.906l20,11.625	c3.835,2.195,8.723,0.865,10.918-2.971c1.212-2.115,1.391-4.67,0.488-6.936l-8.688-21.469l17.219-15.375	c3.309-2.93,3.616-7.984,0.688-11.293c-1.659-1.875-4.099-2.865-6.595-2.676l-23.062,1.686l-9.344-21.188	c-1.316-2.963-4.29-4.838-7.531-4.75L354.898,1378.251z M357.274,1410.938l2.125,4.844c1.366,3.096,4.531,4.998,7.906,4.75	l5.282-0.367l-3.938,3.531c-2.521,2.248-3.358,5.838-2.093,8.969l2.03,4.969l-4.624-2.688c-2.92-1.707-6.6-1.395-9.189,0.783	l-4.062,3.438l1.12-5.219c0.713-3.291-0.71-6.676-3.562-8.469l-4.531-2.813l5.28-0.527c3.364-0.336,6.154-2.75,6.97-6.031	L357.274,1410.938z"></path></g><path style="fill:var(--color-font-1);" d="M216.019,1396.368c0,4.418,3.582,8,8,8s8-3.582,8-8s-3.582-8-8-8S216.019,1391.95,216.019,1396.368L216.019,1396.368z"></path><path style="fill:var(--color-font-1);" d="M40.019,1300.368c0,4.418,3.582,8,8,8s8-3.582,8-8s-3.582-8-8-8S40.019,1295.95,40.019,1300.368z"></path><path style="fill:var(--color-font-1);" d="M128.019,1372.368c0,4.418,3.582,8,8,8s8-3.582,8-8s-3.582-8-8-8S128.019,1367.95,128.019,1372.368z"></path><path style="fill:var(--color-font-1);" d="M112.019,1164.368c0,4.418,3.582,8,8,8s8-3.582,8-8s-3.582-8-8-8S112.019,1159.95,112.019,1164.368z"></path><path style="fill:var(--color-font-1);" d="M352.019,1156.368c0,4.418,3.582,8,8,8s8-3.582,8-8s-3.582-8-8-8S352.019,1151.95,352.019,1156.368z"></path><path style="fill:var(--color-font-1);" d="M384.019,1244.368c0,4.418,3.582,8,8,8s8-3.582,8-8s-3.582-8-8-8S384.019,1239.95,384.019,1244.368z"></path><path style="fill:var(--color-font-1);" d="M328.019,1356.368c0,4.418,3.582,8,8,8s8-3.582,8-8s-3.582-8-8-8S328.019,1351.95,328.019,1356.368z"></path><path style="fill:var(--color-font-1);" d="M160.019,1076.368c0,4.418,3.582,8,8,8s8-3.582,8-8s-3.582-8-8-8S160.019,1071.95,160.019,1076.368z"></path><path style="fill:var(--color-font-1);" d="M224.019,1028.369c0,4.418,3.582,8,8,8s8-3.582,8-8c0-4.418-3.582-8-8-8S224.019,1023.951,224.019,1028.369z"></path><path style="fill:var(--color-font-1);" d="M288.019,1076.368c0,4.418,3.582,8,8,8s8-3.582,8-8s-3.582-8-8-8S288.019,1071.95,288.019,1076.368z"></path><path style="fill:var(--color-font-1);" d="M72.019,1252.368c0,4.418,3.582,8,8,8s8-3.582,8-8s-3.582-8-8-8S72.019,1247.95,72.019,1252.368z"></path><path style="fill:var(--color-font-1);" d="M64.019,1356.368c0,4.418,3.582,8,8,8s8-3.582,8-8s-3.582-8-8-8S64.019,1351.95,64.019,1356.368z"></path><path style="fill:var(--color-font-1);" d="M16.019,1236.368c0,4.418,3.582,8,8,8s8-3.582,8-8s-3.582-8-8-8S16.019,1231.95,16.019,1236.368z"></path><path style="fill:var(--color-font-1);" d="M368.019,1060.368c0,4.418,3.582,8,8,8s8-3.582,8-8s-3.582-8-8-8S368.019,1055.95,368.019,1060.368z"></path><path style="fill:var(--color-font-1);" d="M432.019,1228.368c0,4.418,3.582,8,8,8s8-3.582,8-8s-3.582-8-8-8S432.019,1223.95,432.019,1228.368z"></path><path style="fill:var(--color-font-1);" d="M392.019,1356.368c0,4.418,3.582,8,8,8s8-3.582,8-8s-3.582-8-8-8S392.019,1351.95,392.019,1356.368z"></path><path style="fill:var(--color-font-1);" d="M176.019,1428.368c0,4.418,3.582,8,8,8s8-3.582,8-8s-3.582-8-8-8S176.019,1423.95,176.019,1428.368z"></path></g></g></svg>',1)),t("span",null,c(s.$t("好耶"))+"!",1),t("a",null,c(s.$t("该说的都说了 —— 那么就可以愉快的用啦（大声），如果遇到什么奇怪的问题，尽管来 GitHub 仓库问哦。")),1)])):b("",!0)}const Tt=B(wt,[["render",$t]]);var X=(s=>(s[s.CQCode=0]="CQCode",s[s.Array=1]="Array",s[s.Auto=2]="Auto",s))(X||{});function ae(s,e,n){n.length>0&&n.forEach(a=>{e.push({type:"image",file:"base64://"+a.substring(a.indexOf("base64,")+7,a.length)}),s=`[SQ:${e.length-1}]`+s});let o;return i.tags.msgType==X.Array?o=Pt(s,e):i.tags.msgType==X.CQCode&&(o=Vt(s,e)),o}function ue(s){const e=/\[SQ:\d+\]/gm;return s.match(e)}const Xs={parseMsg:ae,getSQList:ue};function Pt(s,e){const n=[],o=ue(s);if(o!==null&&o.forEach(a=>{const p=Number(a.replace("[","").replace("]","").split(":")[1]),g=RegExp("^[^\\[]*\\[SQ:"+p+"\\]","g"),u=s.match(g);if(u!==null){const l=u[0].replace(a,"");l!==""&&n.push({type:"text",text:l}),e[p]!==null&&n.push(e[p]),s=s.replace(u[0],"")}}),s!==""&&n.push({type:"text",text:s}),e.forEach(a=>{switch(a.type){case"reply":n.unshift(a);break}}),i.sysConfig.msg_taill){const a=i.sysConfig.msg_taill.replaceAll("\\n",`
`);if(a&&a!=""){for(let p=n.length-1;p>=0;p--)if(n[p].type=="text"){n[p].text=n[p].text+a;break}}}return n}function Vt(s,e){let n="";const o=ue(s);return o!==null&&o.forEach(a=>{const p=Number(a.replace("[","").replace("]","").split(":")[1]),g=RegExp("^[^\\[]*\\[SQ:"+p+"\\]","g"),u=s.match(g);if(u!==null){const l=u[0].replace(a,"");if(l!==""&&(n+=l),e[p]!==null){let _="[CQ:"+e[p].type;Object.keys(e[p]).forEach(E=>{E!=="type"&&(_+=","+E+"="+e[p][E])}),n+=_+"]"}s=s.replace(u[0],"")}}),s!==""&&(n+=s),i.sysConfig.msg_taill&&(n=n+i.sysConfig.msg_taill.replaceAll("\\n",`
`)),n}const Y=class Y{notify(e){const n=w.config.globalProperties.$t,o=i.tags.isElectron,a=e.tag.split("/")[0];Y.userNotifyList[a]===void 0?Y.userNotifyList[a]=1:(Y.userNotifyList[a]++,e.body=n("“{body}” 以及 {num} 条消息",{body:e.body,num:Y.userNotifyList[a]-1}),this.closeAll(a)),o?i.reader&&i.reader.send("sys:sendNotice",e):"Notification"in window&&"serviceWorker"in navigator&&"PushManager"in window&&(Notification.permission==="default"?Notification.requestPermission(()=>{this.sendNotice(e)}):Notification.permission!=="denied"&&this.sendNotice(e))}notifySingle(e){i.tags.isElectron?i.reader&&i.reader.send("sys:sendNotice",e):"Notification"in window&&"serviceWorker"in navigator&&"PushManager"in window&&(Notification.permission==="default"?Notification.requestPermission(()=>{this.sendNotice(e)}):Notification.permission!=="denied"&&this.sendNotice(e))}closeAll(e){i.tags.isElectron?i.reader&&i.reader.send("sys:closeAllNotice",e):Object.keys(Y.notifyList).forEach(a=>{a.startsWith(e)&&this.close(a)}),delete Y.userNotifyList[e]}clear(){i.tags.isElectron?i.reader&&i.reader.send("sys:clearNotice"):Object.keys(Y.notifyList).forEach(o=>{this.close(o)})}close(e){var o;i.tags.isElectron?i.reader&&i.reader.send("sys:closeNotice",e):(o=Y.notifyList[e])==null||o.close()}closeJump(e){if(e!==void 0){if(e.indexOf("/")>0){const n=e.split("/")[0],o=e.substring(n.length+1,e.length);delete Y.userNotifyList[n],window.focus(),Ne(n,o)}this.close(e)}}sendNotice(e){let n="";const o={};o.requireInteraction=!0,n=e.title,o.body=e.body,o.tag=e.tag,o.icon=e.icon;const a=new Notification(n,o);a.onclick=p=>{const g=p.target;this.closeJump(g.tag)},Y.notifyList[e.tag]=a}};ks(Y,"userNotifyList",{}),ks(Y,"notifyList",{});let us=Y;const Ft=new M,es=new G;function Be(s,e){const n=document.getElementById(s);if(n){const o=document.getElementById("msgPan");if(o!==null)return o.style.scrollBehavior="smooth",o.scrollTop=n.offsetTop-n.offsetHeight+10,o.style.scrollBehavior="smooth",n.style.transition="background 1s",n.style.background="rgba(0, 0, 0, 0.06)",setTimeout(()=>{n.style.background="unset",setTimeout(()=>{n.style.transition="background .3s"},1100)},3e3),!0}return!1}function ss(s,e=!1){var n;if(i.tags.isElectron)if(e){const o=(n=window.electron)==null?void 0:n.shell;o&&o.openExternal(s)}else{i.popBoxList=[];const o={html:`<iframe src="${s}" class="view-iframe"></iframe>`,full:!0,button:[{text:w.config.globalProperties.$t("请不要在内嵌页面中输入敏感信息，内嵌页面并不安全。"),fun:()=>{}},{text:w.config.globalProperties.$t("打开…"),fun:()=>{var p;const a=(p=window.electron)==null?void 0:p.shell;a&&a.openExternal(s),i.popBoxList.shift()}},{text:w.config.globalProperties.$t("关闭"),master:!0,fun:()=>{i.popBoxList.shift()}}]};i.popBoxList.push(o)}else window.open(s)}function xs(s){i.messageList=[],Se(s.id,s.type)}function Se(s,e,n=20,o="getChatHistoryFist"){var g;let a;const p=((g=i.jsonMap.message_list)==null?void 0:g.pagerType)=="full";return i.jsonMap.message_list&&e!="group"?a=i.jsonMap.message_list.private_name:a=i.jsonMap.message_list.name,O.send(a??"get_chat_history",{group_id:e=="group"?s:void 0,user_id:e!="group"?s:void 0,message_id:0,count:p?i.messageList.length+n:n},o),!0}function qs(){var s,e,n;if(J.status){i.userList=[];let o="get_friend_list",a="get_group_list";(s=i.jsonMap.user_list)!=null&&s.name?(o=i.jsonMap.user_list.name.split("|")[0],a=i.jsonMap.user_list.name.split("|")[1]):(e=i.jsonMap.friend_list)!=null&&e.name&&((n=i.jsonMap.group_list)!=null&&n.name)&&(o=i.jsonMap.friend_list.name,a=i.jsonMap.group_list.name),O.send(o,{},"getFriendList"),O.send(a,{},"getGroupList"),O.send("get_system_msg",{},"getSystemMsg")}}function Mt(){O.send("get_cookies",{domain:"qun.qq.com"},"getCookies_qun.qq.com")}function Ne(s,e){var n;if(i.chatInfo.show.id!=Number(s)){const o=document.getElementById("user-"+s);if(o===null)for(let a=0;a<i.userList.length;a++){const p=i.userList[a],g=p.user_id!==void 0?p.user_id:p.group_id;if(String(g)===s){(n=i.showList)==null||n.unshift(p),$e(()=>{const u=document.getElementById("user-"+s);u!==null&&(u.dataset.jump=e,u.click())});break}}else o.click()}else Be(e)}function Bs(s,e,n){if(document.location.protocol=="https:"&&s.toLowerCase().startsWith("http:")&&(s="https"+s.substring(s.indexOf("://"))),i.tags.isElectron)try{new gn({url:s,autoStart:!0,process:n,nameCallback:function(){return e}})}catch(o){es.error(o,"下载文件失败")}else i.reader&&(i.reader.on("sys:downloadBack",(o,a)=>{n(a)}),i.reader.send("sys:download",{downloadPath:s,fileName:e}))}async function Rt(){i.reader&&Ue(await i.reader.invoke("sys:getWinColor"))}function Ue(s){var n;const e=(n=window.electron)==null?void 0:n.process;if(e&&e.platform=="win32"){const o=parseInt(s.substr(0,2),16),a=parseInt(s.substr(2,2),16),p=parseInt(s.substr(4,2),16),g=gt(o,a,p),u=window.matchMedia("(prefers-color-scheme: dark)"),l=k.get("opt_auto_dark"),_=k.get("opt_dark");l==!0&&u.matches||l!=!0&&_==!0?g[2]=.8:g[2]=.3;const E=pt(g[0],g[1],g[2]);document.documentElement.style.setProperty("--color-main","rgb("+E[0]+","+E[1]+","+E[2]+")")}else document.documentElement.style.setProperty("--color-main","#"+s.substring(0,6)+"CF")}function Bt(){const{$t:s}=w.config.globalProperties;if(i.reader){const e={};e.success=s("应用显示完成，应用初始化完成！欢迎使用 {name}！",{name:s("Stapxs QQ Lite")}),e.title=s("Stapxs QQ Lite"),e.about=s("关于")+" "+s("Stapxs QQ Lite"),e.update=s("检查更新…"),e.hide=s("隐藏")+" "+s("Stapxs QQ Lite"),e.hideOthers=s("隐藏其他"),e.unhide=s("全部显示"),e.quit=s("退出")+" "+s("Stapxs QQ Lite"),e.edit=s("编辑"),e.undo=s("撤销"),e.redo=s("重做"),e.cut=s("剪切"),e.copy=s("复制"),e.paste=s("粘贴"),e.selectAll=s("全选"),e.account=s("账户"),e.login=s("连接"),e.logout=s("登出"),e.userList=s("用户列表（{count}）",{count:i.userList.length}),e.flushUser=s("刷新列表…"),e.help=s("帮助"),e.doc=s("帮助文档"),e.feedback=s("在 Github 上反馈问题"),e.license=s("许可协议"),i.reader.send("sys:createMenu",e)}}function Is(s){i.reader&&i.reader.send("sys:updateMenu",s)}function St(){i.reader&&(i.reader.on("bot:flushUser",()=>{qs(),Ft.add(P.INFO,w.config.globalProperties.$t("刷新用户列表成功"))}),i.reader.on("bot:logout",()=>{k.remove("auto_connect"),O.close()}),i.reader.on("bot:quickReply",(s,e)=>{os(e.id,e.type,ae("[SQ:0]"+e.content,[{type:"reply",id:String(e.msg)}],[]),!0);for(let n=0;n<i.onMsgList.length;n++)if(i.onMsgList[n].group_id==e.id||i.onMsgList[n].user_id==e.id){i.onMsgList[n].new_msg=!1;break}}),i.reader.on("sys:handleUri",(s,e)=>{es.info(JSON.stringify(e))}),i.reader.on("app:about",()=>{const s={title:w.config.globalProperties.$t("关于")+" "+w.config.globalProperties.$t("Stapxs QQ Lite"),template:Fe,allowQuickClose:!1};i.popBoxList.push(s)}),i.reader.on("app:changeTab",(s,e)=>{var n;(n=document.getElementById("bar-"+e.toLowerCase()))==null||n.click()}),i.reader.on("app:openLink",(s,e)=>{ss(e)}),i.reader.on("app:error",(s,e)=>{new G().add(N.ERR,e)}),i.reader.on("app:jumpChat",(s,e)=>{Ne(e.userId,e.msgId),new us().closeAll(e.userId)}),i.reader.on("onebot:onopen",(s,e)=>{O.onopen(e.address,e.token)}),i.reader.on("onebot:onmessage",(s,e)=>{O.onmessage(e)}),i.reader.on("onebot:onclose",(s,e)=>{O.onclose(e.code,e.reason,e.address,e.token)}))}function Nt(){var n,o;const s=i.tags.platform;es.info("正在装载补充样式……"),i.tags.isElectron&&r(()=>Promise.resolve({}),__vite__mapDeps([0])).then(()=>{es.info("UI 2.0 附加样式加载完成")}),s!=null&&Ve(Object.assign({"../../assets/css/append/append_darwin.css":()=>r(()=>Promise.resolve({}),__vite__mapDeps([1])),"../../assets/css/append/append_linux.css":()=>r(()=>Promise.resolve({}),__vite__mapDeps([2])),"../../assets/css/append/append_linux_vibrancy.css":()=>r(()=>Promise.resolve({}),__vite__mapDeps([3])),"../../assets/css/append/append_new.css":()=>r(()=>Promise.resolve({}),__vite__mapDeps([0])),"../../assets/css/append/append_vibrancy.css":()=>r(()=>Promise.resolve({}),__vite__mapDeps([4])),"../../assets/css/append/append_win32.css":()=>r(()=>Promise.resolve({}),__vite__mapDeps([5]))}),`../../assets/css/append/append_${s}.css`,6).then(()=>{es.info(`${s} 平台附加样式加载完成`)}).catch(()=>{es.info("未找到对应平台的附加样式")});let e=(n=i.tags.release)==null?void 0:n.split(".");if(e=e?Number(e[2]):0,i.tags.isElectron&&(s=="darwin"||s=="win32"&&e>22621)&&r(()=>Promise.resolve({}),__vite__mapDeps([4])).then(()=>{es.info("透明 UI 附加样式加载完成")}),i.tags.isElectron&&s=="linux"){const a=(o=i.reader)==null?void 0:o.invoke("sys:getGnomeExt");a&&a.then(p=>{(p["enable-all"]=="true"||(p.whitelist!=null&&p.whitelist.indexOf("stapxs-qq-lite"))>0)&&(r(()=>Promise.resolve({}),__vite__mapDeps([4])).then(()=>{es.info("透明 UI 附加样式加载完成")}),r(()=>Promise.resolve({}),__vite__mapDeps([3])).then(()=>{es.info("Linux 透明 UI 附加样式加载完成")}))})}}function Ut(){fetch("https://api.github.com/repos/stapxs/Stapxs-QQ-Lite-2.0/releases/latest").then(e=>{e.ok&&e.json().then(n=>{jt(n)})}),localStorage.setItem("version",is.version)}function jt(s){const e=is.version,n=localStorage.getItem("version"),o=s.tag_name.substring(1);Hs(e,o)==-1&&be(s,!1),n&&Hs(e,o)==0&&Hs(n,o)==-1&&be(s,!0)}function be(s,e){const n=w.config.globalProperties.$t;let o=s.body;const a=o.split(`\r
`)[0].substring(1),p=o.indexOf(`## 更新内容\r
`);if(p!=-1){o=o.substring(p+9);const _=o.indexOf("##");_!=-1&&(o=o.substring(0,_))}o=a+`\r
`+o;const g={version:(e?localStorage.getItem("version")+" -> ":"")+s.tag_name.substring(1),date:s.published_at,user:{name:s.author.login,avatar:s.author.avatar_url,url:s.author.html_url},message:o,updated:e},u=i.tags.isElectron?[{text:n("知道了"),fun:()=>i.popBoxList.shift()},{text:n("下载更新…"),master:!0,fun:()=>ss(s.html_url,!0)}]:[{text:n("查看…"),fun:()=>ss(s.html_url)},{text:n("刷新页面"),master:!0,fun:()=>location.reload()}],l={template:Et,templateValue:Ms(g),button:e?[{text:n("查看…"),fun:()=>ss(s.html_url,!0)},{text:n("知道了"),master:!0,fun:()=>{i.popBoxList.shift()}}]:u};i.popBoxList.push(l)}function Ht(){const s=w.config.globalProperties.$t,e=localStorage.getItem("times");if(e!=null){const n=Number(e)+1;if(localStorage.setItem("times",n.toString()),n%50==0){let o='<div style="display:flex;flex-direction:column;padding:10px 5%;align-items:center;">';o+='<svg style="height:2rem;fill:var(--color-font);margin-bottom:20px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M16 0H144c5.3 0 10.3 2.7 13.3 7.1l81.1 121.6c-49.5 4.1-94 25.6-127.6 58.3L2.7 24.9C-.6 20-.9 13.7 1.9 8.5S10.1 0 16 0zM509.3 24.9L401.2 187.1c-33.5-32.7-78.1-54.2-127.6-58.3L354.7 7.1c3-4.5 8-7.1 13.3-7.1H496c5.9 0 11.3 3.2 14.1 8.5s2.5 11.5-.8 16.4zM432 336c0 97.2-78.8 176-176 176s-176-78.8-176-176s78.8-176 176-176s176 78.8 176 176zM264.4 241.1c-3.4-7-13.3-7-16.8 0l-22.4 45.4c-1.4 2.8-4 4.7-7 5.1L168 298.9c-7.7 1.1-10.7 10.5-5.2 16l36.3 35.4c2.2 2.2 3.2 5.2 2.7 8.3l-8.6 49.9c-1.3 7.6 6.7 13.5 13.6 9.9l44.8-23.6c2.7-1.4 6-1.4 8.7 0l44.8 23.6c6.9 3.6 14.9-2.2 13.6-9.9l-8.6-49.9c-.5-3 .5-6.1 2.7-8.3l36.3-35.4c5.6-5.4 2.5-14.8-5.2-16l-50.1-7.3c-3-.4-5.7-2.4-7-5.1l-22.4-45.4z"/></svg>',o+=`<span>${s("好耶！Stapxs QQ Lite 已经被打开 {times} 次了！",{times:n})}</span>`,o+=`<span>${s("真的不去点个 star 吗 ……")}</span>`,o+="</div>";const a={title:s("好耶"),svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>',html:o,button:[{text:s("不要"),fun:()=>{i.popBoxList.shift()}},{text:s("好喔"),master:!0,fun:()=>{ss("https://github.com/Stapxs/Stapxs-QQ-Lite-2.0"),i.popBoxList.shift()}}]};i.popBoxList.push(a)}}else{localStorage.setItem("times","1");const n={template:Tt,button:[{text:"close",master:!0,fun:()=>{i.popBoxList.shift()}}]};i.popBoxList.push(n)}}function Qt(){const s="https://lib.stapxs.cn/download/stapxs-qq-lite/notice-config.json",e={time:new Date().getTime().toString()};fetch(s+"?"+new URLSearchParams(e).toString()).then(n=>n.json()).then(n=>{let o=[];const a=localStorage.getItem("notice_show");a&&(o=a.split(",").map(p=>parseInt(p))),n.forEach(p=>{let g=!1;if(p.show_date?typeof p.show_date=="string"&&new Date().toDateString()===new Date(p.show_date).toDateString()?g=!0:typeof p.show_date=="object"&&p.show_date.forEach(u=>{new Date().toDateString()===new Date(u).toDateString()&&(g=!0)}):g=!0,p.version==2&&o.indexOf(p.id.toString())<0&&g)for(let u=0;u<p.pops.length;u++){const l=p.pops[u],_={title:l.title,html:l.html?l.html:"",button:[{text:p.pops.length>1&&u!=p.pops.length-1?w.config.globalProperties.$t("继续"):w.config.globalProperties.$t("确定"),master:!0,fun:()=>{o.indexOf(p.id)<0&&o.push(p.id),localStorage.setItem("notice_show",o.toString()),i.popBoxList.shift()}}]};i.popBoxList.push(_)}})})}function je(s){let e;if(s!==void 0)try{const n=Object.assign({"/src/assets/pathMap/LLOneBot.yaml":ie,"/src/assets/pathMap/Lagrange.OneBot.yaml":oe,"/src/assets/pathMap/NapCat.Onebot.yaml":re}),o=Object.keys(n).find(a=>a.includes(s));if(o&&(e=n[o].default),e&&(es.debug("加载映射表："+e.name),e.redirect)){const a=Object.keys(n).find(g=>g.includes(e==null?void 0:e.redirect));let p;a&&(p=n[a].default),Object.keys(e).forEach(g=>{p&&g!="name"&&p[g]&&e&&(p[g]=e[g])}),e=p,es.debug("加载映射表（重定向）："+(e==null?void 0:e.name))}i.jsonMap=e}catch(n){es.debug("加载映射表失败："+n)}return e}function x(s,e){k.get("close_ga")}const gs=new G,Cs=new M;let Qs=0,ns;class O{static create(e,n,o=void 0){const a=w.config.globalProperties.$t;if(i.tags.isElectron){gs.add(N.WS,"使用后端连接模式");const g=i.reader;if(g){g.send("onebot:connect",{address:e,token:n});return}}if(o==null?Qs=0:Qs++,Qs>5)return;gs.debug("当前处于 debug 日志模式。连接器将仅输出发出的消息 ……"),gs.add(N.WS,"当前处于 all 日志模式。连接器将输出全部收发消息 ……");let p=`ws://${e}?access_token=${n}`;e.startsWith("ws://")||e.startsWith("wss://")?p=`${e}?access_token=${n}`:o==null?document.location.protocol=="https:"&&(i.tags.connectSsl=!0,p=`wss://${e}?access_token=${n}`):o&&(p=`wss://${e}?access_token=${n}`),ns||(ns=new WebSocket(p)),ns.onopen=()=>{this.onopen(e,n)},ns.onmessage=g=>{this.onmessage(g.data)},ns.onclose=g=>{this.onclose(g.code,g.reason,e,n)},ns.onerror=g=>{Cs.add(P.ERR,a("连接失败")+": "+g.type,!1)}}static onopen(e,n){gs.add(N.WS,"连接成功"),k.save("address",e),i.sysConfig.save_password&&i.sysConfig.save_password!=""&&k.save("save_password",n),Cs.clear(),O.send("get_version_info",{},"getVersionInfo"),Is({id:"logout",action:"visible",value:!0})}static onmessage(e){Gt(e)}static onclose(e,n,o,a){const p=w.config.globalProperties.$t;switch(ns=void 0,Is({id:"logout",action:"visible",value:!1}),Is({id:"userName",action:"label",value:p("连接")}),e){case 1e3:break;case 1006:{J.status?this.create(o,a,void 0):this.create(o,a,!1);break}case 1015:{this.create(o,a,!1);break}default:Cs.add(P.ERR,p("连接失败")+": "+e,!1)}gs.error(null,p("连接失败")+": "+e),J.status=!1}static close(){if(i.tags.isElectron){const e=i.reader;e&&e.send("onebot:close")}else Cs.add(P.INFO,w.config.globalProperties.$t("正在断开链接……")),ns&&ns.close(1e3)}static send(e,n,o=e){const a=JSON.stringify({action:e,params:n,echo:o});this.sendRaw(a)}static sendRaw(e){if(i.tags.isElectron){const n=i.reader;n&&n.send("onebot:send",e)}else ns&&ns.send(e);k.get("log_level")==="debug"?gs.add(N.DEBUG,"PUT：",JSON.parse(e)):gs.add(N.WS,"PUT：",JSON.parse(e))}}const J=W({status:!1,address:"",token:""}),Ss=new G;function U(s,e,n){let o;if(n!=null)if(typeof n=="string"||n.source!=null)try{if(o=Ds.query(e,zs(typeof n=="string"?n:n.source)),o&&typeof n!="string"&&n.list!=null){const a=[];o.forEach(p=>{const g={};Object.keys(n.list).forEach(u=>{if(n.list[u]&&n.list[u]!="")if(n.list[u].startsWith("/"))g[u]=p[n.list[u].substring(1)];else{let l=n.list[u],_=null;if(l.indexOf("@")>-1){const[E,h]=l.split("@");l=E,_=h}if(g[u]=Ds.query(p,zs(l)),_!=null){const E=new RegExp(_),h=g[u].match(E);h!=null&&(g[u]=h[0])}}}),a.push(g)}),o=a}}catch(a){Ss.error(a,`解析消息 JSON 错误：${s} -> ${n}`)}else{const a={};Object.keys(n).forEach(p=>{if(n[p]!=null&&n[p]!==""&&!p.startsWith("_"))try{a[p]=Ds.query(e,zs(n[p]))[0]}catch(g){Ss.error(g,`解析 JSON 错误：${s} -> ${n}`)}}),o=[a]}return o}function zs(s){return s.replaceAll("<uin>",i.loginInfo.uin)}function ge(s){const e=Object.assign({"/src/assets/img/qq-face/public/gif/s0.gif":()=>r(()=>import("./s0-CC0IDS5H.js"),[]),"/src/assets/img/qq-face/public/gif/s1.gif":()=>r(()=>import("./s1-DWPu5IfW.js"),[]),"/src/assets/img/qq-face/public/gif/s10.gif":()=>r(()=>import("./s10-2wWBmhGa.js"),[]),"/src/assets/img/qq-face/public/gif/s100.gif":()=>r(()=>import("./s100-DuK2HTJv.js"),[]),"/src/assets/img/qq-face/public/gif/s101.gif":()=>r(()=>import("./s101-DwOKbL6Z.js"),[]),"/src/assets/img/qq-face/public/gif/s102.gif":()=>r(()=>import("./s102-DdQgTuHa.js"),[]),"/src/assets/img/qq-face/public/gif/s103.gif":()=>r(()=>import("./s103-CmPpEihM.js"),[]),"/src/assets/img/qq-face/public/gif/s104.gif":()=>r(()=>import("./s104-C46MskN5.js"),[]),"/src/assets/img/qq-face/public/gif/s105.gif":()=>r(()=>import("./s105-DW-dnSA_.js"),[]),"/src/assets/img/qq-face/public/gif/s106.gif":()=>r(()=>import("./s106-DbfLq66L.js"),[]),"/src/assets/img/qq-face/public/gif/s107.gif":()=>r(()=>import("./s107-CFV_oZmX.js"),[]),"/src/assets/img/qq-face/public/gif/s108.gif":()=>r(()=>import("./s108-CxTE52kX.js"),[]),"/src/assets/img/qq-face/public/gif/s109.gif":()=>r(()=>import("./s109-B5SKYC5p.js"),[]),"/src/assets/img/qq-face/public/gif/s11.gif":()=>r(()=>import("./s11-Ba-0NGZk.js"),[]),"/src/assets/img/qq-face/public/gif/s110.gif":()=>r(()=>import("./s110-CU-pxGHN.js"),[]),"/src/assets/img/qq-face/public/gif/s111.gif":()=>r(()=>import("./s111-CfrraQQQ.js"),[]),"/src/assets/img/qq-face/public/gif/s112.gif":()=>r(()=>import("./s112-Dl2BlpkX.js"),[]),"/src/assets/img/qq-face/public/gif/s113.gif":()=>r(()=>import("./s113-DM9yrTN0.js"),[]),"/src/assets/img/qq-face/public/gif/s114.gif":()=>r(()=>import("./s114-3H9BEZzi.js"),[]),"/src/assets/img/qq-face/public/gif/s115.gif":()=>r(()=>import("./s115-Cl-PY2SF.js"),[]),"/src/assets/img/qq-face/public/gif/s116.gif":()=>r(()=>import("./s116-M3irl_CD.js"),[]),"/src/assets/img/qq-face/public/gif/s117.gif":()=>r(()=>import("./s117-De8pn1le.js"),[]),"/src/assets/img/qq-face/public/gif/s118.gif":()=>r(()=>import("./s118-BIZdjl-k.js"),[]),"/src/assets/img/qq-face/public/gif/s119.gif":()=>r(()=>import("./s119-DuOmPm99.js"),[]),"/src/assets/img/qq-face/public/gif/s12.gif":()=>r(()=>import("./s12-Bmta3eMm.js"),[]),"/src/assets/img/qq-face/public/gif/s120.gif":()=>r(()=>import("./s120-C1VrXGWh.js"),[]),"/src/assets/img/qq-face/public/gif/s121.gif":()=>r(()=>import("./s121-BTsPjXic.js"),[]),"/src/assets/img/qq-face/public/gif/s122.gif":()=>r(()=>import("./s122-BV9rp_7q.js"),[]),"/src/assets/img/qq-face/public/gif/s123.gif":()=>r(()=>import("./s123-DlqelxDm.js"),[]),"/src/assets/img/qq-face/public/gif/s124.gif":()=>r(()=>import("./s124-b-m03J7l.js"),[]),"/src/assets/img/qq-face/public/gif/s125.gif":()=>r(()=>import("./s125-Vh-a0T5K.js"),[]),"/src/assets/img/qq-face/public/gif/s126.gif":()=>r(()=>import("./s126-CFTzQEEc.js"),[]),"/src/assets/img/qq-face/public/gif/s127.gif":()=>r(()=>import("./s127-Cx298wIp.js"),[]),"/src/assets/img/qq-face/public/gif/s128.gif":()=>r(()=>import("./s128-XIdGxatm.js"),[]),"/src/assets/img/qq-face/public/gif/s129.gif":()=>r(()=>import("./s129-CcAISmli.js"),[]),"/src/assets/img/qq-face/public/gif/s13.gif":()=>r(()=>import("./s13-DCBUViMJ.js"),[]),"/src/assets/img/qq-face/public/gif/s130.gif":()=>r(()=>import("./s130-Bjc8ga5R.js"),[]),"/src/assets/img/qq-face/public/gif/s131.gif":()=>r(()=>import("./s131-6L2l0p72.js"),[]),"/src/assets/img/qq-face/public/gif/s132.gif":()=>r(()=>import("./s132-NgTKPJjj.js"),[]),"/src/assets/img/qq-face/public/gif/s133.gif":()=>r(()=>import("./s133-aQdJbMp-.js"),[]),"/src/assets/img/qq-face/public/gif/s134.gif":()=>r(()=>import("./s134-DT3Ekp4e.js"),[]),"/src/assets/img/qq-face/public/gif/s135.gif":()=>r(()=>import("./s135-CtnF1hsl.js"),[]),"/src/assets/img/qq-face/public/gif/s136.gif":()=>r(()=>import("./s136-BMwg4rdO.js"),[]),"/src/assets/img/qq-face/public/gif/s137.gif":()=>r(()=>import("./s137-D6eF0g6I.js"),[]),"/src/assets/img/qq-face/public/gif/s138.gif":()=>r(()=>import("./s138-BwuHpIwx.js"),[]),"/src/assets/img/qq-face/public/gif/s14.gif":()=>r(()=>import("./s14-CkeEeHJU.js"),[]),"/src/assets/img/qq-face/public/gif/s140.gif":()=>r(()=>import("./s140-j-dq_xMZ.js"),[]),"/src/assets/img/qq-face/public/gif/s144.gif":()=>r(()=>import("./s144-D3x6v9QY.js"),[]),"/src/assets/img/qq-face/public/gif/s146.gif":()=>r(()=>import("./s146-ChU6cznM.js"),[]),"/src/assets/img/qq-face/public/gif/s147.gif":()=>r(()=>import("./s147-QAmrsiZF.js"),[]),"/src/assets/img/qq-face/public/gif/s148.gif":()=>r(()=>import("./s148-Dp9rgSvC.js"),[]),"/src/assets/img/qq-face/public/gif/s151.gif":()=>r(()=>import("./s151-BtizPcPc.js"),[]),"/src/assets/img/qq-face/public/gif/s158.gif":()=>r(()=>import("./s158-Efvku4U7.js"),[]),"/src/assets/img/qq-face/public/gif/s16.gif":()=>r(()=>import("./s16-C-z4Hv8v.js"),[]),"/src/assets/img/qq-face/public/gif/s168.gif":()=>r(()=>import("./s168-F8wLq-kl.js"),[]),"/src/assets/img/qq-face/public/gif/s169.gif":()=>r(()=>import("./s169-Vl0F4EYp.js"),[]),"/src/assets/img/qq-face/public/gif/s171.gif":()=>r(()=>import("./s171-HphgaH5u.js"),[]),"/src/assets/img/qq-face/public/gif/s172.gif":()=>r(()=>import("./s172-Bo9t-3mj.js"),[]),"/src/assets/img/qq-face/public/gif/s173.gif":()=>r(()=>import("./s173-W6CAibIk.js"),[]),"/src/assets/img/qq-face/public/gif/s174.gif":()=>r(()=>import("./s174-DvFDaa4C.js"),[]),"/src/assets/img/qq-face/public/gif/s175.gif":()=>r(()=>import("./s175-BARyul_l.js"),[]),"/src/assets/img/qq-face/public/gif/s176.gif":()=>r(()=>import("./s176-B-TLjets.js"),[]),"/src/assets/img/qq-face/public/gif/s177.gif":()=>r(()=>import("./s177-DdDl1CKh.js"),[]),"/src/assets/img/qq-face/public/gif/s178.gif":()=>r(()=>import("./s178-cy3rv96W.js"),[]),"/src/assets/img/qq-face/public/gif/s179.gif":()=>r(()=>import("./s179-qrtlsKuC.js"),[]),"/src/assets/img/qq-face/public/gif/s18.gif":()=>r(()=>import("./s18-KOQ7q3_d.js"),[]),"/src/assets/img/qq-face/public/gif/s180.gif":()=>r(()=>import("./s180-Bb84DcO1.js"),[]),"/src/assets/img/qq-face/public/gif/s181.gif":()=>r(()=>import("./s181-TEG8OSc5.js"),[]),"/src/assets/img/qq-face/public/gif/s182.gif":()=>r(()=>import("./s182-CNzwWltJ.js"),[]),"/src/assets/img/qq-face/public/gif/s183.gif":()=>r(()=>import("./s183-AlxRXW0w.js"),[]),"/src/assets/img/qq-face/public/gif/s184.gif":()=>r(()=>import("./s184-29ZSw3kF.js"),[]),"/src/assets/img/qq-face/public/gif/s185.gif":()=>r(()=>import("./s185-DoYqRtUN.js"),[]),"/src/assets/img/qq-face/public/gif/s186.gif":()=>r(()=>import("./s186-DNM_hB0f.js"),[]),"/src/assets/img/qq-face/public/gif/s187.gif":()=>r(()=>import("./s187-CJ68GBcP.js"),[]),"/src/assets/img/qq-face/public/gif/s188.gif":()=>r(()=>import("./s188-CVwzUgJZ.js"),[]),"/src/assets/img/qq-face/public/gif/s189.gif":()=>r(()=>import("./s189-IdvH6WEJ.js"),[]),"/src/assets/img/qq-face/public/gif/s19.gif":()=>r(()=>import("./s19-BPtrtxwd.js"),[]),"/src/assets/img/qq-face/public/gif/s190.gif":()=>r(()=>import("./s190-qSHwQB5v.js"),[]),"/src/assets/img/qq-face/public/gif/s191.gif":()=>r(()=>import("./s191-urbQ3eNI.js"),[]),"/src/assets/img/qq-face/public/gif/s192.gif":()=>r(()=>import("./s192-DiEvsYtE.js"),[]),"/src/assets/img/qq-face/public/gif/s194.gif":()=>r(()=>import("./s194-CmEDkxt1.js"),[]),"/src/assets/img/qq-face/public/gif/s195.gif":()=>r(()=>import("./s195-Cm79xFZd.js"),[]),"/src/assets/img/qq-face/public/gif/s196.gif":()=>r(()=>import("./s196-D8lsPnjj.js"),[]),"/src/assets/img/qq-face/public/gif/s197.gif":()=>r(()=>import("./s197-CyKVkLvO.js"),[]),"/src/assets/img/qq-face/public/gif/s198.gif":()=>r(()=>import("./s198-2dK2Gq7d.js"),[]),"/src/assets/img/qq-face/public/gif/s199.gif":()=>r(()=>import("./s199-D2nMotm7.js"),[]),"/src/assets/img/qq-face/public/gif/s2.gif":()=>r(()=>import("./s2-DL0e1WxB.js"),[]),"/src/assets/img/qq-face/public/gif/s20.gif":()=>r(()=>import("./s20-Bbdj7gWe.js"),[]),"/src/assets/img/qq-face/public/gif/s200.gif":()=>r(()=>import("./s200-C_nFvGb2.js"),[]),"/src/assets/img/qq-face/public/gif/s201.gif":()=>r(()=>import("./s201-CG3bZuvx.js"),[]),"/src/assets/img/qq-face/public/gif/s202.gif":()=>r(()=>import("./s202-BDlkmwoo.js"),[]),"/src/assets/img/qq-face/public/gif/s203.gif":()=>r(()=>import("./s203-DQQLUknZ.js"),[]),"/src/assets/img/qq-face/public/gif/s204.gif":()=>r(()=>import("./s204-DiqXRnbT.js"),[]),"/src/assets/img/qq-face/public/gif/s205.gif":()=>r(()=>import("./s205-BHPWkFEV.js"),[]),"/src/assets/img/qq-face/public/gif/s206.gif":()=>r(()=>import("./s206-Bf3wS_xd.js"),[]),"/src/assets/img/qq-face/public/gif/s207.gif":()=>r(()=>import("./s207-BQ6KLbyg.js"),[]),"/src/assets/img/qq-face/public/gif/s208.gif":()=>r(()=>import("./s208-RzkwPnOj.js"),[]),"/src/assets/img/qq-face/public/gif/s209.gif":()=>r(()=>import("./s209-DxOFVfBm.js"),[]),"/src/assets/img/qq-face/public/gif/s21.gif":()=>r(()=>import("./s21-BnvW9cfx.js"),[]),"/src/assets/img/qq-face/public/gif/s210.gif":()=>r(()=>import("./s210-D-ssRJkp.js"),[]),"/src/assets/img/qq-face/public/gif/s211.gif":()=>r(()=>import("./s211-CSn9adHc.js"),[]),"/src/assets/img/qq-face/public/gif/s212.gif":()=>r(()=>import("./s212-CFJLcE25.js"),[]),"/src/assets/img/qq-face/public/gif/s213.gif":()=>r(()=>import("./s213-DKkANlSO.js"),[]),"/src/assets/img/qq-face/public/gif/s214.gif":()=>r(()=>import("./s214-G03eTKX8.js"),[]),"/src/assets/img/qq-face/public/gif/s215.gif":()=>r(()=>import("./s215-BFmzHvlT.js"),[]),"/src/assets/img/qq-face/public/gif/s216.gif":()=>r(()=>import("./s216-D_hbxrlr.js"),[]),"/src/assets/img/qq-face/public/gif/s217.gif":()=>r(()=>import("./s217-CY5bxWW0.js"),[]),"/src/assets/img/qq-face/public/gif/s218.gif":()=>r(()=>import("./s218-8ydggwXY.js"),[]),"/src/assets/img/qq-face/public/gif/s219.gif":()=>r(()=>import("./s219-Bn9Dbq7K.js"),[]),"/src/assets/img/qq-face/public/gif/s22.gif":()=>r(()=>import("./s22-u_SMIl0P.js"),[]),"/src/assets/img/qq-face/public/gif/s220.gif":()=>r(()=>import("./s220-CrAho-4q.js"),[]),"/src/assets/img/qq-face/public/gif/s221.gif":()=>r(()=>import("./s221-DRCfNGgo.js"),[]),"/src/assets/img/qq-face/public/gif/s222.gif":()=>r(()=>import("./s222-lc6zmSCL.js"),[]),"/src/assets/img/qq-face/public/gif/s223.gif":()=>r(()=>import("./s223-_LScxsmt.js"),[]),"/src/assets/img/qq-face/public/gif/s224.gif":()=>r(()=>import("./s224-DVbjBFIl.js"),[]),"/src/assets/img/qq-face/public/gif/s225.gif":()=>r(()=>import("./s225-DyScrWhZ.js"),[]),"/src/assets/img/qq-face/public/gif/s226.gif":()=>r(()=>import("./s226-GWMAjYy-.js"),[]),"/src/assets/img/qq-face/public/gif/s227.gif":()=>r(()=>import("./s227--o3DTSLV.js"),[]),"/src/assets/img/qq-face/public/gif/s228.gif":()=>r(()=>import("./s228-DxcZ7hTR.js"),[]),"/src/assets/img/qq-face/public/gif/s229.gif":()=>r(()=>import("./s229-DOzkkJyd.js"),[]),"/src/assets/img/qq-face/public/gif/s23.gif":()=>r(()=>import("./s23-E_VEhpJG.js"),[]),"/src/assets/img/qq-face/public/gif/s230.gif":()=>r(()=>import("./s230-DsenUiUD.js"),[]),"/src/assets/img/qq-face/public/gif/s231.gif":()=>r(()=>import("./s231-Dr7wKAdd.js"),[]),"/src/assets/img/qq-face/public/gif/s232.gif":()=>r(()=>import("./s232-BpE4nLC7.js"),[]),"/src/assets/img/qq-face/public/gif/s233.gif":()=>r(()=>import("./s233-3Pch5VOP.js"),[]),"/src/assets/img/qq-face/public/gif/s234.gif":()=>r(()=>import("./s234-OJ2HS_e7.js"),[]),"/src/assets/img/qq-face/public/gif/s235.gif":()=>r(()=>import("./s235-Ck1xl02I.js"),[]),"/src/assets/img/qq-face/public/gif/s236.gif":()=>r(()=>import("./s236-CsAO-2Qk.js"),[]),"/src/assets/img/qq-face/public/gif/s237.gif":()=>r(()=>import("./s237-B8Wx0CRa.js"),[]),"/src/assets/img/qq-face/public/gif/s238.gif":()=>r(()=>import("./s238-w6AO1CFs.js"),[]),"/src/assets/img/qq-face/public/gif/s239.gif":()=>r(()=>import("./s239-Cjhk7aHV.js"),[]),"/src/assets/img/qq-face/public/gif/s24.gif":()=>r(()=>import("./s24-D62zigYs.js"),[]),"/src/assets/img/qq-face/public/gif/s240.gif":()=>r(()=>import("./s240-whTXp3tH.js"),[]),"/src/assets/img/qq-face/public/gif/s241.gif":()=>r(()=>import("./s241-CLzA3GKw.js"),[]),"/src/assets/img/qq-face/public/gif/s242.gif":()=>r(()=>import("./s242-75LaJXL8.js"),[]),"/src/assets/img/qq-face/public/gif/s243.gif":()=>r(()=>import("./s243-Ds27WOSM.js"),[]),"/src/assets/img/qq-face/public/gif/s244.gif":()=>r(()=>import("./s244-aho9_LMV.js"),[]),"/src/assets/img/qq-face/public/gif/s245.gif":()=>r(()=>import("./s245-Cwrbc2fB.js"),[]),"/src/assets/img/qq-face/public/gif/s246.gif":()=>r(()=>import("./s246-B6Sd3AOQ.js"),[]),"/src/assets/img/qq-face/public/gif/s247.gif":()=>r(()=>import("./s247-y52Tmu4I.js"),[]),"/src/assets/img/qq-face/public/gif/s25.gif":()=>r(()=>import("./s25-D6_93UjZ.js"),[]),"/src/assets/img/qq-face/public/gif/s26.gif":()=>r(()=>import("./s26-DCq3KFDY.js"),[]),"/src/assets/img/qq-face/public/gif/s260.gif":()=>r(()=>import("./s260-03UulX8a.js"),[]),"/src/assets/img/qq-face/public/gif/s261.gif":()=>r(()=>import("./s261-CuYe384l.js"),[]),"/src/assets/img/qq-face/public/gif/s262.gif":()=>r(()=>import("./s262-DkHDhFn5.js"),[]),"/src/assets/img/qq-face/public/gif/s263.gif":()=>r(()=>import("./s263-DpPxqRsc.js"),[]),"/src/assets/img/qq-face/public/gif/s264.gif":()=>r(()=>import("./s264-BMEVF5W1.js"),[]),"/src/assets/img/qq-face/public/gif/s265.gif":()=>r(()=>import("./s265-DINPyKcK.js"),[]),"/src/assets/img/qq-face/public/gif/s266.gif":()=>r(()=>import("./s266-BeTCP5uP.js"),[]),"/src/assets/img/qq-face/public/gif/s267.gif":()=>r(()=>import("./s267-B99gwjnt.js"),[]),"/src/assets/img/qq-face/public/gif/s268.gif":()=>r(()=>import("./s268-CYIR2dYt.js"),[]),"/src/assets/img/qq-face/public/gif/s269.gif":()=>r(()=>import("./s269-Cmh1_SVn.js"),[]),"/src/assets/img/qq-face/public/gif/s27.gif":()=>r(()=>import("./s27-Bp8QukGB.js"),[]),"/src/assets/img/qq-face/public/gif/s270.gif":()=>r(()=>import("./s270-DcnzcXQf.js"),[]),"/src/assets/img/qq-face/public/gif/s271.gif":()=>r(()=>import("./s271-DXnJqsm1.js"),[]),"/src/assets/img/qq-face/public/gif/s272.gif":()=>r(()=>import("./s272-BnUnJ9nG.js"),[]),"/src/assets/img/qq-face/public/gif/s273.gif":()=>r(()=>import("./s273-DUscKw2M.js"),[]),"/src/assets/img/qq-face/public/gif/s274.gif":()=>r(()=>import("./s274-C02NXZKG.js"),[]),"/src/assets/img/qq-face/public/gif/s277.gif":()=>r(()=>import("./s277-BZKbp64i.js"),[]),"/src/assets/img/qq-face/public/gif/s278.gif":()=>r(()=>import("./s278-CRK6GrId.js"),[]),"/src/assets/img/qq-face/public/gif/s279.gif":()=>r(()=>import("./s279-CnilXFHr.js"),[]),"/src/assets/img/qq-face/public/gif/s28.gif":()=>r(()=>import("./s28-D5uwAwrc.js"),[]),"/src/assets/img/qq-face/public/gif/s280.gif":()=>r(()=>import("./s280-BzTJ9YEy.js"),[]),"/src/assets/img/qq-face/public/gif/s281.gif":()=>r(()=>import("./s281-CfgN_o-Z.js"),[]),"/src/assets/img/qq-face/public/gif/s282.gif":()=>r(()=>import("./s282-D22yZ0w0.js"),[]),"/src/assets/img/qq-face/public/gif/s283.gif":()=>r(()=>import("./s283-D1RBCaIT.js"),[]),"/src/assets/img/qq-face/public/gif/s284.gif":()=>r(()=>import("./s284-BV3IT3CB.js"),[]),"/src/assets/img/qq-face/public/gif/s285.gif":()=>r(()=>import("./s285-e5fdpRJY.js"),[]),"/src/assets/img/qq-face/public/gif/s286.gif":()=>r(()=>import("./s286-BEOgnmwS.js"),[]),"/src/assets/img/qq-face/public/gif/s287.gif":()=>r(()=>import("./s287-IS9CcCeY.js"),[]),"/src/assets/img/qq-face/public/gif/s288.gif":()=>r(()=>import("./s288-BjLrj6kM.js"),[]),"/src/assets/img/qq-face/public/gif/s289.gif":()=>r(()=>import("./s289-KeLfjWkD.js"),[]),"/src/assets/img/qq-face/public/gif/s29.gif":()=>r(()=>import("./s29-BW0pil8Y.js"),[]),"/src/assets/img/qq-face/public/gif/s290.gif":()=>r(()=>import("./s290-1Wx-s2-7.js"),[]),"/src/assets/img/qq-face/public/gif/s291.gif":()=>r(()=>import("./s291-BPoJVi8n.js"),[]),"/src/assets/img/qq-face/public/gif/s292.gif":()=>r(()=>import("./s292-DGjouxKF.js"),[]),"/src/assets/img/qq-face/public/gif/s293.gif":()=>r(()=>import("./s293-CFt6e8st.js"),[]),"/src/assets/img/qq-face/public/gif/s294.gif":()=>r(()=>import("./s294-7MVJ8XVD.js"),[]),"/src/assets/img/qq-face/public/gif/s295.gif":()=>r(()=>import("./s295-CQtFWOMF.js"),[]),"/src/assets/img/qq-face/public/gif/s296.gif":()=>r(()=>import("./s296-BcMYibO2.js"),[]),"/src/assets/img/qq-face/public/gif/s297.gif":()=>r(()=>import("./s297-9kABD-76.js"),[]),"/src/assets/img/qq-face/public/gif/s298.gif":()=>r(()=>import("./s298-DBBm7RED.js"),[]),"/src/assets/img/qq-face/public/gif/s299.gif":()=>r(()=>import("./s299-cc_vOxX1.js"),[]),"/src/assets/img/qq-face/public/gif/s3.gif":()=>r(()=>import("./s3-BVH8NleE.js"),[]),"/src/assets/img/qq-face/public/gif/s30.gif":()=>r(()=>import("./s30-BcTLjjwj.js"),[]),"/src/assets/img/qq-face/public/gif/s300.gif":()=>r(()=>import("./s300-CFB4B62l.js"),[]),"/src/assets/img/qq-face/public/gif/s301.gif":()=>r(()=>import("./s301-CHhZuszl.js"),[]),"/src/assets/img/qq-face/public/gif/s302.gif":()=>r(()=>import("./s302-pvAzYU9e.js"),[]),"/src/assets/img/qq-face/public/gif/s303.gif":()=>r(()=>import("./s303-1OKxTq9Y.js"),[]),"/src/assets/img/qq-face/public/gif/s304.gif":()=>r(()=>import("./s304-CcTE-j0r.js"),[]),"/src/assets/img/qq-face/public/gif/s305.gif":()=>r(()=>import("./s305-3CPntBIT.js"),[]),"/src/assets/img/qq-face/public/gif/s306.gif":()=>r(()=>import("./s306-DdFiU-6n.js"),[]),"/src/assets/img/qq-face/public/gif/s306.png":()=>r(()=>import("./s306-B6TUUCvj.js"),[]),"/src/assets/img/qq-face/public/gif/s307.gif":()=>r(()=>import("./s307-BD98Ek7V.js"),[]),"/src/assets/img/qq-face/public/gif/s307.png":()=>r(()=>import("./s307-YM8_cD9p.js"),[]),"/src/assets/img/qq-face/public/gif/s308.gif":()=>r(()=>import("./s308-ChEBKHu2.js"),[]),"/src/assets/img/qq-face/public/gif/s309.gif":()=>r(()=>import("./s309-CE-6hhm7.js"),[]),"/src/assets/img/qq-face/public/gif/s31.gif":()=>r(()=>import("./s31-CAaqcpV5.js"),[]),"/src/assets/img/qq-face/public/gif/s310.gif":()=>r(()=>import("./s310-DxV0xoiF.js"),[]),"/src/assets/img/qq-face/public/gif/s311.gif":()=>r(()=>import("./s311-RfzAl2aS.js"),[]),"/src/assets/img/qq-face/public/gif/s312.gif":()=>r(()=>import("./s312-Bq_BoVW1.js"),[]),"/src/assets/img/qq-face/public/gif/s313.gif":()=>r(()=>import("./s313-CnabmYCa.js"),[]),"/src/assets/img/qq-face/public/gif/s314.gif":()=>r(()=>import("./s314-CLrZfnSu.js"),[]),"/src/assets/img/qq-face/public/gif/s315.gif":()=>r(()=>import("./s315-wYmXYBgd.js"),[]),"/src/assets/img/qq-face/public/gif/s316.gif":()=>r(()=>import("./s316-ClcqOtuA.js"),[]),"/src/assets/img/qq-face/public/gif/s317.gif":()=>r(()=>import("./s317-C5hBEL1K.js"),[]),"/src/assets/img/qq-face/public/gif/s318.gif":()=>r(()=>import("./s318-BtG5130P.js"),[]),"/src/assets/img/qq-face/public/gif/s319.gif":()=>r(()=>import("./s319-DfCx1yt4.js"),[]),"/src/assets/img/qq-face/public/gif/s32.gif":()=>r(()=>import("./s32-DQ1vwWw3.js"),[]),"/src/assets/img/qq-face/public/gif/s320.gif":()=>r(()=>import("./s320-BPp7I7wN.js"),[]),"/src/assets/img/qq-face/public/gif/s321.gif":()=>r(()=>import("./s321-BjJhZ6fU.js"),[]),"/src/assets/img/qq-face/public/gif/s322.gif":()=>r(()=>import("./s322-BVcmrmzm.js"),[]),"/src/assets/img/qq-face/public/gif/s323.gif":()=>r(()=>import("./s323-BS0alBbU.js"),[]),"/src/assets/img/qq-face/public/gif/s324.gif":()=>r(()=>import("./s324-ClQ5FW3Z.js"),[]),"/src/assets/img/qq-face/public/gif/s325.gif":()=>r(()=>import("./s325-DJFniX6o.js"),[]),"/src/assets/img/qq-face/public/gif/s326.gif":()=>r(()=>import("./s326-CK3kxXCf.js"),[]),"/src/assets/img/qq-face/public/gif/s327.gif":()=>r(()=>import("./s327-BaqVWcz-.js"),[]),"/src/assets/img/qq-face/public/gif/s328.gif":()=>r(()=>import("./s328-B96r67qr.js"),[]),"/src/assets/img/qq-face/public/gif/s329.gif":()=>r(()=>import("./s329-CVg5Ve7D.js"),[]),"/src/assets/img/qq-face/public/gif/s33.gif":()=>r(()=>import("./s33-BQJ1dvee.js"),[]),"/src/assets/img/qq-face/public/gif/s330.gif":()=>r(()=>import("./s330-C7FE9Evh.js"),[]),"/src/assets/img/qq-face/public/gif/s331.gif":()=>r(()=>import("./s331-pFR8lIm7.js"),[]),"/src/assets/img/qq-face/public/gif/s332.gif":()=>r(()=>import("./s332-YWHIjViN.js"),[]),"/src/assets/img/qq-face/public/gif/s333.png":()=>r(()=>import("./s333-oM56f5jf.js"),[]),"/src/assets/img/qq-face/public/gif/s334.png":()=>r(()=>import("./s334-BK2WM5PL.js"),[]),"/src/assets/img/qq-face/public/gif/s335.png":()=>r(()=>import("./s335-CNy_uTha.js"),[]),"/src/assets/img/qq-face/public/gif/s336.png":()=>r(()=>import("./s336-DWUiNO4v.js"),[]),"/src/assets/img/qq-face/public/gif/s337.gif":()=>r(()=>import("./s337-CoCPl4qB.js"),[]),"/src/assets/img/qq-face/public/gif/s338.gif":()=>r(()=>import("./s338-DABdn92L.js"),[]),"/src/assets/img/qq-face/public/gif/s339.gif":()=>r(()=>import("./s339-DySj3Uwv.js"),[]),"/src/assets/img/qq-face/public/gif/s34.gif":()=>r(()=>import("./s34-g4TGXz3X.js"),[]),"/src/assets/img/qq-face/public/gif/s340.gif":()=>r(()=>import("./s340-D0CNBx1x.js"),[]),"/src/assets/img/qq-face/public/gif/s341.gif":()=>r(()=>import("./s341-BGuzeY-v.js"),[]),"/src/assets/img/qq-face/public/gif/s342.gif":()=>r(()=>import("./s342-B2GgTAec.js"),[]),"/src/assets/img/qq-face/public/gif/s343.gif":()=>r(()=>import("./s343-B6NxSXeW.js"),[]),"/src/assets/img/qq-face/public/gif/s344.gif":()=>r(()=>import("./s344-OC2NveUO.js"),[]),"/src/assets/img/qq-face/public/gif/s345.gif":()=>r(()=>import("./s345-DRYZMsyL.js"),[]),"/src/assets/img/qq-face/public/gif/s346.gif":()=>r(()=>import("./s346-DsW3iFHr.js"),[]),"/src/assets/img/qq-face/public/gif/s347.png":()=>r(()=>import("./s347-BAUuqICC.js"),[]),"/src/assets/img/qq-face/public/gif/s348.png":()=>r(()=>import("./s348-jfG1E00K.js"),[]),"/src/assets/img/qq-face/public/gif/s35.gif":()=>r(()=>import("./s35-Bs0AbSNU.js"),[]),"/src/assets/img/qq-face/public/gif/s37.gif":()=>r(()=>import("./s37-C5d3Bctq.js"),[]),"/src/assets/img/qq-face/public/gif/s38.gif":()=>r(()=>import("./s38-CGaH7SAC.js"),[]),"/src/assets/img/qq-face/public/gif/s39.gif":()=>r(()=>import("./s39-BMJVecgl.js"),[]),"/src/assets/img/qq-face/public/gif/s4.gif":()=>r(()=>import("./s4-onssptX0.js"),[]),"/src/assets/img/qq-face/public/gif/s42.gif":()=>r(()=>import("./s42-82QXxQZb.js"),[]),"/src/assets/img/qq-face/public/gif/s43.gif":()=>r(()=>import("./s43-jjlSOqKB.js"),[]),"/src/assets/img/qq-face/public/gif/s46.gif":()=>r(()=>import("./s46-BCez02Ue.js"),[]),"/src/assets/img/qq-face/public/gif/s49.gif":()=>r(()=>import("./s49-Bo3hSm7u.js"),[]),"/src/assets/img/qq-face/public/gif/s5.gif":()=>r(()=>import("./s5-C4_rTpnH.js"),[]),"/src/assets/img/qq-face/public/gif/s53.gif":()=>r(()=>import("./s53-CM0-LTNN.js"),[]),"/src/assets/img/qq-face/public/gif/s54.gif":()=>r(()=>import("./s54-C5i0qILp.js"),[]),"/src/assets/img/qq-face/public/gif/s55.gif":()=>r(()=>import("./s55-BBIgdbaN.js"),[]),"/src/assets/img/qq-face/public/gif/s56.gif":()=>r(()=>import("./s56-CalB2NKI.js"),[]),"/src/assets/img/qq-face/public/gif/s57.gif":()=>r(()=>import("./s57-64mKPgiy.js"),[]),"/src/assets/img/qq-face/public/gif/s59.gif":()=>r(()=>import("./s59-DaYD2MfU.js"),[]),"/src/assets/img/qq-face/public/gif/s6.gif":()=>r(()=>import("./s6-BAMTRCue.js"),[]),"/src/assets/img/qq-face/public/gif/s60.gif":()=>r(()=>import("./s60-qYpWVhZM.js"),[]),"/src/assets/img/qq-face/public/gif/s61.gif":()=>r(()=>import("./s61-D0lG6bqK.js"),[]),"/src/assets/img/qq-face/public/gif/s63.gif":()=>r(()=>import("./s63-DMxU4tr7.js"),[]),"/src/assets/img/qq-face/public/gif/s64.gif":()=>r(()=>import("./s64-WiQq3Ei5.js"),[]),"/src/assets/img/qq-face/public/gif/s66.gif":()=>r(()=>import("./s66-Co_E4EDy.js"),[]),"/src/assets/img/qq-face/public/gif/s67.gif":()=>r(()=>import("./s67-B1-AYXXr.js"),[]),"/src/assets/img/qq-face/public/gif/s69.gif":()=>r(()=>import("./s69-C1OKUTQh.js"),[]),"/src/assets/img/qq-face/public/gif/s7.gif":()=>r(()=>import("./s7-DWqhYBMk.js"),[]),"/src/assets/img/qq-face/public/gif/s74.gif":()=>r(()=>import("./s74-B0bWXHqj.js"),[]),"/src/assets/img/qq-face/public/gif/s75.gif":()=>r(()=>import("./s75-lNvSPKps.js"),[]),"/src/assets/img/qq-face/public/gif/s76.gif":()=>r(()=>import("./s76-Dgd23fxY.js"),[]),"/src/assets/img/qq-face/public/gif/s77.gif":()=>r(()=>import("./s77-DdgDmFed.js"),[]),"/src/assets/img/qq-face/public/gif/s78.gif":()=>r(()=>import("./s78-HP4smyyb.js"),[]),"/src/assets/img/qq-face/public/gif/s79.gif":()=>r(()=>import("./s79-Bw5YkWk8.js"),[]),"/src/assets/img/qq-face/public/gif/s8.gif":()=>r(()=>import("./s8-TvLhNIVD.js"),[]),"/src/assets/img/qq-face/public/gif/s86.gif":()=>r(()=>import("./s86-0LoVB2aF.js"),[]),"/src/assets/img/qq-face/public/gif/s89.gif":()=>r(()=>import("./s89-DGZ0ZG4T.js"),[]),"/src/assets/img/qq-face/public/gif/s9.gif":()=>r(()=>import("./s9-BsTekqk7.js"),[]),"/src/assets/img/qq-face/public/gif/s96.gif":()=>r(()=>import("./s96-C16ljuCW.js"),[]),"/src/assets/img/qq-face/public/gif/s97.gif":()=>r(()=>import("./s97-Cc6V8Wlx.js"),[]),"/src/assets/img/qq-face/public/gif/s98.gif":()=>r(()=>import("./s98-CPhfpxIu.js"),[]),"/src/assets/img/qq-face/public/gif/s99.gif":()=>r(()=>import("./s99-8DBY9V4p.js"),[]),"/src/assets/img/qq-face/public/static/s0.png":()=>r(()=>import("./s0-BhzVMAoV.js"),[]),"/src/assets/img/qq-face/public/static/s1.png":()=>r(()=>import("./s1-dxvVlBKa.js"),[]),"/src/assets/img/qq-face/public/static/s10.png":()=>r(()=>import("./s10-DicPe3mX.js"),[]),"/src/assets/img/qq-face/public/static/s100.png":()=>r(()=>import("./s100-CuCPd7Lu.js"),[]),"/src/assets/img/qq-face/public/static/s101.png":()=>r(()=>import("./s101-D52pnGFZ.js"),[]),"/src/assets/img/qq-face/public/static/s102.png":()=>r(()=>import("./s102-IpOakVMT.js"),[]),"/src/assets/img/qq-face/public/static/s103.png":()=>r(()=>import("./s103-BvQ8U05X.js"),[]),"/src/assets/img/qq-face/public/static/s104.png":()=>r(()=>import("./s104-CyUkO9V-.js"),[]),"/src/assets/img/qq-face/public/static/s105.png":()=>r(()=>import("./s105-Fxm_jFbY.js"),[]),"/src/assets/img/qq-face/public/static/s106.png":()=>r(()=>import("./s106-8KxDtYL1.js"),[]),"/src/assets/img/qq-face/public/static/s107.png":()=>r(()=>import("./s107-CJosbNMz.js"),[]),"/src/assets/img/qq-face/public/static/s108.png":()=>r(()=>import("./s108-Colj7wim.js"),[]),"/src/assets/img/qq-face/public/static/s109.png":()=>r(()=>import("./s109-0pS_19H8.js"),[]),"/src/assets/img/qq-face/public/static/s11.png":()=>r(()=>import("./s11-BAbkvYr_.js"),[]),"/src/assets/img/qq-face/public/static/s110.png":()=>r(()=>import("./s110-BCnh-EFr.js"),[]),"/src/assets/img/qq-face/public/static/s111.png":()=>r(()=>import("./s111-CGtZIn6H.js"),[]),"/src/assets/img/qq-face/public/static/s112.png":()=>r(()=>import("./s112-C8pCPf8z.js"),[]),"/src/assets/img/qq-face/public/static/s113.png":()=>r(()=>import("./s113-B4RGxMhx.js"),[]),"/src/assets/img/qq-face/public/static/s114.png":()=>r(()=>import("./s114-BnrkCFC9.js"),[]),"/src/assets/img/qq-face/public/static/s115.png":()=>r(()=>import("./s115-CE077YeS.js"),[]),"/src/assets/img/qq-face/public/static/s116.png":()=>r(()=>import("./s116-BKVx1k_G.js"),[]),"/src/assets/img/qq-face/public/static/s117.png":()=>r(()=>import("./s117-BL4k-FKo.js"),[]),"/src/assets/img/qq-face/public/static/s118.png":()=>r(()=>import("./s118-BRPv-yTf.js"),[]),"/src/assets/img/qq-face/public/static/s119.png":()=>r(()=>import("./s119-DpOYv8XJ.js"),[]),"/src/assets/img/qq-face/public/static/s12.png":()=>r(()=>import("./s12-CuK1xYvq.js"),[]),"/src/assets/img/qq-face/public/static/s120.png":()=>r(()=>import("./s120-DokirXZU.js"),[]),"/src/assets/img/qq-face/public/static/s121.png":()=>r(()=>import("./s121-8lH2Opf8.js"),[]),"/src/assets/img/qq-face/public/static/s122.png":()=>r(()=>import("./s122-Cgx1Isv9.js"),[]),"/src/assets/img/qq-face/public/static/s123.png":()=>r(()=>import("./s123-5BmFrC-f.js"),[]),"/src/assets/img/qq-face/public/static/s124.png":()=>r(()=>import("./s124-DMWZTjVR.js"),[]),"/src/assets/img/qq-face/public/static/s125.png":()=>r(()=>import("./s125-CY76M2dT.js"),[]),"/src/assets/img/qq-face/public/static/s126.png":()=>r(()=>import("./s126-CDy1EKeq.js"),[]),"/src/assets/img/qq-face/public/static/s127.png":()=>r(()=>import("./s127-Dwtg_xjv.js"),[]),"/src/assets/img/qq-face/public/static/s128.png":()=>r(()=>import("./s128-CYXj4mat.js"),[]),"/src/assets/img/qq-face/public/static/s129.png":()=>r(()=>import("./s129-256fdoOy.js"),[]),"/src/assets/img/qq-face/public/static/s13.png":()=>r(()=>import("./s13-C83zlPu-.js"),[]),"/src/assets/img/qq-face/public/static/s130.png":()=>r(()=>import("./s130-DJ6hXbjK.js"),[]),"/src/assets/img/qq-face/public/static/s131.png":()=>r(()=>import("./s131-C5W3C9-_.js"),[]),"/src/assets/img/qq-face/public/static/s132.png":()=>r(()=>import("./s132-wKI-GbyF.js"),[]),"/src/assets/img/qq-face/public/static/s133.png":()=>r(()=>import("./s133-BR9p7nc5.js"),[]),"/src/assets/img/qq-face/public/static/s134.png":()=>r(()=>import("./s134-1C7OF6dH.js"),[]),"/src/assets/img/qq-face/public/static/s135.png":()=>r(()=>import("./s135-Cx83AZ3H.js"),[]),"/src/assets/img/qq-face/public/static/s136.png":()=>r(()=>import("./s136-BhQweWaG.js"),[]),"/src/assets/img/qq-face/public/static/s137.png":()=>r(()=>import("./s137-CMWLASfV.js"),[]),"/src/assets/img/qq-face/public/static/s138.png":()=>r(()=>import("./s138-DwMRIS4o.js"),[]),"/src/assets/img/qq-face/public/static/s139.png":()=>r(()=>import("./s139-h_YyKD41.js"),[]),"/src/assets/img/qq-face/public/static/s14.png":()=>r(()=>import("./s14-BBN7k-__.js"),[]),"/src/assets/img/qq-face/public/static/s140.png":()=>r(()=>import("./s140-D7xxsv0O.js"),[]),"/src/assets/img/qq-face/public/static/s141.png":()=>r(()=>import("./s141-Bq5txqf7.js"),[]),"/src/assets/img/qq-face/public/static/s142.png":()=>r(()=>import("./s142-s6YWEIS-.js"),[]),"/src/assets/img/qq-face/public/static/s143.png":()=>r(()=>import("./s143-BUSc1AzJ.js"),[]),"/src/assets/img/qq-face/public/static/s144.png":()=>r(()=>import("./s144-DS2PLw9_.js"),[]),"/src/assets/img/qq-face/public/static/s145.png":()=>r(()=>import("./s145-Cce9efzP.js"),[]),"/src/assets/img/qq-face/public/static/s146.png":()=>r(()=>import("./s146-CAv3LOaM.js"),[]),"/src/assets/img/qq-face/public/static/s147.png":()=>r(()=>import("./s147-DFP_b4EK.js"),[]),"/src/assets/img/qq-face/public/static/s148.png":()=>r(()=>import("./s148-C5NjY4VH.js"),[]),"/src/assets/img/qq-face/public/static/s149.png":()=>r(()=>import("./s149-C_fQ2mde.js"),[]),"/src/assets/img/qq-face/public/static/s15.png":()=>r(()=>import("./s15-CXfi_lPu.js"),[]),"/src/assets/img/qq-face/public/static/s150.png":()=>r(()=>import("./s150-BzlPQzao.js"),[]),"/src/assets/img/qq-face/public/static/s151.png":()=>r(()=>import("./s151-O2_VM_Qi.js"),[]),"/src/assets/img/qq-face/public/static/s152.png":()=>r(()=>import("./s152-CPO-zmpW.js"),[]),"/src/assets/img/qq-face/public/static/s153.png":()=>r(()=>import("./s153-BVs282n5.js"),[]),"/src/assets/img/qq-face/public/static/s154.png":()=>r(()=>import("./s154-D9qAE4Tc.js"),[]),"/src/assets/img/qq-face/public/static/s155.png":()=>r(()=>import("./s155-d2p4wzdn.js"),[]),"/src/assets/img/qq-face/public/static/s156.png":()=>r(()=>import("./s156-Crk-ih0E.js"),[]),"/src/assets/img/qq-face/public/static/s157.png":()=>r(()=>import("./s157-DFKLsy7D.js"),[]),"/src/assets/img/qq-face/public/static/s158.png":()=>r(()=>import("./s158-B9I2vR2p.js"),[]),"/src/assets/img/qq-face/public/static/s159.png":()=>r(()=>import("./s159-DXC46LGM.js"),[]),"/src/assets/img/qq-face/public/static/s16.png":()=>r(()=>import("./s16-q-3pLJA9.js"),[]),"/src/assets/img/qq-face/public/static/s160.png":()=>r(()=>import("./s160-LO5W7IzN.js"),[]),"/src/assets/img/qq-face/public/static/s161.png":()=>r(()=>import("./s161-C8xh9BYa.js"),[]),"/src/assets/img/qq-face/public/static/s162.png":()=>r(()=>import("./s162-BSvM4zcn.js"),[]),"/src/assets/img/qq-face/public/static/s163.png":()=>r(()=>import("./s163-82gwgkge.js"),[]),"/src/assets/img/qq-face/public/static/s164.png":()=>r(()=>import("./s164-CwVuWd2S.js"),[]),"/src/assets/img/qq-face/public/static/s165.png":()=>r(()=>import("./s165-CLB5neLc.js"),[]),"/src/assets/img/qq-face/public/static/s166.png":()=>r(()=>import("./s166-BfD6u6__.js"),[]),"/src/assets/img/qq-face/public/static/s167.png":()=>r(()=>import("./s167-C6y3pyCK.js"),[]),"/src/assets/img/qq-face/public/static/s168.png":()=>r(()=>import("./s168-f40byCeL.js"),[]),"/src/assets/img/qq-face/public/static/s169.png":()=>r(()=>import("./s169-Bn6JG54e.js"),[]),"/src/assets/img/qq-face/public/static/s170.png":()=>r(()=>import("./s170-D0UgsNS2.js"),[]),"/src/assets/img/qq-face/public/static/s171.png":()=>r(()=>import("./s171-ColOw49P.js"),[]),"/src/assets/img/qq-face/public/static/s172.png":()=>r(()=>import("./s172-G5cCq0T8.js"),[]),"/src/assets/img/qq-face/public/static/s173.png":()=>r(()=>import("./s173-Btls4jVA.js"),[]),"/src/assets/img/qq-face/public/static/s174.png":()=>r(()=>import("./s174-Bm5nKzws.js"),[]),"/src/assets/img/qq-face/public/static/s175.png":()=>r(()=>import("./s175-CEoqbyKG.js"),[]),"/src/assets/img/qq-face/public/static/s176.png":()=>r(()=>import("./s176-bLWiQnph.js"),[]),"/src/assets/img/qq-face/public/static/s177.png":()=>r(()=>import("./s177-DkzfDNCo.js"),[]),"/src/assets/img/qq-face/public/static/s178.png":()=>r(()=>import("./s178-CwyIjty5.js"),[]),"/src/assets/img/qq-face/public/static/s179.png":()=>r(()=>import("./s179-D2sWxPz9.js"),[]),"/src/assets/img/qq-face/public/static/s18.png":()=>r(()=>import("./s18-CDA4j8pd.js"),[]),"/src/assets/img/qq-face/public/static/s180.png":()=>r(()=>import("./s180-fuvoiseX.js"),[]),"/src/assets/img/qq-face/public/static/s181.png":()=>r(()=>import("./s181-BRBv3O2-.js"),[]),"/src/assets/img/qq-face/public/static/s182.png":()=>r(()=>import("./s182-D6VXZJHZ.js"),[]),"/src/assets/img/qq-face/public/static/s183.png":()=>r(()=>import("./s183-rqIS_M_q.js"),[]),"/src/assets/img/qq-face/public/static/s184.png":()=>r(()=>import("./s184-BTdbEW4P.js"),[]),"/src/assets/img/qq-face/public/static/s185.png":()=>r(()=>import("./s185-DMPkJl-U.js"),[]),"/src/assets/img/qq-face/public/static/s186.png":()=>r(()=>import("./s186-CH1i3_Be.js"),[]),"/src/assets/img/qq-face/public/static/s187.png":()=>r(()=>import("./s187-B51u4Q36.js"),[]),"/src/assets/img/qq-face/public/static/s188.png":()=>r(()=>import("./s188-BS5KiiTc.js"),[]),"/src/assets/img/qq-face/public/static/s189.png":()=>r(()=>import("./s189-DbBxBUcc.js"),[]),"/src/assets/img/qq-face/public/static/s19.png":()=>r(()=>import("./s19-DEP1ygVR.js"),[]),"/src/assets/img/qq-face/public/static/s190.png":()=>r(()=>import("./s190-Cg5C7wxa.js"),[]),"/src/assets/img/qq-face/public/static/s191.png":()=>r(()=>import("./s191-C6Y3Dujq.js"),[]),"/src/assets/img/qq-face/public/static/s192.png":()=>r(()=>import("./s192-Dj1UeiiV.js"),[]),"/src/assets/img/qq-face/public/static/s193.png":()=>r(()=>import("./s193-CPYXLhlv.js"),[]),"/src/assets/img/qq-face/public/static/s194.png":()=>r(()=>import("./s194-CbYJKyIC.js"),[]),"/src/assets/img/qq-face/public/static/s195.png":()=>r(()=>import("./s195-DGIA8AC1.js"),[]),"/src/assets/img/qq-face/public/static/s196.png":()=>r(()=>import("./s196-CWeGLiYM.js"),[]),"/src/assets/img/qq-face/public/static/s197.png":()=>r(()=>import("./s197-BzvxyiHN.js"),[]),"/src/assets/img/qq-face/public/static/s198.png":()=>r(()=>import("./s198-Cv5SQH4V.js"),[]),"/src/assets/img/qq-face/public/static/s199.png":()=>r(()=>import("./s199-DDdPoSvI.js"),[]),"/src/assets/img/qq-face/public/static/s2.png":()=>r(()=>import("./s2-DB4avG5H.js"),[]),"/src/assets/img/qq-face/public/static/s20.png":()=>r(()=>import("./s20-DiPF4mPV.js"),[]),"/src/assets/img/qq-face/public/static/s200.png":()=>r(()=>import("./s200-CS-jjfW0.js"),[]),"/src/assets/img/qq-face/public/static/s201.png":()=>r(()=>import("./s201-BwHpktA-.js"),[]),"/src/assets/img/qq-face/public/static/s202.png":()=>r(()=>import("./s202-DZuJsUHB.js"),[]),"/src/assets/img/qq-face/public/static/s203.png":()=>r(()=>import("./s203-CNqXqfGx.js"),[]),"/src/assets/img/qq-face/public/static/s204.png":()=>r(()=>import("./s204-UHSeRiKR.js"),[]),"/src/assets/img/qq-face/public/static/s205.png":()=>r(()=>import("./s205-Ds2JHYum.js"),[]),"/src/assets/img/qq-face/public/static/s206.png":()=>r(()=>import("./s206-Cg5VYlfh.js"),[]),"/src/assets/img/qq-face/public/static/s207.png":()=>r(()=>import("./s207-C551cdJ-.js"),[]),"/src/assets/img/qq-face/public/static/s208.png":()=>r(()=>import("./s208-CZ-MLq97.js"),[]),"/src/assets/img/qq-face/public/static/s209.png":()=>r(()=>import("./s209-BacX2Aa1.js"),[]),"/src/assets/img/qq-face/public/static/s21.png":()=>r(()=>import("./s21-CSPwn2u8.js"),[]),"/src/assets/img/qq-face/public/static/s210.png":()=>r(()=>import("./s210-BSJDDoT0.js"),[]),"/src/assets/img/qq-face/public/static/s211.png":()=>r(()=>import("./s211-CqLtJgqv.js"),[]),"/src/assets/img/qq-face/public/static/s212.png":()=>r(()=>import("./s212-BESDfknl.js"),[]),"/src/assets/img/qq-face/public/static/s213.png":()=>r(()=>import("./s213-CZQnONlW.js"),[]),"/src/assets/img/qq-face/public/static/s214.png":()=>r(()=>import("./s214-N1I4ZnLn.js"),[]),"/src/assets/img/qq-face/public/static/s215.png":()=>r(()=>import("./s215-Eq8dE1vv.js"),[]),"/src/assets/img/qq-face/public/static/s216.png":()=>r(()=>import("./s216-CwOemo0U.js"),[]),"/src/assets/img/qq-face/public/static/s217.png":()=>r(()=>import("./s217-DVmc7u7K.js"),[]),"/src/assets/img/qq-face/public/static/s218.png":()=>r(()=>import("./s218-DCbTeyV0.js"),[]),"/src/assets/img/qq-face/public/static/s219.png":()=>r(()=>import("./s219-BddcVQTt.js"),[]),"/src/assets/img/qq-face/public/static/s22.png":()=>r(()=>import("./s22-W5f5-UxW.js"),[]),"/src/assets/img/qq-face/public/static/s220.png":()=>r(()=>import("./s220-BJEKMGvF.js"),[]),"/src/assets/img/qq-face/public/static/s221.png":()=>r(()=>import("./s221-u9iZM5-E.js"),[]),"/src/assets/img/qq-face/public/static/s222.png":()=>r(()=>import("./s222-D65VlvUG.js"),[]),"/src/assets/img/qq-face/public/static/s223.png":()=>r(()=>import("./s223-DmDlwY88.js"),[]),"/src/assets/img/qq-face/public/static/s224.png":()=>r(()=>import("./s224-1f-UuTvs.js"),[]),"/src/assets/img/qq-face/public/static/s225.png":()=>r(()=>import("./s225-Ca1ABR-l.js"),[]),"/src/assets/img/qq-face/public/static/s226.png":()=>r(()=>import("./s226-DfhE-4bH.js"),[]),"/src/assets/img/qq-face/public/static/s227.png":()=>r(()=>import("./s227-C5lZT9Zd.js"),[]),"/src/assets/img/qq-face/public/static/s228.png":()=>r(()=>import("./s228-CfBMT3JN.js"),[]),"/src/assets/img/qq-face/public/static/s229.png":()=>r(()=>import("./s229-MZi_p6WC.js"),[]),"/src/assets/img/qq-face/public/static/s23.png":()=>r(()=>import("./s23-BojdImMp.js"),[]),"/src/assets/img/qq-face/public/static/s230.png":()=>r(()=>import("./s230-8EIndrYM.js"),[]),"/src/assets/img/qq-face/public/static/s231.png":()=>r(()=>import("./s231-CKP5BchH.js"),[]),"/src/assets/img/qq-face/public/static/s232.png":()=>r(()=>import("./s232-BLso98EM.js"),[]),"/src/assets/img/qq-face/public/static/s233.png":()=>r(()=>import("./s233-DL61uGWV.js"),[]),"/src/assets/img/qq-face/public/static/s234.png":()=>r(()=>import("./s234-BCw0VoXx.js"),[]),"/src/assets/img/qq-face/public/static/s235.png":()=>r(()=>import("./s235-DfYzalAd.js"),[]),"/src/assets/img/qq-face/public/static/s236.png":()=>r(()=>import("./s236-Rc7KCKN1.js"),[]),"/src/assets/img/qq-face/public/static/s237.png":()=>r(()=>import("./s237-CgRbE3e0.js"),[]),"/src/assets/img/qq-face/public/static/s238.png":()=>r(()=>import("./s238-_1s1eiCw.js"),[]),"/src/assets/img/qq-face/public/static/s239.png":()=>r(()=>import("./s239-BQccV5kN.js"),[]),"/src/assets/img/qq-face/public/static/s24.png":()=>r(()=>import("./s24-CoG2NsLC.js"),[]),"/src/assets/img/qq-face/public/static/s240.png":()=>r(()=>import("./s240-Dp2zygBR.js"),[]),"/src/assets/img/qq-face/public/static/s241.png":()=>r(()=>import("./s241-2pzaT_7C.js"),[]),"/src/assets/img/qq-face/public/static/s242.png":()=>r(()=>import("./s242-CHAlmXKZ.js"),[]),"/src/assets/img/qq-face/public/static/s243.png":()=>r(()=>import("./s243-_OKrJNxG.js"),[]),"/src/assets/img/qq-face/public/static/s244.png":()=>r(()=>import("./s244-CieQt0bh.js"),[]),"/src/assets/img/qq-face/public/static/s245.png":()=>r(()=>import("./s245-DodWI9N9.js"),[]),"/src/assets/img/qq-face/public/static/s246.png":()=>r(()=>import("./s246-DDQDPKGV.js"),[]),"/src/assets/img/qq-face/public/static/s247.png":()=>r(()=>import("./s247-CqyiXkWh.js"),[]),"/src/assets/img/qq-face/public/static/s25.png":()=>r(()=>import("./s25-BBOY3cJU.js"),[]),"/src/assets/img/qq-face/public/static/s26.png":()=>r(()=>import("./s26-DGpW3KN_.js"),[]),"/src/assets/img/qq-face/public/static/s260.png":()=>r(()=>import("./s260-4iTVqfaf.js"),[]),"/src/assets/img/qq-face/public/static/s261.png":()=>r(()=>import("./s261-B9-5h2Um.js"),[]),"/src/assets/img/qq-face/public/static/s262.png":()=>r(()=>import("./s262-CCdPtmEQ.js"),[]),"/src/assets/img/qq-face/public/static/s263.png":()=>r(()=>import("./s263-egKwKWsg.js"),[]),"/src/assets/img/qq-face/public/static/s264.png":()=>r(()=>import("./s264-CaofvQHT.js"),[]),"/src/assets/img/qq-face/public/static/s265.png":()=>r(()=>import("./s265-D9p0sIWK.js"),[]),"/src/assets/img/qq-face/public/static/s266.png":()=>r(()=>import("./s266-FuNdY1d-.js"),[]),"/src/assets/img/qq-face/public/static/s267.png":()=>r(()=>import("./s267-BDCrf-f3.js"),[]),"/src/assets/img/qq-face/public/static/s268.png":()=>r(()=>import("./s268-9CowLhYa.js"),[]),"/src/assets/img/qq-face/public/static/s269.png":()=>r(()=>import("./s269-D3oaS8y7.js"),[]),"/src/assets/img/qq-face/public/static/s27.png":()=>r(()=>import("./s27-DTfD3_tr.js"),[]),"/src/assets/img/qq-face/public/static/s270.png":()=>r(()=>import("./s270-XXsjhHAi.js"),[]),"/src/assets/img/qq-face/public/static/s271.png":()=>r(()=>import("./s271-D3alKgin.js"),[]),"/src/assets/img/qq-face/public/static/s272.png":()=>r(()=>import("./s272-CW463WhF.js"),[]),"/src/assets/img/qq-face/public/static/s273.png":()=>r(()=>import("./s273-CKLBOg2p.js"),[]),"/src/assets/img/qq-face/public/static/s274.png":()=>r(()=>import("./s274-D8jRBQv_.js"),[]),"/src/assets/img/qq-face/public/static/s276.png":()=>r(()=>import("./s276-wTZF5ev1.js"),[]),"/src/assets/img/qq-face/public/static/s277.png":()=>r(()=>import("./s277-B6P4O7s4.js"),[]),"/src/assets/img/qq-face/public/static/s278.png":()=>r(()=>import("./s278-DjG_n0BP.js"),[]),"/src/assets/img/qq-face/public/static/s279.png":()=>r(()=>import("./s279-B_YxUvfP.js"),[]),"/src/assets/img/qq-face/public/static/s28.png":()=>r(()=>import("./s28-TLW1WrZo.js"),[]),"/src/assets/img/qq-face/public/static/s280.png":()=>r(()=>import("./s280-BxCPDD5h.js"),[]),"/src/assets/img/qq-face/public/static/s281.png":()=>r(()=>import("./s281-BPMKJso2.js"),[]),"/src/assets/img/qq-face/public/static/s282.png":()=>r(()=>import("./s282-DNpjYXmZ.js"),[]),"/src/assets/img/qq-face/public/static/s283.png":()=>r(()=>import("./s283-BkPIXndX.js"),[]),"/src/assets/img/qq-face/public/static/s284.png":()=>r(()=>import("./s284-DcGJDdcY.js"),[]),"/src/assets/img/qq-face/public/static/s285.png":()=>r(()=>import("./s285-CbxpC1Zr.js"),[]),"/src/assets/img/qq-face/public/static/s286.png":()=>r(()=>import("./s286-DWtNySd4.js"),[]),"/src/assets/img/qq-face/public/static/s287.png":()=>r(()=>import("./s287-D3wrgxLt.js"),[]),"/src/assets/img/qq-face/public/static/s288.png":()=>r(()=>import("./s288-UHrYiEiU.js"),[]),"/src/assets/img/qq-face/public/static/s289.png":()=>r(()=>import("./s289-C4TE2qAz.js"),[]),"/src/assets/img/qq-face/public/static/s29.png":()=>r(()=>import("./s29-DhpznPzF.js"),[]),"/src/assets/img/qq-face/public/static/s290.png":()=>r(()=>import("./s290-CAQnwGPn.js"),[]),"/src/assets/img/qq-face/public/static/s291.png":()=>r(()=>import("./s291-CN4ShoKd.js"),[]),"/src/assets/img/qq-face/public/static/s292.png":()=>r(()=>import("./s292-CC08oGX0.js"),[]),"/src/assets/img/qq-face/public/static/s293.png":()=>r(()=>import("./s293-D95Fc_Kn.js"),[]),"/src/assets/img/qq-face/public/static/s294.png":()=>r(()=>import("./s294-CjhlXIx2.js"),[]),"/src/assets/img/qq-face/public/static/s295.png":()=>r(()=>import("./s295-CWAy1eHj.js"),[]),"/src/assets/img/qq-face/public/static/s296.png":()=>r(()=>import("./s296-CvApgtU3.js"),[]),"/src/assets/img/qq-face/public/static/s297.png":()=>r(()=>import("./s297-OzTZmxO7.js"),[]),"/src/assets/img/qq-face/public/static/s298.png":()=>r(()=>import("./s298-CG2x_TED.js"),[]),"/src/assets/img/qq-face/public/static/s299.png":()=>r(()=>import("./s299-Beg4m34C.js"),[]),"/src/assets/img/qq-face/public/static/s3.png":()=>r(()=>import("./s3-3_gYcf_l.js"),[]),"/src/assets/img/qq-face/public/static/s30.png":()=>r(()=>import("./s30-YmVgfUzl.js"),[]),"/src/assets/img/qq-face/public/static/s300.png":()=>r(()=>import("./s300-C0nz1TQu.js"),[]),"/src/assets/img/qq-face/public/static/s301.png":()=>r(()=>import("./s301-CnpRgs46.js"),[]),"/src/assets/img/qq-face/public/static/s302.png":()=>r(()=>import("./s302-CY7ALRgz.js"),[]),"/src/assets/img/qq-face/public/static/s303.png":()=>r(()=>import("./s303-DSzuQOul.js"),[]),"/src/assets/img/qq-face/public/static/s304.png":()=>r(()=>import("./s304-ngbqA0Tv.js"),[]),"/src/assets/img/qq-face/public/static/s305.png":()=>r(()=>import("./s305-CTNKhlAH.js"),[]),"/src/assets/img/qq-face/public/static/s306.png":()=>r(()=>import("./s306-DAr6l6qm.js"),[]),"/src/assets/img/qq-face/public/static/s307.png":()=>r(()=>import("./s307-BQuWFm7z.js"),[]),"/src/assets/img/qq-face/public/static/s308.png":()=>r(()=>import("./s308-9OexQRZN.js"),[]),"/src/assets/img/qq-face/public/static/s309.png":()=>r(()=>import("./s309-i7iAM-HS.js"),[]),"/src/assets/img/qq-face/public/static/s31.png":()=>r(()=>import("./s31-BTPMtdl4.js"),[]),"/src/assets/img/qq-face/public/static/s310.png":()=>r(()=>import("./s310-Cyfowq8V.js"),[]),"/src/assets/img/qq-face/public/static/s311.png":()=>r(()=>import("./s311-DCkmJVUl.js"),[]),"/src/assets/img/qq-face/public/static/s312.png":()=>r(()=>import("./s312-DIgO8_D8.js"),[]),"/src/assets/img/qq-face/public/static/s313.png":()=>r(()=>import("./s313-BFIeOhN1.js"),[]),"/src/assets/img/qq-face/public/static/s314.png":()=>r(()=>import("./s314-BAWzCEDH.js"),[]),"/src/assets/img/qq-face/public/static/s315.png":()=>r(()=>import("./s315-mv9QOwik.js"),[]),"/src/assets/img/qq-face/public/static/s316.png":()=>r(()=>import("./s316-CqMKqJ7V.js"),[]),"/src/assets/img/qq-face/public/static/s317.png":()=>r(()=>import("./s317-BBFE2fRr.js"),[]),"/src/assets/img/qq-face/public/static/s318.png":()=>r(()=>import("./s318-CRdhOFbk.js"),[]),"/src/assets/img/qq-face/public/static/s319.png":()=>r(()=>import("./s319-oWI0jSlH.js"),[]),"/src/assets/img/qq-face/public/static/s32.png":()=>r(()=>import("./s32-C7azK3Kw.js"),[]),"/src/assets/img/qq-face/public/static/s320.png":()=>r(()=>import("./s320-BmWLoH98.js"),[]),"/src/assets/img/qq-face/public/static/s321.png":()=>r(()=>import("./s321-CtENrx02.js"),[]),"/src/assets/img/qq-face/public/static/s322.png":()=>r(()=>import("./s322-C5EKC6FJ.js"),[]),"/src/assets/img/qq-face/public/static/s323.png":()=>r(()=>import("./s323-BioIGChZ.js"),[]),"/src/assets/img/qq-face/public/static/s324.png":()=>r(()=>import("./s324-C4Gi8A8l.js"),[]),"/src/assets/img/qq-face/public/static/s325.png":()=>r(()=>import("./s325-1jV8houv.js"),[]),"/src/assets/img/qq-face/public/static/s326.png":()=>r(()=>import("./s326-BsP4a6SI.js"),[]),"/src/assets/img/qq-face/public/static/s327.png":()=>r(()=>import("./s327-HKCeORWA.js"),[]),"/src/assets/img/qq-face/public/static/s328.png":()=>r(()=>import("./s328-Ji1MrvHq.js"),[]),"/src/assets/img/qq-face/public/static/s329.png":()=>r(()=>import("./s329-7_CShsU_.js"),[]),"/src/assets/img/qq-face/public/static/s33.png":()=>r(()=>import("./s33-BtfTgym3.js"),[]),"/src/assets/img/qq-face/public/static/s330.png":()=>r(()=>import("./s330-C47tU25v.js"),[]),"/src/assets/img/qq-face/public/static/s331.png":()=>r(()=>import("./s331-jbs7RC8n.js"),[]),"/src/assets/img/qq-face/public/static/s332.png":()=>r(()=>import("./s332-DR8qLc6Y.js"),[]),"/src/assets/img/qq-face/public/static/s333.png":()=>r(()=>import("./s333-DdAsWAl0.js"),[]),"/src/assets/img/qq-face/public/static/s334.png":()=>r(()=>import("./s334-BSS3Z60Q.js"),[]),"/src/assets/img/qq-face/public/static/s335.png":()=>r(()=>import("./s335-U_bClgPS.js"),[]),"/src/assets/img/qq-face/public/static/s336.png":()=>r(()=>import("./s336-CuSRnRbw.js"),[]),"/src/assets/img/qq-face/public/static/s337.png":()=>r(()=>import("./s337-7BL1Zyy2.js"),[]),"/src/assets/img/qq-face/public/static/s338.png":()=>r(()=>import("./s338-DLYhDxxe.js"),[]),"/src/assets/img/qq-face/public/static/s339.png":()=>r(()=>import("./s339-Bt8Omeay.js"),[]),"/src/assets/img/qq-face/public/static/s34.png":()=>r(()=>import("./s34-C2cj0tY_.js"),[]),"/src/assets/img/qq-face/public/static/s340.png":()=>r(()=>import("./s340-_R_85GJv.js"),[]),"/src/assets/img/qq-face/public/static/s341.png":()=>r(()=>import("./s341-CW6KgFkp.js"),[]),"/src/assets/img/qq-face/public/static/s342.png":()=>r(()=>import("./s342-0uNzAH85.js"),[]),"/src/assets/img/qq-face/public/static/s343.png":()=>r(()=>import("./s343-B4PsurQS.js"),[]),"/src/assets/img/qq-face/public/static/s344.png":()=>r(()=>import("./s344-2ZMZoPo4.js"),[]),"/src/assets/img/qq-face/public/static/s345.png":()=>r(()=>import("./s345-CeRv9MyN.js"),[]),"/src/assets/img/qq-face/public/static/s346.png":()=>r(()=>import("./s346-BnJfApkE.js"),[]),"/src/assets/img/qq-face/public/static/s347.png":()=>r(()=>import("./s347-De8HTMiA.js"),[]),"/src/assets/img/qq-face/public/static/s348.png":()=>r(()=>import("./s348-0dE41DRL.js"),[]),"/src/assets/img/qq-face/public/static/s35.png":()=>r(()=>import("./s35-CrswdoC4.js"),[]),"/src/assets/img/qq-face/public/static/s36.png":()=>r(()=>import("./s36-DuJXzgBH.js"),[]),"/src/assets/img/qq-face/public/static/s37.png":()=>r(()=>import("./s37-BlEo0PoC.js"),[]),"/src/assets/img/qq-face/public/static/s38.png":()=>r(()=>import("./s38-CkwuzHmm.js"),[]),"/src/assets/img/qq-face/public/static/s39.png":()=>r(()=>import("./s39-DmuGlgyP.js"),[]),"/src/assets/img/qq-face/public/static/s4.png":()=>r(()=>import("./s4-DsU8frC2.js"),[]),"/src/assets/img/qq-face/public/static/s41.png":()=>r(()=>import("./s41-Dw0L3w4u.js"),[]),"/src/assets/img/qq-face/public/static/s42.png":()=>r(()=>import("./s42-BI9BCuJj.js"),[]),"/src/assets/img/qq-face/public/static/s43.png":()=>r(()=>import("./s43-DEdgETll.js"),[]),"/src/assets/img/qq-face/public/static/s46.png":()=>r(()=>import("./s46-DjM8FdJK.js"),[]),"/src/assets/img/qq-face/public/static/s49.png":()=>r(()=>import("./s49-Lxj9L2Yj.js"),[]),"/src/assets/img/qq-face/public/static/s5.png":()=>r(()=>import("./s5-C-m7I1uT.js"),[]),"/src/assets/img/qq-face/public/static/s50.png":()=>r(()=>import("./s50-CNc5R3AB.js"),[]),"/src/assets/img/qq-face/public/static/s53.png":()=>r(()=>import("./s53-lbm_i63n.js"),[]),"/src/assets/img/qq-face/public/static/s54.png":()=>r(()=>import("./s54-DWCmRSF6.js"),[]),"/src/assets/img/qq-face/public/static/s55.png":()=>r(()=>import("./s55-BNOv5XTh.js"),[]),"/src/assets/img/qq-face/public/static/s56.png":()=>r(()=>import("./s56-C0TIdojv.js"),[]),"/src/assets/img/qq-face/public/static/s57.png":()=>r(()=>import("./s57-gwxkk6fF.js"),[]),"/src/assets/img/qq-face/public/static/s59.png":()=>r(()=>import("./s59-BQeCBDRT.js"),[]),"/src/assets/img/qq-face/public/static/s6.png":()=>r(()=>import("./s6-CEhyg9t6.js"),[]),"/src/assets/img/qq-face/public/static/s60.png":()=>r(()=>import("./s60-C32OBqK0.js"),[]),"/src/assets/img/qq-face/public/static/s61.png":()=>r(()=>import("./s61-Bjf-LD1D.js"),[]),"/src/assets/img/qq-face/public/static/s63.png":()=>r(()=>import("./s63-StFT061l.js"),[]),"/src/assets/img/qq-face/public/static/s64.png":()=>r(()=>import("./s64-C3E4_QtO.js"),[]),"/src/assets/img/qq-face/public/static/s66.png":()=>r(()=>import("./s66-CYy_6F_c.js"),[]),"/src/assets/img/qq-face/public/static/s67.png":()=>r(()=>import("./s67-DGcUJyOR.js"),[]),"/src/assets/img/qq-face/public/static/s69.png":()=>r(()=>import("./s69-DPnB7ZZV.js"),[]),"/src/assets/img/qq-face/public/static/s7.png":()=>r(()=>import("./s7-B3O8f481.js"),[]),"/src/assets/img/qq-face/public/static/s74.png":()=>r(()=>import("./s74-BJUgYRQw.js"),[]),"/src/assets/img/qq-face/public/static/s75.png":()=>r(()=>import("./s75-siQIFBYC.js"),[]),"/src/assets/img/qq-face/public/static/s76.png":()=>r(()=>import("./s76-CANsqkDm.js"),[]),"/src/assets/img/qq-face/public/static/s77.png":()=>r(()=>import("./s77-B4prt9gT.js"),[]),"/src/assets/img/qq-face/public/static/s78.png":()=>r(()=>import("./s78-DM0F74HU.js"),[]),"/src/assets/img/qq-face/public/static/s79.png":()=>r(()=>import("./s79-DAgnG1qm.js"),[]),"/src/assets/img/qq-face/public/static/s8.png":()=>r(()=>import("./s8-BQmKIbeU.js"),[]),"/src/assets/img/qq-face/public/static/s81.png":()=>r(()=>import("./s81-C3MnZHi5.js"),[]),"/src/assets/img/qq-face/public/static/s85.png":()=>r(()=>import("./s85-XBIcdE3u.js"),[]),"/src/assets/img/qq-face/public/static/s86.png":()=>r(()=>import("./s86-BMI0dJz2.js"),[]),"/src/assets/img/qq-face/public/static/s89.png":()=>r(()=>import("./s89-MCTdg4c9.js"),[]),"/src/assets/img/qq-face/public/static/s9.png":()=>r(()=>import("./s9-BvCnu-qv.js"),[]),"/src/assets/img/qq-face/public/static/s96.png":()=>r(()=>import("./s96-B8vX6r5J.js"),[]),"/src/assets/img/qq-face/public/static/s97.png":()=>r(()=>import("./s97-Buy5eVwS.js"),[]),"/src/assets/img/qq-face/public/static/s98.png":()=>r(()=>import("./s98-C2B5skoA.js"),[]),"/src/assets/img/qq-face/public/static/s99.png":()=>r(()=>import("./s99-DcgTwpqT.js"),[])});for(const n in e)if(n.includes(`/s${s}.gif`))return n;for(const n in e)if(n.includes(`/s${s}.png`))return n;return""}function $s(s){const e=Ds.parse(i.jsonMap.message_list.source),n=[];e.forEach(p=>{p.expression.value!="*"&&p.expression.value!="$"&&n.push(p.expression.value)});const o={};let a=o;return n.forEach((p,g)=>{g===n.length-1?a[p]=s:a[p]={},a=a[p]}),o}function pe(s,e,n){switch(i.tags.msgType==X.Auto&&(typeof s[0].message=="string"?i.tags.msgType=X.CQCode:i.tags.msgType=X.Array),i.tags.msgType){case X.CQCode:{for(let o=0;o<s.length;o++)s[o]=zt(s[o]);break}case X.Array:for(let o=0;o<s.length;o++){let a=s[o].message;a==null&&(a=s[o].content);for(let p=0;p<a.length;p++){const g=U("message_list_message",a[p],e);g!=null&&g.length==1&&(a[p]=Object.assign(a[p],g[0]))}}}if(n!=null)for(let o=0;o<s.length;o++)Object.entries(n).forEach(([a,p])=>{Object.entries(p).forEach(([g,u])=>{let l=s[o].message;l==null&&(l=s[o].content),l.forEach(_=>{_.type==a&&(_[g]=Ds.query(_,u)[0]),typeof _.data=="object"&&delete _.data}),s[o].content!=null&&(s[o].message=l,delete s[o].content,s[o].sender={user_id:s[o].user_id,nickname:s[o].nickname})})});return s}function K(s){const e=w.config.globalProperties.$t,n=s.message,o=s.group_id??s.user_id;let a="";for(let p=0;p<n.length;p++)try{switch(n[p].type){case"at":if(n[p].text==null){if(i.chatInfo.show.id==o&&i.chatInfo.info.group_members){const g=i.chatInfo.info.group_members.find(u=>u.user_id==n[p].qq);if(g){a+="@"+(g.card&&g.card!=""?g.card:g.nickname);break}}break}case"text":a+=n[p].text.replaceAll(`
`," ").replaceAll("\r"," ");break;case"face":a+="["+e("表情")+"]";break;case"bface":a+=n[p].text;break;case"image":a+=n[p].summary||n[p].summary==""?"["+e("图片")+"]":n[p].summary;break;case"record":a+="["+e("语音")+"]";break;case"video":a+="["+e("视频")+"]";break;case"file":a+="["+e("文件")+"]";break;case"json":{try{a+=JSON.parse(n[p].data).prompt}catch{a+="[卡片消息]"}break}case"xml":{let g=n[p].data.substring(n[p].data.indexOf('<source name="')+14);g=g.substring(0,g.indexOf('"')),a+="["+g+"]";break}}}catch(g){Ss.error(g,"解析消息短格式错误："+JSON.stringify(n[p]))}return a}function zt(s){let e=s.message,n=/^[^\]]+?\[|\].+\[|\][^[]+$|^[^[\]]+$/g;const o=e.match(n);o!==null&&o.forEach(g=>{g=g.replace("]","").replace("[",""),e=e.replace(g,`[CQ:text,text=${g}]`)}),n=/\[.+?\]/g,e=e.replaceAll(`
`,"\\n");const a=e.match(n),p=[];return n=/\[CQ:([^,]+),(.*)\]/g,a!==null&&a.forEach(g=>{if(g.match(n)!==null){const u={type:RegExp.$1};if(RegExp.$2.split(",").forEach(l=>{const _=[];_.push(l.substring(0,l.indexOf("=")));const E=document.createElement("a");E.innerHTML=l.substring(l.indexOf("=")+1),_.push(E.innerText),u[_[0]]=_[1]}),u.type=="text"){u.text=RegExp.$2.substring(RegExp.$2.lastIndexOf("=")+1).replaceAll("\\n",`
`);const l=document.createElement("a");l.innerHTML=u.text,u.text=l.innerText}u.type=="reply"?s.source={user_id:u.user_id,seq:u.seq,message:u.message}:p.push(u)}}),Ss.debug("解析 CQ 消息结果: "+JSON.stringify(p)),s.message=p,s}function os(s,e,n,o=!1){const a=Te();if(o){const p={revoke:!0,fake_msg:!0,message_id:a,message_type:i.chatInfo.show.type,time:parseInt(String(new Date().getTime()/1e3)),post_type:"message",sender:{user_id:i.loginInfo.uin,nickname:i.loginInfo.nickname},message:JSON.parse(JSON.stringify(n)),raw_message:w.config.globalProperties.$t("发送中")};p.message_type=="group"?p.group_id=i.chatInfo.show.id:p.user_id=i.chatInfo.show.id,i.messageList=i.messageList.concat([p])}if(i.tags.msgType==X.Array&&n&&typeof n!="string"){const p=[];n.forEach(g=>{const u={};u.type=g.type,u.data=g,delete u.data.type,u.data._type!=null&&(u.data.type=u.data._type,delete u.data._type),p.push(u)}),n=p}if(n!==void 0&&n.length>0){switch(e){case"group":O.send(i.jsonMap.message_list.name_group_send??"send_msg",{group_id:s,message:n},"sendMsgBack_uuid_"+a);break;case"user":{String(s).indexOf("/")>1?O.send(i.jsonMap.message_list.name_temp_send??"send_temp_msg",{user_id:s.split("/")[0],group_id:s.split("/")[1],message:n},"sendMsgBack_uuid_"+a):O.send(i.jsonMap.message_list.name_user_send??"send_msg",{user_id:s,message:n},"sendMsgBack_uuid_"+a);break}}x("sendMsg",{type:e})}}function He(s){const e=s.user_id?"user":"group",n=s.user_id?s.user_id:s.group_id;let o;i.jsonMap.message_list&&e!="group"?o=i.jsonMap.message_list.private_name:o=i.jsonMap.message_list.name,O.send(o??"get_chat_history",{message_type:i.jsonMap.message_list.message_type[e],group_id:n,user_id:n,message_seq:0,message_id:0,count:1},"getChatHistoryOnMsg_"+n)}function ce(s){const e=s.filter(a=>a.always_top),n=s.filter(a=>!a.always_top),o=(a,p)=>a.time==p.time||a.time==null||p.time==null?a.py_start==null||p.py_start==null?0:p.py_start.charCodeAt(0)-a.py_start.charCodeAt(0):p.time-a.time;return e.sort(o),n.sort(o),e.concat(n)}function Wt(s){s.message&&s.message.forEach(()=>{})}const Es=new M,Qe=Object.assign({"/src/assets/pathMap/LLOneBot.yaml":ie,"/src/assets/pathMap/Lagrange.OneBot.yaml":oe,"/src/assets/pathMap/NapCat.Onebot.yaml":re}),ye=Object.keys(Qe).find(s=>s.indexOf("Lagrange.OneBot.yaml")>0);let F={};ye!=null&&(F=Qe[ye].default);let Ws=0;const _s=new G;let ps=-1,ws=-1;function Gt(s){let e="unknown",n;try{n=JSON.parse(s),s.indexOf('"meta_event_type":"heartbeat"')<0&&_s.add(N.WS,"GET：",n)}catch{s.indexOf('"meta_event_type":"heartbeat"')<0&&_s.add(N.WS,"GET："+s)}try{if(n)if(n.echo!==void 0){const o=n.echo.split("_"),a=o[0];e=a,Jt[a](a,n,o)}else{let o=n.post_type;o=="notice"&&(o=n.notice_type??n.sub_type),e=o,Kt[o](o,n)}}catch(o){_s.error(o,`处理消息或通知错误 - ${e}：`)}}const Kt={meta_event:(s,e)=>{if(ps==-1){ps=0,i.watch.heartbeatTime=0;return}if(ps==0){ps=e.time,i.watch.lastHeartbeatTime=e.time;return}ps!=-1&&ws==-1&&(ws=e.time-ps),ws!=-1&&(i.watch.heartbeatTime=ws,i.watch.oldHeartbeatTime=i.watch.lastHeartbeatTime,i.watch.lastHeartbeatTime=e.time)},message_sent:Oe,message:Oe,request:(s,e)=>{i.systemNoticesList?i.systemNoticesList.push(e):i.systemNoticesList=[e]},friend:(s,e)=>{switch(qs(),e.sub_type){case"increase":{new M().add(P.INFO,w.config.globalProperties.$t("添加好友 {name} 成功！",{name:e.nickname}));break}case"decrease":{console.log("%c消失了一个好友："+e.nickname+"（"+e.user_id+"）","color:red;");break}}},group_recall:Gs,friend_recall:Gs,recall:Gs,group_msg_emoji_like:(s,e)=>{const n=e.message_id,o=e.likes;i.messageList.forEach((a,p)=>{a.message_id===n&&(i.messageList[p].emoji_like=o)})},group_ban:(s,e)=>{const n=e.group_id,o=e.user_id,a=e.sub_type==="ban",p=e.duration??0;o==i.loginInfo.uin&&n==i.chatInfo.show.id&&(a?i.chatInfo.info.me_info.shut_up_timestamp=(new Date().getTime()+p*1e3)/1e3:i.chatInfo.info.me_info.shut_up_timestamp=0),n==i.chatInfo.show.id&&i.messageList.push(e)},notify:(s,e)=>{const n=w.config.globalProperties.$t,o=e.group_id,a=[e.user_id,e.target_id],p=e.raw_info;if(o==i.chatInfo.show.id){let g="";const u=[];a.forEach(_=>{if(_==i.loginInfo.uin)u.push({txt:n("你"),isMe:!0});else{const E=i.chatInfo.info.group_members.find(h=>h.user_id==_);E&&u.push({txt:`<span>${E.nickname}</span>`,isMe:!1})}});let l=0;p.forEach(_=>{switch(_.type){case"img":g+=`<img src="${_.src}"/>`;break;case"nor":g+=_.txt;break;case"qq":g+=u[l].txt,l++}}),e.str=g,e.pokeMe=u[1].isMe,i.messageList.push(e)}}},Jt={getVersionInfo:(s,e)=>{const n=U("version_info",e,F.version_info);if(n){const o=n[0];if(Ie(i.botInfo.app_name!=o.app_name&&!J.status),i.botInfo=o,k.get("open_ga_bot")!==!1&&(o.app_name!==void 0?x("connect",{method:o.app_name}):x("connect",{method:"（未知）"})),!J.status){if(o.app_name!==void 0){const a=je(o.app_name);a!=null&&(F=a)}O.send("get_login_info",{},"getLoginInfo")}}},getLoginInfo:(s,e)=>{const n=U("login_info",e,F.login_info);if(n){const o=n[0];Ie(i.loginInfo.uin!=o.uin&&!J.status),i.loginInfo=o,J.status=!0,Is({id:"userName",action:"label",value:o.nickname}),clearInterval(i.tags.loginWaveTimer);const a=document.getElementById("bar-msg");a!=null&&a.click();const p="https://find.qq.com/proxy/domain/cgi.find.qq.com/qqfind/find_v11?backver=2",g=`bnum=15&pagesize=15&id=0&sid=0&page=0&pageindex=0&ext=&guagua=1&gnum=12&guaguan=2&type=2&ver=4903&longitude=116.405285&latitude=39.904989&lbs_addr_country=%E4%B8%AD%E5%9B%BD&lbs_addr_province=%E5%8C%97%E4%BA%AC&lbs_addr_city=%E5%8C%97%E4%BA%AC%E5%B8%82&keyword=${o.uin}&nf=0&of=0&ldw=${o.bkn}`;O.send("http_proxy",{url:p,method:"post",data:g},"getMoreLoginInfo"),qs(),Mt()}},getMoreLoginInfo:(s,e)=>{i.loginInfo.info=e.data.data.result.buddy.info_list[0]},getGroupList:(s,e)=>{Ee(e,"group")},getFriendList:(s,e)=>{Ee(e,"friend")},getFriendCategory:(s,e)=>{const n=U("friend_category",e,F.friend_category);n!=null&&ze(n),n.forEach(o=>{o.users.forEach(a=>{i.userList.forEach(p=>{p.user_id==a&&p.class_id==null&&(p.class_id=o.class_id,p.class_name=o.class_name)})})})},getUserInfoInGroup:(s,e)=>{const n=U("group_member_info",e,F.group_member_info);if(n&&n[0]){const o=n[0];o.shut_up_timestamp*1e3<Date.now()&&(o.shut_up_timestamp=0),i.chatInfo.info.me_info=o}},getGroupMemberList:(s,e)=>{const n=e.data;n.forEach(u=>{const _=(u.card?u.card:u.nickname).substring(0,1);u.py_start=As.convertToPinyin(_,"").toUpperCase().substring(0,1)});const o=n.filter(u=>u.role==="admin");o.sort((u,l)=>u.py_start&&l.py_start?u.py_start.charCodeAt(0)-l.py_start.charCodeAt(0):0);const a=n.filter(u=>u.role==="owner"),p=n.filter(u=>u.role!=="admin"&&u.role!=="owner");p.sort((u,l)=>u.py_start&&l.py_start?u.py_start.charCodeAt(0)-l.py_start.charCodeAt(0):0);const g=a.concat(o.concat(p));i.chatInfo.info.group_members=g},getChatHistoryFist:(s,e)=>{Ts(e,"top")},getChatHistory:(s,e)=>{Ts(e,"top")},getChatHistoryOnMsg:(s,e,n)=>{const o=Number(n[1]);if(o){let a=U("message_list",e,F.message_list);if(a!=null){a=pe(a,F.message_list.type,F.message_value);const p=K(a[0]),g=a[0].time;let u=!1;if(i.onMsgList.forEach(l=>{(l.user_id==o||l.group_id==o)&&(l.raw_msg=p,l.time=Us(Number(g)),u=!0)}),u){const l=ce(i.onMsgList);i.onMsgList=l}}}},getForwardMsg:(s,e)=>{if(e.error!==null&&(e.error!==void 0||e.status==="failed"))Es.add(P.ERR,w.config.globalProperties.$t("获取合并转发消息失败"));else{let n=U("forward_message_list",e,F.forward_msg);n=le(n),n!=null&&(i.mergeMessageList=n)}},sendMsgBack:(s,e,n)=>{if(e.message_id==null&&(e.message_id=e.data.message_id),e.message_id!==void 0&&k.get("send_reget")!==!0&&O.send(i.jsonMap.get_message.name??"get_msg",{message_id:e.message_id},"getSendMsg_"+e.message_id+"_0"),n[1]=="forward")Es.add(P.INFO,w.config.globalProperties.$t("消息已转发"));else if(n[1]=="uuid"){const o=n[2];i.messageList.forEach(a=>{if(a.message_id==o){a.message_id=e.message_id,a.fake_msg=!1;return}})}},getRoamingStamp:(s,e,n)=>{const o=Number(n[1]),a=e.data;F.roaming_stamp.reverse&&a.reverse(),i.stickerCache==null?i.stickerCache=a:i.jsonMap.roaming_stamp.pagerType=="full"?(o>i.stickerCache.length+48&&a.push("end"),i.stickerCache=a):i.stickerCache=i.stickerCache.concat(a)},getMoreGroupInfo:(s,e)=>{i.chatInfo.info.group_info=e.data.data},getMoreUserInfo:(s,e)=>{i.chatInfo.info.user_info=e.data.data.result.buddy.info_list[0]},getGroupNotices:(s,e)=>{const n=U("group_notices",e,F.group_notices);n!=null&&(i.chatInfo.info.group_notices=n)},getGroupFiles:(s,e)=>{const n=e.data.data,o=document.createElement("div");o.innerHTML=n.em,n.ec!==0?Es.add(P.ERR,w.config.globalProperties.$t("加载群文件失败（{code}）",{code:ee(o.innerHTML)})):i.chatInfo.info.group_files=n},getMoreGroupFiles:(s,e)=>{const n=e.data.data;i.chatInfo.info!==void 0&&i.chatInfo.info.group_files!==void 0&&(i.chatInfo.info.group_files.file_list=i.chatInfo.info.group_files.file_list.concat(n.file_list),i.chatInfo.info.group_files.next_index=n.next_index)},downloadFile:(s,e)=>{const o=e.echo.split("_")[1],a=e.data.url;let p=-1,g=-1;for(let u=i.messageList.length-1;u>0;u--)if(i.messageList[u].message_id==o){p=u;for(let l=0;l<i.messageList[u].message.length;l++)if(i.messageList[u].message[l].type=="file"){g=l;break}break}if(p!=-1&&g!=-1){const u=function(l){l.lengthComputable&&(i.messageList[p].message[g].downloadingPercentage=Math.floor(l.loaded/l.total*100))};Bs(a,e.echo.substring(e.echo.lastIndexOf("_")+1,e.echo.length),u)}},downloadGroupFile:(s,e)=>{const n=e.echo.split("_"),o=n[1];let a="new-file",p=-1,g=-1;i.chatInfo.info.group_files.file_list.forEach((l,_)=>{l.id===o&&(a=Ys(l.name),p=_)}),n[2]!==void 0&&i.chatInfo.info.group_files.file_list[p].sub_list.forEach((l,_)=>{l.id===n[2]&&(a=Ys(l.name),g=_)});const u=function(l){if(!l.lengthComputable)return;const _=Math.floor(l.loaded/l.total*100);p!==-1&&(g===-1?(i.chatInfo.info.group_files.file_list[p].downloadingPercentage===void 0&&(i.chatInfo.info.group_files.file_list[p].downloadingPercentage=0),i.chatInfo.info.group_files.file_list[p].downloadingPercentage=_):(i.chatInfo.info.group_files.file_list[p].sub_list[g].downloadingPercentage===void 0&&(i.chatInfo.info.group_files.file_list[p].sub_list[g].downloadingPercentage=0),i.chatInfo.info.group_files.file_list[p].sub_list[g].downloadingPercentage=_))};Bs(e.data.url,a,u)},getGroupDirFiles:(s,e)=>{const n=e.echo.split("_")[1];let o=-1;i.chatInfo.info.group_files.file_list.forEach((a,p)=>{a.id===n&&(o=p)}),i.chatInfo.info.group_files.file_list[o].sub_list=e.data.data.file_list},loadFileBase:(s,e,n)=>{let o=e.data.url;const a=n[1],p=n[2];if(o){let g=-1;i.messageList.forEach((u,l)=>{u.message_id===a&&(g=l)}),g!==-1&&(document.location.protocol=="https:"&&o.toLowerCase().startsWith("http:")&&(o="https"+o.substring(o.indexOf("://"))),i.messageList[g].fileView.url=o,i.messageList[g].fileView.ext=p)}},getJin:(s,e)=>{const n=U("group_essence",e,F.group_essence),o=U("is_end",e,F.group_essence.is_end)??[!0];if(n&&o){if(i.chatInfo.info.jin_info.list.length==0)i.chatInfo.info.jin_info.list=n;else{const a=i.chatInfo.info.jin_info.pages??0;i.chatInfo.info.jin_info.list=i.chatInfo.info.jin_info.list.concat(n),i.chatInfo.info.jin_info.pages=a+1}i.chatInfo.info.jin_info.is_end=o[0]}},getSystemMsg:(s,e)=>{i.systemNoticesList=e.data},getSendMsg:(s,e,n)=>{if(e.status=="ok"){const o=U("get_message",e,F.get_message);let a;if(o&&(a=U("message_info",o[0],F.message_info)),Number(n[2])<=5&&o&&a){const p=o[0],g=a[0];n[1]!==g.message_id.toString()?setTimeout(()=>{O.send(i.jsonMap.get_message.name??"get_msg",{message_id:n[1]},"getSendMsg_"+n[1]+"_"+(Number(n[2])+1))},5e3):(i.messageList.forEach((u,l)=>{u.message_id==g.message_id&&i.messageList.splice(l,1)}),(g.group_id==i.chatInfo.show.id||g.private_id==i.chatInfo.show.id)&&Ts($s([p]),"bottom"))}else Es.add(P.ERR,w.config.globalProperties.$t("获取消息失败"))}else Number(n[2])<5?setTimeout(()=>{O.send(i.jsonMap.get_message.name??"get_msg",{message_id:n[1]},"getSendMsg_"+n[1]+"_"+(Number(n[2])+1))},5e3):Es.add(P.ERR,w.config.globalProperties.$t("获取消息失败"))},getGroupMemberInfo:(s,e)=>{if(e.data!=null){const n=e.data,o=e.echo.split("_");n.x=o[1],n.y=o[2],i.chatInfo.info.now_member_info=n}},readMemberMessage:(s,e)=>{const n=e.data[0],o=i.jsonMap.set_message_read.private_name;let a=i.jsonMap.set_message_read.private_name;a||(a=o),n.group_id!=null?O.send(o,{message_id:n.message_id,group_id:n.group_id},"setMessageRead"):O.send(a,{message_id:n.message_id,user_id:n.self_id},"setMessageRead"),new us().closeAll(n.group_id??n.self_id)},setFriendAdd:De,setGroupAdd:De,getRecentContact:(s,e)=>{const n=U("recent_contact",e,F.recent_contact);if(n!=null){let o=n.filter(p=>p.chat_type==1||p.chat_type==2);const a=i.sysConfig.top_info;if(a!=null){const p=a[i.loginInfo.uin];p!=null&&(o=o.filter(g=>p.indexOf(Number(g.user_id))==-1))}o=o.filter((p,g,u)=>u.findIndex(l=>l.user_id==p.user_id)==g),o.forEach(p=>{const g=i.userList.find(l=>l.user_id==p.user_id),u=i.onMsgList.find(l=>l.user_id==p.user_id)!=null;g&&!u&&(i.onMsgList.push(g),He(g))})}},SendRespondBack:(s,e,n)=>{const o=n[1],a=Number(n[2]);i.messageList.forEach((p,g)=>{if(p.message_id===o)if(i.messageList[g].emoji_like){let u=!1;i.messageList[g].emoji_like.forEach(l=>{l.emoji_id==a&&(l.count++,u=!0)}),u||i.messageList[g].emoji_like.push({emoji_id:a,count:1})}else i.messageList[g].emoji_like=[{emoji_id:a,count:1}]})},getCookies:(s,e,n)=>{const o={};e.data.cookies.split("; ").forEach(u=>{const l=u.split("=")[0],_=u.split("=")[1];o[l]=_});const a=o.skey||"";let p=5381;for(let u=0;u<a.length;u++)p+=(p<<5)+a.charCodeAt(u);const g=n[1];i.loginInfo.webapi||(i.loginInfo.webapi={}),i.loginInfo.webapi[g]||(i.loginInfo.webapi[g]={}),i.loginInfo.webapi[g].cookie=o,i.loginInfo.webapi[g].bkn=(p&2147483647).toString()},setMessageRead(){}};function Ee(s,e){Ws++;let n;if(F.user_list)n=U("user_list",s,F.user_list);else switch(e){case"friend":n=U("friend_list",s,F.friend_list),n&&(n=n.filter((o,a,p)=>p.findIndex(g=>g.user_id==o.user_id)==a));break;case"group":n=U("group_list",s,F.group_list),n&&(n=n.filter((o,a,p)=>p.findIndex(g=>g.group_id==o.group_id)==a));break}if(n!=null){const o={};if(n.forEach((p,g)=>{let u="";p.group_id?u=As.convertToPinyin(p.group_name):u=As.convertToPinyin(p.nickname)+","+As.convertToPinyin(p.remark),n&&n[g]&&(n[g].py_name=u,n[g].py_start=u.substring(0,1).toUpperCase()),e=="friend"?(p.class_id!=null&&p.class_name&&(typeof p.class_name=="string"?o[p.class_id]=p.class_name:o[p.class_id]=p.class_name[0]),delete p.group_name):(delete p.class_id,delete p.class_name)}),Object.keys(o).length>0){const p=[];for(const g in o)p.push({class_id:Number(g),class_name:o[g]});ze(p)}n.sort((p,g)=>p.py_start&&g.py_start?p.py_start.charCodeAt(0)-g.py_start.charCodeAt(0):0),i.userList=i.userList.concat(n);const a=i.sysConfig.top_info;if(a!=null){const p=a[i.loginInfo.uin];p!==void 0&&n.forEach(g=>{const u=Number(g.user_id?g.user_id:g.group_id);p.indexOf(u)>=0&&(g.always_top=!0,i.onMsgList.filter(_=>_.user_id===u||_.group_id===u).length!==1&&(i.onMsgList.push(g),i.userList.forEach(_=>{_.always_top&&He(_)})))})}Is({id:"userList",action:"label",value:w.config.globalProperties.$t("用户列表（{count}）",{count:i.userList.length})})}Ws>0&&Ws%2==0&&i.jsonMap.recent_contact&&O.send(i.jsonMap.recent_contact.name,{},"getRecentContact"),e=="friend"&&i.jsonMap.friend_category&&O.send(i.jsonMap.friend_category.name,{},"getFriendCategory")}function ze(s){s[0].sort_id!=null?s.sort((e,n)=>e.sort_id&&n.sort_id?e.sort_id-n.sort_id:0):s.sort((e,n)=>e.class_id-n.class_id),i.tags.classes=s}function Ts(s,e=void 0){var o;let n=U("message_list",s,F.message_list);if(n=le(n),n!=null){const a=n[0],p=U("message_info",a,F.message_info);if(p!=null){const u=p[0],l=u.group_id??u.private_id;if(l!=null&&l!=i.chatInfo.show.id)return}if(e=="top"&&((o=i.jsonMap.message_list)==null?void 0:o.pagerType)=="full"&&(e=void 0),e!=null){if(n.length<1){i.tags.canLoadHistory=!1;return}e=="top"?(i.messageList.length>0&&n.length>0&&i.messageList[0].message_id==n[n.length-1].message_id&&n.pop(),i.messageList=n.concat(i.messageList)):e=="bottom"&&(i.messageList=i.messageList.concat(n))}else i.messageList=[],i.messageList=n;i.messageList.forEach(u=>{Wt(u)});const g=i.messageList[i.messageList.length-1];if(g){const u=i.userList.find(l=>l.group_id==i.chatInfo.show.id||l.user_id==i.chatInfo.show.id);u&&(i.chatInfo.show.type=="group"?u.raw_msg=g.sender.nickname+": "+K(g):u.raw_msg=K(g),u.time=Us(Number(g.time)))}}}function le(s){if(s!=null)return s=pe(s,F.message_list.type,F.message_value),F.message_list.order==="reverse"&&s.reverse(),s.forEach(e=>{e.post_type||(e.post_type="message")}),s}function Gs(s,e){const n=e.notice_type.indexOf("group")>=0?e.group_id:e.user_id,o=e.message_id;let a=null,p=-1;if(i.messageList.forEach((g,u)=>{g.message_id===o&&(a=g,p=u)}),a!==null&&p!==-1){if(i.messageList[p].revoke=!0,i.messageList[p].sender.user_id!=i.loginInfo.uin&&i.messageList.splice(p,1),a.sender.user_id!==i.loginInfo.uin){const g=i.messageList;p!==-1?g.splice(p+1,0,e):g.push(e)}}else _s.error(null,"没有找到这条被撤回的消息 ……");new us().closeAll(n)}let we=0;function Oe(s,e){if(e.detail_type=="guild")return;const n=U("message_info",e,F.message_info);if(n!=null){const o=n[0],a=o.group_id??o.private_id,p=i.loginInfo.uin,g=i.chatInfo.show.id,u=o.sender,l=i.userList.find(D=>D.user_id==u),_=(l==null?void 0:l.class_id)==9999;k.get("send_reget")!==!0&&u===p&&k.save("send_reget",!0);let E=-1;for(let D=i.messageList.length-1;D>0;D--)if(i.messageList[D].fake_msg!=null&&u==p){E=D;break}if(E!=-1){let D=U("message_list",$s([e]),F.message_list);D=le(D),D&&D.length==1&&(i.messageList[E].message=D[0].message,i.messageList[E].raw_message=D[0].raw_message,i.messageList[E].time=D[0].time,i.messageList[E].fake_msg=void 0,i.messageList[E].revoke=!1);return}if(a===g||o.target_id==g){Ts($s([e]),"bottom");const D=ct(0,1e4);if(D>=4500&&D<=5500&&_s.add(N.INFO,D.toString()+"，这只是个神秘的数字...",void 0,!0),D===5e3){const A={html:Bn,button:[{text:"确定(O)",fun:()=>{i.popBoxList.shift()}}]};i.popBoxList.push(A),Ks.trackEvent("show_qed",{times:we})}we++}let h=U("message_list",$s([e]),F.message_list);h!=null&&(h=pe(h,F.message_list.type,F.message_value),e=h[0]);const f=i.onMsgList.filter((D,A)=>{if(Number(a)===D.user_id||Number(a)===D.group_id||Number(o.target_id)===D.user_id){if(i.onMsgList[A].message_id=e.message_id,e.message_type==="group"){const js=e.sender.card&&e.sender.card!==""?e.sender.card:e.sender.nickname;i.onMsgList[A].raw_msg=js+": "+K(e)}else i.onMsgList[A].raw_msg=K(e);i.onMsgList[A].time=Us(Number(e.time));const as=ce(i.onMsgList);return i.onMsgList=as,!0}return!1});(e.atme==null||e.atall==null)&&e.message.forEach(D=>{D.type=="at"&&D.qq==p&&(e.atme=!0)}),e.sub_type==="group"&&(e.sender.nickname=e.sender.user_id);let q=!1;if(e.message_type==="group"){const A=(k.get("notice_group")??{})[i.loginInfo.uin];A&&(q=A.indexOf(a)>=0)}if(u!=p&&u!=0&&(_||e.message_type!=="group"||e.atme||e.atall||q||k.get("notice_all")===!0)){if(a!==g||!document.hasFocus()||document.hidden||_){let D=K(e);D=D===""?e.raw_message:D,_s.add(N.INFO,"新消息通知："+D,void 0,!0),e.group_name===void 0&&i.userList.forEach(as=>{as.group_id==e.group_id&&(e.group_name=as.group_name)});const A={title:e.group_name??e.sender.nickname,body:e.message_type==="group"?e.sender.nickname+":"+D:D,tag:`${a}/${e.message_id}`,icon:e.message_type==="group"?`https://p.qlogo.cn/gh/${a}/${a}/0`:`https://q1.qlogo.cn/g?b=qq&s=0&nk=${a}`,image:void 0,type:e.group_id?"group":"user",is_important:_};e.message.forEach(as=>{as.type==="image"&&A.image===void 0&&(A.image=as.url)}),k.get("close_notice")!==!0&&new us().notify(A),i.tags.isElectron&&i.reader&&i.reader.send("sys:newMessage",{id:a,image:A.icon,name:A.title,msg:D})}if(f.length!==1)if(e.sub_type==="group"){const D={user_id:u,nickname:w.config.globalProperties.$t("临时会话"),remark:e.sender.user_id,new_msg:!0,message_id:e.message_id,raw_msg:e.raw_message,time:e.time,group_id:e.sender.group_id,group_name:""};i.onMsgList.push(D)}else{const D=i.userList.filter(A=>A.user_id===a||A.group_id===a);D.length===1&&i.onMsgList.push(D[0])}i.onMsgList.forEach(D=>{a!==g&&(a==D.group_id||a==D.user_id)&&(D.new_msg=!0)})}}}function De(s,e,n){var a,p;const o=n[1];if(o!==void 0){const g=(a=i.systemNoticesList)==null?void 0:a.findIndex(u=>u.flag==o);g!==-1&&((p=i.systemNoticesList)==null||p.splice(g,1))}}const Ps={tags:{firstLoad:!1,canLoadHistory:!0,openSideBar:!1,viewer:{index:0},msgType:X.Array,isElectron:!1,platform:void 0,release:void 0,connectSsl:!1,classes:[],darkMode:!1},watch:{},chatInfo:{show:{type:"",id:0,name:"",avatar:""},info:{group_info:{},user_info:{},me_info:{},group_members:[],group_files:{},group_sub_files:{},jin_info:{list:[],pages:0}}},pageView:{chatView:rs(Ls(()=>r(()=>Promise.resolve().then(()=>Xe),void 0))),msgView:rs(Ls(()=>r(()=>Promise.resolve().then(()=>$g),void 0)))},userList:[],showList:[],systemNoticesList:void 0,onMsgList:[],loginInfo:{},botInfo:{},sysConfig:{},messageList:[],popBoxList:[]},i=W(Ps);function Ie(s=!1){i.botInfo=W([]),i.watch=W(Ps.watch),ps=-1,ws=-1,s&&(i.tags=W(Ps.tags),i.chatInfo=W(Ps.chatInfo),i.userList=W([]),i.showList=W([]),i.systemNoticesList=W([]),i.onMsgList=W([]),i.loginInfo=W([]),i.messageList=W([]))}let ls;const Le={opt_dark:!1,opt_auto_dark:!0,language:"zh-CN",log_level:"err",open_ga_bot:!0,initial_scale:.85,fs_adaptation:0,theme_color:0,chat_background_blur:0,msg_type:2,store_face:"[]"},qe={language:ei,opt_dark:ds,opt_auto_dark:ni,theme_color:ti,chatview_name:ii,initial_scale:si,msg_type:xt,opt_auto_win_color:Xt,opt_revolve:Yt,opt_always_top:Zt};function Zt(s){i.reader&&i.reader.send("win:alwaysTop",s)}function Yt(s){const e=document.getElementById("base-app");e&&s&&(e.classList.contains("no-touch")?(e.classList.remove("no-touch"),me("opt_revolve",!1)):(e.classList.add("no-touch"),x("click_statistics",{name:"touch_randomly"})))}function Xt(s){s==!0&&(i.reader&&i.reader.on("sys:WinColorChanged",(e,n)=>{Ue(n)}),Rt())}function xt(s){s&&(i.tags.msgType=Number(s))}function si(s){const e=document.getElementById("viewport");e&&s&&s>=.1&&s<=5&&(e.content=`width=device-width, initial-scale=${s}, maximum-scale=5, user-scalable=0`)}function ei(s){const e=Zs(s);se.global.setLocaleMessage(s,e),w.config.globalProperties.$i18n.locale=s;let n=!1;for(let a=0;a<cs.length;a++)if(cs[a].value==s&&cs[a].fallback){const p=cs[a].fallback,g=Zs(p);se.global.setLocaleMessage(p,g),n=!0,w.config.globalProperties.$i18n.fallbackLocale=p;break}n||(w.config.globalProperties.$i18n.fallbackLocale="zh-CN");const o=document.querySelector("html");o!==null&&o.setAttribute("lang",Z())}function ds(s=!0){ke(s===!0?"dark":"light")}function ni(s){const e=window.matchMedia("(prefers-color-scheme: dark)"),n=document.getElementById("opt_view_dark");s==!0?(e.matches?ds():ds(!1),typeof e.addEventListener=="function"&&e.addEventListener("change",o=>{if(vs("opt_auto_dark")){const a=o.matches;new G().add(N.UI,"正在自动切换颜色模式为："+a),a?ds():ds(!1),fe("opt_auto_win_color",vs("opt_auto_win_color"))}}),n&&(n.style.display="none")):(n&&(n.style.display="flex"),ds(!!vs("opt_dark")))}function ke(s){i.tags.firstLoad?i.tags.firstLoad=!1:document.body.style.transition="background, color, background-color .3s";const e=["color-.*.css","prism-.*.css","append-.*.css"],n=document.getElementsByTagName("link");for(let a=0;a<n.length;a++){const p=n[a].href;e.forEach(g=>{if(p.match(g)!=null){if(p!=null){let _=p;p.indexOf("dark")>-1?_=p.replace("dark","light"):_=p.replace("light","dark");const E=new XMLHttpRequest;if(E.open("HEAD",_,!1),E.send(),E.status!=200){new M().add(P.ERR,"无法切换颜色模式：访问颜色模式文件失败。");return}}const u=document.createElement("link");u.setAttribute("rel","stylesheet"),u.setAttribute("type","text/css"),s==="dark"?u.setAttribute("href",p.replace("light","dark")):u.setAttribute("href",p.replace("dark","light"));const l=document.getElementsByTagName("head").item(0);l!==null&&l.replaceChild(u,n[a])}})}const o=document.getElementsByName("theme-color")[0];o&&(o.content=getComputedStyle(document.documentElement).getPropertyValue("--color-main")),i.tags.darkMode=s==="dark"}function ti(s){document.documentElement.style.setProperty("--color-main","var(--color-main-"+s+")");const e=document.getElementsByName("theme-color")[0];e&&(e.content=getComputedStyle(document.documentElement).getPropertyValue("--color-main-"+s))}function ii(s){s&&s!=""?i.pageView.chatView=rs(Ls(()=>Ve(Object.assign({"../pages/chat-view/Chat弹幕.vue":()=>r(()=>Promise.resolve().then(()=>Ge),void 0),"../pages/chat-view/Chat终端.vue":()=>r(()=>Promise.resolve().then(()=>Ke),void 0),"../pages/chat-view/SystemNotice.vue":()=>r(()=>Promise.resolve().then(()=>Je),void 0)}),`../pages/chat-view/${s}.vue`,4))):i.pageView.chatView=rs(Ls(()=>r(()=>Promise.resolve().then(()=>Xe),void 0)))}function oi(){let s={};if(i.reader)s=i.reader.sendSync("opt:getAll");else{const e=localStorage.getItem("options");if(e!=null){const n=e.split("&");for(let o=0;o<=n.length;o++)if(n[o]!==void 0){const a=n[o].split(":");a.length===2&&(s[a[0]]=a[1])}}}return ri(s)}function ri(s){const e={};return Object.keys(s).forEach(n=>{const o=s[n];if(o==="true"||o==="false")e[n]=o==="true";else if(o==="null")e[n]=null;else if(typeof o=="string"){e[n]=decodeURIComponent(o);try{e[n]=JSON.parse(e[n])}catch{}}else e[n]=o;bs(n,e[n])}),Object.keys(Le).forEach(n=>{e[n]===void 0&&(e[n]=Le[n])}),ls=e,e}function bs(s,e){typeof qe[s]=="function"&&qe[s](e)}function vs(s){if(ls){const e=Object.keys(ls);for(let n=0;n<e.length;n++)if(e[n]===s){const o=ls[e[n]];try{return JSON.parse(o)}catch{return o}}}return null}function Vs(s){if(i.reader)return i.reader.sendSync("opt:get",s);{const e=localStorage.getItem("options");if(e!=null){const n=e.split("&");for(let o=0;o<=n.length;o++)if(n[o]!==void 0){const a=n[o].split(":");if(a.length===2&&s==a[0])return a[1]}}}}function me(s,e){ls[s]=e,de()}function de(s={}){Object.keys(s).length==0&&Object.assign(s,ls);let e="";if(Object.keys(s).forEach(n=>{const o=typeof s[n]=="object";e+=n+":"+encodeURIComponent(o?JSON.stringify(s[n]):s[n])+"&"}),e=e.substring(0,e.length-1),localStorage.setItem("options",e),i.reader){const n=s;Object.keys(s).forEach(o=>{const a=typeof s[o]=="object";n[o]=a?JSON.stringify(s[o]):s[o]}),i.reader.send("opt:saveAll",n)}}function fe(s,e){me(s,e),bs(s,e)}function ys(s){const e=s.target;if(e!=null){const n=e.nodeName,o=e.getAttribute("name");let a=null;switch(n){case"SELECT":{a=e.options[e.selectedIndex].value;break}case"INPUT":{switch(e.type){case"checkbox":{a=e.checked;break}case"radio":{a=e.dataset.id;break}case"range":case"number":case"text":{a=e.value;break}}break}}o!==null&&fe(o,a)}if(e.dataset.reload=="true"){const n=w.config.globalProperties.$t,a={svg:"trash-arrow-up",html:"<span>"+n("此操作将在重启应用后生效，现在就要重启吗？")+"</span>",title:n("重启应用"),button:[{text:w.config.globalProperties.$t("确定"),fun:()=>{i.tags.isElectron?i.reader&&i.reader.send("win:relaunch"):location.reload()}},{text:w.config.globalProperties.$t("取消"),master:!0,fun:()=>{i.popBoxList.shift()}}]};i.popBoxList.push(a)}}function We(s){delete ls[s],de()}const k={get:vs,getRaw:Vs,load:oi,save:me,run:bs,runAS:fe,runASWEvent:ys,remove:We},ai={name:"ViewOptAccount",props:[],data(){return{runtimeData:i,save:ys,login:J}},methods:{paseBotInfo(s,e){return typeof e=="number"&&s.indexOf("time")>0&&e>1e9?(e/1e10<1&&(e=e*1e3),Intl.DateTimeFormat(Z(),{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"}).format(new Date(e))):e},exitConnect(){We("auto_connect"),O.close()},goLogin(){var s;(s=document.getElementById("bar-home"))==null||s.click()},setNick(s){s.key==="Enter"&&i.loginInfo.nickname!==""&&O.send("set_nickname",{nickname:i.loginInfo.nickname},"setNickname")},setLNick(s){s.key==="Enter"&&i.loginInfo.info.lnick!==""&&O.send("set_signature",{signature:i.loginInfo.info.lnick},"setSignature")},getRunStatus(){const s=i.watch.heartbeatTime,e=i.watch.oldHeartbeatTime,n=i.watch.lastHeartbeatTime;return s&&e&&n?n-e==s?"normal":"slow":s==0?"loading":"unknown"}}},ui={class:"opt-page"},gi={class:"ss-card account-info"},pi=["src"],ci={class:"ss-card"},li={class:"opt-item"},mi={key:0,class:"opt-item"},di={key:1,class:"ss-card account-not-login"},fi={key:2,class:"ss-card"},_i={class:"l10n-info"},vi={class:"bot-info"},hi={key:0},bi={key:0};function yi(s,e,n,o,a,p){const g=C("font-awesome-icon");return m(),d("div",ui,[Object.keys(a.runtimeData.loginInfo).length>0?(m(),d(I,{key:0},[t("div",gi,[t("img",{src:"https://q1.qlogo.cn/g?b=qq&s=0&nk="+a.runtimeData.loginInfo.uin},null,8,pi),t("div",null,[t("div",null,[t("span",null,c(a.runtimeData.loginInfo.nickname),1),t("span",null,c(a.runtimeData.loginInfo.uin),1)]),t("span",null,c(a.runtimeData.loginInfo.info&&Object.keys(a.runtimeData.loginInfo.info).length>0?a.runtimeData.loginInfo.info.lnick:""),1)]),v(g,{icon:["fas","right-from-bracket"],onClick:p.exitConnect},null,8,["onClick"])]),t("div",ci,[t("header",null,c(s.$t("账号设置")),1),t("div",li,[v(g,{icon:["fas","address-card"]}),t("div",null,[t("span",null,c(s.$t("昵称")),1),t("span",null,c(s.$t("就只是个名字而已 ……")),1)]),y(t("input",{"onUpdate:modelValue":e[0]||(e[0]=u=>a.runtimeData.loginInfo.nickname=u),class:"ss-input",style:{width:"150px"},type:"text",onKeyup:e[1]||(e[1]=(...u)=>p.setNick&&p.setNick(...u))},null,544),[[j,a.runtimeData.loginInfo.nickname]])]),a.runtimeData.loginInfo.info&&Object.keys(a.runtimeData.loginInfo.info).length>0?(m(),d("div",mi,[v(g,{icon:["fas","pen"]}),t("div",null,[t("span",null,c(s.$t("签名")),1),t("span",null,c(s.$t("啊吧啊吧（智慧的眼神）")),1)]),y(t("input",{"onUpdate:modelValue":e[2]||(e[2]=u=>a.runtimeData.loginInfo.info.lnick=u),class:"ss-input",style:{width:"150px"},type:"text",onKeyup:e[3]||(e[3]=(...u)=>p.setLNick&&p.setLNick(...u))},null,544),[[j,a.runtimeData.loginInfo.info.lnick]])])):b("",!0)])],64)):(m(),d("div",di,[v(g,{icon:["fas","fish"]}),t("span",null,c(s.$t("还没有连接到 OneBot 耶")),1),t("button",{class:"ss-button",onClick:e[4]||(e[4]=(...u)=>p.goLogin&&p.goLogin(...u))},c(s.$t("去连接")),1)])),Object.keys(a.runtimeData.botInfo).length>0?(m(),d("div",fi,[t("header",null,c(s.$t("后端信息")),1),t("div",_i,[v(g,{icon:["fas","robot"]}),t("div",null,[t("span",null,[R(c(a.runtimeData.botInfo.app_name),1),t("a",null,c(a.runtimeData.botInfo.app_version!==void 0?a.runtimeData.botInfo.app_version:a.runtimeData.botInfo.version),1)]),t("span",null,c(s.$t("这是你连接的 QQ Bot 的相关信息")),1)])]),p.getRunStatus()!="unknown"?(m(),d("div",{key:0,class:L("bot-status "+p.getRunStatus())},[e[5]||(e[5]=t("div",null,null,-1)),t("span",null,c(s.$t("连接_"+p.getRunStatus(),{step:a.runtimeData.watch.heartbeatTime,timeout:(a.runtimeData.watch.lastHeartbeatTime??0)-(a.runtimeData.watch.oldHeartbeatTime??0)})),1)],2)):b("",!0),t("div",vi,[(m(!0),d(I,null,$(Object.keys(a.runtimeData.botInfo),u=>(m(),d("div",{key:"botinfo-"+u},[u!=="app_name"&&u!=="app_version"&&u!=="version"?(m(),d("span",hi,[t("span",null,c(s.$t("botinfo_"+u)+": "),1),typeof a.runtimeData.botInfo[u]!="object"?(m(),d("span",bi,c(p.paseBotInfo(u,a.runtimeData.botInfo[u])),1)):(m(!0),d(I,{key:1},$(Object.keys(a.runtimeData.botInfo[u]),l=>y((m(),d("span",{key:"botinfo-"+u+l},c((typeof a.runtimeData.botInfo[u][l]=="number"?s.$t("botinfo_"+l,a.runtimeData.botInfo[u][l]):s.$t("botinfo_"+l))+": "+p.paseBotInfo(l,a.runtimeData.botInfo[u][l])),1)),[[T,typeof a.runtimeData.botInfo[u][l]!="object"]])),128))])):b("",!0)]))),128))])])):b("",!0)])}const Ei=B(ai,[["render",yi]]),wi=S({name:"ChatDan",components:{vueDanmaku:cn},props:["chat","list","mergeList","mumberInfo"],data(){return{opt:{speeds:140,loop:!0},runtimeData:i,trueLang:Z(),danmus:[],imgCache:[],sendCache:[],msg:"",parseIndex:-1,operaParse:!1}},mounted(){const s=document.getElementById("chat-pan");new ResizeObserver(()=>{var n;(n=this.$refs.danmakuRef)==null||n.resize()}).observe(s),this.$watch(()=>this.list.length,this.updateList)},methods:{openLeftBar(){i.tags.openSideBar=!i.tags.openSideBar},pause(s){var e;(e=this.$refs.danmakuRef)==null||e.pause(),this.parseIndex=s},play(){var s;this.operaParse||((s=this.$refs.danmakuRef)==null||s.play(),this.parseIndex=-1)},opera(){this.parseIndex==-1?(this.operaParse=!0,this.pause(0)):(this.operaParse=!1,this.play())},sendMsg(s){if(s.keyCode===13&&this.msg!=""){const e=ae(this.msg,this.sendCache,this.imgCache);this.chat.show.temp?os(this.chat.show.id+"/"+this.chat.show.temp,this.chat.show.type,e):os(this.chat.show.id,this.chat.show.type,e),this.sendCache=[],this.imgCache=[],this.msg=""}},addImg(s){if(s.clipboardData&&s.clipboardData.items)for(let e=0,n=s.clipboardData.items.length;e<n;e++){const o=s.clipboardData.items[e];o.kind==="file"&&(this.setImg(o.getAsFile()),s.preventDefault())}},setImg(s){const e=new M;if(s!==null&&s.type.indexOf("image/")>=0&&s.size!==0)if(s.size<3145728){const n=new FileReader;n.readAsDataURL(s),n.onloadend=()=>{const o=n.result;if(o!==null)if(k.get("close_chat_pic_pan")===!0){const a={addText:!0,msgObj:{type:"image",file:"base64://"+o.substring(o.indexOf("base64,")+7,o.length)}};this.addSpecialMsg(a)}else this.imgCache.push(o)}}else e.add(P.INFO,this.$t("图片过大"))},addSpecialMsg(s){if(s!==void 0){const e=this.sendCache.length;return this.sendCache.push(s.msgObj),s.addText===!0&&(s.addTop===!0?this.msg="[SQ:"+e+"]"+this.msg:this.msg+="[SQ:"+e+"]"),e}return-1},updateList(){var s,e;if(this.opt.loop){if(this.list.length==20){const o=i.chatInfo.show.type,a=i.chatInfo.show.id,p=this.list[0].message_id??0;let g;const u=((s=i.jsonMap.message_list)==null?void 0:s.pagerType)=="full";i.jsonMap.message_list&&o!="group"?g=i.jsonMap.message_list.private_name:g=i.jsonMap.message_list.name,O.send(g??"get_chat_history",{group_id:o=="group"?a:void 0,user_id:o!="group"?a:void 0,message_id:p,count:u?i.messageList.length+10:10},"getChatHistory")}const n=this.list.map(o=>({text:K(o),id:o.sender.user_id}));n.length>30&&n.splice(0,n.length-30),this.danmus=n.reverse()}else(e=this.$refs.danmakuRef)==null||e.push({text:K(this.list[this.list.length-1]),id:this.list[this.list.length-1].sender.user_id})}}}),Oi={class:"danmu-pan"},Di={class:"controller"},Ii={class:"loop"},Li={class:"ss-switch"},qi={class:"ss-range"},ki={class:"controller input"},Ci=["data-id","onMouseenter","onTouchstart"],Ai=["src"],$i={class:"name"},Ti={class:"info"},Pi={class:"time"};function Vi(s,e,n,o,a,p){const g=C("font-awesome-icon"),u=C("vue-danmaku");return m(),d("div",{id:"chat-pan",class:L("chat-pan"+(s.runtimeData.tags.openSideBar?" open":"")+(s.runtimeData.sysConfig.opt_no_window?" withBar":""))},[t("div",Oi,[v(u,{ref:"danmakuRef",style:{height:"calc(100vh - 40px)",width:"100%"},channels:0,danmus:s.danmus,speeds:s.opt.speeds,"random-channel":"",top:2,loop:s.opt.loop,"use-slot":""},{dm:z(({index:l,danmu:_})=>[t("div",{"data-id":l,class:L("danmu"+(l==0?" new":"")+(s.runtimeData.loginInfo.uin==_.id?" me":"")+(s.parseIndex!=l&&s.parseIndex!=-1?" opacity":"")),onMouseenter:E=>s.pause(l),onMouseleave:e[7]||(e[7]=(...E)=>s.play&&s.play(...E)),onTouchstart:E=>s.pause(l),onTouchend:e[8]||(e[8]=(...E)=>s.play&&s.play(...E))},[t("img",{name:"avatar",src:"https://q1.qlogo.cn/g?b=qq&s=0&nk="+_.id},null,8,Ai),t("a",null,c(s.danmus.length-l+1),1),t("span",null,c(_.text),1)],42,Ci)]),default:z(()=>[t("div",Di,[t("div",{class:"back",onClick:e[0]||(e[0]=(...l)=>s.openLeftBar&&s.openLeftBar(...l))},[v(g,{icon:["fas","angle-left"]})]),t("div",{class:"back",onClick:e[1]||(e[1]=(...l)=>s.opera&&s.opera(...l))},[s.parseIndex==-1?(m(),V(g,{key:0,icon:["fas","pause"]})):(m(),V(g,{key:1,icon:["fas","play"]}))]),t("div",Ii,[v(g,{icon:["fas","arrows-rotate"]}),t("label",Li,[y(t("input",{"onUpdate:modelValue":e[2]||(e[2]=l=>s.opt.loop=l),type:"checkbox",checked:""},null,512),[[Q,s.opt.loop]]),e[9]||(e[9]=t("div",null,[t("div")],-1))])]),e[10]||(e[10]=t("div",{class:"space"},null,-1)),t("div",qi,[v(g,{class:L(s.opt.speeds<120?"w":""),icon:["fas","gauge-high"]},null,8,["class"]),y(t("input",{"onUpdate:modelValue":e[3]||(e[3]=l=>s.opt.speeds=l),style:H(`background-size: ${s.opt.speeds/8}% 100%;`),type:"range",min:"20",max:"800",step:"20"},null,4),[[j,s.opt.speeds]]),t("span",{style:H(`color: var(--color-font${s.opt.speeds/8>50?"-r":""})`)},c(s.opt.speeds)+" px/s",5)])]),t("div",ki,[y(t("input",{id:"msgInput","onUpdate:modelValue":e[4]||(e[4]=l=>s.msg=l),class:"msgInput",onKeyup:e[5]||(e[5]=(...l)=>s.sendMsg&&s.sendMsg(...l)),onPaste:e[6]||(e[6]=(...l)=>s.addImg&&s.addImg(...l))},null,544),[[j,s.msg]])]),t("div",{class:L("danmu-bg"+(s.parseIndex!=-1?" hidden":""))},[e[11]||(e[11]=t("svg",{class:"bg",width:"930",height:"414",viewBox:"0 0 930 414",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("g",{"clip-path":"url(#clip0_810_16)"},[t("rect",{width:"1.40442",height:"49",rx:"0.70221",transform:"matrix(-0.745625 -0.666366 -0.666366 0.745625 455.05 67.6182)",fill:"var(--color-main)"}),t("path",{d:"M402.229 113.088L407.629 103L413.029 113.088L421 117.867L413.029 122.646L407.629 133L403.514 122.646L394 117.867L402.229 113.088Z",stroke:"var(--color-main)","stroke-linecap":"round"}),t("rect",{width:"1.40442",height:"49",rx:"0.70221",transform:"matrix(-0.745625 -0.666366 -0.666366 0.745625 516.05 146.936)",fill:"var(--color-main)"}),t("path",{d:"M463.229 192.406L468.629 182.318L474.029 192.406L482 197.185L474.029 201.964L468.629 212.318L464.514 201.964L455 197.185L463.229 192.406Z",stroke:"var(--color-main)","stroke-linecap":"round"}),t("rect",{width:"1.40442",height:"49",rx:"0.70221",transform:"matrix(-0.745625 -0.666366 -0.666366 0.745625 330.05 197.936)",fill:"var(--color-main)"}),t("path",{d:"M277.229 243.406L282.629 233.318L288.029 243.406L296 248.185L288.029 252.964L282.629 263.318L278.514 252.964L269 248.185L277.229 243.406Z",stroke:"var(--color-main)","stroke-linecap":"round"}),t("rect",{width:"1.40442",height:"49",rx:"0.70221",transform:"matrix(-0.745625 -0.666366 -0.666366 0.745625 468.05 290.936)",fill:"var(--color-main)"}),t("path",{d:"M415.229 336.406L420.629 326.318L426.029 336.406L434 341.185L426.029 345.964L420.629 356.318L416.514 345.964L407 341.185L415.229 336.406Z",stroke:"var(--color-main)","stroke-linecap":"round"}),t("rect",{width:"1.40442",height:"49",rx:"0.70221",transform:"matrix(-0.745625 -0.666366 -0.666366 0.745625 656.05 224.936)",fill:"var(--color-main)"}),t("path",{d:"M603.229 270.406L608.629 260.318L614.029 270.406L622 275.185L614.029 279.964L608.629 290.318L604.514 279.964L595 275.185L603.229 270.406Z",stroke:"var(--color-main)","stroke-linecap":"round"}),t("rect",{width:"1.40442",height:"49",rx:"0.70221",transform:"matrix(-0.745625 -0.666366 -0.666366 0.745625 803.05 70.9359)",fill:"var(--color-main)"}),t("path",{d:"M750.229 116.406L755.629 106.318L761.029 116.406L769 121.185L761.029 125.964L755.629 136.318L751.514 125.964L742 121.185L750.229 116.406Z",stroke:"var(--color-main)","stroke-linecap":"round"}),t("rect",{width:"1.40442",height:"49",rx:"0.70221",transform:"matrix(-0.745625 -0.666366 -0.666366 0.745625 864.05 276.936)",fill:"var(--color-main)"}),t("path",{d:"M811.229 322.406L816.629 312.318L822.029 322.406L830 327.185L822.029 331.964L816.629 342.318L812.514 331.964L803 327.185L811.229 322.406Z",stroke:"var(--color-main)","stroke-linecap":"round"}),t("rect",{width:"1.40442",height:"49",rx:"0.70221",transform:"matrix(-0.745625 -0.666366 -0.666366 0.745625 144.05 183.936)",fill:"var(--color-main)"}),t("path",{d:"M91.2286 229.406L96.6286 219.318L102.029 229.406L110 234.185L102.029 238.964L96.6286 249.318L92.5143 238.964L83 234.185L91.2286 229.406Z",stroke:"var(--color-main)","stroke-linecap":"round"}),t("rect",{width:"1.40442",height:"49",rx:"0.70221",transform:"matrix(-0.745625 -0.666366 -0.666366 0.745625 171.05 34.9359)",fill:"var(--color-main)"}),t("rect",{width:"1.40442",height:"49",rx:"0.70221",transform:"matrix(-0.745625 -0.666366 -0.666366 0.745625 256.699 175.936)",fill:"var(--color-main)"}),t("rect",{width:"1.40442",height:"49",rx:"0.70221",transform:"matrix(-0.745625 -0.666366 -0.666366 0.745625 701.699 132.936)",fill:"var(--color-main)"}),t("rect",{width:"1.40442",height:"92.07",rx:"0.70221",transform:"matrix(-0.745625 -0.666366 -0.666366 0.745625 302.699 16.9359)",fill:"var(--color-main)"}),t("rect",{width:"1.40442",height:"92.07",rx:"0.70221",transform:"matrix(-0.745625 -0.666366 -0.666366 0.745625 344.4 326.936)",fill:"var(--color-main)"}),t("rect",{width:"1.40442",height:"92.07",rx:"0.70221",transform:"matrix(-0.745625 -0.666366 -0.666366 0.745625 657.4 337.936)",fill:"var(--color-main)"}),t("rect",{width:"1.40442",height:"92.07",rx:"0.70221",transform:"matrix(-0.745625 -0.666366 -0.666366 0.745625 847.4 167.936)",fill:"var(--color-main)"}),t("path",{d:"M118.229 80.4062L123.629 70.3177L129.029 80.4062L137 85.185L129.029 89.9638L123.629 100.318L119.514 89.9638L110 85.185L118.229 80.4062Z",stroke:"var(--color-main)","stroke-linecap":"round"}),t("rect",{width:"1.40442",height:"49",rx:"0.70221",transform:"matrix(-0.745625 -0.666366 -0.666366 0.745625 205.05 372.936)",fill:"var(--color-main)"}),t("path",{d:"M152.229 418.406L157.629 408.318L163.029 418.406L171 423.185L163.029 427.964L157.629 438.318L153.514 427.964L144 423.185L152.229 418.406Z",stroke:"var(--color-main)","stroke-linecap":"round"}),t("rect",{width:"1.40442",height:"49",rx:"0.70221",transform:"matrix(-0.745625 -0.666366 -0.666366 0.745625 756.05 408.936)",fill:"var(--color-main)"}),t("rect",{width:"1.40442",height:"49",rx:"0.70221",transform:"matrix(-0.745625 -0.666366 -0.666366 0.745625 686.05 5.93591)",fill:"var(--color-main)"}),t("path",{d:"M633.229 51.4062L638.629 41.3177L644.029 51.4062L652 56.185L644.029 60.9638L638.629 71.3177L634.514 60.9638L625 56.185L633.229 51.4062Z",stroke:"var(--color-main)","stroke-linecap":"round"}),t("circle",{cx:"291.5",cy:"122.5",r:"13",stroke:"var(--color-main)","stroke-linecap":"round"}),t("circle",{cx:"846.5",cy:"407.5",r:"13",stroke:"var(--color-main)","stroke-linecap":"round"}),t("circle",{cx:"910.5",cy:"64.5",r:"13",stroke:"var(--color-main)","stroke-linecap":"round"})]),t("defs",null,[t("clipPath",{id:"clip0_810_16"},[t("rect",{width:"930",height:"414",rx:"7",fill:"white"})])])],-1)),t("span",$i,c(s.runtimeData.chatInfo.show.name),1),t("div",Ti,[t("span",Pi,c(s.list[s.list.length-1]?s.$t("上次消息 - {time}",{time:Intl.DateTimeFormat(s.trueLang,{hour:"numeric",minute:"numeric",second:"numeric"}).format(new Date(s.list[s.list.length-1].time*1e3))}):s.$t("暂无消息")),1)])],2)]),_:1},8,["danmus","speeds","loop"])])],2)}const Fi=B(wi,[["render",Vi],["__scopeId","data-v-f8731aa8"]]),Ge=Object.freeze(Object.defineProperty({__proto__:null,default:Fi},Symbol.toStringTag,{value:"Module"})),Mi=S({name:"ChatShell",props:["chat","list","mergeList","mumberInfo"],data(){return{tags:{fullscreen:!1,fistget:!0,cmdTags:{},newMsg:0,replyName:null,replyId:null},getMsgRawTxt:K,popInfo:new M,packageInfo:is,runMode:!1,timeLoad:rs({time:Intl.DateTimeFormat(Z(),{hour:"numeric",minute:"numeric",second:"numeric"}).format(new Date)}),runtimeData:i,trueLang:Z(),timeShow:"",timeSetter:void 0,msg:"",supportCmd:{},imgCache:[],sendCache:[],searchListCache:[]}},watch:{chat(){this.tags.fistget=!0,this.tags.cmdTags={}}},mounted(){this.supportCmd={help:{info:"Show All Command.",fun:()=>{let e="";Object.keys(this.supportCmd).forEach(n=>{n!=""&&(e+='<span style="color: var(--color-font-2);"><span style="width: 13ch;display: inline-block;">'+n+"</span>: "+this.supportCmd[n].info+"</span><br>")}),this.addCommandOut("","",e)}},ls:{info:"List all contacts in the current message queue.",fun:()=>{this.searchListCache=rs(i.onMsgList);let e="  total "+this.searchListCache.length+`
`,n=!1;i.onMsgList.forEach((o,a)=>{o.new_msg==!0?(e+="• ",n=!0):e+="  ",e+=a.toString()+"     ",e+=(o.group_id?o.group_id:o.user_id)+"     ",e+=(o.group_name?o.group_name:o.nickname)+"     ",e+=`
`}),n&&this.addCommandOut(":: You have message.","yellow"),this.addCommandOut(e)}},sql:{info:"Stapxs QQ Lite 2.0 Base Command.",fun:(e,n)=>{var o;switch(n[1]){case"send":{const a=e.substring(e.indexOf("send")+5),p=Xs.parseMsg(a,this.sendCache,this.imgCache);this.chat.show.temp?os(this.chat.show.id+"/"+this.chat.show.temp,this.chat.show.type,p):os(this.chat.show.id,this.chat.show.type,p),this.sendCache=[],this.imgCache=[],this.tags.replyName=null,this.tags.replyId=null;break}case"list":{const a=n[2];this.searchListCache=i.userList.filter(g=>{const u=(g.user_id?g.nickname+g.remark:g.group_name).toLowerCase(),l=g.user_id?g.user_id:g.group_id;return u.indexOf(a.toLowerCase())!==-1||l.toString()===a});let p="  total "+this.searchListCache.length+`
`;this.searchListCache.forEach((g,u)=>{p+=u.toString()+"     ",p+=(g.group_id?g.group_id:g.user_id)+"     ",p+=(g.group_name?g.group_name:g.nickname)+"     ",p+=`
`}),this.addCommandOut(p);break}case"reply":{if(this.sendCache=this.sendCache.filter(a=>a.type!=="reply"),n[2]&&n[2]!="clear"){const a=i.messageList.filter(p=>p.message_id==n[2]);this.tags.replyId=n[2],a[0]&&(this.tags.replyName=a[0].sender.card?a[0].sender.card:a[0].sender.nickname),this.addSpecialMsg({msgObj:{type:"reply",id:n[2]},addText:!1,addTop:!0})}else n[2]&&n[2]=="clear"&&(this.sendCache=this.sendCache.filter(a=>a.type!=="reply"),this.tags.replyName=null,this.tags.replyId=null);n[3]&&(this.supportCmd.sql.fun("sql send "+n[3],["sql","send",n[3]]),this.msg="");break}case"history":{i.messageList[0].commandOut&&(i.messageList.shift(),i.messageList.shift(),i.messageList.shift(),i.messageList.shift());const a=i.messageList[0].message_id??0,p=i.chatInfo.show.type,g=i.chatInfo.show.id;let u;const l=((o=i.jsonMap.message_list)==null?void 0:o.pagerType)=="full";i.jsonMap.message_list&&p!="group"?u=i.jsonMap.message_list.private_name:u=i.jsonMap.message_list.name,O.send(u??"get_chat_history",{group_id:p=="group"?g:void 0,user_id:p!="group"?g:void 0,message_id:a,count:l?i.messageList.length+20:20},"getChatHistory");break}default:this.addCommandOut(`usage: sql send [msg]: Send a message, you can directly use "/<Message>" to replace it, 
           list [search]: Fuzzy search in the list of friends/groups, 
           reply [msgId] <message>: Use the message id to reply to the message, Click the message to copy the id, 
           history: Load more history.`)}}},fullscreen:{info:"fullscreen chat view.",fun:()=>{const e=document.getElementById("chat-pan");e&&(this.tags.fullscreen?(this.tags.fullscreen=!1,e.classList.remove("full")):(this.tags.fullscreen=!0,e.classList.add("full")))}},neofetch:{info:"print system info.",fun:()=>{const e={Application:"Stapxs QQ Lite 2.0",Kernel:is.version+"-web",Shell:"stsh Basic Shell 1.0",Theme:"ChatSHell",Uptime:Math.floor((new Date().getTime()-xe)/1e3*100)/100+" s",Resolution:window.screen.width+"x"+window.screen.height};i.tags.isElectron&&(e.Kernel=is.version+"-electron");let n="";Object.keys(e).forEach(o=>{n+=`<span>${o}<span>: ${e[o]}</span></span>`}),this.addCommandOut("","",`<div class="shell-neofetch"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;***&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*******************&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;***************************&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*******************************&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;**************&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**************&nbsp;&nbsp;<br>&nbsp;&nbsp;*************&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*************&nbsp;<br>&nbsp;**************&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*************<br>&nbsp;*************,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*************<br>*************,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;************<br>&nbsp;************&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;***********<br>&nbsp;***********,**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*.***********<br>&nbsp;&nbsp;*************&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*************&nbsp;<br>&nbsp;&nbsp;&nbsp;***********************************&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*******************************&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;***************************&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*******************<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;***</span><div><span>${i.loginInfo.nickname}<span>@</span>sql-vue</span><a>-----------------</a>${n}<div><div style="background:black"></div><div style="background:red"></div><div style="background:green"></div><div style="background:yellow"></div><div style="background:blue"></div><div style="background:violet"></div></div></div></div>`)}},clear:{info:"clear message list.",fun:()=>{i.messageList=[],this.addCommandOut("")}},cd:{info:'Alias for "cd /[id]"',fun:(e,n)=>{var a;let o="0";if(n.length==1&&this.searchListCache.length==1)o=(this.searchListCache[0].user_id?this.searchListCache[0].user_id:this.searchListCache[0].group_id).toString();else{if(o=n[1],n[1]=="../"){const p=document.getElementById("chat-pan");p&&(this.tags.fullscreen=!1,p.classList.remove("full"),i.chatInfo.show.id=0);return}if(n[1].startsWith("#")){const p=Number(n[1].substring(1));if(this.searchListCache[p])o=(this.searchListCache[p].user_id?this.searchListCache[p].user_id:this.searchListCache[p].group_id).toString();else{this.addCommandOut(":: Search cache id does not exist","red");return}}}for(let p=0;p<i.userList.length;p++){const g=i.userList[p],u=g.user_id!==void 0?g.user_id:g.group_id;if(String(u)===o){document.getElementById("user-"+o)||(a=i.onMsgList)==null||a.push(g),$e(()=>{const l=document.getElementById("user-"+o);l!==null?l.click():this.addCommandOut(":: No valid contacts found","red")});return}}this.addCommandOut(":: No valid contacts found","red"),this.tags.replyName=null,this.tags.replyId=null}}},this.$watch(()=>this.list.length,this.updateList),this.$watch(()=>ts.length,this.showPop),this.timeSetter=setInterval(()=>{this.timeShow=Intl.DateTimeFormat(this.trueLang,{hour:"numeric",minute:"numeric",second:"numeric"}).format(new Date),this.tags.newMsg=i.onMsgList.filter(e=>e.new_msg==!0).length},1e3);const s=document.getElementById("chat-pan");s&&(this.tags.fullscreen=!0,s.classList.add("full"))},methods:{hasReply(s){if(s.message){const e=s.message.filter(n=>n.type=="reply");if(e[0]){const n=i.messageList.filter(o=>o.message_id==e[0].id);if(n[0])return"->"+(n[0].sender.card?n[0].sender.card:n[0].sender.nickname)}}return null},scrollTo(s,e=!0){const n=document.getElementById("shell-pan");n!==null&&s&&(e===!1?n.style.scrollBehavior="unset":n.style.scrollBehavior="smooth",n.scrollTop=s,n.style.scrollBehavior="smooth")},scrollBottom(s=!1){const e=document.getElementById("shell-pan");e!==null&&this.scrollTo(e.scrollHeight+40,s)},updateList(s,e){this.tags.fistget&&e==0&&(this.tags.fistget=!1,this.addCommandOutF(":: joining chat ..","yellow"),this.addCommandLineF("cd "+i.chatInfo.show.id,i.chatInfo.show.type),this.addCommandOutF(`* Stapxs QQ Lite 2.0 Shell requires "FiraCode Nerd Font" to display complete command line symbols, please ensure the device has installed this font.

* Use the command "fullscreen" or return to the parent directory to exit the full screen mode.

* 使用 "help" 命令查看所有可用命令。


`,"var(--color-font)"),this.addCommandOutF(`Welcome to Stapxs QQ Lite ${is.version} (Vue ${is.devDependencies.vue}-${this.runMode})

`,"var(--color-font)")),this.scrollBottom(!0)},showPop(s,e){if(s>e){const n=ts[ts.length-1];n.svg==P.ERR?this.addCommandOut("::"+n.text,"red"):this.addCommandOut("::"+n.text,"yellow")}},addCommandOut(s,e="var(--color-font-2)",n=void 0){i.messageList.push({commandOut:!0,color:e,str:s,html:n})},addCommandOutF(s,e="var(--color-font-2)",n=void 0){i.messageList.unshift({commandOut:!0,color:e,str:s,html:n})},addCommandLine(s,e=i.chatInfo.show.name,n={}){i.messageList.push({dir:e,commandLine:!0,str:s,time:rs({time:Intl.DateTimeFormat(Z(),{hour:"numeric",minute:"numeric",second:"numeric"}).format(new Date)}),data:n})},addCommandLineF(s,e=i.chatInfo.show.name){i.messageList.unshift({dir:e,commandLine:!0,str:s,time:rs({time:Intl.DateTimeFormat(Z(),{hour:"numeric",minute:"numeric",second:"numeric"}).format(new Date)}),data:{}})},sendMsg(s){if(s.keyCode===13){if(this.addCommandLine(this.msg,i.chatInfo.show.name,this.tags.cmdTags),this.msg=="")return;this.msg[0]=="/"&&(this.msg="sql send "+this.msg.substring(1,this.msg.length));const e=this.msg.split(" ");new G().add(N.DEBUG,"CMD: "+e.toString()),e.length>0&&this.supportCmd[e[0]]?(this.supportCmd[e[0]].fun(this.msg,e),this.msg=""):this.addCommandOut("stsh: command not found, use the help command to view all available commands.","red"),this.tags.cmdTags={},this.sendCache.filter(n=>n.type==="reply").length>0&&(this.tags.cmdTags.reply=!0)}setTimeout(()=>{this.scrollBottom()},500)},copy(s){const e=document.getElementById("msgInput");e&&(this.msg="sql reply "+s+" ",e.focus()),w.config.globalProperties.$copyText(String(s)).then(()=>{this.addCommandOut(":: Copy messageId successfully.","gray")},()=>{this.addCommandOut(":: Copy messageId failed.","gray")})},addSpecialMsg(s){if(s!==void 0){const e=this.sendCache.length;return this.sendCache.push(s.msgObj),s.addText===!0&&(s.addTop===!0?this.msg="[SQ:"+e+"]"+this.msg:this.msg+="[SQ:"+e+"]"),e}return-1},getRecallName(s){let e=s.toString();if(i.chatInfo.show.type==="group"){if(i.chatInfo.info.group_members!==void 0){const n=i.chatInfo.info.group_members.filter(o=>o.user_id===Number(s));n.length===1&&(e=n[0].card===""?n[0].nickname:n[0].card)}}else e=i.chatInfo.show.name;return e},addImg(s){if(s.clipboardData&&s.clipboardData.items)for(let e=0,n=s.clipboardData.items.length;e<n;e++){const o=s.clipboardData.items[e];o.kind==="file"&&(this.setImg(o.getAsFile()),s.preventDefault())}},setImg(s){const e=new M;if(s!==null&&s.type.indexOf("image/")>=0&&s.size!==0)if(s.size<3145728){const n=new FileReader;n.readAsDataURL(s),n.onloadend=()=>{const o=n.result;if(o!==null)if(k.get("close_chat_pic_pan")===!0){const a={addText:!0,msgObj:{type:"image",file:"base64://"+o.substring(o.indexOf("base64,")+7,o.length)}};this.addSpecialMsg(a)}else this.imgCache.push(o)}}else e.add(P.INFO,this.$t("图片过大"))}}}),Ri={id:"shell-pan",class:"shell-pan"},Bi=["onClick"],Si=["onClick"],Ni={key:1},Ui={key:0,style:{color:"yellow"}},ji={style:{color:"yellow",opacity:"0.7"}},Hi={key:2},Qi={key:0,class:"line-head"},zi={style:{color:"var(--color-main-0)"}},Wi={style:{color:"var(--color-main-1)"}},Gi={key:3},Ki=["innerHTML"],Ji={class:"shell-input"},Zi={class:"line-head"},Yi={style:{color:"var(--color-main-0)"}},Xi={key:0,style:{color:"var(--color-main-2)"}},xi={style:{color:"var(--color-main-1)"}};function so(s,e,n,o,a,p){const g=C("font-awesome-icon");return m(),d("div",{id:"chat-pan",class:L("chat-pan"+(s.runtimeData.tags.openSideBar?" open":"")+(s.runtimeData.sysConfig.opt_no_window?" withBar":""))},[t("div",Ri,[t("div",null,[(m(!0),d(I,null,$(s.runtimeData.messageList,(u,l)=>(m(),d(I,{key:u.message_id},[u.post_type=="message"||u.post_type=="message_sent"?(m(),d("div",{key:0,class:L("shell-msg"+(u.revoke?" revoke":"")+(s.tags.replyId==u.message_id?" reply":"")),style:{cursor:"pointer"}},[t("span",{class:L("sname s"+u.sender.role+(s.runtimeData.loginInfo.uin==u.sender.user_id?" smine":"")),onClick:_=>s.copy(u.sender.user_id)},c(u.sender.card?u.sender.card:u.sender.nickname)+c(s.hasReply(s.msg)??"")+c(u.sub_type=="friend"?s.runtimeData.loginInfo.uin==u.sender.user_id?s.runtimeData.loginInfo.nickname:s.runtimeData.chatInfo.show.name:"")+c(u.sender.user_id==0?"":": "),11,Bi),t("span",{class:"smsg",onClick:_=>s.copy(u.message_id)},c(s.getMsgRawTxt(s.msg)),9,Si),e[3]||(e[3]=t("br",null,null,-1))],2)):u.post_type=="notice"?(m(),d("div",Ni,[u.sub_type=="recall"?(m(),d("span",Ui,[e[4]||(e[4]=R(":: ")),t("span",ji,c(s.getRecallName(u.operator_id)),1),e[5]||(e[5]=R(" recalled a message."))])):b("",!0)])):u.commandLine?(m(),d("div",Hi,[l==2?(m(),d("div",Qi,[t("div",null,[t("span",null,[v(g,{icon:["fas","folder-open"]}),R(" "+c(s.runtimeData.chatInfo.show.name),1)]),t("span",zi,[v(g,{icon:["fas","plug"]}),R(" "+c(s.runtimeData.sysConfig.address),1)])]),e[6]||(e[6]=t("div",{style:{flex:"1"}},null,-1)),t("div",null,[t("span",Wi,[R(c(s.packageInfo.version),1),v(g,{icon:["fas","code-branch"]})]),t("span",null,[R(c(u.time.time),1),v(g,{icon:["fas","clock"]})])])])):b("",!0),e[7]||(e[7]=t("a",{class:"command-start"},"• ",-1)),t("span",null,c(u.str),1)])):u.commandOut?(m(),d("div",Gi,[u.html?(m(),d("div",{key:0,innerHTML:u.html},null,8,Ki)):(m(),d("span",{key:1,style:H("color:"+u.color)},c(u.str),5))])):b("",!0)],64))),128))]),t("div",Ji,[t("div",Zi,[t("div",null,[t("span",null,[v(g,{icon:["fas","folder-open"]}),R(" "+c(s.runtimeData.chatInfo.show.name)+" "+c(s.tags.replyName?" -> "+s.tags.replyName:""),1)]),t("span",Yi,[v(g,{icon:["fas","plug"]}),R(c(s.runtimeData.sysConfig.address),1)])]),e[8]||(e[8]=t("div",{style:{flex:"1"}},null,-1)),t("div",null,[s.tags.newMsg>0?(m(),d("span",Xi,[R(c(s.tags.newMsg),1),v(g,{icon:["fas","envelope"]})])):b("",!0),t("span",xi,[R(c(s.packageInfo.version),1),v(g,{icon:["fas","code-branch"]})]),t("span",null,[R(c(s.timeShow),1),v(g,{icon:["fas","clock"]})])])]),e[9]||(e[9]=t("a",{class:"command-start"},"• ",-1)),y(t("input",{id:"msgInput","onUpdate:modelValue":e[0]||(e[0]=u=>s.msg=u),onKeyup:e[1]||(e[1]=(...u)=>s.sendMsg&&s.sendMsg(...u)),onPaste:e[2]||(e[2]=(...u)=>s.addImg&&s.addImg(...u))},null,544),[[j,s.msg]])])])],2)}const eo=B(Mi,[["render",so]]),Ke=Object.freeze(Object.defineProperty({__proto__:null,default:eo},Symbol.toStringTag,{value:"Module"})),no=S({name:"ChatSystemNotice",emits:["userClick"],data(){return{trueLang:Z(),runtimeData:i,dev:!1}},methods:{exit(){this.$emit("userClick",{id:0})},dealFriend(s,e){O.send("set_friend_add_request",{flag:s.flag,approve:e},"setFriendAdd_"+s.flag)},dealGroupAdd(s,e){O.send("set_group_add_request",{flag:s.flag,approve:e,sub_type:s.sub_type},"setGroupAdd_"+s.flag)},getName(s){return i.userList.filter(e=>e.user_id==s)[0].nickname}}}),to={class:"sys-not-list"},io={key:0},oo=["src"],ro=["onClick"],ao=["onClick"],uo={key:1},go=["src"],po=["onClick"],co=["onClick"],lo={key:2},mo={style:{color:"var(--color-font-2)","word-wrap":"anywhere"}};function fo(s,e,n,o,a,p){const g=C("font-awesome-icon");return m(),d("div",{id:"chat-pan",class:L("chat-pan sys-not-pan"+(s.runtimeData.tags.openSideBar?" open":"")+(s.runtimeData.sysConfig.opt_no_window?" withBar":""))},[t("div",null,[v(g,{icon:["fas","angle-left"],onClick:s.exit},null,8,["onClick"]),t("span",null,c(s.$t("系统消息")),1)]),t("div",to,[(m(!0),d(I,null,$(s.runtimeData.systemNoticesList,(u,l)=>(m(),d(I,{key:"sysNot-"+l},[u.request_type=="friend"?(m(),d("div",io,[t("div",null,[t("img",{src:"https://q1.qlogo.cn/g?b=qq&s=0&nk="+u.user_id},null,8,oo),t("div",null,[t("span",null,c(u.user_id)+" "+c(s.$t("请求加为好友")),1),t("a",null,c(Intl.DateTimeFormat(s.trueLang,{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric"}).format(new Date(u.time*1e3))),1),t("a",null,c(s.$t("留言")+u.comment),1)])]),t("div",null,[t("button",{class:"ss-button",onClick:_=>s.dealFriend(u,!1)},c(s.$t("拒绝")),9,ro),t("button",{class:"ss-button",onClick:_=>s.dealFriend(u,!0)},c(s.$t("同意")),9,ao)])])):u.request_type=="group"?(m(),d("div",uo,[t("div",null,[t("img",{src:"https://p.qlogo.cn/gh/"+u.group_id+"/"+u.group_id+"/0"},null,8,go),t("div",null,[t("span",null,c(s.getName(u.user_id))+" "+c(s.$t("邀请你加入群聊"))+" "+c(u.group_id),1),t("a",null,c(Intl.DateTimeFormat(s.trueLang,{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric"}).format(new Date(u.time*1e3))),1),t("a",null,c(s.$t("留言")+u.comment),1)])]),t("div",null,[t("button",{class:"ss-button",onClick:_=>s.dealGroupAdd(u,!1)},c(s.$t("拒绝")),9,po),t("button",{class:"ss-button",onClick:_=>s.dealGroupAdd(u,!0)},c(s.$t("同意")),9,co)])])):y((m(),d("div",lo,[t("div",null,[e[0]||(e[0]=t("img",null,null,-1)),t("div",null,[t("span",null,c(s.$t("sys_notice_unknow")),1),t("a",mo,"request: "+c(u.request_type)+"; sub: "+c(u.sub_type),1)])])],512)),[[T,s.dev]])],64))),128))])],2)}const _o=B(no,[["render",fo]]),Je=Object.freeze(Object.defineProperty({__proto__:null,default:_o},Symbol.toStringTag,{value:"Module"})),vo=S({name:"ViewOptTheme",data(){return{get:vs,runtimeData:i,save:ys,languages:cs,colors:["林槐蓝","墨竹青","少女粉","微软紫","坏猫黄","玄素黑"],browser:Pe(),initialScaleShow:.1,fsAdaptationShow:0,chatview_name:""}},mounted(){const s=this.$watch(()=>i.sysConfig,()=>{this.initialScaleShow=Ms(i.sysConfig.initial_scale),this.fsAdaptationShow=Ms(i.sysConfig.fs_adaptation),s()});this.$watch(()=>i.sysConfig.chatview_name,()=>{this.chatview_name=i.sysConfig.chatview_name})},methods:{gaLanguage(s){const e=s.target;x("use_language",{name:e.value})},gaChatView(s){const e=s.target;x("use_chatview",{name:e.value})},gaColor(s){const e=s.target;x("use_theme_color",{name:this.colors[Number(e.dataset.id)]})},setInitialScaleShow(s){const e=s.target;this.initialScaleShow=Number(e.value)},setFsAdaptationShow(s){const e=s.target;this.fsAdaptationShow=Number(e.value)},restartapp(){i.reader&&i.reader.send("win:relaunch")},isMobile(){return Js()==="Android"||Js()==="iOS"},getAppendChatView(){const s=Object.assign({"/src/pages/chat-view/Chat弹幕.vue":Ge,"/src/pages/chat-view/Chat终端.vue":Ke,"/src/pages/chat-view/SystemNotice.vue":Je}),e=[];return Object.keys(s).forEach(n=>{var a;const o=(a=n.split("/").pop())==null?void 0:a.split(".")[0];o&&o.startsWith("Chat")&&e.push(o)}),e}}}),ho={class:"opt-page"},bo={class:"ss-card"},yo={class:"l10n-info"},Eo={class:"author"},wo={class:"opt-item"},Oo=["value"],Do={class:"ss-card"},Io={id:"opt_view_dark",class:"opt-item"},Lo={class:"ss-switch"},qo={class:"opt-item"},ko={class:"ss-switch"},Co={key:0,class:"opt-item"},Ao={class:"theme-color-col"},$o=["title"],To=["data-id","checked"],Po={key:1,class:"opt-item"},Vo={class:"ss-switch"},Fo={key:2,class:"opt-item"},Mo={class:"ss-switch"},Ro={class:"opt-item"},Bo={value:""},So=["value"],No={class:"opt-item"},Uo={class:"opt-item"},jo={class:"ss-range"},Ho={class:"ss-card"},Qo={key:0,class:"opt-item"},zo={class:"ss-range"},Wo={key:1,class:"opt-item"},Go={class:"ss-range"},Ko={key:2,class:"opt-item"},Jo={class:"ss-switch"},Zo={class:"opt-item"},Yo={class:"ss-switch"};function Xo(s,e,n,o,a,p){const g=C("font-awesome-icon");return m(),d("div",ho,[t("div",bo,[t("header",null,c(s.$t("本土化")),1),t("div",yo,[v(g,{icon:["fas","language"]}),t("div",null,[t("span",null,c(s.$t("简体中文")),1),t("span",Eo,c(s.$t("作者："))+c(s.$t("Stapx Steve")),1),t("span",null,c(s.$t("你好世界！这是 Stapxs QQ Lite 的默认简体中文。")),1)])]),t("div",wo,[v(g,{icon:["fas","earth-asia"]}),t("div",null,[t("span",null,c(s.$t("语言（Language）")),1),t("span",null,c(s.$t("喵喵喵喵？")),1)]),y(t("select",{"onUpdate:modelValue":e[0]||(e[0]=u=>s.runtimeData.sysConfig.language=u),name:"language",title:"language",onChange:e[1]||(e[1]=u=>{s.save(u),s.gaLanguage(u)})},[(m(!0),d(I,null,$(s.languages,u=>(m(),d("option",{key:u.value,value:u.value},c(u.name),9,Oo))),128))],544),[[fs,s.runtimeData.sysConfig.language]])])]),t("div",Do,[t("header",null,c(s.$t("主题与颜色")),1),s.runtimeData.sysConfig.opt_auto_gtk!=!0?(m(),d(I,{key:0},[t("div",Io,[v(g,{icon:["fas","moon"]}),t("div",null,[t("span",null,c(s.$t("深色模式")),1),t("span",null,c(s.$t("是五彩斑斓的黑色！")),1)]),t("label",Lo,[y(t("input",{"onUpdate:modelValue":e[2]||(e[2]=u=>s.runtimeData.sysConfig.opt_dark=u),type:"checkbox",name:"opt_dark",onChange:e[3]||(e[3]=(...u)=>s.save&&s.save(...u))},null,544),[[Q,s.runtimeData.sysConfig.opt_dark]]),e[27]||(e[27]=t("div",null,[t("div")],-1))])]),t("div",qo,[v(g,{icon:["fas","toggle-on"]}),t("div",null,[t("span",null,c(s.$t("自动深色模式")),1),t("span",null,c(s.$t("Biubiu ——，自动变黑！")),1)]),t("label",ko,[y(t("input",{"onUpdate:modelValue":e[4]||(e[4]=u=>s.runtimeData.sysConfig.opt_auto_dark=u),type:"checkbox",name:"opt_auto_dark",onChange:e[5]||(e[5]=(...u)=>s.save&&s.save(...u))},null,544),[[Q,s.runtimeData.sysConfig.opt_auto_dark]]),e[28]||(e[28]=t("div",null,[t("div")],-1))])]),s.runtimeData.sysConfig.opt_auto_win_color!=!0?(m(),d("div",Co,[v(g,{icon:["fas","palette"]}),t("div",null,[t("span",null,c(s.$t("主题色")),1),t("span",null,c(s.$t("换个心情 🎵 ~")),1)]),t("div",Ao,[(m(!0),d(I,null,$(s.colors,(u,l)=>(m(),d("label",{key:"color_id_"+l,title:u,class:"ss-radio"},[t("input",{type:"radio",name:"theme_color","data-id":l,checked:s.runtimeData.sysConfig.theme_color===void 0?l===0:Number(s.runtimeData.sysConfig.theme_color)===l,onChange:e[6]||(e[6]=_=>{s.save(_),s.gaColor(_)})},null,40,To),t("div",{style:H("background: var(--color-main-"+l+");")},e[29]||(e[29]=[t("div",null,null,-1)]),4)],8,$o))),128))])])):b("",!0)],64)):b("",!0),s.runtimeData.tags.isElectron&&s.browser.os=="Linux"?(m(),d("div",Po,[v(g,{icon:["fas","window-restore"]}),t("div",null,[t("span",null,c(s.$t("自动跟随 GTK 主题")),1),t("span",null,c(s.$t("（实验性）自动从 GTK 配置获取主题配色")),1)]),t("label",Vo,[y(t("input",{"onUpdate:modelValue":e[7]||(e[7]=u=>s.runtimeData.sysConfig.opt_auto_gtk=u),type:"checkbox",name:"opt_auto_gtk",onChange:e[8]||(e[8]=(...u)=>s.save&&s.save(...u))},null,544),[[Q,s.runtimeData.sysConfig.opt_auto_gtk]]),e[30]||(e[30]=t("div",null,[t("div")],-1))])])):b("",!0),s.runtimeData.tags.isElectron&&s.browser.os!="Linux"?(m(),d("div",Fo,[v(g,{icon:["fas","wand-magic-sparkles"]}),t("div",null,[t("span",null,c(s.$t("自动跟随主题色")),1),t("span",null,c(s.$t("自动获取的主题色设置并应用")),1)]),t("label",Mo,[y(t("input",{"onUpdate:modelValue":e[9]||(e[9]=u=>s.runtimeData.sysConfig.opt_auto_win_color=u),type:"checkbox",name:"opt_auto_win_color",onChange:e[10]||(e[10]=(...u)=>s.save&&s.save(...u))},null,544),[[Q,s.runtimeData.sysConfig.opt_auto_win_color]]),e[31]||(e[31]=t("div",null,[t("div")],-1))])])):b("",!0),t("div",Ro,[v(g,{icon:["fas","table-columns"]}),t("div",null,[t("span",null,c(s.$t("消息页面主题")),1),t("span",null,c(s.$t("一些好玩的主题！")),1)]),y(t("select",{"onUpdate:modelValue":e[11]||(e[11]=u=>s.chatview_name=u),name:"chatview_name",title:"chatview_name",onChange:e[12]||(e[12]=u=>{s.save(u),s.gaChatView(u)})},[t("option",Bo,c(s.$t("默认")),1),(m(!0),d(I,null,$(s.getAppendChatView(),u=>(m(),d("option",{key:u,value:u},c(u.replace("Chat","")),9,So))),128))],544),[[fs,s.chatview_name]])]),t("div",No,[v(g,{icon:["fas","image"]}),t("div",null,[t("span",null,c(s.$t("背景图片")),1),t("span",null,c(s.$t("嘿嘿嘿（痴呆")),1)]),y(t("input",{"onUpdate:modelValue":e[13]||(e[13]=u=>s.runtimeData.sysConfig.chat_background=u),class:"ss-input",style:{width:"150px"},type:"text",name:"chat_background",onKeyup:e[14]||(e[14]=(...u)=>s.save&&s.save(...u))},null,544),[[j,s.runtimeData.sysConfig.chat_background]])]),t("div",Uo,[v(g,{icon:["fas","o"]}),t("div",null,[t("span",null,c(s.$t("背景模糊")),1),t("span",null,c(s.$t("什么都看不见了（恼")),1)]),t("div",jo,[y(t("input",{"onUpdate:modelValue":e[15]||(e[15]=u=>s.runtimeData.sysConfig.chat_background_blur=u),style:H(`background-size:
                ${s.runtimeData.sysConfig.chat_background_blur}% 100%;`),type:"range",name:"chat_background_blur",onInput:e[16]||(e[16]=(...u)=>s.save&&s.save(...u))},null,36),[[j,s.runtimeData.sysConfig.chat_background_blur]]),t("span",{style:H(`color: var(--color-font${s.runtimeData.sysConfig.chat_background_blur>50?"-r":""})`)},c(s.runtimeData.sysConfig.chat_background_blur)+" px",5)])])]),t("div",Ho,[t("header",null,c(s.$t("页面")),1),s.isMobile()?(m(),d("div",Qo,[v(g,{icon:["fas","up-down-left-right"]}),t("div",null,[t("span",null,c(s.$t("缩放比例")),1),t("span",null,c(s.$t("调整页面在移动端的缩放比例")),1)]),t("div",zo,[y(t("input",{"onUpdate:modelValue":e[17]||(e[17]=u=>s.runtimeData.sysConfig.initial_scale=u),style:H(`background-size: ${s.initialScaleShow/.05}% 100%;`),type:"range",min:"0.1",max:"5",step:"0.05",name:"initial_scale",onChange:e[18]||(e[18]=(...u)=>s.save&&s.save(...u)),onInput:e[19]||(e[19]=(...u)=>s.setInitialScaleShow&&s.setInitialScaleShow(...u))},null,36),[[j,s.runtimeData.sysConfig.initial_scale]]),t("span",{style:H(`color: var(--color-font${s.initialScaleShow/.05>50?"-r":""})`)},c(s.initialScaleShow),5)])])):b("",!0),s.isMobile()?(m(),d("div",Wo,[v(g,{icon:["fas","border-top-left"]}),t("div",null,[t("span",null,c(s.$t("圆角适配")),1),t("span",null,c(s.$t("适配全面屏设备防止四角出界")),1)]),t("div",Go,[y(t("input",{"onUpdate:modelValue":e[20]||(e[20]=u=>s.runtimeData.sysConfig.fs_adaptation=u),style:H(`background-size: ${s.fsAdaptationShow/50*100}% 100%;`),type:"range",min:"0",max:"50",step:"10",name:"fs_adaptation",onChange:e[21]||(e[21]=(...u)=>s.save&&s.save(...u)),onInput:e[22]||(e[22]=(...u)=>s.setFsAdaptationShow&&s.setFsAdaptationShow(...u))},null,36),[[j,s.runtimeData.sysConfig.fs_adaptation]]),t("span",{style:H(`color: var(--color-font${s.fsAdaptationShow/50>.5?"-r":""})`)},c(s.fsAdaptationShow)+" px ",5)])])):b("",!0),s.runtimeData.tags.isElectron?(m(),d("div",Ko,[v(g,{icon:["fas","angle-up"]}),t("div",null,[t("span",null,c(s.$t("置顶窗口")),1),t("span",null,c(s.$t("你也不想想让 ta 知道你不在看消息吧 ~")),1)]),t("label",Jo,[y(t("input",{"onUpdate:modelValue":e[23]||(e[23]=u=>s.runtimeData.sysConfig.opt_always_top=u),type:"checkbox",name:"opt_always_top",onChange:e[24]||(e[24]=(...u)=>s.save&&s.save(...u))},null,544),[[Q,s.runtimeData.sysConfig.opt_always_top]]),e[32]||(e[32]=t("div",null,[t("div")],-1))])])):b("",!0),t("div",Zo,[v(g,{icon:["fas","arrows-rotate"]}),t("div",null,[t("span",null,c(s.$t("不要点这个")),1),t("span",null,c(s.$t("啊吧啊吧（智慧）")),1)]),t("label",Yo,[y(t("input",{"onUpdate:modelValue":e[25]||(e[25]=u=>s.runtimeData.sysConfig.opt_revolve=u),type:"checkbox",name:"opt_revolve",onChange:e[26]||(e[26]=(...u)=>s.save&&s.save(...u))},null,544),[[Q,s.runtimeData.sysConfig.opt_revolve]]),e[33]||(e[33]=t("div",null,[t("div")],-1))])])])])}const xo=B(vo,[["render",Xo]]),sr=S({name:"ViewOptDev",data(){var s;return{jsonMapName:((s=i.jsonMap)==null?void 0:s.name)??"",BotMsgType:X,runtimeData:i,save:ys,run:bs,ws_text:"",appmsg_text:""}},mounted(){this.$watch(()=>{var s;return(s=i.jsonMap)==null?void 0:s.name},()=>{var s;this.jsonMapName=((s=i.jsonMap)==null?void 0:s.name)??""})},methods:{sendTestWs(s){if(s.keyCode===13&&this.ws_text!==""){const e=JSON.parse(this.ws_text);this.ws_text="",e.echo="websocketTest",O.sendRaw(JSON.stringify(e))}},sendTestAppmsg(s){s.keyCode===13&&this.appmsg_text!==""&&(new M().add(P.INFO,this.appmsg_text,!1),this.appmsg_text="")},sendAbab(){new M().add(P.INFO,w.config.globalProperties.$t("你不是人（逃"))},printRuntime(){console.log("========================="),console.log(i),console.log("========================="),i.reader&&i.reader.send("win:openDevTools")},async printVersionInfo(){var p,g,u;new M().add(P.INFO,w.config.globalProperties.$t("正在收集调试消息……"));let s;i.reader&&(s=await i.reader.invoke("opt:getSystemInfo"));const e=Pe();let n="```\n";if(n+="Debug Info - "+new Date().toLocaleString()+`
================================
`,n+=`System Info:
`,n+=`    OS Name          -> ${e.os}
`,n+=`    Browser Name     -> ${e.name}
`,n+=`    Browser Version  -> ${e.version}
`,s){const l=s;Object.keys(l).forEach(_=>{n+=`    ${l[_][0]} -> ${l[_][1]}
`})}if(i.tags.isElectron&&i.reader&&i.tags.release){const l=(p=window.electron)==null?void 0:p.process;switch(l&&l.platform){case"linux":{if(i.tags.release.toLowerCase().indexOf("arch")>0){let _=await i.reader.invoke("sys:runCommand","pacman -Q stapxs-qq-lite-bin");_.success?n+=`    Install Type     -> aur
`:(_=await i.reader.invoke("sys:runCommand","pacman -Q stapxs-qq-lite"),_.success&&(n+=`    Install Type     -> pacman
`))}break}}}n+=`Application Info:
`,n+=`    Uptime           -> ${Math.floor((new Date().getTime()-xe)/1e3*100)/100} s
`,n+=`    Package Version  -> ${is.version}
`,n+=`    Service Work     -> ${i.tags.sw}
`,n+=`Backend Info:
`,n+=`    Bot Info Name    -> ${i.botInfo.app_name}
`,n+=`    Bot Info Version -> ${i.botInfo.app_version!==void 0?i.botInfo.app_version:i.botInfo.version}
`,n+=`    Loaded Config    -> ${(g=i.jsonMap)==null?void 0:g.name}
`,n+=`View Info:
`,n+=`    Doc Width        -> ${(u=document.getElementById("app"))==null?void 0:u.offsetWidth} px
`,n+=`Network Info:
`;const o=[["Github          ","https://api.github.com"],["Link API        ","https://api.stapxs.cn"]];for(const l of o){const _=new Date().getTime();try{await fetch(l[1],{method:"GET"});const E=new Date().getTime();n+=`    ${l[0]} -> ${E-_} ms
`}catch{n+=`    ${l[0]} -> failed
`}}n+="```";const a={svg:"screwdriver-wrench",html:'<textarea class="debug-info">'+n+"</textarea>",title:this.$t("调试信息"),button:[{text:w.config.globalProperties.$t("复制"),fun:()=>{w.config.globalProperties.$copyText(n),new M().add(P.INFO,w.config.globalProperties.$t("复制成功"))}},{text:w.config.globalProperties.$t("确定"),master:!0,fun:()=>{i.popBoxList.shift()}}]};i.popBoxList.push(a)},printSetUpInfo(){const s=JSON.stringify(i.sysConfig),e={svg:"download",html:'<textarea style="width: calc(100% - 40px);min-height: 90px;background: var(--color-card-1);color: var(--color-font);border: 0;padding: 20px;border-radius: 7px;margin-top: -10px;">'+s+"</textarea>",title:this.$t("导出设置项"),button:[{text:w.config.globalProperties.$t("复制"),fun:()=>{w.config.globalProperties.$copyText(s),new M().add(P.INFO,w.config.globalProperties.$t("复制成功"))}},{text:w.config.globalProperties.$t("确定"),master:!0,fun:()=>{i.popBoxList.shift()}}]};i.popBoxList.push(e)},importSetUpInfo(){const s={svg:"upload",html:'<textarea id="importSetUpInfoTextArea" style="width: calc(100% - 40px);min-height: 90px;background: var(--color-card-1);color: var(--color-font);border: 0;padding: 20px;border-radius: 7px;margin-top: -10px;"></textarea>',title:this.$t("导入设置项"),button:[{text:w.config.globalProperties.$t("取消"),fun:()=>{i.popBoxList.shift()}},{text:w.config.globalProperties.$t("确定"),master:!0,fun:()=>{const e=document.getElementById("importSetUpInfoTextArea");if(e)try{const n=JSON.parse(e.value);i.sysConfig=n,de(n),location.reload()}catch{new M().add(P.ERR,w.config.globalProperties.$t("导入设置项失败"))}}}]};i.popBoxList.push(s)},resetApp(){const s={svg:"trash-arrow-up",html:"<span>"+this.$t("确认要重置应用吗，重置应用将会失去所有设置内容（包括设置的置顶群组），但是可能可以解决一些因为浏览器缓存导致的奇怪问题。")+"</span>",title:this.$t("重置应用"),button:[{text:w.config.globalProperties.$t("确定"),fun:()=>{localStorage.clear(),document.cookie.split(";").forEach(e=>{document.cookie=e.replace(/^ +/,"").replace(/=.*/,"=;expires="+new Date().toUTCString()+";path=/")}),i.reader&&i.reader.sendSync("opt:clearAll"),location.reload()}},{text:w.config.globalProperties.$t("取消"),master:!0,fun:()=>{i.popBoxList.shift()}}]};i.popBoxList.push(s)},restartapp(){i.reader&&i.reader.send("win:relaunch")},getBotTypeName(s){switch(s){case X.CQCode:return this.$t("CQ 码");case X.Array:return this.$t("Array 数组");case X.Auto:return this.$t("自动检测")}},getPathMapList(){const s=Object.assign({"/src/assets/pathMap/LLOneBot.yaml":()=>r(()=>Promise.resolve().then(()=>ie),void 0),"/src/assets/pathMap/Lagrange.OneBot.yaml":()=>r(()=>Promise.resolve().then(()=>oe),void 0),"/src/assets/pathMap/NapCat.Onebot.yaml":()=>r(()=>Promise.resolve().then(()=>re),void 0)}),e=[];return Object.keys(s).forEach(n=>{var a;const o=(a=n.split("/").pop())==null?void 0:a.replace(".yaml","");o&&e.push(o)}),e},changeJsonMap(){const s=je(this.jsonMapName);s&&(i.jsonMap=s)}}}),er={class:"opt-page"},nr={class:"ss-card"},tr={class:"tip"},ir={class:"opt-item"},or={class:"ss-switch"},rr={class:"opt-item"},ar=["value"],ur={class:"opt-item"},gr={key:0,value:""},pr=["value"],cr={class:"ss-card"},lr={class:"opt-item"},mr={value:"err"},dr={value:"debug"},fr={value:"info"},_r={value:"all"},vr={class:"opt-item"},hr={class:"ss-switch"},br={class:"ss-card"},yr={class:"opt-item"},Er={class:"opt-item"},wr={class:"opt-item"},Or={class:"opt-item"},Dr={key:0,class:"opt-item"},Ir={class:"ss-card"},Lr={class:"opt-item"},qr={class:"opt-item"},kr={class:"opt-item"};function Cr(s,e,n,o,a,p){const g=C("font-awesome-icon");return m(),d("div",er,[t("div",nr,[t("header",null,c(s.$t("兼容选项")),1),t("div",tr,c(s.$t("这儿是兼容性相关的高级选项，包括 bot 附加功能、热插拔组件等。")),1),t("div",ir,[v(g,{icon:["fas","heart"]}),t("div",null,[t("span",null,c(s.$t("发送心跳包")),1),t("span",null,c(s.$t("没救了，拖出去吧")),1)]),t("label",or,[y(t("input",{"onUpdate:modelValue":e[0]||(e[0]=u=>s.runtimeData.sysConfig.connect_beat=u),type:"checkbox",name:"connect_beat",onChange:e[1]||(e[1]=(...u)=>s.save&&s.save(...u))},null,544),[[Q,s.runtimeData.sysConfig.connect_beat]]),e[21]||(e[21]=t("div",null,[t("div")],-1))])]),t("div",rr,[v(g,{icon:["fas","clipboard-list"]}),t("div",null,[t("span",null,c(s.$t("消息类型")),1),t("span",null,c(s.$t("[CQ:faceid=1]你好啊👋，这个选项将会强制覆盖自动检测")),1)]),y(t("select",{"onUpdate:modelValue":e[2]||(e[2]=u=>s.runtimeData.sysConfig.msgType=u),name:"msg_type",title:"msg_type",onChange:e[3]||(e[3]=(...u)=>s.save&&s.save(...u))},[(m(!0),d(I,null,$(s.BotMsgType,u=>y((m(),d("option",{key:u,value:u},c(s.getBotTypeName(u)),9,ar)),[[T,typeof u=="number"]])),128))],544),[[fs,s.runtimeData.sysConfig.msgType]])]),t("div",ur,[v(g,{icon:["fas","gear"]}),t("div",null,[t("span",null,c(s.$t("解析配置")),1),t("span",null,c(s.$t("不同框架之间的化学反应我们将其称之为达利园效应")),1)]),y(t("select",{"onUpdate:modelValue":e[4]||(e[4]=u=>s.jsonMapName=u),onChange:e[5]||(e[5]=(...u)=>s.changeJsonMap&&s.changeJsonMap(...u))},[s.jsonMapName==""?(m(),d("option",gr,c(s.$t("未连接")),1)):b("",!0),(m(!0),d(I,null,$(s.getPathMapList(),u=>(m(),d("option",{key:u,value:u},c(u.replace("Chat","")),9,pr))),128))],544),[[fs,s.jsonMapName]])])]),t("div",cr,[t("header",null,c(s.$t("开发者选项")),1),t("div",lr,[v(g,{icon:["fas","book"]}),t("div",null,[t("span",null,c(s.$t("日志等级")),1),t("span",null,c(s.$t("ReferenceError: moYu is not defined")),1)]),y(t("select",{"onUpdate:modelValue":e[6]||(e[6]=u=>s.runtimeData.sysConfig.log_level=u),name:"log_level",title:"log_level",onChange:e[7]||(e[7]=(...u)=>s.save&&s.save(...u))},[t("option",mr,c(s.$t("错误")),1),t("option",dr,c(s.$t("调试")),1),t("option",fr,c(s.$t("基本")),1),t("option",_r,c(s.$t("全部")),1)],544),[[fs,s.runtimeData.sysConfig.log_level]])]),t("div",vr,[v(g,{icon:["fas","robot"]}),t("div",null,[t("span",null,c(s.$t("禁用消息渲染")),1),t("span",null,[t("a",{style:{cursor:"pointer"},onClick:e[8]||(e[8]=(...u)=>s.sendAbab&&s.sendAbab(...u))},c(s.$t("点击进行 CAPTCHA 验证")),1)])]),t("label",hr,[y(t("input",{"onUpdate:modelValue":e[9]||(e[9]=u=>s.runtimeData.sysConfig.debug_msg=u),type:"checkbox",name:"debug_msg",onChange:e[10]||(e[10]=(...u)=>s.save&&s.save(...u))},null,544),[[Q,s.runtimeData.sysConfig.debug_msg]]),e[22]||(e[22]=t("div",null,[t("div")],-1))])])]),t("div",br,[t("header",null,c(s.$t("调试")),1),t("div",yr,[v(g,{icon:["fas","paper-plane"]}),t("div",null,[t("span",null,c(s.$t("发送原始消息")),1),t("span",null,c(s.$t("咻 ——")),1)]),y(t("input",{"onUpdate:modelValue":e[11]||(e[11]=u=>s.ws_text=u),class:"ss-input",style:{width:"150px"},type:"text",onKeyup:e[12]||(e[12]=(...u)=>s.sendTestWs&&s.sendTestWs(...u))},null,544),[[j,s.ws_text]])]),t("div",Er,[v(g,{icon:["fas","envelope"]}),t("div",null,[t("span",null,c(s.$t("应用消息测试")),1),t("span",null,c(s.$t("#$&*#$= ……")),1)]),y(t("input",{"onUpdate:modelValue":e[13]||(e[13]=u=>s.appmsg_text=u),class:"ss-input",style:{width:"150px"},type:"text",onKeyup:e[14]||(e[14]=(...u)=>s.sendTestAppmsg&&s.sendTestAppmsg(...u))},null,544),[[j,s.appmsg_text]])]),t("div",wr,[v(g,{icon:["fas","file-invoice"]}),t("div",null,[t("span",null,c(s.$t("输出运行时")),1),t("span",null,c(s.$t("全都吐出来！")),1)]),t("button",{style:{width:"100px","font-size":"0.8rem"},class:"ss-button",onClick:e[15]||(e[15]=(...u)=>s.printRuntime&&s.printRuntime(...u))},c(s.$t("执行")),1)]),t("div",Or,[v(g,{icon:["fas","screwdriver-wrench"]}),t("div",null,[t("span",null,c(s.$t("输出调试信息")),1),t("span",null,c(s.$t("到底用的什么版本呢 ……")),1)]),t("button",{style:{width:"100px","font-size":"0.8rem"},class:"ss-button",onClick:e[16]||(e[16]=(...u)=>s.printVersionInfo&&s.printVersionInfo(...u))},c(s.$t("执行")),1)]),s.runtimeData.tags.isElectron?(m(),d("div",Dr,[v(g,{icon:["fas","power-off"]}),t("div",null,[t("span",null,c(s.$t("重启应用")),1),t("span",null,c(s.$t("99% 的特性都能通过重启解决！")),1)]),t("button",{style:{width:"100px","font-size":"0.8rem"},class:"ss-button",onClick:e[17]||(e[17]=(...u)=>s.restartapp&&s.restartapp(...u))},c(s.$t("执行")),1)])):b("",!0)]),t("div",Ir,[t("header",null,c(s.$t("维护与备份")),1),t("div",Lr,[v(g,{icon:["fas","download"]}),t("div",null,[t("span",null,c(s.$t("导出设置项")),1),t("span",null,c(s.$t("tar zcvf config.tar.gz /localStorage")),1)]),t("button",{style:{width:"100px","font-size":"0.8rem"},class:"ss-button",onClick:e[18]||(e[18]=(...u)=>s.printSetUpInfo&&s.printSetUpInfo(...u))},c(s.$t("执行")),1)]),t("div",qr,[v(g,{icon:["fas","upload"]}),t("div",null,[t("span",null,c(s.$t("导入设置项")),1),t("span",null,c(s.$t("tar zxvf cache.tar.gz /localStorage")),1)]),t("button",{style:{width:"100px","font-size":"0.8rem"},class:"ss-button",onClick:e[19]||(e[19]=(...u)=>s.importSetUpInfo&&s.importSetUpInfo(...u))},c(s.$t("执行")),1)]),t("div",kr,[v(g,{icon:["fas","trash-arrow-up"]}),t("div",null,[t("span",null,c(s.$t("重置应用")),1),t("span",null,c(s.$t("sudo rm -rf /localStorage")),1)]),t("button",{style:{width:"100px","font-size":"0.8rem"},class:"ss-button",onClick:e[20]||(e[20]=(...u)=>s.resetApp&&s.resetApp(...u))},c(s.$t("执行")),1)])])])}const Ar=B(sr,[["render",Cr]]),$r=S({name:"ViewOptFunction",data(){return{runtimeData:i,save:ys,ndt:0,ndv:!1}},methods:{msgND:function(){this.ndt++,setTimeout(()=>{this.ndv=!1},300)},breakLineTip(s){if(s.target.checked){const n={title:this.$t("提醒"),html:`<span>${this.$t("开启 shift enter 换行可能会在一些拥有特殊选词模式的输入法上出现问题，如 微软注音2003、新注音2003 和 绝大部分很早期的拼音输入法；如果在使用的时候遇到问题可以尝试关闭此功能。（或者换个更现代的输入法）")}</span>`,button:[{text:this.$t("知道了"),master:!0,fun:()=>{i.popBoxList.shift()}}]};i.popBoxList.push(n)}},showStatus(){}}}),Tr={class:"opt-page"},Pr={class:"ss-card"},Vr={class:"opt-item"},Fr={class:"ss-switch"},Mr={key:0,class:"opt-item"},Rr={class:"ss-switch"},Br={class:"ss-card"},Sr={class:"opt-item"},Nr={key:0,class:"ss-switch"},Ur={class:"opt-item"},jr={class:"ss-switch"},Hr={class:"opt-item"},Qr={class:"ss-switch"},zr={class:"opt-item"},Wr={class:"opt-item"},Gr={class:"ss-switch"},Kr={class:"ss-card"},Jr={class:"ss-switch"},Zr={key:0,class:"tip"},Yr={class:"ga-share"},Xr={key:1,class:"opt-item"},xr={class:"ss-switch"};function sa(s,e,n,o,a,p){const g=C("font-awesome-icon");return m(),d("div",Tr,[t("div",Pr,[t("header",null,c(s.$t("通知选项")),1),t("div",Vr,[v(g,{icon:["fas","volume-xmark"]}),t("div",null,[t("span",null,c(s.$t("禁用通知")),1),t("span",null,c(s.$t("好嘛 …… 不烦你 ……")),1)]),t("label",Fr,[y(t("input",{"onUpdate:modelValue":e[0]||(e[0]=u=>s.runtimeData.sysConfig.close_notice=u),type:"checkbox",name:"close_notice",onChange:e[1]||(e[1]=(...u)=>s.save&&s.save(...u))},null,544),[[Q,s.runtimeData.sysConfig.close_notice]]),e[19]||(e[19]=t("div",null,[t("div")],-1))])]),s.runtimeData.sysConfig.close_notice?b("",!0):(m(),d("div",Mr,[v(g,{icon:["fas","bolt"]}),t("div",null,[t("span",null,c(s.$t("通知所有新消息")),1),t("span",null,c(s.$t("让暴风雨来得更猛烈些吧！")),1)]),t("label",Rr,[y(t("input",{"onUpdate:modelValue":e[2]||(e[2]=u=>s.runtimeData.sysConfig.notice_all=u),type:"checkbox",name:"notice_all",onChange:e[3]||(e[3]=(...u)=>s.save&&s.save(...u))},null,544),[[Q,s.runtimeData.sysConfig.notice_all]]),e[20]||(e[20]=t("div",null,[t("div")],-1))])]))]),t("div",Br,[t("header",null,c(s.$t("聊天选项")),1),t("div",Sr,[v(g,{icon:["fas","box-archive"]}),t("div",null,[t("span",null,c(s.$t("消息防撤回")),1),t("span",null,c(s.ndt===0?s.$t("说出去的话就像泼出去的水 ……"):s.$t("说了不做这功能就是不做")),1)]),s.ndt<3?(m(),d("label",Nr,[y(t("input",{"onUpdate:modelValue":e[4]||(e[4]=u=>s.ndv=u),type:"checkbox",onChange:e[5]||(e[5]=(...u)=>s.msgND&&s.msgND(...u))},null,544),[[Q,s.ndv]]),e[21]||(e[21]=t("div",null,[t("div")],-1))])):b("",!0)]),t("div",Ur,[v(g,{icon:["fas","window-maximize"]}),t("div",null,[t("span",null,c(s.$t("禁用图片发送框")),1),t("span",null,c(s.$t("你也向往自由吗？")),1)]),t("label",jr,[y(t("input",{"onUpdate:modelValue":e[6]||(e[6]=u=>s.runtimeData.sysConfig.close_chat_pic_pan=u),type:"checkbox",name:"close_chat_pic_pan",onChange:e[7]||(e[7]=(...u)=>s.save&&s.save(...u))},null,544),[[Q,s.runtimeData.sysConfig.close_chat_pic_pan]]),e[22]||(e[22]=t("div",null,[t("div")],-1))])]),t("div",Hr,[v(g,{icon:["fas","face-laugh-squint"]}),t("div",null,[t("span",null,c(s.$t("关闭回应功能")),1),t("span",null,c(s.$t("如果你不想用它或者 bot 不支持，可以关闭这个功能")),1)]),t("label",Qr,[y(t("input",{"onUpdate:modelValue":e[8]||(e[8]=u=>s.runtimeData.sysConfig.close_respond=u),type:"checkbox",name:"close_respond",onChange:e[9]||(e[9]=(...u)=>s.save&&s.save(...u))},null,544),[[Q,s.runtimeData.sysConfig.close_respond]]),e[23]||(e[23]=t("div",null,[t("div")],-1))])]),t("div",zr,[v(g,{icon:["fas","fish-fins"]}),t("div",null,[t("span",null,c(s.$t("小尾巴")),1),t("span",null,c(s.$t("只会追加在最后一段话后面")),1)]),y(t("input",{"onUpdate:modelValue":e[10]||(e[10]=u=>s.runtimeData.sysConfig.msg_taill=u),class:"ss-input",style:{width:"150px"},type:"text",name:"msg_taill",onKeyup:e[11]||(e[11]=(...u)=>s.save&&s.save(...u))},null,544),[[j,s.runtimeData.sysConfig.msg_taill]])]),t("div",Wr,[v(g,{icon:["fas","keyboard"]}),t("div",null,[t("span",null,c(s.$t("使用 shift enter 换行")),1),t("span",null,c(s.$t("I have a shift I have an enter ...")),1)]),t("label",Gr,[y(t("input",{"onUpdate:modelValue":e[12]||(e[12]=u=>s.runtimeData.sysConfig.use_breakline=u),type:"checkbox",name:"use_breakline",onChange:e[13]||(e[13]=u=>{s.breakLineTip(u),s.save(u)})},null,544),[[Q,s.runtimeData.sysConfig.use_breakline]]),e[24]||(e[24]=t("div",null,[t("div")],-1))])])]),t("div",Kr,[t("header",null,c(s.$t("分析信息")),1),t("div",{class:"opt-item",style:H(s.runtimeData.sysConfig.close_ga!==!0?"background: var(--color-card-1);":"")},[v(g,{icon:["fas","cloud"]}),t("div",null,[t("span",null,c(s.$t("关闭分析")),1),t("span",null,c(s.$t("真的不让看吗（小声")),1)]),t("label",Jr,[y(t("input",{"onUpdate:modelValue":e[14]||(e[14]=u=>s.runtimeData.sysConfig.close_ga=u),type:"checkbox",name:"close_ga",onChange:e[15]||(e[15]=(...u)=>s.save&&s.save(...u))},null,544),[[Q,s.runtimeData.sysConfig.close_ga]]),e[25]||(e[25]=t("div",{style:{background:"var(--color-card-2)"}},[t("div")],-1))])],4),s.runtimeData.sysConfig.close_ga!==!0?(m(),d("div",Zr,[R(c(s.$t("我们使用 Umami 对应用的使用情况进行分析，它将不会上传精确到用户的信息；你也可以在这儿控制分析功能的开关和额外分析项。同时我们的统计信息公开展示在此处以便查阅："))+" ",1),t("div",Yr,[e[26]||(e[26]=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 428 389.11"},[t("circle",{cx:"214.15",cy:"181",r:"171",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"20"}),t("path",{d:"M413 134.11H15.29a15 15 0 0 0-15 15v15.3C.12 168 0 171.52 0 175.11c0 118.19 95.81 214 214 214 116.4 0 211.1-92.94 213.93-208.67 0-.44.07-.88.07-1.33v-30a15 15 0 0 0-15-15Z"})],-1)),t("a",{target:"_blank",onClick:e[16]||(e[16]=(...u)=>s.showStatus&&s.showStatus(...u))},c(s.$t("Stapxs QQ Lite"))+" "+c(s.$t("访问统计信息")),1)])])):b("",!0),s.runtimeData.sysConfig.close_ga!==!0?(m(),d("div",Xr,[v(g,{icon:["fas","dice"]}),t("div",null,[t("span",null,c(s.$t("后端类型分析")),1),t("span",null,c(s.$t("在连接后上传所使用的 bot 的类型分析")),1)]),t("label",xr,[y(t("input",{"onUpdate:modelValue":e[17]||(e[17]=u=>s.runtimeData.sysConfig.open_ga_bot=u),type:"checkbox",name:"open_ga_bot",onChange:e[18]||(e[18]=(...u)=>s.save&&s.save(...u))},null,544),[[Q,s.runtimeData.sysConfig.open_ga_bot]]),e[27]||(e[27]=t("div",null,[t("div")],-1))])])):b("",!0)])])}const ea=B($r,[["render",sa]]),na=S({name:"ViewOption",components:{BcTab:ne,OptAccount:Ei,OptView:xo,OptDev:Ar,OptFunction:ea,AboutPan:Fe},props:{show:Boolean,config:{type:Object,default:()=>({})}},data(){return{packageInfo:is,openLink:ss,showAbout:!0}},mounted(){window.addEventListener("resize",()=>{this.$nextTick(()=>{window.innerWidth<700?this.showAbout=!0:this.showAbout=!1})}),this.$watch("show",s=>{s&&this.$nextTick(()=>{window.innerWidth<700?this.showAbout=!0:this.showAbout=!1})})}}),ta={class:"opt-main"},ia=["name"],oa=["name"],ra=["name"],aa=["name"],ua=["name"],ga={class:"ss-card end-card"},pa={style:{width:"50px"},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 274 259"};function ca(s,e,n,o,a,p){const g=C("AboutPan"),u=C("OptAccount"),l=C("OptView"),_=C("OptFunction"),E=C("OptDev"),h=C("BcTab");return m(),d("div",ta,[v(g,{"show-u-i":""}),t("div",null,[y(v(h,{title:s.$t("设置"),class:"opt-tab"},{default:z(()=>[t("div",{name:s.$t("账号")},[v(u,{config:s.config},null,8,["config"])],8,ia),t("div",{name:s.$t("界面")},[v(l)],8,oa),t("div",{name:s.$t("功能")},[v(_,{config:s.config},null,8,["config"])],8,ra),t("div",{name:s.$t("高级")},[v(E)],8,aa),s.showAbout?(m(),d("div",{key:0,name:s.$t("关于")},[v(g,{class:"opt-about","show-u-i":""})],8,ua)):b("",!0)]),_:1},8,["title"]),[[T,s.show]]),t("div",ga,[t("div",null,[t("div",null,[e[0]||(e[0]=t("span",null,"Stapxs QQ Lite",-1)),t("a",null,c(s.packageInfo.version),1)]),e[1]||(e[1]=t("span",null,"Copyright © 2022 - 2024 Stapx Steve [ 林槐 ]",-1))]),(m(),d("svg",pa,e[2]||(e[2]=[hs('<g id="圖層_2" data-name="圖層 2"><g id="本体"><rect class="cls-1" x="19" y="167" width="28" height="28"></rect><rect class="cls-1" x="62" y="181" width="14" height="14"></rect><rect class="cls-1" x="89" y="163" width="14" height="14"></rect><rect class="cls-1" x="62" y="63" width="14" height="14"></rect><rect class="cls-1" x="82" y="85" width="14" height="14"></rect><rect class="cls-1" x="114" y="66" width="28" height="28"></rect><polygon class="cls-1" points="112.54 153.5 33.5 153.5 33.5 106.5 155 106.5 155.5 106.5 159.37 106.5 159.46 207.5 159.5 254.36 159.5 254.46 144.5 254.47 144.5 254.37 144.5 238.5 116.5 238.5 116.5 254.4 116.5 254.5 112.63 254.5 112.63 254.4 3.54 254.5 3.5 207.64 112.59 207.54 112.54 153.5"></polygon><polygon class="cls-1" points="183.51 114.5 198.5 114.5 198.5 130.5 198.5 131.49 269.5 131.42 269.48 103.5 219.5 103.55 219.5 85.47 269.5 85.42 269.5 84.5 269.5 36.42 269.5 20.5 269.48 20.5 251.5 20.5 251.5 5.52 251.5 5.5 232.5 5.5 232.5 5.53 183.5 5.58 183.53 36.5 232.5 36.45 232.5 54.53 219.5 54.55 219.5 54.5 182.5 54.5 182.5 114.5 183.51 114.5"></polygon><rect class="cls-1" x="242" y="153" width="28" height="28"></rect><rect class="cls-1" x="183" y="240" width="14" height="14"></rect><rect class="cls-1" x="204" y="166" width="26" height="14"></rect><rect class="cls-1" x="183" y="190" width="14" height="41"></rect><polygon class="cls-1" points="269.5 189.5 269.5 230.62 245.62 254.5 203.5 254.5 203.5 189.5 269.5 189.5"></polygon><rect class="cls-1" width="8" height="8"></rect><rect class="cls-1" x="266" y="251" width="8" height="8"></rect><polygon class="cls-1" points="3.5 33.16 30.77 5.5 50.5 5.5 145.5 5.5 145.5 19.5 159.5 19.5 159.5 52.5 50.5 52.5 50.5 153.5 3.5 153.5 3.5 52.5 3.5 33.16"></polygon></g></g>',1)])))])])])}const la=B(na,[["render",ca]]),ma=S({name:"FriendBody",props:["data","select","menu","from"],data(){return{trueLang:Z()}},methods:{getShowName(){const s=this.data.group_name,e=this.data.remark,n=this.data.nickname;return s||(!e||e==n?n:e+"（"+n+"）")}}}),da=["id","data-name","data-nickname","data-type"],fa=["title","src"],_a={key:0,class:"time"},va={key:0,style:{"margin-left":"10px",display:"flex"}};function ha(s,e,n,o,a,p){const g=C("font-awesome-icon");return m(),d("div",{id:"user-"+(s.data.user_id??s.data.group_id),class:L("friend-body"+(s.select?" active":s.menu?" onmenu":"")),"data-name":s.data.user_id?s.data.nickname:s.data.group_name,"data-nickname":s.data.user_id?s.data.nickname:"","data-type":s.data.user_id?"friend":"group"},[t("div",{class:L(s.data.new_msg===!0?"new":"")},null,2),s.data.user_id==-1e4?(m(),V(g,{key:0,icon:["fas","bell"]})):(m(),d("img",{key:1,loading:"lazy",title:s.getShowName(),src:s.data.user_id?"https://q1.qlogo.cn/g?b=qq&s=0&nk="+s.data.user_id:"https://p.qlogo.cn/gh/"+s.data.group_id+"/"+s.data.group_id+"/0"},null,8,fa)),t("div",null,[t("div",null,[t("p",null,c(s.getShowName()),1),e[0]||(e[0]=t("div",{style:{flex:"1"}},null,-1)),s.from=="message"?(m(),d("a",_a,c(s.data.time!==void 0?Intl.DateTimeFormat(s.trueLang,{hour:"numeric",minute:"numeric"}).format(new Date(s.data.time)):""),1)):b("",!0)]),t("div",null,[t("a",{class:L(s.from=="friend"?"nick":"")},c(s.from=="friend"?s.data.longNick??"":s.data.raw_msg),3),s.from=="message"?(m(),d("div",va,[s.data.always_top===!0?(m(),V(g,{key:0,icon:["fas","thumbtack"]})):b("",!0)])):b("",!0)])])],10,da)}const Ze=B(ma,[["render",ha]]),ba=S({name:"ViewFriends",components:{FriendBody:Ze},props:["list"],emits:["userClick","loadHistory"],data(){return{runtimeData:i,loading:!1,isSearch:!1,searchInfo:"",classStatus:{},loginInfo:J}},methods:{userClick(s,e){const n=e.currentTarget;this.runtimeData.tags.openSideBar&&this.openLeftBar(),this.isSearch=!1,this.searchInfo="",this.runtimeData.showList=[];const o={type:s.user_id?"user":"group",id:s.user_id?s.user_id:s.group_id,name:this.getShowName(s),avatar:s.user_id?"https://q1.qlogo.cn/g?b=qq&s=0&nk="+s.user_id:"https://p.qlogo.cn/gh/"+s.group_id+"/"+s.group_id+"/0",jump:n.dataset.jump};this.$emit("userClick",o),i.onMsgList.filter(g=>{const u=g.user_id?g.user_id:g.group_id;return Number(u)===Number(o.id)}).length===0&&i.onMsgList.push(s),this.$emit("loadHistory",o);const p=document.getElementById("bar-msg");p!==null&&p.click()},search(s){const e=s.target.value;e!==""?(this.isSearch=!0,this.runtimeData.showList=this.list.filter(n=>{const o=(n.user_id?n.nickname+n.remark:n.group_name).toLowerCase(),a=n.py_name?n.py_name:"";return(n.user_id?n.user_id:n.group_id).toString()===e||e.length>4&&a.indexOf(e.toLowerCase())!=-1||o.indexOf(e.toLowerCase())!=-1})):(this.isSearch=!1,this.runtimeData.showList=[])},reloadUser(){qs()},openLeftBar(){i.tags.openSideBar=!i.tags.openSideBar},classClick(s){this.classStatus[s]?this.classStatus[s]=!this.classStatus[s]:this.classStatus[s]=!0},getShowName(s){const e=s.group_name,n=s.remark,o=s.nickname;return e||(!n||n==o?o:n+"（"+o+"）")}}}),ya={class:"friend-view"},Ea={class:"base"},wa={class:"small"},Oa=["placeholder"],Da=["placeholder"],Ia=["title","onClick"],La=["id"],qa=["title"],ka={key:1,class:"list"},Ca={class:"ss-card"};function Aa(s,e,n,o,a,p){const g=C("font-awesome-icon"),u=C("FriendBody");return m(),d("div",ya,[t("div",{id:"friend-list",class:L("friend-list"+(s.runtimeData.tags.openSideBar?" open":""))},[t("div",null,[t("div",Ea,[t("span",null,c(s.$t("联系人")),1),e[7]||(e[7]=t("div",{style:{flex:"1"}},null,-1)),v(g,{icon:["fas","rotate-right"],onClick:s.reloadUser},null,8,["onClick"])]),t("div",wa,[t("label",null,[y(t("input",{"onUpdate:modelValue":e[0]||(e[0]=l=>s.searchInfo=l),type:"text",placeholder:s.$t("搜索 ……"),onInput:e[1]||(e[1]=(...l)=>s.search&&s.search(...l))},null,40,Oa),[[j,s.searchInfo]]),v(g,{icon:["fas","magnifying-glass"]})]),t("div",{class:"reload",onClick:e[2]||(e[2]=(...l)=>s.reloadUser&&s.reloadUser(...l))},[v(g,{icon:["fas","rotate-right"]})]),t("div",{onClick:e[3]||(e[3]=(...l)=>s.openLeftBar&&s.openLeftBar(...l))},[v(g,{icon:["fas","bars-staggered"]})])]),t("label",null,[y(t("input",{"onUpdate:modelValue":e[4]||(e[4]=l=>s.searchInfo=l),type:"text",placeholder:s.$t("搜索 ……"),onInput:e[5]||(e[5]=(...l)=>s.search&&s.search(...l))},null,40,Da),[[j,s.searchInfo]]),v(g,{icon:["fas","magnifying-glass"]})])]),t("div",{class:L(s.runtimeData.tags.openSideBar?"open":"")},[s.runtimeData.showList.length<=0?(m(),d(I,{key:0},[s.runtimeData.tags.classes.length>0?(m(),d(I,{key:0},[(m(!0),d(I,null,$(s.runtimeData.tags.classes,l=>(m(),d("div",{key:"class-"+l.class_id,class:L("list exp-body"+(s.classStatus[l.class_id]==!0?" open":""))},[t("header",{title:l.class_name,class:L("exp-header"+(s.runtimeData.tags.openSideBar?" open":"")),onClick:_=>s.classClick(l.class_id)},[e[8]||(e[8]=t("div",null,null,-1)),t("span",null,c(l.class_name),1),t("a",null,c(l.user_count??s.runtimeData.userList.filter(_=>_.class_id==l.class_id).length),1)],10,Ia),t("div",{id:"class-"+l.class_id},[(m(!0),d(I,null,$(s.runtimeData.userList.filter(_=>_.class_id==l.class_id),_=>(m(),V(u,{key:"fb-"+(_.user_id?_.user_id:_.group_id),data:_,from:"friend",onClick:E=>s.userClick(_,E)},null,8,["data","onClick"]))),128))],8,La)],2))),128)),t("div",{class:L("list exp-body"+(s.classStatus[-1]==!0?" open":""))},[t("header",{title:s.$t("群组"),class:L("exp-header"+(s.runtimeData.tags.openSideBar?" open":"")),onClick:e[6]||(e[6]=l=>s.classClick("-1"))},[e[9]||(e[9]=t("div",null,null,-1)),t("span",null,c(s.$t("群组")),1),t("a",null,c(s.runtimeData.userList.filter(l=>l.class_id==null).length),1)],10,qa),t("div",null,[(m(!0),d(I,null,$(s.runtimeData.userList.filter(l=>l.class_id==null),l=>(m(),V(u,{key:"fb-"+(l.user_id?l.user_id:l.group_id),data:l,from:"friend",onClick:_=>s.userClick(l,_)},null,8,["data","onClick"]))),128))])],2)],64)):(m(!0),d(I,{key:1},$(s.runtimeData.userList,l=>(m(),V(u,{key:"fb-"+(l.user_id?l.user_id:l.group_id),data:l,from:"friend",onClick:_=>s.userClick(l,_)},null,8,["data","onClick"]))),128))],64)):(m(),d("div",ka,[t("div",null,[(m(!0),d(I,null,$(s.runtimeData.showList,l=>(m(),V(u,{key:"fb-"+(l.user_id?l.user_id:l.group_id),data:l,from:"friend",onClick:_=>s.userClick(l,_)},null,8,["data","onClick"]))),128))])]))],2)],2),y(t("div",{class:L("friend-list-space"+(s.runtimeData.tags.openSideBar?" open":""))},[t("div",Ca,[v(g,{icon:["fas","inbox"]}),t("span",null,c(s.$t("选择联系人开始聊天")),1)])],2),[[T,!s.loginInfo.status||s.runtimeData.chatInfo.show.id==0]])])}const $a=B(ba,[["render",Aa],["__scopeId","data-v-a0177bf2"]]),Ta=S({name:"VueMessages",components:{FriendBody:Ze,BcMenu:ve},props:["chat"],emits:["userClick","loadHistory"],data(){return{runtimeData:i,trRead:!1,listMenu:{show:!1,point:{x:0,y:0}},menu:ve.append,showMenu:!1,loginInfo:J}},mounted(){te.add(ln,mn,dn,fn),i.tags.isElectron&&i.reader&&this.$watch(()=>i.onMsgList.length,()=>{var e;new G().add(N.UI,"flush touch bar: "+i.onMsgList.length);const s=[];i.onMsgList.forEach(n=>{s.push({id:n.user_id?n.user_id:n.group_id,name:n.group_name?n.group_name:n.remark===n.nickname?n.nickname:n.remark+"（"+n.nickname+"）",image:n.user_id?"https://q1.qlogo.cn/g?b=qq&s=0&nk="+n.user_id:"https://p.qlogo.cn/gh/"+n.group_id+"/"+n.group_id+"/0"})}),(e=i.reader)==null||e.send("sys:flushTouchBar",s)})},methods:{userClick(s){if(!this.trRead){this.runtimeData.tags.openSideBar&&this.openLeftBar();const e=i.onMsgList.indexOf(s),n={temp:s.group_name==""?s.group_id:void 0,type:s.user_id?"user":"group",id:s.user_id?s.user_id:s.group_id,name:s.group_name?s.group_name:s.remark===s.nickname?s.nickname:s.remark+"（"+s.nickname+"）",avatar:s.user_id?"https://q1.qlogo.cn/g?b=qq&s=0&nk="+s.user_id:"https://p.qlogo.cn/gh/"+s.group_id+"/"+s.group_id+"/0"};this.chat.id!=n.id&&(this.$emit("userClick",n),this.$emit("loadHistory",n),i.sysConfig.chatview_name!=""&&i.sysConfig.chatview_name!=Vs("chatview_name")&&(i.sysConfig.chatview_name=Vs("chatview_name"),bs("chatview_name",Vs("chatview_name")))),i.onMsgList[e].new_msg=!1,new us().closeAll((i.onMsgList[e].group_id??i.onMsgList[e].user_id).toString())}},systemNoticeClick(){this.runtimeData.tags.openSideBar&&this.openLeftBar();const s={type:"user",id:-1e4,name:"系统消息"};this.$emit("userClick",s),i.sysConfig.chatview_name="SystemNotice",bs("chatview_name","SystemNotice")},openLeftBar(){i.tags.openSideBar=!i.tags.openSideBar},readMsg(s){const e=i.onMsgList.indexOf(s);i.onMsgList[e].new_msg=!1;const n=s.group_id?s.group_id:s.user_id,o=s.group_id?"group":"user";Se(n,o,1,"readMemberMessage"),new M().add(P.INFO,w.config.globalProperties.$t("已标记为已读"))},cleanList(){const s=i.sysConfig.top_info;if(i.onMsgList=[],s!=null){const e=s[i.loginInfo.uin];e!==void 0&&i.userList.forEach(n=>{const o=Number(n.user_id?n.user_id:n.group_id);e.indexOf(o)>=0&&(n.always_top=!0,i.onMsgList.push(n))})}},listMenuClose(s){var o;const e=(o=document.getElementById("msg-menu-view-messages-menu"))==null?void 0:o.children[1];e&&setTimeout(()=>{e.style.transition="transform .1s"},200),this.listMenu.show=!1;const n=this.menu.select;if(s)switch(s){case"readed":this.readMsg(n);break;case"remove":{const a=i.onMsgList.findIndex(p=>n==p);i.onMsgList.splice(a,1);break}case"top":this.saveTop(n,!0);break;case"canceltop":this.saveTop(n,!1);break;case"notice_open":{const a=k.get("notice_group")??{},p=a[i.loginInfo.uin];p?p.push(n.group_id):a[i.loginInfo.uin]=[n.group_id],k.save("notice_group",a);break}case"notice_close":{const a=k.get("notice_group")??{},p=a[i.loginInfo.uin];if(p){const g=p.indexOf(n.group_id);g>=0&&p.splice(g,1)}k.save("notice_group",a);break}}this.menu.select=void 0},canGroupNotice(s){const n=(k.get("notice_group")??{})[i.loginInfo.uin];return n?n.indexOf(s)>=0:!1},saveTop(s,e){const n=i.loginInfo.uin,o=s.user_id?s.user_id:s.group_id;let a=i.sysConfig.top_info;a==null&&(a={});let p=a[n];e?p?p.indexOf(this.chat.show.id)<0&&p.push(o):p=[o]:p&&p.splice(p.indexOf(o),1),p&&(a[n]=p,k.save("top_info",a)),s.always_top=e;const g=ce(i.onMsgList);i.onMsgList=g},listMenuShow(s,e){const n=this.menu.set("messages-menu",s);this.listMenuShowRun(n,e)},listMenuShowRun(s,e){this.showMenu=!1,s.list=["top","remove","readed"],e.always_top&&(s.list=["canceltop","readed"]),e.group_id&&(this.canGroupNotice(e.group_id)?s.list.push("notice_close"):s.list.push("notice_open")),this.listMenu=s,this.menu.select=e,setTimeout(()=>{var o;const n=(o=document.getElementById("msg-menu-view-messages-menu"))==null?void 0:o.children[1];if(n){n.style.transition="margin .2s, transform .1s";const a=n.clientHeight,p=n.getBoundingClientRect().top,g=document.documentElement.clientHeight;a+p-g+20>0&&(n.style.marginTop=g-a-30+"px")}},100)},showMenuStart(s,e){const n={show:!0,point:{x:s.targetTouches[0].pageX,y:s.targetTouches[0].pageY}};this.showMenu=!0,setTimeout(()=>{this.showMenu&&(this.listMenuShowRun(n,e),this.showMenu=!1)},500)},showMenuEnd(){this.showMenu=!1}}}),Pa={class:"friend-view"},Va={class:"base only"},Fa={class:"small"},Ma={id:"top",icon:"fa-solid fa-thumbtack"},Ra={id:"canceltop",icon:"fa-solid fa-grip-lines"},Ba={id:"remove",icon:"fa-solid fa-trash-can"},Sa={id:"readed",icon:"fa-solid fa-check-to-slot"},Na={id:"notice_open",icon:"fa-solid fa-volume-high"},Ua={id:"notice_close",icon:"fa-solid fa-volume-xmark"},ja={class:"ss-card"};function Ha(s,e,n,o,a,p){const g=C("font-awesome-icon"),u=C("BcMenu"),l=C("FriendBody");return m(),d("div",Pa,[t("div",{id:"message-list",class:L("friend-list"+(s.runtimeData.tags.openSideBar?" open":""))},[t("div",null,[t("div",Va,[t("span",null,c(s.$t("消息")),1),e[1]||(e[1]=t("div",{style:{flex:"1"}},null,-1)),v(g,{icon:["fas","trash-can"],onClick:s.cleanList},null,8,["onClick"])]),t("div",Fa,[y(t("span",null,c(s.$t("消息")),513),[[T,s.runtimeData.tags.openSideBar]]),t("div",{onClick:e[0]||(e[0]=(..._)=>s.openLeftBar&&s.openLeftBar(..._))},[v(g,{icon:["fas","bars-staggered"]})])])]),v(u,{data:s.listMenu,name:"messages-menu",onClose:s.listMenuClose},{default:z(()=>[t("ul",null,[t("li",Ma,c(s.$t("置顶")),1),t("li",Ra,c(s.$t("取消置顶")),1),t("li",Ba,c(s.$t("删除")),1),t("li",Sa,c(s.$t("标记已读")),1),t("li",Na,c(s.$t("开启通知")),1),t("li",Ua,c(s.$t("关闭通知")),1)])]),_:1},8,["data","onClose"]),v(Rs,{id:"message-list-body",name:"onmsg",tag:"div",class:L(s.runtimeData.tags.openSideBar?" open":""),style:{"overflow-y":"scroll"}},{default:z(()=>[s.runtimeData.systemNoticesList&&Object.keys(s.runtimeData.systemNoticesList).length>0?(m(),V(l,{key:"inMessage--10000",select:s.chat.show.id===-1e4,data:{user_id:-1e4,always_top:!0,nickname:s.$t("系统通知"),remark:s.$t("系统通知")},onClick:s.systemNoticeClick},null,8,["select","data","onClick"])):b("",!0),(m(!0),d(I,null,$(s.runtimeData.onMsgList,_=>(m(),V(l,{key:"inMessage-"+(_.user_id?_.user_id:_.group_id),select:s.chat.show.id===_.user_id||s.chat.show.id===_.group_id&&s.chat.group_name!="",menu:s.menu.select&&s.menu.select==_,data:_,from:"message",onContextmenu:Os(E=>s.listMenuShow(E,_),["prevent"]),onClick:E=>s.userClick(_),onTouchstart:E=>s.showMenuStart(E,_),onTouchend:s.showMenuEnd},null,8,["select","menu","data","onContextmenu","onClick","onTouchstart","onTouchend"]))),128))]),_:1},8,["class"])],2),y(t("div",{class:L("friend-list-space"+(s.runtimeData.tags.openSideBar?" open":""))},[t("div",ja,[v(g,{icon:["fas","inbox"]}),t("span",null,c(s.$t("选择联系人开始聊天")),1)])],2),[[T,!s.loginInfo.status||s.runtimeData.chatInfo.show.id==0]])])}const Qa=B(Ta,[["render",Ha]]),za=S({name:"BulletinBody",props:["data","index"],data(){return{trueLang:Z(),runtimeData:i,showAll:!1,needShow:!0}},mounted(){this.$nextTick(()=>{const s=document.getElementById("info-pan-notices"),e=document.getElementById("info-pan-mumber"),n=document.getElementById("bulletins-msg-"+this.index);if(n&&s&&e){s.click();const o=Number(getComputedStyle(n).maxHeight.replace("px","")),a=n.offsetHeight;e.click(),this.needShow=a==o}})},methods:{parseText(s){s=s.replaceAll("\r",`
`).replaceAll(`

`,`
`).replaceAll("&#10;",`
`),s=ee(s,{whiteList:{a:["href","target"]}});const e=/(http|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-.,@?^=%&:/~+#]*[\w\-@?^=%&/~+#])?/gi;return s=s.replaceAll(e,'<a href="" data-link="$&" onclick="return false">$&</a>'),s},textClick(s){const e=s.target;if(e.dataset.link){const n=e.dataset.link;ss(n)}}}}),Wa=["id"],Ga=["innerHTML"],Ka={class:"info"},Ja=["src"],Za={key:0};function Ya(s,e,n,o,a,p){const g=C("font-awesome-icon");return m(),d("div",{class:"base",onClick:e[1]||(e[1]=u=>s.showAll=!s.showAll)},[t("header",null,[v(g,{icon:["fas","bookmark"]}),t("span",null,c(s.$t("公告")),1),e[2]||(e[2]=t("div",{style:{flex:"1"}},null,-1)),t("span",null,c(Intl.DateTimeFormat(s.trueLang,{month:"short",day:"numeric",hour:"numeric",minute:"numeric"}).format(s.data.time)),1)]),t("div",{id:"bulletins-msg-"+s.index,class:L("body"+(s.showAll?" all":""))},[t("span",{onClick:e[0]||(e[0]=(...u)=>s.textClick&&s.textClick(...u)),innerHTML:s.parseText(s.data.content[0])},null,8,Ga)],10,Wa),y(t("span",null,c(s.$t("点击展开")),513),[[T,s.needShow&&!s.showAll]]),t("div",Ka,[t("img",{src:"https://q1.qlogo.cn/g?b=qq&s=0&nk="+s.data.sender},null,8,Ja),t("a",null,c(s.runtimeData.chatInfo.info.group_members.filter(u=>Number(u.user_id)===Number(s.data.sender))[0].nickname),1),e[3]||(e[3]=t("div",null,null,-1)),s.data.is_read?(m(),d("span",Za,c(s.$t("{readNum} 人已读 | {isRead}",{isRead:s.data.is_read?s.$t("已读"):s.$t("未读"),readNum:s.data.read_num})),1)):b("",!0)])])}const Xa=B(za,[["render",Ya]]),xa=S({name:"FileBody",props:["item","chat","parent"],data(){return{trueLang:Z(),getSize:Me,toHtml:Ys}},methods:{getFile(s){this.parent===void 0?O.send("get_file_url",{id:i.chatInfo.show.id,message_id:i.messageList[0].message_id,fid:s.id},"downloadGroupFile_"+s.id):O.send("http_proxy",{id:i.chatInfo.show.id,message_id:i.messageList[0].message_id,fid:s.id},"downloadGroupFile_"+this.parent+"_"+s.id),s.downloadingPercentage=0},loadFileDir(s,e){if(e===2&&this.item.sub_list===void 0){const n=`https://pan.qun.qq.com/cgi-bin/group_file/get_file_list?gc=${this.chat.show.id}&bkn=${i.loginInfo.bkn}&start_index=0&cnt=30&filter_code=0&folder_id=${s}&show_onlinedoc_folder=0`;O.send("http_proxy",{url:n},"getGroupDirFiles_"+s)}}}}),su={class:"main"},eu=["data-id"],nu={key:0},tu={key:1},iu={key:2},ou={key:3,class:"download-bar",xmlns:"http://www.w3.org/2000/svg"},ru=["stroke-dasharray"];function au(s,e,n,o,a,p){const g=C("font-awesome-icon"),u=C("FileBody",!0);return m(),d("div",{class:L((s.item.type===2?" folder":"")+(s.item.sub_list&&s.item.sub_list.length>0?" open":"")),onClick:e[1]||(e[1]=l=>s.loadFileDir(s.item.id,s.item.type))},[s.item.type===2?(m(),V(g,{key:0,icon:["fas","folder"]})):b("",!0),s.item.type===1?(m(),V(g,{key:1,icon:["fas","file"]})):b("",!0),t("div",su,[t("span",null,c(s.toHtml(s.item.name)),1),t("div",null,[t("span",{"data-id":s.item.owner_uin},c(s.toHtml(s.item.owner_name)),9,eu),t("span",null,c(s.item.create_time===0?"-":Intl.DateTimeFormat(s.trueLang,{year:"numeric",month:"short",day:"numeric"}).format(new Date(s.item.create_time*1e3))),1),!s.item.dead_time&&s.item.dead_time?(m(),d("span",nu,c(s.item.dead_time-s.item.create_time/86400-1+s.$t("天后")),1)):b("",!0),s.item.type===2?(m(),d("span",tu,c(s.$t("共 {num} 个文件",{num:s.item.size})),1)):b("",!0),s.item.type===1?(m(),d("span",iu,c(s.getSize(s.item.size)),1)):b("",!0)])]),s.item.type===1&&s.item.downloadingPercentage===void 0?(m(),d("div",{key:2,class:"download",onClick:e[0]||(e[0]=l=>s.getFile(s.item))},[v(g,{icon:["fas","angle-down"]})])):b("",!0),s.item.downloadingPercentage!==void 0?(m(),d("svg",ou,[e[2]||(e[2]=t("circle",{cx:"50%",cy:"50%",r:"40%","stroke-width":"15%",fill:"none","stroke-linecap":"round"},null,-1)),t("circle",{cx:"50%",cy:"50%",r:"40%","stroke-width":"15%",fill:"none","stroke-dasharray":s.item.downloadingPercentage===void 0?"0,10000":`${Math.floor(2*Math.PI*25)*s.item.downloadingPercentage/100},10000`},null,8,ru)])):b("",!0),y(t("div",{class:L((s.item.sub_list!==void 0?"sub_file ":"")+"group-files")},[(m(!0),d(I,null,$(s.item.sub_list,l=>(m(),d("div",{key:"sub_file-"+l.id},[v(u,{chat:s.chat,item:l,parent:s.item.id},null,8,["chat","item","parent"])]))),128))],2),[[T,s.item.sub_item_show!==!1&&s.item.sub_list!==void 0]])],2)}const uu=B(xa,[["render",au]]),gu=S({name:"ViewOptInfo",props:["type","chat"],data(){return{runtimeData:i}},methods:{setGroupCard(s){s.key==="Enter"&&O.send("set_group_card",{group_id:this.chat.show.id,user_id:i.loginInfo.uin,card:i.chatInfo.info.me_info.card},"setGroupCard")},setGroupName(s){s.key==="Enter"&&i.chatInfo.show.name!=""&&O.send("set_group_name",{group_id:this.chat.show.id,group_name:i.chatInfo.show.name},"setGroupName")},leaveGroup(){const s={html:"<span>"+this.$t("确定要退出群聊吗？")+"</span>",button:[{text:this.$t("确定"),fun:()=>{var e,n;(e=i.jsonMap.leave_group)!=null&&e.name&&O.send((n=i.jsonMap.leave_group)==null?void 0:n.name,{group_id:this.chat.show.id},"leaveGroup"),i.onMsgList=i.onMsgList.filter(o=>o.group_id!==this.chat.show.id),i.chatInfo.show.id=0,qs(),i.popBoxList.shift()}},{text:this.$t("取消"),master:!0,fun:()=>{i.popBoxList.shift()}}]};i.popBoxList.push(s)}}}),pu={class:"info-pan-set",style:{padding:"0"}},cu={key:0,class:"opt-item"},lu={class:"opt-item"};function mu(s,e,n,o,a,p){const g=C("font-awesome-icon");return m(),d("div",pu,[s.type=="group"?(m(),d(I,{key:0},[s.chat.info.group_info.gOwner&&s.chat.info.group_info.gOwner===s.runtimeData.loginInfo.uin||s.chat.info.group_info.gAdmins&&s.chat.info.group_info.gAdmins.indexOf(s.runtimeData.loginInfo.uin)>=0?(m(),d("div",cu,[v(g,{icon:["fas","pen"]}),t("div",null,[t("span",null,c(s.$t("群聊名称")),1),t("span",null,c(s.$t("“你们真是害人不浅呐你们这个群”")),1)]),y(t("input",{"onUpdate:modelValue":e[0]||(e[0]=u=>s.runtimeData.chatInfo.show.name=u),class:"ss-input",style:{width:"150px"},type:"text",onKeyup:e[1]||(e[1]=(...u)=>s.setGroupName&&s.setGroupName(...u))},null,544),[[j,s.runtimeData.chatInfo.show.name]])])):b("",!0),t("div",lu,[v(g,{icon:["fas","note-sticky"]}),t("div",null,[t("span",null,c(s.$t("我的本群昵称")),1),t("span",null,c(s.$t("￡爺↘僞ηι慹著彡")),1)]),y(t("input",{"onUpdate:modelValue":e[2]||(e[2]=u=>s.runtimeData.chatInfo.info.me_info.card=u),class:"ss-input",style:{width:"150px"},type:"text",onKeyup:e[3]||(e[3]=(...u)=>s.setGroupCard&&s.setGroupCard(...u))},null,544),[[j,s.runtimeData.chatInfo.info.me_info.card]])]),t("button",{class:"ss-button",style:{width:"calc(100% - 60px)",margin:"30px 30px 0 30px"},onClick:e[4]||(e[4]=u=>s.leaveGroup())},c(s.$t("退出群聊")),1)],64)):b("",!0)])}const du=B(gu,[["render",mu],["__scopeId","data-v-e2df857e"]]),fu=S({name:"ViewInfo",components:{BulletinBody:Xa,FileBody:uu,OptInfo:du,BcTab:ne},props:["tags","chat"],emits:["close","loadFile"],data(){return{runtimeData:i,trueLang:Z(),isTop:!1,number_cache:[]}},methods:{closeChatInfoPan(){this.$emit("close",null)},fileLoad(s){this.$emit("loadFile",s)},startChat(s){if(s.user_id!=i.loginInfo.uin){let e=i.onMsgList.find(n=>n.user_id==s.user_id);if(!e){const n=i.userList.find(o=>o.user_id==s.user_id);if(n)i.onMsgList.push(n),e=n;else{const o={user_id:s.user_id,nickname:w.config.globalProperties.$t("临时会话"),remark:s.user_id,group_id:s.group_id,group_name:""};i.onMsgList.push(o),e=o}}this.$nextTick(()=>{if(e){const n=document.getElementById("user-"+e.user_id);n&&n.click()}})}},searchList(s){const e=s.target.value;e!==""?(this.number_cache=Ms(this.chat.info.group_members),this.number_cache=this.number_cache.filter(n=>{const o=n.card.toLowerCase()+"("+n.nickname.toLowerCase()+")",a=n.user_id;return o.indexOf(e.toLowerCase())!=-1||a.toString()===e})):this.number_cache=[]}}}),_u={key:0,class:"chat-info-pan"},vu={class:"ss-card chat-info"},hu={key:0},bu={key:1},yu=["src"],Eu={key:0},wu=["innerHTML"],Ou={class:"tags"},Du={key:1},Iu=["innerHTML"],Lu={class:"outher"},qu=["name"],ku={class:"chat-info-tab-member"},Cu={class:"search-view"},Au=["placeholder"],$u=["onClick"],Tu=["src"],Pu=["name"],Vu={class:"bulletins"},Fu=["name"],Mu={class:"group-files-loader"},Ru=["name"],Bu={style:{padding:"0 20px"}};function Su(s,e,n,o,a,p){const g=C("font-awesome-icon"),u=C("OptInfo"),l=C("BulletinBody"),_=C("FileBody"),E=C("BcTab");return s.tags.openChatInfo?(m(),d("div",_u,[t("div",vu,[t("header",null,[s.chat.show.type==="group"?(m(),d("span",hu,c(s.$t("群资料")),1)):b("",!0),s.chat.show.type==="user"?(m(),d("span",bu,c(s.$t("好友")),1)):b("",!0),v(g,{icon:["fas","xmark"],onClick:s.closeChatInfoPan},null,8,["onClick"])]),t("div",{class:L("chat-info-base "+s.chat.show.type)},[t("div",null,[t("img",{src:s.chat.show.avatar},null,8,yu),t("div",null,[t("a",null,c(s.chat.show.name),1),t("span",null,c(s.chat.show.id),1)])]),s.chat.show.type==="group"?y((m(),d("div",Eu,[t("header",null,[t("span",null,c(s.$t("介绍")),1)]),t("span",{innerHTML:s.chat.info.group_info.gIntro===void 0||s.chat.info.group_info.gIntro===""?s.$t("群主很懒，还没有群介绍哦～"):s.chat.info.group_info.gIntro},null,8,wu),t("div",Ou,[(m(!0),d(I,null,$(s.chat.info.group_info.tags,h=>(m(),d("div",{key:h.md},c(h.tag),1))),128))])],512)),[[T,Object.keys(s.chat.info.group_info).length>0]]):s.chat.show.type==="user"?(m(),d("div",Du,[t("header",null,[t("span",null,c(s.$t("签名")),1)]),t("span",{innerHTML:s.chat.info.user_info.lnick===void 0||s.chat.info.user_info.lnick===""?s.$t("签名"):s.chat.info.user_info.lnick},null,8,Iu),t("header",null,[t("span",null,c(s.$t("其他信息")),1)]),t("div",Lu,[t("span",null,[R(c(s.$t("生日"))+": ",1),t("span",null,c(s.chat.info.user===void 0?"":Intl.DateTimeFormat(s.trueLang,{year:"numeric",month:"short",day:"numeric"}).format(new Date(`${s.chat.info.user_info.birthday.year}-${s.chat.info.user_info.birthday.month}-${s.chat.info.user_info.birthday.day}`))+` (${s.$t("生肖").split("&")[s.chat.info.user_info.shengxiao-1]})`),1)]),t("span",null,[R(c(s.$t("地区"))+": ",1),t("span",null,c(`${s.chat.info.user_info.country}-${s.chat.info.user_info.province}-${s.chat.info.user_info.city}`),1)])]),s.chat.show.temp?b("",!0):(m(),d(I,{key:0},[t("header",null,[t("span",null,c(s.$t("设置")),1)]),v(u,{type:"number",chat:s.chat},null,8,["chat"])],64))])):b("",!0)],2),s.chat.show.type==="group"?(m(),V(E,{key:0,class:"chat-info-tab"},{default:z(()=>[t("div",{name:s.$t("成员")},[t("div",ku,[t("div",Cu,[t("input",{placeholder:s.$t("搜索 ……"),onInput:e[0]||(e[0]=(...h)=>s.searchList&&s.searchList(...h))},null,40,Au)]),(m(!0),d(I,null,$(s.number_cache.length>0?s.number_cache:s.chat.info.group_members,h=>(m(),d("div",{key:"chatinfomlist-"+h.user_id,onClick:f=>s.startChat(h)},[t("img",{loading:"lazy",src:`https://q1.qlogo.cn/g?b=qq&s=0&nk=${h.user_id}`},null,8,Tu),t("div",null,[t("a",null,c(h.card?h.card:h.nickname),1),h.role==="owner"?(m(),V(g,{key:0,icon:["fas","crown"]})):b("",!0),h.role==="admin"?(m(),V(g,{key:1,icon:["fas","star"]})):b("",!0)]),t("span",null,c(h.user_id),1)],8,$u))),128))])],8,qu),t("div",{name:s.$t("公告")},[t("div",Vu,[(m(!0),d(I,null,$(s.chat.info.group_notices??[],(h,f)=>(m(),V(l,{key:"bulletins-"+f,data:h,index:f},null,8,["data","index"]))),128))])],8,Pu),t("div",{name:s.$t("文件")},[t("div",{class:"group-files",onScroll:e[1]||(e[1]=(...h)=>s.fileLoad&&s.fileLoad(...h))},[(m(!0),d(I,null,$(s.chat.info.group_files.file_list,h=>(m(),d("div",{key:"file-"+h.id},[v(_,{chat:s.chat,item:h},null,8,["chat","item"])]))),128)),y(t("div",Mu,[v(g,{icon:["fas","ellipsis"]})],512),[[T,s.chat.info.group_files!==void 0&&s.chat.info.group_files.next_index!==void 0&&s.chat.info.group_files.next_index!==0]])],32)],8,Fu),t("div",{name:s.$t("设置")},[t("div",Bu,[v(u,{type:"group",chat:s.chat},null,8,["chat"])])],8,Ru)]),_:1})):b("",!0)]),e[2]||(e[2]=t("div",{class:"card-info-pan-bg"},null,-1))])):b("",!0)}const Nu=B(fu,[["render",Su],["__scopeId","data-v-8b3d4a9e"]]),Uu=new M;class Ns{static isMsgInline(e){switch(e){case"at":case"text":case"face":return!0;case"bface":case"image":case"record":case"video":case"file":case"json":case"xml":return!1}return!1}static buildXML(e,n,o){try{let a=e.substring(e.indexOf("<item"),e.indexOf("</msg>"));a=a.replaceAll("item","div"),a=a.replaceAll("<div",'<div class="msg-xml"'),a=a.replaceAll("title","p"),a=a.replaceAll("summary","a"),a=a.replaceAll("<a",'<a class="msg-xml-summary"'),a=a.replaceAll("<picture",'<img class="msg-xml-img"'),a=a.replaceAll("size=","data-size="),a=a.replaceAll("linespace=","data-linespace="),a=a.replaceAll("cover=","src="),a=a.replace("source name=","source data-name=");const p=document.createElement("div");p.id="xml-"+o,p.dataset.id=n,p.innerHTML=a;for(let _=0;_<p.children[0].children.length;_++)switch(p.children[0].children[_].nodeName){case"P":{const E=p.children[0].children[_];E.style.fontSize=(Number(E.dataset.size)/30).toString()+"rem",E.style.marginBottom=Number(E.dataset.size)/5+"px";break}}let g=e.substring(e.indexOf("<msg"),e.indexOf("<item"))+"</msg>";g=g.replace("msg","div"),g=g.replace("m_resid=","data-resid="),g=g.replace("url=","data-url=");const u=document.createElement("div");u.innerHTML=g;let l;for(let _=0;_<p.children.length;_++)p.children[_].nodeName==="SOURCE"&&(l=p.children[_]);if(l!==void 0){let _=l.dataset.name;if(_)switch(_.indexOf("聊天记录")>=0&&(_="聊天记录"),_){case"聊天记录":{p.dataset.type="forward",p.dataset.id=u.children[0].dataset.resid,p.style.cursor="pointer";break}case"群投票":return'<a class="msg-unknow">（'+w.config.globalProperties.$t("chat_xml_unsupport")+"："+_+"）</a>"}}return u.children[0].dataset.url!==void 0&&(p.dataset.url=u.children[0].dataset.url,p.style.cursor="pointer"),p.outerHTML}catch{return'<span v-else class="msg-unknown">( '+w.config.globalProperties.$t("解析消息错误")+": xml )</span>"}}static getJSON(e){const n=e.meta[Object.keys(e.meta)[0]],o={};return o.name=n.tag===void 0?n.title:n.tag,o.icon=n.icon===void 0?n.source_icon:n.icon,o.title=n.title,o.desc=n.desc,o.preview=n.preview,o.preview!==void 0&&o.preview.indexOf("http")===-1&&(o.preview="//"+o.preview),o.url=n.qqdocurl===void 0?n.jumpUrl:n.qqdocurl,o}static getJSONType(e){if(e.type!="xml"){const n=e.data,o=JSON.parse(n),a=this.getJSON(o);let p="default";const g={};if(o.desc==="群公告"&&(a.title=o.desc,a.desc=o.prompt,a.preview=void 0,a.icon="",a.name=o.desc),o.app=="com.tencent.multimsg"&&(a.title=o.meta.detail.source,a.desc='<div style="padding: 15px 20px 5px 20px">',o.meta.detail.news.forEach(u=>{a.desc+="<span>"+u.text+"</span><br>"}),a.desc+="</div>",a.icon="",a.name=o.meta.detail.summary,g.type="forward",g.id=o.meta.detail.resid),o.app=="com.tencent.map"){a.title=o.meta["Location.Search"].name,g.urlOpenType="_self";const u=Js();u=="Android"?a.url="geo:"+o.meta["Location.Search"].lat+","+o.meta["Location.Search"].lng:(u=="iOS"||u=="MacOS")&&(a.url="http://maps.apple.com/?ll="+o.meta["Location.Search"].lat+","+o.meta["Location.Search"].lng+"&q="+o.meta["Location.Search"].name),a.desc=o.meta["Location.Search"].address,p="tencent.map"}return{type:p,app:a,append:g}}return null}static cardClick(e){const n=document.getElementById(e);if(n!==null){const o=n.dataset.type;if(n.dataset.url!==void 0&&n.dataset.url!=="undefined"&&n.dataset.url!==""){(n.dataset.urlOpenType||n.dataset.urlopentype)=="_self"?window.open(n.dataset.url,"_self"):ss(n.dataset.url);return}switch(o){case"forward":{this.getForwardMsg(n.dataset.id);break}}}}static getForwardMsg(e){e!=="undefined"?(i.mergeMessageList=[],O.send(i.jsonMap.forward_msg.name,{id:e},"getForwardMsg")):Uu.add(P.INFO,w.config.globalProperties.$t("合并消息层级过多，解析失败。"))}static parseText(e){return e=e.replaceAll(`\r
`,`
`).replaceAll("\r",`
`),e=e.replace(/&([^;]+);/g,"&amp;$1;"),e=ee(e,{whiteList:{a:["href","target"]}}),e}}const ju=S({name:"CardMessage",components:{},props:["item","id"],data(){return{View:Ns,info:Ns.getJSONType(this.item)}},methods:{buildJSON(s,e){try{const n=s.app,o=document.createElement("div"),a="<p>"+n.title+"</p><span>"+n.desc+'</span><img style="'+(n.preview===void 0?"display:none":"")+'" src="'+n.preview+'">'+(n.name?'<div><img src="'+n.icon+'"><span>'+n.name+"</span></div>":"");if(o.className="msg-json",o.id="json-"+e,o.dataset.url=n.url,o.dataset.urlOpenType=n.urlOpenType,o.innerHTML=a,Object.keys(s.append).length>0)for(const p in s.append)o.dataset[p]=s.append[p];return o.outerHTML}catch{return'<span v-else class="msg-unknown">( '+w.config.globalProperties.$t("解析消息错误")+": json )</span>"}},createMap(){var e;const s=JSON.parse(this.item.data);return window.createMap(void 0,this.id,{lat:s.meta["Location.Search"].lat,lng:s.meta["Location.Search"].lng}),(e=this.info)==null?void 0:e.app.url}}}),Hu=["innerHTML"],Qu={key:1},zu=["innerHTML"],Wu=["onClick"],Gu=["id","data-url"];function Ku(s,e,n,o,a,p){var g,u;return m(),d("div",null,[s.item.type=="xml"?(m(),d("div",{key:0,onClick:e[0]||(e[0]=l=>s.View.cardClick("xml-"+s.id)),innerHTML:s.View.buildXML(s.item.data,s.item.id,s.id)},null,8,Hu)):(m(),d("div",Qu,[((g=s.info)==null?void 0:g.type)=="default"?(m(),d("div",{key:0,onClick:e[1]||(e[1]=l=>s.View.cardClick("json-"+s.id)),innerHTML:s.buildJSON(s.info,s.id)},null,8,zu)):((u=s.info)==null?void 0:u.type)=="tencent.map"?(m(),d("div",{key:1,class:"msg-comp-map",onClick:l=>s.View.cardClick("map-"+s.id)},[t("p",null,c(s.info.app.title),1),t("span",null,c(s.info.app.desc),1),t("div",{id:"map-"+s.id,class:"map","data-url":s.createMap(),"data-urlOpenType":"_self"},null,8,Gu)],8,Wu)):b("",!0)]))])}const Ju=B(ju,[["render",Ku],["__scopeId","data-v-caa8f5f1"]]),Zu=S({name:"MsgBody",components:{CardMessage:Ju},props:["data","type","selected"],emits:["scrollToMsg","scrollButtom","sendPoke"],data(){return{getFace:ge,getSizeFromBytes:Me,isMe:!1,isDebugMsg:k.get("debug_msg"),linkViewStyle:"",View:Ns,runtimeData:i,pageViewInfo:void 0,gotLink:!1,getVideo:!1,senderInfo:null}},mounted(){this.isMe=Number(i.loginInfo.uin)===Number(this.data.sender.user_id),this.$watch(()=>i.chatInfo.info.group_members.length,()=>{this.senderInfo=i.chatInfo.info.group_members.filter(s=>s.user_id==this.data.sender.user_id)[0]}),this.senderInfo=i.chatInfo.info.group_members.filter(s=>s.user_id==this.data.sender.user_id)[0]},methods:{getMsgRawTxt(s){return K(s)},getAtClass(s){let e="msg-at";return this.isMe&&this.type!="merge"&&(e+=" me"),(i.loginInfo.uin==s||s=="all")&&(e+=" atme"),e},getAtName(s){if(s.qq=="all")return"@"+this.$t("全体成员");if(s.text!=null)return s.text;for(let e=0;e<i.chatInfo.info.group_members.length;e++){const n=i.chatInfo.info.group_members[e];if(n.user_id==Number(s.qq))return"@"+(n.card!=""&&n.card!=null?n.card:n.nickname)}return"@"+s.qq},scrollToMsg(s){this.$emit("scrollToMsg","chat-"+s)},imgStyle(s,e,n){let o="msg-img";return n&&(o+=" "),s===1?o+=" alone":e===0?o+=" top":e===s-1?o+=" button":o},imgClick(s){if(i.chatInfo.info.image_list!==void 0){let e=-1;for(let o=0;o<i.chatInfo.info.image_list.length;o++)if(i.chatInfo.info.image_list[o].message_id==s){e=o;break}const n=w.config.globalProperties.$viewer;e>=0&&n?(n.view(e),n.show(),i.tags.viewer.index=e):new M().add(P.INFO,this.$t("定位图片失败"))}},scrollButtom(){this.$emit("scrollButtom",null)},imgLoadFail(s){const e=s.currentTarget,n=e.parentNode;n.style.display="flex",n.style.flexDirection="column",n.style.alignItems="center",n.style.padding="20px 50px",n.style.border="2px dashed var(--color-card-2)",n.style.borderRadius="10px",n.style.margin="10px 0",n.innerText="";const o=document.createElementNS("http://www.w3.org/2000/svg","svg");o.setAttribute("viewBox","0 0 512 512"),o.innerHTML='<path d="M119.4 44.1c23.3-3.9 46.8-1.9 68.6 5.3l49.8 77.5-75.4 75.4c-1.5 1.5-2.4 3.6-2.3 5.8s1 4.2 2.6 5.7l112 104c2.9 2.7 7.4 2.9 10.5 .3s3.8-7 1.7-10.4l-60.4-98.1 90.7-75.6c2.6-2.1 3.5-5.7 2.4-8.8L296.8 61.8c28.5-16.7 62.4-23.2 95.7-17.6C461.5 55.6 512 115.2 512 185.1v5.8c0 41.5-17.2 81.2-47.6 109.5L283.7 469.1c-7.5 7-17.4 10.9-27.7 10.9s-20.2-3.9-27.7-10.9L47.6 300.4C17.2 272.1 0 232.4 0 190.9v-5.8c0-69.9 50.5-129.5 119.4-141z"/>',o.style.width="40px",o.style.opacity="0.8",o.style.fill="var(--color-main)",this.isMe&&(o.style.fill="var(--color-font-r)"),n.appendChild(o);const a=document.createElement("span");a.innerText=this.$t("加载图片失败"),a.style.marginTop="10px",a.style.fontSize="0.8rem",a.style.color="var(--color-font-2)",this.isMe&&(a.style.color="var(--color-font-1-r)"),n.appendChild(a);const p=document.createElement("a");p.innerText=this.$t("预览图片"),p.target="__blank",p.href=e.src,p.style.marginTop="10px",p.style.fontSize="0.7rem",p.style.color="var(--color-font-2)",this.isMe&&(p.style.color="var(--color-font-1-r)"),n.appendChild(p)},parseText(s){const e=new G;s=Ns.parseText(s);const n=/(http|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-.,@?^=%&:/~+#]*[\w\-@?^=%&/~+#])?/gi;s=s.replaceAll(n,'<a href="" data-link="$&" onclick="return false">$&</a>');const o=s.match(n);if(o!==null&&!this.gotLink){this.gotLink=!0;const a=o[0];fetch(void 0+encodeURIComponent(a)).then(p=>p.json()).then(p=>{if(p.status===void 0&&Object.keys(p).length>0){e.debug("获取链接预览成功: "+p["og:title"]);const l={site:p["og:site_name"]===void 0?"":p["og:site_name"],title:p["og:title"]===void 0?"":p["og:title"],desc:p["og:description"]===void 0?"":p["og:description"],img:p["og:image"],link:p["og:url"]};this.pageViewInfo=l}const g=/\/\/(.*?)\//g;a.match(g)!==null?x("link_view",{domain:RegExp.$1,statue:!0}):x("link_view",{domain:"",statue:!0})}).catch(p=>{if(p){e.error(p,"获取链接预览失败: "+a);const g=/\/\/(.*?)\//g;a.match(g)!==null?x("link_view",{domain:RegExp.$1,statue:!1}):x("link_view",{domain:"",statue:!1})}})}return s},linkViewPicFin(){const s=document.getElementById(this.data.message_id+"-linkview-img");if(s!==null){const e=s.naturalWidth,n=s.naturalHeight;e>n&&(this.linkViewStyle="large")}},showUserInfo(s){const e=s.currentTarget,n=e.dataset.id,o=e.dataset.group,a=s||window.event,p=a.offsetX,g=a.clientY;O.send("get_group_member_info",{group_id:o,user_id:n},"getGroupMemberInfo_"+p+"_"+g)},hiddenUserInfo(){i.chatInfo.info.now_member_info!==void 0&&(i.chatInfo.info.now_member_info=void 0)},getRepMsg(s){const e=this.runtimeData.messageList.filter(n=>n.message_id==s);return e.length===1?e[0].message.length>0?e[0].sender.nickname+": "+K(e[0]):this.$t("（获取回复消息失败）"):null},downloadFile(s,e){const n=function(o){o.lengthComputable&&(s.downloadingPercentage=Math.floor(o.loaded/o.total*100))};s.url?Bs(s.url,s.name,n):O.send("get_file_url",{id:i.chatInfo.show.id,message_id:e,fid:s.fid},"downloadFile_"+e+"_"+s.name)},textClick(s){const e=s.target;if(e.dataset.link){const n=e.dataset.link;ss(n)}},loadFileBase(s,e,n){const o=e.split(".").pop();let a=-1;return i.messageList.forEach((p,g)=>{p.message_id===n&&(a=g)}),o&&i.messageList[a].fileView==null&&["jpg","jpeg","png","gif","bmp","webp","mp4","avi","mkv","flv","txt","md"].includes(o)&&(i.messageList[a].fileView={},s.url?a!==-1&&(i.messageList[a].fileView.url=s.url,i.messageList[a].fileView.ext=o):O.send("get_file_url",{id:i.chatInfo.show.id,message_id:n,fid:s.fid},"loadFileBase_"+this.data.message_id+"_"+o)),e},getTxtUrl(s,e){let n=-1;i.messageList.forEach((o,a)=>{o.message_id===e&&(n=a)}),fetch(s).then(o=>o.blob()).then(o=>{if(n!==-1){const a=new FileReader;a.readAsText(o,"utf-8"),a.onload=function(){const p=a.result;i.messageList[n].fileView.txt=p.length>300?p.slice(0,300)+"…":p}}})},hasCard(){let s=!1;return this.data.message.forEach(e=>{(e.type==="json"||e.type==="xml")&&(s=!0)}),s},sendPoke(){this.$emit("sendPoke",this.data.sender.user_id)}}}),Yu=["id","data-raw","data-sender","data-time"],Xu=["src"],xu={key:0,class:"message-space"},sg={key:0},eg={key:0},ng={key:1,class:"msg-text"},tg=["innerHTML"],ig=["src"],og=["title","alt","src"],rg=["alt","src","title"],ag={key:1,class:"msg-face-long"},ug={key:6,style:{"font-style":"italic",opacity:"0.7"}},gg=["data-id","data-group"],pg={key:1,class:"download-bar",xmlns:"http://www.w3.org/2000/svg"},cg=["stroke-dasharray"],lg={key:0,class:"file-view"},mg=["src"],dg={key:1,controls:"",muted:"",autoplay:""},fg=["src","type"],_g={key:2,class:"txt"},vg={key:9,class:"msg-video"},hg={controls:"",muted:"",autoplay:""},bg=["src"],yg=["onClick"],Eg=["onClick"],wg={key:12,class:"msg-unknown"},Og=["id","src"],Dg={class:"body"},Ig=["href"],Lg={key:1,class:"sending"},qg={class:"emoji-like-body"},kg=["src"],Cg={style:{display:"none"}};function Ag(s,e,n,o,a,p){var l,_,E;const g=C("font-awesome-icon"),u=C("CardMessage");return m(),d("div",{id:"chat-"+s.data.message_id,class:L("message"+(s.type?" "+s.type:"")+(s.data.revoke?" revoke":"")+(s.isMe?" me":"")+(s.selected?" selected":"")),"data-raw":s.getMsgRawTxt(s.data),"data-sender":s.data.sender.user_id,"data-time":s.data.time,onMouseleave:e[9]||(e[9]=(...h)=>s.hiddenUserInfo&&s.hiddenUserInfo(...h))},[y(t("img",{name:"avatar",src:"https://q1.qlogo.cn/g?b=qq&s=0&nk="+s.data.sender.user_id,onDblclick:e[0]||(e[0]=(...h)=>s.sendPoke&&s.sendPoke(...h))},null,40,Xu),[[T,!s.isMe||s.type=="merge"]]),s.isMe&&s.type!="merge"?(m(),d("div",xu)):b("",!0),t("div",{class:L(s.isMe?s.type=="merge"?"message-body":"message-body me":"message-body")},[s.runtimeData.chatInfo.show.type=="group"&&!s.isMe&&((l=s.senderInfo)!=null&&l.title)&&((_=s.senderInfo)==null?void 0:_.title)!=""?(m(),d("span",sg,c((E=s.senderInfo)==null?void 0:E.title),1)):b("",!0),s.data.sender.card||s.data.sender.nickname?y((m(),d("a",{key:1},c(s.data.sender.card?s.data.sender.card:s.data.sender.nickname),513)),[[T,!s.isMe||s.type=="merge"]]):y((m(),d("a",{key:2},c(s.isMe?s.runtimeData.loginInfo.nickname:s.runtimeData.chatInfo.show.name),513)),[[T,!s.isMe||s.type=="merge"]]),t("div",null,[s.hasCard()?(m(!0),d(I,{key:1},$(s.data.message,(h,f)=>(m(),d(I,{key:s.data.message_id+"-m-"+f},[h.type=="xml"||h.type=="json"?(m(),V(u,{key:0,id:s.data.message_id,item:h},null,8,["id","item"])):b("",!0)],64))),128)):(m(!0),d(I,{key:0},$(s.data.message,(h,f)=>(m(),d("div",{key:s.data.message_id+"-m-"+f,class:L(s.View.isMsgInline(h.type)?"msg-inline":"")},[h.type===void 0?(m(),d("div",eg)):s.isDebugMsg?(m(),d("span",ng,c(h),1)):h.type=="text"?y((m(),d("span",{key:2,class:"msg-text",onClick:e[1]||(e[1]=(...q)=>s.textClick&&s.textClick(...q)),innerHTML:s.parseText(h.text)},null,8,tg)),[[T,h.text!==""]]):h.type=="image"&&h.file=="marketface"?(m(),d("img",{key:3,class:L(s.imgStyle(s.data.message.length,f,h.asface)+" msg-mface"),src:h.url,onLoad:e[2]||(e[2]=(...q)=>s.scrollButtom&&s.scrollButtom(...q)),onError:e[3]||(e[3]=(...q)=>s.imgLoadFail&&s.imgLoadFail(...q))},null,42,ig)):h.type=="image"?(m(),d("img",{key:4,title:s.$t("预览图片"),alt:s.$t("图片"),class:L(s.imgStyle(s.data.message.length,f,h.asface)),src:h.url,onLoad:e[4]||(e[4]=(...q)=>s.scrollButtom&&s.scrollButtom(...q)),onError:e[5]||(e[5]=(...q)=>s.imgLoadFail&&s.imgLoadFail(...q)),onClick:e[6]||(e[6]=q=>s.imgClick(s.data.message_id))},null,42,og)):h.type=="face"?(m(),d(I,{key:5},[s.getFace(h.id)?(m(),d("img",{key:0,alt:h.text,class:"msg-face",src:s.getFace(h.id),title:h.text},null,8,rg)):h.id==394?(m(),d("span",ag,[(m(),d(I,null,$(15,q=>t("span",{key:s.data.message_id+"-l-"+q},"🐲")),64))])):(m(),V(g,{key:2,class:L("msg-face-svg"+(s.isMe?" me":"")),icon:["fas","face-grin-wide"]},null,8,["class"]))],64)):h.type=="bface"?(m(),d("span",ug," [ "+c(s.$t("图片"))+"："+c(h.text)+" ] ",1)):h.type=="at"?(m(),d("div",{key:7,class:L(s.getAtClass(h.qq))},[t("a",{"data-id":h.qq,"data-group":s.data.group_id,onMouseenter:e[7]||(e[7]=(...q)=>s.showUserInfo&&s.showUserInfo(...q))},c(s.getAtName(h)),41,gg)],2)):h.type=="file"?(m(),d("div",{key:8,class:L("msg-file"+(s.isMe?" me":""))},[v(g,{icon:["fas","file"]}),t("div",null,[t("div",null,[t("p",null,c(s.loadFileBase(h,h.name,s.data.message_id)),1),t("a",null,"（"+c(s.getSizeFromBytes(h.size))+"）",1)]),t("i",null,c(h.md5),1)]),t("div",null,[h.downloadingPercentage===void 0?(m(),V(g,{key:0,icon:["fas","angle-down"],onClick:q=>s.downloadFile(h,s.data.message_id)},null,8,["onClick"])):b("",!0),h.downloadingPercentage!==void 0?(m(),d("svg",pg,[e[10]||(e[10]=t("circle",{cx:"50%",cy:"50%",r:"40%","stroke-width":"15%",fill:"none","stroke-linecap":"round"},null,-1)),t("circle",{cx:"50%",cy:"50%",r:"40%","stroke-width":"15%",fill:"none","stroke-dasharray":h.downloadingPercentage===void 0?"0,10000":`${Math.floor(2*Math.PI*25)*h.downloadingPercentage/100},10000`},null,8,cg)])):b("",!0)]),s.data.fileView&&Object.keys(s.data.fileView).length>0?(m(),d("div",lg,[["jpg","jpeg","png","gif","bmp","webp"].includes(s.data.fileView.ext)?(m(),d("img",{key:0,src:s.data.fileView.url},null,8,mg)):b("",!0),["mp4","avi","mkv","flv"].includes(s.data.fileView.ext)?(m(),d("video",dg,[t("source",{src:s.data.fileView.url,type:"video/"+s.data.fileView.ext},null,8,fg),e[11]||(e[11]=R(" 现在还有不支持 video tag 的浏览器吗？ "))])):b("",!0),["txt","md"].includes(s.data.fileView.ext)&&h.size<2e6?(m(),d("span",_g,[t("a",null,"> "+c(h.name)+" - "+c(s.$t("文件预览")),1),R(" "+c(s.getTxtUrl(s.data.fileView.url,s.data.message_id))+c(s.data.fileView.txt),1)])):b("",!0)])):b("",!0)],2)):h.type=="video"?(m(),d("div",vg,[t("video",hg,[t("source",{src:h.url,type:"video/mp4"},null,8,bg),e[12]||(e[12]=R(" 现在还有不支持 video tag 的浏览器吗？ "))])])):h.type=="forward"?(m(),d("span",{key:10,class:"msg-unknown",style:{cursor:"pointer"},onClick:q=>s.View.getForwardMsg(h.id)},c(s.$t("（点击查看合并转发消息）")),9,yg)):h.type=="reply"?(m(),d("div",{key:11,class:L(s.isMe?s.type=="merge"?"msg-replay":"msg-replay me":"msg-replay"),onClick:q=>s.scrollToMsg(h.id)},[v(g,{icon:["fas","reply"]}),t("a",{class:L(s.getRepMsg(h.id)?"":"msg-unknown"),style:{cursor:"pointer"}},c(s.getRepMsg(h.id)??s.$t("（查看回复消息）")),3)],10,Eg)):(m(),d("span",wg,c("( "+s.$t("不支持的消息")+": "+h.type+" )"),1))],2))),128)),s.pageViewInfo!==void 0&&Object.keys(s.pageViewInfo).length>0?(m(),d("div",{key:2,class:L("msg-link-view "+s.linkViewStyle)},[t("div",{class:L("bar"+(s.isMe?" me":""))},null,2),t("div",null,[s.pageViewInfo.img!==void 0?(m(),d("img",{key:0,id:s.data.message_id+"-linkview-img",alt:"预览图片",title:"查看图片",src:s.pageViewInfo.img,onLoad:e[8]||(e[8]=(...h)=>s.linkViewPicFin&&s.linkViewPicFin(...h))},null,40,Og)):b("",!0),t("div",Dg,[t("p",null,c(s.pageViewInfo.site),1),t("span",{href:s.pageViewInfo.url},c(s.pageViewInfo.title),9,Ig),t("span",null,c(s.pageViewInfo.desc),1)])])],2)):b("",!0)])],2),s.data.fake_msg==!0?(m(),d("div",Lg,[v(g,{icon:["fas","spinner"]})])):b("",!0),s.data.emoji_like?(m(),d("div",{key:2,class:L("emoji-like"+(s.isMe?" me":""))},[t("div",qg,[(m(!0),d(I,null,$(s.data.emoji_like,h=>y((m(),d("div",{key:"respond-"+s.data.message_id+"-"+h.emoji_id},[t("img",{loading:"lazy",src:s.getFace(h.emoji_id)},null,8,kg),t("span",null,c(h.count),1)])),[[T,s.getFace(h.emoji_id)!=""]])),128))])],2)):b("",!0),t("code",Cg,c(s.data.raw_message),1)],42,Yu)}const Fs=B(Zu,[["render",Ag]]),$g=Object.freeze(Object.defineProperty({__proto__:null,default:Fs},Symbol.toStringTag,{value:"Module"})),Tg=S({name:"NoticeBody",props:["data","id"],data(){return{trueLang:Z(),getTimeConfig:Re,info:rn(this.data)}},async mounted(){var e,n;let s=null;if(i.tags.isElectron){const o=i.reader;o&&(s=await o.invoke("win:getWindowInfo"))}if(this.info.notice_type&&this.info.notice_type.indexOf("recall")>=0)if(i.chatInfo.show.type==="group"){const o=this.info.operator_id;if(i.chatInfo.info.group_members!==void 0){const a=i.chatInfo.info.group_members.filter(p=>p.user_id===Number(o));a.length===1?this.info.name=a[0].card===""||a[0].card==null?a[0].nickname:a[0].card:this.info.name=o}else this.info.name=o}else this.info.name=i.chatInfo.show.name;if(this.info.sub_type==="poke"&&this.info.pokeMe){let o=document.getElementById("app");if(i.tags.isElectron&&(o=(e=document.getElementById("notice-"+this.id))==null?void 0:e.getElementsByClassName("space")[0]),o){const a=bn.timeline({targets:o});(((n=document.getElementById("app"))==null?void 0:n.offsetWidth)??500)<500&&(navigator.vibrate([10,740,10]),a.add({translateX:30,duration:600,easing:"cubicBezier(.44,.09,.53,1)"}).add({translateX:0,duration:150,easing:"cubicBezier(.44,.09,.53,1)"}).add({translateX:[0,25,0],duration:500,easing:"cubicBezier(.21,.27,.82,.67)"}).add({targets:{},duration:1e3}).add({translateX:70,duration:1300,easing:"cubicBezier(.89,.72,.72,1.13)"}).add({translateX:0,duration:100,easing:"easeOutSine"})),a.add({translateX:[-10,10,-5,5,0],duration:500,easing:"cubicBezier(.44,.09,.53,1)"}),a.change=()=>{var p,g;if(o){(g=(p=o.parentElement)==null?void 0:p.parentElement)==null||g.classList.add("poking");const u=o.style.transform;let l=Number((u.match(/-?\d+\.?\d*/g)??[0])[0]);if(l=Math.round(l),i.tags.isElectron&&s){const _=i.reader;_&&_.send("win:move",{x:s.x+l,y:s.y})}}},a.changeComplete=()=>{var p,g;o&&((g=(p=o.parentElement)==null?void 0:p.parentElement)==null||g.classList.remove("poking"))}}}},methods:{isMe(s){return i.loginInfo.uin===s},getName(s){const e=i.chatInfo.info.group_members.filter(n=>n.user_id===s);return e.length===1?e[0].card===""||e[0].card==null?e[0].nickname:e[0].card:s},fTime(s){const e=Math.floor(s/86400),n=Math.floor(s%86400/3600),o=Math.floor(s%3600/60),a=s%60;let p="";return e>0&&(p+=`${e} ${this.$t("天")} `),n>0&&(p+=`${n} ${this.$t("小时")} `),o>0&&(p+=`${o} ${this.$t("分钟")} `),a>0&&(p+=`${a} ${this.$t("秒")} `),p}}}),Pg=["id"],Vg={key:0,class:"note-recall note-base"},Fg={key:1,class:"note-ban note-base"},Mg={key:1},Rg=["innerHTML"],Bg={key:3,class:"note-time note-base"};function Sg(s,e,n,o,a,p){return m(),d("div",{id:"notice-"+s.id,class:"note"},[s.data.notice_type&&s.data.notice_type.indexOf("recall")>=0?(m(),d("div",Vg,[t("a",null,c(s.info.name),1),t("span",null,c(s.$t("撤回了一条消息")),1),e[0]||(e[0]=t("div",null,null,-1))])):b("",!0),s.data.notice_type=="group_ban"?(m(),d("div",Fg,[s.data.sub_type==="ban"?(m(),d(I,{key:0},[s.isMe(s.data.user_id)?(m(),d(I,{key:0},[t("span",null,c(s.$t("成员类型_admin")),1),t("a",null," "+c(s.getName(s.data.operator_id))+" ",1),t("span",null,c(s.$t("禁言了你")),1),t("span",null," "+c(s.fTime(s.data.duration)),1)],64)):(m(),d(I,{key:1},[t("span",null,c(s.$t("管理员禁言了")),1),t("a",null," "+c(s.getName(s.data.user_id))+" ",1),t("span",null,c(s.fTime(s.data.duration)),1)],64))],64)):(m(),d("span",Mg,c(s.$t("管理员解除了 {name} 的禁言",{name:s.isMe(s.data.user_id)?s.$t("你"):s.getName(s.data.user_id)})),1))])):b("",!0),s.data.sub_type==="poke"?(m(),d("div",{key:2,class:"note-notify note-base",innerHTML:s.data.str+"<div class='space'</div>"},null,8,Rg)):b("",!0),s.data.sub_type==="time"?(m(),d("div",Bg,[t("a",null,c(Intl.DateTimeFormat(s.trueLang,s.getTimeConfig(new Date(s.data.time*1e3))).format(new Date(s.data.time*1e3))),1)])):b("",!0)],8,Pg)}const Ng=B(Tg,[["render",Sg]]),Ug=S({name:"FacePan",components:{BcTab:ne},props:["display"],emits:["addSpecialMsg"],data(){return{getFace:ge,Option:k,runtimeData:i,baseFaceMax:348,stickerPage:1}},mounted(){i.stickerCache===void 0&&i.jsonMap.roaming_stamp&&(i.jsonMap.roaming_stamp.pagerType=="full"?O.send(i.jsonMap.roaming_stamp.name,{count:48},"getRoamingStamp_48"):O.send(i.jsonMap.roaming_stamp.name,{},"getRoamingStamp"))},methods:{addSpecialMsg(s,e){this.$emit("addSpecialMsg",{addText:e,msgObj:s})},addBaseFace(s){this.addSpecialMsg({type:"face",id:s},!0)},addImgFace(s){this.addSpecialMsg({type:"image",file:s,subType:1},!0)},stickersScroll(s){const e=s.target;if(e.scrollHeight-e.scrollTop===e.clientHeight&&i.stickerCache&&i.jsonMap.roaming_stamp.pagerType=="full"&&i.stickerCache[i.stickerCache.length-1]!="end"){const n=48+48*this.stickerPage;O.send(i.jsonMap.roaming_stamp.name,{count:n},"getRoamingStamp_"+n),this.stickerPage++}}}}),jg={class:"ss-card face-pan"},Hg={icon:"fa-solid fa-face-laugh-squint"},Qg={class:"base-face"},zg=["data-id","onClick"],Wg=["src"],Gg={icon:"fa-solid fa-heart"},Kg=["src","onClick"],Jg={class:"ss-card"};function Zg(s,e,n,o,a,p){const g=C("font-awesome-icon"),u=C("BcTab");return m(),d("div",jg,[v(u,null,{default:z(()=>[t("div",Hg,[t("div",Qg,[(m(!0),d(I,null,$(s.baseFaceMax,l=>y((m(),d("div",{key:"base-face-"+l,"data-id":l,onClick:_=>s.addBaseFace(l)},[t("img",{loading:"lazy",src:s.getFace(l)},null,8,Wg)],8,zg)),[[T,s.getFace(l)!=""]])),128))])]),t("div",Gg,[t("div",{class:"face-stickers",onScroll:e[0]||(e[0]=(...l)=>s.stickersScroll&&s.stickersScroll(...l))},[(m(!0),d(I,null,$(s.runtimeData.stickerCache,(l,_)=>y((m(),d("img",{key:"stickers-"+_,loading:"lazy",src:l,onClick:E=>s.addImgFace(l)},null,8,Kg)),[[T,l!="end"]])),128)),y(t("div",Jg,[v(g,{icon:["fas","face-dizzy"]}),t("span",null,c(s.$t("一无所有")),1)],512),[[T,s.runtimeData.stickerCache&&s.runtimeData.stickerCache.length<=0]])],32)])]),_:1})])}const Yg=B(Ug,[["render",Zg]]),Xg=S({name:"ViewChat",components:{Info:Nu,MsgBody:Fs,NoticeBody:Ng,FacePan:Yg},props:["chat","list","mergeList","mumberInfo","imgView"],data(){return{uuid:Te,fun:{getMsgRawTxt:K},Option:k,getFace:ge,Connector:O,runtimeData:i,getTimeConfig:Re,forwardList:i.userList,trueLang:Z(),multipleSelectList:[],tags:{nowGetHistroy:!1,showBottomButton:!0,showMoreDetail:!1,showMsgMenu:!1,showForwardPan:!1,openedMenuMsg:{},openChatInfo:!1,isReply:!1,isJinLoading:!1,onAtFind:!1,menuDisplay:{add:!0,relpy:!0,forward:!0,select:!0,copy:!0,copySelect:!1,downloadImg:!1,revoke:!1,at:!0,poke:!1,remove:!1,respond:!1,showRespond:!0},search:{userId:-1,list:W(this.list)},msgTouch:{x:-1,y:-1,msgOnTouchDown:!1,onMove:"no"}},details:[{open:!1},{open:!1},{open:!1},{open:!1}],msgMenus:[],NewMsgNum:0,msg:"",imgCache:[],sendCache:[],selectedMsg:null,selectCache:"",replyMsgInfo:null,atFindList:null,getImgList:[],respondIds:[4,5,8,9,10,12,14,16,21,23,24,25,26,27,28,29,30,32,33,34,38,39,41,42,43,49,53,60,63,66,74,75,76,78,79,85,89,96,97,98,99,100,101,102,103,104,106,109,111,116,118,120,122,123,124,125,129,144,147,171,173,174,175,176,179,180,181,182,183,201,203,212,214,219,222,227,232,240,243,246,262,264,265,266,267,268,269,270,271,272,273,277,278,281,282,284,285,287,289,290,293,294,297,298,299,305,306,307,314,315,318,319,320,322,324,326]}},watch:{chat(){const s=this.$options.data(this);this.tags=s.tags,this.msgMenus=s.msgMenus,this.sendCache=[],this.imgCache=[],this.multipleSelectList=[],this.initMenuDisplay()}},mounted(){this.updateList(this.list.length,0),this.$watch(()=>this.list.length,this.updateList),this.$watch(()=>this.chat.info.jin_info.list.length,()=>{this.tags.isJinLoading=!1});const s=w.config.globalProperties.$viewer;this.$watch(()=>s.hiding,e=>{e&&(i.chatInfo.info.image_list=this.getImgList)})},methods:{isShowTime(s,e,n=!1){return n?!0:s==null?!1:e-s>=300},chatScroll(s){const e=s.target,n=document.getElementById("send-more");e.scrollTop===0&&this.list.length>0&&this.loadMoreHistory(),e.scrollTop+e.clientHeight>=e.scrollHeight&&(this.NewMsgNum=0,this.tags.showBottomButton=!1,n&&(n.style.transition="background .3s",n.classList.add("btn"))),e.scrollTop<e.scrollHeight-e.clientHeight*2&&this.tags.showBottomButton!==!0&&(this.tags.showBottomButton=!0),e.scrollTop<e.scrollHeight-e.clientHeight-10&&n&&(n.style.transition="background 1s",n.classList.remove("btn"))},loadMoreHistory(){var s;if(!this.tags.nowGetHistroy&&i.tags.canLoadHistory!==!1){const e=this.list[0].message_id;this.tags.nowGetHistroy=!0;const n=((s=i.jsonMap.message_list)==null?void 0:s.pagerType)=="full",o=i.chatInfo.show.type,a=i.chatInfo.show.id;let p;i.jsonMap.message_list&&o!="group"?p=i.jsonMap.message_list.private_name:p=i.jsonMap.message_list.name,O.send(p??"get_chat_history",{group_id:o=="group"?a:void 0,user_id:o!="group"?a:void 0,message_id:e,count:n?i.messageList.length+20:20},"getChatHistory")}},scrollTo(s,e=!0){const n=document.getElementById("msgPan");n!==null&&s&&(e===!1?n.style.scrollBehavior="unset":n.style.scrollBehavior="smooth",n.scrollTop=s,n.style.scrollBehavior="smooth")},scrollBottom(s=!1){const e=document.getElementById("msgPan");e!==null&&this.scrollTo(e.scrollHeight,s)},scrollToMsg(s){Be(s)||new M().add(P.INFO,this.$t("无法定位上下文"))},imgLoadedScroll(){document.getElementById("msgPan")&&!this.tags.showBottomButton&&this.scrollBottom()},mainKey(s){!s.shiftKey&&s.keyCode==13&&this.msg!=""&&this.sendMsg()},mainKeyUp(s){const e=new G;if(!s.shiftKey&&s.keyCode==13&&this.msg==`
`&&(this.msg=""),s.keyCode!=13){const n=this.msg.substring(this.msg.length-1);if(!this.tags.onAtFind&&n=="@"&&i.chatInfo.info.group_members.length>0&&i.chatInfo.show.type=="group"&&(e.add(N.UI,"开始匹配群成员列表 ……"),this.tags.onAtFind=!0),this.tags.onAtFind)if(this.msg.lastIndexOf("@")<0)e.add(N.UI,"匹配群成员列表被打断 ……"),this.tags.onAtFind=!1,this.atFindList=null;else{const o=this.msg.substring(this.msg.lastIndexOf("@")+1).toLowerCase();o!=""&&(this.atFindList=i.chatInfo.info.group_members.filter(a=>a.card!=""&&a.card!=null&&a.card.toLowerCase().indexOf(o)>=0||a.nickname.toLowerCase().indexOf(o)>=0||o==a.user_id.toString()))}}},mainSubmit(){this.msg!=""&&this.sendMsg()},choiceAt(s){s!=null&&(this.msg=this.msg.substring(0,this.msg.lastIndexOf("@")),this.addSpecialMsg({msgObj:{type:"at",qq:s},addText:!0})),this.toMainInput(),this.tags.onAtFind=!1,this.atFindList=null},selectSQIn(){const s=document.getElementById("main-input");if(s!==null&&s.selectionStart===s.selectionEnd){let e=-1;typeof s.selectionStart=="number"&&(e=s.selectionStart);const n=Xs.getSQList(this.msg);n!=null&&n.forEach(o=>{const a=this.msg.indexOf(o),p=a+o.length;a!==-1&&e>a&&e<p&&this.$nextTick(()=>{s.selectionStart=a,s.selectionEnd=p})})}},showMsgMeun(s,e){var g;if(this.selectedMsg=e,k.get("log_level")==="debug"&&new G().debug("右击消息："+e),this.multipleSelectList.length>0)return;const n=document.getElementById("msgMenu");let o=s.currentTarget;const a=s.target;let p="member";if(i.chatInfo.show.type=="group"&&i.chatInfo.info.group_members&&i.chatInfo.info.group_members.forEach(u=>{u.user_id==e.sender.user_id&&(p=u.role)}),o==null&&this.tags.openedMenuMsg&&(o=this.tags.openedMenuMsg.msg),n!==null&&o!==null){if(vs("close_respond")==!0&&(this.tags.menuDisplay.showRespond=!1),a.nodeName=="IMG"&&a.name=="avatar")Object.keys(this.tags.menuDisplay).forEach(f=>{this.tags.menuDisplay[f]=!1}),this.tags.menuDisplay.showRespond=!1,this.tags.menuDisplay.at=!0,this.tags.menuDisplay.poke=!0,this.tags.menuDisplay.remove=!0,(i.chatInfo.show.type!="group"||e.sender.user_id===i.loginInfo.uin||i.chatInfo.info.me_info.role==="member"||p=="owner"||p=="admin")&&(this.tags.menuDisplay.remove=!1),e.sender.user_id===i.loginInfo.uin&&(this.tags.menuDisplay.at=!1);else{(e.sender.user_id===i.loginInfo.uin||i.chatInfo.info.me_info.role==="admin"||i.chatInfo.info.me_info.role==="owner")&&(this.tags.menuDisplay.revoke=!0),e.revoke===!0&&(this.tags.menuDisplay.relpy=!1,this.tags.menuDisplay.forward=!1,this.tags.menuDisplay.revoke=!1,this.tags.menuDisplay.select=!1);const f=document.getSelection(),q=(g=f==null?void 0:f.anchorNode)==null?void 0:g.parentElement;let D=null,A=q;if(A)for(;A.className!="chat";){if(A.className.startsWith("message")&&A.className.indexOf("-")<0){D=A;break}if(A=A.parentElement,!A)break}q&&q.className.indexOf("msg-text")>-1&&f.focusNode==f.anchorNode&&D&&D.id==o.id&&(this.selectCache=f.toString(),this.selectCache.length>0&&(this.tags.menuDisplay.copySelect=!0));const as=["xml","json"];e.message.forEach(js=>{as.indexOf(js.type)>0&&(this.tags.menuDisplay.forward=!1,this.tags.menuDisplay.add=!1)}),a.nodeName=="IMG"&&(this.tags.menuDisplay.downloadImg=a.src)}const u=s||window.event;let l=u.clientX-o.getBoundingClientRect().left+20,_=u.clientY;_==null&&(l=this.tags.openedMenuMsg.x-o.getBoundingClientRect().left+20,_=this.tags.openedMenuMsg.y),n.style.marginLeft=l+"px",n.style.marginTop=_+"px";let E=n.clientWidth;this.tags.menuDisplay.showRespond&&(E=n.children[0].clientWidth);const h=o.offsetWidth;l+E>h+27&&(n.style.marginLeft=h+7-E+"px"),this.tags.showMsgMenu=!0,setTimeout(()=>{const f=n.clientHeight,q=document.body.clientHeight;_+f>q-20&&(n.classList.add("topOut"),n.style.marginTop=q-f-10+"px")},100),this.tags.openedMenuMsg=o}},initMenuDisplay(){this.tags.menuDisplay={add:!0,relpy:!0,forward:!0,select:!0,copy:!0,copySelect:!1,downloadImg:!1,revoke:!1,at:!1,poke:!1,remove:!1,respond:!1,showRespond:!0}},replyMsg(s=!0){const e=this.selectedMsg;if(e!==null){const n=e.message_id;this.addSpecialMsg({msgObj:{type:"reply",id:String(n)},addText:!1,addTop:!0}),this.tags.isReply=!0,this.toMainInput(),s&&this.closeMsgMenu()}},cancelReply(){this.sendCache=this.sendCache.filter(s=>s.type!=="reply"),this.tags.isReply=!1},cancelForward(){this.forwardList=i.userList,this.tags.showForwardPan=!1,this.closeMsgMenu()},searchForward(s){const e=s.target.value;this.forwardList=i.userList.filter(n=>{const o=(n.user_id?n.nickname+n.remark:n.group_name).toLowerCase(),a=n.user_id?n.user_id:n.group_id;return o.indexOf(e.toLowerCase())!==-1||a.toString()===e})},showForWard(){this.tags.showForwardPan=!0,i.onMsgList.reverse().forEach(e=>{const n=this.forwardList.indexOf(e);n>-1&&(this.forwardList.splice(n,1),this.forwardList.unshift(e))}),i.onMsgList.reverse()},forwardSelf(){if(this.selectedMsg){const s=this.selectedMsg;os(this.chat.show.id,this.chat.show.type,s.message,!0)}this.closeMsgMenu()},intoMultipleSelect(){this.selectedMsg&&this.multipleSelectList.push(this.selectedMsg.message_id),this.closeMsgMenu()},forwardMsg(s){const e=this.selectedMsg,n=s.group_id?s.group_id:s.user_id;if(this.multipleSelectList.length>0&&e){const o=this.multipleSelectList.map(g=>{const u=i.messageList.find(l=>l.message_id==g);if(u)return u}),a={app:"com.tencent.multimsg",meta:{detail:{source:"合并转发的消息",news:[...o.slice(0,3).map(g=>({text:(g.sender.card&&g.sender.card!=""?g.sender.card:g.sender.nickname)+": "+K(g)}))],summary:"查看"+this.multipleSelectList.length+"条转发消息",resid:""}}};e.message=[{type:"json",data:JSON.stringify(a),id:""}],e.sender={user_id:i.loginInfo.uin,nickname:i.loginInfo.nickname};const p={title:this.$t("合并转发消息"),template:Fs,templateValue:rs({data:e,type:"forward"}),button:[{text:this.$t("取消"),fun:()=>{i.popBoxList.shift()}},{text:this.$t("确定"),master:!0,fun:()=>{const g=o.map(u=>({type:"node",id:u.message_id}));os(this.chat.show.id,this.chat.show.type,g,!0),i.popBoxList.shift()}}]};i.popBoxList.push(p)}else if(this.selectedMsg&&e){const o={title:this.$t("转发消息"),template:Fs,templateValue:rs({data:e,type:"forward"}),button:[{text:this.$t("取消"),fun:()=>{i.popBoxList.shift()}},{text:this.$t("确定"),master:!0,fun:()=>{os(this.chat.show.id,this.chat.show.type,e.message,!0),i.popBoxList.shift()}}]};i.popBoxList.push(o)}this.cancelForward(),i.onMsgList.indexOf(s)<0&&i.onMsgList.push(s),this.$nextTick(()=>{const o=document.getElementById("user-"+n);o&&o.click()})},sendRespond(s){const e=this.selectedMsg;if(e!==null){const n=e.message_id;O.send(i.jsonMap.send_respond.name,{message_id:n,emoji_id:String(s)},"SendRespondBack_"+n+"_"+s)}this.closeMsgMenu()},copyMsg(){const s=this.selectedMsg;if(s!==null){s.raw_message||(s.raw_message=K(s));const e=new M;w.config.globalProperties.$copyText(s.raw_message).then(()=>{e.add(P.INFO,this.$t("复制成功"),!0)},()=>{e.add(P.ERR,this.$t("复制失败"),!0)})}this.closeMsgMenu()},copySelectMsg(){if(this.selectCache!=""){const s=new M;w.config.globalProperties.$copyText(this.selectCache).then(()=>{s.add(P.INFO,this.$t("复制成功"),!0)},()=>{s.add(P.ERR,this.$t("复制失败"),!0)})}this.closeMsgMenu()},downloadImg(){const s=this.tags.menuDisplay.downloadImg;s!=!1&&Bs(s,"img.png",()=>{}),this.closeMsgMenu()},revokeMsg(){const s=this.selectedMsg;if(s!==null){const e=s.message_id;O.send("delete_msg",{message_id:e}),this.closeMsgMenu()}},removeUser(){const s=this.selectedMsg;if(s!==null){const e={title:this.$t("提醒"),html:`<span>${this.$t("真的要将 {user} 移出群聊吗",{user:s.sender.nickname})}</span>`,button:[{text:w.config.globalProperties.$t("确定"),fun:()=>{s&&(O.send("set_group_kick",{group_id:i.chatInfo.show.id,user_id:s.sender.user_id},"setGroupKick"),this.closeMsgMenu(),i.popBoxList.shift())}},{text:w.config.globalProperties.$t("取消"),master:!0,fun:()=>{i.popBoxList.shift()}}]};i.popBoxList.push(e)}},getPopPost(){const s=this.mumberInfo.x===void 0?"0":this.mumberInfo.x,e=this.mumberInfo.y===void 0?"0":this.mumberInfo.y;return"margin-left:"+s+"px;margin-top:"+e+"px;"},closeMsgMenu(){this.tags.showMsgMenu=!1,this.tags.openedMenuMsg&&(this.tags.openedMenuMsg=null),setTimeout(()=>{this.initMenuDisplay()},300)},closeMergeMsg(){this.runtimeData.mergeMessageList=void 0},openChatInfoPan(){if(this.tags.openChatInfo=!this.tags.openChatInfo,this.tags.openChatInfo){if(this.chat.show.type==="group"&&this.chat.info.group_info.gc!==this.chat.show.id){const e=`https://qinfo.clt.qq.com/cgi-bin/qun_info/get_group_info_all?gc=${this.chat.show.id}&bkn=${i.loginInfo.bkn}`;O.send("http_proxy",{url:e},"getMoreGroupInfo")}else if(this.chat.show.type==="user"&&this.chat.info.user_info.uin!==this.chat.show.id){const e="https://find.qq.com/proxy/domain/cgi.find.qq.com/qqfind/find_v11?backver=2",n=`bnum=15&pagesize=15&id=0&sid=0&page=0&pageindex=0&ext=&guagua=1&gnum=12&guaguan=2&type=2&ver=4903&longitude=116.405285&latitude=39.904989&lbs_addr_country=%E4%B8%AD%E5%9B%BD&lbs_addr_province=%E5%8C%97%E4%BA%AC&lbs_addr_city=%E5%8C%97%E4%BA%AC%E5%B8%82&keyword=${this.chat.show.id}&nf=0&of=0&ldw=${i.loginInfo.bkn}`;O.send("http_proxy",{url:e,method:"post",data:n},"getMoreUserInfo")}const s=i.jsonMap.group_notices.name;if(this.chat.show.type==="group"&&(this.chat.info.group_notices===void 0||Object.keys(this.chat.info.group_notices).length===0))if(s&&s!="http_proxy")O.send(s,{group_id:this.chat.show.id},"getGroupNotices");else{const e=`https://web.qun.qq.com/cgi-bin/announce/get_t_list?bkn=${i.loginInfo.bkn}&qid=${this.chat.show.id}&ft=23&s=-1&n=20`;O.send("http_proxy",{url:e},"getGroupNotices")}if(this.chat.show.type==="group"&&Object.keys(this.chat.info.group_files).length===0){const e=`https://pan.qun.qq.com/cgi-bin/group_file/get_file_list?gc=${this.chat.show.id}&bkn=${i.loginInfo.bkn}&start_index=0&cnt=30&filter_code=0&folder_id=%2F&show_onlinedoc_folder=0`;O.send("http_proxy",{url:e},"getGroupFiles")}}},fileLoad(s){const e=s.currentTarget;if(e.scrollTop+e.clientHeight>=e.scrollHeight&&this.chat.info.group_files.next_index!==0&&this.chat.info.group_files.next_index!==this.chat.info.group_files.total_cnt){const n=`https://pan.qun.qq.com/cgi-bin/group_file/get_file_list?gc=${this.chat.show.id}&bkn=${i.loginInfo.bkn}&start_index=${this.chat.info.group_files.next_index}&cnt=30&filter_code=0&folder_id=%2F&show_onlinedoc_folder=0`;O.send("http_proxy",{url:n},"getMoreGroupFiles")}},deleteImg(s){this.imgCache.splice(s,1)},addSpecialMsg(s){if(s!==void 0){const e=this.sendCache.length;return this.sendCache.push(s.msgObj),s.addText===!0&&(s.addTop===!0?this.msg="[SQ:"+e+"]"+this.msg:this.msg+="[SQ:"+e+"]"),e}return-1},addImg(s){if(s.clipboardData&&s.clipboardData.items)for(let e=0,n=s.clipboardData.items.length;e<n;e++){const o=s.clipboardData.items[e];o.kind==="file"&&(this.setImg(o.getAsFile()),s.preventDefault())}},runSelectImg(){const s=document.getElementById("choice-pic");s&&s.click()},selectImg(s){this.tags.showMoreDetail=!1;const e=s.target;e&&e.files&&this.setImg(e.files[0])},runSelectFile(){const s=document.getElementById("choice-file");s&&s.click()},async selectFile(s){this.tags.showMoreDetail=!1;const e=s.target;if(e.files!=null){const n=new FormData;n.append("type",i.chatInfo.show.type),n.append("id",String(i.chatInfo.show.id)),n.append("file",e.files[0]);try{const o=function(u){const l=Math.round(u.loaded/u.total*100);l%10===0&&new M().add(P.INFO,w.config.globalProperties.$t("正在发送文件 {percent}%",{percent:l}))},p=(i.tags.connectSsl?"https://":"http://")+J.address+"/upload_file",g=new XMLHttpRequest;g.upload.onprogress=o,g.open("POST",p,!0),g.setRequestHeader("authorization",J.token),g.send(n),g.onreadystatechange=function(){const u=JSON.parse(g.responseText);Object.keys(u).length>0?xs(i.chatInfo.show):new M().add(P.ERR,w.config.globalProperties.$t("发送文件失败"))}}catch{new M().add(P.ERR,w.config.globalProperties.$t("发送文件错误"))}}},async setImg(s){const e=new M;if(s!==null&&s.type.indexOf("image/")>=0&&s.size!==0)if(s.size<3145728){const n=new FileReader;n.readAsDataURL(s),n.onloadend=()=>{const o=n.result;if(o!==null)if(k.get("close_chat_pic_pan")===!0){const a={addText:!0,msgObj:{type:"image",file:"base64://"+o.substring(o.indexOf("base64,")+7,o.length)}};this.addSpecialMsg(a)}else this.imgCache.push(o)}}else{const n={maxSizeMB:3,useWebWorker:!0};try{e.add(P.INFO,this.$t("正在压缩图片 ……"));const o=await yn(s,n);new G().add(N.INFO,"图片压缩成功，原大小："+s.size/1024/1024+" MB，压缩后大小："+o.size/1024/1024+" MB"),this.setImg(o)}catch{e.add(P.INFO,this.$t("压缩图片失败"))}}},toMainInput(){const s=document.getElementById("main-input");s!==null&&s.focus()},sendMsg(){if(this.details[3].open)return;this.details.forEach(e=>{e.open=!1});const s=Xs.parseMsg(this.msg,this.sendCache,this.imgCache);this.chat.show.temp?os(this.chat.show.id+"/"+this.chat.show.temp,this.chat.show.type,s,!0):os(this.chat.show.id,this.chat.show.type,s,!0),this.msg="",this.sendCache=[],this.imgCache=[],this.scrollBottom(),this.cancelReply()},updateList(s,e){var o,a;if(e==0&&s>0){const p=((o=i.jsonMap.set_message_read)==null?void 0:o.name)??void 0;let g=((a=i.jsonMap.set_message_read)==null?void 0:a.private_name)??p;g||(g=p),i.chatInfo.show.type=="group"?O.send(p,{group_id:this.chat.show.id,message_id:this.list[this.list.length-1].message_id},"setMessageRead"):O.send(g,{user_id:this.chat.show.id,message_id:this.list[this.list.length-1].message_id},"setMessageRead")}if(this.tags.showBottomButton&&!this.tags.nowGetHistroy&&e>0&&(this.NewMsgNum!==0?this.NewMsgNum=this.NewMsgNum+Math.abs(s-e):this.NewMsgNum=Math.abs(s-e)),this.list.length>200&&!this.tags.nowGetHistroy&&!this.tags.showBottomButton){i.messageList=[];const p={type:this.chat.show.type,id:this.chat.show.id,name:this.chat.show.name,avatar:this.chat.show.avatar,jump:this.chat.show.jump};xs(p),this.tags.nowGetHistroy=!0}const n=document.getElementById("msgPan");if(n!==null){const p=n.scrollHeight;this.$nextTick(()=>{const g=document.getElementById("msgPan");g!==null&&(this.tags.nowGetHistroy&&this.scrollTo(g.scrollHeight-p,!1),this.tags.nowGetHistroy||(this.tags.showBottomButton||this.scrollTo(g.scrollHeight),e<=0&&this.scrollTo(g.scrollHeight,!1)),this.tags.nowGetHistroy=!1);let u=!1;this.getImgList.length==0&&(u=!0),this.getImgList=[],this.list.forEach(_=>{_.message!==void 0&&_.message.forEach(E=>{if(E.type==="image"&&E.file!="marketface"){const h={index:_.message_id,message_id:_.message_id,img_url:E.url};this.getImgList.push(h)}})}),(!w.config.globalProperties.$viewer.isShown||u)&&(i.chatInfo.info.image_list=this.getImgList),i.chatInfo.show&&i.chatInfo.show.jump&&(new G().debug("进入跳转至消息："+i.chatInfo.show.jump),this.scrollToMsg("chat-"+i.chatInfo.show.jump),i.chatInfo.show.jump=void 0)})}},msgClick(s,e){const n=e.message_id;this.multipleSelectList.length>0&&(this.multipleSelectList.indexOf(n)>-1?this.multipleSelectList=this.multipleSelectList.filter(o=>o!=n):this.multipleSelectList.push(n))},delMsgs(){new M().add(P.INFO,this.$t("欸嘿，这个按钮只是用来占位置的"))},copyMsgs(){const s=this.list.filter(a=>this.multipleSelectList.indexOf(a.message_id)>-1);let e="",n="";s.forEach(a=>{const p=new Date(Us(a.time)),g=p.getFullYear()+"-"+(p.getMonth()+1)+"-"+p.getDate();g!=n&&(e+=`
—— `+g+` ——
`,n=g),e+=a.sender.nickname+" "+p.getHours()+":"+p.getMinutes()+":"+p.getSeconds()+`
`+K(a)+`

`});const o=new M;w.config.globalProperties.$copyText(e).then(()=>{o.add(P.INFO,this.$t("复制成功"),!0),this.multipleSelectList=[]},()=>{o.add(P.ERR,this.$t("复制失败"),!0)})},msgStartMove(s,e){const n=new G;n.add(N.UI,"消息触屏点击事件开始 ……"),this.tags.msgTouch.msgOnTouchDown=!0,this.tags.msgTouch.x=s.targetTouches[0].pageX,this.tags.msgTouch.y=s.targetTouches[0].pageY,this.tags.openedMenuMsg={msg:s.currentTarget,x:s.targetTouches[0].pageX,y:s.targetTouches[0].pageY},setTimeout(()=>{n.add(N.UI,"消息触屏长按判定："+this.tags.msgTouch.msgOnTouchDown),this.tags.msgTouch.msgOnTouchDown===!0&&this.showMsgMeun(s,e)},400)},msgOnMove(s){const e=new G,n=s.currentTarget,o=document.getElementById("msgPan"),a=this.tags.msgTouch.x,p=this.tags.msgTouch.y;if(a>-1&&p>-1&&o){const g=Math.abs(a-s.targetTouches[0].pageX),u=Math.abs(p-s.targetTouches[0].pageY),l=a-s.targetTouches[0].pageX;(u>10||g>5)&&this.tags.msgTouch.msgOnTouchDown&&(e.add(N.UI,"用户正在滑动，打断长按判定。"),this.tags.msgTouch.msgOnTouchDown=!1),u<n.offsetHeight/3&&u<40?(this.tags.msgTouch.onMove="on",l<-10?g>=n.offsetWidth/3?(this.tags.msgTouch.onMove="right",e.add(N.UI,"触发右滑判定 ……（转发）")):(n.style.transform="translate("+(Math.sqrt(g)+5)+"px)",n.style.transition="transform 0s"):l>10&&(g>=n.offsetWidth/3?(this.tags.msgTouch.onMove="left",e.add(N.UI,"触发左滑判定 ……（回复）")):(n.style.transform="translate(-"+(Math.sqrt(g)+5)+"px)",n.style.transition="transform 0s"))):(this.tags.msgTouch.onMove="no",n.style.transform="translate(0px)")}},msgMoveEnd(s,e){const n=s.currentTarget;n.style.transform="translate(0px)",this.tags.msgTouch.onMove=="left"?(this.selectedMsg=e,this.replyMsg(!1)):this.tags.msgTouch.onMove=="right";const o=this.$options.data(this);this.tags.msgTouch=o.tags.msgTouch},showJin(){if(this.details[2].open=!this.details[2].open,i.chatInfo.info.jin_info.list.length==0){const s=i.jsonMap.group_essence.name??"get_essence_msg_list";O.send(s,{group_id:this.chat.show.id,pages:0},"getJin")}this.tags.showMoreDetail=!this.tags.showMoreDetail},searchMessage(s){if(this.details[3].open){const e=s.target.value;e.length==0?this.tags.search.list=W(this.list):e.length>0&&(this.tags.search.list=this.list.filter(n=>K(n).indexOf(e)!==-1))}},openSearch(){this.details[3].open=!this.details[3].open,this.tags.showMoreDetail=!this.tags.showMoreDetail},closeSearch(){this.details[3].open=!this.details[3].open,this.msg="",this.tags.search.list=W(this.list)},sendPoke(s){if(i.jsonMap.poke){let e=i.jsonMap.poke.name;this.chat.show.type=="user"&&i.jsonMap.poke.private_name&&(e=i.jsonMap.poke.private_name),O.send(e,{user_id:s,group_id:this.chat.show.id},"sendPoke")}this.tags.showMoreDetail=!1,this.tags.menuDisplay.poke=!1},jinScroll(s){const e=s.target;if(e.scrollTop+e.clientHeight===e.scrollHeight&&!this.tags.isJinLoading&&this.chat.info.jin_info.is_end==!1){this.tags.isJinLoading=!0;const n=i.jsonMap.group_essence.name??"get_essence_msg_list";O.send(n,{group_id:this.chat.show.id,pages:this.chat.info.jin_info.pages+1},"getJin")}},moreFunClick(){let s=!1;this.details.forEach(e=>{e.open&&(s=!0),e.open=!1}),s||(this.tags.showMoreDetail=!this.tags.showMoreDetail)},openLeftBar(){i.tags.openSideBar=!i.tags.openSideBar}}}),xg={class:"info"},sp=["src"],ep={class:"info"},np={key:0},tp={key:1},ip={class:"more"},op={key:0,class:"note note-nomsg"},rp={key:1,id:"msgPan",class:"chat",style:{"scroll-behavior":"smooth"}},ap={class:"ss-card"},up={key:0},gp={id:"send-more",class:"more"},pp={class:"ss-card jin-pan"},cp=["src"],lp={class:"context"},mp={key:0},dp=["src"],fp=["src"],_p={class:"jin-pan-load"},vp=["onClick"],hp=["src"],bp={key:0,class:"emp"},yp=["title"],Ep=["title"],wp=["title"],Op=["title"],Dp=["title"],Ip=["title"],Lp=["disabled","placeholder"],qp=["disabled"],kp={class:"ss-card"},Cp={class:"mumber-info"},Ap=["src"],$p={name:"id"},Tp={key:0},Pp={key:0},Vp=["src","onClick"],Fp={class:"img-sender"},Mp={class:"card ss-card"},Rp={class:"hander"},Bp={class:"imgs"},Sp=["onClick"],Np=["src"],Up={class:"sender"},jp=["disabled"],Hp={key:0,class:"forward-pan"},Qp={class:"ss-card card"},zp=["placeholder"],Wp=["onClick"],Gp=["title","src"];function Kp(s,e,n,o,a,p){var h;const g=C("font-awesome-icon"),u=C("NoticeBody"),l=C("MsgBody"),_=C("FacePan"),E=C("Info");return m(),d("div",{id:"chat-pan",class:L("chat-pan"+(s.runtimeData.tags.openSideBar?" open":"")+(s.runtimeData.sysConfig.opt_no_window?" withBar":"")),style:H(`background-image: url(${s.runtimeData.sysConfig.chat_background});`+(s.Option.get("fs_adaptation")>0?"--append-fs-adaptation:"+s.Option.get("fs_adaptation")+"px":"--append-fs-adaptation:0px"))},[t("div",xg,[v(g,{icon:["fas","bars-staggered"],onClick:s.openLeftBar},null,8,["onClick"]),t("img",{src:s.chat.show.avatar},null,8,sp),t("div",ep,[t("p",null,[R(c(s.chat.show.name),1),s.runtimeData.chatInfo.show.type=="group"?(m(),d(I,{key:0},[R(" ("+c(s.runtimeData.chatInfo.info.group_members.length)+") ",1)],64)):b("",!0)]),s.chat.show.temp?(m(),d("span",np,c(s.$t("来自群聊：{group}",{group:s.chat.show.temp})),1)):(m(),d("span",tp,c(s.list[s.list.length-1]?s.$t("上次消息 - {time}",{time:Intl.DateTimeFormat(s.trueLang,{hour:"numeric",minute:"numeric",second:"numeric"}).format(new Date(s.list[s.list.length-1].time*1e3))}):s.$t("暂无消息")),1))]),e[51]||(e[51]=t("div",{class:"space"},null,-1)),t("div",ip,[v(g,{icon:["fas","ellipsis-vertical"],onClick:s.openChatInfoPan},null,8,["onClick"])])]),t("div",{class:L("loading"+(s.tags.nowGetHistroy&&s.runtimeData.tags.canLoadHistory?" show":""))},[v(g,{icon:["fas","spinner"]}),t("span",null,c(s.$t("加载中")),1)],2),s.details[3].open?(m(),d("div",rp,[v(Rs,{name:"msglist",tag:"div"},{default:z(()=>[(m(!0),d(I,null,$(s.tags.search.list,(f,q)=>{var D;return m(),d(I,null,[s.isShowTime(s.list[q-1]?s.list[q-1].time:void 0,f.time)?(m(),V(u,{key:"notice-time-"+q,data:{sub_type:"time",time:f.time}},null,8,["data"])):b("",!0),(f.post_type==="message"||f.post_type==="message_sent")&&f.message.length>0?(m(),V(l,{key:f.message_id,selected:s.multipleSelectList.includes(f.message_id)||((D=s.tags.openedMenuMsg)==null?void 0:D.id)=="chat-"+f.message_id,data:f,onScrollToMsg:s.scrollToMsg,onScrollButtom:s.imgLoadedScroll,onContextmenu:Os(A=>s.showMsgMeun(A,f),["prevent"]),onTouchstart:A=>s.msgStartMove(A,f),onTouchmove:s.msgOnMove,onTouchend:A=>s.msgMoveEnd(A,f)},null,8,["selected","data","onScrollToMsg","onScrollButtom","onContextmenu","onTouchstart","onTouchmove","onTouchend"])):b("",!0),f.post_type==="notice"?(m(),V(u,{id:s.uuid(),key:"notice-"+q,data:f},null,8,["id","data"])):b("",!0)],64)}),256))]),_:1})])):(m(),d("div",{key:0,id:"msgPan",class:"chat",style:{"scroll-behavior":"smooth"},onScroll:e[0]||(e[0]=(...f)=>s.chatScroll&&s.chatScroll(...f))},[s.runtimeData.tags.canLoadHistory?b("",!0):(m(),d("div",op,[e[52]||(e[52]=t("hr",null,null,-1)),t("a",null,c(s.$t("没有更多消息了")),1)])),s.tags.nowGetHistroy&&s.list.length>0?(m(),V(u,{key:1,data:{sub_type:"time",time:s.list[0].time}},null,8,["data"])):b("",!0),v(Rs,{name:"msglist",tag:"div"},{default:z(()=>[(m(!0),d(I,null,$(s.list,(f,q)=>{var D;return m(),d(I,null,[s.isShowTime(s.list[q-1]?s.list[q-1].time:void 0,f.time)?(m(),V(u,{key:"notice-time-"+q,data:{sub_type:"time",time:f.time}},null,8,["data"])):b("",!0),(f.post_type==="message"||f.post_type==="message_sent")&&f.message.length>0?(m(),V(l,{key:f.message_id,selected:s.multipleSelectList.includes(f.message_id)||((D=s.tags.openedMenuMsg)==null?void 0:D.id)=="chat-"+f.message_id,data:f,onClick:A=>s.msgClick(A,f),onScrollToMsg:s.scrollToMsg,onScrollButtom:s.imgLoadedScroll,onContextmenu:Os(A=>s.showMsgMeun(A,f),["prevent"]),onTouchstart:A=>s.msgStartMove(A,f),onTouchmove:s.msgOnMove,onTouchend:A=>s.msgMoveEnd(A,f),onSendPoke:s.sendPoke},null,8,["selected","data","onClick","onScrollToMsg","onScrollButtom","onContextmenu","onTouchstart","onTouchmove","onTouchend","onSendPoke"])):b("",!0),f.post_type==="notice"?(m(),V(u,{id:s.uuid(),key:"notice-"+q,data:f},null,8,["id","data"])):b("",!0)],64)}),256))]),_:1})],32)),y(t("div",{class:"new-msg",onClick:e[1]||(e[1]=f=>s.scrollBottom(!0))},[t("div",ap,[v(g,{icon:["fas","comment"]}),s.NewMsgNum>0?(m(),d("span",up,c(s.NewMsgNum),1)):b("",!0)])],512),[[T,s.tags.showBottomButton]]),t("div",gp,[t("div",null,[t("div",null,[v(ms,{name:"pan"},{default:z(()=>[y(v(_,{onAddSpecialMsg:s.addSpecialMsg},null,8,["onAddSpecialMsg"]),[[T,s.details[1].open]])]),_:1}),v(ms,{name:"pan"},{default:z(()=>[y(t("div",pp,[t("div",null,[v(g,{icon:["fas","message"]}),t("span",null,c(s.$t("精华消息")),1),v(g,{icon:["fas","xmark"],onClick:e[2]||(e[2]=f=>s.details[2].open=!s.details[2].open)})]),t("div",{class:"jin-pan-body",onScroll:e[3]||(e[3]=(...f)=>s.jinScroll&&s.jinScroll(...f))},[(m(!0),d(I,null,$(s.runtimeData.chatInfo.info.jin_info.list,(f,q)=>(m(),d("div",{key:"jin-"+q},[t("div",null,[t("img",{src:`https://q1.qlogo.cn/g?b=qq&s=0&nk=${f.sender_uin}`},null,8,cp),t("div",null,[t("a",null,c(f.sender_nick),1),t("span",null,c(Intl.DateTimeFormat(s.trueLang,{hour:"numeric",minute:"numeric"}).format(new Date(f.sender_time*1e3)))+" "+c(s.$t("发送")),1)]),t("span",null,c(s.$t("{time}，由 {name} 设置",{time:Intl.DateTimeFormat(s.trueLang,{hour:"numeric",minute:"numeric"}).format(new Date(f.add_digest_time*1e3)),name:f.add_digest_nick})),1)]),t("div",lp,[(m(!0),d(I,null,$(f.msg_content,(D,A)=>(m(),d(I,{key:"jinc-"+q+"-"+A},[D.msg_type===1?(m(),d("span",mp,c(D.text),1)):b("",!0),D.msg_type===2?(m(),d("img",{key:1,class:"face",src:s.getFace(D.face_index)},null,8,dp)):b("",!0),D.msg_type===3?(m(),d("img",{key:2,src:D.image_url},null,8,fp)):b("",!0)],64))),128))])]))),128)),y(t("div",_p,[v(g,{icon:["fas","spinner"]})],512),[[T,s.tags.isJinLoading]])],32)],512),[[T,s.details[2].open&&s.runtimeData.chatInfo.info.jin_info.list.length>0]])]),_:1})]),t("div",{class:L(s.multipleSelectList.length>0?"select-tag show":"select-tag")},[t("div",null,[v(g,{icon:["fas","share"],onClick:s.showForWard},null,8,["onClick"]),t("span",null,c(s.$t("合并转发")),1)]),t("div",null,[v(g,{icon:["fas","scissors"]}),t("span",null,c(s.$t("截图")),1)]),t("div",null,[v(g,{icon:["fas","trash-can"],onClick:s.delMsgs},null,8,["onClick"]),t("span",null,c(s.$t("删除")),1)]),t("div",null,[v(g,{icon:["fas","copy"],onClick:s.copyMsgs},null,8,["onClick"]),t("span",null,c(s.$t("复制")),1)]),t("div",null,[t("span",{onClick:e[4]||(e[4]=f=>s.multipleSelectList=[])},c(s.multipleSelectList.length),1),t("span",null,c(s.$t("取消")),1)])],2),t("div",{class:L(s.details[3].open?"search-tag show":"search-tag")},[v(g,{icon:["fas","search"]}),t("span",null,c(s.$t("搜索已加载的消息")),1),t("div",{onClick:e[5]||(e[5]=(...f)=>s.closeSearch&&s.closeSearch(...f))},[v(g,{icon:["fas","xmark"]})])],2),t("div",{class:L(s.tags.isReply?"replay-tag show":"replay-tag")},[v(g,{icon:["fas","reply"]}),t("span",null,c(s.selectedMsg===null?"":s.selectedMsg.sender.nickname+": "+s.fun.getMsgRawTxt(s.selectedMsg)),1),t("div",{onClick:e[6]||(e[6]=(...f)=>s.cancelReply&&s.cancelReply(...f))},[v(g,{icon:["fas","xmark"]})])],2),t("div",{class:L(s.atFindList!=null?"at-tag show":"at-tag"),contenteditable:"true",onBlur:e[7]||(e[7]=f=>s.choiceAt(void 0))},[(m(!0),d(I,null,$(s.atFindList!=null?s.atFindList:[],f=>(m(),d("div",{key:"atFind-"+f.user_id,onClick:q=>s.choiceAt(f.user_id)},[t("img",{src:"https://q1.qlogo.cn/g?b=qq&s=0&nk="+f.user_id},null,8,hp),t("span",null,c(f.card!=""&&f.card!=null?f.card:f.nickname),1),t("a",null,c(f.user_id),1)],8,vp))),128)),((h=s.atFindList)==null?void 0:h.length)==0?(m(),d("div",bp,[t("span",null,c(s.$t("没有找到匹配的群成员")),1)])):b("",!0)],34),t("div",{class:L(s.tags.showMoreDetail?"more-detail show":"more-detail")},[t("div",{title:s.$t("图片"),onClick:e[9]||(e[9]=(...f)=>s.runSelectImg&&s.runSelectImg(...f))},[v(g,{icon:["fas","image"]}),t("input",{id:"choice-pic",type:"file",style:{display:"none"},onChange:e[8]||(e[8]=(...f)=>s.selectImg&&s.selectImg(...f))},null,32)],8,yp),t("div",{title:s.$t("文件"),onClick:e[11]||(e[11]=(...f)=>s.runSelectFile&&s.runSelectFile(...f))},[v(g,{icon:["fas","folder"]}),t("input",{id:"choice-file",type:"file",style:{display:"none"},onChange:e[10]||(e[10]=(...f)=>s.selectFile&&s.selectFile(...f))},null,32)],8,Ep),t("div",{title:s.$t("表情"),onClick:e[12]||(e[12]=f=>(s.details[1].open=!s.details[1].open,s.tags.showMoreDetail=!1))},[v(g,{icon:["fas","face-laugh"]})],8,wp),s.chat.show.type==="user"?(m(),d("div",{key:0,title:s.$t("戳一戳"),onClick:e[13]||(e[13]=f=>s.sendPoke(s.chat.show.id))},[v(g,{icon:["fas","fa-hand-point-up"]})],8,Op)):b("",!0),s.chat.show.type==="group"?(m(),d("div",{key:1,title:s.$t("精华消息"),onClick:e[14]||(e[14]=(...f)=>s.showJin&&s.showJin(...f))},[v(g,{icon:["fas","star"]})],8,Dp)):b("",!0),e[53]||(e[53]=t("div",{class:"space"},null,-1)),t("div",{title:s.$t("搜索消息"),onClick:e[15]||(e[15]=(...f)=>s.openSearch&&s.openSearch(...f))},[v(g,{icon:["fas","search"]})],8,Ip)],2)]),t("div",null,[t("div",{onClick:e[16]||(e[16]=(...f)=>s.moreFunClick&&s.moreFunClick(...f))},[v(g,{icon:["fas","plus"]})]),t("div",null,[t("form",{onSubmit:e[28]||(e[28]=Os((...f)=>s.mainSubmit&&s.mainSubmit(...f),["prevent"]))},[s.Option.get("use_breakline")?y((m(),d("textarea",{key:1,id:"main-input","onUpdate:modelValue":e[22]||(e[22]=f=>s.msg=f),type:"text",disabled:s.runtimeData.tags.openSideBar,onPaste:e[23]||(e[23]=(...f)=>s.addImg&&s.addImg(...f)),onKeydown:e[24]||(e[24]=(...f)=>s.mainKey&&s.mainKey(...f)),onKeyup:e[25]||(e[25]=(...f)=>s.mainKeyUp&&s.mainKeyUp(...f)),onClick:e[26]||(e[26]=f=>s.selectSQIn()),onInput:e[27]||(e[27]=(...f)=>s.searchMessage&&s.searchMessage(...f))},null,40,qp)),[[j,s.msg]]):y((m(),d("input",{key:0,id:"main-input","onUpdate:modelValue":e[17]||(e[17]=f=>s.msg=f),type:"text",autocomplete:"off",disabled:s.runtimeData.tags.openSideBar||s.chat.info.me_info.shut_up_timestamp>0,placeholder:s.chat.info.me_info.shut_up_timestamp>0?s.$t("已被禁言至：{time}",{time:Intl.DateTimeFormat(s.trueLang,s.getTimeConfig(new Date(s.chat.info.me_info.shut_up_timestamp*1e3))).format(new Date(s.chat.info.me_info.shut_up_timestamp*1e3))}):"",onPaste:e[18]||(e[18]=(...f)=>s.addImg&&s.addImg(...f)),onKeyup:e[19]||(e[19]=(...f)=>s.mainKeyUp&&s.mainKeyUp(...f)),onClick:e[20]||(e[20]=f=>s.selectSQIn()),onInput:e[21]||(e[21]=(...f)=>s.searchMessage&&s.searchMessage(...f))},null,40,Lp)),[[j,s.msg]])],32),t("div",{onClick:e[29]||(e[29]=(...f)=>s.sendMsg&&s.sendMsg(...f))},[s.details[3].open?(m(),V(g,{key:0,icon:["fas","search"]})):(m(),V(g,{key:1,icon:["fas","angle-right"]}))])])]),e[54]||(e[54]=t("div",null,null,-1))]),t("div",{class:L(s.mergeList!=null?"merge-pan show":"merge-pan")},[t("div",{onClick:e[30]||(e[30]=(...f)=>s.closeMergeMsg&&s.closeMergeMsg(...f))}),t("div",kp,[t("div",null,[v(g,{style:{"margin-top":"5px"},icon:["fas","message"]}),t("span",null,c(s.$t("合并消息")),1),v(g,{icon:["fas","xmark"],onClick:s.closeMergeMsg},null,8,["onClick"])]),t("div",{class:L("loading"+(s.mergeList&&s.mergeList.length==0?" show":""))},[v(g,{icon:["fas","spinner"]}),t("span",null,c(s.$t("加载中")),1)],2),t("div",null,[(m(!0),d(I,null,$(s.mergeList,(f,q)=>(m(),d(I,{key:"merge-"+q},[s.isShowTime(s.mergeList[q-1]?s.mergeList[q-1].time:void 0,f.time,q==0)?(m(),V(u,{id:s.uuid(),key:"notice-time-"+q,data:{sub_type:"time",time:f.time}},null,8,["id","data"])):b("",!0),v(l,{data:f,type:"merge"},null,8,["data"])],64))),128))])])],2),t("div",Cp,[Object.keys(s.mumberInfo).length>0&&s.mumberInfo.error===void 0?(m(),d("div",{key:0,class:"ss-card",style:H(s.getPopPost())},[t("img",{src:"https://q1.qlogo.cn/g?b=qq&s=0&nk="+s.mumberInfo.user_id},null,8,Ap),t("div",null,[t("span",$p,c(s.mumberInfo.user_id),1),t("div",null,[t("a",null,c(s.mumberInfo.card==""?s.mumberInfo.nickname:s.mumberInfo.card),1),t("div",null,[s.mumberInfo.role!=="member"?(m(),d("span",Tp,c(s.$t("成员类型_"+s.mumberInfo.role)),1)):b("",!0),t("span",null,"Lv "+c(s.mumberInfo.level),1)])]),s.mumberInfo.join_time?(m(),d("span",Pp,c(s.$t("{time} 加入群聊",{time:Intl.DateTimeFormat(s.trueLang,{year:"numeric",month:"short",day:"numeric"}).format(new Date(s.mumberInfo.join_time*1e3))})),1)):b("",!0)])],4)):b("",!0)]),t("div",{class:L("msg-menu"+(s.runtimeData.sysConfig.opt_no_window?" withBar":""))},[y(t("div",{class:"msg-menu-bg",onClick:e[31]||(e[31]=(...f)=>s.closeMsgMenu&&s.closeMsgMenu(...f))},null,512),[[T,s.tags.showMsgMenu]]),t("div",{id:"msgMenu",class:L(s.tags.showMsgMenu?"ss-card msg-menu-body show":"ss-card msg-menu-body")},[s.runtimeData.chatInfo.show.type=="group"?y((m(),d("div",{key:0,class:L("ss-card respond"+(s.tags.menuDisplay.respond?" open":""))},[(m(!0),d(I,null,$(s.respondIds,(f,q)=>(m(),d(I,{key:"respond-"+f},[s.getFace(f)!=""?(m(),d("img",{key:0,loading:"lazy",src:s.getFace(f),onClick:D=>s.sendRespond(f)},null,8,Vp)):b("",!0),q==4?(m(),V(g,{key:1,icon:["fas","angle-up"],onClick:e[32]||(e[32]=D=>s.tags.menuDisplay.respond=!0)})):b("",!0)],64))),128))],2)),[[T,s.tags.menuDisplay.showRespond]]):b("",!0),y(t("div",{onClick:e[33]||(e[33]=f=>s.forwardSelf())},[t("div",null,[v(g,{icon:["fas","plus"]})]),t("a",null,c(s.$t("+ 1")),1)],512),[[T,s.tags.menuDisplay.add]]),y(t("div",{onClick:e[34]||(e[34]=f=>s.replyMsg(!0))},[t("div",null,[v(g,{icon:["fas","message"]})]),t("a",null,c(s.$t("回复")),1)],512),[[T,s.tags.menuDisplay.relpy]]),y(t("div",{onClick:e[35]||(e[35]=f=>s.showForWard())},[t("div",null,[v(g,{icon:["fas","share"]})]),t("a",null,c(s.$t("转发")),1)],512),[[T,s.tags.menuDisplay.forward]]),y(t("div",{onClick:e[36]||(e[36]=f=>s.intoMultipleSelect())},[t("div",null,[v(g,{icon:["fas","circle-check"]})]),t("a",null,c(s.$t("多选")),1)],512),[[T,s.tags.menuDisplay.select]]),y(t("div",{onClick:e[37]||(e[37]=(...f)=>s.copyMsg&&s.copyMsg(...f))},[t("div",null,[v(g,{icon:["fas","clipboard"]})]),t("a",null,c(s.$t("复制")),1)],512),[[T,s.tags.menuDisplay.copy]]),y(t("div",{onClick:e[38]||(e[38]=(...f)=>s.copySelectMsg&&s.copySelectMsg(...f))},[t("div",null,[v(g,{icon:["fas","code"]})]),t("a",null,c(s.$t("复制选中文本")),1)],512),[[T,s.tags.menuDisplay.copySelect]]),y(t("div",{onClick:e[39]||(e[39]=(...f)=>s.downloadImg&&s.downloadImg(...f))},[t("div",null,[v(g,{icon:["fas","floppy-disk"]})]),t("a",null,c(s.$t("下载图片")),1)],512),[[T,s.tags.menuDisplay.downloadImg!=!1]]),y(t("div",{onClick:e[40]||(e[40]=(...f)=>s.revokeMsg&&s.revokeMsg(...f))},[t("div",null,[v(g,{icon:["fas","xmark"]})]),t("a",null,c(s.$t("撤回")),1)],512),[[T,s.tags.menuDisplay.revoke]]),y(t("div",{onClick:e[41]||(e[41]=f=>{s.selectedMsg&&s.addSpecialMsg({msgObj:{type:"at",qq:s.selectedMsg.sender.user_id},addText:!0}),s.toMainInput(),s.closeMsgMenu()})},[t("div",null,[v(g,{icon:["fas","at"]})]),t("a",null,c(s.$t("提及")),1)],512),[[T,s.tags.menuDisplay.at]]),y(t("div",{onClick:e[42]||(e[42]=f=>s.sendPoke(s.selectedMsg?s.selectedMsg.sender.user_id:void 0))},[t("div",null,[v(g,{icon:["fas","fa-hand-point-up"]})]),t("a",null,c(s.$t("戳一戳")),1)],512),[[T,s.tags.menuDisplay.poke]]),y(t("div",{onClick:e[43]||(e[43]=(...f)=>s.removeUser&&s.removeUser(...f))},[t("div",null,[v(g,{icon:["fas","trash-can"]})]),t("a",null,c(s.$t("移出群聊")),1)],512),[[T,s.tags.menuDisplay.remove]])],2)],2),v(ms,null,{default:z(()=>[v(E,{chat:s.chat,tags:s.tags,onClose:s.openChatInfoPan,onLoadFile:s.fileLoad},null,8,["chat","tags","onClose","onLoadFile"])]),_:1}),v(ms,null,{default:z(()=>[y(t("div",Fp,[t("div",Mp,[t("div",Rp,[t("span",null,c(s.$t("发送图片")),1),t("button",{class:"ss-button",onClick:e[44]||(e[44]=(...f)=>s.sendMsg&&s.sendMsg(...f))},c(s.$t("发送")),1)]),t("div",Bp,[(m(!0),d(I,null,$(s.imgCache,(f,q)=>(m(),d("div",{key:"sendImg-"+q},[t("div",{onClick:D=>s.deleteImg(q)},[v(g,{icon:["fas","xmark"]})],8,Sp),t("img",{src:f},null,8,Np)]))),128))]),t("div",Up,[v(g,{icon:["fas","image"],onClick:s.runSelectImg},null,8,["onClick"]),y(t("input",{"onUpdate:modelValue":e[45]||(e[45]=f=>s.msg=f),type:"text",disabled:s.runtimeData.tags.openSideBar,onPaste:e[46]||(e[46]=(...f)=>s.addImg&&s.addImg(...f)),onClick:e[47]||(e[47]=(...f)=>s.toMainInput&&s.toMainInput(...f))},null,40,jp),[[j,s.msg]])])]),t("div",{class:"bg",onClick:e[48]||(e[48]=f=>s.imgCache=[])})],512),[[T,s.imgCache.length>0]])]),_:1}),v(ms,null,{default:z(()=>[s.tags.showForwardPan?(m(),d("div",Hp,[t("div",Qp,[t("header",null,[t("span",null,c(s.$t("转发消息")),1),v(g,{icon:["fas","xmark"],onClick:s.cancelForward},null,8,["onClick"])]),t("input",{placeholder:s.$t("搜索 ……"),onInput:e[49]||(e[49]=(...f)=>s.searchForward&&s.searchForward(...f))},null,40,zp),t("div",null,[(m(!0),d(I,null,$(s.forwardList,f=>(m(),d("div",{key:"forwardList-"+f.user_id?f.user_id:f.group_id,onClick:q=>s.forwardMsg(f)},[t("img",{loading:"lazy",title:f.group_name?f.group_name:f.remark===f.nickname?f.nickname:f.remark+"（"+f.nickname+"）",src:f.user_id?"https://q1.qlogo.cn/g?b=qq&s=0&nk="+f.user_id:"https://p.qlogo.cn/gh/"+f.group_id+"/"+f.group_id+"/0"},null,8,Gp),t("div",null,[t("p",null,c(f.group_name?f.group_name:f.remark===f.nickname?f.nickname:f.remark+"（"+f.nickname+"）"),1),t("span",null,c(f.group_id?s.$t("群组"):s.$t("好友")),1)])],8,Wp))),128))])]),t("div",{class:"bg",onClick:e[50]||(e[50]=(...f)=>s.cancelForward&&s.cancelForward(...f))})])):b("",!0)]),_:1}),t("div",{class:"bg",style:H(s.runtimeData.sysConfig.option_view_background?`backdrop-filter: blur(${s.runtimeData.sysConfig.chat_background_blur}px);`:"")},null,4)],6)}const Ye=B(Xg,[["render",Kp],["__scopeId","data-v-232dd615"]]),Xe=Object.freeze(Object.defineProperty({__proto__:null,default:Ye},Symbol.toStringTag,{value:"Module"})),Jp=S({name:"App",components:{Options:la,Friends:$a,Messages:Qa,Chat:Ye},data(){return{dev:!1,Connector:O,defineAsyncComponent:Ls,save:k.runASWEvent,get:k.get,popInfo:new M,appMsgs:ts,loadHistory:xs,loginInfo:J,runtimeData:i,tags:{page:"Home",showChat:!1,isSavePwdClick:!1,savePassword:!1},viewerOpt:{inline:!1,button:!1,title:!1,navbar:!1,toolbar:{prev:!0,rotateLeft:!0,reset:!0,rotateRight:!0,next:!0}},viewerBody:void 0,fps:{last:Date.now(),ticks:0,value:0}}},mounted(){const s=new G;window.moYu=()=>"undefined",window.onload=async()=>{var e,n;if(i.tags.isElectron=window.electron!=null,i.reader=(e=window.electron)==null?void 0:e.ipcRenderer,i.reader&&(i.tags.platform=await i.reader.invoke("sys:getPlatform"),i.tags.release=await i.reader.invoke("sys:getRelease")),w.config.globalProperties.$viewer=this.viewerBody,i.tags.loginWaveTimer=this.waveAnimation(document.getElementById("login-wave")),window._AMapSecurityConfig=void 0,Bt(),St(),this.dev&&(document.title="Stapxs QQ Lite (Dev)",on.start(),this.rafLoop()),i.sysConfig=k.load(),k.run("opt_dark",k.get("opt_dark")),k.run("opt_auto_dark",k.get("opt_auto_dark")),k.run("theme_color",k.get("theme_color")),k.run("opt_auto_win_color",k.get("opt_auto_win_color")),k.get("opt_no_window")==!0){const o=document.getElementById("base-app");o&&o.classList.add("withBar")}if(k.runAS("opt_auto_gtk",k.get("opt_auto_gtk")),s.debug("欢迎使用 Stapxs QQ Lite！"),s.debug("当前启动模式为: "+this.dev?"development":"production"),s.debug("Electron 环境: "+i.tags.isElectron),Nt(),J.address=i.sysConfig.address,i.sysConfig.save_password&&i.sysConfig.save_password!=!0&&(J.token=i.sysConfig.save_password,this.tags.savePassword=!0),i.sysConfig.auto_connect==!0&&this.connect(),!k.get("close_ga")&&this.dev){const o={baseUrl:void 0,websiteId:void 0};i.tags.isElectron&&(o.hostName="electron.stapxs.cn"),Ks.initialize(o)}else this.dev?s.debug("由于运行在调试模式下，分析组件并未初始化 ……"):k.get("close_ga")&&s.debug("统计功能已被关闭，分析组件并未初始化 ……");Ut(),Ht(),Qt(),new Date().getMonth()==3&&new Date().getDate()==1&&((n=document.getElementById("connect_btn"))==null||n.classList.add("afd"))},window.onbeforeunload=()=>{new us().clear()}},methods:{controllWin(s){i.reader&&i.reader.send("win:"+s)},connect(){O.create(this.loginInfo.address,this.loginInfo.token)},changeTab(s,e,n){switch(!k.get("close_ga")&&this.dev&&Ks.trackPageView("/"+e),this.tags.showChat=n,this.tags.page=e,e){case"Options":{O.send("get_version_info",{},"getVersionInfo");break}}},barMainClick(){J.status?this.changeTab("信息","Messages",!0):this.changeTab("主页","Home",!1)},waveAnimation(s){if(s){const e=s.children[1].children,n=20,o=195,a=1;return setInterval(()=>{for(let g=0;g<e.length;g++){const u=e[g].getAttribute("x");Number(u)+a>o?e[g].setAttribute("x",n.toString()):e[g].setAttribute("x",(Number(u)+a).toString())}},50)}return-1},rafLoop(){if(this.fps.ticks+=1,this.fps.ticks>=30){const s=Date.now(),e=s-this.fps.last,n=Math.round(1e3/(e/this.fps.ticks));this.fps.last=s,this.fps.ticks=0,this.fps.value=n}requestAnimationFrame(this.rafLoop)},changeChat(s){this.runtimeData.chatInfo={show:s,info:{group_info:{},user_info:{},me_info:{},group_members:[],group_files:{},group_sub_files:{},jin_info:{list:[],pages:0}}},i.mergeMessageList=void 0,i.tags.canLoadHistory=!0,s.type=="group"&&(O.send("get_group_member_info",{group_id:s.id,user_id:this.runtimeData.loginInfo.uin},"getUserInfoInGroup"),O.send("get_group_member_list",{group_id:s.id},"getGroupMemberList")),O.send("get_system_msg",{},"getSystemMsg"),i.reader&&i.reader.send("sys:closeAllNotice",s.id)},viewerInited(s){this.viewerBody=s},viewerHide(){i.tags.viewer.show=!1},viewerShow(){i.tags.viewer.show=!0},removePopBox(){i.popBoxList.shift()},savePassword(s){if(s.target.checked){k.save("save_password",!0);const o={title:this.$t("提醒"),html:`<span>${this.$t("连接密钥将以明文存储在浏览器 Cookie 中，请确保设备安全以防止密钥泄漏。")}</span>`,button:[{text:w.config.globalProperties.$t("知道了"),master:!0,fun:()=>{i.popBoxList.shift()}}]};i.popBoxList.push(o)}else k.remove("save_password")},saveAutoConnect(s){k.runASWEvent(s),i.sysConfig.save_password||this.savePassword(s)},popQuickClose(s){s!=!1&&i.popBoxList.shift()},afd(s){if(new Date().getMonth()==3&&new Date().getDate()==1){const e=s.target,n=document.documentElement.clientWidth,o=document.documentElement.clientHeight,a=e.offsetWidth,p=e.offsetHeight,g=s.clientX,u=s.clientY;let l,_;do l=Math.floor(Math.random()*n),_=Math.floor(Math.random()*o);while(l+a>n||_+p>o||l<g&&l+a>g&&_<u&&_+p>u);e.style.left=l+"px",e.style.top=_+"px"}}}}),Zp={key:0,class:"dev-bar"},Yp={key:1,class:"top-bar",name:"appbar"},Xp={class:"controller"},xp={key:2,class:"controller mac-controller"},sc={id:"base-app"},ec={class:"main-body"},nc=["name"],tc={class:"home-body"},ic={class:"login-pan-card ss-card"},oc=["placeholder"],rc=["placeholder"],ac={style:{display:"flex"}},uc={class:"default"},gc={class:"default",style:{"justify-content":"flex-end"}},pc={href:"https://github.com/Stapxs/Stapxs-QQ-Lite-2.0#%E5%BF%AB%E9%80%9F%E4%BD%BF%E7%94%A8",target:"_blank",style:{"margin-bottom":"-20px"}},cc={key:1,id:"messageTab"},lc={key:2},mc={class:"opt-main-tab"},dc=["onClick"],fc={key:0,class:"pop-box"},_c={key:0},vc=["innerHTML"],hc={class:"button"},bc=["onClick"],yc={class:"pop-box-more"},Ec=["data-id"],wc=["src"];function Oc(s,e,n,o,a,p){const g=C("font-awesome-icon"),u=C("Messages"),l=C("Friends"),_=C("Options"),E=C("viewer");return m(),d(I,null,[s.dev?(m(),d("div",Zp,c("Stapxs QQ Lite Development Mode")+" "+c(" / fps: "+s.fps.value),1)):b("",!0),s.runtimeData.sysConfig.opt_no_window?(m(),d("div",Yp,[t("div",{class:"bar-button",onClick:e[0]||(e[0]=h=>s.barMainClick())}),e[17]||(e[17]=t("div",{class:"space"},null,-1)),t("div",Xp,[t("div",{class:"min",onClick:e[1]||(e[1]=h=>s.controllWin("minimize"))},[v(g,{icon:["fas","minus"]})]),t("div",{class:"close",onClick:e[2]||(e[2]=h=>s.controllWin("close"))},[v(g,{icon:["fas","xmark"]})])])])):b("",!0),s.runtimeData.tags.platform=="darwin"?(m(),d("div",xp)):b("",!0),t("div",sc,[t("div",ec,[t("ul",{style:H(s.get("fs_adaptation")>0?`padding-bottom: ${s.get("fs_adaptation")}px;`:"")},[t("li",{id:"bar-home",class:L((s.tags.page=="Home"?"active":"")+(s.loginInfo.status?" hiden-home":"")),onClick:e[3]||(e[3]=h=>s.changeTab("主页","Home",!1))},[v(g,{icon:["fas","home"]})],2),t("li",{id:"bar-msg",class:L(s.tags.page=="Messages"?"active":""),onClick:e[4]||(e[4]=h=>s.changeTab("信息","Messages",!0))},[v(g,{icon:["fas","envelope"]})],2),t("li",{id:"bar-friends",class:L(s.tags.page=="Friends"?"active":""),onClick:e[5]||(e[5]=h=>s.changeTab("列表","Friends",!0))},[v(g,{icon:["fas","user"]})],2),e[18]||(e[18]=t("div",{class:"side-bar-space"},null,-1)),t("li",{class:L(s.tags.page=="Options"?"active":""),onClick:e[6]||(e[6]=h=>s.changeTab("设置","Options",!1))},[v(g,{icon:["fas","gear"]})],2)],4),t("div",{style:H(s.get("fs_adaptation")>0?`height: calc(100% - ${75+Number(s.get("fs_adaptation"))}px);`:"")},[s.tags.page=="Home"?(m(),d("div",{key:0,name:s.$t("主页")},[t("div",tc,[t("div",ic,[v(g,{icon:["fas","circle-nodes"]}),t("p",null,c(s.$t("连接到 OneBot")),1),t("form",{onSubmit:[e[14]||(e[14]=Os(()=>{},["prevent"])),e[15]||(e[15]=(...h)=>s.connect&&s.connect(...h))]},[t("label",null,[v(g,{icon:["fas","link"]}),y(t("input",{id:"sev_address","onUpdate:modelValue":e[7]||(e[7]=h=>s.loginInfo.address=h),placeholder:s.$t("连接地址"),class:"ss-input",autocomplete:"off"},null,8,oc),[[j,s.loginInfo.address]])]),t("label",null,[v(g,{icon:["fas","lock"]}),y(t("input",{id:"access_token","onUpdate:modelValue":e[8]||(e[8]=h=>s.loginInfo.token=h),placeholder:s.$t("连接密钥"),class:"ss-input",type:"password",autocomplete:"off"},null,8,rc),[[j,s.loginInfo.token]])]),t("div",ac,[t("label",uc,[y(t("input",{id:"in_","onUpdate:modelValue":e[9]||(e[9]=h=>s.tags.savePassword=h),type:"checkbox",name:"save_password",onClick:e[10]||(e[10]=(...h)=>s.savePassword&&s.savePassword(...h))},null,512),[[Q,s.tags.savePassword]]),t("a",null,c(s.$t("记住密码")),1)]),e[19]||(e[19]=t("div",{style:{flex:"1"}},null,-1)),t("label",gc,[y(t("input",{"onUpdate:modelValue":e[11]||(e[11]=h=>s.runtimeData.sysConfig.auto_connect=h),type:"checkbox",name:"auto_connect",onClick:e[12]||(e[12]=(...h)=>s.saveAutoConnect&&s.saveAutoConnect(...h))},null,512),[[Q,s.runtimeData.sysConfig.auto_connect]]),t("a",null,c(s.$t("自动连接")),1)])]),t("button",{id:"connect_btn",class:"ss-button",type:"submit",onMousemove:e[13]||(e[13]=(...h)=>s.afd&&s.afd(...h))},c(s.$t("连接")),33)],32),t("a",pc,c(s.$t("如何连接")),1),e[20]||(e[20]=hs(`<div class="wave-pan" style="margin-left:-30px;" data-v-9e3034a9><svg id="login-wave" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 170 70" preserveAspectRatio="none" shape-rendering="auto" data-v-9e3034a9><defs data-v-9e3034a9><path id="gentle-wave" d="M -160 44 c 30 0 58 -18 88 -18 s 58 18 88
                       18 s 58 -18 88 -18 s 58 18 88 18 v 44 h -352 Z" data-v-9e3034a9></path></defs><g class="parallax" data-v-9e3034a9><use xlink:href="#gentle-wave" x="83" y="0" data-v-9e3034a9></use><use xlink:href="#gentle-wave" x="135" y="3" data-v-9e3034a9></use><use xlink:href="#gentle-wave" x="185" y="5" data-v-9e3034a9></use><use xlink:href="#gentle-wave" x="54" y="7" data-v-9e3034a9></use></g></svg></div>`,1))])])],8,nc)):b("",!0),s.tags.page=="Messages"?(m(),d("div",cc,[v(u,{chat:s.runtimeData.chatInfo,onUserClick:s.changeChat,onLoadHistory:s.loadHistory},null,8,["chat","onUserClick","onLoadHistory"])])):b("",!0),s.tags.page=="Friends"?(m(),d("div",lc,[v(l,{list:s.runtimeData.userList,onLoadHistory:s.loadHistory,onUserClick:s.changeChat},null,8,["list","onLoadHistory","onUserClick"])])):b("",!0),t("div",mc,[v(_,{show:s.tags.page=="Options",class:L(s.tags.page=="Options"?"active":""),config:s.runtimeData.sysConfig},null,8,["show","class","config"])])],4)]),s.loginInfo.status&&s.runtimeData.chatInfo&&s.runtimeData.chatInfo.show.id!=0?y((m(),V(_e(s.runtimeData.pageView.chatView),{key:0,ref:"chat","mumber-info":s.runtimeData.chatInfo.info.now_member_info==null?{}:s.runtimeData.chatInfo.info.now_member_info,"merge-list":s.runtimeData.mergeMessageList,list:s.runtimeData.messageList,chat:s.runtimeData.chatInfo,onUserClick:s.changeChat},null,40,["mumber-info","merge-list","list","chat","onUserClick"])),[[T,s.tags.showChat]]):b("",!0),v(Rs,{class:"app-msg",name:"appmsg",tag:"div"},{default:z(()=>[(m(!0),d(I,null,$(s.appMsgs,h=>(m(),d("div",{key:"appmsg-"+h.id},[t("div",null,[v(g,{icon:["fas",h.svg]},null,8,["icon"])]),t("a",null,c(h.text),1),h.autoClose?b("",!0):(m(),d("div",{key:0,onClick:f=>s.popInfo.remove(h.id)},[v(g,{icon:["fas","xmark"]})],8,dc))]))),128))]),_:1}),v(ms,null,{default:z(()=>[s.runtimeData.popBoxList.length>0?(m(),d("div",fc,[t("div",{class:L("pop-box-body ss-card"+(s.runtimeData.popBoxList[0].full?" full":"")+(s.get("option_view_no_window")==!0?"":" window")),style:H("transform: translate(-50%, calc(-50% - "+(s.runtimeData.popBoxList.length>3?3:s.runtimeData.popBoxList.length)*10+"px));"+(s.get("fs_adaptation")>0?` margin-bottom: ${40+Number(s.get("fs_adaptation"))}px;`:""))},[y(t("header",null,[s.runtimeData.popBoxList[0].svg!=null?(m(),d("div",_c,[v(g,{icon:["fas",s.runtimeData.popBoxList[0].svg]},null,8,["icon"])])):b("",!0),t("a",null,c(s.runtimeData.popBoxList[0].title),1),v(g,{icon:["fas","xmark"],onClick:s.removePopBox},null,8,["onClick"])],512),[[T,s.runtimeData.popBoxList[0].title!=null]]),s.runtimeData.popBoxList[0].html?(m(),d("div",{key:0,innerHTML:s.runtimeData.popBoxList[0].html},null,8,vc)):(m(),V(_e(s.runtimeData.popBoxList[0].template),an({key:1,data:s.runtimeData.popBoxList[0].data},s.runtimeData.popBoxList[0].templateValue),null,16,["data"])),y(t("div",hc,[(m(!0),d(I,null,$(s.runtimeData.popBoxList[0].button,(h,f)=>(m(),d("button",{key:"pop-box-btn"+f,class:L("ss-button"+(h.master==!0?" master":"")),onClick:h.fun},c(h.text),11,bc))),128))],512),[[T,s.runtimeData.popBoxList[0].button]]),t("div",yc,[(m(!0),d(I,null,$(s.runtimeData.popBoxList.length,h=>(m(),d("div",{key:"pop-more-"+h,"data-id":h,class:L(h>s.runtimeData.popBoxList.length-1?"hid":""),style:H("margin:-"+2*(h-1)+"px "+(20*h-1-2*(h-1))+"px 0 "+(20*h-1-2*(h-1))+"px;")},null,14,Ec))),128))])],6),t("div",{onClick:e[16]||(e[16]=h=>s.popQuickClose(s.runtimeData.popBoxList[0].allowQuickClose))})])):b("",!0)]),_:1}),y(v(E,{ref:"viewer",class:"viewer",options:s.viewerOpt,images:s.runtimeData.chatInfo.info.image_list,onInited:s.viewerInited,onHide:s.viewerHide,onShow:s.viewerShow},{default:z(h=>[(m(!0),d(I,null,$(h.images,f=>(m(),d("img",{key:"imgView-"+f.index,src:f.img_url},null,8,wc))),128))]),_:1},8,["options","images","onInited","onHide","onShow"]),[[T,s.runtimeData.tags.viewer.show]])])],64)}const Dc=B(Jp,[["render",Oc],["__scopeId","data-v-9e3034a9"]]),Ic=Zs("zh-CN"),Lc={"zh-CN":Ic},se=En({legacy:!1,locale:"zh-CN",fallbackLocale:"zh-CN",silentFallbackWarn:!0,messages:Lc}),w=un(Dc);w.use(se);w.use(nn);w.use(tn);te.add(_n);te.add(vn);w.component("FontAwesomeIcon",hn);w.mount("#app");const xe=new Date().getTime(),Ce=["VERSION","WELCOME","HELLO"],Ae=["50534f","f9a633","8076a3","f0a1a8","92aa8a","606E7A","7abb7e","b573f7","ff5370","99b3db","677480"],qc=Ae[Math.floor(Math.random()*Ae.length)],kc=Ce[Math.floor(Math.random()*Ce.length)];console.log(`%c${kc}%c Stapxs QQ Lite - ${is.version} ( production ) `,`font-weight:bold;background:#${qc};color:#fff;border-radius:7px 0 0 7px;padding:7px 14px;margin:7px 0 7px 7px;`,"background:#e3e8ec;color:#000;border-radius:0 7px 7px 0;display:inline-block;padding:7px 14px;margin:7px 7px 7px 0;");
