(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[0],{50:function(e,t,i){},57:function(e,t,i){},58:function(e,t,i){},60:function(e,t,i){},61:function(e,t,i){},62:function(e,t,i){},63:function(e,t,i){},64:function(e,t,i){},65:function(e,t,i){},66:function(e,t,i){},67:function(e,t,i){"use strict";i.r(t);var s=i(3),c=i(28),a=i.n(c),n=i(9),r=i.p+"static/media/logo.eae6d204.svg",l=(i(50),i(45)),o=i(44),j=i(17),d=i(2);var b=function(e){return Object(d.jsxs)("div",{className:"header-container",children:[Object(d.jsx)(j.b,{to:"/",children:Object(d.jsx)("img",{className:"logo",src:r,alt:"logo"})}),Object(d.jsx)("div",{onClick:function(){return e.setMobileNav(!e.mobileNav)},className:"burger-btn",children:e.mobileNav?Object(d.jsx)(o.a,{}):Object(d.jsx)(l.a,{})})]})};i(57),i(58);var m=function(e){return Object(d.jsx)("nav",{className:"nav-container",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(j.b,{to:"/projects",children:"PROJECTS"})}),Object(d.jsx)("li",{children:Object(d.jsx)(j.b,{to:"/about",children:"ABOUT"})}),Object(d.jsx)("li",{children:Object(d.jsx)(j.b,{to:"/contact",children:"CONTACT"})})]})})},h=i(4);var O=function(e){var t=e.mobileNav,i=e.setMobileNav,s=Object(h.useSpring)({config:h.config.gentle,from:{opacity:0,transform:"perspective(600px) translate3d(100%,0,0) "},to:{opacity:1,transform:"perspective(600px) translate3d(0,0,0)"}});return Object(d.jsxs)("div",{className:"main-container",children:[t?Object(d.jsx)("div",{}):Object(d.jsx)(m,{mobileNav:t,setMobileNav:i}),Object(d.jsxs)("div",{className:"text-container",children:[Object(d.jsx)(h.animated.div,{style:s,className:"main-text",children:"MUSTAFA"}),Object(d.jsx)(h.animated.div,{style:s,className:"sub-text",children:"A SOFTWARE AND A WEB DEVELOPER"})]})]})};i(60),i(61),i(62);var u=function(e){return Object(d.jsx)("a",{href:e.to,children:Object(d.jsx)("div",{className:"button-container",children:Object(d.jsx)("div",{className:"button-title",children:e.title})})})};var x=function(e){return Object(d.jsxs)("div",{className:"card-container",children:[Object(d.jsxs)("div",{className:"left",children:[Object(d.jsx)("div",{className:"card-title",children:e.title}),Object(d.jsx)("div",{className:"card-desc",children:e.description})]}),Object(d.jsxs)("div",{className:"right",children:[Object(d.jsxs)("div",{className:"language-container",children:[Object(d.jsx)("div",{className:"languages",children:"Language used:"}),Object(d.jsx)("div",{className:"language-logo-container",children:e.logo})]}),Object(d.jsx)(u,{to:e.to,title:e.linkTitle})]})]})},v=i(31);var g=function(){var e=[{title:"TAI",description:"TAI stands for Terminal ascii images this project\u2019s main goal is to convert images and gif animations into a text inside the terminal. this project used some algorithms i implemented like ostu\u2019s image thresholding algorithm, braille text parsing etc. ",link:"https://github.com/MustafaSalih1993/tai",logo:Object(d.jsx)(v.b,{})},{title:"SORTING VISUALIZER",description:"Sorting visualizer is a web application written in javascript it shows how sorting algorithms work! i learned alot about sorting with this project",link:"https://github.com/MustafaSalih1993/sorting-visualizer",logo:Object(d.jsx)(v.a,{})},{title:"RSBLOCKS",description:"rsblocks is a usable status bar on linux showing system information and fetches weather, bitcoin prices and many more, it's configurable with a YAML configuration file, it's written in Rust programming language",link:"https://github.com/MustafaSalih1993/rsblocks",logo:Object(d.jsx)(v.b,{})}],t=e.map((function(e){return Object(d.jsx)(x,{title:e.title,to:e.link,logo:e.logo,description:e.description,linkTitle:"View Source Code"})})),i=Object(h.useTrail)(e.length,{config:h.config.gentle,from:{opacity:0,transform:"translate3d(100%,0,0)"},to:{opacity:1,transform:"translate3d(0,0,0)"}});return Object(d.jsxs)("div",{className:"projects-container",children:[Object(d.jsx)(h.animated.div,{style:i[0],className:"projects-title",children:"Things i made !"}),Object(d.jsx)("div",{className:"cards-container",children:i.map((function(e,i){return Object(d.jsx)(h.animated.div,{style:e,children:t[i]},i)}))}),Object(d.jsxs)("div",{className:"cards-end",children:[Object(d.jsx)("div",{className:"cards-end-title",children:"Want to see more projects?"}),Object(d.jsxs)("div",{className:"cards-end-text",children:["Check my Github account"," ",Object(d.jsx)("a",{className:"cards-end-link",href:"https://github.com/MustafaSalih1993",children:"HERE"})]})]})]})},f=(i(63),i.p+"static/media/mustafa.41472ea5.jpg");var p=function(){var e=Object(h.useSpring)({config:h.config.gentle,from:{transform:"translate3d(-100%,0,0)",opacity:0},to:{transform:"translate3d(0,0,0)",opacity:1}}),t=Object(h.useSpring)({config:h.config.gentle,from:{transform:"translate3d(100%,0,0)",opacity:0},to:{transform:"translate3d(0,0,0)",opacity:1}});return Object(d.jsxs)("div",{className:"about-container",children:[Object(d.jsxs)("div",{className:"about-hero-container",children:[Object(d.jsxs)(h.animated.div,{style:e,className:"about-hero-text",children:[Object(d.jsx)("div",{className:"about-hero-title",children:"MUSTAFA SALIH"}),Object(d.jsx)("p",{children:"im from Iraq currently living in Turkey, i do some programming in a couple of programming languages, i\u2019ve found the passion for programming a couple years ago, i have the ability to teach myself everything"})]}),Object(d.jsxs)(h.animated.div,{style:t,className:"about-image-container",children:[Object(d.jsx)("div",{className:"image-overlay"}),Object(d.jsx)("img",{className:"img",src:f,alt:""})]})]}),Object(d.jsxs)("div",{className:"skills-card-container",children:[Object(d.jsx)("div",{className:"skills-title",children:"Skills"}),Object(d.jsxs)("div",{className:"skills-content-container",children:[Object(d.jsxs)("div",{className:"skills",children:[Object(d.jsx)("div",{children:"Rust"}),Object(d.jsx)("div",{children:"Javascript"}),Object(d.jsx)("div",{children:"C"}),Object(d.jsx)("div",{children:"Python"})]}),Object(d.jsxs)("div",{className:"skills",children:[Object(d.jsx)("div",{children:"React.js"}),Object(d.jsx)("div",{children:"Vue.js"}),Object(d.jsx)("div",{children:"Node.js"})]}),Object(d.jsxs)("div",{className:"skills",children:[Object(d.jsx)("div",{children:"Html"}),Object(d.jsx)("div",{children:"Css"})]}),Object(d.jsxs)("div",{className:"skills",children:[Object(d.jsx)("div",{children:"SQL"}),Object(d.jsx)("div",{children:"Postgresql"}),Object(d.jsx)("div",{children:"MongoDB"})]})]})]})]})},N=(i(64),i(32)),y=[{link:"mailto:mustafasalih1991@gmail.com",icon:Object(d.jsx)(N.c,{})},{link:"https://github.com/mustafasalih1993",icon:Object(d.jsx)(N.a,{})},{link:"https://www.instagram.com/iq.code/",icon:Object(d.jsx)(N.b,{})}];var k=function(){var e=Object(h.useTrail)(3,{config:h.config.gentle,from:{color:"#ffffff",transform:"translate3d(0,-50%,0)"},to:{color:"#512b58",transform:"translate3d(0,0,0)"}}),t=Object(h.useSpring)({from:{opacity:0},to:{opacity:1}});return Object(d.jsxs)("div",{className:"contact-container",children:[Object(d.jsx)(h.animated.div,{className:"contact-title",style:t,children:"You Can Find Me On:"}),Object(d.jsxs)("civ",{className:"contact-box",children:[e.map((function(e,t){return Object(d.jsx)(h.animated.div,{className:"contact-item",style:e,children:Object(d.jsx)(h.animated.a,{style:e,href:y[t].link,children:y[t].icon})},t)}))," "]})]})},S=i(6);i(65);var T=function(e){var t=e.mobileNav,i=e.setMobileNav,s=Object(h.useSpring)({y:t?0:-100});return Object(d.jsx)(h.animated.nav,{className:"mobile-nav",style:{transform:s.y.to((function(e){return"translate(0%, ".concat(e,"%)")}))},children:Object(d.jsxs)("ul",{className:"mobile-nav-links",children:[Object(d.jsx)(j.b,{to:"/projects",children:Object(d.jsx)("li",{onClick:function(){return i(!t)},children:"PROJECTS"})}),Object(d.jsx)(j.b,{to:"/about",children:Object(d.jsx)("li",{onClick:function(){return i(!t)},children:"ABOUT"})}),Object(d.jsx)(j.b,{to:"/contact",children:Object(d.jsx)("li",{onClick:function(){return i(!t)},children:"CONTACT"})})]})})};var w=function(){var e=Object(s.useState)(!1),t=Object(n.a)(e,2),i=t[0],c=t[1];return Object(d.jsxs)(j.a,{children:[Object(d.jsx)(T,{mobileNav:i,setMobileNav:c}),Object(d.jsx)(b,{mobileNav:i,setMobileNav:c}),Object(d.jsxs)(S.d,{children:[Object(d.jsx)(S.b,{path:"/",exact:!0,component:O,children:Object(d.jsx)(S.a,{to:"/personal-website"})}),Object(d.jsx)(S.b,{path:"/personal-website",exact:!0,component:O}),Object(d.jsx)(S.b,{path:"/projects",component:g}),Object(d.jsx)(S.b,{path:"/about",component:p}),Object(d.jsx)(S.b,{path:"/contact",component:k}),Object(d.jsx)(S.b,{path:"*",component:O})]})]})};i(66);a.a.render(Object(d.jsx)(w,{}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.f0fb0bc4.chunk.js.map