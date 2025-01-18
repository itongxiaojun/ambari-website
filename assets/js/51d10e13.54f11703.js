"use strict";(self.webpackChunkambari_website=self.webpackChunkambari_website||[]).push([[4876],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),u=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,b=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return r?o.createElement(b,a(a({ref:t},c),{},{components:r})):o.createElement(b,a({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8514:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var o=r(7462),n=(r(7294),r(3905));const i={},a="Code Review Guidelines",s={unversionedId:"ambari-dev/code-review-guidelines",id:"version-2.7.6/ambari-dev/code-review-guidelines",title:"Code Review Guidelines",description:"Please refer to How to Contribute for instructions how to submit a code review to Github.",source:"@site/versioned_docs/version-2.7.6/ambari-dev/code-review-guidelines.md",sourceDirName:"ambari-dev",slug:"/ambari-dev/code-review-guidelines",permalink:"/docs/ambari-dev/code-review-guidelines",draft:!1,editUrl:"https://github.com/vivostar/vivostar.github.io/tree/master/versioned_docs/version-2.7.6/ambari-dev/code-review-guidelines.md",tags:[],version:"2.7.6",frontMatter:{},sidebar:"ambariSidebar",previous:{title:"How to Contribute",permalink:"/docs/ambari-dev/how-to-contribute"},next:{title:"Releasing Ambari",permalink:"/docs/ambari-dev/releasing-ambari"}},l={},u=[],c={toc:u};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"code-review-guidelines"},"Code Review Guidelines"),(0,n.kt)("p",null,"Please refer to ",(0,n.kt)("a",{parentName:"p",href:"/docs/ambari-dev/how-to-contribute"},"How to Contribute")," for instructions how to submit a code review to Github."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"What makes a good code review?")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Authors should annotate source code before the review. This makes it easier for devs reviewing your code and may even help you spot bugs before they do."),(0,n.kt)("li",{parentName:"ul"},"Send small code-reviews if possible. Reviewing more than 400 lines per hour diminishes our ability to find defects."),(0,n.kt)("li",{parentName:"ul"},"Reviewing code for more than one hour also reduces our ability to find bugs."),(0,n.kt)("li",{parentName:"ul"},"If possible, try to break up large reviews into separate but functional stages. If you need to temporarily comment out unit tests, do so. Sending gigantic patches means your review will take longer since reviewers need to block out more time to go through it, and you may spend more time revving iterations and rebasing.")),(0,n.kt)("p",null,"We have a global community of committers, so please be mindful that you should ",(0,n.kt)("strong",{parentName:"p"},"wait at least 24 hours")," before merging your pull request even though you may already have the necessary +1."),(0,n.kt)("p",null,"This encourages others to take an interest in your pull request and helps us find more bugs (it's ok to slow down in order to speed up)."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Always include")," ",(0,n.kt)("strong",{parentName:"p"},"at least two committers that are familiar with that code area"),"."),(0,n.kt)("p",null,"If you want to subscribe to code reviews for a particular area, ",(0,n.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/AMBARI/Code+Review+Guidelines"},"feel free to edit this section"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(6328).Z,title:"Reviewers",width:"742",height:"773"})))}d.isMDXComponent=!0},6328:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/reviewers-e4736384b07e9813bbca1b1091116e5a.png"}}]);