(self.webpackChunkwebpackWcBlocksJsonp=self.webpackChunkwebpackWcBlocksJsonp||[]).push([[118],{89:(t,e,r)=>{"use strict";r.r(e),r.d(e,{Block:()=>v,default:()=>f});var n=r(9196),o=r(5736),s=r(4184),a=r.n(s),c=r(2864),l=r(3611),i=r(721),u=r(1478);r(6843);const d=t=>({width:t/5*100+"%"}),p=({parentClassName:t})=>{const e=d(0);return(0,n.createElement)("div",{className:a()("wc-block-components-product-rating-stars__norating-container",`${t}-product-rating-stars__norating-container`)},(0,n.createElement)("div",{className:"wc-block-components-product-rating-stars__norating",role:"img"},(0,n.createElement)("span",{style:e})),(0,n.createElement)("span",null,(0,o.__)("No Reviews","woocommerce")))},g=t=>{const{rating:e,reviews:r,parentClassName:s}=t,c=d(e),l=(0,o.sprintf)(/* translators: %f is referring to the average rating value */
(0,o.__)("Rated %f out of 5","woocommerce"),e),i={__html:(0,o.sprintf)(/* translators: %1$s is referring to the average rating value, %2$s is referring to the number of ratings */
(0,o._n)("Rated %1$s out of 5 based on %2$s customer rating","Rated %1$s out of 5 based on %2$s customer ratings",r,"woocommerce"),(0,o.sprintf)('<strong class="rating">%f</strong>',e),(0,o.sprintf)('<span class="rating">%d</span>',r))};return(0,n.createElement)("div",{className:a()("wc-block-components-product-rating-stars__stars",`${s}__product-rating-stars__stars`),role:"img","aria-label":l},(0,n.createElement)("span",{style:c,dangerouslySetInnerHTML:i}))},v=t=>{const{textAlign:e,shouldDisplayMockedReviewsWhenProductHasNoReviews:r}=t,o=(0,l.F)(t),{parentClassName:s}=(0,c.useInnerBlockLayoutContext)(),{product:i}=(0,c.useProductDataContext)(),d=(t=>{const e=parseFloat(t.average_rating);return Number.isFinite(e)&&e>0?e:0})(i),v=(t=>{const e=(0,u.h)(t.review_count)?t.review_count:parseInt(t.review_count,10);return Number.isFinite(e)&&e>0?e:0})(i),f=a()(o.className,"wc-block-components-product-rating-stars",{[`${s}__product-rating`]:s,[`has-text-align-${e}`]:e}),m=r?(0,n.createElement)(p,{parentClassName:s}):null,y=v?(0,n.createElement)(g,{rating:d,reviews:v,parentClassName:s}):m;return(0,n.createElement)("div",{className:f,style:o.style},(0,n.createElement)("div",{className:"wc-block-components-product-rating-stars__container"},y))},f=(0,i.withProductDataContext)(v)},3611:(t,e,r)=>{"use strict";r.d(e,{F:()=>i});var n=r(4184),o=r.n(n),s=r(7884),a=r(2646),c=r(1473),l=r(2661);const i=t=>{const e=(t=>{const e=(0,s.Kn)(t)?t:{style:{}};let r=e.style;return(0,a.H)(r)&&(r=JSON.parse(r)||{}),(0,s.Kn)(r)||(r={}),{...e,style:r}})(t),r=(0,l.vc)(e),n=(0,l.l8)(e),i=(0,l.su)(e),u=(0,c.f)(e);return{className:o()(u.className,r.className,n.className,i.className),style:{...u.style,...r.style,...n.style,...i.style}}}},1473:(t,e,r)=>{"use strict";r.d(e,{f:()=>s});var n=r(7884),o=r(2646);const s=t=>{const e=(0,n.Kn)(t.style.typography)?t.style.typography:{},r=(0,o.H)(e.fontFamily)?e.fontFamily:"";return{className:t.fontFamily?`has-${t.fontFamily}-font-family`:r,style:{fontSize:t.fontSize?`var(--wp--preset--font-size--${t.fontSize})`:e.fontSize,fontStyle:e.fontStyle,fontWeight:e.fontWeight,letterSpacing:e.letterSpacing,lineHeight:e.lineHeight,textDecoration:e.textDecoration,textTransform:e.textTransform}}}},2661:(t,e,r)=>{"use strict";r.d(e,{l8:()=>d,su:()=>p,vc:()=>u});var n=r(4184),o=r.n(n),s=r(9784),a=r(2289),c=r(7884);function l(t={}){const e={};return(0,a.getCSSRules)(t,{selector:""}).forEach((t=>{e[t.key]=t.value})),e}function i(t,e){return t&&e?`has-${(0,s.o)(e)}-${t}`:""}function u(t){var e,r,n,s,a,u,d;const{backgroundColor:p,textColor:g,gradient:v,style:f}=t,m=i("background-color",p),y=i("color",g),b=function(t){if(t)return`has-${t}-gradient-background`}(v),h=b||(null==f||null===(e=f.color)||void 0===e?void 0:e.gradient);return{className:o()(y,b,{[m]:!h&&!!m,"has-text-color":g||(null==f||null===(r=f.color)||void 0===r?void 0:r.text),"has-background":p||(null==f||null===(n=f.color)||void 0===n?void 0:n.background)||v||(null==f||null===(s=f.color)||void 0===s?void 0:s.gradient),"has-link-color":(0,c.Kn)(null==f||null===(a=f.elements)||void 0===a?void 0:a.link)?null==f||null===(u=f.elements)||void 0===u||null===(d=u.link)||void 0===d?void 0:d.color:void 0}),style:l({color:(null==f?void 0:f.color)||{}})}}function d(t){var e;const r=(null===(e=t.style)||void 0===e?void 0:e.border)||{};return{className:function(t){var e;const{borderColor:r,style:n}=t,s=r?i("border-color",r):"";return o()({"has-border-color":!!r||!(null==n||null===(e=n.border)||void 0===e||!e.color),[s]:!!s})}(t),style:l({border:r})}}function p(t){var e;return{className:void 0,style:l({spacing:(null===(e=t.style)||void 0===e?void 0:e.spacing)||{}})}}},8519:(t,e,r)=>{"use strict";r.d(e,{F:()=>n});const n=t=>null===t},1478:(t,e,r)=>{"use strict";r.d(e,{h:()=>n});const n=t=>"number"==typeof t},7884:(t,e,r)=>{"use strict";r.d(e,{$n:()=>s,Kn:()=>o});var n=r(8519);const o=t=>!(0,n.F)(t)&&t instanceof Object&&t.constructor===Object;function s(t,e){return o(t)&&e in t}},2646:(t,e,r)=>{"use strict";r.d(e,{H:()=>n});const n=t=>"string"==typeof t},1290:(t,e,r)=>{"use strict";r.d(e,{$:()=>s});var n=r(7582),o=r(307);function s(t,e){return void 0===e&&(e={}),(0,o.B)(t,(0,n.pi)({delimiter:"."},e))}},6843:()=>{},9562:(t,e,r)=>{"use strict";function n(t){return t.toLowerCase()}r.d(e,{U:()=>n})},307:(t,e,r)=>{"use strict";r.d(e,{B:()=>a});var n=r(9562),o=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],s=/[^A-Z0-9]+/gi;function a(t,e){void 0===e&&(e={});for(var r=e.splitRegexp,a=void 0===r?o:r,l=e.stripRegexp,i=void 0===l?s:l,u=e.transform,d=void 0===u?n.U:u,p=e.delimiter,g=void 0===p?" ":p,v=c(c(t,a,"$1\0$2"),i,"\0"),f=0,m=v.length;"\0"===v.charAt(f);)f++;for(;"\0"===v.charAt(m-1);)m--;return v.slice(f,m).split("\0").map(d).join(g)}function c(t,e,r){return e instanceof RegExp?t.replace(e,r):e.reduce((function(t,e){return t.replace(e,r)}),t)}},9784:(t,e,r)=>{"use strict";r.d(e,{o:()=>s});var n=r(7582),o=r(1290);function s(t,e){return void 0===e&&(e={}),(0,o.$)(t,(0,n.pi)({delimiter:"-"},e))}},7582:(t,e,r)=>{"use strict";r.d(e,{pi:()=>n});var n=function(){return n=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},n.apply(this,arguments)};Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError}}]);