"use strict";(self.webpackChunkquick_shop_hikari_documents=self.webpackChunkquick_shop_hikari_documents||[]).push([[2217],{3905:(e,i,t)=>{t.d(i,{Zo:()=>h,kt:()=>c});var s=t(7294);function n(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function r(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);i&&(s=s.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,s)}return t}function o(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?r(Object(t),!0).forEach((function(i){n(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function a(e,i){if(null==e)return{};var t,s,n=function(e,i){if(null==e)return{};var t,s,n={},r=Object.keys(e);for(s=0;s<r.length;s++)t=r[s],i.indexOf(t)>=0||(n[t]=e[t]);return n}(e,i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)t=r[s],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=s.createContext({}),l=function(e){var i=s.useContext(p),t=i;return e&&(t="function"==typeof e?e(i):o(o({},i),e)),t},h=function(e){var i=l(e.components);return s.createElement(p.Provider,{value:i},e.children)},m={inlineCode:"code",wrapper:function(e){var i=e.children;return s.createElement(s.Fragment,{},i)}},u=s.forwardRef((function(e,i){var t=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,h=a(e,["components","mdxType","originalType","parentName"]),u=l(t),c=n,k=u["".concat(p,".").concat(c)]||u[c]||m[c]||r;return t?s.createElement(k,o(o({ref:i},h),{},{components:t})):s.createElement(k,o({ref:i},h))}));function c(e,i){var t=arguments,n=i&&i.mdxType;if("string"==typeof e||n){var r=t.length,o=new Array(r);o[0]=u;var a={};for(var p in i)hasOwnProperty.call(i,p)&&(a[p]=i[p]);a.originalType=e,a.mdxType="string"==typeof e?e:n,o[1]=a;for(var l=2;l<r;l++)o[l]=t[l];return s.createElement.apply(null,o)}return s.createElement.apply(null,t)}u.displayName="MDXCreateElement"},585:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=t(7462),n=(t(7294),t(3905));const r={},o="Per shop permission management",a={unversionedId:"modules/shops/per-shop-perms-management",id:"modules/shops/per-shop-perms-management",title:"Per shop permission management",description:"QuickShop-Hikari provide a system to allow control every single shop's permissions.",source:"@site/docs/modules/shops/per-shop-perms-management.md",sourceDirName:"modules/shops",slug:"/modules/shops/per-shop-perms-management",permalink:"/QuickShop-Hikari-Documents/zh-Hant/docs/modules/shops/per-shop-perms-management",draft:!1,editUrl:"https://github.com/Ghost-chu/QuickShop-Hikari-Documents/tree/master/docs/modules/shops/per-shop-perms-management.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Display Item",permalink:"/QuickShop-Hikari-Documents/zh-Hant/docs/modules/shops/display-system"},next:{title:"Price Limiter",permalink:"/QuickShop-Hikari-Documents/zh-Hant/docs/modules/shops/price-system"}},p={},l=[{value:"Check the current shop settings",id:"check-the-current-shop-settings",level:2},{value:"Default Shop Permission Groups",id:"default-shop-permission-groups",level:2},{value:"Default Shop Permission Permissions",id:"default-shop-permission-permissions",level:2},{value:"Configure the group&#39;s permissions",id:"configure-the-groups-permissions",level:2},{value:"Assign players to specific permission group",id:"assign-players-to-specific-permission-group",level:2},{value:"Usage: Ban a player from your shop",id:"usage-ban-a-player-from-your-shop",level:2}],h={toc:l};function m(e){let{components:i,...r}=e;return(0,n.kt)("wrapper",(0,s.Z)({},h,r,{components:i,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"per-shop-permission-management"},"Per shop permission management"),(0,n.kt)("p",null,"QuickShop-Hikari provide a system to allow control every single shop's permissions."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"THIS IS NOT PLUGIN PERMISSION NODES, IT IS SHOP LEVEL!"),(0,n.kt)("br",{parentName:"p"}),"\n","To check the plugin's permission nodes, please click ",(0,n.kt)("a",{parentName:"p",href:"/QuickShop-Hikari-Documents/zh-Hant/docs/setup/permissions"},"here"),"."),(0,n.kt)("h2",{id:"check-the-current-shop-settings"},"Check the current shop settings"),(0,n.kt)("p",null,"Looking at a quickshop, execute command ",(0,n.kt)("inlineCode",{parentName:"p"},"/qs permission group list")," will listing all users you configured on this shop."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"showcase1",src:t(1665).Z,width:"667",height:"76"})),(0,n.kt)("h2",{id:"default-shop-permission-groups"},"Default Shop Permission Groups"),(0,n.kt)("p",null,"QuickShop-Hikari has built-in groups below:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"quickshop-hikari.blocked - All players in this shop will cannot purchase this shop."),(0,n.kt)("li",{parentName:"ul"},"quickshop-hiakri.everyone - All undefined players will have this group's permissions."),(0,n.kt)("li",{parentName:"ul"},"quickshop-hikari.staff - Use command ",(0,n.kt)("inlineCode",{parentName:"li"},"/qs staff")," will add that player into this group."),(0,n.kt)("li",{parentName:"ul"},"quickshop-hikari.administrator - Exactly same permission with shop owner, can do almost everything on this shop.")),(0,n.kt)("h2",{id:"default-shop-permission-permissions"},"Default Shop Permission Permissions"),(0,n.kt)("p",null,"QuickShop-Hikari has built-in permissions in the list below:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"quickshop-hikari.purchase",(0,n.kt)("br",{parentName:"li"}),"Any players who own this permission can purchase with this shop."),(0,n.kt)("li",{parentName:"ul"},"quickshop-hiakri.show_information",(0,n.kt)("br",{parentName:"li"}),"Any players who own this permission can open shop purchase info panel."),(0,n.kt)("li",{parentName:"ul"},"quickshop-hikari.preview_shop",(0,n.kt)("br",{parentName:"li"}),"Any players who own this permission will have a ",(0,n.kt)("inlineCode",{parentName:"li"},"[Preview Item]")," button on shop purchase info panel and allow to open this shop's preview GUI."),(0,n.kt)("li",{parentName:"ul"},"quickshop-hikari.search",(0,n.kt)("br",{parentName:"li"}),"Any players who own this permission will make this shop visible on that player's ",(0,n.kt)("inlineCode",{parentName:"li"},"/qs find")," results."),(0,n.kt)("li",{parentName:"ul"},"quickshop-hikari.delete",(0,n.kt)("br",{parentName:"li"}),"Any players who own this permission can delete this shop."),(0,n.kt)("li",{parentName:"ul"},"quickshop-hikari.alert.receive",(0,n.kt)("br",{parentName:"li"}),"Any players who own this permission will receive the shop alerts."),(0,n.kt)("li",{parentName:"ul"},"quickshop-hikari.access_inventory",(0,n.kt)("br",{parentName:"li"}),"Any players who own this permission can open the container inventory."),(0,n.kt)("li",{parentName:"ul"},"quickshop-hikari.ownership_transfer",(0,n.kt)("br",{parentName:"li"}),"Any players who own this permission can transfer this shop to another one."),(0,n.kt)("li",{parentName:"ul"},"quickshop-hikari.management_permission",(0,n.kt)("br",{parentName:"li"}),"Any players who own this permission can management the per-shop permissions on this shop."),(0,n.kt)("li",{parentName:"ul"},"quickshop-hikari.toggle_display",(0,n.kt)("br",{parentName:"li"}),"Any players who own this permission can use command ",(0,n.kt)("inlineCode",{parentName:"li"},"/qs toggledisplay")," to toggle per-shop display item."),(0,n.kt)("li",{parentName:"ul"},"quickshop-hikari.set_shoptype",(0,n.kt)("br",{parentName:"li"}),"Any players who own this permission can use command ",(0,n.kt)("inlineCode",{parentName:"li"},"/qs buy")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"/qs sell")," to switch shop type between selling and buying."),(0,n.kt)("li",{parentName:"ul"},"quickshop-hikari.set_price",(0,n.kt)("br",{parentName:"li"}),"Any players who own this permission can modify the price on this shop."),(0,n.kt)("li",{parentName:"ul"},"quickshop-hikari.set_item",(0,n.kt)("br",{parentName:"li"}),"Any players who own this permission can modify the shop item on this shop."),(0,n.kt)("li",{parentName:"ul"},"quickshop-hikari.set_stack_amount",(0,n.kt)("br",{parentName:"li"}),"Any players who own this permission can change the amount of shop item stacking on this shop."),(0,n.kt)("li",{parentName:"ul"},"quickshop-hikari.set_currency",(0,n.kt)("br",{parentName:"li"}),"Any players who own this permission can change the shop currency on this shop."),(0,n.kt)("li",{parentName:"ul"},"quickshop-hikari.set_name",(0,n.kt)("br",{parentName:"li"}),"Any players who own this permission can change the shop name on this shop."),(0,n.kt)("li",{parentName:"ul"},"quickshop-hikari.set_benefit",(0,n.kt)("br",{parentName:"li"}),"Any players who own this permission can modify the shop benefits on this shop.")),(0,n.kt)("h2",{id:"configure-the-groups-permissions"},"Configure the group's permissions"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Incorrect group permissions configure will cause plugin stop working.")),(0,n.kt)("p",null,"Open ",(0,n.kt)("inlineCode",{parentName:"p"},"group.yml")," and you will be able to edit permissions in every single group."),(0,n.kt)("p",null,"You cannot delete ",(0,n.kt)("inlineCode",{parentName:"p"},"quickshop-hikari.everyone"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"quickshop-hikari.staff")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"quickshop-hikari.administrator")," groups. It may cause plugin working incorrectly."),(0,n.kt)("h2",{id:"assign-players-to-specific-permission-group"},"Assign players to specific permission group"),(0,n.kt)("p",null,"Looking at a quickshop and execute command ",(0,n.kt)("inlineCode",{parentName:"p"},"/qs permission user set <player> <group>"),", then a player will assign to new group.",(0,n.kt)("br",{parentName:"p"}),"\n","If this player already in another group, it will be removed from old group."),(0,n.kt)("p",null,"You can also use ",(0,n.kt)("inlineCode",{parentName:"p"},"/qs permission user unset <player>")," to send player back to default group."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"showcase2",src:t(4722).Z,width:"654",height:"146"})),(0,n.kt)("h2",{id:"usage-ban-a-player-from-your-shop"},"Usage: Ban a player from your shop"),(0,n.kt)("p",null,"You can assign a player to group ",(0,n.kt)("inlineCode",{parentName:"p"},"quickshop-hikari.blocked")," to block that player interact with your shop."))}m.isMDXComponent=!0},1665:(e,i,t)=>{t.d(i,{Z:()=>s});const s=t.p+"assets/images/per-shop-permission-management-group-list-demo-3bf047aa8c2c95f95cba48743e6061d6.png"},4722:(e,i,t)=>{t.d(i,{Z:()=>s});const s=t.p+"assets/images/per-shop-permission-management-group-list-demo2-52e65a0295033d368bf433b5a30d32f9.png"}}]);