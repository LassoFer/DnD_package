var e=require("@formkit/auto-animate/react"),t=require("react");const r=(e,t,r,n,i,o)=>{e.enable=!0,t(Object.assign(e));let s=r.splice(i,1);r.splice(o,0,...s),n([...r])},n=(e,t)=>{var r;let n=null==(r=t.ref)?void 0:r.current.getBoundingClientRect(),i=e.current.getBoundingClientRect(),o=i.y+i.height/2,s=i.x+i.width/2,a=n.x;return s>a&&s<a+n.width&&o>n.y&&o<n.bottom},i=(e,t)=>setTimeout(()=>{e.enable=!1,t(Object.assign(e))},200);module.exports=function(o){let{duration:s,list_:a,contRef:d,elementclassName:u,containerclassName:l}=o;const[c,f]=t.useState(a),[m,p]=t.useState(void 0),[y,g]=e.useAutoAnimate({duration:s});t.useEffect(()=>{((e,r)=>{e&&0!==e.length&&r(e.map(e=>(e.ref=t.createRef(),e.x=0,e.y=0,e)))})(a,f)},[a]),t.useEffect(()=>{if(!m)return;const e=e=>{((e,t)=>{e.ref.current.style.transform="translate("+(e.x+t.pageX-e.mouseDown.pageX)+"px,"+(e.y+t.pageY-e.mouseDown.pageY)+"px)"})(m,e),x(m.ref)},t=r=>{v(c.findIndex(e=>"empty"===e._id)),document.removeEventListener("mousemove",e),document.removeEventListener("mouseup",t)};document.addEventListener("mousemove",e),document.addEventListener("mouseup",t)},[m]);const x=e=>{let t=c.find(e=>e.dragged),o=c.findIndex(e=>"empty"===e._id);for(let s=0;s<c.length;s++){let a=c[s];if(!m.enable&&a!==t&&"empty"!==a._id&&n(e,a)){r(m,p,c,f,o,s),i(m,p);break}}},v=e=>{let t=c.filter(e=>"empty"!==e._id);t.splice(e,0,m),p(void 0),f([...t])};return h("div",{style:{display:"flex"}},c&&h("div",{ref:y,className:l},c.map(e=>h("div",{ref:e.ref,className:u,key:e._id,onMouseDown:t=>function(e,t){try{e.stopPropagation();let r=c.find(e=>e.ref===t),n=c.findIndex(e=>e.ref===t);return((e,t,r)=>{const n=e.current.getBoundingClientRect(),i=r.current.getBoundingClientRect();t.x=n.x-i.x,t.y=n.y-i.y})(t,r,d),((e,t,r,n)=>{n.splice(t,0,{_id:"empty",extraStyle:{width:e.current.offsetWidth,height:e.current.offsetHeight}}),r.extraStyle={width:e.current.offsetWidth,height:e.current.offsetHeight}})(t,n,r,c),f(c.filter(e=>e!==r)),r.mouseDown=e,p(r),Promise.resolve()}catch(e){return Promise.reject(e)}}(t,e.ref),style:e.extraStyle?{...e.extraStyle}:{}},e.renderMethod))),m&&h("div",{className:"dashboardContainer",ref:m.ref,style:{position:"absolute",...m.extraStyle,transform:"translate("+m.x+"px,"+m.y+"px)",zIndex:"10000"}},m.renderMethod))};
//# sourceMappingURL=flexdnd.js.map