(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1289],{99467:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/trading/stocks",function(){return n(24966)}])},15124:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var a=n(12042),s=n(27427),i=n(8014),r=n(50744),l=n.n(r);function c(e){var t=e.className,n=(0,s.Z)(e,["className"]);return(0,i.jsx)("div",(0,a.Z)({className:l()("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",t)},n))}},86374:function(e,t,n){"use strict";var a=n(21157),s=n(8014),i=n(94692),r=n(62044),l=n(46834);t.Z=function(){var e=(0,r.Z)("promos").t;return(0,s.jsxs)("section",{className:"pt-9 pb-15 md:pb-7",children:[(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsxs)("hgroup",{children:[(0,s.jsx)("p",{className:"text-sm font-bold text-dark-grayish-blue",children:e("advantage-subtitle")}),(0,s.jsx)("h2",{className:"mt-5 font-futura-bold text-2xl font-bold text-ft-blue sm:text-3xl",children:e("advantage-title")})]}),(0,s.jsx)("p",{className:"mt-2 text-lg lg:text-xl",children:(0,s.jsx)(i.Z,{href:"/trading/pricing",className:"text-strong-blue hover:text-ft-blue active:text-ft-blue",children:e("advantage-description-1")})}),(0,s.jsx)("p",{className:"mt-2 text-lg text-ft-slate sm:mt-0 lg:text-xl",children:e("advantage-description-2")})]}),(0,s.jsx)("ul",{className:"list-none mt-14 space-y-9 divide-grayish-blue md:mt-7 md:-mb-6 md:space-y-0 md:divide-y",children:[[[e("advantage-item-1-name"),(0,s.jsx)(l.Z,{i18nKey:"promos:advantage-item-1-description",components:{DRIP:(0,s.jsx)(i.Z,{href:"/trading/dividend-reinvestment",className:"text-strong-blue hover:text-ft-blue active:text-ft-blue"}),SLIP:(0,s.jsx)(i.Z,{href:"/trading/securities-lending",className:"text-strong-blue hover:text-ft-blue active:text-ft-blue"})}})],[e("advantage-item-2-name"),e("advantage-item-2-description")],[e("advantage-item-3-name"),e("advantage-item-3-description")]],[[e("advantage-item-4-name"),e("advantage-item-4-description")],[e("advantage-item-5-name"),e("advantage-item-5-description")],[e("advantage-item-6-name"),e("advantage-item-6-description")]]].map((function(e,t){return(0,s.jsx)("li",{className:"md:py-6 lg:py-8",children:(0,s.jsx)("ul",{className:"list-none grid grid-cols-1 gap-y-9 divide-grayish-blue md:-mx-6 md:grid-cols-3 md:divide-x lg:-mx-8",children:e.map((function(e){var t=(0,a.Z)(e,2),n=t[0],i=t[1];return(0,s.jsxs)("li",{className:"md:px-6 lg:px-8",children:[(0,s.jsx)("h3",{className:"font-futura text-xl font-semibold text-ft-slate",children:n}),(0,s.jsx)("p",{className:"mt-1.5 text-base text-ft-slate",children:i})]},n)}))})},t)}))})]})}},61739:function(e,t,n){"use strict";n.d(t,{Af:function(){return f},F3:function(){return x},lj:function(){return h},oe:function(){return u},xG:function(){return m}});var a=n(43692),s=n(12042),i=n(99728),r=n(21157),l=n(61557),c=n(65954),d=function(e){return"zh-CN"===e?"zh-CN":"zh-Hant"===e?"zh-TW":"en-US"},o=function(e,t,n){return("en-US"===n?"".concat(e).concat(t):"".concat(e,"/").concat(n).concat(t)).replace(/\/+$/,"")},u=function(e,t,n,a){var s="https://www.proultimatewealth.com",i={title:n||"",description:a||""};return i.canonical=o(s,e,t),i.languageAlternates=[{href:o(s,e,"en-US"),hrefLang:"en"},{href:o(s,e,"zh-CN"),hrefLang:"zh-hans"},{href:o(s,e,"zh-TW"),hrefLang:"zh-hant"},{href:o(s,e,"en-US"),hrefLang:"x-default"}],i},x=function(e,t){if(e.length<=t)return[e];for(var n=[],a=0;a<e.length;)n.push(e.slice(a,a+t)),a+=t;return n},m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"USD",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Intl.NumberFormat("en-US",(0,i.Z)((0,s.Z)({style:"currency"},n),{currency:t})).format(e)},h=function(e,t,n){return 1===e?t*(1+n):h(e-1,t,n)+t*Math.pow(1+n,e)},f=(function(){var e=(0,a.Z)((function(e,t){var n,a,s,i,r,o,u,x,m,h,f,g=arguments;return(0,l.__generator)(this,(function(l){switch(l.label){case 0:return n=g.length>2&&void 0!==g[2]&&g[2],a=[],s=function(n){var a={fields:["Slug","locale"],locale:"all",pagination:{page:n,pageSize:100}};return t&&(a.filters=t),(0,c.s1)(e,{params:a})},i=function(e){e.length&&e.forEach((function(e){var t=d(e.attributes.locale);a.push({params:n?{slug:[e.attributes.Slug]}:{slug:e.attributes.Slug},locale:t})}))},[4,s(1)];case 1:if(r=l.sent(),o=r.data,u=o.data,x=o.meta,i(u),!(x.pagination.pageCount>1))return[3,3];for(m=[],h=2;h<=x.pagination.pageCount;h+=1)f=s(h),m.push(f);return[4,Promise.all(m)];case 2:l.sent().forEach((function(e){var t=e.data.data;i(t)})),l.label=3;case 3:return[2,a]}}))}))}(),function(){var e=(0,a.Z)((function(e,t,n){var a,s,i,d,o,u,x,m,h,f,g,v,p,j,b,N,_,w,y;return(0,l.__generator)(this,(function(l){switch(l.label){case 0:return o=e.params.slug,u=e.locale,x=function(e){return"zh-CN"===e?"zh-CN":"zh-TW"===e?"zh-Hant":"en"}(u),m={},h=[(0,c.s1)("/api/guides",{params:{locale:x,filters:{Slug:{$eq:o},Category:{$eq:t}},fields:["Slug","Title","Subtitle","Content"],populate:["Section","SEO"]}})],n&&h.push((0,c.s1)("/api/videos",{params:{locale:x,filters:{Slug:{$eq:n}},populate:"Videos"}})),[4,Promise.all(h)];case 1:return f=r.Z.apply(void 0,[l.sent(),2]),g=f[0],v=f[1],p=g.data,(null===(j=p.data)||void 0===j?void 0:j.length)?(b=(0,r.Z)(j,1),N=b[0],m.title=N.attributes.Title,m.subTitle=N.attributes.Subtitle||"",m.slug=N.attributes.Slug,m.content=N.attributes.Content||"",m.sections=N.attributes.Section||null,m.seo={title:(null===(a=N.attributes)||void 0===a||null===(s=a.SEO)||void 0===s?void 0:s.Title)||null,description:(null===(i=N.attributes)||void 0===i||null===(d=i.SEO)||void 0===d?void 0:d.Description)||null},m.videos=[],n&&(_=v.data,(null===(w=_.data)||void 0===w?void 0:w.length)&&(y=(0,r.Z)(w,1),y[0].attributes.Videos.forEach((function(e){var t={title:e.Title,subTitle:e.Time,classNames:"bg-".concat(e.Theme),alt:e.Alt,sources:[{src:e.URL,type:"video/mp4"}]};m.videos.push(t)})))),[2,m]):[2,!1]}}))}))}(),function(e,t){for(var n=null,a=0;a<e.length;a+=1){if(t.includes(e[a].value)){n=e[a];break}if(e[a].options&&(n=f(e[a].options,t)))break}return n})},24966:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return h},default:function(){return f}});var a=n(8014),s=n(62044),i=n(86374);function r(){var e=(0,s.Z)("stocks").t;return(0,a.jsx)("div",{className:"container max-w-7xl my-16 px-8",children:(0,a.jsxs)("div",{className:"grid grid-cols-1 gap-8 md:gap-x-16 md:grid-cols-2",children:[(0,a.jsxs)("div",{className:"md:min-h-[100px]",children:[(0,a.jsx)("h3",{className:"text-ft-blue",children:e("penny_stock")}),(0,a.jsx)("div",{children:e("penny_stock_1")})]}),(0,a.jsxs)("div",{className:"md:min-h-[100px]",children:[(0,a.jsx)("h3",{className:"text-ft-blue",children:e("otc_stock")}),(0,a.jsx)("div",{children:e("otc_stock_1")})]}),(0,a.jsxs)("div",{className:"md:min-h-[100px]",children:[(0,a.jsx)("h3",{className:"text-ft-blue",children:e("etf")}),(0,a.jsx)("div",{children:e("etf_1")})]}),(0,a.jsxs)("div",{className:"md:min-h-[100px]",children:[(0,a.jsx)("h3",{className:"text-ft-blue",children:e("dividend")}),(0,a.jsx)("div",{children:e("dividend_1")})]}),(0,a.jsxs)("div",{className:"md:min-h-[100px]",children:[(0,a.jsx)("h3",{className:"text-ft-blue",children:e("extended_hours")}),(0,a.jsx)("div",{children:e("extended_hours_1")})]}),(0,a.jsxs)("div",{className:"md:min-h-[100px]",children:[(0,a.jsx)("h3",{className:"text-ft-blue",children:e("orders")}),(0,a.jsx)("div",{children:e("orders_1")})]})]})})}var l=n(22319),c=n(15124),d=n(80241),o=n.n(d);function u(){var e=(0,s.Z)("stocks").t;return(0,a.jsx)("div",{className:"bg-[#D2E8FF]",children:(0,a.jsx)("div",{className:"container max-w-7xl py-16",children:(0,a.jsxs)("div",{className:"md:align-center flex flex-col gap-8 md:flex-row",children:[(0,a.jsxs)("div",{className:"flex flex-col justify-center text-center md:max-w-[450px] md:text-left",children:[(0,a.jsx)("h1",{className:"mb-4 lg:text-5xl",children:e("banner_title")}),(0,a.jsx)("div",{className:"text-xl",children:e("banner_subtitle")})]}),(0,a.jsx)("div",{children:(0,a.jsx)(o(),{src:"/images/shared/stocks-hero.png",width:635,height:355,alt:"stocks hero image",priority:!0})})]})})})}function x(){var e=(0,s.Z)("stocks"),t=e.t,n=e.lang;return(0,a.jsx)("div",{className:"container my-16",children:(0,a.jsxs)("div",{className:"text-center",children:[(0,a.jsx)("h3",{className:"mb-4 text-3xl",children:t("award")}),(0,a.jsx)("div",{className:"mb-8 text-lg",children:t("award_1")}),(0,a.jsxs)("div",{className:"flex flex-col justify-center md:flex-row",children:[(0,a.jsx)("div",{children:(0,a.jsx)(o(),{src:"/images/".concat(n.toLowerCase(),"/accolade-1.png"),height:100,width:481,alt:"accolades stockbrokers"})}),(0,a.jsx)("div",{children:(0,a.jsx)(o(),{src:"/images/".concat(n.toLowerCase(),"/accolade-2.png"),height:100,width:467,alt:"accolades kiplingers"})})]})]})})}var m=n(61739),h=!0;function f(){var e=(0,s.Z)("stocks"),t=e.t,n=e.lang,d=(0,m.oe)("/trading/stocks",n,t("seoTitle"),t("seoDescription")),o=d.title,h=d.description,f=d.canonical,g=d.languageAlternates;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.PB,{title:o,description:h,canonical:f,languageAlternates:g}),(0,a.jsxs)("div",{children:[(0,a.jsx)(u,{}),(0,a.jsx)(r,{}),(0,a.jsx)("div",{className:"bg-smoke",children:(0,a.jsx)(c.Z,{children:(0,a.jsx)(i.Z,{})})}),(0,a.jsx)(x,{})]})]})}}},function(e){e.O(0,[2319,9774,2888,179],(function(){return t=99467,e(e.s=t);var t}));var t=e.O();_N_E=t}]);