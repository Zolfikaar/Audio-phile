import{e as d,u as N,j as Q,f as T,g as V,r as W,o as i,c as r,a as s,i as E,t as n,k as I,F as u,h as k,b as _,w as L,l as q}from"./index-8cad2b8f.js";import{C as z,B as F}from"./BestGearComp-23b3377f.js";import"/assets/shared/desktop/image-category-thumbnail-headphones.png";import"/assets/shared/desktop/image-category-thumbnail-speakers.png";import"/assets/shared/desktop/image-category-thumbnail-earphones.png";const G={class:"wrapper"},M=s("span",{class:"backBtn"},"Go Back",-1),j=[M],A={class:"product"},D={class:"product-image"},U=["src"],Y={class:"product-info"},H={key:0,class:"new overline"},J={class:"desc"},K={class:"price"},O={class:"btns"},R={class:"qty-box"},X={class:"value"},Z=s("a",null,"Add To Cart",-1),ss=[Z],ts={class:"features"},es={class:"features-box"},os=s("h3",null,"features",-1),ns={class:"in-the-box"},as=s("h3",null,"In the Box",-1),ls={class:"box-items"},cs={class:"item-count"},is={class:"item-name"},rs={class:"gallery"},ds={class:"small"},us={class:"first"},_s=["src"],vs={class:"second"},hs=["src"],ps={class:"big"},ms={class:"third"},gs=["src"],ks={class:"other-products"},fs=s("h3",null,"You May also like",-1),bs={class:"items"},ys={class:"item-image"},Cs=["src"],Ns={__name:"SingleProduct",props:["slug"],setup(f){const{slug:b}=f,y=d(N().products),C=Q(),e=d({}),a=d(1),w=d(10);T(()=>{let c=y.value.find(t=>t.slug===b);e.value=c,window.addEventListener("resize",v)}),V(()=>{window.removeEventListener("resize",v)});const l=d(window.innerWidth),v=()=>{l.value=window.innerWidth},x=c=>{const t=c.categoryImage;if(l.value>=1024&&(t!=null&&t.desktop))return t.desktop;if(l.value>=601&&l.value<=1023&&(t!=null&&t.tablet))return t.tablet;if(l.value>=350&&l.value<=600&&(t!=null&&t.mobile))return t.mobile},B=()=>{a.value<w.value&&a.value++},P=()=>{a.value>1&&a.value--},S=C.addToCart;return(c,t)=>{var h,p,m;const $=W("router-link");return i(),r(u,null,[s("div",G,[s("a",{class:"backBtn-anchor",onClick:t[0]||(t[0]=o=>c.$router.go(-1))},j),s("div",A,[s("div",D,[s("img",{src:x(e.value),alt:""},null,8,U)]),s("div",Y,[e.value.new?(i(),r("span",H,"New Product")):E("",!0),s("h1",null,n(e.value.name),1),s("p",J,n(e.value.description),1),s("h6",K,"$"+n(e.value.price),1),s("div",O,[s("div",R,[s("span",{class:"minus",onClick:P},"-"),s("span",X,n(a.value),1),s("span",{class:"plus",onClick:B},"+")]),s("button",{class:"btn1",onClick:t[1]||(t[1]=o=>I(S)(e.value,a.value))},ss)])])]),s("div",ts,[s("div",es,[os,s("p",null,n(e.value.features),1)]),s("div",ns,[as,s("div",ls,[(i(!0),r(u,null,k(e.value.includes,o=>(i(),r("div",{class:"box-item",key:o},[s("span",cs,n(o.quantity)+"x",1),s("span",is,n(o.item),1)]))),128))])])]),s("div",rs,[s("div",ds,[s("div",us,[s("img",{src:(h=e.value.gallery)==null?void 0:h.first.desktop,alt:""},null,8,_s)]),s("div",vs,[s("img",{src:(p=e.value.gallery)==null?void 0:p.second.desktop,alt:""},null,8,hs)])]),s("div",ps,[s("div",ms,[s("img",{src:(m=e.value.gallery)==null?void 0:m.third.desktop,alt:""},null,8,gs)])])]),s("div",ks,[fs,s("div",bs,[(i(!0),r(u,null,k(e.value.others,o=>{var g;return i(),r("div",{class:"item",key:o},[s("div",ys,[s("img",{src:(g=o.image)==null?void 0:g.desktop,alt:""},null,8,Cs)]),s("h5",null,n(o.name),1),s("button",{class:"btn1",onClick:t[2]||(t[2]=ws=>c.$router.go())},[_($,{to:"/product/"+o.slug},{default:L(()=>[q("See Product")]),_:2},1032,["to"])])])}),128))])])]),_(z),_(F)],64)}}};export{Ns as default};
