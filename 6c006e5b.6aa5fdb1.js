(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),u=(n(0),n(91)),o={title:"Vector Function API",sidebar_label:"Vector Functions"},l={unversionedId:"api/vector",id:"api/vector",isDocsHomePage:!1,title:"Vector Function API",description:'Mapping functions that given a collection of items produce an array of values (a "vector") equal in length to the collection. Typically used with mutateWithSummary.',source:"@site/docs/api/vector.md",slug:"/api/vector",permalink:"/tidy/docs/api/vector",editUrl:"https://github.com/pbeshai/tidy/docs/api/vector.md",version:"current",lastUpdatedBy:"Peter Beshai",lastUpdatedAt:1612282937,sidebar_label:"Vector Functions",sidebar:"docs",previous:{title:"Summarizer API",permalink:"/tidy/docs/api/summary"},next:{title:"Item Function API",permalink:"/tidy/docs/api/item"}},i=[{value:"cumsum",id:"cumsum",children:[{value:"Parameters",id:"parameters",children:[]},{value:"Usage",id:"usage",children:[]}]},{value:"roll",id:"roll",children:[{value:"Parameters",id:"parameters-1",children:[]},{value:"Usage",id:"usage-1",children:[]}]}],c={toc:i};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(u.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(u.b)("p",null,'Mapping functions that given a collection of items produce an array of values (a "vector") equal in length to the collection. Typically used with ',Object(u.b)("a",Object(a.a)({parentName:"p"},{href:"/tidy/docs/api/tidy#mutatewithsummary"}),Object(u.b)("strong",{parentName:"a"},"mutateWithSummary")),"."),Object(u.b)("h2",{id:"cumsum"},"cumsum"),Object(u.b)("p",null,"Returns a function that computes a cumulative sum as per ",Object(u.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/d3/d3-array#cumsum"}),"d3-array::cumsum"),". "),Object(u.b)("h3",{id:"parameters"},"Parameters"),Object(u.b)("h4",{id:"key"},Object(u.b)("inlineCode",{parentName:"h4"},"key")),Object(u.b)("pre",null,Object(u.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"| string /* key of object */\n| (item: object) => number | null | undefined\n")),Object(u.b)("p",null,"Either the key to compute the value over or an accessor function that maps a given item to the value to compute over."),Object(u.b)("h3",{id:"usage"},"Usage"),Object(u.b)("pre",null,Object(u.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const data = [\n  { str: 'foo', value: 3, value2: 1 },\n  { str: 'bar', value: 1, value2: 3 },\n  { str: 'bar', value: null, value2: undefined },\n  { str: 'bar', value: 5, value2: 4 },\n];\n\ntidy(\n  data,\n  mutateWithSummary({\n    cumsum1: cumsum('value'),\n    cumsum2: cumsum((d) => (d.value == null ? d.value : d.value2 * 2)),\n  })\n);\n// output:\n[\n  { str: 'foo', value: 3,    value2: 1,         cumsum1: 3, cumsum2: 2 },\n  { str: 'bar', value: 1,    value2: 3,         cumsum1: 4, cumsum2: 8 },\n  { str: 'bar', value: null, value2: undefined, cumsum1: 4, cumsum2: 8 },\n  { str: 'bar', value: 5,    value2: 4,         cumsum1: 9, cumsum2: 16 },\n]\n")),Object(u.b)("hr",null),Object(u.b)("h2",{id:"roll"},"roll"),Object(u.b)("p",null,"Computes values over a rolling window. Typically used for calculating moving averages or running sums."),Object(u.b)("h3",{id:"parameters-1"},"Parameters"),Object(u.b)("h4",{id:"width"},Object(u.b)("inlineCode",{parentName:"h4"},"width")),Object(u.b)("pre",null,Object(u.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"number\n")),Object(u.b)("p",null,"The size of the window."),Object(u.b)("h4",{id:"rollfn"},Object(u.b)("inlineCode",{parentName:"h4"},"rollFn")),Object(u.b)("pre",null,Object(u.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"(itemsInWindow: object[], endIndex: number) => any\n")),Object(u.b)("p",null,"The function used to apply to the window, reduces to a single value for the window. Given the subset of items that are within the window as well as the ending index in the original array."),Object(u.b)("h4",{id:"options"},Object(u.b)("inlineCode",{parentName:"h4"},"options")),Object(u.b)("pre",null,Object(u.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"{\n  partial?: boolean\n}\n")),Object(u.b)("ul",null,Object(u.b)("li",{parentName:"ul"},Object(u.b)("inlineCode",{parentName:"li"},"partial = false")," If true, will compute the value even if the size of the window is less than the specified width. Otherwise, the rolled up value will be undefined.")),Object(u.b)("h3",{id:"usage-1"},"Usage"),Object(u.b)("pre",null,Object(u.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const data = [\n  { str: 'foo', value: 3 },\n  { str: 'foo', value: 1 },\n  { str: 'bar', value: 3 },\n  { str: 'bar', value: 1 },\n  { str: 'bar', value: 7 },\n];\n\ntidy(data, mutateWithSummary({\n  movingAvg: roll(3, mean('value'), { partial: true }),\n}))\n// output:\n[\n  { str: 'foo', value: 3, movingAvg: 3 / 1 }, // partial\n  { str: 'foo', value: 1, movingAvg: 4 / 2 }, // partial\n  { str: 'bar', value: 3, movingAvg: 7 / 3 },\n  { str: 'bar', value: 1, movingAvg: 5 / 3 },\n  { str: 'bar', value: 7, movingAvg: 11 / 3 },\n]\n")),Object(u.b)("hr",null))}s.isMDXComponent=!0},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},u=Object.keys(e);for(a=0;a<u.length;a++)n=u[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(a=0;a<u.length;a++)n=u[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,u=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),p=a,d=m["".concat(o,".").concat(p)]||m[p]||b[p]||u;return n?r.a.createElement(d,l(l({ref:t},c),{},{components:n})):r.a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var u=n.length,o=new Array(u);o[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<u;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);