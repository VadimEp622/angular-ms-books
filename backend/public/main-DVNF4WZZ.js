import{b as y,d as E,e as ee,g as te,h as ne,j as ie,k as oe,l as re,m as ae,n as F,o as C,p as se,q as pe,r as ce,t as R,u as M,v as N,w as le}from"./chunk-W5VEHLQR.js";import{$a as X,Ha as S,Ia as I,Ja as a,Ka as G,Ma as o,Na as s,O as h,Oa as l,P as Q,Pa as L,Qa as D,Sa as J,T as v,Ta as x,Ua as j,X as c,Y as W,Za as K,_a as U,ab as Y,bb as f,db as d,ea as T,eb as _,fa as A,ga as q,hb as V,ib as B,j as w,jb as Z,va as p,w as P,wa as u,za as z}from"./chunk-GFHNUF34.js";var ue=(()=>{class t{styleClass;style;strokeWidth="2";fill="none";animationDuration="2s";ariaLabel;static \u0275fac=function(i){return new(i||t)};static \u0275cmp=c({type:t,selectors:[["p-progressSpinner"]],hostAttrs:[1,"p-element"],inputs:{styleClass:"styleClass",style:"style",strokeWidth:"strokeWidth",fill:"fill",animationDuration:"animationDuration",ariaLabel:"ariaLabel"},decls:3,vars:11,consts:[["role","progressbar",1,"p-progress-spinner",3,"ngStyle","ngClass"],["viewBox","25 25 50 50",1,"p-progress-spinner-svg"],["cx","50","cy","50","r","20","stroke-miterlimit","10",1,"p-progress-spinner-circle"]],template:function(i,n){i&1&&(o(0,"div",0),q(),o(1,"svg",1),l(2,"circle",2),s()()),i&2&&(a("ngStyle",n.style)("ngClass",n.styleClass),I("aria-label",n.ariaLabel)("aria-busy",!0)("data-pc-name","progressspinner")("data-pc-section","root"),p(),G("animation-duration",n.animationDuration),I("data-pc-section","root"),p(),I("fill",n.fill)("stroke-width",n.strokeWidth))},dependencies:[y,ee],styles:[`@layer primeng{.p-progress-spinner{position:relative;margin:0 auto;width:100px;height:100px;display:inline-block}.p-progress-spinner:before{content:"";display:block;padding-top:100%}.p-progress-spinner-svg{animation:p-progress-spinner-rotate 2s linear infinite;height:100%;transform-origin:center center;width:100%;position:absolute;inset:0;margin:auto}.p-progress-spinner-circle{stroke-dasharray:89,200;stroke-dashoffset:0;stroke:#d62d20;animation:p-progress-spinner-dash 1.5s ease-in-out infinite,p-progress-spinner-color 6s ease-in-out infinite;stroke-linecap:round}}@keyframes p-progress-spinner-rotate{to{transform:rotate(360deg)}}@keyframes p-progress-spinner-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35px}to{stroke-dasharray:89,200;stroke-dashoffset:-124px}}@keyframes p-progress-spinner-color{to,0%{stroke:#d62d20}40%{stroke:#0057e7}66%{stroke:#008744}80%,90%{stroke:#ffa700}}
`],encapsulation:2,changeDetection:0})}return t})(),me=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=W({type:t});static \u0275inj=Q({imports:[ne]})}return t})();var de=(()=>{let e=class e{constructor(i){this.http=i}loadSvg(i){return this.http.get(i,{responseType:"text"})}};e.\u0275fac=function(n){return new(n||e)(v(ie))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var _e=["svgContainer"],$=(()=>{let e=class e{constructor(i,n){this.dynamicSvgService=i,this.renderer=n}ngOnInit(){this.loadSvg()}loadSvg(){this.dynamicSvgService.loadSvg(this.svgPath).subscribe(i=>{this.renderer.setProperty(this.svgContainer.nativeElement,"innerHTML",i)})}};e.\u0275fac=function(n){return new(n||e)(u(de),u(z))},e.\u0275cmp=c({type:e,selectors:[["dynamic-svg"]],viewQuery:function(n,r){if(n&1&&K(_e,7),n&2){let k;U(k=X())&&(r.svgContainer=k.first)}},inputs:{svgPath:"svgPath"},standalone:!0,features:[d],decls:2,vars:0,consts:[["svgContainer",""]],template:function(n,r){n&1&&l(0,"div",null,0)},encapsulation:2});let t=e;return t})();var b=(()=>{let e=class e{constructor(i){this.router=i,this._isMenuOpen$=new w(!1),this.isMenuOpen$=this._isMenuOpen$.asObservable(),this.router.events.pipe(P(n=>n instanceof F||n instanceof C||n instanceof pe)).subscribe(()=>{this.setMenu(!1)})}toggleMenu(){this._isMenuOpen$.next(!this._isMenuOpen$.getValue())}setMenu(i=!1){this._isMenuOpen$.next(i)}};e.\u0275fac=function(n){return new(n||e)(v(M))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var Oe=t=>["full",t],ge=(()=>{let e=class e{constructor(i){this.mainMenuService=i,this.layout="main-layout"}onToggleMenu(){this.mainMenuService.toggleMenu()}onOpenMenu(){this.mainMenuService.setMenu(!0)}};e.\u0275fac=function(n){return new(n||e)(u(b))},e.\u0275cmp=c({type:e,selectors:[["app-header"]],inputs:{layout:"layout"},standalone:!0,features:[d],decls:17,vars:4,consts:[[1,"bg-clr-main-3",3,"ngClass"],[1,"app-header-container","flex","align-center","space-between","gap20","pd-bl-5"],[1,"logo"],[1,"fs25","pd-bl-10"],[1,"desktop-nav"],[1,"flex","gap10"],[1,"flex"],["routerLink","/",1,"pd-bl-10","pd-in-10"],["routerLink","/book",1,"pd-bl-10","pd-in-10"],["routerLink","/about",1,"pd-bl-10","pd-in-10"],[1,"mobile-menu-icon","pd-5",3,"click","svgPath"]],template:function(n,r){n&1&&(o(0,"header",0)(1,"section",1)(2,"section",2)(3,"h1",3),f(4,"Ms. Books"),s()(),o(5,"nav",4)(6,"ul",5)(7,"li",6)(8,"a",7),f(9,"Home"),s()(),o(10,"li",6)(11,"a",8),f(12,"Book"),s()(),o(13,"li",6)(14,"a",9),f(15,"About"),s()()()(),o(16,"dynamic-svg",10),x("click",function(){return r.onOpenMenu()}),s()()()),n&2&&(a("ngClass",_(2,Oe,r.layout)),p(16),a("svgPath","assets/imgs/icon/config/icon-hamburger.svg"))},dependencies:[N,y,$],styles:["nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#a4bfec}.mobile-menu-icon[_ngcontent-%COMP%]:hover{cursor:pointer}"]});let t=e;return t})();function we(t,e){if(t&1){let m=J();L(0),o(1,"section",1)(2,"div",2),x("click",function(){T(m);let n=j();return A(n.onCloseMenu())}),s(),o(3,"section",3)(4,"section",4)(5,"dynamic-svg",5),x("click",function(){T(m);let n=j();return A(n.onCloseMenu())}),s()(),o(6,"nav",6)(7,"ul",7)(8,"li",8)(9,"a",9),f(10,"Home"),s()(),o(11,"li",8)(12,"a",10),f(13,"Book"),s()(),o(14,"li",8)(15,"a",11),f(16,"About"),s()()()()()(),D()}if(t&2){let m=j();p(),a("ngClass",m.getMenuContainerClass(m.isMenuOpen)),p(2),a("ngClass",m.getMenuClass(m.isMenuOpen)),p(2),a("svgPath","assets/imgs/icon/exit/x-exit.svg")}}var he=(()=>{let e=class e{constructor(i){this.mainMenuService=i}getMenuContainerClass(i){return i?["active"]:[]}getMenuClass(i){return i?["right-0"]:["right-neg-full"]}onCloseMenu(){this.mainMenuService.setMenu(!1)}};e.\u0275fac=function(n){return new(n||e)(u(b))},e.\u0275cmp=c({type:e,selectors:[["app-main-menu"]],hostAttrs:[1,"pos-abs","top-0"],inputs:{isMenuOpen:"isMenuOpen"},standalone:!0,features:[d],decls:1,vars:1,consts:[[4,"ngIf"],[1,"main-menu-container","pos-fix","width-100vw","height-100vh","overflow-hidden",3,"ngClass"],[1,"overlay","width-full","height-full","bg-clr-black",3,"click"],[1,"main-menu","bg-clr-main-2","pd-20","pos-abs","top-0","height-full","width-50vw","min-width-200","max-width-300",3,"ngClass"],[1,"exit-icon-container","flex","justify-end"],[1,"exit-icon","pd-5",3,"click","svgPath"],[1,"desktop-nav","pd-bl-40"],[1,"flex","column","gap10"],[1,"flex"],["routerLink","/",1,"pd-bl-10","pd-in-10","width-full"],["routerLink","/book",1,"pd-bl-10","pd-in-10","width-full"],["routerLink","/about",1,"pd-bl-10","pd-in-10","width-full"]],template:function(n,r){n&1&&S(0,we,17,3,"ng-container",0),n&2&&a("ngIf",r.isMenuOpen!==null)},dependencies:[y,N,E,$],styles:[".main-menu-container[_ngcontent-%COMP%]{transition:visibility .2s ease-in-out}.main-menu-container[_ngcontent-%COMP%]:not(.active){visibility:hidden}.main-menu-container[_ngcontent-%COMP%]:not(.active)   .overlay[_ngcontent-%COMP%]{opacity:0}.main-menu-container.active[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]{opacity:.5}.overlay[_ngcontent-%COMP%]{transition:opacity .2s ease-in-out}.main-menu[_ngcontent-%COMP%]{transition:right .2s ease-in-out;background-color:#a4bfec}.main-menu[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{transition:background-color .2s ease-in-out;border-radius:8px}.main-menu[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#7aa2e3}.exit-icon-container[_ngcontent-%COMP%]{position:relative}.exit-icon-container[_ngcontent-%COMP%]   .exit-icon[_ngcontent-%COMP%]{position:absolute;right:0}.exit-icon-container[_ngcontent-%COMP%]   .exit-icon[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#7aa2e3;border-radius:50%}"]});let t=e;return t})();var ve=(()=>{let e=class e{constructor(i){this.router=i,this.layout="main-layout",this.router.events.pipe(P(n=>n instanceof C)).subscribe(()=>{this._updateLayout()})}getLayout(){return this.layout}_updateLayout(){this.router.url==="/about"?this.layout="details-layout":this.layout="main-layout"}};e.\u0275fac=function(n){return new(n||e)(v(M))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var ye=(()=>{let e=class e{constructor(i){this.router=i,this._isRouteLoading$=new w(!1),this.isRouteLoading$=this._isRouteLoading$.asObservable(),this.router.events.subscribe(n=>{switch(!0){case n instanceof F:{this._isRouteLoading$.next(!0);break}case n instanceof C:case n instanceof se:case n instanceof ce:{this._isRouteLoading$.next(!1);break}default:break}})}};e.\u0275fac=function(n){return new(n||e)(v(M))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var Ce=t=>["full",t];function Le(t,e){t&1&&(L(0),l(1,"p-progressSpinner",7),D())}function De(t,e){t&1&&l(0,"router-outlet")}var O=(()=>{let e=class e{constructor(i,n,r){this.layoutService=i,this.routingService=n,this.mainMenuService=r}ngOnInit(){this.isMenuOpen$=this.mainMenuService.isMenuOpen$,this.isRouteLoading$=this.routingService.isRouteLoading$}};e.\u0275fac=function(n){return new(n||e)(u(ve),u(ye),u(b))},e.\u0275cmp=c({type:e,selectors:[["dynamic-layout"]],standalone:!0,features:[d],decls:10,vars:15,consts:[["content",""],[1,"drawer-bg"],[1,"main-app",3,"ngClass"],[3,"ngClass","layout"],[3,"ngClass"],[4,"ngIf","ngIfElse"],[3,"isMenuOpen"],["ariaLabel","loading",1,"flex","justify-center"]],template:function(n,r){if(n&1&&(l(0,"div",1),o(1,"section",2),l(2,"app-header",3),o(3,"main",4),S(4,Le,2,0,"ng-container",5),V(5,"async"),S(6,De,1,0,"ng-template",null,0,Z),s()(),l(8,"app-main-menu",6),V(9,"async")),n&2){let k=Y(7);p(),a("ngClass",r.layoutService.getLayout()),p(),a("ngClass",_(11,Ce,r.layoutService.getLayout()))("layout",r.layoutService.getLayout()),p(),a("ngClass",_(13,Ce,r.layoutService.getLayout())),p(),a("ngIf",B(5,7,r.isRouteLoading$))("ngIfElse",k),p(4),a("isMenuOpen",B(9,9,r.isMenuOpen$))}},dependencies:[R,y,E,te,me,ue,ge,he],styles:[".drawer-bg[_ngcontent-%COMP%]{position:fixed;height:100vh;width:100vw;background-color:#f8f6e3;z-index:-1}"]});let t=e;return t})();var Me=[{path:"",title:"home",pathMatch:"full",component:O,loadChildren:()=>import("./chunk-FDY6SX2A.js").then(t=>t.routes)},{path:"book",title:"book",component:O,loadChildren:()=>import("./chunk-P3R34QR5.js").then(t=>t.routes)},{path:"about",title:"about",component:O,loadChildren:()=>import("./chunk-QGOVLS2Z.js").then(t=>t.routes)},{path:"**",title:"error",component:O,loadChildren:()=>import("./chunk-WOO64J4V.js").then(t=>t.routes)}];var be={providers:[le(Me),oe(re())]};var ke=(()=>{let e=class e{constructor(){this.title="angular-ms-books"}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=c({type:e,selectors:[["app-root"]],standalone:!0,features:[d],decls:1,vars:0,template:function(n,r){n&1&&l(0,"router-outlet")},dependencies:[R]});let t=e;return t})();ae(ke,be).catch(t=>console.error(t));
