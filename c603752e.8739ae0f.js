(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),i=(n(0),n(91)),o={title:"Item Function API",sidebar_label:"Item Functions"},l={unversionedId:"api/item",id:"api/item",isDocsHomePage:!1,title:"Item Function API",description:"Mapping functions that map from a single item (or row) to a value. Typically used with mutate.",source:"@site/docs/api/item.md",slug:"/api/item",permalink:"/tidy/docs/api/item",editUrl:"https://github.com/pbeshai/tidy/docs/api/item.md",version:"current",lastUpdatedBy:"Peter Beshai",lastUpdatedAt:1612282937,sidebar_label:"Item Functions",sidebar:"docs",previous:{title:"Vector Function API",permalink:"/tidy/docs/api/vector"},next:{title:"Sequence API",permalink:"/tidy/docs/api/sequences"}},c=[{value:"rate",id:"rate",children:[{value:"Parameters",id:"parameters",children:[]},{value:"Usage",id:"usage",children:[]}]}],u={toc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Mapping functions that map from a single item (or row) to a value. Typically used with ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/tidy/docs/api/tidy#mutate"}),Object(i.b)("strong",{parentName:"a"},"mutate")),"."),Object(i.b)("h2",{id:"rate"},"rate"),Object(i.b)("p",null,"Returns a function that computes a rate (numerator / denominator), setting the value to 0 if denominator = 0 and numerator = 0. If denominator or numerator are nully, the result is undefined."),Object(i.b)("h3",{id:"parameters"},"Parameters"),Object(i.b)("h4",{id:"numerator"},Object(i.b)("inlineCode",{parentName:"h4"},"numerator")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"| string /* key of object */\n| (item: object) => number\n")),Object(i.b)("p",null,"Either a key of the object or an accessor function that returns a number given the object. This will be used as the numerator when computing the rate."),Object(i.b)("h4",{id:"denominator"},Object(i.b)("inlineCode",{parentName:"h4"},"denominator")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"| string /* key of object */\n| (item: object) => number\n")),Object(i.b)("p",null,"Either a key of the object or an accessor function that returns a number given the object. This will be used as the denominator when computing the rate."),Object(i.b)("h4",{id:"options"},Object(i.b)("inlineCode",{parentName:"h4"},"options?")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"{ \n  predicate?: (item: object) => boolean\n  allowDivideByZero?: boolean\n}   \n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"allowDivideByZero = false"),": If true, evaluates division when denominator is 0 (typically resulting in Infinity), otherwise rates with 0 denominators are ",Object(i.b)("inlineCode",{parentName:"li"},"undefined"),". "),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"predicate"),": Optional parameter that when provided will return undefined as the value of the rate when the predicate function returns false. This is typically used for only computing rates when there is sufficient sample size (i.e., checking if the denominator is large enough). For example:")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"rate('numerator', 'denominator', { predicate: d => d.denominator > 1000 })\n")),Object(i.b)("h3",{id:"usage"},"Usage"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const data = [\n  { str: 'foo', value: 3, value2: 0 },\n  { str: 'foo', value: 1, value2: 1 },\n  { str: 'bar', value: 3, value2: null },\n  { str: 'bar', value: null, value2: 4 },\n  { str: 'bar', value: 0, value2: 0 },\n  { str: 'bar', value: 7, value2: 35 },\n];\n\ntidy(\n  data,\n  mutate({\n    rate1: rate(\n      (d) => d.value * 100,\n      (d) => d.value2\n    ),\n    rate2: rate('value', 'value2'),\n  })\n)\n// output:\n[\n  { str: 'foo', value: 3, value2: 0, rate1: Infinity, rate2: Infinity },\n  { str: 'foo', value: 1, value2: 1, rate1: 100, rate2: 1 },\n  { str: 'bar', value: 3, value2: null, rate1: undefined, rate2: undefined, },\n  { str: 'bar', value: null, value2: 4, rate1: 0, rate2: undefined },\n  { str: 'bar', value: 0, value2: 0, rate1: 0, rate2: 0 },\n  { str: 'bar', value: 7, value2: 35, rate1: 20, rate2: 0.2 },\n]\n")),Object(i.b)("hr",null))}s.isMDXComponent=!0},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),s=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=s(n),d=a,m=b["".concat(o,".").concat(d)]||b[d]||p[d]||i;return n?r.a.createElement(m,l(l({ref:t},u),{},{components:n})):r.a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);