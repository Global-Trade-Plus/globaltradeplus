(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8001],{58101:function(e,t,n){const r=n(56168);const a=r.forwardRef((function({title:e,titleId:t,...n},a){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{fillRule:"evenodd",d:"M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z",clipRule:"evenodd"}))}));e.exports=a},48691:function(e,t,n){const r=n(56168);const a=r.forwardRef((function({title:e,titleId:t,...n},a){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{fillRule:"evenodd",d:"M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z",clipRule:"evenodd"}))}));e.exports=a},44786:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(8014),a=n(75657),l=n.n(a);function i(e){var t=e.href,n=e.children;if(/.xls|.csv|.pdf|.xml|.doc/.test(t))return(0,r.jsx)("a",{href:t,target:"_blank",rel:"noopener noreferrer",children:n});var a=/^https?:\/\//.test(t)&&!/www.globaltradeplus|invest.globaltradeplus|signup.globaltradeplus/.test(t);return(0,r.jsx)(l(),{href:t,legacyBehavior:!0,children:(0,r.jsx)("a",{ref:t,target:a?"_blank":null,rel:a?"noopener noreferrer":null,children:n})})}},47409:function(e,t,n){"use strict";var r=n(8014),a=n(80241),l=n.n(a),i=n(4510),s=n(96787),o=n(44786);t.Z=function(e){var t=e.ContentImg,n=e.Title,a=e.Content;return(0,r.jsx)("div",{className:"my-10 rounded-lg bg-grey-smoke px-11 pt-8 pb-4",children:t&&(0,r.jsxs)("div",{className:"flex flex-col space-y-4 sm:flex-row sm:items-center sm:gap-x-8",children:[(0,r.jsx)("div",{className:"relative",children:(0,r.jsx)(l(),{src:t.Media.data.attributes.url,alt:t.Alt,width:t.Media.data.attributes.width,height:t.Media.data.attributes.height,layout:"fixed"})}),(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)("h3",{className:"font-futura text-xl text-ft-blue",children:n}),(0,r.jsx)(i.D,{remarkPlugins:[s.Z],components:{a:o.Z},children:a})]})]})})}},5871:function(e,t,n){"use strict";var r=n(8014),a=n(4510),l=n(96787),i=n(50744),s=n.n(i),o=n(44786);t.Z=function(e){var t,n=e.Title,i=e.Content,u=e.Button;if(u){var c=u.Theme;if(c){var d=c.split("-");t=s()("button-primary",{"button-primary-blue":d.includes("blue"),"!w-[270px]":c.includes("lg")})}}return(0,r.jsxs)("div",{className:"my-10",children:[n&&(0,r.jsx)("h3",{className:"mb-4 font-futura text-2xl text-ft-blue",children:n}),i&&(0,r.jsx)("div",{children:(0,r.jsx)(a.D,{remarkPlugins:[l.Z],components:{a:o.Z},children:i})}),u&&(0,r.jsx)("a",{href:u.URL,alt:u.AltText,target:"_blank",rel:"noopener noreferrer",className:t,children:u.Label})]})}},35161:function(e,t,n){"use strict";var r=n(8014),a=n(56168),l=n(34512),i=n(14808),s=n(58101),o=n(48691),u=n(4510),c=n(96787),d=n(50744),f=n.n(d),h=n(44786),m="border-solid border-b border-grayish-blue";t.Z=function(e){var t=e.Title,n=e.Description,d=e.defaultOpen,p=(0,a.useRef)(null);return(0,a.useEffect)((function(){d&&p.current&&p.current.scrollIntoView({behavior:"smooth"})}),[d,p]),(0,r.jsx)("div",{className:"my-5",ref:p,children:(0,r.jsx)(l.p,{defaultOpen:d,children:function(e){var a=e.open;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(l.p.Button,{className:f()("flex w-full flex-row justify-between py-4 text-left",!a&&m),children:[(0,r.jsx)("div",{className:"text-xl",children:t}),a?(0,r.jsx)(s,{className:"h-6 w-6","aria-hidden":"true"}):(0,r.jsx)(o,{className:"h-6 w-6","aria-hidden":"true"})]}),(0,r.jsx)(i.u,{show:a,enter:"transition duration-100 ease-linear",enterFrom:"transform opacity-0",enterTo:"transform opacity-100",leave:"transition duration-75 ease-linear",leaveFrom:"transform opacity-100",leaveTo:"transform opacity-0",children:(0,r.jsx)(l.p.Panel,{static:!0,className:f()("pt-2 pb-6",a&&m),children:(0,r.jsx)(u.D,{remarkPlugins:[c.Z],components:{a:h.Z},children:n})})})]})}})})}},32309:function(e,t,n){"use strict";var r=n(8014),a=n(4510),l=n(96787),i=n(80241),s=n.n(i),o=n(50744),u=n.n(o),c=n(34512),d=n(14808),f=n(58101),h=n(48691),m=n(44786),p="border-solid border-b border-grayish-blue";t.Z=function(e){var t,n=e.Title,i=e.Callout,o=e.FAQs;return(0,r.jsxs)("div",{className:"my-10",children:[(0,r.jsx)("h3",{className:"mb-4 font-futura text-2xl text-ft-blue",children:n}),i&&(0,r.jsx)("div",{className:"rounded-lg bg-grey-smoke px-11 pt-8 pb-4",children:(0,r.jsxs)("div",{className:"flex flex-col space-y-4 sm:flex-row sm:items-center sm:gap-x-8",children:[i.Image&&(0,r.jsx)("div",{className:"relative",children:(0,r.jsx)(s(),{src:i.Image.data.attributes.url,alt:null!==(t=i.Alt)&&void 0!==t?t:i.Image.data.attributes.name,width:i.Image.data.attributes.width,height:i.Image.data.attributes.height,layout:"fixed"})}),(0,r.jsxs)("div",{className:"flex flex-col",children:[i.Title&&(0,r.jsx)("h3",{className:"font-futura text-xl text-ft-blue",children:i.Title}),i.Content&&(0,r.jsx)(a.D,{remarkPlugins:[l.Z],components:{a:m.Z},children:i.Content})]})]})}),o&&o.length>0&&o.map((function(e){return(0,r.jsx)(c.p,{children:function(t){var n=t.open;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(c.p.Button,{className:u()("flex w-full flex-row justify-between py-6 text-left",!n&&p),children:[(0,r.jsx)("div",{className:"text-xl",children:e.Title}),n?(0,r.jsx)(f,{className:"h-6 w-6","aria-hidden":"true"}):(0,r.jsx)(h,{className:"h-6 w-6","aria-hidden":"true"})]}),(0,r.jsx)(d.u,{show:n,enter:"transition duration-100 ease-linear",enterFrom:"transform opacity-0",enterTo:"transform opacity-100",leave:"transition duration-75 ease-linear",leaveFrom:"transform opacity-100",leaveTo:"transform opacity-0",children:(0,r.jsx)(c.p.Panel,{static:!0,className:u()("pt-2 pb-6",n&&p),children:(0,r.jsx)(a.D,{remarkPlugins:[l.Z],components:{a:m.Z},children:e.Description})})})]})}},e.Title)}))]})}},61739:function(e,t,n){"use strict";n.d(t,{Af:function(){return p},F3:function(){return f},lj:function(){return m},oe:function(){return d},xG:function(){return h}});var r=n(43692),a=n(12042),l=n(99728),i=n(21157),s=n(61557),o=n(65954),u=function(e){return"zh-CN"===e?"zh-CN":"zh-Hant"===e?"zh-TW":"en-US"},c=function(e,t,n){return("en-US"===n?"".concat(e).concat(t):"".concat(e,"/").concat(n).concat(t)).replace(/\/+$/,"")},d=function(e,t,n,r){var a="https://www.proultimatewealth.com",l={title:n||"",description:r||""};return l.canonical=c(a,e,t),l.languageAlternates=[{href:c(a,e,"en-US"),hrefLang:"en"},{href:c(a,e,"zh-CN"),hrefLang:"zh-hans"},{href:c(a,e,"zh-TW"),hrefLang:"zh-hant"},{href:c(a,e,"en-US"),hrefLang:"x-default"}],l},f=function(e,t){if(e.length<=t)return[e];for(var n=[],r=0;r<e.length;)n.push(e.slice(r,r+t)),r+=t;return n},h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"USD",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Intl.NumberFormat("en-US",(0,l.Z)((0,a.Z)({style:"currency"},n),{currency:t})).format(e)},m=function(e,t,n){return 1===e?t*(1+n):m(e-1,t,n)+t*Math.pow(1+n,e)},p=(function(){var e=(0,r.Z)((function(e,t){var n,r,a,l,i,c,d,f,h,m,p,x=arguments;return(0,s.__generator)(this,(function(s){switch(s.label){case 0:return n=x.length>2&&void 0!==x[2]&&x[2],r=[],a=function(n){var r={fields:["Slug","locale"],locale:"all",pagination:{page:n,pageSize:100}};return t&&(r.filters=t),(0,o.s1)(e,{params:r})},l=function(e){e.length&&e.forEach((function(e){var t=u(e.attributes.locale);r.push({params:n?{slug:[e.attributes.Slug]}:{slug:e.attributes.Slug},locale:t})}))},[4,a(1)];case 1:if(i=s.sent(),c=i.data,d=c.data,f=c.meta,l(d),!(f.pagination.pageCount>1))return[3,3];for(h=[],m=2;m<=f.pagination.pageCount;m+=1)p=a(m),h.push(p);return[4,Promise.all(h)];case 2:s.sent().forEach((function(e){var t=e.data.data;l(t)})),s.label=3;case 3:return[2,r]}}))}))}(),function(){var e=(0,r.Z)((function(e,t,n){var r,a,l,u,c,d,f,h,m,p,x,v,g,b,j,w,y,N,T;return(0,s.__generator)(this,(function(s){switch(s.label){case 0:return c=e.params.slug,d=e.locale,f=function(e){return"zh-CN"===e?"zh-CN":"zh-TW"===e?"zh-Hant":"en"}(d),h={},m=[(0,o.s1)("/api/guides",{params:{locale:f,filters:{Slug:{$eq:c},Category:{$eq:t}},fields:["Slug","Title","Subtitle","Content"],populate:["Section","SEO"]}})],n&&m.push((0,o.s1)("/api/videos",{params:{locale:f,filters:{Slug:{$eq:n}},populate:"Videos"}})),[4,Promise.all(m)];case 1:return p=i.Z.apply(void 0,[s.sent(),2]),x=p[0],v=p[1],g=x.data,(null===(b=g.data)||void 0===b?void 0:b.length)?(j=(0,i.Z)(b,1),w=j[0],h.title=w.attributes.Title,h.subTitle=w.attributes.Subtitle||"",h.slug=w.attributes.Slug,h.content=w.attributes.Content||"",h.sections=w.attributes.Section||null,h.seo={title:(null===(r=w.attributes)||void 0===r||null===(a=r.SEO)||void 0===a?void 0:a.Title)||null,description:(null===(l=w.attributes)||void 0===l||null===(u=l.SEO)||void 0===u?void 0:u.Description)||null},h.videos=[],n&&(y=v.data,(null===(N=y.data)||void 0===N?void 0:N.length)&&(T=(0,i.Z)(N,1),T[0].attributes.Videos.forEach((function(e){var t={title:e.Title,subTitle:e.Time,classNames:"bg-".concat(e.Theme),alt:e.Alt,sources:[{src:e.URL,type:"video/mp4"}]};h.videos.push(t)})))),[2,h]):[2,!1]}}))}))}(),function(e,t){for(var n=null,r=0;r<e.length;r+=1){if(t.includes(e[r].value)){n=e[r];break}if(e[r].options&&(n=p(e[r].options,t)))break}return n})}}]);