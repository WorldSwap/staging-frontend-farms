(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[8],{1116:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Wt}));var c,r,a,i,o,s,l,b,u,j,d,O,x=n(36),p=n(0),m=n.n(p),h=n(5),f=n(24),g=n(148),v=n(3),k=n.n(v),y=n(8),w=n(32),S=n(43),C=n(11),T=n(83),B=n(844),F=n(6),z=n(10),P=n.n(z),L=n(106),N=n(46),U=n(20),I=n(189),E=n(121),A=function(){var e=Object(p.useState)([]),t=Object(w.a)(e,2),n=t[0],c=t[1],r=Object(S.c)().account,a=Object(E.a)().fastRefresh;return Object(p.useEffect)((function(){r&&function(){var e=Object(y.a)(k.a.mark((function e(){var t,n,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=I.a.map((function(e){return{address:Object(U.k)(),name:"pending".concat(Object(L.capitalize)(C.b.tokenKeyMasterChef)),params:[e.pid,r]}})),e.next=3,Object(N.a)(C.b.masterChefABI,t);case 3:n=e.sent,a=I.a.map((function(e,t){return Object(F.a)(Object(F.a)({},e),{},{balance:new P.a(n[t])})})),c(a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[r,a]),n},R=n(245),M=function(){var e=Object(p.useState)([]),t=Object(w.a)(e,2),n=t[0],c=t[1],r=Object(S.c)().account,a=Object(E.a)().fastRefresh;return Object(p.useEffect)((function(){r&&function(){var e=Object(y.a)(k.a.mark((function e(){var t,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=I.a.map((function(e){return{address:Object(U.k)(),name:"pending".concat(Object(L.capitalize)(C.b.tokenKeyMasterChef)),params:[e.pid,r]}})),e.next=3,Object(N.a)(C.b.masterChefABI,t);case 3:n=e.sent,c(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[r,a]),n},Q=n(90),D=n(145),W=n(807),q=n(809),H=n(7),V=h.e.div(c||(c=Object(x.a)(["\n  margin-bottom: 24px;\n"]))),$=function(){var e=Object(T.b)().t,t=Object(S.c)().account,n=M().reduce((function(e,t){var n=new P.a(t);return n.eq(0)?e:e+n.div(D.g).toNumber()}),0),c=Object(Q.C)(),r=new P.a(n).multipliedBy(c).toNumber();return t?Object(H.jsxs)(V,{children:[Object(H.jsx)(W.a,{value:n,lineHeight:"1.5"}),!c.eq(0)&&Object(H.jsx)(q.a,{value:r})]}):Object(H.jsx)(f.Pb,{color:"textDisabled",style:{lineHeight:"76px"},children:e("Locked")})},J=n(801),X=n(65),_=function(){var e=Object(T.b)().t,t=Object(J.a)(Object(U.t)()),n=Object(Q.C)(),c=new z.BigNumber(Object(X.c)(t)).multipliedBy(n).toNumber();return Object(S.c)().account?Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(W.a,{value:Object(X.c)(t),decimals:4,fontSize:"24px",lineHeight:"36px"}),n.eq(0)?Object(H.jsx)("br",{}):Object(H.jsx)(q.a,{value:c})]}):Object(H.jsx)(f.Pb,{color:"textDisabled",style:{lineHeight:"54px"},children:e("Locked")})},K=Object(h.e)(f.v)(r||(r=Object(x.a)(["\n  background-image: url('","');\n  background-repeat: no-repeat;\n  background-position: top right;\n  min-height: 376px;\n"])),C.b.homeStakingCardBackground),G=h.e.div(a||(a=Object(x.a)(["\n  margin-bottom: 16px;\n"]))),Y=h.e.img(i||(i=Object(x.a)(["\n  margin-bottom: 16px;\n"]))),Z=h.e.div(o||(o=Object(x.a)(["\n  color: ",";\n  font-size: 14px;\n"])),(function(e){return e.theme.colors.textSubtle})),ee=h.e.div(s||(s=Object(x.a)(["\n  margin-top: 24px;\n"]))),te=function(){var e=Object(p.useState)(!1),t=Object(w.a)(e,2),n=t[0],c=t[1],r=Object(S.c)().account,a=Object(T.b)().t,i=A().filter((function(e){return e.balance.toNumber()>0})),o=Object(B.a)(i.map((function(e){return e.pid}))).onReward,s=Object(p.useCallback)(Object(y.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.prev=1,e.next=4,o();case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:return e.prev=8,c(!1),e.finish(8);case 11:case"end":return e.stop()}}),e,null,[[1,6,8,11]])}))),[o]);return Object(H.jsx)(K,{children:Object(H.jsxs)(f.w,{children:[Object(H.jsx)(f.T,{scale:"xl",mb:"24px",children:a("Farms & Staking")}),Object(H.jsx)(Y,{src:C.b.tokenImage,alt:"".concat(C.b.token.symbol," logo"),width:64,height:64}),Object(H.jsxs)(G,{children:[Object(H.jsxs)(Z,{children:[C.b.token.symbol.toUpperCase()," to Harvest:"]}),Object(H.jsx)($,{})]}),Object(H.jsxs)(G,{children:[Object(H.jsxs)(Z,{children:[C.b.token.symbol.toUpperCase()," in Wallet:"]}),Object(H.jsx)(_,{})]}),Object(H.jsx)(ee,{children:r?Object(H.jsx)(f.r,{id:"harvest-all",disabled:i.length<=0,isLoading:n,onClick:s,width:"100%",children:n?"Collecting ".concat(C.b.token.symbol.toUpperCase()):a("Harvest all (%count%)",{count:i.length})}):Object(H.jsx)(R.a,{width:"100%"})})]})})},ne=n(86),ce=n.n(ne),re=n(806),ae=n(346),ie=n(241),oe=function(e){var t=Object(S.c)().account,n=Object(ie.u)(),c=Object(ie.r)(),r=Object(p.useState)(),a=Object(w.a)(r,2),i=a[0],o=a[1],s=Object(p.useState)(),l=Object(w.a)(s,2),b=l[0],u=l[1],j=Object(p.useState)(),d=Object(w.a)(j,2),O=d[0],x=d[1],m=Object(p.useState)(!1),h=Object(w.a)(m,2),f=h[0],g=h[1],v=Object(p.useState)(!0),T=Object(w.a)(v,2),B=T[0],F=T[1],z=Object(p.useState)(""),P=Object(w.a)(z,2),L=P[0],I=P[1],A=Object(E.a)().fastRefresh,R=Object(Q.d)(C.b.usdEtherPid),M=Number(R.tokenPriceVsQuote)&&b&&O.mul(b).div(ce.a.utils.padRight("1",19)),D=b,W=Object(p.useCallback)(Object(y.a)(k.a.mark((function n(){return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return g(!0),I(""),n.prev=2,n.next=5,Object(re.c)(c,t,ce.a.utils.toWei(e));case 5:n.next=10;break;case 7:n.prev=7,n.t0=n.catch(2),I(n.t0.message);case 10:return n.prev=10,g(!1),n.finish(10);case 13:case"end":return n.stop()}}),n,null,[[2,7,10,13]])}))),[c,t,e]),q=Object(p.useCallback)(Object(y.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),I(""),e.prev=2,e.next=5,Object(re.e)(c,t);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),I(e.t0.message);case 10:return e.prev=10,g(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[2,7,10,13]])}))),[c,t]),H=Object(p.useCallback)(Object(y.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),I(""),e.prev=2,e.next=5,Object(re.d)(c,t,M.toString());case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),I(e.t0.message);case 10:return e.prev=10,g(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[2,7,10,13]])}))),[c,t,M]),V=Object(p.useCallback)(Object(y.a)(k.a.mark((function e(){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),I(""),e.prev=2,n=D.div(Math.pow(10,18-Object(X.e)(C.c.usdToken))),e.next=6,Object(re.f)(c,t,n.toString());case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),I(e.t0.message);case 11:return e.prev=11,g(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[2,8,11,14]])}))),[c,t,D]);return Object(p.useEffect)((function(){Object(y.a)(k.a.mark((function e(){var c,r,a,i,s,l,b,j;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return c=Object(U.q)(),r=[{address:c,name:"balance",params:[t]},{address:c,name:"unclaimedBalance",params:[]},{address:c,name:"price",params:[]}],e.next=6,Object(N.a)(ae,r);case 6:return a=e.sent,i=Object(w.a)(a,3),s=i[0],l=i[1],b=i[2],e.next=13,n.methods.balanceOf(c).call();case 13:j=e.sent,u(s[0]),o(l[0].sub(j).mul(-1)),x(b[0]),F(!1);case 18:case"end":return e.stop()}}),e)})))()}),[n.methods,c.methods,t,A]),{pendingBalance:b,saleBalance:i,tokenPrice:O,loading:B,pendingTx:f,error:L,handleBuyToken:W,handleStakeInPool:q,handleStakeInEtherFarm:H,handleStakeInUsdFarm:V,etherValueForLP:M,usdValueForLP:D}},se=n(144),le=h.e.input(l||(l=Object(x.a)(["\n  color: ",";\n  width: 0;\n  position: relative;\n  font-weight: 500;\n  outline: none;\n  border: none;\n  flex: 1 1 auto;\n  background-color: transparent;\n  font-size: 16px;\n  text-align: ",";\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 0px;\n  -webkit-appearance: textfield;\n\n  ::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  [type='number'] {\n    -moz-appearance: textfield;\n  }\n\n  ::-webkit-outer-spin-button,\n  ::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n  }\n\n  ::placeholder {\n    color: ",";\n  }\n"])),(function(e){var t=e.error,n=e.theme;return t?n.colors.failure:n.colors.text}),(function(e){var t=e.align;return t&&t}),(function(e){return e.theme.colors.textSubtle})),be=RegExp("^\\d*(?:\\\\[.])?\\d*$"),ue=m.a.memo((function(e){var t=e.value,n=e.onUserInput,c=e.placeholder,r=Object(se.a)(e,["value","onUserInput","placeholder"]);return Object(H.jsx)(le,Object(F.a)(Object(F.a)({},r),{},{value:t,onChange:function(e){var t;(""===(t=e.target.value.replace(/,/g,"."))||be.test(Object(L.escapeRegExp)(t)))&&n(t)},inputMode:"decimal",title:"Token Amount",autoComplete:"off",autoCorrect:"off",type:"text",pattern:"^[0-9]*[.,]?[0-9]*$",placeholder:c||"0.0",minLength:1,maxLength:79,spellCheck:"false"}))})),je=h.e.div(b||(b=Object(x.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  padding: ",";\n"])),(function(e){return e.selected?"0.75rem 0.5rem 0.75rem 1rem":"0.75rem 0.75rem 0.75rem 1rem"})),de=h.e.div(u||(u=Object(x.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  color: ",";\n  font-size: 0.75rem;\n  line-height: 1rem;\n  padding: 0.75rem 1rem 0 1rem;\n  justify-content: space-between;\n  span:hover {\n    cursor: pointer;\n    \n  }\n"])),(function(e){return e.theme.colors.text})),Oe=h.e.div(j||(j=Object(x.a)(["\n  display: flex;\n  flex-flow: column nowrap;\n  position: relative;\n  border-radius: ",";\n  background-color: ",";\n  z-index: 1;\n"])),(function(e){return e.hideInput?"8px":"20px"}),(function(e){return e.theme.colors.background})),xe=h.e.div(d||(d=Object(x.a)(["\n  border-radius: 16px;\n  background-color: ",";\n  box-shadow: ",";\n"])),(function(e){return e.theme.colors.input}),(function(e){return e.theme.shadows.inset})),pe=h.e.img(O||(O=Object(x.a)(["\n  width: ",";\n  height: ",";\n"])),(function(e){return e.size}),(function(e){return e.size}));function me(e){var t=e.value,n=e.onUserInput,c=e.onMax,r=e.balanceText,a=e.showMaxButton,i=e.label,o=e.symbol,s=e.hideInput,l=void 0!==s&&s,b=e.id,u=Object(S.c)().account;return Object(H.jsx)(Oe,{id:b,children:Object(H.jsxs)(xe,{hideInput:l,children:[!l&&Object(H.jsxs)(de,{children:[Object(H.jsx)(f.Pb,{fontSize:"14px",children:i}),u&&Object(H.jsx)(f.Pb,{onClick:c,fontSize:"14px",style:{display:"inline",cursor:"pointer"},children:r})]}),Object(H.jsxs)(je,{style:l?{padding:"0",borderRadius:"8px"}:{},selected:!1,children:[!l&&Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(ue,{className:"token-amount-input",value:t,onUserInput:n}),u&&a&&Object(H.jsx)(f.r,{onClick:c,scale:"sm",variant:"text",children:"MAX"})]}),Object(H.jsx)(pe,{size:"24px",src:"/images/farms/".concat(o.toLowerCase(),".png"),alt:"".concat(o," Token")})]})]})})}var he,fe,ge,ve,ke,ye,we,Se,Ce,Te,Be,Fe,ze,Pe,Le,Ne,Ue,Ie,Ee,Ae,Re,Me,Qe,De,We,qe,He=n(855),Ve=n(28),$e=Object(h.e)(f.v)(he||(he=Object(x.a)(["\n  background-image: url('","');\n  background-repeat: no-repeat;\n  background-position: top right;\n  min-height: 376px;\n"])),C.b.homeStakingCardBackground),Je=h.e.div(fe||(fe=Object(x.a)(["\n  margin-bottom: 16px;\n"]))),Xe=h.e.div(ge||(ge=Object(x.a)(["\n  text-align: center;\n  margin: 16px 0;\n"]))),_e=(h.e.img(ve||(ve=Object(x.a)(["\n  margin-bottom: 16px;\n"]))),h.e.div(ke||(ke=Object(x.a)(["\n  color: ",";\n  font-size: 14px;\n"])),(function(e){return e.theme.colors.textSubtle})),h.e.div(ye||(ye=Object(x.a)(["\n  margin-top: 24px;\n"])))),Ke=h.e.div(we||(we=Object(x.a)(["\n  order: 2;\n\n  "," {\n    order: 1;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),Ge=h.e.div(Se||(Se=Object(x.a)(["\n  order: 1;\n  margin: 0 8px 0 0;\n\n  "," {\n    order: 2;\n    margin: 0 0 0 8px;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),Ye=function(){var e=Object(p.useState)(""),t=Object(w.a)(e,2),n=t[0],c=t[1],r=Object(p.useState)(!1),a=Object(w.a)(r,2),i=a[0],o=a[1],s=Object(p.useState)(!1),l=Object(w.a)(s,2),b=l[0],u=l[1],j=Object(p.useState)(!1),d=Object(w.a)(j,2),O=d[0],x=d[1],m=oe(n),h=m.pendingBalance,g=m.saleBalance,v=m.tokenPrice,k=m.loading,y=m.pendingTx,T=m.error,B=m.handleBuyToken,F=m.handleStakeInPool,z=m.handleStakeInEtherFarm,P=m.etherValueForLP,L=m.usdValueForLP,N=Object(S.c)().account,U=Object(J.c)().balance,I=Object(Ve.d)(U),E=Object(Ve.d)(v),A=Object(Ve.d)(h),M=E&&Number(n)&&Number(n)/E;return Object(H.jsxs)($e,{children:[i||!A?Object(H.jsxs)(f.w,{children:[Object(H.jsx)(Je,{style:{marginBottom:24},children:Object(H.jsxs)(f.S,{children:[Object(H.jsxs)(f.T,{scale:"xl",mb:"16px",children:["Buy ",C.b.token.symbol]}),Object(H.jsxs)("div",{style:{textAlign:"right",flex:2},children:[Object(H.jsx)(Ke,{children:Object(H.jsx)(He.b,{interval:"10m"})}),Object(H.jsx)(Ge,{children:Object(H.jsx)(f.W,{variant:"subtle",as:"a",href:"https://docs.pancakeswap.finance/products/prediction",target:"_blank",rel:"noreferrer noopener",children:Object(H.jsx)(f.U,{width:"24px",color:"white"})})})]})]})}),Object(H.jsx)(me,{id:"ether-input",symbol:C.c.tokenSymbol,balanceText:U&&"Balance: ".concat(I),label:"From",value:n,onUserInput:c,onMax:function(){return c(I.toString())},showMaxButton:!0}),Object(H.jsx)(Xe,{children:Object(H.jsx)(f.W,{variant:"tertiary",style:{borderRadius:"50%"},scale:"sm",children:Object(H.jsx)(f.d,{color:"primary",width:"24px"})})}),Object(H.jsx)(me,{id:"ws-token-input",symbol:C.b.token.symbol,balanceText:g&&"".concat(C.b.token.symbol," left: ").concat(Object(Ve.d)(g)),label:"To",value:"".concat(M),onUserInput:function(){},showMaxButton:!1}),Object(H.jsx)(_e,{children:N?Object(H.jsx)(f.r,{id:"buy-tokens",isLoading:y||k,onClick:function(){B(),o(!1)},width:"100%",children:y?"Buying ".concat(C.b.token.symbol.toUpperCase()):"Buy ".concat(C.b.token.symbol)}):Object(H.jsx)(R.a,{width:"100%"})})]}):b||O?function(){var e=b?z:function(){},t=b?C.c.tokenSymbol:C.c.usdToken.symbol,n=b?P:L;return Object(H.jsxs)(f.w,{children:[Object(H.jsx)(Je,{style:{marginBottom:24},children:Object(H.jsxs)(f.T,{scale:"xl",mb:"16px",children:["Stake in ",C.b.token.symbol,"-",t," LP"]})}),Object(H.jsxs)(Je,{children:[Object(H.jsxs)(f.T,{style:{textAlign:"center",margin:"16px 0"},children:[A," ",C.b.token.symbol," + ",Object(Ve.d)(n)," ",t]}),Object(H.jsx)(f.r,{id:"stake",isLoading:y||k,onClick:function(){e(),u(!1),x(!1)},width:"100%",children:"Create LP and Stake"})]})]})}():Object(H.jsxs)(f.w,{children:[Object(H.jsx)(Je,{style:{marginBottom:24},children:Object(H.jsxs)(f.T,{scale:"xl",mb:"16px",children:["Stake ",C.b.token.symbol]})}),Object(H.jsxs)(f.Pb,{children:["Unclaimed balance: ",Object(H.jsxs)("strong",{children:[A," ",C.b.token.symbol]})]}),Object(H.jsxs)(_e,{children:[Object(H.jsx)(f.r,{style:{marginBottom:16},id:"stake-usd-lp",isLoading:y||k,onClick:function(){return x(!0)},width:"100%",children:y?"Staking ".concat(C.b.token.symbol.toUpperCase()):"Create ".concat(C.b.token.symbol,"-").concat(C.c.usdToken.symbol," LP and Stake")}),Object(H.jsx)(f.r,{style:{marginBottom:16},id:"stake-ether-lp",isLoading:y||k,onClick:function(){return u(!0)},width:"100%",children:y?"Staking ".concat(C.b.token.symbol.toUpperCase()):"Create ".concat(C.b.token.symbol,"-").concat(C.c.tokenSymbol," LP and Stake")}),Object(H.jsx)(f.r,{style:{marginBottom:16},id:"stake-pool",isLoading:y||k,onClick:F,width:"100%",children:y?"Staking ".concat(C.b.token.symbol.toUpperCase()):"Stake in ".concat(C.b.token.symbol," Pool")}),Object(H.jsxs)(f.r,{id:"buy-more",isLoading:y||k,onClick:function(){return o(!0)},width:"100%",children:["Buy More ",C.b.token.symbol.toUpperCase()]})]})]}),T&&Object(H.jsx)("div",{style:{marginTop:16},children:Object(H.jsx)(f.b,{title:"Error",variant:"danger",children:T})})]})},Ze=n(845),et=n(856),tt=n(800),nt=n(827),ct=n(886),rt=n(887),at=n(922),it=h.e.div(Ce||(Ce=Object(x.a)(["\n  margin-bottom: 24px;\n"]))),ot=function(e){var t=e.claimAmount,n=Object(T.b)().t,c=Object(S.c)().account,r=Object(X.c)(t),a=Object(Q.C)(),i=new z.BigNumber(r).multipliedBy(a).toNumber();return c?Object(H.jsxs)(it,{children:[Object(H.jsx)(W.a,{value:r,lineHeight:"1.5"}),!a.eq(0)&&Object(H.jsx)(q.a,{value:i,decimals:2})]}):Object(H.jsx)(f.Pb,{color:"textDisabled",style:{lineHeight:"76px"},children:n("Locked")})},st=function(){var e=Object(T.b)().t,t=Object(tt.d)(),n=Object(X.c)(t),c=n.toLocaleString(void 0,{maximumFractionDigits:2}),r=Object(Q.B)(),a=new z.BigNumber(n).multipliedBy(r).toNumber();return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(f.Pb,{bold:!0,fontSize:"24px",style:{lineHeight:"1.5"},children:e("%amount% W".concat(C.c.tokenSymbol),{amount:c})}),r.eq(0)?Object(H.jsx)("br",{}):Object(H.jsx)(q.a,{value:a})]})},lt=Object(h.e)(f.v)(Te||(Te=Object(x.a)(["\n  background-image: url('/images/ticket-bg.svg');\n  background-repeat: no-repeat;\n  background-position: top right;\n  min-height: 376px;\n"]))),bt=h.e.div(Be||(Be=Object(x.a)(["\n  margin-bottom: 16px;\n"]))),ut=h.e.img(Fe||(Fe=Object(x.a)(["\n  margin-bottom: 16px;\n"]))),jt=h.e.div(ze||(ze=Object(x.a)(["\n  color: ",";\n  font-size: 14px;\n"])),(function(e){return e.theme.colors.textSubtle})),dt=h.e.div(Pe||(Pe=Object(x.a)(["\n  display: flex;\n  margin-top: 24px;\n  button {\n    flex: 1 0 50%;\n  }\n"]))),Ot=Object(h.e)(f.T).attrs({scale:"xl"})(Le||(Le=Object(x.a)(["\n  line-height: 44px;\n"]))),xt=function(){var e=Object(S.c)().account,t=Object(Ze.a)(),n=Object(p.useState)(!1),c=Object(w.a)(n,2),r=c[0],a=c[1],i=Object(T.b)().t,o=Object(nt.b)(),s=Object(f.hc)(Object(H.jsx)(rt.a,{})),l=Object(w.a)(s,1)[0],b=Object(tt.c)(),u=b.claimAmount,j=b.setLastUpdated,d=Object(et.c)().onMultiClaim,O=Object(J.a)(Object(U.s)()),x=Object(ct.a)(l),m=x.handleApprove,h=x.requestedApproval,g=Object(p.useCallback)(Object(y.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a(!0),e.next=4,d();case 4:e.sent&&(a(!1),j()),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[d,a,j]),v=Object(f.hc)(Object(H.jsx)(at.a,{max:O})),B=Object(w.a)(v,1)[0],F=function(){return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsxs)(bt,{children:[Object(H.jsxs)(jt,{children:["W",C.c.tokenSymbol," to Collect:"]}),Object(H.jsx)(ot,{claimAmount:u})]}),Object(H.jsxs)(bt,{children:[Object(H.jsxs)(jt,{children:[i("Total jackpot this round"),":"]}),Object(H.jsx)(st,{})]}),e?Object(H.jsxs)(dt,{children:[Object(H.jsx)(f.r,{id:"dashboard-collect-winnings",disabled:0===Object(X.c)(u)||r,onClick:g,style:{marginRight:"8px"},children:i("Collect Winnings")}),o.toNumber()?t?Object(H.jsxs)(f.r,{disabled:!0,children:[" ",i("On sale soon")]}):Object(H.jsx)(f.r,{id:"dashboard-buy-tickets",variant:"secondary",onClick:B,children:i("Buy Tickets")}):Object(H.jsxs)(f.r,{width:"100%",disabled:h,onClick:m,children:["Approve W",C.c.tokenSymbol]})]}):Object(H.jsx)(dt,{children:Object(H.jsx)(R.a,{width:"100%"})})]})};return Object(H.jsx)(lt,{children:Object(H.jsxs)(f.w,{children:[Object(H.jsxs)("div",{style:{marginBottom:24},children:[Object(H.jsx)(f.T,{scale:"xl",children:i("Your Lottery Winnings")}),C.c.lottery.enabled&&Object(H.jsx)(f.Pb,{children:"First round ever will be drawn on June 2 at 23:00 UTC"})]}),Object(H.jsx)(ut,{src:"/images/ticket.svg",alt:"lottery ticket",width:64,height:64}),C.c.lottery.enabled?Object(H.jsx)(F,{}):Object(H.jsx)(Ot,{color:"#7645d9",children:i("Coming Soon")})]})})},pt=Object(h.e)(f.v)(Ne||(Ne=Object(x.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]))),mt=h.e.div(Ue||(Ue=Object(x.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),ht=function(){Object(T.b)().t;var e=Object(J.d)(),t=Object(Q.C)(),n=Object(X.c)(Object(J.b)(Object(U.t)())),c=e?Object(X.c)(e)-n:0,r=1e6-n,a=t.times(c);return Object(H.jsx)(pt,{children:Object(H.jsxs)(f.w,{children:[Object(H.jsxs)(f.T,{scale:"xl",mb:"24px",children:[C.b.token.symbol.toUpperCase()," Stats"]}),Object(H.jsxs)(mt,{children:[Object(H.jsx)(f.Pb,{fontSize:"14px",children:"Market Cap"}),Object(H.jsx)(W.a,{fontSize:"14px",value:a.toNumber(),decimals:0,prefix:"$"})]}),Object(H.jsxs)(mt,{children:[Object(H.jsxs)(f.Pb,{fontSize:"14px",children:["Total ",C.b.token.symbol.toUpperCase()," Supply"]}),c&&Object(H.jsx)(W.a,{fontSize:"14px",value:c})]}),Object(H.jsxs)(mt,{children:[Object(H.jsxs)(f.Pb,{fontSize:"14px",children:["Total ",C.b.token.symbol.toUpperCase()," Burned"]}),Object(H.jsx)(W.a,{fontSize:"14px",decimals:0,value:n})]}),Object(H.jsxs)(mt,{children:[Object(H.jsxs)(f.Pb,{fontSize:"14px",children:["New ",C.b.token.symbol.toUpperCase(),"/block"]}),Object(H.jsx)(W.a,{fontSize:"14px",decimals:1,value:C.b.tokenPerBlock})]}),Object(H.jsxs)(mt,{children:[Object(H.jsx)(f.Pb,{fontSize:"14px",children:"Max Total Supply (ever)"}),Object(H.jsx)(W.a,{fontSize:"14px",decimals:0,value:r})]})]})})},ft=Object(h.e)(f.v)(Ie||(Ie=Object(x.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n"]))),gt=function(){var e=Object(Q.G)();return Object(H.jsx)(ft,{children:Object(H.jsxs)(f.w,{children:[Object(H.jsx)(f.T,{size:"lg",mb:"24px",children:"Total Value Locked (TVL)"}),Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(W.a,{value:e.toNumber(),prefix:"$",decimals:2}),Object(H.jsx)(f.Pb,{color:"textSubtle",children:"Across all Farms and Pools"})]})]})})},vt=n(933),kt=n.n(vt),yt=n(105),wt=n(857),St=Object(h.e)(f.v)(Ee||(Ee=Object(x.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n\n  "," {\n    margin: 0;\n    max-width: none;\n  }\n\n  transition: opacity 200ms;\n  &:hover {\n    opacity: 0.65;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),Ct=Object(h.e)(f.T).attrs({scale:"xl"})(Ae||(Ae=Object(x.a)(["\n  line-height: 44px;\n"]))),Tt=function(){var e=Object(T.b)().t,t=Object(Q.f)().data,n=Object(Q.j)(),c=Object(Q.C)(),r=Object(p.useMemo)((function(){var e=t.filter((function(e){return 0!==e.pid&&"0X"!==e.multiplier})).map((function(e){if(e.lpTotalInQuoteToken&&n){var t=n[Object(U.b)(e.quoteToken.address).toLowerCase()],r=new P.a(e.lpTotalInQuoteToken).times(t);return Object(wt.a)(e.poolWeight,c,r)}return null})),r=kt()(e);return null===r||void 0===r?void 0:r.toLocaleString("en-US",{maximumFractionDigits:2})}),[c,t,n]);return Object(H.jsx)(St,{children:Object(H.jsx)(yt.c,{exact:!0,activeClassName:"active",to:"/farms",id:"farm-apr-cta",children:Object(H.jsxs)(f.w,{children:[Object(H.jsx)(f.T,{color:"contrast",scale:"lg",children:"Earn up to"}),Object(H.jsx)(Ct,{color:"#7645d9",children:r?"".concat(r,"% ").concat(e("APR")):Object(H.jsx)(f.Fb,{animation:"pulse",variant:"rect",height:"44px"})}),Object(H.jsxs)(f.S,{justifyContent:"space-between",children:[Object(H.jsx)(f.T,{color:"contrast",scale:"lg",children:"in Farms"}),Object(H.jsx)(f.f,{mt:30,color:"primary"})]})]})})})},Bt=n(828),Ft=n.n(Bt),zt=Object(h.e)(f.v)(Re||(Re=Object(x.a)(["\n  background: linear-gradient(#69aefe, #f3acf4);\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n  "," {\n    margin: 0;\n    max-width: none;\n  }\n\n  transition: opacity 200ms;\n  &:hover {\n    opacity: 0.65;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),Pt=Object(h.e)(f.T).attrs({scale:"xl"})(Me||(Me=Object(x.a)(["\n  line-height: 44px;\n"]))),Lt=function(){var e=Object(Q.f)().data,t=Ft()(e,(function(e){return Number(e.liquidity)}),"asc").map((function(e){return e.token.symbol})),n=Array.from(new Set(t)).slice(0,6).join(", ");return Object(H.jsx)(zt,{children:Object(H.jsx)(yt.c,{exact:!0,activeClassName:"active",to:"/pools",id:"pool-cta",children:Object(H.jsxs)(f.w,{children:[Object(H.jsx)(f.T,{color:"contrast",scale:"lg",children:"Stake"}),Object(H.jsx)(Pt,{color:"invertedContrast",children:n}),Object(H.jsxs)(f.S,{justifyContent:"space-between",children:[Object(H.jsx)(f.T,{color:"contrast",scale:"lg",children:"in Pools"}),Object(H.jsx)(f.f,{mt:30,color:"primary"})]})]})})})},Nt=function(){var e=Object(tt.d)();return Object(X.c)(e)*Object(Q.B)().toNumber()},Ut=Object(h.e)(f.v)(Qe||(Qe=Object(x.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n\n  "," {\n    margin: 0;\n    max-width: none;\n  }\n\n  transition: opacity 200ms;\n  &:hover {\n    opacity: 0.65;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),It=Object(h.e)(f.T).attrs({scale:"xl"})(De||(De=Object(x.a)(["\n  line-height: 44px;\n"]))),Et=function(){var e=Nt(),t=function(){return Object(H.jsxs)(f.w,{children:[Object(H.jsx)(f.T,{color:"contrast",size:"lg",children:"Lottery with"}),Object(H.jsx)(It,{color:"#7645d9",children:0!==e?"$".concat(e.toLocaleString()):Object(H.jsx)(f.Fb,{animation:"pulse",variant:"rect",height:"44px"})}),Object(H.jsxs)(f.S,{justifyContent:"space-between",children:[Object(H.jsx)(f.T,{color:"contrast",size:"lg",children:"up for grabs"}),Object(H.jsx)(f.f,{mt:30,color:"primary"})]})]})},n=function(){return Object(H.jsxs)(f.w,{children:[Object(H.jsx)(f.T,{color:"contrast",scale:"lg",children:"Lottery"}),Object(H.jsx)(It,{color:"#7645d9",children:"Coming Soon"}),Object(H.jsxs)(f.S,{justifyContent:"space-between",children:[Object(H.jsx)(f.T,{color:"contrast",scale:"lg"}),Object(H.jsx)(f.f,{mt:30,color:"primary"})]})]})};return Object(H.jsx)(Ut,{children:Object(H.jsx)(yt.c,{exact:!0,activeClassName:"active",to:C.c.lottery.enabled?"/lottery":"/",id:"lottery-pot-cta",children:C.c.lottery.enabled?Object(H.jsx)(t,{}):Object(H.jsx)(n,{})})})},At=n(858),Rt=n(254),Mt=function(e,t){return t?e.saleStartBlock&&e.saleEndBlock&&t>=e.saleStartBlock&&t<e.saleEndBlock:e.saleEnabled},Qt=Object(h.e)(f.j)(We||(We=Object(x.a)(["\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 24px;\n  grid-gap: 24px;\n\n  & > div {\n    grid-column: span 6;\n    width: 100%;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    margin-bottom: 32px;\n    grid-gap: 32px;\n\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),Dt=Object(h.e)(f.j)(qe||(qe=Object(x.a)(["\n  align-items: start;\n  margin-bottom: 24px;\n  grid-gap: 24px;\n\n  & > div {\n    grid-column: span 6;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    margin-bottom: 32px;\n    grid-gap: 32px;\n\n    & > div {\n      grid-column: span 4;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),Wt=function(){Object(Q.i)({tokenMode:!1});var e=Object(Q.c)().currentBlock;return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(Rt.a,{title:C.b.title,subtitle:C.b.homeSecondaryTitle,rightContent:Object(H.jsx)("img",{src:C.c.image,alt:C.c.title,width:56===C.b.chain?180:"",height:56===C.b.chain?180:""}),leftFlex:2,hideRightOnMobile:!0}),Object(H.jsxs)(g.a,{children:[Object(H.jsx)(At.a,{style:{marginBottom:64}}),Object(H.jsxs)(Qt,{children:[Mt(C.b,e)?Object(H.jsx)(Ye,{}):Object(H.jsx)(te,{}),Object(H.jsx)(xt,{})]}),Object(H.jsxs)(Qt,{children:[Object(H.jsx)(ht,{}),Object(H.jsx)(gt,{})]}),Object(H.jsxs)(Dt,{children:[Object(H.jsx)(Tt,{}),Object(H.jsx)(Lt,{}),Object(H.jsx)(Et,{})]})]})]})}},797:function(e,t,n){"use strict";n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b})),n.d(t,"f",(function(){return u})),n.d(t,"g",(function(){return j})),n.d(t,"e",(function(){return d}));var c=n(49),r=n(65),a=n(811),i=function(e){return Object(r.b)(e,18)},o=function(e){return"$".concat(Object(r.a)(e||0,3,3))},s=function(e){return e?e.toLocaleString(void 0,{minimumFractionDigits:3,maximumFractionDigits:3}):"0"},l=function(e){return e.toString().padStart(2,"0")},b=function(e){var t=Object(a.a)(e),n=t.hours,c=t.minutes,r=t.seconds,i="".concat(l(c),":").concat(l(r));return n>0?"".concat(l(n),":").concat(i):i},u=function(e,t){return 0===e||0===t?0:e/t},j=function(e){if(!e||!e.round)return 0;var t=e.round,n=t.bullAmount,r=t.bearAmount,a=t.totalAmount,i=u(a,e.position===c.a.BULL?n:r);return e.amount*i},d=function(e){return e.isDark?"linear-gradient(139.73deg, #142339 0%, #24243D 47.4%, #37273F 100%)":"linear-gradient(139.73deg, #E6FDFF 0%, #EFF4F5 46.87%, #F3EFFF 100%)"}},814:function(e,t,n){var c=n(815),r=n(816)(c);e.exports=r},815:function(e,t,n){var c=n(408),r=n(248);e.exports=function(e,t){return e&&c(e,t,r)}},816:function(e,t,n){var c=n(147);e.exports=function(e,t){return function(n,r){if(null==n)return n;if(!c(n))return e(n,r);for(var a=n.length,i=t?a:-1,o=Object(n);(t?i--:++i<a)&&!1!==r(o[i],i,o););return n}}},828:function(e,t,n){var c=n(829),r=n(79);e.exports=function(e,t,n,a){return null==e?[]:(r(t)||(t=null==t?[]:[t]),r(n=a?void 0:n)||(n=null==n?[]:[n]),c(e,t,n))}},829:function(e,t,n){var c=n(406),r=n(249),a=n(409),i=n(830),o=n(831),s=n(411),l=n(832),b=n(186),u=n(79);e.exports=function(e,t,n){t=t.length?c(t,(function(e){return u(e)?function(t){return r(t,1===e.length?e[0]:e)}:e})):[b];var j=-1;t=c(t,s(a));var d=i(e,(function(e,n,r){return{criteria:c(t,(function(t){return t(e)})),index:++j,value:e}}));return o(d,(function(e,t){return l(e,t,n)}))}},830:function(e,t,n){var c=n(814),r=n(147);e.exports=function(e,t){var n=-1,a=r(e)?Array(e.length):[];return c(e,(function(e,c,r){a[++n]=t(e,c,r)})),a}},831:function(e,t){e.exports=function(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}},832:function(e,t,n){var c=n(833);e.exports=function(e,t,n){for(var r=-1,a=e.criteria,i=t.criteria,o=a.length,s=n.length;++r<o;){var l=c(a[r],i[r]);if(l)return r>=s?l:l*("desc"==n[r]?-1:1)}return e.index-t.index}},833:function(e,t,n){var c=n(123);e.exports=function(e,t){if(e!==t){var n=void 0!==e,r=null===e,a=e===e,i=c(e),o=void 0!==t,s=null===t,l=t===t,b=c(t);if(!s&&!b&&!i&&e>t||i&&o&&l&&!s&&!b||r&&o&&l||!n&&l||!a)return 1;if(!r&&!i&&!b&&e<t||b&&n&&a&&!r&&!i||s&&n&&a||!o&&a||!l)return-1}return 0}},844:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return O}));var c=n(41),r=n(3),a=n.n(r),i=n(8),o=n(0),s=n(43),l=n(52),b=n(94),u=n(806),j=n(241),d=function(e){var t=Object(l.b)(),n=Object(s.c)().account,c=Object(j.l)();return{onReward:Object(o.useCallback)(Object(i.a)(a.a.mark((function r(){var i;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(u.b)(c,e,n);case 2:return i=r.sent,t(Object(b.d)(n)),r.abrupt("return",i);case 5:case"end":return r.stop()}}),r)}))),[n,t,e,c])}},O=function(e){var t=Object(s.c)().account,n=Object(j.l)();return{onReward:Object(o.useCallback)(Object(i.a)(a.a.mark((function r(){var i;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return i=e.reduce((function(e,r){return[].concat(Object(c.a)(e),[Object(u.b)(n,r,t)])}),[]),r.abrupt("return",Promise.all(i));case 2:case"end":return r.stop()}}),r)}))),[t,e,n])}}},852:function(e,t,n){"use strict";var c=n(90),r=n(3),a=n.n(r),i=n(8),o=n(32),s=n(0),l=n(145),b=n(55),u=function(e){var t=Object(s.useRef)(null),n=Object(s.useState)(0),c=Object(o.a)(n,2),r=c[0],u=c[1];return Object(s.useEffect)((function(){return function(){var n=Object(i.a)(a.a.mark((function n(){var c,r;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=Object(b.b)(),n.next=3,c.eth.getBlockNumber();case 3:r=n.sent,e>r&&(u((e-r)*l.d),t.current&&clearInterval(t.current),t.current=setInterval((function(){u((function(e){return 1===e&&clearInterval(t.current),e-1}))}),1e3));case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()(),function(){clearInterval(t.current)}}),[u,e,t]),r};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=Object(c.q)(),n=Object(c.n)(),r=e*t,a=u(n+r);return a}},855:function(e,t,n){"use strict";n.d(t,"a",(function(){return y})),n.d(t,"b",(function(){return w}));var c,r,a,i,o,s=n(36),l=n(0),b=n(808),u=n(5),j=n(24),d=n(90),O=n(83),x=n(797),p=n(852),m=n(7),h=Object(u.e)(j.n)(c||(c=Object(s.a)(["\n  margin-top: -24px;\n  position: absolute;\n  top: 50%;\n  z-index: 30;\n\n  & > svg {\n    height: 48px;\n    width: 48px;\n  }\n\n  "," {\n    margin-top: -32px;\n\n    & > svg {\n      height: 64px;\n      width: 64px;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),f=Object(u.e)(j.Pb)(r||(r=Object(s.a)(["\n  font-size: 16px;\n  line-height: 21px;\n\n  "," {\n    font-size: 20px;\n    line-height: 22px;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),g=Object(u.e)(j.Pb)(a||(a=Object(s.a)(["\n  height: 18px;\n  justify-self: start;\n  width: 60px;\n\n  "," {\n    text-align: center;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),v=Object(u.e)(j.Pb)(i||(i=Object(s.a)(["\n  "," {\n    text-align: center;\n    width: 32px;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),k=Object(u.e)(j.v)(o||(o=Object(s.a)(["\n  align-items: ",";\n  border-radius: ",";\n  display: flex;\n  flex-direction: column;\n  overflow: initial;\n  padding: ",";\n\n  "," {\n    align-items: center;\n    border-radius: 16px;\n    flex-direction: row;\n    padding: ",";\n  }\n"])),(function(e){return"right"===e.dir?"flex-end":"flex-start"}),(function(e){return"right"===e.dir?"8px 8px 8px 24px":"8px 8px 24px 8px"}),(function(e){return"right"===e.dir?"0 28px 0 8px":"0 8px 0 24px"}),(function(e){return e.theme.mediaQueries.lg}),(function(e){return"right"===e.dir?"8px 40px 8px 8px":"8px 8px 8px 40px"})),y=function(){var e=Object(d.s)(),t=Object(b.useCountUp)({start:0,end:e.toNumber(),duration:1,decimals:3}),n=t.countUp,c=t.update;return Object(l.useEffect)((function(){c(e.toNumber())}),[e,c]),Object(m.jsxs)(j.n,{pl:"24px",position:"relative",display:"inline-block",children:[Object(m.jsx)(h,{left:0,children:Object(m.jsx)(j.m,{})}),Object(m.jsxs)(k,{dir:"left",children:[Object(m.jsx)(f,{bold:!0,textTransform:"uppercase",children:"BNBUSDT"}),Object(m.jsx)(g,{fontSize:"12px",children:"$".concat(n)})]})]})},w=function(e){var t=e.interval,n=Object(p.a)(),c=Object(x.b)(n),r=Object(O.b)().t;return Object(m.jsxs)(j.n,{pr:"24px",position:"relative",children:[Object(m.jsxs)(k,{dir:"right",children:[Object(m.jsx)(f,{bold:!0,color:"secondary",children:0===n?r("Closing"):c}),Object(m.jsx)(v,{fontSize:"12px",children:t})]}),Object(m.jsx)(h,{right:0,children:Object(m.jsx)(j.zb,{})})]})}},857:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(10);var c=n(145),r=function(e,t,n){var r=c.e.times(c.c).times(e).times(t).times(100);return n.toNumber()&&(r=r.div(n)),r.isNaN()||!r.isFinite()?null:r.toNumber()}},858:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var c,r,a,i=n(6),o=n(36),s=(n(0),n(24)),l=n(888),b=n(5),u=n(11),j=n(90),d=n(7),O=b.e.a(c||(c=Object(o.a)(["\n  display: flex;\n  justify-content: space-around;\n  font-family: sans-serif;\n  text-align: center;\n  padding-top: 20px;\n  width: 100%;\n  margin: 0 auto 32px;\n"]))),x=b.e.div(r||(r=Object(o.a)(["\n  text-align: center;\n"]))),p=b.e.p(a||(a=Object(o.a)(["\n  color: ",";\n"])),(function(e){return e.theme.colors.primary})),m=3600,h=86400,f=function(e,t){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{style:{fontSize:32},children:t}),Object(d.jsx)("div",{children:e})]})};function g(e){var t=e.style,n=void 0===t?{}:t,c=Date.now(),r=Object(j.c)().currentBlock,a=Number(r),o=a>0?new Date(Date.now()+(Number(u.b.startBlock)-a)*u.c.blockTime*1e3):u.b.startTime,b=(o.getTime()-c)/1e3,g=Math.ceil(b/h)*h,v=Object(s.gc)().isXl,k=56===u.b.chain?"".concat(u.c.explorerUrl,"/block/countdown/").concat(u.b.startBlock):"#";if(!r&&c>u.b.startTime.getTime()||a>Number(u.b.startBlock))return Object(d.jsx)(d.Fragment,{});var y={isPlaying:!0,size:v?120:80,strokeWidth:v?6:2};return Object(d.jsxs)("div",{style:n,children:[Object(d.jsxs)(O,{href:k,target:"_blank",rel:"noopener noreferrer",children:[Object(d.jsx)(l.CountdownCircleTimer,Object(i.a)(Object(i.a)({},y),{},{colors:"#7E2E84",duration:g,initialRemainingTime:b,children:function(e){var t=e.elapsedTime;return f("days",(g-t)/h|0)}})),Object(d.jsx)(l.CountdownCircleTimer,Object(i.a)(Object(i.a)({},y),{},{colors:"#D14081",duration:h,initialRemainingTime:b%h,onComplete:function(e){return[b-e>m,0]},children:function(e){var t=e.elapsedTime;return f("hours",(h-t)%h/m|0)}})),Object(d.jsx)(l.CountdownCircleTimer,Object(i.a)(Object(i.a)({},y),{},{colors:"#EF798A",duration:m,initialRemainingTime:b%m,onComplete:function(e){return[b-e>60,0]},children:function(e){var t=e.elapsedTime;return f("minutes",(m-t)%m/60|0)}})),Object(d.jsx)(l.CountdownCircleTimer,Object(i.a)(Object(i.a)({},y),{},{colors:"#218380",duration:60,initialRemainingTime:b%60,onComplete:function(e){return[b-e>0,0]},children:function(e){var t=e.elapsedTime;return f("seconds",60-t|0)}}))]}),Object(d.jsxs)(x,{children:[Object(d.jsx)("p",{style:{color:"white",marginBottom:16},children:Object(d.jsx)("strong",{children:o.toString()})}),Object(d.jsx)(p,{children:Object(d.jsxs)("a",{href:k,target:"_blank",rel:"noopener noreferrer",children:["Farming starts in Block #",u.b.startBlock," ",r?"(in ".concat(Number(u.b.startBlock)-r," blocks)"):""]})})]})]})}},933:function(e,t,n){var c=n(423),r=n(424),a=n(186);e.exports=function(e){return e&&e.length?c(e,a,r):void 0}}}]);