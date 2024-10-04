(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8276],{70851:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/history",function(){return n(5595)}])},36137:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var r=n(8014),a=n(62044),i=n(75657),s=n.n(i),l=n(75332);function o(){var t=(0,a.Z)("about-tab-nav").t,e=(0,l.useRouter)().pathname;return(0,r.jsx)("nav",{className:"bg-smoke",children:(0,r.jsxs)("ul",{className:"m-0 mx-auto flex max-w-md list-none justify-around",children:[(0,r.jsx)("li",{className:"flex",children:(0,r.jsx)(s(),{href:"/about",className:"text-2xl",children:(0,r.jsx)("a",{"aria-current":"/about"===e?"page":void 0,className:"block px-2 py-4 text-sm text-ft-slate aria-[current=page]:border-b-2 md:text-base",children:t("aboutTab")})})}),(0,r.jsx)("li",{className:"flex",children:(0,r.jsx)(s(),{href:"/history",children:(0,r.jsx)("a",{"aria-current":"/history"===e?"page":void 0,className:"block px-2 py-4 text-sm text-ft-slate aria-[current=page]:border-b-2 md:text-base",children:t("historyTab")})})}),(0,r.jsx)("li",{className:"flex",children:(0,r.jsx)(s(),{href:"/corporate-responsibility",children:(0,r.jsx)("a",{"aria-current":"/corporate-responsibility"===e?"page":void 0,className:"block px-2 py-4 text-sm text-ft-slate aria-[current=page]:border-b-2 md:text-base",children:t("corporateResponsibilityTab")})})}),(0,r.jsx)("li",{className:"flex",children:(0,r.jsx)(s(),{href:"/press",children:(0,r.jsx)("a",{"aria-current":"/press"===e?"page":void 0,className:"block px-2 py-4 text-sm text-ft-slate aria-[current=page]:border-b-2 md:text-base",children:t("pressTab")})})})]})})}},61739:function(t,e,n){"use strict";n.d(e,{Af:function(){return b},F3:function(){return d},lj:function(){return p},oe:function(){return h},xG:function(){return f}});var r=n(43692),a=n(12042),i=n(99728),s=n(21157),l=n(61557),o=n(65954),c=function(t){return"zh-CN"===t?"zh-CN":"zh-Hant"===t?"zh-TW":"en-US"},u=function(t,e,n){return("en-US"===n?"".concat(t).concat(e):"".concat(t,"/").concat(n).concat(e)).replace(/\/+$/,"")},h=function(t,e,n,r){var a="https://www.proultimatewealth.com",i={title:n||"",description:r||""};return i.canonical=u(a,t,e),i.languageAlternates=[{href:u(a,t,"en-US"),hrefLang:"en"},{href:u(a,t,"zh-CN"),hrefLang:"zh-hans"},{href:u(a,t,"zh-TW"),hrefLang:"zh-hant"},{href:u(a,t,"en-US"),hrefLang:"x-default"}],i},d=function(t,e){if(t.length<=e)return[t];for(var n=[],r=0;r<t.length;)n.push(t.slice(r,r+e)),r+=e;return n},f=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"USD",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Intl.NumberFormat("en-US",(0,i.Z)((0,a.Z)({style:"currency"},n),{currency:e})).format(t)},p=function(t,e,n){return 1===t?e*(1+n):p(t-1,e,n)+e*Math.pow(1+n,t)},b=(function(){var t=(0,r.Z)((function(t,e){var n,r,a,i,s,u,h,d,f,p,b,x=arguments;return(0,l.__generator)(this,(function(l){switch(l.label){case 0:return n=x.length>2&&void 0!==x[2]&&x[2],r=[],a=function(n){var r={fields:["Slug","locale"],locale:"all",pagination:{page:n,pageSize:100}};return e&&(r.filters=e),(0,o.s1)(t,{params:r})},i=function(t){t.length&&t.forEach((function(t){var e=c(t.attributes.locale);r.push({params:n?{slug:[t.attributes.Slug]}:{slug:t.attributes.Slug},locale:e})}))},[4,a(1)];case 1:if(s=l.sent(),u=s.data,h=u.data,d=u.meta,i(h),!(d.pagination.pageCount>1))return[3,3];for(f=[],p=2;p<=d.pagination.pageCount;p+=1)b=a(p),f.push(b);return[4,Promise.all(f)];case 2:l.sent().forEach((function(t){var e=t.data.data;i(e)})),l.label=3;case 3:return[2,r]}}))}))}(),function(){var t=(0,r.Z)((function(t,e,n){var r,a,i,c,u,h,d,f,p,b,x,g,m,v,y,j,N,S,_;return(0,l.__generator)(this,(function(l){switch(l.label){case 0:return u=t.params.slug,h=t.locale,d=function(t){return"zh-CN"===t?"zh-CN":"zh-TW"===t?"zh-Hant":"en"}(h),f={},p=[(0,o.s1)("/api/guides",{params:{locale:d,filters:{Slug:{$eq:u},Category:{$eq:e}},fields:["Slug","Title","Subtitle","Content"],populate:["Section","SEO"]}})],n&&p.push((0,o.s1)("/api/videos",{params:{locale:d,filters:{Slug:{$eq:n}},populate:"Videos"}})),[4,Promise.all(p)];case 1:return b=s.Z.apply(void 0,[l.sent(),2]),x=b[0],g=b[1],m=x.data,(null===(v=m.data)||void 0===v?void 0:v.length)?(y=(0,s.Z)(v,1),j=y[0],f.title=j.attributes.Title,f.subTitle=j.attributes.Subtitle||"",f.slug=j.attributes.Slug,f.content=j.attributes.Content||"",f.sections=j.attributes.Section||null,f.seo={title:(null===(r=j.attributes)||void 0===r||null===(a=r.SEO)||void 0===a?void 0:a.Title)||null,description:(null===(i=j.attributes)||void 0===i||null===(c=i.SEO)||void 0===c?void 0:c.Description)||null},f.videos=[],n&&(N=g.data,(null===(S=N.data)||void 0===S?void 0:S.length)&&(_=(0,s.Z)(S,1),_[0].attributes.Videos.forEach((function(t){var e={title:t.Title,subTitle:t.Time,classNames:"bg-".concat(t.Theme),alt:t.Alt,sources:[{src:t.URL,type:"video/mp4"}]};f.videos.push(e)})))),[2,f]):[2,!1]}}))}))}(),function(t,e){for(var n=null,r=0;r<t.length;r+=1){if(e.includes(t[r].value)){n=t[r];break}if(t[r].options&&(n=b(t[r].options,e)))break}return n})},5595:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return o},default:function(){return c}});var r=n(8014),a=n(62044),i=n(22319),s=n(61739),l=n(36137),o=!0;function c(){var t=(0,a.Z)("history"),e=t.t,n=t.lang,o=(0,s.oe)("/history",n,e("seoTitle"),e("seoDescription")),c=o.title,u=o.description,h=o.canonical,d=o.languageAlternates;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.PB,{title:c,description:u,canonical:h,languageAlternates:d}),(0,r.jsx)(l.Z,{}),(0,r.jsx)("section",{"aria-labelledby":"history-title",children:(0,r.jsxs)("div",{className:"m-auto max-w-7xl px-8 py-20 lg:px-10 lg:py-20",children:[(0,r.jsx)("h1",{id:"history-title",className:"mb-8 text-center",children:e("history")}),(0,r.jsx)("p",{children:e("story")}),(0,r.jsx)("p",{children:e("commitment")}),(0,r.jsx)("p",{children:e("competitors")}),(0,r.jsx)("p",{children:e("team")})]})})]})}}},function(t){t.O(0,[2319,9774,2888,179],(function(){return e=70851,t(t.s=e);var e}));var e=t.O();_N_E=e}]);