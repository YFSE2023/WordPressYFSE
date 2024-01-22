(self.webpackChunkwebpackWcBlocksJsonp=self.webpackChunkwebpackWcBlocksJsonp||[]).push([[4097],{6567:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>de});var n=r(9196),a=r(4055),c=r(4184),o=r.n(c),i=r(5736),u=r(9307),s=r(5158),l=r(9630),m=r(4697);r(4667);const d=({className:e,quantity:t=1,minimum:r=1,maximum:a,onChange:c=(()=>{}),step:d=1,itemName:p="",disabled:f})=>{const g=o()("wc-block-components-quantity-selector",e),y=(0,u.useRef)(null),h=(0,u.useRef)(null),b=(0,u.useRef)(null),v=void 0!==a,_=!f&&t-d>=r,E=!f&&(!v||t+d<=a),k=(0,u.useCallback)((e=>{let t=e;v&&(t=Math.min(t,Math.floor(a/d)*d)),t=Math.max(t,Math.ceil(r/d)*d),t=Math.floor(t/d)*d,t!==e&&c(t)}),[v,a,r,c,d]),w=(0,m.y1)(k,300);(0,u.useLayoutEffect)((()=>{k(t)}),[t,k]);const N=(0,u.useCallback)((e=>{const r=void 0!==typeof e.key?"ArrowDown"===e.key:e.keyCode===l.DOWN,n=void 0!==typeof e.key?"ArrowUp"===e.key:e.keyCode===l.UP;r&&_&&(e.preventDefault(),c(t-d)),n&&E&&(e.preventDefault(),c(t+d))}),[t,c,E,_,d]);return(0,n.createElement)("div",{className:g},(0,n.createElement)("input",{ref:y,className:"wc-block-components-quantity-selector__input",disabled:f,type:"number",step:d,min:r,max:a,value:t,onKeyDown:N,onChange:e=>{let r=parseInt(e.target.value,10);r=isNaN(r)?t:r,r!==t&&(c(r),w(r))},"aria-label":(0,i.sprintf)(/* translators: %s refers to the item name in the cart. */
(0,i.__)("Quantity of %s in your cart.","woocommerce"),p)}),(0,n.createElement)("button",{ref:h,"aria-label":(0,i.sprintf)(/* translators: %s refers to the item name in the cart. */
(0,i.__)("Reduce quantity of %s","woocommerce"),p),className:"wc-block-components-quantity-selector__button wc-block-components-quantity-selector__button--minus",disabled:!_,onClick:()=>{const e=t-d;c(e),(0,s.speak)((0,i.sprintf)(/* translators: %s refers to the item's new quantity in the cart. */
(0,i.__)("Quantity reduced to %s.","woocommerce"),e)),k(e)}},"－"),(0,n.createElement)("button",{ref:b,"aria-label":(0,i.sprintf)(/* translators: %s refers to the item's name in the cart. */
(0,i.__)("Increase quantity of %s","woocommerce"),p),disabled:!E,className:"wc-block-components-quantity-selector__button wc-block-components-quantity-selector__button--plus",onClick:()=>{const e=t+d;c(e),(0,s.speak)((0,i.sprintf)(/* translators: %s refers to the item's new quantity in the cart. */
(0,i.__)("Quantity increased to %s.","woocommerce"),e)),k(e)}},"＋"))};var p=r(711),f=r(4293);r(5138);const g=({currency:e,maxPrice:t,minPrice:r,priceClassName:a,priceStyle:c={}})=>(0,n.createElement)(n.Fragment,null,(0,n.createElement)("span",{className:"screen-reader-text"},(0,i.sprintf)(/* translators: %1$s min price, %2$s max price */
(0,i.__)("Price between %1$s and %2$s","woocommerce"),(0,f.formatPrice)(r),(0,f.formatPrice)(t))),(0,n.createElement)("span",{"aria-hidden":!0},(0,n.createElement)(p.FormattedMonetaryAmount,{className:o()("wc-block-components-product-price__value",a),currency:e,value:r,style:c})," — ",(0,n.createElement)(p.FormattedMonetaryAmount,{className:o()("wc-block-components-product-price__value",a),currency:e,value:t,style:c}))),y=({currency:e,regularPriceClassName:t,regularPriceStyle:r,regularPrice:a,priceClassName:c,priceStyle:u,price:s})=>(0,n.createElement)(n.Fragment,null,(0,n.createElement)("span",{className:"screen-reader-text"},(0,i.__)("Previous price:","woocommerce")),(0,n.createElement)(p.FormattedMonetaryAmount,{currency:e,renderText:e=>(0,n.createElement)("del",{className:o()("wc-block-components-product-price__regular",t),style:r},e),value:a}),(0,n.createElement)("span",{className:"screen-reader-text"},(0,i.__)("Discounted price:","woocommerce")),(0,n.createElement)(p.FormattedMonetaryAmount,{currency:e,renderText:e=>(0,n.createElement)("ins",{className:o()("wc-block-components-product-price__value","is-discounted",c),style:u},e),value:s})),h=({align:e,className:t,currency:r,format:a="<price/>",maxPrice:c,minPrice:i,price:s,priceClassName:l,priceStyle:m,regularPrice:d,regularPriceClassName:f,regularPriceStyle:h,style:b})=>{const v=o()(t,"price","wc-block-components-product-price",{[`wc-block-components-product-price--align-${e}`]:e});a.includes("<price/>")||(a="<price/>",console.error("Price formats need to include the `<price/>` tag."));const _=d&&s&&s<d;let E=(0,n.createElement)("span",{className:o()("wc-block-components-product-price__value",l)});return _?E=(0,n.createElement)(y,{currency:r,price:s,priceClassName:l,priceStyle:m,regularPrice:d,regularPriceClassName:f,regularPriceStyle:h}):void 0!==i&&void 0!==c?E=(0,n.createElement)(g,{currency:r,maxPrice:c,minPrice:i,priceClassName:l,priceStyle:m}):s&&(E=(0,n.createElement)(p.FormattedMonetaryAmount,{className:o()("wc-block-components-product-price__value",l),currency:r,value:s,style:m})),(0,n.createElement)("span",{className:v,style:b},(0,u.createInterpolateElement)(a,{price:E}))};var b=r(2629);r(5641);const v=({className:e="",disabled:t=!1,name:r,permalink:a="",target:c,rel:i,style:u,onClick:s,...l})=>{const m=o()("wc-block-components-product-name",e);if(t){const e=l;return(0,n.createElement)("span",{className:m,...e,dangerouslySetInnerHTML:{__html:(0,b.decodeEntities)(r)}})}return(0,n.createElement)("a",{className:m,href:a,target:c,...l,dangerouslySetInnerHTML:{__html:(0,b.decodeEntities)(r)},style:u})};var _=r(9818),E=r(4801),k=r(7884),w=r(2646),N=r(1478);var A=r(2694),C=r(3554);function M(e){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},M(e)}function P(e){return function(e){if(Array.isArray(e))return e}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return S(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?S(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var x={normalizePrecision:function(e){var t=e.reduce((function(e,t){return Math.max(e.getPrecision(),t.getPrecision())}));return e.map((function(e){return e.getPrecision()!==t?e.convertPrecision(t):e}))},minimum:function(e){var t=P(e),r=t[0],n=t.slice(1),a=r;return n.forEach((function(e){a=a.lessThan(e)?a:e})),a},maximum:function(e){var t=P(e),r=t[0],n=t.slice(1),a=r;return n.forEach((function(e){a=a.greaterThan(e)?a:e})),a}};function R(e){return!isNaN(parseInt(e))&&isFinite(e)}function I(e){return e%2==0}function D(e){return R(e)&&!Number.isInteger(e)}function F(e){return Math.abs(e)%1==.5}function O(e){return void 0===e}function T(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".",r={};return Object.entries(e).forEach((function(e){if("object"===M(e[1])){var n=T(e[1]);Object.entries(n).forEach((function(n){r[e[0]+t+n[0]]=n[1]}))}else r[e[0]]=e[1]})),r}function q(){var e={HALF_ODD:function(e){var t=Math.round(e);return F(e)&&I(t)?t-1:t},HALF_EVEN:function(e){var t=Math.round(e);return F(e)?I(t)?t:t-1:t},HALF_UP:function(e){return Math.round(e)},HALF_DOWN:function(e){return F(e)?Math.floor(e):Math.round(e)},HALF_TOWARDS_ZERO:function(e){return F(e)?Math.sign(e)*Math.floor(Math.abs(e)):Math.round(e)},HALF_AWAY_FROM_ZERO:function(e){return F(e)?Math.sign(e)*Math.ceil(Math.abs(e)):Math.round(e)},DOWN:function(e){return Math.floor(e)}};return{add:function(e,t){return e+t},subtract:function(e,t){return e-t},multiply:function(e,t){return D(e)||D(t)?function(e,t){var r=function(e){return Math.pow(10,function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0).toString();if(e.indexOf("e-")>0)return parseInt(e.split("e-")[1]);var t=e.split(".")[1];return t?t.length:0}(e))},n=Math.max(r(e),r(t));return Math.round(e*n)*Math.round(t*n)/(n*n)}(e,t):e*t},divide:function(e,t){return e/t},modulo:function(e,t){return e%t},round:function(t){return e[arguments.length>1&&void 0!==arguments[1]?arguments[1]:"HALF_EVEN"](t)}}}var L=q();function j(e){var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;for(var r in t)e=e.replace("{{".concat(r,"}}"),t[r]);return e};return{getExchangeRate:function(r,n){return(a=e.endpoint,!Boolean(a)||"object"!==M(a)&&"function"!=typeof a||"function"!=typeof a.then?function(r,n){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(r,n){var a=Object.assign(new XMLHttpRequest,{onreadystatechange:function(){4===a.readyState&&(a.status>=200&&a.status<400?r(JSON.parse(a.responseText)):n(new Error(a.statusText)))},onerror:function(){n(new Error("Network error"))}});a.open("GET",e,!0),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};for(var r in t)e.setRequestHeader(r,t[r])}(a,t.headers),a.send()}))}(t(e.endpoint,{from:r,to:n}),{headers:e.headers})}(r,n):e.endpoint).then((function(a){return T(a)[t(e.propertyPath,{from:r,to:n})]}));var a}}}function $(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Error;if(!e)throw new r(t)}function U(e){$(Number.isInteger(e),"You must provide an integer.",TypeError)}var H=q();const z=Object.assign((function e(t){var r=Object.assign({},{amount:e.defaultAmount,currency:e.defaultCurrency,precision:e.defaultPrecision},t),n=r.amount,a=r.currency,c=r.precision;U(n),U(c);var o=e.globalLocale,i=e.globalFormat,u=e.globalRoundingMode,s=e.globalFormatRoundingMode,l=Object.assign({},e.globalExchangeRatesApi),m=function(t){var r=Object.assign({},Object.assign({},{amount:n,currency:a,precision:c},t),Object.assign({},{locale:this.locale},t));return Object.assign(e({amount:r.amount,currency:r.currency,precision:r.precision}),{locale:r.locale})},d=function(e){$(this.hasSameCurrency(e),"You must provide a Dinero instance with the same currency.",TypeError)};return{getAmount:function(){return n},getCurrency:function(){return a},getLocale:function(){return this.locale||o},setLocale:function(e){return m.call(this,{locale:e})},getPrecision:function(){return c},convertPrecision:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s;U(e);var r=this.getPrecision(),n=e>r,a=n?H.multiply:H.divide,c=n?[e,r]:[r,e],o=Math.pow(10,H.subtract.apply(H,c));return m.call(this,{amount:H.round(a(this.getAmount(),o),t),precision:e})},add:function(t){d.call(this,t);var r=e.normalizePrecision([this,t]);return m.call(this,{amount:H.add(r[0].getAmount(),r[1].getAmount()),precision:r[0].getPrecision()})},subtract:function(t){d.call(this,t);var r=e.normalizePrecision([this,t]);return m.call(this,{amount:H.subtract(r[0].getAmount(),r[1].getAmount()),precision:r[0].getPrecision()})},multiply:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u;return m.call(this,{amount:H.round(H.multiply(this.getAmount(),e),t)})},divide:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u;return m.call(this,{amount:H.round(H.divide(this.getAmount(),e),t)})},percentage:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u;return $(function(e){return R(e)&&e<=100&&e>=0}(e),"You must provide a numeric value between 0 and 100.",RangeError),this.multiply(H.divide(e,100),t)},allocate:function(e){var t=this;!function(e){$(function(e){return e.length>0&&e.every((function(e){return e>=0}))&&e.some((function(e){return e>0}))}(e),"You must provide a non-empty array of numeric values greater than 0.",TypeError)}(e);for(var r=e.reduce((function(e,t){return H.add(e,t)})),n=this.getAmount(),a=e.map((function(e){var a=Math.floor(H.divide(H.multiply(t.getAmount(),e),r));return n=H.subtract(n,a),m.call(t,{amount:a})})),c=0;n>0;)e[c]>0&&(a[c]=a[c].add(m.call(this,{amount:1})),n=H.subtract(n,1)),c+=1;return a},convert:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.endpoint,a=void 0===n?l.endpoint:n,c=r.propertyPath,o=void 0===c?l.propertyPath||"rates.{{to}}":c,i=r.headers,s=void 0===i?l.headers:i,d=r.roundingMode,p=void 0===d?u:d,f=Object.assign({},{endpoint:a,propertyPath:o,headers:s,roundingMode:p});return j(f).getExchangeRate(this.getCurrency(),e).then((function(r){return $(!O(r),'No rate was found for the destination currency "'.concat(e,'".'),TypeError),m.call(t,{amount:H.round(H.multiply(t.getAmount(),parseFloat(r)),f.roundingMode),currency:e})}))},equalsTo:function(e){return this.hasSameAmount(e)&&this.hasSameCurrency(e)},lessThan:function(t){d.call(this,t);var r=e.normalizePrecision([this,t]);return r[0].getAmount()<r[1].getAmount()},lessThanOrEqual:function(t){d.call(this,t);var r=e.normalizePrecision([this,t]);return r[0].getAmount()<=r[1].getAmount()},greaterThan:function(t){d.call(this,t);var r=e.normalizePrecision([this,t]);return r[0].getAmount()>r[1].getAmount()},greaterThanOrEqual:function(t){d.call(this,t);var r=e.normalizePrecision([this,t]);return r[0].getAmount()>=r[1].getAmount()},isZero:function(){return 0===this.getAmount()},isPositive:function(){return this.getAmount()>=0},isNegative:function(){return this.getAmount()<0},hasSubUnits:function(){return 0!==H.modulo(this.getAmount(),Math.pow(10,c))},hasCents:function(){return 0!==H.modulo(this.getAmount(),Math.pow(10,c))},hasSameCurrency:function(e){return this.getCurrency()===e.getCurrency()},hasSameAmount:function(t){var r=e.normalizePrecision([this,t]);return r[0].getAmount()===r[1].getAmount()},toFormat:function(){var e,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s,r=(e=/^(?:(\$|USD)?0(?:(,)0)?(\.)?(0+)?|0(?:(,)0)?(\.)?(0+)?\s?(dollar)?)$/gm.exec(arguments.length>0&&void 0!==arguments[0]?arguments[0]:i),{getMatches:function(){return null!==e?e.slice(1).filter((function(e){return!O(e)})):[]},getMinimumFractionDigits:function(){var e=function(e){return"."===e};return O(this.getMatches().find(e))?0:this.getMatches()[L.add(this.getMatches().findIndex(e),1)].split("").length},getCurrencyDisplay:function(){return{USD:"code",dollar:"name",$:"symbol"}[this.getMatches().find((function(e){return"USD"===e||"dollar"===e||"$"===e}))]},getStyle:function(){return O(this.getCurrencyDisplay(this.getMatches()))?"decimal":"currency"},getUseGrouping:function(){return!O(this.getMatches().find((function(e){return","===e})))}});return this.toRoundedUnit(r.getMinimumFractionDigits(),t).toLocaleString(this.getLocale(),{currencyDisplay:r.getCurrencyDisplay(),useGrouping:r.getUseGrouping(),minimumFractionDigits:r.getMinimumFractionDigits(),style:r.getStyle(),currency:this.getCurrency()})},toUnit:function(){return H.divide(this.getAmount(),Math.pow(10,c))},toRoundedUnit:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s,r=Math.pow(10,e);return H.divide(H.round(H.multiply(this.toUnit(),r),t),r)},toObject:function(){return{amount:n,currency:a,precision:c}},toJSON:function(){return this.toObject()}}}),{defaultAmount:0,defaultCurrency:"USD",defaultPrecision:2},{globalLocale:"en-US",globalFormat:"$0,0.00",globalRoundingMode:"HALF_EVEN",globalFormatRoundingMode:"HALF_AWAY_FROM_ZERO",globalExchangeRatesApi:{endpoint:void 0,headers:void 0,propertyPath:void 0}},x);var V=r(4617);r(6315);const Y=({children:e,className:t})=>(0,n.createElement)("div",{className:o()("wc-block-components-product-badge",t)},e),Q=()=>(0,n.createElement)(Y,{className:"wc-block-components-product-backorder-badge"},(0,i.__)("Available on backorder","woocommerce")),W=({image:e={},fallbackAlt:t=""})=>{const r=e.thumbnail?{src:e.thumbnail,alt:(0,b.decodeEntities)(e.alt)||t||"Product Image"}:{src:V.PLACEHOLDER_IMG_SRC,alt:""};return(0,n.createElement)("img",{...r,alt:r.alt})},Z=({lowStockRemaining:e})=>e?(0,n.createElement)(Y,{className:"wc-block-components-product-low-stock-badge"},(0,i.sprintf)(/* translators: %d stock amount (number of items in stock for product) */
(0,i.__)("%d left in stock","woocommerce"),e)):null;var B=r(9784);r(7984);const K=({details:e=[]})=>Array.isArray(e)?0===(e=e.filter((e=>!e.hidden))).length?null:(0,n.createElement)("ul",{className:"wc-block-components-product-details"},e.map((e=>{const t=(null==e?void 0:e.key)||e.name||"",r=(null==e?void 0:e.className)||(t?`wc-block-components-product-details__${(0,B.o)(t)}`:"");return(0,n.createElement)("li",{key:t+(e.display||e.value),className:r},t&&(0,n.createElement)(n.Fragment,null,(0,n.createElement)("span",{className:"wc-block-components-product-details__name"},(0,b.decodeEntities)(t),":")," "),(0,n.createElement)("span",{className:"wc-block-components-product-details__value"},(0,b.decodeEntities)(e.display||e.value)))}))):null;var G=r(987);const J=e=>e.replace(/<\/?[a-z][^>]*?>/gi,""),X=(e,t)=>e.replace(/[\s|\.\,]+$/i,"")+t;var ee=r(5266);const te=({source:e,maxLength:t=15,countType:r="words",className:a="",style:c={}})=>{const o=(0,u.useMemo)((()=>((e,t=15,r="words")=>{const n=(0,G.autop)(e);if((0,ee.count)(n,r)<=t)return n;const a=(e=>{const t=e.indexOf("</p>");return-1===t?e:e.substr(0,t+4)})(n);return(0,ee.count)(a,r)<=t?a:"words"===r?((e,t,r="&hellip;",n=!0)=>{const a=J(e),c=a.split(" ").splice(0,t).join(" ");return c===a?n?(0,G.autop)(a):a:n?(0,G.autop)(X(c,r)):X(c,r)})(a,t):((e,t,r=!0,n="&hellip;",a=!0)=>{const c=J(e),o=c.slice(0,t);if(o===c)return a?(0,G.autop)(c):c;if(r)return(0,G.autop)(X(o,n));const i=o.match(/([\s]+)/g),u=i?i.length:0,s=c.slice(0,t+u);return a?(0,G.autop)(X(s,n)):X(s,n)})(a,t,"characters_including_spaces"===r)})(e,t,r)),[e,t,r]);return(0,n.createElement)(u.RawHTML,{style:c,className:a},o)};var re=r(5271);const ne=({className:e,shortDescription:t="",fullDescription:r=""})=>{const a=t||r;return a?(0,n.createElement)(te,{className:e,source:a,maxLength:15,countType:re.Cm.wordCountType||"words"}):null};r(9889);const ae=({shortDescription:e="",fullDescription:t="",itemData:r=[],variation:a=[]})=>(0,n.createElement)("div",{className:"wc-block-components-product-metadata"},(0,n.createElement)(ne,{className:"wc-block-components-product-metadata__description",shortDescription:e,fullDescription:t}),(0,n.createElement)(K,{details:r}),(0,n.createElement)(K,{details:a.map((({attribute:e="",value:t})=>({key:e,value:t})))})),ce=({currency:e,saleAmount:t,format:r="<price/>"})=>{if(!t||t<=0)return null;r.includes("<price/>")||(r="<price/>",console.error("Price formats need to include the `<price/>` tag."));const a=(0,i.sprintf)(/* translators: %s will be replaced by the discount amount */
(0,i.__)("Save %s","woocommerce"),r);return(0,n.createElement)(Y,{className:"wc-block-components-sale-badge"},(0,u.createInterpolateElement)(a,{price:(0,n.createElement)(p.FormattedMonetaryAmount,{currency:e,value:t})}))},oe=(e,t)=>e.convertPrecision(t.minorUnit).getAmount(),ie=e=>(0,C.mustContain)(e,"<price/>"),ue=(0,u.forwardRef)((({lineItem:e,onRemove:t=(()=>{}),tabIndex:r},c)=>{const{name:l="",catalog_visibility:p="visible",short_description:g="",description:y="",low_stock_remaining:b=null,show_backorder_badge:M=!1,quantity_limits:P={minimum:1,maximum:99,multiple_of:1,editable:!0},sold_individually:S=!1,permalink:x="",images:R=[],variation:I=[],item_data:D=[],prices:F={currency_code:"USD",currency_minor_unit:2,currency_symbol:"$",currency_prefix:"$",currency_suffix:"",currency_decimal_separator:".",currency_thousand_separator:",",price:"0",regular_price:"0",sale_price:"0",price_range:null,raw_prices:{precision:6,price:"0",regular_price:"0",sale_price:"0"}},totals:O={currency_code:"USD",currency_minor_unit:2,currency_symbol:"$",currency_prefix:"$",currency_suffix:"",currency_decimal_separator:".",currency_thousand_separator:",",line_subtotal:"0",line_subtotal_tax:"0"},extensions:T}=e,{quantity:q,setItemQuantity:L,removeItem:j,isPendingDelete:$}=(e=>{const t={key:"",quantity:1};(e=>(0,k.Kn)(e)&&(0,k.$n)(e,"key")&&(0,k.$n)(e,"quantity")&&(0,w.H)(e.key)&&(0,N.h)(e.quantity))(e)&&(t.key=e.key,t.quantity=e.quantity);const{key:r="",quantity:n=1}=t,{cartErrors:c}=(0,a.b)(),{__internalIncrementCalculating:o,__internalDecrementCalculating:i}=(0,_.useDispatch)(E.CHECKOUT_STORE_KEY),[s,l]=(0,u.useState)(n),[d]=(0,m.Nr)(s,400),p=function(e,t){const r=(0,u.useRef)();return(0,u.useEffect)((()=>{r.current===e||(r.current=e)}),[e,t]),r.current}(d),{removeItemFromCart:f,changeCartItemQuantity:g}=(0,_.useDispatch)(E.CART_STORE_KEY);(0,u.useEffect)((()=>l(n)),[n]);const y=(0,_.useSelect)((e=>{if(!r)return{quantity:!1,delete:!1};const t=e(E.CART_STORE_KEY);return{quantity:t.isItemPendingQuantity(r),delete:t.isItemPendingDelete(r)}}),[r]),h=(0,u.useCallback)((()=>r?f(r).catch((e=>{(0,E.processErrorResponse)(e)})):Promise.resolve(!1)),[r,f]);return(0,u.useEffect)((()=>{r&&(0,N.h)(p)&&Number.isFinite(p)&&p!==d&&g(r,d).catch((e=>{(0,E.processErrorResponse)(e)}))}),[r,g,d,p]),(0,u.useEffect)((()=>(y.delete?o():i(),()=>{y.delete&&i()})),[i,o,y.delete]),(0,u.useEffect)((()=>(y.quantity||d!==s?o():i(),()=>{(y.quantity||d!==s)&&i()})),[o,i,y.quantity,d,s]),{isPendingDelete:y.delete,quantity:s,setItemQuantity:l,removeItem:h,cartItemQuantityErrors:c}})(e),{dispatchStoreEvent:U}={dispatchStoreEvent:(0,u.useCallback)(((e,t={})=>{try{(0,A.doAction)(`experimental__woocommerce_blocks-${e}`,t)}catch(e){console.error(e)}}),[]),dispatchCheckoutEvent:(0,u.useCallback)(((e,t={})=>{try{(0,A.doAction)(`experimental__woocommerce_blocks-checkout-${e}`,{...t,storeCart:(0,_.select)("wc/store/cart").getCartData()})}catch(e){console.error(e)}}),[])},{receiveCart:H,...Y}=(0,a.b)(),B=(0,u.useMemo)((()=>({context:"cart",cartItem:e,cart:Y})),[e,Y]),K=(0,f.getCurrencyFromPriceResponse)(F),G=(0,C.applyCheckoutFilter)({filterName:"itemName",defaultValue:l,extensions:T,arg:B}),J=z({amount:parseInt(F.raw_prices.regular_price,10),precision:F.raw_prices.precision}),X=z({amount:parseInt(F.raw_prices.price,10),precision:F.raw_prices.precision}),ee=J.subtract(X),te=ee.multiply(q),re=(0,f.getCurrencyFromPriceResponse)(O);let ne=parseInt(O.line_subtotal,10);(0,V.getSetting)("displayCartPricesIncludingTax",!1)&&(ne+=parseInt(O.line_subtotal_tax,10));const ue=z({amount:ne,precision:re.minorUnit}),se=R.length?R[0]:{},le="hidden"===p||"search"===p,me=(0,C.applyCheckoutFilter)({filterName:"cartItemClass",defaultValue:"",extensions:T,arg:B}),de=(0,C.applyCheckoutFilter)({filterName:"cartItemPrice",defaultValue:"<price/>",extensions:T,arg:B,validation:ie}),pe=(0,C.applyCheckoutFilter)({filterName:"subtotalPriceFormat",defaultValue:"<price/>",extensions:T,arg:B,validation:ie}),fe=(0,C.applyCheckoutFilter)({filterName:"saleBadgePriceFormat",defaultValue:"<price/>",extensions:T,arg:B,validation:ie}),ge=(0,C.applyCheckoutFilter)({filterName:"showRemoveItemLink",defaultValue:!0,extensions:T,arg:B});return(0,n.createElement)("tr",{className:o()("wc-block-cart-items__row",me,{"is-disabled":$}),ref:c,tabIndex:r},(0,n.createElement)("td",{className:"wc-block-cart-item__image","aria-hidden":!(0,k.$n)(se,"alt")||!se.alt},le?(0,n.createElement)(W,{image:se,fallbackAlt:G}):(0,n.createElement)("a",{href:x,tabIndex:-1},(0,n.createElement)(W,{image:se,fallbackAlt:G}))),(0,n.createElement)("td",{className:"wc-block-cart-item__product"},(0,n.createElement)("div",{className:"wc-block-cart-item__wrap"},(0,n.createElement)(v,{disabled:$||le,name:G,permalink:x}),M?(0,n.createElement)(Q,null):!!b&&(0,n.createElement)(Z,{lowStockRemaining:b}),(0,n.createElement)("div",{className:"wc-block-cart-item__prices"},(0,n.createElement)(h,{currency:K,regularPrice:oe(J,K),price:oe(X,K),format:pe})),(0,n.createElement)(ce,{currency:K,saleAmount:oe(ee,K),format:fe}),(0,n.createElement)(ae,{shortDescription:g,fullDescription:y,itemData:D,variation:I}),(0,n.createElement)("div",{className:"wc-block-cart-item__quantity"},!S&&!!P.editable&&(0,n.createElement)(d,{disabled:$,quantity:q,minimum:P.minimum,maximum:P.maximum,step:P.multiple_of,onChange:t=>{L(t),U("cart-set-item-quantity",{product:e,quantity:t})},itemName:G}),ge&&(0,n.createElement)("button",{className:"wc-block-cart-item__remove-link","aria-label":(0,i.sprintf)(/* translators: %s refers to the item's name in the cart. */
(0,i.__)("Remove %s from cart","woocommerce"),G),onClick:()=>{t(),j(),U("cart-remove-item",{product:e,quantity:q}),(0,s.speak)((0,i.sprintf)(/* translators: %s refers to the item name in the cart. */
(0,i.__)("%s has been removed from your cart.","woocommerce"),G))},disabled:$},(0,i.__)("Remove item","woocommerce"))))),(0,n.createElement)("td",{className:"wc-block-cart-item__total"},(0,n.createElement)("div",{className:"wc-block-cart-item__total-price-and-sale-badge-wrapper"},(0,n.createElement)(h,{currency:re,format:de,price:ue.getAmount()}),q>1&&(0,n.createElement)(ce,{currency:K,saleAmount:oe(te,K),format:fe}))))}));r(6294);const se=[...Array(3)].map(((_x,e)=>(0,n.createElement)(ue,{lineItem:{},key:e}))),le=e=>{const t={};return e.forEach((({key:e})=>{t[e]=(0,u.createRef)()})),t},me=({lineItems:e=[],isLoading:t=!1,className:r})=>{const a=(0,u.useRef)(null),c=(0,u.useRef)(le(e));(0,u.useEffect)((()=>{c.current=le(e)}),[e]);const s=e=>()=>{null!=c&&c.current&&e&&c.current[e].current instanceof HTMLElement?c.current[e].current.focus():a.current instanceof HTMLElement&&a.current.focus()},l=t?se:e.map(((t,r)=>{const a=e.length>r+1?e[r+1].key:null;return(0,n.createElement)(ue,{key:t.key,lineItem:t,onRemove:s(a),ref:c.current[t.key],tabIndex:-1})}));return(0,n.createElement)("table",{className:o()("wc-block-cart-items",r),ref:a,tabIndex:-1},(0,n.createElement)("thead",null,(0,n.createElement)("tr",{className:"wc-block-cart-items__header"},(0,n.createElement)("th",{className:"wc-block-cart-items__header-image"},(0,n.createElement)("span",null,(0,i.__)("Product","woocommerce"))),(0,n.createElement)("th",{className:"wc-block-cart-items__header-product"},(0,n.createElement)("span",null,(0,i.__)("Details","woocommerce"))),(0,n.createElement)("th",{className:"wc-block-cart-items__header-total"},(0,n.createElement)("span",null,(0,i.__)("Total","woocommerce"))))),(0,n.createElement)("tbody",null,l))},de=({className:e})=>{const{cartItems:t,cartIsLoading:r}=(0,a.b)();return(0,n.createElement)("div",{className:o()(e,"wc-block-mini-cart__products-table")},(0,n.createElement)(me,{lineItems:t,isLoading:r,className:"wc-block-mini-cart-items"}))}},1290:(e,t,r)=>{"use strict";r.d(t,{$:()=>c});var n=r(7582),a=r(307);function c(e,t){return void 0===t&&(t={}),(0,a.B)(e,(0,n.pi)({delimiter:"."},t))}},6294:()=>{},6315:()=>{},7984:()=>{},9889:()=>{},5641:()=>{},5138:()=>{},4667:()=>{},9562:(e,t,r)=>{"use strict";function n(e){return e.toLowerCase()}r.d(t,{U:()=>n})},307:(e,t,r)=>{"use strict";r.d(t,{B:()=>o});var n=r(9562),a=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],c=/[^A-Z0-9]+/gi;function o(e,t){void 0===t&&(t={});for(var r=t.splitRegexp,o=void 0===r?a:r,u=t.stripRegexp,s=void 0===u?c:u,l=t.transform,m=void 0===l?n.U:l,d=t.delimiter,p=void 0===d?" ":d,f=i(i(e,o,"$1\0$2"),s,"\0"),g=0,y=f.length;"\0"===f.charAt(g);)g++;for(;"\0"===f.charAt(y-1);)y--;return f.slice(g,y).split("\0").map(m).join(p)}function i(e,t,r){return t instanceof RegExp?e.replace(t,r):t.reduce((function(e,t){return e.replace(t,r)}),e)}},9784:(e,t,r)=>{"use strict";r.d(t,{o:()=>c});var n=r(7582),a=r(1290);function c(e,t){return void 0===t&&(t={}),(0,a.$)(e,(0,n.pi)({delimiter:"-"},t))}},7582:(e,t,r)=>{"use strict";r.d(t,{pi:()=>n});var n=function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},n.apply(this,arguments)};Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError}}]);