(()=>{var e,t={8620:(e,t,o)=>{"use strict";o.r(t);var l=o(9196);const r=window.wp.blocks;var s=o(1984),n=o(8984);const c=window.wc.wcSettings;var a,i,u,p,d,m,g,w,b,_;const y=(0,c.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),E=(y.pluginUrl,y.pluginUrl,y.buildPhase),f=(null===(a=c.STORE_PAGES.shop)||void 0===a||a.permalink,null===(i=c.STORE_PAGES.checkout)||void 0===i||i.id,null===(u=c.STORE_PAGES.checkout)||void 0===u||u.permalink,null===(p=c.STORE_PAGES.privacy)||void 0===p||p.permalink,null===(d=c.STORE_PAGES.privacy)||void 0===d||d.title,null===(m=c.STORE_PAGES.terms)||void 0===m||m.permalink,null===(g=c.STORE_PAGES.terms)||void 0===g||g.title,null===(w=c.STORE_PAGES.cart)||void 0===w||w.id,null===(b=c.STORE_PAGES.cart)||void 0===b||b.permalink,null!==(_=c.STORE_PAGES.myaccount)&&void 0!==_&&_.permalink?c.STORE_PAGES.myaccount.permalink:(0,c.getSetting)("wpLoginUrl","/wp-login.php"),(0,c.getSetting)("localPickupEnabled",!1),(0,c.getSetting)("countries",{})),k=(0,c.getSetting)("countryData",{});Object.fromEntries(Object.keys(k).filter((e=>!0===k[e].allowBilling)).map((e=>[e,f[e]||""]))),Object.fromEntries(Object.keys(k).filter((e=>!0===k[e].allowBilling)).map((e=>[e,k[e].states||[]]))),Object.fromEntries(Object.keys(k).filter((e=>!0===k[e].allowShipping)).map((e=>[e,f[e]||""]))),Object.fromEntries(Object.keys(k).filter((e=>!0===k[e].allowShipping)).map((e=>[e,k[e].states||[]]))),Object.fromEntries(Object.keys(k).map((e=>[e,k[e].locale||[]]))),o(3352);var v=o(9307),S=o(4184),h=o.n(S);const O=window.wp.blockEditor,T=window.wp.components;var x=o(5736),C=o(3904);const R=window.wc.blocksComponents;o(1724);const j=({name:e,count:t})=>(0,l.createElement)(l.Fragment,null,e,null!==t&&Number.isFinite(t)&&(0,l.createElement)(R.Label,{label:t.toString(),screenReaderLabel:(0,x.sprintf)(/* translators: %s number of products. */
(0,x._n)("%s product","%s products",t,"woocommerce"),t),wrapperElement:"span",wrapperProps:{className:"wc-filter-element-label-list-count"}}));var P=o(2578);o(230);const A=({className:e,style:t,suggestions:o,multiple:r=!0,saveTransform:s=(e=>e.trim().replace(/\s/g,"-")),messages:n={},validateInput:c=(e=>o.includes(e)),label:a="",...i})=>(0,l.createElement)("div",{className:h()("wc-blocks-components-form-token-field-wrapper",e,{"single-selection":!r}),style:t},(0,l.createElement)(P.Z,{label:a,__experimentalExpandOnFocus:!0,__experimentalShowHowTo:!1,__experimentalValidateInput:c,saveTransform:s,maxLength:r?void 0:1,suggestions:o,messages:n,...i})),N=window.wc.wcBlocksData,G=window.wp.data;var q=o(9127),D=o.n(q);const L=(0,v.createContext)("page"),F=()=>(0,v.useContext)(L),Y=(L.Provider,e=>{const t=F();e=e||t;const o=(0,G.useSelect)((t=>t(N.QUERY_STATE_STORE_KEY).getValueForQueryContext(e,void 0)),[e]),{setValueForQueryContext:l}=(0,G.useDispatch)(N.QUERY_STATE_STORE_KEY);return[o,(0,v.useCallback)((t=>{l(e,t)}),[e,l])]}),B=(e,t,o)=>{const l=F();o=o||l;const r=(0,G.useSelect)((l=>l(N.QUERY_STATE_STORE_KEY).getValueForQueryKey(o,e,t)),[o,e]),{setQueryValue:s}=(0,G.useDispatch)(N.QUERY_STATE_STORE_KEY);return[r,(0,v.useCallback)((t=>{s(o,e,t)}),[o,e,s])]};var Q=o(4697);var U=o(172);function V(e){const t=(0,v.useRef)(e);return D()(e,t.current)||(t.current=e),t.current}const K=({queryAttribute:e,queryPrices:t,queryStock:o,queryRating:l,queryState:r,isEditor:s=!1})=>{let n=F();n=`${n}-collection-data`;const[c]=Y(n),[a,i]=B("calculate_attribute_counts",[],n),[u,p]=B("calculate_price_range",null,n),[d,m]=B("calculate_stock_status_counts",null,n),[g,w]=B("calculate_rating_counts",null,n),b=V(e||{}),_=V(t),y=V(o),E=V(l);(0,v.useEffect)((()=>{"object"==typeof b&&Object.keys(b).length&&(a.find((e=>{return o="taxonomy",!(e=>null===e)(l=t=b)&&l instanceof Object&&l.constructor===Object&&o in t&&e.taxonomy===b.taxonomy;var t,o,l}))||i([...a,b]))}),[b,a,i]),(0,v.useEffect)((()=>{u!==_&&void 0!==_&&p(_)}),[_,p,u]),(0,v.useEffect)((()=>{d!==y&&void 0!==y&&m(y)}),[y,m,d]),(0,v.useEffect)((()=>{g!==E&&void 0!==E&&w(E)}),[E,w,g]);const[f,k]=(0,v.useState)(s),[S]=(0,Q.Nr)(f,200);f||k(!0);const h=(0,v.useMemo)((()=>(e=>{const t=e;return Array.isArray(e.calculate_attribute_counts)&&(t.calculate_attribute_counts=(0,U.DY)(e.calculate_attribute_counts.map((({taxonomy:e,queryType:t})=>({taxonomy:e,query_type:t})))).asc(["taxonomy","query_type"])),t})(c)),[c]);return(e=>{const{namespace:t,resourceName:o,resourceValues:l=[],query:r={},shouldSelect:s=!0}=e;if(!t||!o)throw new Error("The options object must have valid values for the namespace and the resource properties.");const n=(0,v.useRef)({results:[],isLoading:!0}),c=V(r),a=V(l),i=(()=>{const[,e]=(0,v.useState)();return(0,v.useCallback)((t=>{e((()=>{throw t}))}),[])})(),u=(0,G.useSelect)((e=>{if(!s)return null;const l=e(N.COLLECTIONS_STORE_KEY),r=[t,o,c,a],n=l.getCollectionError(...r);if(n){if(!(n instanceof Error))throw new Error("TypeError: `error` object is not an instance of Error constructor");i(n)}return{results:l.getCollection(...r),isLoading:!l.hasFinishedResolution("getCollection",r)}}),[t,o,a,c,s]);return null!==u&&(n.current=u),n.current})({namespace:"/wc/store/v1",resourceName:"products/collection-data",query:{...r,page:void 0,per_page:void 0,orderby:void 0,order:void 0,...h},shouldSelect:S})},M=({attributes:e,setAttributes:t})=>{const{showCounts:o,selectType:r,displayStyle:s}=e;return(0,l.createElement)(O.InspectorControls,{key:"inspector"},(0,l.createElement)(T.PanelBody,{title:(0,x.__)("Display Settings","woocommerce")},(0,l.createElement)(T.ToggleControl,{label:(0,x.__)("Display product count","woocommerce"),checked:o,onChange:()=>t({showCounts:!o})}),(0,l.createElement)(T.__experimentalToggleGroupControl,{label:(0,x.__)("Allow selecting multiple options?","woocommerce"),value:r||"multiple",onChange:e=>t({selectType:e}),className:"wc-block-attribute-filter__multiple-toggle"},(0,l.createElement)(T.__experimentalToggleGroupControlOption,{value:"multiple",label:(0,x.__)("Multiple","woocommerce")}),(0,l.createElement)(T.__experimentalToggleGroupControlOption,{value:"single",label:(0,x.__)("Single","woocommerce")})),(0,l.createElement)(T.__experimentalToggleGroupControl,{label:(0,x.__)("Display Style","woocommerce"),value:s,onChange:e=>t({displayStyle:e}),className:"wc-block-attribute-filter__display-toggle"},(0,l.createElement)(T.__experimentalToggleGroupControlOption,{value:"list",label:(0,x.__)("List","woocommerce")}),(0,l.createElement)(T.__experimentalToggleGroupControlOption,{value:"dropdown",label:(0,x.__)("Dropdown","woocommerce")}))))},Z=JSON.parse('{"name":"woocommerce/collection-stock-filter","version":"1.0.0","title":"Stock Filter","description":"Enable customers to filter the product collection by stock status.","category":"woocommerce","keywords":["WooCommerce","filter","stock"],"supports":{"interactivity":true,"html":false,"multiple":false},"attributes":{"className":{"type":"string","default":""},"showCounts":{"type":"boolean","default":false},"displayStyle":{"type":"string","default":"list"},"selectType":{"type":"string","default":"multiple"},"isPreview":{"type":"boolean","default":false},"queryParam":{"type":"object","default":{"calculate_stock_status_counts":"true"}}},"usesContext":["collectionData"],"ancestor":["woocommerce/collection-filters"],"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}');E>2&&(0,r.registerBlockType)(Z,{icon:{src:(0,l.createElement)(s.Z,{icon:n.Z,className:"wc-block-editor-components-block-icon"})},edit:e=>{const t=(0,O.useBlockProps)({className:h()("wc-block-stock-filter",e.attributes.className)}),{showCounts:o,displayStyle:r}=e.attributes,n=(0,c.getSetting)("stockStatusOptions",{}),[a]=Y(),{results:i}=K({queryStock:!0,queryState:a,isEditor:!0}),u=(0,v.useMemo)((()=>Object.entries(n).map((([e,t])=>{var r,s;const n=null==i||null===(r=i.stock_status_counts)||void 0===r||null===(s=r.find((t=>t.status===e)))||void 0===s?void 0:s.count;return{value:e,label:(0,l.createElement)(j,{name:t,count:o&&n?Number(n):null})}}))),[n,i,o]);return(0,l.createElement)(l.Fragment,null,(0,l.createElement)("div",{...t},(0,l.createElement)(M,{...e}),(0,l.createElement)(T.Disabled,null,(0,l.createElement)("div",{className:h()("wc-block-stock-filter",`style-${r}`,{"is-loading":!1})},"dropdown"===r?(0,l.createElement)(l.Fragment,null,(0,l.createElement)(A,{className:h()({"single-selection":!0,"is-loading":!1}),suggestions:[],placeholder:(0,x.__)("Select stock status","woocommerce"),onChange:()=>null,value:[]}),(0,l.createElement)(s.Z,{icon:C.Z,size:30})):(0,l.createElement)(R.CheckboxList,{className:"wc-block-stock-filter-list",options:u,checked:[],onChange:()=>null,isLoading:!1,isDisabled:!0})))))}})},1724:()=>{},230:()=>{},3352:()=>{},9196:e=>{"use strict";e.exports=window.React},2819:e=>{"use strict";e.exports=window.lodash},5158:e=>{"use strict";e.exports=window.wp.a11y},4333:e=>{"use strict";e.exports=window.wp.compose},7180:e=>{"use strict";e.exports=window.wp.deprecated},5904:e=>{"use strict";e.exports=window.wp.dom},9307:e=>{"use strict";e.exports=window.wp.element},5736:e=>{"use strict";e.exports=window.wp.i18n},9127:e=>{"use strict";e.exports=window.wp.isShallowEqual},9630:e=>{"use strict";e.exports=window.wp.keycodes},444:e=>{"use strict";e.exports=window.wp.primitives},2560:e=>{"use strict";e.exports=window.wp.warning}},o={};function l(e){var r=o[e];if(void 0!==r)return r.exports;var s=o[e]={exports:{}};return t[e].call(s.exports,s,s.exports,l),s.exports}l.m=t,e=[],l.O=(t,o,r,s)=>{if(!o){var n=1/0;for(u=0;u<e.length;u++){for(var[o,r,s]=e[u],c=!0,a=0;a<o.length;a++)(!1&s||n>=s)&&Object.keys(l.O).every((e=>l.O[e](o[a])))?o.splice(a--,1):(c=!1,s<n&&(n=s));if(c){e.splice(u--,1);var i=r();void 0!==i&&(t=i)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[o,r,s]},l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var o in t)l.o(t,o)&&!l.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.j=4070,(()=>{var e={4070:0};l.O.j=t=>0===e[t];var t=(t,o)=>{var r,s,[n,c,a]=o,i=0;if(n.some((t=>0!==e[t]))){for(r in c)l.o(c,r)&&(l.m[r]=c[r]);if(a)var u=a(l)}for(t&&t(o);i<n.length;i++)s=n[i],l.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return l.O(u)},o=self.webpackChunkwebpackWcBlocksJsonp=self.webpackChunkwebpackWcBlocksJsonp||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var r=l.O(void 0,[2869],(()=>l(8620)));r=l.O(r),((this.wc=this.wc||{}).blocks=this.wc.blocks||{})["collection-stock-filter"]=r})();