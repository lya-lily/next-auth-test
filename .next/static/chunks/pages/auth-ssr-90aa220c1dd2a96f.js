(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[708],{7799:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth-ssr",function(){return e(5733)}])},6985:function(n,t,e){"use strict";var i=e(5893),r=e(5503),s=(e(2211),e(7294)),u=e(5913),c=e.n(u),a={signInFlow:"popup",signInOptions:[{provider:r.default.auth.FacebookAuthProvider.PROVIDER_ID,requireDisplayName:!1}],signInSuccessUrl:"/",credentialHelper:"none",callbacks:{signInSuccessWithAuthResult:function(){return!1}}};t.Z=function(){var n=(0,s.useState)(!1),t=n[0],e=n[1];return(0,s.useEffect)((function(){e(!0)}),[]),(0,i.jsx)("div",{children:t?(0,i.jsx)(c(),{uiConfig:a,firebaseAuth:r.default.auth()}):null})}},5733:function(n,t,e){"use strict";e.r(t),e.d(t,{__N_SSP:function(){return c}});var i=e(5893),r=(e(7294),e(2984)),s=e(6985),u={content:{padding:"8px 32px"},textContainer:{display:"flex",justifyContent:"center",margin:16}},c=!0;t.default=(0,r.withAuthUser)({whenAuthed:r.AuthAction.REDIRECT_TO_APP})((function(){return(0,i.jsxs)("div",{style:u.content,children:[(0,i.jsx)("h3",{children:"Sign in"}),(0,i.jsx)("div",{style:u.textContainer,children:(0,i.jsxs)("p",{children:["This auth page is ",(0,i.jsx)("b",{children:"not"})," static. It will server-side redirect to the app if the user is already authenticated."]})}),(0,i.jsx)("div",{children:(0,i.jsx)(s.Z,{})})]})}))}},function(n){n.O(0,[717,208,774,888,179],(function(){return t=7799,n(n.s=t);var t}));var t=n.O();_N_E=t}]);