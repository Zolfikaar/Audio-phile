import{e as u,f as g,g as m,r as h,o as n,c as a,a as e,t as c,F as v,h as p,i as y,b as w,w as f}from"./index-74f16330.js";const k={class:"category-content"},b={class:"category-header"},I={class:"wrapper"},N={class:"products"},C={class:"product-image"},x=["src"],B={class:"product-info"},S={key:0,class:"new overline"},W={class:"desc"},D=e("button",{class:"btn1"},"See Product",-1),P={__name:"CategoryItems",props:{categoryData:{type:Object,required:!0},categoryName:{type:String,required:!0}},setup(d){const i=d,t=u(window.innerWidth);g(()=>{window.addEventListener("resize",r),r()}),m(()=>{window.removeEventListener("resize",r)});const r=()=>{t.value=window.innerWidth},l=o=>{if(t.value>=1024)return o.categoryImage.desktop;if(t.value>=601&&t.value<=1023)return o.categoryImage.tablet;if(t.value>=350&&t.value<=600)return o.categoryImage.mobile};return(o,E)=>{const _=h("router-link");return n(),a("div",k,[e("div",b,[e("h1",null,c(i.categoryName),1)]),e("div",I,[e("div",N,[(n(!0),a(v,null,p(i.categoryData,s=>(n(),a("div",{class:"product",key:s},[e("div",C,[e("img",{src:l(s)},null,8,x)]),e("div",B,[s.new?(n(),a("span",S,"New Product")):y("",!0),e("h1",null,c(s.name),1),e("p",W,c(s.description),1),w(_,{to:"/product/"+s.slug},{default:f(()=>[D]),_:2},1032,["to"])])]))),128))])])])}}};export{P as _};
