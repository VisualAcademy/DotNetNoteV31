webpackJsonp([6],{570:function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),u.d(n,"DemosModuleNgFactory",function(){return h});var t=u(0),o=u(802),e=u(714),r=u(716),i=u(715),d=u(712),s=u(713),a=u(3),c=u(6),m=u(2),p=u(803),v=u(603),f=u(605),g=u(604),C=u(591),b=(u.n(C),u(592)),h=(u.n(b),t["ɵcmf"](o.a,[],function(l){return t["ɵmod"]([t["ɵmpd"](512,t.ComponentFactoryResolver,t["ɵCodegenComponentFactoryResolver"],[[8,[e.a,r.a,i.a,d.a,s.a]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["ɵmpd"](4608,a.a,a.b,[t.LOCALE_ID]),t["ɵmpd"](4608,c["ɵi"],c["ɵi"],[]),t["ɵmpd"](4608,c.FormBuilder,c.FormBuilder,[]),t["ɵmpd"](512,a.c,a.c,[]),t["ɵmpd"](512,m.RouterModule,m.RouterModule,[[2,m["ɵa"]],[2,m.Router]]),t["ɵmpd"](512,c["ɵba"],c["ɵba"],[]),t["ɵmpd"](512,c.FormsModule,c.FormsModule,[]),t["ɵmpd"](512,c.ReactiveFormsModule,c.ReactiveFormsModule,[]),t["ɵmpd"](512,p.a,p.a,[]),t["ɵmpd"](512,o.a,o.a,[]),t["ɵmpd"](1024,m.ROUTES,function(){return[[{path:"",data:{title:"데모 예제들"},children:[{path:"",component:v.a,data:{title:"데모 예제들"}},{path:"demos",component:v.a,data:{title:"데모 예제들"}},{path:"templatedrivendemo",component:f.a,data:{title:"템플릿 기반 폼 사용하기"}},{path:"forms/user",component:g.a,data:{title:"2단계 형태의 서브 폴더 설정"}},{path:"blog/post",component:C.BlogPostComponent,data:{title:"Blog/Post 예제"}},{path:"post/modify",component:b.PostModifyComponent,data:{title:"Blog/Modify 예제"}}]}]]},[])])}))},591:function(l,n,u){"use strict";var t=this&&this.__decorate||function(l,n,u,t){var o,e=arguments.length,r=e<3?n:null===t?t=Object.getOwnPropertyDescriptor(n,u):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(l,n,u,t);else for(var i=l.length-1;i>=0;i--)(o=l[i])&&(r=(e<3?o(r):e>3?o(n,u,r):o(n,u))||r);return e>3&&r&&Object.defineProperty(n,u,r),r},o=u(0),e=u(6),r=function(){function l(){}return l.prototype.ngOnInit=function(){this.postForm=new e.FormGroup({title:new e.FormControl,content:new e.FormControl,blogId:new e.FormControl(1)})},l.prototype.btnSave_Click=function(){console.log(this.postForm.value)},l}();r=t([o.Component({selector:"blogpost",template:u(833)})],r),n.BlogPostComponent=r},592:function(l,n,u){"use strict";var t=this&&this.__decorate||function(l,n,u,t){var o,e=arguments.length,r=e<3?n:null===t?t=Object.getOwnPropertyDescriptor(n,u):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(l,n,u,t);else for(var i=l.length-1;i>=0;i--)(o=l[i])&&(r=(e<3?o(r):e>3?o(n,u,r):o(n,u))||r);return e>3&&r&&Object.defineProperty(n,u,r),r},o=this&&this.__metadata||function(l,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(l,n)},e=u(0),r=u(6),i=function(){function l(l){this.fb=l}return l.prototype.ngOnInit=function(){this.postForm=this.fb.group({title:"",content:{value:"",disabled:!1},blogId:1})},l.prototype.btnSave_Click=function(){console.log(this.postForm.value)},l.prototype.displayData=function(){this.postForm.patchValue({title:"샘플 제목",content:"샘플 내용\n샘플 내용\n"})},l}();i=t([e.Component({selector:"postmodify",template:u(834)}),o("design:paramtypes",[r.FormBuilder])],i),n.PostModifyComponent=i},603:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=function(){function l(){}return l}()},604:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=function(){function l(){this.username="",this.password=""}return l.prototype.btnLogin_Click=function(l){console.log(l),console.log(JSON.stringify(l)),console.log(l.username),console.log(l.password)},l}()},605:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=function(){function l(){this.vm=new o,this.vm.id=1,this.vm.note="안녕하세요."}return l.prototype.btnSave_Click=function(l){console.log("note는 "+l+" 입니다.")},l.ctorParameters=function(){return[]},l}(),o=function(){function l(){}return l}()},712:function(l,n,u){"use strict";function t(l){return e["ɵvid"](0,[(l()(),e["ɵeld"](0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e["ɵted"](null,["블로그 글 쓰기"])),(l()(),e["ɵted"](null,["\n\n"])),(l()(),e["ɵeld"](0,null,null,59,"form",[["class","form-horizontal"],["novalidate",""],["role","form"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var t=!0,o=l.component;if("submit"===n){t=!1!==e["ɵnov"](l,5).onSubmit(u)&&t}if("reset"===n){t=!1!==e["ɵnov"](l,5).onReset()&&t}if("ngSubmit"===n){t=!1!==o.btnSave_Click()&&t}return t},null,null)),e["ɵdid"](16384,null,0,i["ɵbf"],[],null,null),e["ɵdid"](540672,null,0,i.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),e["ɵprd"](2048,null,i.ControlContainer,null,[i.FormGroupDirective]),e["ɵdid"](16384,null,0,i.NgControlStatusGroup,[i.ControlContainer],null,null),(l()(),e["ɵted"](null,["\n    "])),(l()(),e["ɵeld"](0,null,null,14,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e["ɵted"](null,["\n        "])),(l()(),e["ɵeld"](0,null,null,1,"label",[["class","col-sm-2 control-label"],["for","title"]],null,null,null,null,null)),(l()(),e["ɵted"](null,["제목"])),(l()(),e["ɵted"](null,["\n        "])),(l()(),e["ɵeld"](0,null,null,8,"div",[["class","col-sm-10"]],null,null,null,null,null)),(l()(),e["ɵted"](null,["\n            "])),(l()(),e["ɵeld"](0,null,null,5,"input",[["class","form-control"],["formControlName","title"],["id","title"],["placeholder","제목"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0;if("input"===n){t=!1!==e["ɵnov"](l,17)._handleInput(u.target.value)&&t}if("blur"===n){t=!1!==e["ɵnov"](l,17).onTouched()&&t}if("compositionstart"===n){t=!1!==e["ɵnov"](l,17)._compositionStart()&&t}if("compositionend"===n){t=!1!==e["ɵnov"](l,17)._compositionEnd(u.target.value)&&t}return t},null,null)),e["ɵdid"](16384,null,0,i.DefaultValueAccessor,[e.Renderer,e.ElementRef,[2,i.COMPOSITION_BUFFER_MODE]],null,null),e["ɵprd"](1024,null,i.NG_VALUE_ACCESSOR,function(l){return[l]},[i.DefaultValueAccessor]),e["ɵdid"](671744,null,0,i.FormControlName,[[3,i.ControlContainer],[8,null],[8,null],[2,i.NG_VALUE_ACCESSOR]],{name:[0,"name"]},null),e["ɵprd"](2048,null,i.NgControl,null,[i.FormControlName]),e["ɵdid"](16384,null,0,i.NgControlStatus,[i.NgControl],null,null),(l()(),e["ɵted"](null,["\n        "])),(l()(),e["ɵted"](null,["\n    "])),(l()(),e["ɵted"](null,["\n    "])),(l()(),e["ɵeld"](0,null,null,14,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e["ɵted"](null,["\n        "])),(l()(),e["ɵeld"](0,null,null,1,"label",[["class","col-sm-2 control-label"],["for","content"]],null,null,null,null,null)),(l()(),e["ɵted"](null,["내용"])),(l()(),e["ɵted"](null,["\n        "])),(l()(),e["ɵeld"](0,null,null,8,"div",[["class","col-sm-10"]],null,null,null,null,null)),(l()(),e["ɵted"](null,["\n            "])),(l()(),e["ɵeld"](0,null,null,5,"textarea",[["class","form-control"],["cols","80"],["formControlName","content"],["placeholder","내용"],["rows","5"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0;if("input"===n){t=!1!==e["ɵnov"](l,33)._handleInput(u.target.value)&&t}if("blur"===n){t=!1!==e["ɵnov"](l,33).onTouched()&&t}if("compositionstart"===n){t=!1!==e["ɵnov"](l,33)._compositionStart()&&t}if("compositionend"===n){t=!1!==e["ɵnov"](l,33)._compositionEnd(u.target.value)&&t}return t},null,null)),e["ɵdid"](16384,null,0,i.DefaultValueAccessor,[e.Renderer,e.ElementRef,[2,i.COMPOSITION_BUFFER_MODE]],null,null),e["ɵprd"](1024,null,i.NG_VALUE_ACCESSOR,function(l){return[l]},[i.DefaultValueAccessor]),e["ɵdid"](671744,null,0,i.FormControlName,[[3,i.ControlContainer],[8,null],[8,null],[2,i.NG_VALUE_ACCESSOR]],{name:[0,"name"]},null),e["ɵprd"](2048,null,i.NgControl,null,[i.FormControlName]),e["ɵdid"](16384,null,0,i.NgControlStatus,[i.NgControl],null,null),(l()(),e["ɵted"](null,["\n        "])),(l()(),e["ɵted"](null,["\n    "])),(l()(),e["ɵted"](null,["\n    "])),(l()(),e["ɵeld"](0,null,null,11,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e["ɵted"](null,["\n        "])),(l()(),e["ɵeld"](0,null,null,8,"div",[["class","col-sm-offset-2 col-sm-10"]],null,null,null,null,null)),(l()(),e["ɵted"](null,["\n            "])),(l()(),e["ɵeld"](0,null,null,5,"div",[["class","checkbox"]],null,null,null,null,null)),(l()(),e["ɵted"](null,["\n                "])),(l()(),e["ɵeld"](0,null,null,2,"label",[],null,null,null,null,null)),(l()(),e["ɵeld"](0,null,null,0,"input",[["type","checkbox"]],null,null,null,null,null)),(l()(),e["ɵted"](null,[" 게시"])),(l()(),e["ɵted"](null,["\n            "])),(l()(),e["ɵted"](null,["\n        "])),(l()(),e["ɵted"](null,["\n    "])),(l()(),e["ɵted"](null,["\n    "])),(l()(),e["ɵeld"](0,null,null,7,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e["ɵted"](null,["\n        "])),(l()(),e["ɵeld"](0,null,null,4,"div",[["class","col-sm-offset-2 col-sm-10"]],null,null,null,null,null)),(l()(),e["ɵted"](null,["\n            "])),(l()(),e["ɵeld"](0,null,null,1,"button",[["class","btn btn-default"],["type","submit"]],null,null,null,null,null)),(l()(),e["ɵted"](null,["글쓰기"])),(l()(),e["ɵted"](null,["\n        "])),(l()(),e["ɵted"](null,["\n    "])),(l()(),e["ɵted"](null,["\n"])),(l()(),e["ɵted"](null,["\n\n"])),(l()(),e["ɵeld"](0,null,null,17,"ul",[],null,null,null,null,null)),(l()(),e["ɵted"](null,["\n    "])),(l()(),e["ɵeld"](0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e["ɵted"](null,["dirty: ",""])),(l()(),e["ɵted"](null,["\n    "])),(l()(),e["ɵeld"](0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e["ɵted"](null,["pristine: ",""])),(l()(),e["ɵted"](null,["\n    "])),(l()(),e["ɵeld"](0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e["ɵted"](null,["touched: ",""])),(l()(),e["ɵted"](null,["\n    "])),(l()(),e["ɵeld"](0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e["ɵted"](null,["valid: ",""])),(l()(),e["ɵted"](null,["\n    "])),(l()(),e["ɵeld"](0,null,null,2,"li",[],null,null,null,null,null)),(l()(),e["ɵted"](null,["value: ",""])),e["ɵpid"](0,d.m,[]),(l()(),e["ɵted"](null,["\n"])),(l()(),e["ɵted"](null,["\n\n"]))],function(l,n){l(n,5,0,n.component.postForm);l(n,19,0,"title");l(n,35,0,"content")},function(l,n){var u=n.component;l(n,3,0,e["ɵnov"](n,7).ngClassUntouched,e["ɵnov"](n,7).ngClassTouched,e["ɵnov"](n,7).ngClassPristine,e["ɵnov"](n,7).ngClassDirty,e["ɵnov"](n,7).ngClassValid,e["ɵnov"](n,7).ngClassInvalid,e["ɵnov"](n,7).ngClassPending),l(n,16,0,e["ɵnov"](n,21).ngClassUntouched,e["ɵnov"](n,21).ngClassTouched,e["ɵnov"](n,21).ngClassPristine,e["ɵnov"](n,21).ngClassDirty,e["ɵnov"](n,21).ngClassValid,e["ɵnov"](n,21).ngClassInvalid,e["ɵnov"](n,21).ngClassPending),l(n,32,0,e["ɵnov"](n,37).ngClassUntouched,e["ɵnov"](n,37).ngClassTouched,e["ɵnov"](n,37).ngClassPristine,e["ɵnov"](n,37).ngClassDirty,e["ɵnov"](n,37).ngClassValid,e["ɵnov"](n,37).ngClassInvalid,e["ɵnov"](n,37).ngClassPending),l(n,67,0,u.postForm.dirty),l(n,70,0,u.postForm.pristine),l(n,73,0,u.postForm.touched),l(n,76,0,u.postForm.valid),l(n,79,0,e["ɵunv"](n,79,0,e["ɵnov"](n,80).transform(u.postForm.value)))})}function o(l){return e["ɵvid"](0,[(l()(),e["ɵeld"](0,null,null,1,"blogpost",[],null,null,null,t,a)),e["ɵdid"](114688,null,0,r.BlogPostComponent,[],null,null)],function(l,n){l(n,1,0)},null)}u.d(n,"a",function(){return c});var e=u(0),r=u(591),i=(u.n(r),u(6)),d=u(3),s=[],a=e["ɵcrt"]({encapsulation:2,styles:s,data:{}}),c=e["ɵccf"]("blogpost",r.BlogPostComponent,o,{},{},[])},713:function(l,n,u){"use strict";function t(l){return e["ɵvid"](0,[(l()(),e["ɵeld"](0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e["ɵted"](null,["블로그 글 수정"])),(l()(),e["ɵted"](null,["\n\n"])),(l()(),e["ɵeld"](0,null,null,50,"form",[["class","form-horizontal"],["novalidate",""],["role","form"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var t=!0,o=l.component;if("submit"===n){t=!1!==e["ɵnov"](l,5).onSubmit(u)&&t}if("reset"===n){t=!1!==e["ɵnov"](l,5).onReset()&&t}if("ngSubmit"===n){t=!1!==o.btnSave_Click()&&t}return t},null,null)),e["ɵdid"](16384,null,0,i["ɵbf"],[],null,null),e["ɵdid"](540672,null,0,i.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),e["ɵprd"](2048,null,i.ControlContainer,null,[i.FormGroupDirective]),e["ɵdid"](16384,null,0,i.NgControlStatusGroup,[i.ControlContainer],null,null),(l()(),e["ɵted"](null,["\n    "])),(l()(),e["ɵeld"](0,null,null,14,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e["ɵted"](null,["\n        "])),(l()(),e["ɵeld"](0,null,null,1,"label",[["class","col-sm-2 control-label"],["for","title"]],null,null,null,null,null)),(l()(),e["ɵted"](null,["제목"])),(l()(),e["ɵted"](null,["\n        "])),(l()(),e["ɵeld"](0,null,null,8,"div",[["class","col-sm-10"]],null,null,null,null,null)),(l()(),e["ɵted"](null,["\n            "])),(l()(),e["ɵeld"](0,null,null,5,"input",[["class","form-control"],["formControlName","title"],["id","title"],["placeholder","제목"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0;if("input"===n){t=!1!==e["ɵnov"](l,17)._handleInput(u.target.value)&&t}if("blur"===n){t=!1!==e["ɵnov"](l,17).onTouched()&&t}if("compositionstart"===n){t=!1!==e["ɵnov"](l,17)._compositionStart()&&t}if("compositionend"===n){t=!1!==e["ɵnov"](l,17)._compositionEnd(u.target.value)&&t}return t},null,null)),e["ɵdid"](16384,null,0,i.DefaultValueAccessor,[e.Renderer,e.ElementRef,[2,i.COMPOSITION_BUFFER_MODE]],null,null),e["ɵprd"](1024,null,i.NG_VALUE_ACCESSOR,function(l){return[l]},[i.DefaultValueAccessor]),e["ɵdid"](671744,null,0,i.FormControlName,[[3,i.ControlContainer],[8,null],[8,null],[2,i.NG_VALUE_ACCESSOR]],{name:[0,"name"]},null),e["ɵprd"](2048,null,i.NgControl,null,[i.FormControlName]),e["ɵdid"](16384,null,0,i.NgControlStatus,[i.NgControl],null,null),(l()(),e["ɵted"](null,["\n        "])),(l()(),e["ɵted"](null,["\n    "])),(l()(),e["ɵted"](null,["\n    "])),(l()(),e["ɵeld"](0,null,null,14,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e["ɵted"](null,["\n        "])),(l()(),e["ɵeld"](0,null,null,1,"label",[["class","col-sm-2 control-label"],["for","content"]],null,null,null,null,null)),(l()(),e["ɵted"](null,["내용"])),(l()(),e["ɵted"](null,["\n        "])),(l()(),e["ɵeld"](0,null,null,8,"div",[["class","col-sm-10"]],null,null,null,null,null)),(l()(),e["ɵted"](null,["\n            "])),(l()(),e["ɵeld"](0,null,null,5,"textarea",[["class","form-control"],["cols","80"],["formControlName","content"],["placeholder","내용"],["rows","5"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0;if("input"===n){t=!1!==e["ɵnov"](l,33)._handleInput(u.target.value)&&t}if("blur"===n){t=!1!==e["ɵnov"](l,33).onTouched()&&t}if("compositionstart"===n){t=!1!==e["ɵnov"](l,33)._compositionStart()&&t}if("compositionend"===n){t=!1!==e["ɵnov"](l,33)._compositionEnd(u.target.value)&&t}return t},null,null)),e["ɵdid"](16384,null,0,i.DefaultValueAccessor,[e.Renderer,e.ElementRef,[2,i.COMPOSITION_BUFFER_MODE]],null,null),e["ɵprd"](1024,null,i.NG_VALUE_ACCESSOR,function(l){return[l]},[i.DefaultValueAccessor]),e["ɵdid"](671744,null,0,i.FormControlName,[[3,i.ControlContainer],[8,null],[8,null],[2,i.NG_VALUE_ACCESSOR]],{name:[0,"name"]},null),e["ɵprd"](2048,null,i.NgControl,null,[i.FormControlName]),e["ɵdid"](16384,null,0,i.NgControlStatus,[i.NgControl],null,null),(l()(),e["ɵted"](null,["\n        "])),(l()(),e["ɵted"](null,["\n    "])),(l()(),e["ɵted"](null,["\n    "])),(l()(),e["ɵted"](null,["\n    "])),(l()(),e["ɵeld"](0,null,null,10,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e["ɵted"](null,["\n        "])),(l()(),e["ɵeld"](0,null,null,7,"div",[["class","col-sm-offset-2 col-sm-10"]],null,null,null,null,null)),(l()(),e["ɵted"](null,["\n            "])),(l()(),e["ɵeld"](0,null,null,1,"button",[["class","btn btn-default"],["type","submit"]],null,null,null,null,null)),(l()(),e["ɵted"](null,["글수정"])),(l()(),e["ɵted"](null,["\n            "])),(l()(),e["ɵeld"](0,null,null,1,"button",[["class","btn btn-default"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0,o=l.component;if("click"===n){t=!1!==o.displayData()&&t}return t},null,null)),(l()(),e["ɵted"](null,["\n                샘플 데이터 로드\n            "])),(l()(),e["ɵted"](null,["\n        "])),(l()(),e["ɵted"](null,["\n    "])),(l()(),e["ɵted"](null,["\n"])),(l()(),e["ɵted"](null,["\n\n"])),(l()(),e["ɵeld"](0,null,null,17,"ul",[],null,null,null,null,null)),(l()(),e["ɵted"](null,["\n    "])),(l()(),e["ɵeld"](0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e["ɵted"](null,["dirty: ",""])),(l()(),e["ɵted"](null,["\n    "])),(l()(),e["ɵeld"](0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e["ɵted"](null,["pristine: ",""])),(l()(),e["ɵted"](null,["\n    "])),(l()(),e["ɵeld"](0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e["ɵted"](null,["touched: ",""])),(l()(),e["ɵted"](null,["\n    "])),(l()(),e["ɵeld"](0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e["ɵted"](null,["valid: ",""])),(l()(),e["ɵted"](null,["\n    "])),(l()(),e["ɵeld"](0,null,null,2,"li",[],null,null,null,null,null)),(l()(),e["ɵted"](null,["value: ",""])),e["ɵpid"](0,d.m,[]),(l()(),e["ɵted"](null,["\n"])),(l()(),e["ɵted"](null,["\n\n"]))],function(l,n){l(n,5,0,n.component.postForm);l(n,19,0,"title");l(n,35,0,"content")},function(l,n){var u=n.component;l(n,3,0,e["ɵnov"](n,7).ngClassUntouched,e["ɵnov"](n,7).ngClassTouched,e["ɵnov"](n,7).ngClassPristine,e["ɵnov"](n,7).ngClassDirty,e["ɵnov"](n,7).ngClassValid,e["ɵnov"](n,7).ngClassInvalid,e["ɵnov"](n,7).ngClassPending),l(n,16,0,e["ɵnov"](n,21).ngClassUntouched,e["ɵnov"](n,21).ngClassTouched,e["ɵnov"](n,21).ngClassPristine,e["ɵnov"](n,21).ngClassDirty,e["ɵnov"](n,21).ngClassValid,e["ɵnov"](n,21).ngClassInvalid,e["ɵnov"](n,21).ngClassPending),l(n,32,0,e["ɵnov"](n,37).ngClassUntouched,e["ɵnov"](n,37).ngClassTouched,e["ɵnov"](n,37).ngClassPristine,e["ɵnov"](n,37).ngClassDirty,e["ɵnov"](n,37).ngClassValid,e["ɵnov"](n,37).ngClassInvalid,e["ɵnov"](n,37).ngClassPending),l(n,58,0,u.postForm.dirty),l(n,61,0,u.postForm.pristine),l(n,64,0,u.postForm.touched),l(n,67,0,u.postForm.valid),l(n,70,0,e["ɵunv"](n,70,0,e["ɵnov"](n,71).transform(u.postForm.value)))})}function o(l){return e["ɵvid"](0,[(l()(),e["ɵeld"](0,null,null,1,"postmodify",[],null,null,null,t,a)),e["ɵdid"](114688,null,0,r.PostModifyComponent,[i.FormBuilder],null,null)],function(l,n){l(n,1,0)},null)}u.d(n,"a",function(){return c});var e=u(0),r=u(592),i=(u.n(r),u(6)),d=u(3),s=[],a=e["ɵcrt"]({encapsulation:2,styles:s,data:{}}),c=e["ɵccf"]("postmodify",r.PostModifyComponent,o,{},{},[])},714:function(l,n,u){"use strict";function t(l){return e["ɵvid"](0,[(l()(),e["ɵeld"](0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),e["ɵted"](null,["데모 예제들..."])),(l()(),e["ɵted"](null,["\n"]))],null,null)}function o(l){return e["ɵvid"](0,[(l()(),e["ɵeld"](0,null,null,1,"demos",[],null,null,null,t,d)),e["ɵdid"](49152,null,0,r.a,[],null,null)],null,null)}u.d(n,"a",function(){return s});var e=u(0),r=u(603),i=[],d=e["ɵcrt"]({encapsulation:2,styles:i,data:{}}),s=e["ɵccf"]("demos",r.a,o,{},{},[])},715:function(l,n,u){"use strict";function t(l){return i["ɵvid"](0,[(l()(),i["ɵeld"](0,null,null,1,"span",[],null,null,null,null,null)),(l()(),i["ɵted"](null,["\n                    * 필수\n                "]))],null,null)}function o(l){return i["ɵvid"](0,[(l()(),i["ɵeld"](0,null,null,1,"span",[],null,null,null,null,null)),(l()(),i["ɵted"](null,["\n                    * 필수\n                "]))],null,null)}function e(l){return i["ɵvid"](0,[(l()(),i["ɵeld"](0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),i["ɵted"](null,["로그인"])),(l()(),i["ɵted"](null,["\n"])),(l()(),i["ɵeld"](0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),i["ɵted"](null,["\n"])),(l()(),i["ɵeld"](0,null,null,56,"div",[["class","row"]],null,null,null,null,null)),(l()(),i["ɵted"](null,["\n\n    "])),(l()(),i["ɵeld"](0,null,null,53,"div",[["class","col-md-4"]],null,null,null,null,null)),(l()(),i["ɵted"](null,["\n        "])),(l()(),i["ɵeld"](0,null,null,47,"form",[["autocomplete","off"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var t=!0,o=l.component;if("submit"===n){t=!1!==i["ɵnov"](l,11).onSubmit(u)&&t}if("reset"===n){t=!1!==i["ɵnov"](l,11).onReset()&&t}if("ngSubmit"===n){t=!1!==o.btnLogin_Click(i["ɵnov"](l,11).value)&&t}return t},null,null)),i["ɵdid"](16384,null,0,s["ɵbf"],[],null,null),i["ɵdid"](16384,[["frmLogin",4]],0,s.NgForm,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),i["ɵprd"](2048,null,s.ControlContainer,null,[s.NgForm]),i["ɵdid"](16384,null,0,s.NgControlStatusGroup,[s.ControlContainer],null,null),(l()(),i["ɵted"](null,["\n            "])),(l()(),i["ɵeld"](0,null,null,16,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),i["ɵted"](null,["\n                "])),(l()(),i["ɵeld"](0,null,null,1,"label",[["for","username"]],null,null,null,null,null)),(l()(),i["ɵted"](null,["아이디: "])),(l()(),i["ɵted"](null,["\n                "])),(l()(),i["ɵand"](16777216,null,null,1,null,t)),i["ɵdid"](16384,null,0,a.k,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),i["ɵted"](null,["\n                "])),(l()(),i["ɵeld"](0,null,null,7,"input",[["class","form-control"],["id","username"],["name","username"],["placeholder","아이디..."],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0,o=l.component;if("input"===n){t=!1!==i["ɵnov"](l,24)._handleInput(u.target.value)&&t}if("blur"===n){t=!1!==i["ɵnov"](l,24).onTouched()&&t}if("compositionstart"===n){t=!1!==i["ɵnov"](l,24)._compositionStart()&&t}if("compositionend"===n){t=!1!==i["ɵnov"](l,24)._compositionEnd(u.target.value)&&t}if("ngModelChange"===n){t=!1!==(o.username=u)&&t}return t},null,null)),i["ɵdid"](16384,null,0,s.DefaultValueAccessor,[i.Renderer,i.ElementRef,[2,s.COMPOSITION_BUFFER_MODE]],null,null),i["ɵdid"](16384,null,0,s.RequiredValidator,[],{required:[0,"required"]},null),i["ɵprd"](1024,null,s.NG_VALIDATORS,function(l){return[l]},[s.RequiredValidator]),i["ɵprd"](1024,null,s.NG_VALUE_ACCESSOR,function(l){return[l]},[s.DefaultValueAccessor]),i["ɵdid"](671744,null,0,s.NgModel,[[2,s.ControlContainer],[2,s.NG_VALIDATORS],[8,null],[2,s.NG_VALUE_ACCESSOR]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),i["ɵprd"](2048,null,s.NgControl,null,[s.NgModel]),i["ɵdid"](16384,null,0,s.NgControlStatus,[s.NgControl],null,null),(l()(),i["ɵted"](null,["\n            "])),(l()(),i["ɵted"](null,["\n            "])),(l()(),i["ɵeld"](0,null,null,16,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),i["ɵted"](null,["\n                "])),(l()(),i["ɵeld"](0,null,null,1,"label",[["for","password"]],null,null,null,null,null)),(l()(),i["ɵted"](null,["암호: "])),(l()(),i["ɵted"](null,["\n                "])),(l()(),i["ɵand"](16777216,null,null,1,null,o)),i["ɵdid"](16384,null,0,a.k,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),i["ɵted"](null,["\n                "])),(l()(),i["ɵeld"](0,null,null,7,"input",[["class","form-control"],["id","password"],["name","password"],["placeholder","암호..."],["required",""],["type","password"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0,o=l.component;if("input"===n){t=!1!==i["ɵnov"](l,42)._handleInput(u.target.value)&&t}if("blur"===n){t=!1!==i["ɵnov"](l,42).onTouched()&&t}if("compositionstart"===n){t=!1!==i["ɵnov"](l,42)._compositionStart()&&t}if("compositionend"===n){t=!1!==i["ɵnov"](l,42)._compositionEnd(u.target.value)&&t}if("ngModelChange"===n){t=!1!==(o.password=u)&&t}return t},null,null)),i["ɵdid"](16384,null,0,s.DefaultValueAccessor,[i.Renderer,i.ElementRef,[2,s.COMPOSITION_BUFFER_MODE]],null,null),i["ɵdid"](16384,null,0,s.RequiredValidator,[],{required:[0,"required"]},null),i["ɵprd"](1024,null,s.NG_VALIDATORS,function(l){return[l]},[s.RequiredValidator]),i["ɵprd"](1024,null,s.NG_VALUE_ACCESSOR,function(l){return[l]},[s.DefaultValueAccessor]),i["ɵdid"](671744,[["pwd",4]],0,s.NgModel,[[2,s.ControlContainer],[2,s.NG_VALIDATORS],[8,null],[2,s.NG_VALUE_ACCESSOR]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),i["ɵprd"](2048,null,s.NgControl,null,[s.NgModel]),i["ɵdid"](16384,null,0,s.NgControlStatus,[s.NgControl],null,null),(l()(),i["ɵted"](null,["\n            "])),(l()(),i["ɵted"](null,["\n            "])),(l()(),i["ɵeld"](0,null,null,1,"button",[["class","btn btn-primary"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(l()(),i["ɵted"](null,["\n                로그인\n            "])),(l()(),i["ɵted"](null,["\n            "])),(l()(),i["ɵeld"](0,null,null,1,"button",[["class","btn btn-default"],["type","button"]],null,null,null,null,null)),(l()(),i["ɵted"](null,["취소"])),(l()(),i["ɵted"](null,["\n        "])),(l()(),i["ɵted"](null,["\n        "])),(l()(),i["ɵeld"](0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),i["ɵted"](null,["\n        ","\n    "])),i["ɵpid"](0,a.m,[]),(l()(),i["ɵted"](null,["\n\n"])),(l()(),i["ɵted"](null,["\n"]))],function(l,n){var u=n.component;l(n,21,0,(null==i["ɵnov"](n,11).controls.username?null:i["ɵnov"](n,11).controls.username.touched)&&(null==i["ɵnov"](n,11).controls.username?null:i["ɵnov"](n,11).controls.username.invalid));l(n,25,0,"");l(n,28,0,"username",u.username),l(n,39,0,i["ɵnov"](n,46).touched&&i["ɵnov"](n,46).invalid);l(n,43,0,"");l(n,46,0,"password",u.password)},function(l,n){l(n,9,0,i["ɵnov"](n,13).ngClassUntouched,i["ɵnov"](n,13).ngClassTouched,i["ɵnov"](n,13).ngClassPristine,i["ɵnov"](n,13).ngClassDirty,i["ɵnov"](n,13).ngClassValid,i["ɵnov"](n,13).ngClassInvalid,i["ɵnov"](n,13).ngClassPending),l(n,23,0,i["ɵnov"](n,25).required?"":null,i["ɵnov"](n,30).ngClassUntouched,i["ɵnov"](n,30).ngClassTouched,i["ɵnov"](n,30).ngClassPristine,i["ɵnov"](n,30).ngClassDirty,i["ɵnov"](n,30).ngClassValid,i["ɵnov"](n,30).ngClassInvalid,i["ɵnov"](n,30).ngClassPending),l(n,41,0,i["ɵnov"](n,43).required?"":null,i["ɵnov"](n,48).ngClassUntouched,i["ɵnov"](n,48).ngClassTouched,i["ɵnov"](n,48).ngClassPristine,i["ɵnov"](n,48).ngClassDirty,i["ɵnov"](n,48).ngClassValid,i["ɵnov"](n,48).ngClassInvalid,i["ɵnov"](n,48).ngClassPending),l(n,51,0,i["ɵnov"](n,11).invalid),l(n,59,0,i["ɵunv"](n,59,0,i["ɵnov"](n,60).transform(i["ɵnov"](n,11).value)))})}function r(l){return i["ɵvid"](0,[(l()(),i["ɵeld"](0,null,null,1,"user",[],null,null,null,e,m)),i["ɵdid"](49152,null,0,d.a,[],null,null)],null,null)}u.d(n,"a",function(){return p});var i=u(0),d=u(604),s=u(6),a=u(3),c=["span[_ngcontent-%COMP%] { color: tomato; }"],m=i["ɵcrt"]({encapsulation:0,styles:c,data:{}}),p=i["ɵccf"]("user",d.a,r,{},{},[])},716:function(l,n,u){"use strict";function t(l){return r["ɵvid"](0,[(l()(),r["ɵeld"](0,null,null,1,"span",[],null,null,null,null,null)),(l()(),r["ɵted"](null,["\n            * 노트를 입력하세요.\n        "]))],null,null)}function o(l){return r["ɵvid"](0,[(l()(),r["ɵeld"](0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),r["ɵted"](null,["템플릿 기반 폼 사용하기"])),(l()(),r["ɵted"](null,["\n\n"])),(l()(),r["ɵeld"](0,null,null,25,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var t=!0;if("submit"===n){t=!1!==r["ɵnov"](l,5).onSubmit(u)&&t}if("reset"===n){t=!1!==r["ɵnov"](l,5).onReset()&&t}return t},null,null)),r["ɵdid"](16384,null,0,i["ɵbf"],[],null,null),r["ɵdid"](16384,[["frmDemo",4]],0,i.NgForm,[[8,null],[8,null]],null,null),r["ɵprd"](2048,null,i.ControlContainer,null,[i.NgForm]),r["ɵdid"](16384,null,0,i.NgControlStatusGroup,[i.ControlContainer],null,null),(l()(),r["ɵted"](null,["\n    "])),(l()(),r["ɵted"](null,["\n    "])),(l()(),r["ɵeld"](0,null,null,15,"div",[],null,null,null,null,null)),r["ɵdid"](278528,null,0,d.l,[r.IterableDiffers,r.KeyValueDiffers,r.ElementRef,r.Renderer],{ngClass:[0,"ngClass"]},null),r["ɵpod"](["has-error"]),(l()(),r["ɵted"](null,["\n        "])),(l()(),r["ɵeld"](0,null,null,7,"input",[["name","note"],["placeholder","노트를 입력하세요."],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0,o=l.component;if("input"===n){t=!1!==r["ɵnov"](l,15)._handleInput(u.target.value)&&t}if("blur"===n){t=!1!==r["ɵnov"](l,15).onTouched()&&t}if("compositionstart"===n){t=!1!==r["ɵnov"](l,15)._compositionStart()&&t}if("compositionend"===n){t=!1!==r["ɵnov"](l,15)._compositionEnd(u.target.value)&&t}if("ngModelChange"===n){t=!1!==(o.vm.note=u)&&t}return t},null,null)),r["ɵdid"](16384,null,0,i.DefaultValueAccessor,[r.Renderer,r.ElementRef,[2,i.COMPOSITION_BUFFER_MODE]],null,null),r["ɵdid"](16384,null,0,i.RequiredValidator,[],{required:[0,"required"]},null),r["ɵprd"](1024,null,i.NG_VALIDATORS,function(l){return[l]},[i.RequiredValidator]),r["ɵprd"](1024,null,i.NG_VALUE_ACCESSOR,function(l){return[l]},[i.DefaultValueAccessor]),r["ɵdid"](671744,[["txtNote",4]],0,i.NgModel,[[2,i.ControlContainer],[2,i.NG_VALIDATORS],[8,null],[2,i.NG_VALUE_ACCESSOR]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),r["ɵprd"](2048,null,i.NgControl,null,[i.NgModel]),r["ɵdid"](16384,null,0,i.NgControlStatus,[i.NgControl],null,null),(l()(),r["ɵted"](null,["\n        "])),(l()(),r["ɵand"](16777216,null,null,1,null,t)),r["ɵdid"](16384,null,0,d.k,[r.ViewContainerRef,r.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),r["ɵted"](null,["\n    "])),(l()(),r["ɵted"](null,["\n    "])),(l()(),r["ɵeld"](0,null,null,0,"input",[["name","btnSave"],["type","button"],["value","저장"]],[[8,"disabled",0]],[[null,"click"]],function(l,n,u){var t=!0,o=l.component;if("click"===n){t=!1!==o.btnSave_Click(r["ɵnov"](l,19).value)&&t}return t},null,null)),(l()(),r["ɵted"](null,["\n"])),(l()(),r["ɵted"](null,["\n","\n"])),r["ɵpid"](0,d.m,[])],function(l,n){var u=n.component;l(n,11,0,l(n,12,0,r["ɵnov"](n,19).touched&&r["ɵnov"](n,19).invalid));l(n,16,0,"");l(n,19,0,"note",u.vm.note),l(n,24,0,r["ɵnov"](n,19).touched&&r["ɵnov"](n,19).errors)},function(l,n){l(n,3,0,r["ɵnov"](n,7).ngClassUntouched,r["ɵnov"](n,7).ngClassTouched,r["ɵnov"](n,7).ngClassPristine,r["ɵnov"](n,7).ngClassDirty,r["ɵnov"](n,7).ngClassValid,r["ɵnov"](n,7).ngClassInvalid,r["ɵnov"](n,7).ngClassPending),l(n,14,0,r["ɵnov"](n,16).required?"":null,r["ɵnov"](n,21).ngClassUntouched,r["ɵnov"](n,21).ngClassTouched,r["ɵnov"](n,21).ngClassPristine,r["ɵnov"](n,21).ngClassDirty,r["ɵnov"](n,21).ngClassValid,r["ɵnov"](n,21).ngClassInvalid,r["ɵnov"](n,21).ngClassPending),l(n,27,0,!r["ɵnov"](n,5).valid),l(n,29,0,r["ɵunv"](n,29,0,r["ɵnov"](n,30).transform(r["ɵnov"](n,5).value)))})}function e(l){return r["ɵvid"](0,[(l()(),r["ɵeld"](0,null,null,1,"templatedrivendemo",[],null,null,null,o,c)),r["ɵdid"](49152,null,0,s.a,[],null,null)],null,null)}u.d(n,"a",function(){return m});var r=u(0),i=u(6),d=u(3),s=u(605),a=[".has-error[_ngcontent-%COMP%] {\n            border: 1px solid red;\n        }"],c=r["ɵcrt"]({encapsulation:0,styles:a,data:{}}),m=r["ɵccf"]("templatedrivendemo",s.a,e,{},{},[])},802:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=function(){function l(){}return l}()},803:function(l,n,u){"use strict";u.d(n,"a",function(){return d});var t=u(603),o=u(605),e=u(604),r=u(591),i=(u.n(r),u(592)),d=(u.n(i),t.a,t.a,o.a,e.a,r.BlogPostComponent,i.PostModifyComponent,function(){function l(){}return l}())},833:function(l,n){l.exports='<h3>블로그 글 쓰기</h3>\r\n\r\n<form class="form-horizontal" role="form" \r\n      [formGroup]="postForm"\r\n      (ngSubmit)="btnSave_Click()">\r\n    <div class="form-group">\r\n        <label class="col-sm-2 control-label" for="title">제목</label>\r\n        <div class="col-sm-10">\r\n            <input formControlName="title"\r\n                   type="text" class="form-control" \r\n                   id="title" placeholder="제목">\r\n        </div>\r\n    </div>\r\n    <div class="form-group">\r\n        <label class="col-sm-2 control-label" for="content">내용</label>\r\n        <div class="col-sm-10">\r\n            <textarea cols="80" rows="5" class="form-control"\r\n                      placeholder="내용"\r\n                      formControlName="content"></textarea>\r\n        </div>\r\n    </div>\r\n    <div class="form-group">\r\n        <div class="col-sm-offset-2 col-sm-10">\r\n            <div class="checkbox">\r\n                <label><input type="checkbox"> 게시</label>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class="form-group">\r\n        <div class="col-sm-offset-2 col-sm-10">\r\n            <button type="submit" class="btn btn-default">글쓰기</button>\r\n        </div>\r\n    </div>\r\n</form>\r\n\r\n<ul>\r\n    <li>dirty: {{ postForm.dirty }}</li>\r\n    <li>pristine: {{ postForm.pristine }}</li>\r\n    <li>touched: {{ postForm.touched }}</li>\r\n    <li>valid: {{ postForm.valid }}</li>\r\n    <li>value: {{ postForm.value | json }}</li>\r\n</ul>\r\n\r\n'},834:function(l,n){l.exports='<h3>블로그 글 수정</h3>\r\n\r\n<form class="form-horizontal" role="form"\r\n      [formGroup]="postForm"\r\n      (ngSubmit)="btnSave_Click()">\r\n    <div class="form-group">\r\n        <label class="col-sm-2 control-label" for="title">제목</label>\r\n        <div class="col-sm-10">\r\n            <input formControlName="title"\r\n                   type="text" class="form-control"\r\n                   id="title" placeholder="제목">\r\n        </div>\r\n    </div>\r\n    <div class="form-group">\r\n        <label class="col-sm-2 control-label" for="content">내용</label>\r\n        <div class="col-sm-10">\r\n            <textarea cols="80" rows="5" class="form-control"\r\n                      placeholder="내용"\r\n                      formControlName="content"></textarea>\r\n        </div>\r\n    </div>\r\n    \x3c!--<div class="form-group">\r\n        <div class="col-sm-offset-2 col-sm-10">\r\n            <div class="checkbox">\r\n                <label><input type="checkbox"> 게시</label>\r\n            </div>\r\n        </div>\r\n    </div>--\x3e\r\n    <div class="form-group">\r\n        <div class="col-sm-offset-2 col-sm-10">\r\n            <button type="submit" class="btn btn-default">글수정</button>\r\n            <button type="button" class="btn btn-default"\r\n                    (click)="displayData()">\r\n                샘플 데이터 로드\r\n            </button>\r\n        </div>\r\n    </div>\r\n</form>\r\n\r\n<ul>\r\n    <li>dirty: {{ postForm.dirty }}</li>\r\n    <li>pristine: {{ postForm.pristine }}</li>\r\n    <li>touched: {{ postForm.touched }}</li>\r\n    <li>valid: {{ postForm.valid }}</li>\r\n    <li>value: {{ postForm.value | json }}</li>\r\n</ul>\r\n\r\n'}});