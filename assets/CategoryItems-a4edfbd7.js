import{r as p,d as h,e as v,f as m,o as n,c as r,g as t,t as a,F as y,h as g,i as w,b as f,w as b}from"./index-b5883f78.js";const k={class:"category-content"},N={class:"category-header"},C={class:"wrapper"},x={class:"products"},B={class:"product-image"},I=["src"],S={class:"product-info"},W={key:0,class:"new overline"},D={class:"desc"},E=t("button",{class:"btn1"},"See Product",-1),P={__name:"CategoryItems",props:{categoryData:{type:Object,required:!0},categoryName:{type:String,required:!0}},setup(l){const c=l,s=p(window.innerWidth),i=()=>{s.value=window.innerWidth};h(()=>{window.addEventListener("resize",i)}),v(()=>{window.removeEventListener("resize",i)});const _=d=>{const e=d.categoryImage;if(s.value>=1024&&(e!=null&&e.desktop))return"/src/"+e.desktop;if(s.value>=601&&s.value<=1023&&(e!=null&&e.tablet))return"/src/"+e.tablet;if(s.value>=350&&s.value<=600&&(e!=null&&e.mobile))return"/src/"+e.mobile};return(d,e)=>{const u=m("router-link");return n(),r("div",k,[t("div",N,[t("h1",null,a(c.categoryName),1)]),t("div",C,[t("div",x,[(n(!0),r(y,null,g(c.categoryData,o=>(n(),r("div",{class:"product",key:o},[t("div",B,[t("img",{src:_(o),alt:""},null,8,I)]),t("div",S,[o.new?(n(),r("span",W,"New Product")):w("",!0),t("h1",null,a(o.name),1),t("p",D,a(o.description),1),f(u,{to:"/product/"+o.slug},{default:b(()=>[E]),_:2},1032,["to"])])]))),128))])])])}}};export{P as _};
