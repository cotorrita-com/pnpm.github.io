"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5130],{9613:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var r=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,p=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=l(t),f=a,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||p;return t?r.createElement(d,o(o({ref:n},s),{},{components:t})):r.createElement(d,o({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var p=t.length,o=new Array(p);o[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<p;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2949:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>i,contentTitle:()=>c,metadata:()=>l,toc:()=>s,default:()=>m});var r=t(5900),a=t(4750),p=(t(9496),t(9613)),o=["components"],i={id:"pnpx-cli",title:"pnpx CLI"},c=void 0,l={unversionedId:"pnpx-cli",id:"version-5.x/pnpx-cli",isDocsHomePage:!1,title:"pnpx CLI",description:"For new users",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-5.x/pnpx-cli.md",sourceDirName:".",slug:"/pnpx-cli",permalink:"/es/5.x/pnpx-cli",editUrl:"https://crowdin.com/project/pnpm/es",tags:[],version:"5.x",frontMatter:{id:"pnpx-cli",title:"pnpx CLI"},sidebar:"version-5.x/docs",previous:{title:"pnpm CLI",permalink:"/es/5.x/pnpm-cli"},next:{title:"Configuring",permalink:"/es/5.x/configuring"}},s=[{value:"For new users",id:"for-new-users",children:[],level:2},{value:"For npm users",id:"for-npm-users",children:[],level:2}],u={toc:s};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,p.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"for-new-users"},"For new users"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"pnpx")," (PNPm eXecute) is a command line tool that fetches a package from the registry without installing it as a dependency, hotloads it, and runs whatever default command binary it exposes."),(0,p.kt)("p",null,"For example, to use ",(0,p.kt)("inlineCode",{parentName:"p"},"create-react-app")," anywhere to bootstrap a react app without needing to install it under another project, you can run:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"pnpx create-react-app my-project\n")),(0,p.kt)("p",null,"This will fetch ",(0,p.kt)("inlineCode",{parentName:"p"},"create-react-app")," from the registry and run it with the given arguments. For more information, you may want to look at ",(0,p.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/npx"},"npx")," from npm, as it offers the same interface, except it uses ",(0,p.kt)("inlineCode",{parentName:"p"},"npm")," instead of ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm")," under the hood."),(0,p.kt)("h2",{id:"for-npm-users"},"For npm users"),(0,p.kt)("p",null,"npm has a great package runner called ",(0,p.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/npx"},"npx"),". pnpm offers the same tool via the ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpx")," command. The only difference is that ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpx")," uses ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm")," for installing packages."))}m.isMDXComponent=!0}}]);