import{f as I,l as _,y as M}from"./chunk-JVC43HOL.js";import{Ia as h,Ka as s,N as m,Oa as a,Pa as l,Qa as b,Ra as u,S as d,Sa as v,W as f,Wa as k,Za as y,cb as C,db as p,eb as c,hb as w,nb as x,ra as g,ua as o}from"./chunk-DUFGQ2CT.js";var O="book",$=(()=>{let e=class e{constructor(n){this.http=n,this.baseUrl=M.api_url+O}queryByGenres(){return this.http.get(`${this.baseUrl}/genre`)}queryByGenre(n){return this.http.get(`${this.baseUrl}/genre/${n}`)}getBookById(n){return this.http.get(`${this.baseUrl}/works/${n}`)}};e.\u0275fac=function(i){return new(i||e)(d(_))},e.\u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function j(t,e){if(t&1&&(u(0),b(1,"img",7),v()),t&2){let P=k();o(),y("src","https://covers.openlibrary.org/b/id/",P.book.openLibCoverId,"-M.jpg",g)}}function B(t,e){t&1&&(a(0,"div",8),p(1,"missing cover"),l())}var D=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=f({type:e,selectors:[["book-preview-side-by-side"]],inputs:{book:"book"},standalone:!0,features:[w],decls:10,vars:6,consts:[["noCover",""],[1,"book-preview","flex","align-center","gap20","pd-10","mg-in-10"],[1,"book-img"],[4,"ngIf","ngIfElse"],[1,"book-info"],[1,"title",3,"title"],[1,"authors","mg-bl-5",3,"title"],["alt","book",3,"src"],[1,"fs12","text-align-center","flex","align-center","justify-center","bg-clr-gray-0","height-full","width-full"]],template:function(i,r){if(i&1&&(a(0,"section",1)(1,"section",2),h(2,j,2,2,"ng-container",3)(3,B,2,0,"ng-template",null,0,x),l(),a(5,"section",4)(6,"h3",5),p(7),l(),a(8,"p",6),p(9),l()()()),i&2){let E=C(4);o(2),s("ngIf",r.book.openLibCoverId!==-1)("ngIfElse",E),o(4),s("title",r.book.title),o(),c(r.book.title),o(),s("title",r.book.author_name.join(", ")),o(),c(r.book.author_name.join(", "))}},dependencies:[I],styles:[".book-preview[_ngcontent-%COMP%]{height:100%;width:100%}.book-preview[_ngcontent-%COMP%]   .book-img[_ngcontent-%COMP%]{width:97px;height:180px;min-width:97px}.book-info[_ngcontent-%COMP%]{overflow:hidden}.book-info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .book-info[_ngcontent-%COMP%]   .authors[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}"]});let t=e;return t})();export{D as a,$ as b};
