(self.webpackChunkwebpackWcBlocksJsonp=self.webpackChunkwebpackWcBlocksJsonp||[]).push([[5579],{6669:(e,r,t)=>{"use strict";t.r(r),t.d(r,{Block:()=>m,default:()=>p});var c=t(9196),l=t(4184),n=t.n(l),o=t(6805),a=t(4293),s=t(2864),i=t(3611),u=t(721);const m=e=>{var r,t;const{className:l,textAlign:u,isDescendentOfSingleProductTemplate:m}=e,p=(0,i.F)(e),{parentName:d,parentClassName:y}=(0,s.useInnerBlockLayoutContext)(),{product:g}=(0,s.useProductDataContext)(),v="woocommerce/all-products"===d,f=n()("wc-block-components-product-price",l,p.className,{[`${y}__product-price`]:y});if(!g.id&&!m){const e=(0,c.createElement)(o.Z,{align:u,className:f});return v?(0,c.createElement)("div",{className:"wp-block-woocommerce-product-price"},e):e}const N=g.prices,_=m?(0,a.getCurrencyFromPriceResponse)():(0,a.getCurrencyFromPriceResponse)(N),b="5000",k=N.price!==N.regular_price,P=n()({[`${y}__product-price__value`]:y,[`${y}__product-price__value--on-sale`]:k}),w=(0,c.createElement)(o.Z,{align:u,className:f,style:p.style,regularPriceStyle:p.style,priceStyle:p.style,priceClassName:P,currency:_,price:m?b:N.price,minPrice:null==N||null===(r=N.price_range)||void 0===r?void 0:r.min_amount,maxPrice:null==N||null===(t=N.price_range)||void 0===t?void 0:t.max_amount,regularPrice:m?b:N.regular_price,regularPriceClassName:n()({[`${y}__product-price__regular`]:y})});return v?(0,c.createElement)("div",{className:"wp-block-woocommerce-product-price"},w):w},p=e=>e.isDescendentOfSingleProductTemplate?(0,c.createElement)(m,{...e}):(0,u.withProductDataContext)(m)(e)},6805:(e,r,t)=>{"use strict";t.d(r,{Z:()=>p});var c=t(9196),l=t(5736),n=t(711),o=t(4184),a=t.n(o),s=t(4293),i=t(9307);t(5138);const u=({currency:e,maxPrice:r,minPrice:t,priceClassName:o,priceStyle:i={}})=>(0,c.createElement)(c.Fragment,null,(0,c.createElement)("span",{className:"screen-reader-text"},(0,l.sprintf)(/* translators: %1$s min price, %2$s max price */
(0,l.__)("Price between %1$s and %2$s","woocommerce"),(0,s.formatPrice)(t),(0,s.formatPrice)(r))),(0,c.createElement)("span",{"aria-hidden":!0},(0,c.createElement)(n.FormattedMonetaryAmount,{className:a()("wc-block-components-product-price__value",o),currency:e,value:t,style:i})," — ",(0,c.createElement)(n.FormattedMonetaryAmount,{className:a()("wc-block-components-product-price__value",o),currency:e,value:r,style:i}))),m=({currency:e,regularPriceClassName:r,regularPriceStyle:t,regularPrice:o,priceClassName:s,priceStyle:i,price:u})=>(0,c.createElement)(c.Fragment,null,(0,c.createElement)("span",{className:"screen-reader-text"},(0,l.__)("Previous price:","woocommerce")),(0,c.createElement)(n.FormattedMonetaryAmount,{currency:e,renderText:e=>(0,c.createElement)("del",{className:a()("wc-block-components-product-price__regular",r),style:t},e),value:o}),(0,c.createElement)("span",{className:"screen-reader-text"},(0,l.__)("Discounted price:","woocommerce")),(0,c.createElement)(n.FormattedMonetaryAmount,{currency:e,renderText:e=>(0,c.createElement)("ins",{className:a()("wc-block-components-product-price__value","is-discounted",s),style:i},e),value:u})),p=({align:e,className:r,currency:t,format:l="<price/>",maxPrice:o,minPrice:s,price:p,priceClassName:d,priceStyle:y,regularPrice:g,regularPriceClassName:v,regularPriceStyle:f,style:N})=>{const _=a()(r,"price","wc-block-components-product-price",{[`wc-block-components-product-price--align-${e}`]:e});l.includes("<price/>")||(l="<price/>",console.error("Price formats need to include the `<price/>` tag."));const b=g&&p&&p<g;let k=(0,c.createElement)("span",{className:a()("wc-block-components-product-price__value",d)});return b?k=(0,c.createElement)(m,{currency:t,price:p,priceClassName:d,priceStyle:y,regularPrice:g,regularPriceClassName:v,regularPriceStyle:f}):void 0!==s&&void 0!==o?k=(0,c.createElement)(u,{currency:t,maxPrice:o,minPrice:s,priceClassName:d,priceStyle:y}):p&&(k=(0,c.createElement)(n.FormattedMonetaryAmount,{className:a()("wc-block-components-product-price__value",d),currency:t,value:p,style:y})),(0,c.createElement)("span",{className:_,style:N},(0,i.createInterpolateElement)(l,{price:k}))}},3611:(e,r,t)=>{"use strict";t.d(r,{F:()=>i});var c=t(4184),l=t.n(c),n=t(7884),o=t(2646),a=t(1473),s=t(2661);const i=e=>{const r=(e=>{const r=(0,n.Kn)(e)?e:{style:{}};let t=r.style;return(0,o.H)(t)&&(t=JSON.parse(t)||{}),(0,n.Kn)(t)||(t={}),{...r,style:t}})(e),t=(0,s.vc)(r),c=(0,s.l8)(r),i=(0,s.su)(r),u=(0,a.f)(r);return{className:l()(u.className,t.className,c.className,i.className),style:{...u.style,...t.style,...c.style,...i.style}}}},1473:(e,r,t)=>{"use strict";t.d(r,{f:()=>n});var c=t(7884),l=t(2646);const n=e=>{const r=(0,c.Kn)(e.style.typography)?e.style.typography:{},t=(0,l.H)(r.fontFamily)?r.fontFamily:"";return{className:e.fontFamily?`has-${e.fontFamily}-font-family`:t,style:{fontSize:e.fontSize?`var(--wp--preset--font-size--${e.fontSize})`:r.fontSize,fontStyle:r.fontStyle,fontWeight:r.fontWeight,letterSpacing:r.letterSpacing,lineHeight:r.lineHeight,textDecoration:r.textDecoration,textTransform:r.textTransform}}}},2661:(e,r,t)=>{"use strict";t.d(r,{l8:()=>m,su:()=>p,vc:()=>u});var c=t(4184),l=t.n(c),n=t(9784),o=t(2289),a=t(7884);function s(e={}){const r={};return(0,o.getCSSRules)(e,{selector:""}).forEach((e=>{r[e.key]=e.value})),r}function i(e,r){return e&&r?`has-${(0,n.o)(r)}-${e}`:""}function u(e){var r,t,c,n,o,u,m;const{backgroundColor:p,textColor:d,gradient:y,style:g}=e,v=i("background-color",p),f=i("color",d),N=function(e){if(e)return`has-${e}-gradient-background`}(y),_=N||(null==g||null===(r=g.color)||void 0===r?void 0:r.gradient);return{className:l()(f,N,{[v]:!_&&!!v,"has-text-color":d||(null==g||null===(t=g.color)||void 0===t?void 0:t.text),"has-background":p||(null==g||null===(c=g.color)||void 0===c?void 0:c.background)||y||(null==g||null===(n=g.color)||void 0===n?void 0:n.gradient),"has-link-color":(0,a.Kn)(null==g||null===(o=g.elements)||void 0===o?void 0:o.link)?null==g||null===(u=g.elements)||void 0===u||null===(m=u.link)||void 0===m?void 0:m.color:void 0}),style:s({color:(null==g?void 0:g.color)||{}})}}function m(e){var r;const t=(null===(r=e.style)||void 0===r?void 0:r.border)||{};return{className:function(e){var r;const{borderColor:t,style:c}=e,n=t?i("border-color",t):"";return l()({"has-border-color":!!t||!(null==c||null===(r=c.border)||void 0===r||!r.color),[n]:!!n})}(e),style:s({border:t})}}function p(e){var r;return{className:void 0,style:s({spacing:(null===(r=e.style)||void 0===r?void 0:r.spacing)||{}})}}},8519:(e,r,t)=>{"use strict";t.d(r,{F:()=>c});const c=e=>null===e},7884:(e,r,t)=>{"use strict";t.d(r,{$n:()=>n,Kn:()=>l,Qr:()=>o});var c=t(8519);const l=e=>!(0,c.F)(e)&&e instanceof Object&&e.constructor===Object;function n(e,r){return l(e)&&r in e}const o=e=>0===Object.keys(e).length},2646:(e,r,t)=>{"use strict";t.d(r,{H:()=>c});const c=e=>"string"==typeof e},5138:()=>{}}]);