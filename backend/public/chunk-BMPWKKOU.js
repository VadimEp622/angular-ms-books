import{a as b,b as a,c as k}from"./chunk-YZEYQ3H3.js";import{t as h,v as S}from"./chunk-FL5RJCFA.js";import{J as l,Oa as s,Pa as m,T as i,Va as d,W as p,db as u,eb as g,hb as v,ua as f,va as c}from"./chunk-GYHKD6BH.js";var C=(()=>{let o=class o{constructor(e,r,n){this.router=e,this.route=r,this.authService=n}ngOnInit(){this.userSub=this.route.data.pipe(l(({user:e})=>{this.user=e})).subscribe()}ngOnDestroy(){this.userSub.unsubscribe(),this.logoutSub&&this.logoutSub.unsubscribe()}onLogout(e){this.logoutSub=this.authService.logout(e).subscribe(r=>{this.router.navigate([""])})}};o.\u0275fac=function(r){return new(r||o)(c(S),c(h),c(a))},o.\u0275cmp=p({type:o,selectors:[["user"]],standalone:!0,features:[v],decls:8,vars:1,consts:[[3,"click"]],template:function(r,n){r&1&&(s(0,"p"),u(1,"user works! - Page is Work In Progress"),m(),s(2,"p"),u(3,"Hello "),s(4,"span"),u(5),m()(),s(6,"button",0),d("click",function(){return n.onLogout(n.user)}),u(7,"Logout"),m()),r&2&&(f(5),g(n.user.fullname))}});let t=o;return t})();var I=(t,o)=>i(a).loginByToken(i(a).getLoginCookieToken());var x=function(t){return t.LOGIN="login",t}(x||{}),y=(t,o)=>{let L=i(b),e=i(k);return L.check("loginToken")?!0:(e.setModal(x.LOGIN,{isSigup:!1,isMobile:!0}),!1)};var H=[{path:"",component:C,canActivate:[y],resolve:{user:I}}];export{H as routes};