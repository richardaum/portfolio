(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6346:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/logo.e9d09b3f.svg",height:38,width:137,blurWidth:0,blurHeight:0}},536:function(e,t,i){Promise.resolve().then(i.bind(i,3742)),Promise.resolve().then(i.t.bind(i,8173,23)),Promise.resolve().then(i.bind(i,6346)),Promise.resolve().then(i.bind(i,5722)),Promise.resolve().then(i.bind(i,7645)),Promise.resolve().then(i.bind(i,5992)),Promise.resolve().then(i.bind(i,3374)),Promise.resolve().then(i.bind(i,538)),Promise.resolve().then(i.bind(i,8646)),Promise.resolve().then(i.bind(i,8943))},7747:function(e,t,i){"use strict";i.d(t,{S:function(){return n}});let n=(0,i(9910).cn)(!1)},5722:function(e,t,i){"use strict";i.d(t,{DownloadCV:function(){return o}});var n=i(7437),r=i(5896),s=i(8087);function o(){let e=(0,s.useTranslations)("Home");return(0,n.jsxs)(n.Fragment,{children:[e("downloadCV")," ",(0,n.jsx)(r.Z,{})]})}},7645:function(e,t,i){"use strict";i.d(t,{Drawer:function(){return b}});var n=i(7437),r=i(7747),s=i(4025),o=i(2966),a=i(5963),l=i(9969),c=i(2187),d=i(7834),u=i(5127),h=i(4733),m=i(3742),f=i(2378),p=i(2265),x=i(3374),g=i(8943);function b(){let e=(0,p.useRef)(null),[t,i]=(0,m.useAtom)(r.S),[a,l]=(0,p.useState)(!1);(0,p.useEffect)(()=>{let e=window.matchMedia("(min-width: 1024px)");l(e.matches);let t=()=>l(e.matches);return e.addEventListener("change",t),()=>e.removeEventListener("change",t)},[]),(0,p.useEffect)(()=>{a&&i(!1)},[a,i]);let[c,d]=(0,f.A)({options:{overflow:{x:"hidden"},scrollbars:{autoHide:"move",autoHideDelay:400}},defer:!0});return(0,p.useEffect)(()=>{d&&e.current&&c(e.current)},[d,c]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{ref:e,id:"drawer",className:(0,s.W)("fixed right-0 top-0 z-30 size-full translate-x-full select-none overflow-auto bg-brownBeige-500 shadow-lg transition-all duration-300",t?"translate-x-0":"translate-x-full opacity-0"),children:(0,n.jsx)(x.NavPanel,{children:(0,n.jsx)("div",{className:"mx-auto",children:(0,n.jsx)(g.SelfPicture,{})})})}),(0,n.jsx)("button",{onClick:()=>{if(!t){var e;null===(e=d())||void 0===e||e.elements().viewport.scrollTo({top:0})}i(e=>!e)},className:(0,s.W)("focus-visible::bg-brownBeige-510","fixed bottom-4 right-4 z-50","flex size-14 items-center justify-center","rounded-xl bg-brownBeige-500 text-brownBeige-600","shadow-fab-default","hover:bg-brownBeige-510 hover:shadow-fab-hover","focus-visible:shadow-fab-hover","active:bg-brownBeige-520 active:shadow-fab-pressed","lg:hidden","transition-all duration-300",{"bg-greyTones-300 hover:bg-greyTones-300/80 focus-visible:bg-greyTones-300/80 active:bg-greyTones-300/50 rounded-[56px]":t}),children:t?(0,n.jsx)(o.Z,{className:"size-6"}):(0,n.jsx)(S,{})})]})}let w=[(0,n.jsx)(a.Z,{},"Linkedin"),(0,n.jsx)(l.Z,{},"Github"),(0,n.jsx)(c.Z,{},"Discord"),(0,n.jsx)(d.Z,{},"Steam")];function S(){let[e,t]=(0,p.useState)(0);return(0,p.useEffect)(()=>{let e=setInterval(()=>{t(e=>(e+1)%w.length)},2e3);return()=>clearInterval(e)},[]),(0,n.jsx)(u.M,{children:(0,n.jsx)(h.E.div,{className:"absolute",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},children:w[e]},e)})}},5992:function(e,t,i){"use strict";i.d(t,{IntroductionContent:function(){return r}});var n=i(7437);function r(){return(0,n.jsx)("div",{className:"flex items-center",children:(0,n.jsxs)("div",{className:"mx-auto flex flex-col gap-6 px-8",children:[(0,n.jsx)("span",{className:"font-display text-4xl text-greyTones-500",children:"Hello!"}),(0,n.jsxs)("h1",{className:"font-display text-5xl",children:["I'm ",(0,n.jsx)("span",{className:"text-redPink-500",children:"Richard"}),",",(0,n.jsx)("br",{}),"Frontend Engineer"]}),(0,n.jsx)("p",{className:"text-lg leading-8",children:"Thriving in fast-paced environments, I ensure high code quality and pixel-perfect accuracy as a fullstack developer focused on frontend, consistently hitting tight deadlines with passion and dedication."})]})})}},3374:function(e,t,i){"use strict";i.d(t,{NavPanel:function(){return p}});var n=i(7437),r=i.p+"static/media/resume.50c28b5b.pdf",s=i(3342),o=i(825),a=i(5963),l=i(9969),c=i(2187),d=i(7834),u=i(8087);function h(){let e=(0,u.useTranslations)("Home");return(0,n.jsx)("p",{className:"mb-4 mr-auto w-[calc(100%-96px)] whitespace-pre-wrap pl-6 text-xs lg:w-full lg:text-center",children:e.rich("copyright",{nowrap:e=>(0,n.jsx)("span",{className:"text-nowrap",children:e}),year:new Date().getFullYear()})})}var m=i(5722);let f=(0,o.C)(s.q);function p(e){let{children:t}=e,i=(0,u.useTranslations)("Home"),s=f.shiftTo("years").years.toFixed(0);return(0,n.jsxs)("div",{className:"flex h-full flex-col justify-between gap-8 text-brownBeige-600",children:[(0,n.jsx)("div",{className:"ml-auto",children:(0,n.jsx)("a",{className:"m-2 flex items-center gap-4 rounded-xl bg-darkColors-900/20 p-3 text-greyTones-300",href:r,rel:"noreferrer",target:"_blank",children:(0,n.jsx)(m.DownloadCV,{})})}),t,(0,n.jsxs)("div",{className:"relative z-10 m-4 flex flex-col items-center gap-8 rounded-xl bg-brownBeige-500/80 pt-4",children:[(0,n.jsxs)("div",{className:"w-[150px] border-b-4 border-current text-right font-display",children:[(0,n.jsx)("p",{className:"text-4xl",children:i("totalExperience",{years:s})}),(0,n.jsx)("p",{className:"text-lg",children:i("seniority")})]}),(0,n.jsxs)("div",{className:"flex gap-3",children:[(0,n.jsx)("a",{href:"https://linkedin.com/in/richardaum",rel:"noreferrer",target:"_blank",children:(0,n.jsx)(a.Z,{})}),(0,n.jsx)("a",{href:"https://github.com/richardaum",rel:"noreferrer",target:"_blank",children:(0,n.jsx)(l.Z,{})}),(0,n.jsx)("a",{href:"https://discordapp.com/users/richardaum",rel:"noreferrer",target:"_blank",children:(0,n.jsx)(c.Z,{})}),(0,n.jsx)("a",{href:"https://steamcommunity.com/id/richardaum",rel:"noreferrer",target:"_blank",children:(0,n.jsx)(d.Z,{})})]}),(0,n.jsx)(h,{})]})]})}},538:function(e,t,i){"use strict";i.d(t,{RecentWork:function(){return b}});var n=i(7437),r=i(3342),s=i(9450);function o(e){if(!e)throw Error("Duration is required");let t=e.shiftToAll(),i=t.years,n=t.months;return[i>0?"".concat(i," year").concat(1!==i?"s":""):null,n>0?"".concat(n," month").concat(1!==n?"s":""):null].filter(e=>null!=e).join(" and ")}var a=i(4025),l=i(825),c=i(3122),d=i(7360),u=i(8087),h=i(2265),m=i(3070),f=i(8733),p=i(4733);let x=e=>{let{children:t,enabled:i,amount:r=.5}=e,s=(0,h.useRef)(null),o=(0,f.Y)(s,{once:!0,amount:r});return(0,n.jsx)(p.E.div,{ref:s,initial:{opacity:0,y:100},animate:{opacity:o&&i?1:0,y:o&&i?0:100},transition:{duration:.5},children:t})},g=(0,l.g)(r.q);function b(){let e=(0,u.useTranslations)("Home"),t=(0,h.useRef)(null),[i,l]=(0,h.useState)(!1),[f,p]=(0,h.useState)(!0);(0,h.useEffect)(()=>{let e=()=>{i||l(!0)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[i]),(0,h.useEffect)(()=>{p(0===window.scrollY)},[]);let b=!f||i;return(0,n.jsx)("div",{ref:t,children:(0,n.jsx)(x,{amount:"some",enabled:b,children:(0,n.jsxs)("section",{className:"border-l-4 border-greyTones-500 pl-4",children:[(0,n.jsx)("h2",{className:"mb-6 font-display text-lg text-greyTones-600",children:e("recentWork.title")}),(0,n.jsx)("section",{className:"flex flex-col gap-8 pb-8",children:r.q.map((t,i)=>(0,n.jsx)(x,{enabled:b,children:(0,n.jsxs)("article",{className:"flex flex-col gap-3",children:[(0,n.jsxs)("div",{className:"flex flex-col",children:[(0,n.jsxs)("h3",{className:"flex items-center font-semibold",children:[(0,n.jsx)("div",{className:(0,a.W)("-ml-6 size-3 rounded-[4px]","current"!==t.duration.to?"bg-redPink-500":"bg-green-600")}),(0,n.jsxs)("span",{className:"flex gap-1 pl-3",children:[e("recentWork.".concat(t.id,".title")),t.link&&(0,n.jsx)("a",{href:t.link,target:"_blank",rel:"noreferrer",children:(0,n.jsx)(c.Z,{className:"text-redPink-500"})})]})]}),(0,n.jsx)("span",{className:"text-sm text-greyTones-600",children:e("workedFor",{duration:o(function(e){let{from:t,to:i}=e,n=s.ou.fromISO(i),r=s.Xp.fromDateTimes(s.ou.fromISO(t),n.isValid?n:s.ou.now());return s.nL.fromMillis(r.length()).shiftToAll()}(t.duration))})})]}),(0,n.jsx)("p",{children:e.rich("recentWork.".concat(t.id,".description"),{a:e=>(0,n.jsxs)("a",{href:t.linkedin,target:"_blank",rel:"noreferrer",className:"font-semibold",children:[e,(0,n.jsx)(d.Z,{className:"inline size-4 align-text-top"})]})})}),(0,n.jsx)("p",{className:"flex flex-wrap gap-1 font-light",children:t.techStack.map((i,r)=>{var s,a;let l=o(null===(s=g.get(i))||void 0===s?void 0:s.duration),c=null===(a=g.get(i))||void 0===a?void 0:a.projectsCount;return(0,n.jsxs)("span",{children:[(0,n.jsx)("button",{className:"underline decoration-dashed decoration-1 underline-offset-4",children:(0,n.jsx)(m.Tooltip,{title:"".concat(e("techTooltip",{duration:l,projects:c,tech:i})),arrow:!0,position:"bottom",children:i})}),r<t.techStack.length-1&&", "]},r)})})]})},i))})]})})})}},8646:function(e,t,i){"use strict";i.d(t,{ScrollHint:function(){return l}});var n=i(7437),r=i(4870),s=i(4733),o=i(2265),a=i(3070);function l(){let[e,t]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{let e=()=>{t(0===window.scrollY)};return e(),window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),e&&(0,n.jsx)("div",{className:"fixed bottom-16 left-1/2 -translate-x-1/2",children:(0,n.jsx)(s.E.div,{animate:{y:[0,-10,0]},transition:{repeat:1/0,duration:1,ease:"easeInOut"},children:(0,n.jsx)(a.Tooltip,{title:"Swipe up / Scroll down",position:"top",children:(0,n.jsx)("div",{className:"z-20 grid size-12 place-content-center rounded-full bg-greyTones-400 text-brownBeige-600 shadow-fab-default",children:(0,n.jsx)(r.Z,{className:"size-8"})})})})})}},8943:function(e,t,i){"use strict";i.d(t,{SelfPicture:function(){return l}});var n=i(7437),r={src:"/_next/static/media/blob.d4a5afa9.svg",height:400,width:409,blurWidth:0,blurHeight:0},s={src:"/_next/static/media/me.06c7bd38.webp",height:3613,width:2710,blurDataURL:"data:image/webp;base64,UklGRloAAABXRUJQVlA4IE4AAADQAQCdASoGAAgAAkA4JbACdAEPA6ViOAD+BAn1wBCRLI9D8xE02QRntBxE94+c2my+sIqY8Sze3OXafzY/zQCX+TfsBYK6xXeCKQvZgAA=",blurWidth:6,blurHeight:8},o=i(390),a=i.n(o);function l(){return(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)("div",{className:"relative z-20 h-[433px] w-[283px]",children:(0,n.jsx)(a(),{src:s,alt:"Richard's photo",fill:!0,quality:100,sizes:"283px",className:"z-10 rounded-full object-cover object-left"})}),(0,n.jsx)("div",{className:"absolute top-0 z-10",children:(0,n.jsx)("div",{className:"relative h-[400px] w-[409px]",children:(0,n.jsx)(a(),{src:r,alt:"Blob",className:"translate-y-[-20px] object-contain",fill:!0,quality:100,sizes:"409px"})})})]})}},3342:function(e,t,i){"use strict";i.d(t,{q:function(){return n}});let n=[{id:"securityLandscape",duration:{from:"2024-06-26",to:"current"},techStack:["React","Typescript","Next.js","Bun","Tailwind CSS","Git"]},{id:"myPortfolio",duration:{from:"2024-05-24",to:"2024-07-25"},link:"https://richardaum.github.io",techStack:["React","Typescript","Next.js","Bun","Tailwind CSS","Git","Github Pages","Github Actions"]},{id:"arctouch",duration:{from:"2023-12-01",to:"2024-05-14"},link:"https://arctouch.com",linkedin:"https://www.linkedin.com/company/arctouch",techStack:["React","Next.js","Typescript","Jest","Testing Library","ESLint","SASS","HTML","Contentful CMS","Design System","Responsive design","Accessibility","Git","Technical Leadership"]},{id:"pomodoro",duration:{from:"2022-05-23",to:"2023-05-23"},link:"https://www.ifood.design",linkedin:"https://www.linkedin.com/company/ifood",techStack:["React","Typescript","Design System","Git","Node.js","Script automation","Yarn"]},{id:"catalog",duration:{from:"2021-12-11",to:"2023-05-22"},link:"https://portal.ifood.com.br",linkedin:"https://www.linkedin.com/company/ifood",techStack:["React","Typescript","Javascript","HTML","CSS","SASS","Styled Components","Jest","Testing Library","ESLint","Micro-frontends","Design System","Responsive design","Git","Yarn"]},{id:"dailyPick",duration:{from:"2021-12-11",to:"2023-05-23"},link:"https://github.com/richardaum/daily-pick",linkedin:"https://www.linkedin.com/company/ifood",techStack:["Node.js","Typescript","Git","Bolt for Slack","SQLite"]},{id:"digitalCatalog",duration:{from:"2021-12-11",to:"2022-12-11"},link:"https://portal.ifood.com.br",linkedin:"https://www.linkedin.com/company/ifood",techStack:["React","Next.js","Typescript","Javascript","HTML","CSS","SASS","Styled Components","Node.js","Jest","Testing Library","ESLint","Micro-frontends","Design System","Responsive design","Git","React Query","Progressive Web Apps (PWA)"]},{id:"chains",duration:{from:"2023-05-23",to:"2023-12-01"},link:"https://portal.ifood.com.br",linkedin:"https://www.linkedin.com/company/ifood",techStack:["Javascript","ESLint","React","Git","Typescript","CSS","HTML","SASS","Testing Library","Design System","Jest","Micro-frontends","Styled Components","Responsive design","Vite","Script automation"]},{id:"financial",link:"https://portal.ifood.com.br",linkedin:"https://www.linkedin.com/company/ifood",duration:{from:"2019-06-10",to:"2021-12-10"},techStack:["React","Typescript","Javascript","HTML","CSS","SASS","Styled Components","Node.js","Jest","Testing Library","ESLint","Micro-frontends","Design System","Responsive design","Git","Redux","Webpack","Docker","React Query","Cypress","Mocha","Java","Enzyme","Yarn","Fastify","BFF","Kotlin","Babel","PostgreSQL"]},{id:"foodDelivery",duration:{from:"2019-06-30",to:"2020-06-30"},techStack:["React","Node.js","Angular.js","Git","WebSockets","MySQL","Digital Ocean","Dokku"]},{id:"symphonyChat",link:"https://symphony.com",linkedin:"https://www.linkedin.com/company/daitan-group",duration:{from:"2017-12-15",to:"2019-06-07"},techStack:["React","Redux","SASS","CSS","Git"]},{id:"itriadWhatsAppKaiOS",linkedin:"https://www.linkedin.com/company/instituto-triad-systems",duration:{from:"2017-05-20",to:"2017-12-13"},techStack:["React","Git","CSS"]},{id:"alcatelStockControl",linkedin:"https://www.linkedin.com/company/instituto-triad-systems",duration:{from:"2015-10-01",to:"2016-03-04"},techStack:["Angular.js","CSS","Git"]},{id:"stoneFinancialConcialitionCronjob",linkedin:"https://www.linkedin.com/company/axm-consultoria-e-assessoria",duration:{from:"2016-09-16",to:"2016-10-21"},techStack:["Node.js","Git"]},{id:"mealCardBackoffice",linkedin:"https://www.linkedin.com/company/axm-consultoria-e-assessoria",duration:{from:"2016-03-05",to:"2016-09-09"},techStack:["Angular.js","Node.js","Git","Express.js","CSS"]},{id:"rfidAccessControl",linkedin:"https://www.linkedin.com/company/axm-consultoria-e-assessoria",duration:{from:"2015-10-01",to:"2016-03-04"},techStack:["Java","Git"]}]},4025:function(e,t,i){"use strict";i.d(t,{W:function(){return s}});var n=i(4839),r=i(6164);function s(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return(0,r.m6)((0,n.W)(t))}},825:function(e,t,i){"use strict";i.d(t,{C:function(){return s},g:function(){return r}});var n=i(9450);let r=e=>{let t=new Map,i=e.reduce((e,t)=>(t.techStack.forEach(i=>{e[i]||(e[i]=[]);let r=n.ou.fromISO(t.duration.to),s=n.Xp.fromDateTimes(n.ou.fromISO(t.duration.from),r.isValid?r:n.ou.now());e[i].push(s)}),e),{});return Object.keys(i).forEach(e=>{let r=i[e],s=n.Xp.merge(r),o=n.nL.fromMillis(s.reduce((e,t)=>e+t.length(),0)).shiftToAll();t.set(e,{duration:o,projectsCount:r.length})}),t},s=e=>{let t=e.map(e=>{let t=n.ou.fromISO(e.duration.to);return n.Xp.fromDateTimes(n.ou.fromISO(e.duration.from),t.isValid?t:n.ou.now())}),i=n.Xp.merge(t);return n.nL.fromMillis(i.reduce((e,t)=>e+t.length(),0)).shiftToAll()}}},function(e){e.O(0,[924,87,971,23,744],function(){return e(e.s=536)}),_N_E=e.O()}]);