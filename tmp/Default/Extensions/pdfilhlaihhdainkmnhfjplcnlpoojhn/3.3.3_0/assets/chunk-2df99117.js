import{l as a,e as n,w,f as l,r as y,o as r,x as J,p as c,q as S}from"./chunk-336a5005.js";let o,i,p,d,h,b,v,u,C,f,k,x,m,_,B,O,P,N=(async()=>{let s,g;o=[{key:"daily_views",operator:">=",value:8},{key:"original_creation_days",operator:"<=",value:14}],p="#dc2626",s={settings:o,textColor:"#ffffff",backgroundColor:p},k={settings:await(async()=>{try{const t=await a.get(n);return t?JSON.parse(t):o}catch{return o}})(),textColor:await a.get(w)||s.textColor,backgroundColor:await a.get(l)||s.backgroundColor},O=(t,e)=>{t.setState({highlight:{...t.state.highlight,settings:e}}),a.set(n,JSON.stringify(e))},v=(t,e)=>{t.setState({highlight:{...t.state.highlight,textColor:e}}),a.set(w,e)},u=(t,e)=>{t.setState({highlight:{...t.state.highlight,backgroundColor:e}}),a.set(l,e)},B=t=>{t.setState({highlight:{...t.state.highlight,settings:o,textColor:s.textColor,backgroundColor:s.backgroundColor}}),a.set(n,JSON.stringify(o)),a.set(w,s.textColor),a.set(l,s.backgroundColor)},h="bottom",i="embedded",d="overlay",g={active:!0,show:!0,sidebarPosition:h,sidebarBehavior:i},b={active:await(async()=>{const t=await a.get(y);return t===void 0?g.active:t})(),show:await(async()=>{const t=await a.get(r);return t===void 0?g.show:t})(),iframe:await a.get(J)||chrome.runtime.getURL("popup.html"),sidebarPosition:await a.get(c)||h,sidebarBehavior:await a.get(S)||i},C=async(t,e)=>{await t.setState({heyShop:{...t.state.heyShop,show:e}}),await a.set(r,e)},P=async t=>{await t.setState({heyShop:{...t.state.heyShop,show:!t.state.heyShop.show}}),await a.set(r,t.state.heyShop.show)},f=async t=>{await t.setState({heyShop:{...t.state.heyShop,active:!t.state.heyShop.active}}),await a.set(y,t.state.heyShop.active)},x=async(t,e)=>{await t.setState({heyShop:{...t.state.heyShop,sidebarPosition:e}}),await a.set(c,e)},m=async(t,e)=>{await t.setState({heyShop:{...t.state.heyShop,sidebarBehavior:e}}),await a.set(S,e)},_=async t=>{await t.setState({heyShop:{...t.state.heyShop,show:!0,active:!0,sidebarBehavior:i,sidebarPosition:h}}),await a.set(r,!0),await a.set(y,!0),await a.set(c,h),await a.set(S,i)}})();export{o as D,i as S,N as __tla,p as a,d as b,h as c,b as d,v as e,u as f,C as g,f as h,k as i,x as j,m as k,_ as l,B as r,O as s,P as t};