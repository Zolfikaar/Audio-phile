import{d as p,e as h,r as v,f as m,o as n,c as r,g as t,t as a,F as y,h as g,i as w,b as f,w as b}from"./index-56452b5d.js";const k={class:"category-content"},N={class:"category-header"},$={class:"wrapper"},C={class:"products"},x={class:"product-image"},B=["src"],I={class:"product-info"},S={key:0,class:"new overline"},W={class:"desc"},A=t("button",{class:"btn1"},"See Product",-1),E={__name:"CategoryItems",props:{categoryData:{type:Object,required:!0},categoryName:{type:String,required:!0}},setup(l){const c=l;p(()=>{window.addEventListener("resize",i)}),h(()=>{window.removeEventListener("resize",i)});const o=v(window.innerWidth),i=()=>{o.value=window.innerWidth},u=d=>{const e=d.categoryImage;if(o.value>=1024&&(e!=null&&e.desktop))return`/Audio-phile/src/${e.desktop}`;if(o.value>=601&&o.value<=1023&&(e!=null&&e.tablet))return`/Audio-phile/src/${e.tablet}`;if(o.value>=350&&o.value<=600&&(e!=null&&e.mobile))return`/Audio-phile/src/${e.mobile}`};return(d,e)=>{const _=m("router-link");return n(),r("div",k,[t("div",N,[t("h1",null,a(c.categoryName),1)]),t("div",$,[t("div",C,[(n(!0),r(y,null,g(c.categoryData,s=>(n(),r("div",{class:"product",key:s},[t("div",x,[t("img",{src:u(s),alt:""},null,8,B)]),t("div",I,[s.new?(n(),r("span",S,"New Product")):w("",!0),t("h1",null,a(s.name),1),t("p",W,a(s.description),1),f(_,{to:"/product/"+s.slug},{default:b(()=>[A]),_:2},1032,["to"])])]))),128))])])])}}};export{E as _};