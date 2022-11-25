"use strict";(self.webpackChunkquick_shop_hikari_documents=self.webpackChunkquick_shop_hikari_documents||[]).push([[8787],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(r),d=o,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||i;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2215:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const i={},a="Item Reference (Item Lookup)",c={unversionedId:"modules/item-ref",id:"modules/item-ref",title:"Item Reference (Item Lookup)",description:"In some situations, only use Material name is not enough.",source:"@site/docs/modules/item-ref.md",sourceDirName:"modules",slug:"/modules/item-ref",permalink:"/QuickShop-Hikari-Documents/zh-Hant/docs/modules/item-ref",draft:!1,editUrl:"https://github.com/Ghost-chu/QuickShop-Hikari-Documents/tree/master/docs/modules/item-ref.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Economy Formatter",permalink:"/QuickShop-Hikari-Documents/zh-Hant/docs/modules/economy-formatter"},next:{title:"itemmatcher",permalink:"/QuickShop-Hikari-Documents/zh-Hant/docs/modules/itemmatcher"}},u={},l=[{value:"Why",id:"why",level:2},{value:"Create a item reference",id:"create-a-item-reference",level:2}],s={toc:l};function m(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"item-reference-item-lookup"},"Item Reference (Item Lookup)"),(0,o.kt)("p",null,"In some situations, only use Material name is not enough.  "),(0,o.kt)("h2",{id:"why"},"Why"),(0,o.kt)("p",null,"Think about, it's easy to limit a Stone price like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"rules: # Rules set\n  cheap-stone: # Rules name, used for identifier and permission node (quickshop.price.restriction.bypass.<name>)\n    items: # Items in the rule (https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html), or the reference the item lookup table by adding @ before the name\n      - STONE\n    currency: # Currency name, If your plugin doesn't support multi-currency (Vault API), this section won't be used\n      - '*'\n    min: 0.01 # Min price (double)\n    max: 1.00 # Max price (double)\n")),(0,o.kt)("p",null,"But if I want to limit a Slimefun gadget?"),(0,o.kt)("h2",{id:"create-a-item-reference"},"Create a item reference"),(0,o.kt)("p",null,"Holding the item you want to create a reference for, then execute command ",(0,o.kt)("inlineCode",{parentName:"p"},"/qs lookup create <name>"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"item-ref",src:r(3230).Z,width:"1419",height:"238"})),(0,o.kt)("p",null,"And you can add ",(0,o.kt)("inlineCode",{parentName:"p"},"@")," prefix at the front of item name to use that reference."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"rules: # Rules set\n  cheap-diamond: # Rules name, used for identifier and permission node (quickshop.price.restriction.bypass.<name>)\n    items: # Items in the rule (https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html), or the reference the item lookup table by adding @ before the name\n      - \"@purediamond\"\n    currency: # Currency name, If your plugin doesn't support multi-currency (Vault API), this section won't be used\n      - '*'\n    min: 0.01 # Min price (double)\n    max: 1.00 # Max price (double)\n")),(0,o.kt)("p",null,"Now you will only limit the price for item Pure Diamond!"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"item-ref-demo",src:r(4795).Z,width:"2560",height:"1494"})))}m.isMDXComponent=!0},4795:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/itemref-demo-b5025be32283848d7cd17350a83229b6.png"},3230:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/itemref-58f80056dbd426b8efbfc89c3a2cdbb6.png"}}]);