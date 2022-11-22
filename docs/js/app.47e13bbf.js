(function(){"use strict";var e={8750:function(e,n,o){var r=o(9242),t=o(3396);const i=["src"],s=(0,t._)("footer",null,[(0,t._)("a",{href:"https://github.com/micardona96"},"@micardona96")],-1);function a(e,n,r,a,c,l){const u=(0,t.up)("Searcher"),d=(0,t.up)("Carousel");return(0,t.wg)(),(0,t.iD)("main",null,[(0,t.Wm)(u,{loading:e.loading,onSearch:l.search,onThreshold:n[0]||(n[0]=n=>e.threshold=n)},null,8,["loading","onSearch"]),(0,t.Wm)(d,{threshold:e.threshold,repositories:e.repositories},null,8,["threshold","repositories"]),(0,t._)("img",{class:"astrocat-img",src:o(7933),alt:"astrocat"},null,8,i),s])}var c=o(7139);const l=e=>((0,t.dD)("data-v-4a5f586f"),e=e(),(0,t.Cn)(),e),u={class:"box-center"},d={class:"box"},p=l((()=>(0,t._)("h1",null,"Buscar en GitHub",-1))),h=l((()=>(0,t._)("p",null," Una lista de los 10 repositorios con más estrellas en Github dado un topic y un umbral de estrellas. ",-1))),f={class:"box-input"},g={class:"box-trending"},v=["onClick"];function m(e,n,o,i,s,a){const l=(0,t.up)("Icon"),m=(0,t.up)("Spinner");return(0,t.wg)(),(0,t.iD)("div",u,[(0,t._)("div",d,[p,h,(0,t._)("div",f,[(0,t.Wm)(l,{icon:"search"}),(0,t.wy)((0,t._)("input",{class:"spacer-2",onKeyup:n[0]||(n[0]=(0,r.D2)(((...e)=>a.onEnter&&a.onEnter(...e)),["enter"])),placeholder:"Tema","onUpdate:modelValue":n[1]||(n[1]=e=>s.topic=e)},null,544),[[r.nr,s.topic]]),(0,t.Wm)(m,{loading:o.loading},null,8,["loading"]),(0,t.Wm)(l,{icon:"pipe"}),(0,t.wy)((0,t._)("input",{class:"spacer",type:"number",placeholder:"Umbral","onUpdate:modelValue":n[2]||(n[2]=e=>s.threshold=e)},null,512),[[r.nr,s.threshold]])]),(0,t._)("div",g,[((0,t.wg)(),(0,t.iD)(t.HY,null,(0,t.Ko)(["Swiper","Vuejs","GraphQL","Axios","Github"],(e=>(0,t._)("div",{onClick:(0,r.iM)((n=>a.byTrending(e)),["stop"]),key:e,class:"bubble"},(0,c.zw)(e),9,v))),64)),(0,t._)("div",{onClick:n[3]||(n[3]=(0,r.iM)((e=>s.threshold=1e4),["stop"])),class:"bubble gradient"},"+10K")])])])}const b={class:"icon-box"},w={style:{width:"24px",height:"24px",color:"#8b949e"},viewBox:"0 0 24 24"},C=["d"];function _(e,n,o,r,i,s){return(0,t.wg)(),(0,t.iD)("div",b,[((0,t.wg)(),(0,t.iD)("svg",w,[(0,t._)("path",{fill:"currentColor",d:s.d},null,8,C)]))])}var V={name:"Icon",props:{icon:String},computed:{d(){switch(this.icon){case"lock":return"M20.8 17V15.5C20.8 14.1 19.4 13 18 13S15.2 14.1 15.2 15.5V17C14.6 17 14 17.6 14 18.2V21.7C14 22.4 14.6 23 15.2 23H20.7C21.4 23 22 22.4 22 21.8V18.3C22 17.6 21.4 17 20.8 17M19.5 17H16.5V15.5C16.5 14.7 17.2 14.2 18 14.2S19.5 14.7 19.5 15.5V17M15 12C14.1 12.7 13.5 13.6 13.3 14.7C12.9 14.9 12.5 15 12 15C10.3 15 9 13.7 9 12S10.3 9 12 9 15 10.3 15 12M12 19.5C7 19.5 2.7 16.4 1 12C2.7 7.6 7 4.5 12 4.5S21.3 7.6 23 12C22.8 12.5 22.5 13 22.3 13.5C21.5 12 19.8 11 18 11C17.6 11 17.3 11.1 16.9 11.1C16.5 8.8 14.5 7 12 7C9.2 7 7 9.2 7 12S9.2 17 12 17H12.3C12.1 17.4 12 17.8 12 18.2V19.5Z";case"star":return"M8.58,17.25L9.5,13.36L6.5,10.78L10.45,10.41L12,6.8L13.55,10.45L17.5,10.78L14.5,13.36L15.42,17.25L12,15.19L8.58,17.25M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z";case"pipe":return"M9,3H11V5H9V3M13,3H15V5H13V3M9,7H11V9H9V7M13,7H15V9H13V7M9,11H11V13H9V11M13,11H15V13H13V11M9,15H11V17H9V15M13,15H15V17H13V15M9,19H11V21H9V19M13,19H15V21H13V19Z";case"search":return"M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"}}}},H=o(89);const y=(0,H.Z)(V,[["render",_],["__scopeId","data-v-b86cc10c"]]);var S=y;const k={class:"box-loading"},M={key:0,class:"spinner"};function A(e,n,o,r,i,s){return(0,t.wg)(),(0,t.iD)("div",k,[o.loading?((0,t.wg)(),(0,t.iD)("div",M)):(0,t.kq)("",!0)])}var L={name:"Spinner",props:{loading:Boolean}};const x=(0,H.Z)(L,[["render",A],["__scopeId","data-v-255255d4"]]);var I=x,D={name:"Searcher",props:{loading:Boolean},components:{Icon:S,Spinner:I},data(){return{topic:"",threshold:void 0}},watch:{threshold(e){this.$emit("threshold",e)}},methods:{onEnter(){this.$emit("search",this.topic)},byTrending(e){this.topic=e,this.onEnter()}}};const z=(0,H.Z)(D,[["render",m],["__scopeId","data-v-4a5f586f"]]);var O=z;const Z={key:0,class:"threshold-icon"},j={class:"star-box"};function T(e,n,o,i,s,a){const l=(0,t.up)("Icon"),u=(0,t.up)("swiper-slide"),d=(0,t.up)("swiper");return(0,t.wg)(),(0,t.j4)(r.uT,{name:"slide-left"},{default:(0,t.w5)((()=>[0!=o.repositories.length?((0,t.wg)(),(0,t.j4)(d,{key:0,"slides-per-view":"auto","space-between":20,class:"card-box"},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(o.repositories,((e,n)=>((0,t.wg)(),(0,t.j4)(u,{onClick:(0,r.iM)((n=>a.launch(e)),["stop"]),class:(0,c.C_)(["card",e.node.stargazerCount<o.threshold&&"threshold"]),key:e.name},{default:(0,t.w5)((()=>[e.node.stargazerCount<o.threshold?((0,t.wg)(),(0,t.iD)("div",Z,[(0,t.Wm)(l,{icon:"lock"})])):(0,t.kq)("",!0),(0,t._)("h3",null,"#"+(0,c.zw)(n+1)+" "+(0,c.zw)(e.node.name),1),(0,t._)("p",null,(0,c.zw)(e.node.description),1),(0,t._)("div",j,[(0,t.Wm)(l,{icon:"star"}),(0,t._)("h1",null,(0,c.zw)(a.parseStars(e.node.stargazerCount)),1)])])),_:2},1032,["onClick","class"])))),128))])),_:1})):(0,t.kq)("",!0)])),_:1})}var q=o(2878),E={name:"Carousel",props:{repositories:Array,threshold:Number},components:{Swiper:q.tq,SwiperSlide:q.o5,Icon:S},methods:{launch(e){const n=this.threshold??0;e.node.stargazerCount>=n&&window.open(e.node.url,"_blank")},parseStars(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}}};const G=(0,H.Z)(E,[["render",T],["__scopeId","data-v-e239887e"]]);var B=G,W=o(70);const K=(e,n)=>{const o={Authorization:`bearer ${n}`},r={query:`query Repositories {\n        topic(name: "${e.toLowerCase()}") {\n          id\n          name\n          repositories(orderBy: {field: STARGAZERS, direction: DESC}, first: 10) {\n            edges {\n              node {\n                description\n                url\n                stargazerCount\n                name\n              }\n            }\n          }\n        }\n      }`};return(0,W.ZP)({url:"https://api.github.com/graphql",method:"post",headers:o,data:r})};var P={name:"App",components:{Searcher:O,Carousel:B},async created(){const e=await prompt("INSERT API KEY GITHUB");this.token=e},data:()=>({token:"",topic:"",threshold:void 0,loading:!1,repositories:[]}),methods:{search(e){this.loading=!0,this.repositories=[],K(e,this.token).then((e=>{this.repositories=e.data.data.topic.repositories.edges})).catch((e=>{console.error(e)})).finally((()=>{this.loading=!1}))}}};const U=(0,H.Z)(P,[["render",a]]);var R=U;(0,r.ri)(R).mount("#app")},7933:function(e,n,o){e.exports=o.p+"img/hero-drone.f5e89494.webp"}},n={};function o(r){var t=n[r];if(void 0!==t)return t.exports;var i=n[r]={exports:{}};return e[r](i,i.exports,o),i.exports}o.m=e,function(){var e=[];o.O=function(n,r,t,i){if(!r){var s=1/0;for(u=0;u<e.length;u++){r=e[u][0],t=e[u][1],i=e[u][2];for(var a=!0,c=0;c<r.length;c++)(!1&i||s>=i)&&Object.keys(o.O).every((function(e){return o.O[e](r[c])}))?r.splice(c--,1):(a=!1,i<s&&(s=i));if(a){e.splice(u--,1);var l=t();void 0!==l&&(n=l)}}return n}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[r,t,i]}}(),function(){o.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(n,{a:n}),n}}(),function(){o.d=function(e,n){for(var r in n)o.o(n,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){o.p="/Github-API-GraphQL/"}(),function(){var e={143:0};o.O.j=function(n){return 0===e[n]};var n=function(n,r){var t,i,s=r[0],a=r[1],c=r[2],l=0;if(s.some((function(n){return 0!==e[n]}))){for(t in a)o.o(a,t)&&(o.m[t]=a[t]);if(c)var u=c(o)}for(n&&n(r);l<s.length;l++)i=s[l],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(u)},r=self["webpackChunkgithub_api_graphql"]=self["webpackChunkgithub_api_graphql"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=o.O(void 0,[998],(function(){return o(8750)}));r=o.O(r)})();
//# sourceMappingURL=app.47e13bbf.js.map