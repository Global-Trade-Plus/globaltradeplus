(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8671],{52323:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/trading/etfs",function(){return t(63474)}])},61739:function(e,a,t){"use strict";t.d(a,{Af:function(){return v},F3:function(){return m},lj:function(){return x},oe:function(){return h},xG:function(){return u}});var s=t(43692),n=t(12042),r=t(99728),i=t(21157),c=t(61557),d=t(65954),l=function(e){return"zh-CN"===e?"zh-CN":"zh-Hant"===e?"zh-TW":"en-US"},o=function(e,a,t){return("en-US"===t?"".concat(e).concat(a):"".concat(e,"/").concat(t).concat(a)).replace(/\/+$/,"")},h=function(e,a,t,s){var n="https://www.proultimatewealth.com",r={title:t||"",description:s||""};return r.canonical=o(n,e,a),r.languageAlternates=[{href:o(n,e,"en-US"),hrefLang:"en"},{href:o(n,e,"zh-CN"),hrefLang:"zh-hans"},{href:o(n,e,"zh-TW"),hrefLang:"zh-hant"},{href:o(n,e,"en-US"),hrefLang:"x-default"}],r},m=function(e,a){if(e.length<=a)return[e];for(var t=[],s=0;s<e.length;)t.push(e.slice(s,s+a)),s+=a;return t},u=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"USD",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Intl.NumberFormat("en-US",(0,r.Z)((0,n.Z)({style:"currency"},t),{currency:a})).format(e)},x=function(e,a,t){return 1===e?a*(1+t):x(e-1,a,t)+a*Math.pow(1+t,e)},v=(function(){var e=(0,s.Z)((function(e,a){var t,s,n,r,i,o,h,m,u,x,v,g=arguments;return(0,c.__generator)(this,(function(c){switch(c.label){case 0:return t=g.length>2&&void 0!==g[2]&&g[2],s=[],n=function(t){var s={fields:["Slug","locale"],locale:"all",pagination:{page:t,pageSize:100}};return a&&(s.filters=a),(0,d.s1)(e,{params:s})},r=function(e){e.length&&e.forEach((function(e){var a=l(e.attributes.locale);s.push({params:t?{slug:[e.attributes.Slug]}:{slug:e.attributes.Slug},locale:a})}))},[4,n(1)];case 1:if(i=c.sent(),o=i.data,h=o.data,m=o.meta,r(h),!(m.pagination.pageCount>1))return[3,3];for(u=[],x=2;x<=m.pagination.pageCount;x+=1)v=n(x),u.push(v);return[4,Promise.all(u)];case 2:c.sent().forEach((function(e){var a=e.data.data;r(a)})),c.label=3;case 3:return[2,s]}}))}))}(),function(){var e=(0,s.Z)((function(e,a,t){var s,n,r,l,o,h,m,u,x,v,g,_,p,f,j,N,b,w,y;return(0,c.__generator)(this,(function(c){switch(c.label){case 0:return o=e.params.slug,h=e.locale,m=function(e){return"zh-CN"===e?"zh-CN":"zh-TW"===e?"zh-Hant":"en"}(h),u={},x=[(0,d.s1)("/api/guides",{params:{locale:m,filters:{Slug:{$eq:o},Category:{$eq:a}},fields:["Slug","Title","Subtitle","Content"],populate:["Section","SEO"]}})],t&&x.push((0,d.s1)("/api/videos",{params:{locale:m,filters:{Slug:{$eq:t}},populate:"Videos"}})),[4,Promise.all(x)];case 1:return v=i.Z.apply(void 0,[c.sent(),2]),g=v[0],_=v[1],p=g.data,(null===(f=p.data)||void 0===f?void 0:f.length)?(j=(0,i.Z)(f,1),N=j[0],u.title=N.attributes.Title,u.subTitle=N.attributes.Subtitle||"",u.slug=N.attributes.Slug,u.content=N.attributes.Content||"",u.sections=N.attributes.Section||null,u.seo={title:(null===(s=N.attributes)||void 0===s||null===(n=s.SEO)||void 0===n?void 0:n.Title)||null,description:(null===(r=N.attributes)||void 0===r||null===(l=r.SEO)||void 0===l?void 0:l.Description)||null},u.videos=[],t&&(b=_.data,(null===(w=b.data)||void 0===w?void 0:w.length)&&(y=(0,i.Z)(w,1),y[0].attributes.Videos.forEach((function(e){var a={title:e.Title,subTitle:e.Time,classNames:"bg-".concat(e.Theme),alt:e.Alt,sources:[{src:e.URL,type:"video/mp4"}]};u.videos.push(a)})))),[2,u]):[2,!1]}}))}))}(),function(e,a){for(var t=null,s=0;s<e.length;s+=1){if(a.includes(e[s].value)){t=e[s];break}if(e[s].options&&(t=v(e[s].options,a)))break}return t})},63474:function(e,a,t){"use strict";t.r(a),t.d(a,{__N_SSG:function(){return z},default:function(){return B}});var s=t(8014),n=t(46834),r=t(62044),i="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center",c="text-base font-bold border-b-[3px] border-solid border-grayish-blue text-ft-slate py-3 col-span-2",d="".concat(i," text-base text-slate"),l="".concat(d," text-center justify-center"),o="".concat(i," font-bold text-lg text-liberty bg-lividity text-center flex items-center justify-center"),h="".concat(c," text-center flex items-center justify-center");var m=function(){var e=(0,r.Z)("etfs").t;return(0,s.jsxs)("div",{className:"container mb-8 max-w-7xl",children:[(0,s.jsx)("div",{className:"font-futura text-ft-blue mb-5 text-center text-2xl font-bold lg:text-3xl xl:text-4xl",children:e("broker.header")}),(0,s.jsx)("div",{className:"overflow-x-auto pb-4",children:(0,s.jsxs)("div",{className:"mx-auto grid w-[1200px] grid-cols-10 grid-rows-6",children:[(0,s.jsx)("div",{className:"".concat(c," flex items-center pl-1 sm:pl-2.5")}),(0,s.jsx)("div",{className:"".concat(o," !border-b-[3px]"),children:"globaltradeplus"}),(0,s.jsx)("div",{className:h,children:"TD Ameritrade"}),(0,s.jsx)("div",{className:h,children:"Fidelity"}),(0,s.jsx)("div",{className:h,children:"E*Trade"}),(0,s.jsx)("div",{className:"".concat(d," pl-1 sm:px-2.5"),children:e("broker.number_of_commission")}),(0,s.jsx)("div",{className:o,children:"2200+"}),(0,s.jsx)("div",{className:l,children:"300+"}),(0,s.jsx)("div",{className:l,children:"93"}),(0,s.jsx)("div",{className:l,children:"200+"}),(0,s.jsx)("div",{className:"".concat(d," pl-1 sm:px-2.5"),children:e("broker.morning_start")}),(0,s.jsx)("div",{className:o,children:"1100+"}),(0,s.jsx)("div",{className:l,children:"76"}),(0,s.jsx)("div",{className:l,children:"52"}),(0,s.jsx)("div",{className:l,children:"53"}),(0,s.jsx)("div",{className:"".concat(d," pl-1 sm:px-2.5"),children:e("broker.number_of_etf")}),(0,s.jsx)("div",{className:o,children:"100"}),(0,s.jsx)("div",{className:l,children:"8"}),(0,s.jsx)("div",{className:l,children:"2"}),(0,s.jsx)("div",{className:l,children:"13"}),(0,s.jsx)("div",{className:"".concat(d," pl-1 sm:px-2.5"),children:e("broker.redemption")}),(0,s.jsx)("div",{className:o,children:"$0"}),(0,s.jsx)("div",{className:l,children:"$19.99"}),(0,s.jsxs)("div",{className:l,children:["$12.95",(0,s.jsx)("sup",{children:"1"})]}),(0,s.jsxs)("div",{className:l,children:["$19.99",(0,s.jsx)("sup",{children:"2"})]}),(0,s.jsx)("div",{className:"".concat(d," pl-1 sm:px-2.5"),children:e("broker.enrollment")}),(0,s.jsx)("div",{className:o,children:e("broker.no")}),(0,s.jsx)("div",{className:l,children:e("broker.yes")}),(0,s.jsx)("div",{className:l,children:e("broker.no")}),(0,s.jsx)("div",{className:l,children:e("broker.no")})]})}),(0,s.jsx)("div",{className:"text-dark-grayish-blue mb-4 text-xs",children:(0,s.jsx)(n.Z,{i18nKey:"broker.bottom_1",ns:"etfs",components:{sup:(0,s.jsx)("sup",{})},className:"text-dark-grayish-blue mb-4 text-xs"})}),(0,s.jsx)("div",{className:"text-dark-grayish-blue mb-8 text-xs",children:(0,s.jsx)(n.Z,{i18nKey:"broker.bottom_2",ns:"etfs",components:{sup:(0,s.jsx)("sup",{})},className:"text-dark-grayish-blue mb-8 text-xs"})}),(0,s.jsx)("div",{className:"text-dark-grayish-blue text-xs",children:e("broker.bottom_3")})]})},u=t(22319),x=t(61739),v=t(25906),g=t.n(v),_=[{title:"advantages.item_1.header",desc:"advantages.item_1.desc"},{title:"advantages.item_2.header",desc:"advantages.item_2.desc"},{title:"advantages.item_3.header",desc:"advantages.item_3.desc"},{title:"advantages.item_4.header",desc:"advantages.item_4.desc"},{title:"advantages.item_5.header",desc:"advantages.item_5.desc"},{title:"advantages.item_6.header",desc:"advantages.item_6.desc"}];var p=function(){var e=(0,r.Z)("etfs").t;return(0,s.jsx)("div",{className:g().container,children:(0,s.jsxs)("div",{className:g().wrapper,children:[(0,s.jsx)("div",{className:g().header,children:e("advantages.header")}),(0,s.jsx)("div",{className:g().advantages,children:_.map((function(a){return(0,s.jsxs)("div",{className:g().advantage,children:[(0,s.jsx)("div",{className:g().advantageHeader,children:e(a.title)}),(0,s.jsx)("div",{className:g().advantageDesc,children:e(a.desc)})]},a.title)}))})]})})},f=t(80241),j=t.n(f),N=t(12593),b=t.n(N);var w=function(){var e=(0,r.Z)("etfs"),a=e.t,t=e.lang;return(0,s.jsx)("div",{className:b().container,children:(0,s.jsxs)("div",{className:b().wrapper,children:[(0,s.jsx)("div",{className:b().header,children:a("Award-Winning Broker")}),(0,s.jsx)("div",{className:b().desc,children:a("globaltradeplus was established in New York in 1985 and is a pioneer in the online brokerage industry")}),(0,s.jsxs)("div",{className:b().images,children:[(0,s.jsxs)("div",{className:b().firstImage,children:[(0,s.jsx)("div",{className:"xl:hidden",children:(0,s.jsx)(j(),{src:"/images/".concat(t.toLowerCase(),"/accolade-1.png"),alt:a("Award-Winning Broker"),width:316,height:62})}),(0,s.jsx)("div",{className:"hidden xl:block",children:(0,s.jsx)(j(),{src:"/images/".concat(t.toLowerCase(),"/accolade-1.png"),alt:a("Award-Winning Broker"),width:400,height:78})})]}),(0,s.jsx)("div",{className:"xl:hidden",children:(0,s.jsx)(j(),{src:"/images/".concat(t.toLowerCase(),"/accolade-2.png"),alt:a("Award-Winning Broker"),width:380,height:78})}),(0,s.jsx)("div",{className:"hidden xl:block",children:(0,s.jsx)(j(),{src:"/images/".concat(t.toLowerCase(),"/accolade-2.png"),alt:a("Award-Winning Broker"),width:480,height:99})})]})]})})},y=t(65742),k=t.n(y);var S=function(){var e=(0,r.Z)("etfs"),a=e.t,t=e.lang;return(0,s.jsx)("div",{className:k().container,children:(0,s.jsxs)("div",{className:k().wrapper,children:[(0,s.jsxs)("div",{className:k().leftSection,children:[(0,s.jsx)("div",{className:"lg:hidden",children:(0,s.jsx)(j(),{src:"/images/".concat(t.toLowerCase(),"/etf-hero.svg"),alt:a("landing.header"),priority:!0,width:200,height:200})}),(0,s.jsx)("div",{className:"hidden lg:block xl:hidden",children:(0,s.jsx)(j(),{src:"/images/".concat(t.toLowerCase(),"/etf-hero.svg"),alt:a("landing.header"),priority:!0,width:267,height:267})}),(0,s.jsx)("div",{className:"hidden xl:block",children:(0,s.jsx)(j(),{src:"/images/".concat(t.toLowerCase(),"/etf-hero.svg"),alt:a("landing.header"),priority:!0,width:304,height:304})})]}),(0,s.jsxs)("div",{className:k().rightSection,children:[(0,s.jsx)("div",{className:k().headerWrapper,children:(0,s.jsx)("div",{className:k().header,children:a("landing.header")})}),(0,s.jsx)("div",{className:k().desc,children:a("Over 2,200+ ETFs to trade")}),(0,s.jsx)("a",{className:k().openAccountBtn,href:"https://signup.proultimatewealth.com/apply/".concat(t.toLowerCase()),rel:"noopener noreferrer",children:a("landing.open_account")})]})]})})},A=t(23690),C=t.n(A),T=[{title:"why_trade.item_1.header",desc:"why_trade.item_1.desc",image:"/images/etf1.png"},{title:"why_trade.item_2.header",desc:"why_trade.item_2.desc",image:"/images/etf2.png"},{title:"why_trade.item_3.header",desc:"why_trade.item_3.desc",image:"/images/etf3.png"}];var L=function(){var e=(0,r.Z)("etfs").t;return(0,s.jsx)("div",{className:C().container,children:(0,s.jsxs)("div",{className:C().wrapper,children:[(0,s.jsx)("div",{className:C().header,children:e("why_trade.header")}),(0,s.jsx)("div",{className:C().items,children:T.map((function(a){return(0,s.jsxs)("div",{className:C().item,children:[(0,s.jsx)("div",{className:"xl:hidden",children:(0,s.jsx)(j(),{src:a.image,alt:e(a.title),width:179,height:57})}),(0,s.jsx)("div",{className:"hidden xl:block",children:(0,s.jsx)(j(),{src:a.image,alt:e(a.title),width:280,height:90})}),(0,s.jsx)("div",{className:C().itemHeader,children:e(a.title)}),(0,s.jsx)("div",{className:C().itemDesc,children:e(a.desc)})]},a.title)}))})]})})},W=t(81673),Z=t.n(W),z=!0;function B(){var e=(0,r.Z)("etfs"),a=e.t,t=e.lang,n=(0,x.oe)("/trading/etfs",t,a("title"),a("description")),i=n.title,c=n.description,d=n.canonical,l=n.languageAlternates;return(0,s.jsxs)("div",{className:Z().container,children:[(0,s.jsx)(u.PB,{title:i,description:c,canonical:d,languageAlternates:l}),(0,s.jsx)(S,{}),(0,s.jsx)(p,{}),(0,s.jsx)(L,{}),(0,s.jsx)(m,{}),(0,s.jsx)(w,{}),(0,s.jsx)("div",{id:"etf-disclaimer",className:"mx-auto max-w-7xl px-5",children:(0,s.jsx)("div",{className:"space-y-4 border-t border-grayish-blue py-12",children:a("disclaimer",null,{returnObjects:!0}).map((function(e,a){return(0,s.jsx)("p",{className:"text-xs text-[#96a1b1]",children:e},a)}))})})]})}},25906:function(e){e.exports={container:"Advantages_container__Svcdc",wrapper:"Advantages_wrapper__KMvil",header:"Advantages_header__dkCm2",advantages:"Advantages_advantages__SjgRH",advantage:"Advantages_advantage__IXeuQ",advantageHeader:"Advantages_advantageHeader__1qXg3",advantageDesc:"Advantages_advantageDesc__8qwSR"}},12593:function(e){e.exports={container:"Award_container__B547q",wrapper:"Award_wrapper__sYsdz",header:"Award_header__iBJ4B",desc:"Award_desc__JkBY_",images:"Award_images__AThxe",firstImage:"Award_firstImage__xxkCF"}},65742:function(e){e.exports={container:"Landing_container__ypb1o",wrapper:"Landing_wrapper__4qIvc",leftSection:"Landing_leftSection__EkcCA",rightSection:"Landing_rightSection__DceWh",header:"Landing_header__rH3Rh",desc:"Landing_desc__WAH83",openAccountBtn:"Landing_openAccountBtn__S_wZ8"}},23690:function(e){e.exports={container:"WhyTrade_container__oykqV",wrapper:"WhyTrade_wrapper__VSD_Z",header:"WhyTrade_header__BOyFv",items:"WhyTrade_items__Y44LI",item:"WhyTrade_item___izVK",itemHeader:"WhyTrade_itemHeader__OZnjJ",itemDesc:"WhyTrade_itemDesc__7NWPN"}},81673:function(e){e.exports={container:"Home_container__97eC3"}}},function(e){e.O(0,[2319,9774,2888,179],(function(){return a=52323,e(e.s=a);var a}));var a=e.O();_N_E=a}]);