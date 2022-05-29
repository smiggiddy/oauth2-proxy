"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6760],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,m=d["".concat(p,".").concat(f)]||d[f]||s[f]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9603:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={id:"installation",title:"Installation",slug:"/"},p=void 0,u={unversionedId:"installation",id:"version-7.0.x/installation",title:"Installation",description:"1.  Choose how to deploy:",source:"@site/versioned_docs/version-7.0.x/installation.md",sourceDirName:".",slug:"/",permalink:"/oauth2-proxy/docs/7.0.x/",editUrl:"https://github.com/oauth2-proxy/oauth2-proxy/edit/master/docs/versioned_docs/version-7.0.x/installation.md",tags:[],version:"7.0.x",frontMatter:{id:"installation",title:"Installation",slug:"/"},sidebar:"version-7.0.x/docs",next:{title:"Behaviour",permalink:"/oauth2-proxy/docs/7.0.x/behaviour"}},c=[],s={toc:c};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Choose how to deploy:"),(0,a.kt)("p",{parentName:"li"},"a. Download ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/oauth2-proxy/oauth2-proxy/releases"},"Prebuilt Binary")," (current release is ",(0,a.kt)("inlineCode",{parentName:"p"},"v7.0.1"),")"),(0,a.kt)("p",{parentName:"li"},"b. Build with ",(0,a.kt)("inlineCode",{parentName:"p"},"$ go get github.com/oauth2-proxy/oauth2-proxy/v7")," which will put the binary in ",(0,a.kt)("inlineCode",{parentName:"p"},"$GOPATH/bin")),(0,a.kt)("p",{parentName:"li"},"c. Using the prebuilt docker image ",(0,a.kt)("a",{parentName:"p",href:"https://quay.io/oauth2-proxy/oauth2-proxy"},"quay.io/oauth2-proxy/oauth2-proxy")," (AMD64, ARMv6 and ARM64 tags available)"))),(0,a.kt)("p",null,"Prebuilt binaries can be validated by extracting the file and verifying it against the ",(0,a.kt)("inlineCode",{parentName:"p"},"sha256sum.txt")," checksum file provided for each release starting with version ",(0,a.kt)("inlineCode",{parentName:"p"},"v3.0.0"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ sha256sum -c sha256sum.txt 2>&1 | grep OK\noauth2-proxy-x.y.z.linux-amd64: OK\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/oauth2-proxy/docs/7.0.x/configuration/oauth_provider"},"Select a Provider and Register an OAuth Application with a Provider")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/oauth2-proxy/docs/7.0.x/configuration/overview"},"Configure OAuth2 Proxy using config file, command line options, or environment variables")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/oauth2-proxy/docs/7.0.x/configuration/tls"},"Configure SSL or Deploy behind a SSL endpoint")," (example provided for Nginx)")))}d.isMDXComponent=!0}}]);