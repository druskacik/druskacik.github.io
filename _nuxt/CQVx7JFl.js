const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./B85Jkt0y.js","./BXbvJVRX.js","./entry.sE6AckD6.css"])))=>i.map(i=>d[i]);
import{B as N,D as m,E as $,G as O,H as P,I as T,J as B,i as I,K as S,L as R,v as j,g as L,M,N as U,O as W,n as F}from"./BXbvJVRX.js";const q=n=>n==="defer"||n===!1;function G(...n){var E;const r=typeof n[n.length-1]=="string"?n.pop():void 0;typeof n[0]!="string"&&n.unshift(r);let[t,s,a={}]=n;if(typeof t!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof s!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const e=N(),i=s,u=()=>m.value,f=()=>e.isHydrating?e.payload.data[t]:e.static.data[t];a.server=a.server??!0,a.default=a.default??u,a.getCachedData=a.getCachedData??f,a.lazy=a.lazy??!1,a.immediate=a.immediate??!0,a.deep=a.deep??m.deep,a.dedupe=a.dedupe??"cancel";const h=a.getCachedData(t,e),v=h!=null;if(!e._asyncData[t]||!a.immediate){(E=e.payload._errors)[t]??(E[t]=m.errorValue);const l=a.deep?$:O;e._asyncData[t]={data:l(v?h:a.default()),pending:$(!v),error:P(e.payload._errors,t),status:$("idle"),_default:a.default}}const o={...e._asyncData[t]};delete o._default,o.refresh=o.execute=(l={})=>{if(e._asyncDataPromises[t]){if(q(l.dedupe??a.dedupe))return e._asyncDataPromises[t];e._asyncDataPromises[t].cancelled=!0}if(l._initial||e.isHydrating&&l._initial!==!1){const d=l._initial?h:a.getCachedData(t,e);if(d!=null)return Promise.resolve(d)}o.pending.value=!0,o.status.value="pending";const y=new Promise((d,c)=>{try{d(i(e))}catch(p){c(p)}}).then(async d=>{if(y.cancelled)return e._asyncDataPromises[t];let c=d;a.transform&&(c=await a.transform(d)),a.pick&&(c=H(c,a.pick)),e.payload.data[t]=c,o.data.value=c,o.error.value=m.errorValue,o.status.value="success"}).catch(d=>{if(y.cancelled)return e._asyncDataPromises[t];o.error.value=R(d),o.data.value=j(a.default()),o.status.value="error"}).finally(()=>{y.cancelled||(o.pending.value=!1,delete e._asyncDataPromises[t])});return e._asyncDataPromises[t]=y,e._asyncDataPromises[t]},o.clear=()=>V(e,t);const w=()=>o.refresh({_initial:!0}),b=a.server!==!1&&e.payload.serverRendered;{const l=L();if(l&&!l._nuxtOnBeforeMountCbs){l._nuxtOnBeforeMountCbs=[];const c=l._nuxtOnBeforeMountCbs;T(()=>{c.forEach(p=>{p()}),c.splice(0,c.length)}),B(()=>c.splice(0,c.length))}b&&e.isHydrating&&(o.error.value||h!=null)?(o.pending.value=!1,o.status.value=o.error.value?"error":"success"):l&&(e.payload.serverRendered&&e.isHydrating||a.lazy)&&a.immediate?l._nuxtOnBeforeMountCbs.push(w):a.immediate&&w();const y=M();if(a.watch){const c=I(a.watch,()=>o.refresh());y&&S(c)}const d=e.hook("app:data:refresh",async c=>{(!c||c.includes(t))&&await o.refresh()});y&&S(d)}const C=Promise.resolve(e._asyncDataPromises[t]).then(()=>o);return Object.assign(C,o),C}function V(n,r){r in n.payload.data&&(n.payload.data[r]=void 0),r in n.payload._errors&&(n.payload._errors[r]=m.errorValue),n._asyncData[r]&&(n._asyncData[r].data.value=void 0,n._asyncData[r].error.value=m.errorValue,n._asyncData[r].pending.value=!1,n._asyncData[r].status.value="idle"),r in n._asyncDataPromises&&(n._asyncDataPromises[r]&&(n._asyncDataPromises[r].cancelled=!0),n._asyncDataPromises[r]=void 0)}function H(n,r){const t={};for(const s of r)t[s]=n[s];return t}const J={content:"v3.2.0--C8fJUJcFMQ"},Q={content:"_content_content",info:"_content_info"},Y={content:{type:"page",fields:{id:"string",stem:"string",extension:"string",meta:"json",path:"string",title:"string",description:"string",seo:"json",body:"json",navigation:"json",date:"string"}},info:{type:"data",fields:{}}},D=(n,r)=>{const t=n._conditions;return t.length>0?`(${t.join(` ${r} `)})`:""},_=n=>{const r=[],t={_conditions:r,where(s,a,e){let i;switch(a.toUpperCase()){case"IN":case"NOT IN":if(Array.isArray(e)){const u=e.map(f=>g(f)).join(", ");i=`"${String(s)}" ${a.toUpperCase()} (${u})`}else throw new TypeError(`Value for ${a} must be an array`);break;case"BETWEEN":case"NOT BETWEEN":if(Array.isArray(e)&&e.length===2)i=`"${String(s)}" ${a.toUpperCase()} ${g(e[0])} AND ${g(e[1])}`;else throw new Error(`Value for ${a} must be an array with two elements`);break;case"IS NULL":case"IS NOT NULL":i=`"${String(s)}" ${a.toUpperCase()}`;break;case"LIKE":case"NOT LIKE":i=`"${String(s)}" ${a.toUpperCase()} ${g(e)}`;break;default:i=`"${String(s)}" ${a} ${g(typeof e=="boolean"?Number(e):e)}`}return r.push(`${i}`),t},andWhere(s){const a=s(_());return r.push(D(a,"AND")),t},orWhere(s){const a=s(_());return r.push(D(a,"OR")),t}};return t},K=(n,r)=>{const t={conditions:[],selectedFields:[],offset:0,limit:0,orderBy:[],count:{field:"",distinct:!1}},s={__params:t,andWhere(e){const i=e(_());return t.conditions.push(D(i,"AND")),s},orWhere(e){const i=e(_());return t.conditions.push(D(i,"OR")),s},path(e){return s.where("path","=",U(e))},skip(e){return t.offset=e,s},where(e,i,u){return s.andWhere(f=>f.where(String(e),i,u)),s},limit(e){return t.limit=e,s},select(...e){return e.length&&t.selectedFields.push(...e),s},order(e,i){return t.orderBy.push(`"${String(e)}" ${i}`),s},async all(){return r(n,a()).then(e=>e||[])},async first(){return r(n,a({limit:1})).then(e=>e[0]||null)},async count(e="*",i=!1){return r(n,a({count:{field:String(e),distinct:i}})).then(u=>u[0].count)}};function a(e={}){let i="SELECT ";if(e!=null&&e.count)i+=`COUNT(${e.count.distinct?"DISTINCT ":""}${e.count.field}) as count`;else{const f=Array.from(new Set(t.selectedFields));i+=f.length>0?f.map(h=>`"${String(h)}"`).join(", "):"*"}i+=` FROM ${Q[String(n)]}`,t.conditions.length>0&&(i+=` WHERE ${t.conditions.join(" AND ")}`),t.orderBy.length>0?i+=` ORDER BY ${t.orderBy.join(", ")}`:i+=" ORDER BY stem ASC";const u=(e==null?void 0:e.limit)||t.limit;return u>0&&(t.offset>0?i+=` LIMIT ${u} OFFSET ${t.offset}`:i+=` LIMIT ${u}`),i}return s};function g(n){return`'${String(n).replace(/'/g,"''")}'`}const X=n=>{var t,s;const r=(s=(t=W())==null?void 0:t.ssrContext)==null?void 0:s.event;return K(n,(a,e)=>A(r,a,e))};async function A(n,r,t){return x(r,t)}async function x(n,r){return await F(()=>import("./B85Jkt0y.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(s=>s.loadDatabaseAdapter(n)).then(s=>s.all(r))}export{Y as a,J as c,X as q,Q as t,G as u};
