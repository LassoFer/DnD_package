import{useAutoAnimate as e}from"@formkit/auto-animate/react";import{createRef as t,useState as n,useEffect as r}from"react";const i=(e,t,n,r,i,o)=>{e.enable=!0,t(Object.assign(e));let s=n.splice(i,1);n.splice(o,0,...s),r([...n])},o=(e,t)=>{var n;let r=null==(n=t.ref)?void 0:n.current.getBoundingClientRect(),i=e.current.getBoundingClientRect(),o=i.y+i.height/2,s=i.x+i.width/2,a=r.x;return s>a&&s<a+r.width&&o>r.y&&o<r.bottom},s=(e,t)=>setTimeout(()=>{e.enable=!1,t(Object.assign(e))},200);function a(a){let{duration:d,list_:l,contRef:c,elementclassName:u,containerclassName:f}=a;const[m,p]=n(l),[y,g]=n(void 0),[x,v]=e({duration:d});r(()=>{((e,n)=>{e&&0!==e.length&&n(e.map(e=>(e.ref=t(),e.x=0,e.y=0,e)))})(l,p)},[l]),r(()=>{if(!y)return;const e=e=>{((e,t)=>{e.ref.current.style.transform="translate("+(e.x+t.pageX-e.mouseDown.pageX)+"px,"+(e.y+t.pageY-e.mouseDown.pageY)+"px)"})(y,e),b(y.ref)},t=n=>{w(m.findIndex(e=>"empty"===e._id)),document.removeEventListener("mousemove",e),document.removeEventListener("mouseup",t)};document.addEventListener("mousemove",e),document.addEventListener("mouseup",t)},[y]);const b=e=>{let t=m.find(e=>e.dragged),n=m.findIndex(e=>"empty"===e._id);for(let r=0;r<m.length;r++){let a=m[r];if(!y.enable&&a!==t&&"empty"!==a._id&&o(e,a)){i(y,g,m,p,n,r),s(y,g);break}}},w=e=>{let t=m.filter(e=>"empty"!==e._id);t.splice(e,0,y),g(void 0),p([...t])};return h("div",{style:{display:"flex"}},m&&h("div",{ref:x,className:f},m.map(e=>h("div",{ref:e.ref,className:u,key:e._id,onMouseDown:t=>function(e,t){try{e.stopPropagation();let n=m.find(e=>e.ref===t),r=m.findIndex(e=>e.ref===t);return((e,t,n)=>{const r=e.current.getBoundingClientRect(),i=n.current.getBoundingClientRect();t.x=r.x-i.x,t.y=r.y-i.y})(t,n,c),((e,t,n,r)=>{r.splice(t,0,{_id:"empty",extraStyle:{width:e.current.offsetWidth,height:e.current.offsetHeight}}),n.extraStyle={width:e.current.offsetWidth,height:e.current.offsetHeight}})(t,r,n,m),p(m.filter(e=>e!==n)),n.mouseDown=e,g(n),Promise.resolve()}catch(e){return Promise.reject(e)}}(t,e.ref),style:e.extraStyle?{...e.extraStyle}:{}},e.renderMethod))),y&&h("div",{className:"dashboardContainer",ref:y.ref,style:{position:"absolute",...y.extraStyle,transform:"translate("+y.x+"px,"+y.y+"px)",zIndex:"10000"}},y.renderMethod))}export{a as default};
//# sourceMappingURL=flexdnd.esm.js.map
