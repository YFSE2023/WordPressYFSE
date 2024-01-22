(()=>{var e,t,r,o={9252:(e,t,r)=>{"use strict";r.d(t,{R:()=>o});let o=function(e){return e.SINGLE="single",e.THUMBNAIL="thumbnail",e}({})},8916:(e,t,r)=>{"use strict";r.d(t,{V:()=>o});const o=(e,t)=>e.reduce(((e,r)=>(e[String(t?r[t]:r)]=r,e)),{})},4649:(e,t,r)=>{"use strict";r.r(t);var o=r(4981),n=r(9196),c=r(1984),s=r(5795);const a=window.wc.wcBlocksRegistry;var l=r(9307),i=r(5271);r.p=i.VF,(0,a.registerBlockComponent)({blockName:"woocommerce/product-price",component:(0,l.lazy)((()=>Promise.all([r.e(2869),r.e(5579)]).then(r.bind(r,6669))))}),(0,a.registerBlockComponent)({blockName:"woocommerce/product-image",component:(0,l.lazy)((()=>Promise.all([r.e(2869),r.e(3706)]).then(r.bind(r,2097))))}),(0,a.registerBlockComponent)({blockName:"woocommerce/product-title",component:(0,l.lazy)((()=>Promise.all([r.e(2869),r.e(6925)]).then(r.bind(r,9136))))}),(0,a.registerBlockComponent)({blockName:"woocommerce/product-rating",component:(0,l.lazy)((()=>Promise.all([r.e(2869),r.e(7385)]).then(r.bind(r,1382))))}),(0,a.registerBlockComponent)({blockName:"woocommerce/product-rating-stars",component:(0,l.lazy)((()=>Promise.all([r.e(2869),r.e(118)]).then(r.bind(r,89))))}),(0,a.registerBlockComponent)({blockName:"woocommerce/product-rating-counter",component:(0,l.lazy)((()=>Promise.all([r.e(2869),r.e(2918)]).then(r.bind(r,5042))))}),(0,a.registerBlockComponent)({blockName:"woocommerce/product-average-rating",component:(0,l.lazy)((()=>Promise.all([r.e(2869),r.e(3037)]).then(r.bind(r,2043))))}),(0,a.registerBlockComponent)({blockName:"woocommerce/product-button",component:(0,l.lazy)((()=>Promise.all([r.e(2869),r.e(8771)]).then(r.bind(r,4113))))}),(0,a.registerBlockComponent)({blockName:"woocommerce/product-summary",component:(0,l.lazy)((()=>Promise.all([r.e(2869),r.e(8185)]).then(r.bind(r,8281))))}),(0,a.registerBlockComponent)({blockName:"woocommerce/product-sale-badge",component:(0,l.lazy)((()=>Promise.all([r.e(2869),r.e(5432)]).then(r.bind(r,4498))))}),(0,a.registerBlockComponent)({blockName:"woocommerce/product-sku",component:(0,l.lazy)((()=>Promise.all([r.e(2869),r.e(9870)]).then(r.bind(r,8130))))}),(0,a.registerBlockComponent)({blockName:"woocommerce/product-stock-indicator",component:(0,l.lazy)((()=>Promise.all([r.e(2869),r.e(5445)]).then(r.bind(r,789))))}),(0,a.registerBlockComponent)({blockName:"woocommerce/product-add-to-cart",component:(0,l.lazy)((()=>Promise.all([r.e(2869),r.e(5800)]).then(r.bind(r,6996))))});const d=JSON.parse('{"name":"woocommerce/single-product","version":"1.0.0","icon":"info","title":"Single Product","description":"Display a single product.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"align":["wide","full"]},"attributes":{"isPreview":{"type":"boolean","default":false},"productId":{"type":"number"}},"example":{"attributes":{"isPreview":true}},"usesContext":["postId","postType","queryId"],"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}');var u=r(5609),m=r(5736),p=r(229);const g=(0,m.__)("Product Title","woocommerce");function b(e,{blockDescription:t,blockIcon:r,blockTitle:n,variationName:c,scope:s}){(0,o.registerBlockVariation)(e,{description:t,name:c,title:n,isActive:e=>e.__woocommerceNamespace===c,icon:{src:r},attributes:{__woocommerceNamespace:c},scope:s})}(0,n.createElement)(c.Z,{icon:p.Z,className:"wc-block-editor-components-block-icon"});const h="woocommerce/product-query/product-title";b("core/post-title",{blockDescription:(0,m.__)("Display the title of a product.","woocommerce"),blockIcon:(0,n.createElement)(u.Icon,{icon:p.Z}),blockTitle:g,variationName:h,scope:["block"]});var w=r(897);const v=(0,m.__)("Product Summary","woocommerce"),k=((0,n.createElement)(c.Z,{icon:w.Z,className:"wc-block-editor-components-block-icon"}),"woocommerce/product-query/product-summary");b("core/post-excerpt",{blockDescription:(0,m.__)("Display a short description about a product.","woocommerce"),blockIcon:(0,n.createElement)(u.Icon,{icon:w.Z}),blockTitle:v,variationName:k,scope:["block"]});var E=r(9252);const _=(0,n.createElement)(c.Z,{icon:s.Z,className:"wc-block-editor-components-block-icon"}),f=[["core/columns",{},[["core/column",{},[["woocommerce/product-image",{showSaleBadge:!1,isDescendentOfSingleProductBlock:!0,imageSizing:E.R.SINGLE}]]],["core/column",{},[["core/post-title",{headingLevel:2,isLink:!0,__woocommerceNamespace:h}],["woocommerce/product-rating",{isDescendentOfSingleProductBlock:!0}],["woocommerce/product-price",{isDescendentOfSingleProductBlock:!0}],["core/post-excerpt",{__woocommerceNamespace:k}],["woocommerce/add-to-cart-form"],["woocommerce/product-meta"]]]]]],y=["core/columns","core/column",...Object.keys((S=d.name,(0,a.getRegisteredBlockComponents)(S)))];var S,P=r(4942),N=r(4333),C=r(6483),x=r(6989),I=r.n(x),B=r(4617);const O=({selected:e=[],search:t="",queryArgs:r={}})=>{const o=(({selected:e=[],search:t="",queryArgs:r={}})=>{const o=i.Cm.productCount>100,n={per_page:o?100:0,catalog_visibility:"any",search:t,orderby:"title",order:"asc"},c=[(0,C.addQueryArgs)("/wc/store/v1/products",{...n,...r})];return o&&e.length&&c.push((0,C.addQueryArgs)("/wc/store/v1/products",{catalog_visibility:"any",include:e,per_page:0})),c})({selected:e,search:t,queryArgs:r});return Promise.all(o.map((e=>I()({path:e})))).then((e=>{const t=((e,t)=>{const r=new Map;return e.filter((e=>{const o=t(e);return!r.has(o)&&(r.set(o,e),!0)}))})(e.flat(),(e=>e.id));return t.map((e=>({...e,parent:0})))})).catch((e=>{throw e}))},L=async e=>{if(!("json"in e))return{message:e.message,type:e.type||"general"};try{const t=await e.json();return{message:t.message,type:t.type||"api"}}catch(e){return{message:e.message,type:"general"}}},T=(0,N.createHigherOrderComponent)((e=>class extends l.Component{constructor(...e){super(...e),(0,P.Z)(this,"state",{error:null,loading:!1,product:"preview"===this.props.attributes.productId?this.props.attributes.previewProduct:null}),(0,P.Z)(this,"loadProduct",(()=>{const{productId:e}=this.props.attributes;"preview"!==e&&(e?(this.setState({loading:!0}),(e=>I()({path:`/wc/store/v1/products/${e}`}))(e).then((e=>{this.setState({product:e,loading:!1,error:null})})).catch((async e=>{const t=await L(e);this.setState({product:null,loading:!1,error:t})}))):this.setState({product:null,loading:!1,error:null}))}))}componentDidMount(){this.loadProduct()}componentDidUpdate(e){e.attributes.productId!==this.props.attributes.productId&&this.loadProduct()}render(){const{error:t,loading:r,product:o}=this.state;return(0,n.createElement)(e,{...this.props,error:t,getProduct:this.loadProduct,isLoading:r,product:o})}}),"withProduct"),A=({imageUrl:e=`${i.td}/block-error.svg`,header:t=(0,m.__)("Oops!","woocommerce"),text:r=(0,m.__)("There was an error loading the content.","woocommerce"),errorMessage:o,errorMessagePrefix:c=(0,m.__)("Error:","woocommerce"),button:s,showErrorBlock:a=!0})=>a?(0,n.createElement)("div",{className:"wc-block-error wc-block-components-error"},e&&(0,n.createElement)("img",{className:"wc-block-error__image wc-block-components-error__image",src:e,alt:""}),(0,n.createElement)("div",{className:"wc-block-error__content wc-block-components-error__content"},t&&(0,n.createElement)("p",{className:"wc-block-error__header wc-block-components-error__header"},t),r&&(0,n.createElement)("p",{className:"wc-block-error__text wc-block-components-error__text"},r),o&&(0,n.createElement)("p",{className:"wc-block-error__message wc-block-components-error__message"},c?c+" ":"",o),s&&(0,n.createElement)("p",{className:"wc-block-error__button wc-block-components-error__button"},s))):null;r(4578);class R extends l.Component{constructor(...e){super(...e),(0,P.Z)(this,"state",{errorMessage:"",hasError:!1})}static getDerivedStateFromError(e){return void 0!==e.statusText&&void 0!==e.status?{errorMessage:(0,n.createElement)(n.Fragment,null,(0,n.createElement)("strong",null,e.status),": ",e.statusText),hasError:!0}:{errorMessage:e.message,hasError:!0}}render(){const{header:e,imageUrl:t,showErrorMessage:r=!0,showErrorBlock:o=!0,text:c,errorMessagePrefix:s,renderError:a,button:l}=this.props,{errorMessage:i,hasError:d}=this.state;return d?"function"==typeof a?a({errorMessage:i}):(0,n.createElement)(A,{showErrorBlock:o,errorMessage:r?i:null,header:e,imageUrl:t,text:c,errorMessagePrefix:s,button:l}):this.props.children}}const j=R;var $=r(6755);const M=window.wp.blockEditor;var D=r(2864);const Z=e=>{const t=((0,D.useProductDataContext)().product||{}).id||e.productId||0;return t&&1!==t?(0,n.createElement)(M.InspectorControls,null,(0,n.createElement)("div",{className:"wc-block-single-product__edit-card"},(0,n.createElement)("div",{className:"wc-block-single-product__edit-card-title"},(0,n.createElement)("a",{href:`${B.ADMIN_URL}post.php?post=${t}&action=edit`,target:"_blank",rel:"noopener noreferrer"},(0,m.__)("Edit this product's details","woocommerce"),(0,n.createElement)(c.Z,{icon:$.Z,size:16}))),(0,n.createElement)("div",{className:"wc-block-single-product__edit-card-description"},(0,m.__)("Edit details such as title, price, description and more.","woocommerce")))):null};var F=r(7329),V=r(4184),z=r.n(V);const G=window.wp.escapeHtml,U=({error:e})=>(0,n.createElement)("div",{className:"wc-block-error-message"},(({message:e,type:t})=>e?"general"===t?(0,n.createElement)("span",null,(0,m.__)("The following error was returned","woocommerce"),(0,n.createElement)("br",null),(0,n.createElement)("code",null,(0,G.escapeHTML)(e))):"api"===t?(0,n.createElement)("span",null,(0,m.__)("The following error was returned from the API","woocommerce"),(0,n.createElement)("br",null),(0,n.createElement)("code",null,(0,G.escapeHTML)(e))):e:(0,m.__)("An error has prevented the block from being updated.","woocommerce"))(e));r(2513);const q=({className:e="",error:t,isLoading:r=!1,onRetry:o})=>(0,n.createElement)(u.Placeholder,{icon:(0,n.createElement)(c.Z,{icon:F.Z}),label:(0,m.__)("Sorry, an error occurred","woocommerce"),className:z()("wc-block-api-error",e)},(0,n.createElement)(U,{error:t}),o&&(0,n.createElement)(n.Fragment,null,r?(0,n.createElement)(u.Spinner,null):(0,n.createElement)(u.Button,{isSecondary:!0,onClick:o},(0,m.__)("Retry","woocommerce")))),H=window.wc.data;var J=r(9818),W=(r(9763),r(51));function Q(e,t,r){const o=new Set(t.map((e=>e[r])));return e.filter((e=>!o.has(e[r])))}var K=r(2629),Y=r(8916);const X={clear:(0,m.__)("Clear all selected items","woocommerce"),noItems:(0,m.__)("No items found.","woocommerce"),
/* Translators: %s search term */
noResults:(0,m.__)("No results for %s","woocommerce"),search:(0,m.__)("Search for items","woocommerce"),selected:e=>(0,m.sprintf)(/* translators: Number of items selected from list. */
(0,m._n)("%d item selected","%d items selected",e,"woocommerce"),e),updated:(0,m.__)("Search results updated.","woocommerce")},ee=(e,t=e)=>{const r=e.reduce(((e,t)=>{const r=t.parent||0;return e[r]||(e[r]=[]),e[r].push(t),e}),{}),o=(0,Y.V)(t,"id"),n=["0"],c=(e={})=>e.parent?[...c(o[e.parent]),e.name]:e.name?[e.name]:[],s=e=>e.map((e=>{const t=r[e.id];return n.push(""+e.id),{...e,breadcrumbs:c(o[e.parent]),children:t&&t.length?s(t):[]}})),a=s(r[0]||[]);return Object.entries(r).forEach((([e,t])=>{n.includes(e)||a.push(...s(t||[]))})),a},te=(e,t)=>{if(!t)return e;const r=new RegExp(`(${t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")})`,"ig");return e.split(r).map(((e,t)=>r.test(e)?(0,n.createElement)("strong",{key:t},e):(0,n.createElement)(l.Fragment,{key:t},e)))},re=({label:e})=>(0,n.createElement)("span",{className:"woocommerce-search-list__item-count"},e),oe=e=>{const{item:t,search:r}=e,o=t.breadcrumbs&&t.breadcrumbs.length;return(0,n.createElement)("span",{className:"woocommerce-search-list__item-label"},o?(0,n.createElement)("span",{className:"woocommerce-search-list__item-prefix"},1===(c=t.breadcrumbs).length?c.slice(0,1).toString():2===c.length?c.slice(0,1).toString()+" › "+c.slice(-1).toString():c.slice(0,1).toString()+" … "+c.slice(-1).toString()):null,(0,n.createElement)("span",{className:"woocommerce-search-list__item-name"},te((0,K.decodeEntities)(t.name),r)));var c},ne=({countLabel:e,className:t,depth:r=0,controlId:o="",item:c,isSelected:s,isSingle:a,onSelect:i,search:d="",selected:m,useExpandedPanelId:p,...g})=>{var b,h;const[w,v]=p,k=null!=e&&void 0!==c.count&&null!==c.count,E=!(null===(b=c.breadcrumbs)||void 0===b||!b.length),_=!(null===(h=c.children)||void 0===h||!h.length),f=w===c.id,y=z()(["woocommerce-search-list__item",`depth-${r}`,t],{"has-breadcrumbs":E,"has-children":_,"has-count":k,"is-expanded":f,"is-radio-button":a}),S=g.name||`search-list-item-${o}`,P=`${S}-${c.id}`,N=(0,l.useCallback)((()=>{v(f?-1:Number(c.id))}),[f,c.id,v]);return _?(0,n.createElement)("div",{className:y,onClick:N,onKeyDown:e=>"Enter"===e.key||" "===e.key?N():null,role:"treeitem",tabIndex:0},a?(0,n.createElement)(n.Fragment,null,(0,n.createElement)("input",{type:"radio",id:P,name:S,value:c.value,onChange:i(c),onClick:e=>e.stopPropagation(),checked:s,className:"woocommerce-search-list__item-input",...g}),(0,n.createElement)(oe,{item:c,search:d}),k?(0,n.createElement)(re,{label:e||c.count}):null):(0,n.createElement)(n.Fragment,null,(0,n.createElement)(u.CheckboxControl,{className:"woocommerce-search-list__item-input",checked:s,...!s&&c.children.some((e=>m.find((t=>t.id===e.id))))?{indeterminate:!0}:{},label:te((0,K.decodeEntities)(c.name),d),onChange:()=>{s?i(Q(m,c.children,"id"))():i(function(e,t,r){const o=Q(t,e,"id");return[...e,...o]}(m,c.children))()},onClick:e=>e.stopPropagation()}),k?(0,n.createElement)(re,{label:e||c.count}):null)):(0,n.createElement)("label",{htmlFor:P,className:y},a?(0,n.createElement)(n.Fragment,null,(0,n.createElement)("input",{...g,type:"radio",id:P,name:S,value:c.value,onChange:i(c),checked:s,className:"woocommerce-search-list__item-input"}),(0,n.createElement)(oe,{item:c,search:d})):(0,n.createElement)(u.CheckboxControl,{...g,id:P,name:S,className:"woocommerce-search-list__item-input",value:(0,K.decodeEntities)(c.value),label:te((0,K.decodeEntities)(c.name),d),onChange:i(c),checked:s}),k?(0,n.createElement)(re,{label:e||c.count}):null)},ce=ne;var se=r(5430),ae=r(906);r(5932);const le=({id:e,label:t,popoverContents:r,remove:o,screenReaderLabel:s,className:a=""})=>{const[i,d]=(0,l.useState)(!1),p=(0,N.useInstanceId)(le);if(s=s||t,!t)return null;t=(0,K.decodeEntities)(t);const g=z()("woocommerce-tag",a,{"has-remove":!!o}),b=`woocommerce-tag__label-${p}`,h=(0,n.createElement)(n.Fragment,null,(0,n.createElement)("span",{className:"screen-reader-text"},s),(0,n.createElement)("span",{"aria-hidden":"true"},t));return(0,n.createElement)("span",{className:g},r?(0,n.createElement)(u.Button,{className:"woocommerce-tag__text",id:b,onClick:()=>d(!0)},h):(0,n.createElement)("span",{className:"woocommerce-tag__text",id:b},h),r&&i&&(0,n.createElement)(u.Popover,{onClose:()=>d(!1)},r),o&&(0,n.createElement)(u.Button,{className:"woocommerce-tag__remove",onClick:o(e),label:(0,m.sprintf)(
// Translators: %s label.
(0,m.__)("Remove %s","woocommerce"),t),"aria-describedby":b},(0,n.createElement)(c.Z,{icon:ae.Z,size:20,className:"clear-icon",role:"img"})))},ie=le;r(8462);const de=e=>(0,n.createElement)(ce,{...e}),ue=e=>{const{list:t,selected:r,renderItem:o,depth:c=0,onSelect:s,instanceId:a,isSingle:i,search:d,useExpandedPanelId:u}=e,[m]=u;return t?(0,n.createElement)(l.Fragment,null,t.map((t=>{var p,g;const b=null!==(p=t.children)&&void 0!==p&&p.length&&!i?t.children.every((({id:e})=>r.find((t=>t.id===e)))):!!r.find((({id:e})=>e===t.id)),h=(null===(g=t.children)||void 0===g?void 0:g.length)&&m===t.id;return(0,n.createElement)(l.Fragment,{key:t.id},(0,n.createElement)("li",null,o({item:t,isSelected:b,onSelect:s,isSingle:i,selected:r,search:d,depth:c,useExpandedPanelId:u,controlId:a})),h?(0,n.createElement)(ue,{...e,list:t.children,depth:c+1}):null)}))):null},me=({isLoading:e,isSingle:t,selected:r,messages:o,onChange:c,onRemove:s})=>{if(e||t||!r)return null;const a=r.length;return(0,n.createElement)("div",{className:"woocommerce-search-list__selected"},(0,n.createElement)("div",{className:"woocommerce-search-list__selected-header"},(0,n.createElement)("strong",null,o.selected(a)),a>0?(0,n.createElement)(u.Button,{isLink:!0,isDestructive:!0,onClick:()=>c([]),"aria-label":o.clear},(0,m.__)("Clear all","woocommerce")):null),a>0?(0,n.createElement)("ul",null,r.map(((e,t)=>(0,n.createElement)("li",{key:t},(0,n.createElement)(ie,{label:e.name,id:e.id,remove:s}))))):null)},pe=({filteredList:e,search:t,onSelect:r,instanceId:o,useExpandedPanelId:s,...a})=>{const{messages:l,renderItem:i,selected:d,isSingle:u}=a,p=i||de;return 0===e.length?(0,n.createElement)("div",{className:"woocommerce-search-list__list is-not-found"},(0,n.createElement)("span",{className:"woocommerce-search-list__not-found-icon"},(0,n.createElement)(c.Z,{icon:se.Z,role:"img"})),(0,n.createElement)("span",{className:"woocommerce-search-list__not-found-text"},t?(0,m.sprintf)(l.noResults,t):l.noItems)):(0,n.createElement)("ul",{className:"woocommerce-search-list__list"},(0,n.createElement)(ue,{useExpandedPanelId:s,list:e,selected:d,renderItem:p,onSelect:r,instanceId:o,isSingle:u,search:t}))},ge=e=>{const{className:t="",isCompact:r,isHierarchical:o,isLoading:c,isSingle:s,list:a,messages:i=X,onChange:d,onSearch:p,selected:g,type:b="text",debouncedSpeak:h}=e,[w,v]=(0,l.useState)(""),k=(0,l.useState)(-1),E=(0,N.useInstanceId)(ge),_=(0,l.useMemo)((()=>({...X,...i})),[i]),f=(0,l.useMemo)((()=>((e,t,r)=>{if(!t)return r?ee(e):e;const o=new RegExp(t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),"i"),n=e.map((e=>!!o.test(e.name)&&e)).filter(Boolean);return r?ee(n,e):n})(a,w,o)),[a,w,o]);(0,l.useEffect)((()=>{h&&h(_.updated)}),[h,_]),(0,l.useEffect)((()=>{"function"==typeof p&&p(w)}),[w,p]);const y=(0,l.useCallback)((e=>()=>{s&&d([]);const t=g.findIndex((({id:t})=>t===e));d([...g.slice(0,t),...g.slice(t+1)])}),[s,g,d]),S=(0,l.useCallback)((e=>()=>{Array.isArray(e)?d(e):-1===g.findIndex((({id:t})=>t===e.id))?d(s?[e]:[...g,e]):y(e.id)()}),[s,y,d,g]),P=(0,l.useCallback)((e=>{const[t]=g.filter((t=>!e.find((e=>t.id===e.id))));y(t.id)()}),[y,g]);return(0,n.createElement)("div",{className:z()("woocommerce-search-list",t,{"is-compact":r,"is-loading":c,"is-token":"token"===b})},"text"===b&&(0,n.createElement)(me,{...e,onRemove:y,messages:_}),(0,n.createElement)("div",{className:"woocommerce-search-list__search"},"text"===b?(0,n.createElement)(u.TextControl,{label:_.search,type:"search",value:w,onChange:e=>v(e)}):(0,n.createElement)(u.FormTokenField,{disabled:c,label:_.search,onChange:P,onInputChange:e=>v(e),suggestions:[],__experimentalValidateInput:()=>!1,value:c?[(0,m.__)("Loading…","woocommerce")]:g.map((e=>({...e,value:e.name}))),__experimentalShowHowTo:!1})),c?(0,n.createElement)("div",{className:"woocommerce-search-list__list"},(0,n.createElement)(u.Spinner,null)):(0,n.createElement)(pe,{...e,search:w,filteredList:f,messages:_,onSelect:S,instanceId:E,useExpandedPanelId:k}))},be=((0,u.withSpokenMessages)(ge),e=>t=>{let{selected:r}=t;r=void 0===r?null:r;const o=null===r;return Array.isArray(r)?(0,n.createElement)(e,{...t}):(0,n.createElement)(e,{...t,selected:o?[]:[r]})});var he=r(4697);var we=r(9127),ve=r.n(we);const ke=(0,N.createHigherOrderComponent)((e=>{class t extends l.Component{constructor(...e){super(...e),(0,P.Z)(this,"state",{error:null,loading:!1,variations:{}}),(0,P.Z)(this,"loadVariations",(()=>{const{products:e}=this.props,{loading:t,variations:r}=this.state;if(t)return;const o=this.getExpandedProduct();if(!o||r[o])return;const n=e.find((e=>e.id===o));var c;n.variations&&0!==n.variations.length?(this.setState({loading:!0}),(c=o,I()({path:(0,C.addQueryArgs)("wc/store/v1/products",{per_page:0,type:"variation",parent:c})})).then((e=>{const t=e.map((e=>({...e,parent:o})));this.setState({variations:{...this.state.variations,[o]:t},loading:!1,error:null})})).catch((async e=>{const t=await L(e);this.setState({variations:{...this.state.variations,[o]:null},loading:!1,error:t})}))):this.setState({variations:{...this.state.variations,[o]:null},loading:!1,error:null})}))}componentDidMount(){const{selected:e,showVariations:t}=this.props;e&&t&&this.loadVariations()}componentDidUpdate(e){const{isLoading:t,selected:r,showVariations:o}=this.props;o&&(!ve()(e.selected,r)||e.isLoading&&!t)&&this.loadVariations()}isProductId(e){const{products:t}=this.props;return t.some((t=>t.id===e))}findParentProduct(e){var t;const{products:r}=this.props;return null===(t=r.filter((t=>t.variations&&t.variations.find((({id:t})=>t===e))))[0])||void 0===t?void 0:t.id}getExpandedProduct(){const{isLoading:e,selected:t,showVariations:r}=this.props;if(!r)return null;let o=t&&t.length?t[0]:null;return o?this.prevSelectedItem=o:this.prevSelectedItem&&(e||this.isProductId(this.prevSelectedItem)||(o=this.prevSelectedItem)),!e&&o?this.isProductId(o)?o:this.findParentProduct(o):null}render(){const{error:t,isLoading:r}=this.props,{error:o,loading:c,variations:s}=this.state;return(0,n.createElement)(e,{...this.props,error:o||t,expandedProduct:this.getExpandedProduct(),isLoading:r,variations:s,variationsLoading:c})}}return(0,P.Z)(t,"defaultProps",{selected:[],showVariations:!1}),t}),"withProductVariations"),Ee=e=>{const{id:t,name:r,parent:o}=e;return{id:t,name:r,parent:o,breadcrumbs:[],children:[],details:e,value:e.slug}},_e=({className:e,item:t,isSelected:r,isLoading:o,onSelect:c,disabled:s,...a})=>(0,n.createElement)(n.Fragment,null,(0,n.createElement)(ne,{...a,key:t.id,className:e,isSelected:r,item:t,onSelect:c,disabled:s}),r&&o&&(0,n.createElement)("div",{key:"loading",className:z()("woocommerce-search-list__item","woocommerce-product-attributes__item","depth-1","is-loading","is-not-active")},(0,n.createElement)(u.Spinner,null)));r(5301);const fe={list:(0,m.__)("Products","woocommerce"),noItems:(0,m.__)("Your store doesn't have any products.","woocommerce"),search:(0,m.__)("Search for a product to display","woocommerce"),updated:(0,m.__)("Product search results updated.","woocommerce")},ye=be((Ce=ke((0,N.withInstanceId)((e=>{const{expandedProduct:t=null,error:r,instanceId:o,isCompact:c=!1,isLoading:s,onChange:a,onSearch:l,products:i,renderItem:d,selected:u=[],showVariations:p=!1,variations:g,variationsLoading:b}=e;if(r)return(0,n.createElement)(U,{error:r});const h=[...i,...g&&t&&g[t]?g[t]:[]].map(Ee);return(0,n.createElement)(ge,{className:"woocommerce-products",list:h,isCompact:c,isLoading:s,isSingle:!0,selected:h.filter((({id:e})=>u.includes(Number(e)))),onChange:a,renderItem:d||(p?e=>{var t,r,c,a;const{item:l,search:i,depth:d=0,isSelected:u,onSelect:p}=e,g=null!==(t=l.details)&&void 0!==t&&t.variations&&Array.isArray(l.details.variations)?l.details.variations.length:0,h=z()("woocommerce-search-product__item","woocommerce-search-list__item",`depth-${d}`,"has-count",{"is-searching":i.length>0,"is-skip-level":0===d&&0!==l.parent,"is-variable":g>0});if(!l.breadcrumbs.length){var w,v,k,E,_;const t=(null===(w=l.details)||void 0===w?void 0:w.variations)&&l.details.variations.length>0;return(0,n.createElement)(_e,{...e,className:z()(h,{"is-selected":u}),isSelected:u,item:l,onSelect:()=>()=>{p(l)()},isLoading:s||b,countLabel:t?(0,m.sprintf)(/* translators: %1$d is the number of variations of a product product. */
(0,m.__)("%1$d variations","woocommerce"),null===(v=l.details)||void 0===v?void 0:v.variations.length):null,name:`products-${o}`,"aria-label":t?(0,m.sprintf)(/* translators: %1$s is the product name, %2$d is the number of variations of that product. */
(0,m._n)("%1$s, has %2$d variation","%1$s, has %2$d variations",null===(k=l.details)||void 0===k||null===(E=k.variations)||void 0===E?void 0:E.length,"woocommerce"),l.name,null===(_=l.details)||void 0===_?void 0:_.variations.length):void 0})}const f=(0,W.x)(null===(r=l.details)||void 0===r?void 0:r.variation)?e:{...e,item:{...e.item,name:null===(c=l.details)||void 0===c?void 0:c.variation},"aria-label":`${l.breadcrumbs[0]}: ${null===(a=l.details)||void 0===a?void 0:a.variation}`};return(0,n.createElement)(ne,{...f,className:h,name:`variations-${o}`})}:()=>null),onSearch:l,messages:fe,isHierarchical:!0})}))),({selected:e,...t})=>{const[r,o]=(0,l.useState)(!0),[c,s]=(0,l.useState)(null),[a,d]=(0,l.useState)([]),u=i.Cm.productCount>100,m=async e=>{const t=await L(e);s(t),o(!1)},p=(0,l.useRef)(e);(0,l.useEffect)((()=>{O({selected:p.current}).then((e=>{d(e),o(!1)})).catch(m)}),[p]);const g=(0,he.y1)((t=>{O({selected:e,search:t}).then((e=>{d(e),o(!1)})).catch(m)}),400),b=(0,l.useCallback)((e=>{o(!0),g(e)}),[o,g]);return(0,n.createElement)(Ce,{...t,selected:e,error:c,products:a,isLoading:r,onSearch:u?b:null})})),Se=({attributes:e,setAttributes:t})=>(0,n.createElement)(ye,{selected:e.productId||0,showVariations:!0,onChange:(e=[])=>{const r=e[0]?e[0].id:0;t({productId:r})}}),Pe=({isEditing:e,setIsEditing:t})=>(0,n.createElement)(M.BlockControls,null,(0,n.createElement)(u.ToolbarGroup,{controls:[{icon:"edit",title:(0,m.__)("Edit selected product","woocommerce"),onClick:()=>t(!e),isActive:e}]})),Ne=e=>e.map((([e,t={},r=[]])=>{const n=r?Ne(r):[];return(0,o.createBlock)(e,t,n)}));var Ce,xe=r(7968);const Ie=({isLoading:e,product:t,clientId:r})=>{const o=".wc-block-editor-single-product .wc-block-editor-layout",{replaceInnerBlocks:c}=(0,J.useDispatch)("core/block-editor"),s=(0,l.useCallback)((()=>{c(r,Ne(f),!1)}),[r,c]);return(0,n.createElement)(D.InnerBlockLayoutContextProvider,{parentName:d.name,parentClassName:o},(0,n.createElement)(D.ProductDataContextProvider,{product:t,isLoading:e},(0,n.createElement)(M.InspectorControls,null,(0,n.createElement)(u.PanelBody,{title:(0,m.__)("Layout","woocommerce"),initialOpen:!0},(0,n.createElement)(u.Button,{label:(0,m.__)("Reset layout to default","woocommerce"),onClick:s,isTertiary:!0,className:"wc-block-editor-single-product__reset-layout",icon:xe.Z},(0,m.__)("Reset layout","woocommerce")))),(0,n.createElement)("div",{className:o},(0,n.createElement)(M.BlockContextProvider,{value:{postId:null==t?void 0:t.id,postType:"product"}},(0,n.createElement)(M.InnerBlocks,{template:f,allowedBlocks:y,templateLock:!1})))))},Be=T((({attributes:e,setAttributes:t,error:r,getProduct:o,product:c,isLoading:s,clientId:a})=>{const{productId:i,isPreview:p}=e,[g,b]=(0,l.useState)(!i),h=(0,M.useBlockProps)(),w=(0,J.useSelect)((e=>p?e(H.PRODUCTS_STORE_NAME).getProducts({per_page:1}):null));return(0,l.useEffect)((()=>{var r;const o=w?null===(r=w[0])||void 0===r?void 0:r.id:null;o&&(t({...e,productId:o}),b(!1))}),[e,w,t]),r?(0,n.createElement)(q,{className:"wc-block-editor-single-product-error",error:r,isLoading:s,onRetry:o}):(0,n.createElement)("div",{...h},(0,n.createElement)(j,{header:(0,m.__)("Single Product Block Error","woocommerce")},(0,n.createElement)(Pe,{setIsEditing:b,isEditing:g}),g?(0,n.createElement)(u.Placeholder,{icon:_,label:d.title,className:"wc-block-editor-single-product"},d.description,(0,n.createElement)("div",{className:"wc-block-editor-single-product__selection"},(0,n.createElement)(Se,{attributes:e,setAttributes:t}),(0,n.createElement)(u.Button,{isSecondary:!0,onClick:()=>{b(!1)}},(0,m.__)("Done","woocommerce")))):(0,n.createElement)("div",null,(0,n.createElement)(M.InspectorControls,null,(0,n.createElement)(u.PanelBody,{title:(0,m.__)("Product","woocommerce"),initialOpen:!1},(0,n.createElement)(Se,{attributes:e,setAttributes:t}))),(0,n.createElement)(Z,{productId:i}),(0,n.createElement)(Ie,{clientId:a,product:c,isLoading:s}))))}));(0,o.registerBlockType)(d,{icon:_,edit:Be,save:()=>{const e=M.useBlockProps.save();return(0,n.createElement)("div",{...e},(0,n.createElement)(M.InnerBlocks.Content,null))}})},7530:(e,t,r)=>{"use strict";r.d(t,{Cm:()=>g,Lo:()=>w,VF:()=>h,fh:()=>v,td:()=>b,vr:()=>_});var o,n,c,s,a,l,i,d,u,m,p=r(4617);const g=(0,p.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),b=g.pluginUrl+"images/",h=g.pluginUrl+"build/",w=g.buildPhase,v=(null===(o=p.STORE_PAGES.shop)||void 0===o||o.permalink,null===(n=p.STORE_PAGES.checkout)||void 0===n||n.id,null===(c=p.STORE_PAGES.checkout)||void 0===c||c.permalink,null===(s=p.STORE_PAGES.privacy)||void 0===s||s.permalink,null===(a=p.STORE_PAGES.privacy)||void 0===a||a.title,null===(l=p.STORE_PAGES.terms)||void 0===l||l.permalink,null===(i=p.STORE_PAGES.terms)||void 0===i||i.title,null===(d=p.STORE_PAGES.cart)||void 0===d||d.id,null===(u=p.STORE_PAGES.cart)||void 0===u?void 0:u.permalink),k=(null!==(m=p.STORE_PAGES.myaccount)&&void 0!==m&&m.permalink?p.STORE_PAGES.myaccount.permalink:(0,p.getSetting)("wpLoginUrl","/wp-login.php"),(0,p.getSetting)("localPickupEnabled",!1),(0,p.getSetting)("countries",{})),E=(0,p.getSetting)("countryData",{}),_=(Object.fromEntries(Object.keys(E).filter((e=>!0===E[e].allowBilling)).map((e=>[e,k[e]||""]))),Object.fromEntries(Object.keys(E).filter((e=>!0===E[e].allowBilling)).map((e=>[e,E[e].states||[]]))),Object.fromEntries(Object.keys(E).filter((e=>!0===E[e].allowShipping)).map((e=>[e,k[e]||""]))),Object.fromEntries(Object.keys(E).filter((e=>!0===E[e].allowShipping)).map((e=>[e,E[e].states||[]]))),Object.fromEntries(Object.keys(E).map((e=>[e,E[e].locale||[]]))))},4478:(e,t,r)=>{"use strict";r.d(t,{uq:()=>n}),r(4981);var o=r(7530);const n=()=>o.Lo>1},5271:(e,t,r)=>{"use strict";r.d(t,{Cm:()=>o.Cm,VF:()=>o.VF,fh:()=>o.fh,td:()=>o.td,uq:()=>n.uq,vr:()=>o.vr});var o=r(7530),n=r(4478)},51:(e,t,r)=>{"use strict";r.d(t,{x:()=>o});const o=e=>null==e||"object"==typeof e&&0===Object.keys(e).length||"string"==typeof e&&0===e.trim().length},4578:()=>{},9763:()=>{},2513:()=>{},5301:()=>{},8462:()=>{},5932:()=>{},9196:e=>{"use strict";e.exports=window.React},2819:e=>{"use strict";e.exports=window.lodash},711:e=>{"use strict";e.exports=window.wc.blocksComponents},4293:e=>{"use strict";e.exports=window.wc.priceFormat},4801:e=>{"use strict";e.exports=window.wc.wcBlocksData},2864:e=>{"use strict";e.exports=window.wc.wcBlocksSharedContext},721:e=>{"use strict";e.exports=window.wc.wcBlocksSharedHocs},4617:e=>{"use strict";e.exports=window.wc.wcSettings},6989:e=>{"use strict";e.exports=window.wp.apiFetch},987:e=>{"use strict";e.exports=window.wp.autop},4981:e=>{"use strict";e.exports=window.wp.blocks},5609:e=>{"use strict";e.exports=window.wp.components},4333:e=>{"use strict";e.exports=window.wp.compose},9818:e=>{"use strict";e.exports=window.wp.data},7180:e=>{"use strict";e.exports=window.wp.deprecated},5904:e=>{"use strict";e.exports=window.wp.dom},9307:e=>{"use strict";e.exports=window.wp.element},2694:e=>{"use strict";e.exports=window.wp.hooks},2629:e=>{"use strict";e.exports=window.wp.htmlEntities},5736:e=>{"use strict";e.exports=window.wp.i18n},9127:e=>{"use strict";e.exports=window.wp.isShallowEqual},444:e=>{"use strict";e.exports=window.wp.primitives},2289:e=>{"use strict";e.exports=window.wp.styleEngine},6483:e=>{"use strict";e.exports=window.wp.url},2560:e=>{"use strict";e.exports=window.wp.warning},5266:e=>{"use strict";e.exports=window.wp.wordcount}},n={};function c(e){var t=n[e];if(void 0!==t)return t.exports;var r=n[e]={exports:{}};return o[e].call(r.exports,r,r.exports,c),r.exports}c.m=o,e=[],c.O=(t,r,o,n)=>{if(!r){var s=1/0;for(d=0;d<e.length;d++){for(var[r,o,n]=e[d],a=!0,l=0;l<r.length;l++)(!1&n||s>=n)&&Object.keys(c.O).every((e=>c.O[e](r[l])))?r.splice(l--,1):(a=!1,n<s&&(s=n));if(a){e.splice(d--,1);var i=o();void 0!==i&&(t=i)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[r,o,n]},c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},c.d=(e,t)=>{for(var r in t)c.o(t,r)&&!c.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((t,r)=>(c.f[r](e,t),t)),[])),c.u=e=>({118:"product-rating-stars",2918:"product-rating-counter",3037:"product-average-rating",3706:"product-image",5432:"product-sale-badge",5445:"product-stock-indicator",5579:"product-price",5800:"product-add-to-cart",6925:"product-title",7385:"product-rating",8185:"product-summary",8771:"product-button",9870:"product-sku"}[e]+".js?ver="+{118:"d6399d5feafd348e2b25",2918:"d2efdc3e496fe79d4389",3037:"5cb231acde5f41156fc6",3706:"a944d75c187c89858397",5432:"0124c58440492a59759e",5445:"ac098e60806fc9eb7072",5579:"32e7c61e8a86cba9fd93",5800:"eadcab028822edea251c",6925:"0cdca77116931f44baaf",7385:"ff1bb853c1bf572de4e7",8185:"bb45ddaa6bb015ffabad",8771:"ccbcd206ea6136719be7",9870:"c6d76173a8d8ab899088"}[e]),c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t={},r="webpackWcBlocksJsonp:",c.l=(e,o,n,s)=>{if(t[e])t[e].push(o);else{var a,l;if(void 0!==n)for(var i=document.getElementsByTagName("script"),d=0;d<i.length;d++){var u=i[d];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==r+n){a=u;break}}a||(l=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,c.nc&&a.setAttribute("nonce",c.nc),a.setAttribute("data-webpack",r+n),a.src=e),t[e]=[o];var m=(r,o)=>{a.onerror=a.onload=null,clearTimeout(p);var n=t[e];if(delete t[e],a.parentNode&&a.parentNode.removeChild(a),n&&n.forEach((e=>e(o))),r)return r(o)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=m.bind(null,a.onerror),a.onload=m.bind(null,a.onload),l&&document.head.appendChild(a)}},c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.j=8943,(()=>{var e;c.g.importScripts&&(e=c.g.location+"");var t=c.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),c.p=e})(),(()=>{var e={8943:0};c.f.j=(t,r)=>{var o=c.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var n=new Promise(((r,n)=>o=e[t]=[r,n]));r.push(o[2]=n);var s=c.p+c.u(t),a=new Error;c.l(s,(r=>{if(c.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var n=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+n+": "+s+")",a.name="ChunkLoadError",a.type=n,a.request=s,o[1](a)}}),"chunk-"+t,t)}},c.O.j=t=>0===e[t];var t=(t,r)=>{var o,n,[s,a,l]=r,i=0;if(s.some((t=>0!==e[t]))){for(o in a)c.o(a,o)&&(c.m[o]=a[o]);if(l)var d=l(c)}for(t&&t(r);i<s.length;i++)n=s[i],c.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return c.O(d)},r=self.webpackChunkwebpackWcBlocksJsonp=self.webpackChunkwebpackWcBlocksJsonp||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var s=c.O(void 0,[2869],(()=>c(4649)));s=c.O(s),((this.wc=this.wc||{}).blocks=this.wc.blocks||{})["single-product"]=s})();