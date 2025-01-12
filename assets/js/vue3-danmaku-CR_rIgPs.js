import{f as I,t as P,A as R,g as V,d as _,a as f,c as o,E as M,o as q,G,e as U,H as j,h as F,n as J}from"./@vue-BVdG3p0Z.js";var X=_({name:"vue3-danmaku",components:{},props:{danmus:{type:Array,required:!0,default:()=>[]},channels:{type:Number,default:0},autoplay:{type:Boolean,default:!0},loop:{type:Boolean,default:!1},useSlot:{type:Boolean,default:!1},debounce:{type:Number,default:100},speeds:{type:Number,default:200},randomChannel:{type:Boolean,default:!1},fontSize:{type:Number,default:18},top:{type:Number,default:4},right:{type:Number,default:0},isSuspend:{type:Boolean,default:!1},extraStyle:{type:String,default:""}},emits:["list-end","play-end","dm-over","dm-out","update:danmus"],setup(a,{emit:d,slots:b}){let c=f(document.createElement("div")),l=f(document.createElement("div"));const v=f(0),L=f(0);let C=0;const $=f(0),B=f(0),p=f(0),E=f(!1),g=f(!1),k=f({}),u=function(n,s,e="modelValue",t){return o({get:()=>n[e],set:h=>{s(`update:${e}`,h)}})}(a,d,"danmus"),i=M({channels:o(()=>a.channels||$.value),autoplay:o(()=>a.autoplay),loop:o(()=>a.loop),useSlot:o(()=>a.useSlot),debounce:o(()=>a.debounce),randomChannel:o(()=>a.randomChannel)}),r=M({height:o(()=>B.value),fontSize:o(()=>a.fontSize),speeds:o(()=>a.speeds),top:o(()=>a.top),right:o(()=>a.right)});function z(){A(),a.isSuspend&&function(){let n=[];l.value.addEventListener("mouseover",s=>{let e=s.target;e.className.includes("dm")||(e=e.closest(".dm")||e),e.className.includes("dm")&&(n.includes(e)||(d("dm-over",{el:e}),e.classList.add("pause"),n.push(e)))}),l.value.addEventListener("mouseout",s=>{let e=s.target;e.className.includes("dm")||(e=e.closest(".dm")||e),e.className.includes("dm")&&(d("dm-out",{el:e}),e.classList.remove("pause"),n.forEach(t=>{t.classList.remove("pause")}),n=[])})}(),i.autoplay&&H()}function A(){if(v.value=c.value.offsetWidth,L.value=c.value.offsetHeight,v.value===0||L.value===0)throw new Error("获取不到容器宽高")}function H(){g.value=!1,C||(C=window.setInterval(()=>function(){if(!g.value&&u.value.length)if(p.value>u.value.length-1){const n=l.value.children.length;i.loop&&(n<p.value&&(d("list-end"),p.value=0),N())}else N()}(),i.debounce))}function N(n){const s=i.loop?p.value%u.value.length:p.value,e=n||u.value[s];let t=document.createElement("div");i.useSlot?t=function(h,m){return j({render:()=>F("div",{},[b.dm&&b.dm({danmu:h,index:m})])}).mount(document.createElement("div"))}(e,s).$el:(t.innerHTML=e,t.setAttribute("style",a.extraStyle),t.style.fontSize=`${r.fontSize}px`,t.style.lineHeight=`${r.fontSize}px`),t.classList.add("dm"),l.value.appendChild(t),t.style.opacity="0",J(()=>{r.height||(B.value=t.offsetHeight),i.channels||($.value=Math.floor(L.value/(r.height+r.top)));let h=function(m){let w=[...Array(i.channels).keys()];i.randomChannel&&(w=w.sort(()=>.5-Math.random()));for(let y of w){const x=k.value[y];if(!x||!x.length)return k.value[y]=[m],m.addEventListener("animationend",()=>k.value[y].splice(0,1)),y%i.channels;for(let S=0;S<x.length;S++){const W=D(x[S])-10;if(W<=.88*(m.offsetWidth-x[S].offsetWidth)||W<=0)break;if(S===x.length-1)return k.value[y].push(m),m.addEventListener("animationend",()=>k.value[y].splice(0,1)),y%i.channels}}return-1}(t);if(h>=0){const m=t.offsetWidth,w=r.height;t.classList.add("move"),t.dataset.index=`${s}`,t.dataset.channel=h.toString(),t.style.opacity="1",t.style.top=h*(w+r.top)+"px",t.style.width=m+r.right+"px",t.style.setProperty("--dm-scroll-width",`-${v.value+m}px`),t.style.left=`${v.value}px`,t.style.animationDuration=v.value/r.speeds+"s",t.addEventListener("animationend",()=>{Number(t.dataset.index)!==u.value.length-1||i.loop||d("play-end",t.dataset.index),l.value&&l.value.removeChild(t)}),p.value++}else l.value.removeChild(t)})}function D(n){const s=n.offsetWidth||parseInt(n.style.width),e=n.getBoundingClientRect().right||l.value.getBoundingClientRect().right+s;return l.value.getBoundingClientRect().right-e}function T(){clearInterval(C),C=0,p.value=0}return q(()=>{z()}),G(()=>{T()}),{container:c,dmContainer:l,hidden:E,paused:g,danmuList:u,getPlayState:function(){return!g.value},resize:function(){A();const n=l.value.getElementsByClassName("dm");for(let s=0;s<n.length;s++){const e=n[s];e.style.setProperty("--dm-scroll-width",`-${v.value+e.offsetWidth}px`),e.style.left=`${v.value}px`,e.style.animationDuration=v.value/r.speeds+"s"}},play:H,pause:function(){g.value=!0},stop:function(){k.value={},l.value.innerHTML="",g.value=!0,E.value=!1,T()},show:function(){E.value=!1},hide:function(){E.value=!0},reset:function(){B.value=0,z()},add:function(n){if(p.value===u.value.length)return u.value.push(n),u.value.length-1;{const s=p.value%u.value.length;return u.value.splice(s,0,n),s+1}},push:function(n){return u.value.push(n),u.value.length-1},insert:N}}});const K={ref:"container",class:"vue-danmaku"};(function(a,d){d===void 0&&(d={});var b=d.insertAt;if(typeof document<"u"){var c=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css",b==="top"&&c.firstChild?c.insertBefore(l,c.firstChild):c.appendChild(l),l.styleSheet?l.styleSheet.cssText=a:l.appendChild(document.createTextNode(a))}})(`.vue-danmaku {
  position: relative;
  overflow: hidden;
}
.vue-danmaku .danmus {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
.vue-danmaku .danmus.show {
  opacity: 1;
}
.vue-danmaku .danmus.paused .dm.move {
  animation-play-state: paused;
}
.vue-danmaku .danmus .dm {
  position: absolute;
  font-size: 20px;
  color: #ddd;
  white-space: pre;
  transform: translateX(0);
  transform-style: preserve-3d;
}
.vue-danmaku .danmus .dm.move {
  will-change: transform;
  animation-name: moveLeft;
  animation-timing-function: linear;
  animation-play-state: running;
}
.vue-danmaku .danmus .dm.pause {
  animation-play-state: paused;
  z-index: 100;
}
@keyframes moveLeft {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(var(--dm-scroll-width));
  }
}
@-webkit-keyframes moveLeft {
  from {
    -webkit-transform: translateX(0);
  }
  to {
    -webkit-transform: translateX(var(--dm-scroll-width));
  }
}`),X.render=function(a,d,b,c,l,v){return U(),I("div",K,[P("div",{ref:"dmContainer",class:R(["danmus",{show:!a.hidden},{paused:a.paused}])},null,2),V(a.$slots,"default")],512)},X.__file="src/lib/Danmaku.vue";export{X as f};
