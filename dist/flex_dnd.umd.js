!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("@formkit/auto-animate/react"),require("react")):"function"==typeof define&&define.amd?define(["@formkit/auto-animate/react","react"],t):t((e||self).FormkitAutoAnimateReact,e.react)}(this,function(e,t){function n(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach(function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}}),t.default=e,t}var r=/*#__PURE__*/n(e);const i=(e,t,n,r,i,o)=>{e.enable=!0,t(Object.assign(e));let a=n.splice(i,1);n.splice(o,0,...a),r([...n])},o=(e,t)=>{var n;let r=null==(n=t.ref)?void 0:n.current.getBoundingClientRect(),i=e.current.getBoundingClientRect(),o=i.y+i.height/2,a=i.x+i.width/2,s=r.x;return a>s&&a<s+r.width&&o>r.y&&o<r.bottom},a=(e,t)=>setTimeout(()=>{e.enable=!1,t(Object.assign(e))},200);module.exports=function(e){let{duration:n,list_:s,contRef:u,elementclassName:d,containerclassName:f}=e;const[c,l]=t.useState(s),[m,p]=t.useState(void 0),[y,g]=r.useAutoAnimate({duration:n});t.useEffect(()=>{((e,n)=>{e&&0!==e.length&&n(e.map(e=>(e.ref=t.createRef(),e.x=0,e.y=0,e)))})(s,l)},[s]),t.useEffect(()=>{if(!m)return;const e=e=>{((e,t)=>{e.ref.current.style.transform="translate("+(e.x+t.pageX-e.mouseDown.pageX)+"px,"+(e.y+t.pageY-e.mouseDown.pageY)+"px)"})(m,e),x(m.ref)},t=n=>{v(c.findIndex(e=>"empty"===e._id)),document.removeEventListener("mousemove",e),document.removeEventListener("mouseup",t)};document.addEventListener("mousemove",e),document.addEventListener("mouseup",t)},[m]);const x=e=>{let t=c.find(e=>e.dragged),n=c.findIndex(e=>"empty"===e._id);for(let r=0;r<c.length;r++){let s=c[r];if(!m.enable&&s!==t&&"empty"!==s._id&&o(e,s)){i(m,p,c,l,n,r),a(m,p);break}}},v=e=>{let t=c.filter(e=>"empty"!==e._id);t.splice(e,0,m),p(void 0),l([...t])};return h("div",{style:{display:"flex"}},c&&h("div",{ref:y,className:f},c.map(e=>h("div",{ref:e.ref,className:d,key:e._id,onMouseDown:t=>function(e,t){try{e.stopPropagation();let n=c.find(e=>e.ref===t),r=c.findIndex(e=>e.ref===t);return((e,t,n)=>{const r=e.current.getBoundingClientRect(),i=n.current.getBoundingClientRect();t.x=r.x-i.x,t.y=r.y-i.y})(t,n,u),((e,t,n,r)=>{r.splice(t,0,{_id:"empty",extraStyle:{width:e.current.offsetWidth,height:e.current.offsetHeight}}),n.extraStyle={width:e.current.offsetWidth,height:e.current.offsetHeight}})(t,r,n,c),l(c.filter(e=>e!==n)),n.mouseDown=e,p(n),Promise.resolve()}catch(e){return Promise.reject(e)}}(t,e.ref),style:e.extraStyle?{...e.extraStyle}:{}},e.renderMethod))),m&&h("div",{className:"dashboardContainer",ref:m.ref,style:{position:"absolute",...m.extraStyle,transform:"translate("+m.x+"px,"+m.y+"px)",zIndex:"10000"}},m.renderMethod))}});
//# sourceMappingURL=flex_dnd.umd.js.map
