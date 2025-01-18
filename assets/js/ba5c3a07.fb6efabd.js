"use strict";(self.webpackChunkambari_website=self.webpackChunkambari_website||[]).push([[4203],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=a,v=m["".concat(c,".").concat(u)]||m[u]||p[u]||i;return n?r.createElement(v,o(o({ref:t},d),{},{components:n})):r.createElement(v,o({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3046:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={},o="Stacks and Services",s={unversionedId:"ambari-design/stack-and-services/index",id:"ambari-design/stack-and-services/index",title:"Stacks and Services",description:"Introduction",source:"@site/docs/ambari-design/stack-and-services/index.md",sourceDirName:"ambari-design/stack-and-services",slug:"/ambari-design/stack-and-services/",permalink:"/docs/next/ambari-design/stack-and-services/",draft:!1,editUrl:"https://github.com/vivostar/vivostar.github.io/tree/master/docs/ambari-design/stack-and-services/index.md",tags:[],version:"current",frontMatter:{},sidebar:"ambariSidebar",previous:{title:"Quick Links",permalink:"/docs/next/ambari-design/quick-links"},next:{title:"Overview",permalink:"/docs/next/ambari-design/stack-and-services/overview"}},c={},l=[],d={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"stacks-and-services"},"Stacks and Services"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Introduction")),(0,a.kt)("p",null,"Ambari supports the concept of Stacks and associated Services in a Stack Definition. By leveraging the Stack Definition, Ambari has a consistent and defined interface to install, manage and monitor a set of Services and provides extensibility model for new Stacks + Services to be introduced."),(0,a.kt)("p",null,"From Ambari 2.4, there is also support for the concept of Extensions and its associated custom Services in an Extension Definition. "),(0,a.kt)("p",null,"Terminology"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Term"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Stack"),(0,a.kt)("td",{parentName:"tr",align:null},'Defines a set of Services and where to obtain the software packages for those Services. A Stack can have one or more versions, and each version can be active/inactive. For example, Stack = "HDP-1.3.3".')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Extension"),(0,a.kt)("td",{parentName:"tr",align:null},"Defines a set of custom Services which can be added to a stack version.  An Extension can have one or more versions.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Service"),(0,a.kt)("td",{parentName:"tr",align:null},'Defines the Components (MASTER, SLAVE, CLIENT) that make up the Service. For example, Service = "HDFS"')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Component"),(0,a.kt)("td",{parentName:"tr",align:null},'The individual Components that adhere to a certain defined lifecycle (start, stop, install, etc). For example, Service = "HDFS" has Components = "NameNode (MASTER)", "Secondary NameNode (MASTER)", "DataNode (SLAVE)" and "HDFS Client (CLIENT)"')))))}p.isMDXComponent=!0}}]);