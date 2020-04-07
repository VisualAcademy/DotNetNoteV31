(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(1);
	__webpack_require__(2);
	var core_1 = __webpack_require__(3);
	var angular2_universal_1 = __webpack_require__(4);
	var app_module_1 = __webpack_require__(5);
	core_1.enableProdMode();
	var platform = angular2_universal_1.platformNodeDynamic();
	function default_1(params) {
	    return new Promise(function (resolve, reject) {
	        var requestZone = Zone.current.fork({
	            name: 'angular-universal request',
	            properties: {
	                baseUrl: '/',
	                requestUrl: params.url,
	                originUrl: params.origin,
	                preboot: false,
	                // TODO: Render just the <app> component instead of wrapping it inside an extra HTML document
	                // Waiting on https://github.com/angular/universal/issues/347
	                document: '<!DOCTYPE html><html><head></head><body><main-summary></main-summary></body></html>'
	            },
	            onHandleError: function (parentZone, currentZone, targetZone, error) {
	                // If any error occurs while rendering the module, reject the whole operation
	                reject(error);
	                return true;
	            }
	        });
	        return requestZone.run(function () { return platform.serializeModule(app_module_1.AppModule); }).then(function (html) {
	            resolve({ html: html });
	        }, reject);
	    });
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = default_1;


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("angular2-universal-polyfills");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("zone.js");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("@angular/core");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("angular2-universal");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(3);
	var angular2_universal_1 = __webpack_require__(4);
	var app_component_1 = __webpack_require__(6);
	var main_summary_component_1 = __webpack_require__(9);
	var AppModule = (function () {
	    function AppModule() {
	    }
	    return AppModule;
	}());
	AppModule = __decorate([
	    core_1.NgModule({
	        bootstrap: [main_summary_component_1.MainSummaryComponent],
	        declarations: [
	            app_component_1.AppComponent,
	            main_summary_component_1.MainSummaryComponent
	        ],
	        imports: [
	            angular2_universal_1.UniversalModule
	        ]
	    })
	], AppModule);
	exports.AppModule = AppModule;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(7);
	var AppComponent = (function () {
	    function AppComponent(_http) {
	        var _this = this;
	        this._http = _http;
	        this.notes = [];
	        this.comments = [];
	        // 게시판 리스트 5개 
	        _http.get("http://www.dotnetnote.com/api/NoteService/").subscribe(function (result) {
	            _this.notes = result.json();
	        });
	        // 댓글 리스트 5개
	        _http.get("http://www.dotnetnote.com/api/NoteCommentService/").subscribe(function (result) {
	            _this.comments = result.json();
	        });
	    }
	    return AppComponent;
	}());
	AppComponent = __decorate([
	    core_1.Component({
	        selector: 'app',
	        template: __webpack_require__(8)
	    }),
	    __metadata("design:paramtypes", [http_1.Http])
	], AppComponent);
	exports.AppComponent = AppComponent;


/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("@angular/http");

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "<!-- 여기 코드 블록은 Angular2와 ASP.NET Core를 사용하여 출력한 영역 -->\r\n<div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n        <h3 class=\"MainSummaryTitle\">\r\n            <a class=\"readMore\" href=\"/DotNetNote/Index\"\r\n               title=\"닷넷노트\">리스트</a>\r\n            <i class=\"fa fa-table\"></i>&nbsp;&nbsp;\r\n            <span class=\"sprite sprite_notice\">\r\n                최근 글 리스트\r\n                <i style=\"font-size:small;\">(with Web API + Angular2)</i>\r\n            </span>\r\n        </h3>\r\n        <div>\r\n            <div class=\"post_item\" *ngFor=\"let n of notes\">\r\n                <div class=\"post_item_text\">\r\n                    <span class=\"post_date\">\r\n                        {{ n.postDate.substring(0, 10) }}\r\n                    </span>\r\n                    <span class=\"post_title\">\r\n                        <a href=\"/DotNetNote/Details/{{ n.id }}\">\r\n                            {{ n.title.substring(0, 31) }}\r\n                        </a>\r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <h3 class=\"MainSummaryTitle\">\r\n            <a class=\"readMore\" href=\"/DotNetNote/Index\"\r\n               title=\"닷넷노트\">리스트</a>\r\n            <i class=\"fa fa-table\"></i>&nbsp;&nbsp;\r\n            <span class=\"sprite sprite_notice\">\r\n                최근 댓글 리스트\r\n                <i style=\"font-size:small;\">(with Web API + Angular2)</i>\r\n            </span>\r\n        </h3>\r\n        <div>\r\n            <div class=\"post_item\" *ngFor=\"let c of comments\">\r\n                <div class=\"post_item_text\">\r\n                    <span class=\"post_date\">\r\n                        {{ c.postDate.substring(0, 10)  }}\r\n                    </span>\r\n                    <span class=\"post_title\">\r\n                        <a href=\"/DotNetNote/Details/{{ c.boardId }}\">\r\n                            {{ c.opinion.substring(0, 31) }}\r\n                        </a>\r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(7);
	var MainSummaryComponent = (function () {
	    function MainSummaryComponent(_http) {
	        var _this = this;
	        this._http = _http;
	        this.notes = [];
	        this.comments = [];
	        // 게시판 리스트 5개 
	        _http.get("http://www.dotnetnote.com/api/NoteService/").subscribe(function (result) {
	            _this.notes = result.json();
	        });
	        // 댓글 리스트 5개
	        _http.get("http://www.dotnetnote.com/api/NoteCommentService/").subscribe(function (result) {
	            _this.comments = result.json();
	        });
	    }
	    return MainSummaryComponent;
	}());
	MainSummaryComponent = __decorate([
	    core_1.Component({
	        selector: 'main-summary',
	        template: __webpack_require__(10)
	    }),
	    __metadata("design:paramtypes", [http_1.Http])
	], MainSummaryComponent);
	exports.MainSummaryComponent = MainSummaryComponent;


/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "<!-- 여기 코드 블록은 Angular2와 ASP.NET Core를 사용하여 출력한 영역 -->\r\n<div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n        <h3 class=\"MainSummaryTitle\">\r\n            <a class=\"readMore\" href=\"/DotNetNote/Index\"\r\n               title=\"닷넷노트\">리스트</a>\r\n            <i class=\"fa fa-table\"></i>&nbsp;&nbsp;\r\n            <span class=\"sprite sprite_notice\">\r\n                최근 글 리스트\r\n                <i style=\"font-size:small;\">(with Web API + Angular2)</i>\r\n            </span>\r\n        </h3>\r\n        <div>\r\n            <div class=\"post_item\" *ngFor=\"let n of notes\">\r\n                <div class=\"post_item_text\">\r\n                    <span class=\"post_date\">\r\n                        {{ n.postDate.substring(0, 10) }}\r\n                    </span>\r\n                    <span class=\"post_title\">\r\n                        <a href=\"/DotNetNote/Details/{{ n.id }}\">\r\n                            {{ n.title.substring(0, 31) }}\r\n                        </a>\r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <h3 class=\"MainSummaryTitle\">\r\n            <a class=\"readMore\" href=\"/DotNetNote/Index\"\r\n               title=\"닷넷노트\">리스트</a>\r\n            <i class=\"fa fa-table\"></i>&nbsp;&nbsp;\r\n            <span class=\"sprite sprite_notice\">\r\n                최근 댓글 리스트\r\n                <i style=\"font-size:small;\">(with Web API + Angular2)</i>\r\n            </span>\r\n        </h3>\r\n        <div>\r\n            <div class=\"post_item\" *ngFor=\"let c of comments\">\r\n                <div class=\"post_item_text\">\r\n                    <span class=\"post_date\">\r\n                        {{ c.postDate.substring(0, 10)  }}\r\n                    </span>\r\n                    <span class=\"post_title\">\r\n                        <a href=\"/DotNetNote/Details/{{ c.boardId }}\">\r\n                            {{ c.opinion.substring(0, 31) }}\r\n                        </a>\r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgY2EyNGFmMzU1OTc5MGE0OTZkYmYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ6b25lLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvaHR0cFwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvbWFpbi1zdW1tYXJ5LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL21haW4tc3VtbWFyeS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUN0Q0Esd0JBQXNDO0FBQ3RDLHdCQUFpQjtBQUNqQixxQ0FBK0M7QUFDL0MsbURBQXlEO0FBQ3pELDJDQUE2QztBQUU3Qyxz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LHNYQUFzWCxNQUFNLGlJQUFpSSxpU0FBaVMsZ0NBQWdDLDhJQUE4SSxhQUFhLHFDQUFxQyw4QkFBOEIsOEo7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBNS9ELHFDQUEwQztBQUMxQyxxQ0FBd0U7QUFNeEUsS0FBYSxvQkFBb0I7S0FHN0IsOEJBQW9CLEtBQVc7U0FBL0IsaUJBU0M7U0FUbUIsVUFBSyxHQUFMLEtBQUssQ0FBTTtTQUYvQixVQUFLLEdBQUcsRUFBRSxDQUFDO1NBQ1gsYUFBUSxHQUFHLEVBQUUsQ0FBQztTQUVWLGNBQWM7U0FDZCxLQUFLLENBQUMsR0FBRyxDQUFDLDRDQUE0QyxDQUFDLENBQUMsU0FBUyxDQUFDLGdCQUFNO2FBQ3BFLEtBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQy9CLENBQUMsQ0FBQyxDQUFDO1NBQ0gsWUFBWTtTQUNaLEtBQUssQ0FBQyxHQUFHLENBQUMsbURBQW1ELENBQUMsQ0FBQyxTQUFTLENBQUMsZ0JBQU07YUFDM0UsS0FBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDbEMsQ0FBQyxDQUFDLENBQUM7S0FDUCxDQUFDO0tBQ0wsMkJBQUM7QUFBRCxFQUFDO0FBYlkscUJBQW9CO0tBSmhDLGdCQUFTLENBQUM7U0FDUCxRQUFRLEVBQUUsY0FBYztTQUN4QixRQUFRLEVBQUUsbUJBQU8sQ0FBQyxFQUErQixDQUFDO01BQ3JELENBQUM7c0NBSTZCLFdBQUk7SUFIdEIsb0JBQW9CLENBYWhDO0FBYlkscURBQW9COzs7Ozs7O0FDUGpDLHVVQUFzVSxNQUFNLGdJQUFnSSw4UkFBOFIsK0JBQStCLDhJQUE4SSxRQUFRLHFDQUFxQyw0QkFBNEIsc1hBQXNYLE1BQU0saUlBQWlJLGlTQUFpUyxnQ0FBZ0MsOElBQThJLGFBQWEscUNBQXFDLDhCQUE4Qiw4SiIsImZpbGUiOiJtYWluLXNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGNhMjRhZjM1NTk3OTBhNDk2ZGJmIiwiaW1wb3J0ICdhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzJztcbmltcG9ydCAnem9uZS5qcyc7XG5pbXBvcnQgeyBlbmFibGVQcm9kTW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcGxhdGZvcm1Ob2RlRHluYW1pYyB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC9hcHAubW9kdWxlJztcblxuZW5hYmxlUHJvZE1vZGUoKTtcbmNvbnN0IHBsYXRmb3JtID0gcGxhdGZvcm1Ob2RlRHluYW1pYygpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocGFyYW1zOiBhbnkpIDogUHJvbWlzZTx7IGh0bWw6IHN0cmluZywgZ2xvYmFscz86IGFueSB9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgcmVxdWVzdFpvbmUgPSBab25lLmN1cnJlbnQuZm9yayh7XG4gICAgICAgICAgICBuYW1lOiAnYW5ndWxhci11bml2ZXJzYWwgcmVxdWVzdCcsXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgICAgYmFzZVVybDogJy8nLFxuICAgICAgICAgICAgICAgIHJlcXVlc3RVcmw6IHBhcmFtcy51cmwsXG4gICAgICAgICAgICAgICAgb3JpZ2luVXJsOiBwYXJhbXMub3JpZ2luLFxuICAgICAgICAgICAgICAgIHByZWJvb3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgIC8vIFRPRE86IFJlbmRlciBqdXN0IHRoZSA8YXBwPiBjb21wb25lbnQgaW5zdGVhZCBvZiB3cmFwcGluZyBpdCBpbnNpZGUgYW4gZXh0cmEgSFRNTCBkb2N1bWVudFxuICAgICAgICAgICAgICAgIC8vIFdhaXRpbmcgb24gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvdW5pdmVyc2FsL2lzc3Vlcy8zNDdcbiAgICAgICAgICAgICAgICBkb2N1bWVudDogJzwhRE9DVFlQRSBodG1sPjxodG1sPjxoZWFkPjwvaGVhZD48Ym9keT48bWFpbi1zdW1tYXJ5PjwvbWFpbi1zdW1tYXJ5PjwvYm9keT48L2h0bWw+J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uSGFuZGxlRXJyb3I6IChwYXJlbnRab25lLCBjdXJyZW50Wm9uZSwgdGFyZ2V0Wm9uZSwgZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBJZiBhbnkgZXJyb3Igb2NjdXJzIHdoaWxlIHJlbmRlcmluZyB0aGUgbW9kdWxlLCByZWplY3QgdGhlIHdob2xlIG9wZXJhdGlvblxuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXF1ZXN0Wm9uZS5ydW48UHJvbWlzZTxzdHJpbmc+PigoKSA9PiBwbGF0Zm9ybS5zZXJpYWxpemVNb2R1bGUoQXBwTW9kdWxlKSkudGhlbihodG1sID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoeyBodG1sOiBodG1sIH0pO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgIH0pO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxsc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ6b25lLmpzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiem9uZS5qc1wiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItdW5pdmVyc2FsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBVbml2ZXJzYWxNb2R1bGUgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50JztcbmltcG9ydCB7IE1haW5TdW1tYXJ5Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2FwcC9tYWluLXN1bW1hcnkuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFsgTWFpblN1bW1hcnlDb21wb25lbnQgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBNYWluU3VtbWFyeUNvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBVbml2ZXJzYWxNb2R1bGUgICAgICAgIFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvYXBwLm1vZHVsZS50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSwgUmVxdWVzdE9wdGlvbnMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHAnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vYXBwLmNvbXBvbmVudC5odG1sJylcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XHJcbiAgICBub3RlcyA9IFtdO1xyXG4gICAgY29tbWVudHMgPSBbXTsgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwKSB7XHJcbiAgICAgICAgLy8g6rKM7Iuc7YyQIOumrOyKpO2KuCA16rCcIFxyXG4gICAgICAgIF9odHRwLmdldChcImh0dHA6Ly93d3cuZG90bmV0bm90ZS5jb20vYXBpL05vdGVTZXJ2aWNlL1wiKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ub3RlcyA9IHJlc3VsdC5qc29uKCk7IFxyXG4gICAgICAgIH0pOyBcclxuICAgICAgICAvLyDrjJPquIAg66as7Iqk7Yq4IDXqsJxcclxuICAgICAgICBfaHR0cC5nZXQoXCJodHRwOi8vd3d3LmRvdG5ldG5vdGUuY29tL2FwaS9Ob3RlQ29tbWVudFNlcnZpY2UvXCIpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbW1lbnRzID0gcmVzdWx0Lmpzb24oKTsgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9ICAgIFxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2h0dHBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9odHRwXCJcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjwhLS0g7Jes6riwIOy9lOuTnCDruJTroZ3snYAgQW5ndWxhcjLsmYAgQVNQLk5FVCBDb3Jl66W8IOyCrOyaqe2VmOyXrCDstpzroKXtlZwg7JiB7JetIC0tPlxcclxcbjxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC02XFxcIj5cXHJcXG4gICAgICAgIDxoMyBjbGFzcz1cXFwiTWFpblN1bW1hcnlUaXRsZVxcXCI+XFxyXFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcInJlYWRNb3JlXFxcIiBocmVmPVxcXCIvRG90TmV0Tm90ZS9JbmRleFxcXCJcXHJcXG4gICAgICAgICAgICAgICB0aXRsZT1cXFwi64u364S364W47Yq4XFxcIj7rpqzsiqTtirg8L2E+XFxyXFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXRhYmxlXFxcIj48L2k+Jm5ic3A7Jm5ic3A7XFxyXFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInNwcml0ZSBzcHJpdGVfbm90aWNlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAg7LWc6re8IOq4gCDrpqzsiqTtirhcXHJcXG4gICAgICAgICAgICAgICAgPGkgc3R5bGU9XFxcImZvbnQtc2l6ZTpzbWFsbDtcXFwiPih3aXRoIFdlYiBBUEkgKyBBbmd1bGFyMik8L2k+XFxyXFxuICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgPC9oMz5cXHJcXG4gICAgICAgIDxkaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicG9zdF9pdGVtXFxcIiAqbmdGb3I9XFxcImxldCBuIG9mIG5vdGVzXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicG9zdF9pdGVtX3RleHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInBvc3RfZGF0ZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAge3sgbi5wb3N0RGF0ZS5zdWJzdHJpbmcoMCwgMTApIH19XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwicG9zdF90aXRsZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiL0RvdE5ldE5vdGUvRGV0YWlscy97eyBuLmlkIH19XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgbi50aXRsZS5zdWJzdHJpbmcoMCwgMzEpIH19XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTZcXFwiPlxcclxcbiAgICAgICAgPGgzIGNsYXNzPVxcXCJNYWluU3VtbWFyeVRpdGxlXFxcIj5cXHJcXG4gICAgICAgICAgICA8YSBjbGFzcz1cXFwicmVhZE1vcmVcXFwiIGhyZWY9XFxcIi9Eb3ROZXROb3RlL0luZGV4XFxcIlxcclxcbiAgICAgICAgICAgICAgIHRpdGxlPVxcXCLri7frhLfrhbjtirhcXFwiPuumrOyKpO2KuDwvYT5cXHJcXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtdGFibGVcXFwiPjwvaT4mbmJzcDsmbmJzcDtcXHJcXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwic3ByaXRlIHNwcml0ZV9ub3RpY2VcXFwiPlxcclxcbiAgICAgICAgICAgICAgICDstZzqt7wg64yT6riAIOumrOyKpO2KuFxcclxcbiAgICAgICAgICAgICAgICA8aSBzdHlsZT1cXFwiZm9udC1zaXplOnNtYWxsO1xcXCI+KHdpdGggV2ViIEFQSSArIEFuZ3VsYXIyKTwvaT5cXHJcXG4gICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICA8L2gzPlxcclxcbiAgICAgICAgPGRpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwb3N0X2l0ZW1cXFwiICpuZ0Zvcj1cXFwibGV0IGMgb2YgY29tbWVudHNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwb3N0X2l0ZW1fdGV4dFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwicG9zdF9kYXRlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBjLnBvc3REYXRlLnN1YnN0cmluZygwLCAxMCkgIH19XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwicG9zdF90aXRsZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiL0RvdE5ldE5vdGUvRGV0YWlscy97eyBjLmJvYXJkSWQgfX1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBjLm9waW5pb24uc3Vic3RyaW5nKDAsIDMxKSB9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSwgUmVxdWVzdE9wdGlvbnMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdtYWluLXN1bW1hcnknLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbWFpbi1zdW1tYXJ5LmNvbXBvbmVudC5odG1sJylcclxufSlcclxuZXhwb3J0IGNsYXNzIE1haW5TdW1tYXJ5Q29tcG9uZW50IHtcclxuICAgIG5vdGVzID0gW107XHJcbiAgICBjb21tZW50cyA9IFtdO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCkge1xyXG4gICAgICAgIC8vIOqyjOyLnO2MkCDrpqzsiqTtirggNeqwnCBcclxuICAgICAgICBfaHR0cC5nZXQoXCJodHRwOi8vd3d3LmRvdG5ldG5vdGUuY29tL2FwaS9Ob3RlU2VydmljZS9cIikuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubm90ZXMgPSByZXN1bHQuanNvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIOuMk+q4gCDrpqzsiqTtirggNeqwnFxyXG4gICAgICAgIF9odHRwLmdldChcImh0dHA6Ly93d3cuZG90bmV0bm90ZS5jb20vYXBpL05vdGVDb21tZW50U2VydmljZS9cIikuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tbWVudHMgPSByZXN1bHQuanNvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvbWFpbi1zdW1tYXJ5LmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8IS0tIOyXrOq4sCDsvZTrk5wg67iU66Gd7J2AIEFuZ3VsYXIy7JmAIEFTUC5ORVQgQ29yZeulvCDsgqzsmqntlZjsl6wg7Lac66Cl7ZWcIOyYgeyXrSAtLT5cXHJcXG48ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNlxcXCI+XFxyXFxuICAgICAgICA8aDMgY2xhc3M9XFxcIk1haW5TdW1tYXJ5VGl0bGVcXFwiPlxcclxcbiAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJyZWFkTW9yZVxcXCIgaHJlZj1cXFwiL0RvdE5ldE5vdGUvSW5kZXhcXFwiXFxyXFxuICAgICAgICAgICAgICAgdGl0bGU9XFxcIuuLt+uEt+uFuO2KuFxcXCI+66as7Iqk7Yq4PC9hPlxcclxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS10YWJsZVxcXCI+PC9pPiZuYnNwOyZuYnNwO1xcclxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJzcHJpdGUgc3ByaXRlX25vdGljZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIOy1nOq3vCDquIAg66as7Iqk7Yq4XFxyXFxuICAgICAgICAgICAgICAgIDxpIHN0eWxlPVxcXCJmb250LXNpemU6c21hbGw7XFxcIj4od2l0aCBXZWIgQVBJICsgQW5ndWxhcjIpPC9pPlxcclxcbiAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgIDwvaDM+XFxyXFxuICAgICAgICA8ZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBvc3RfaXRlbVxcXCIgKm5nRm9yPVxcXCJsZXQgbiBvZiBub3Rlc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBvc3RfaXRlbV90ZXh0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJwb3N0X2RhdGVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IG4ucG9zdERhdGUuc3Vic3RyaW5nKDAsIDEwKSB9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInBvc3RfdGl0bGVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XFxcIi9Eb3ROZXROb3RlL0RldGFpbHMve3sgbi5pZCB9fVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IG4udGl0bGUuc3Vic3RyaW5nKDAsIDMxKSB9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC02XFxcIj5cXHJcXG4gICAgICAgIDxoMyBjbGFzcz1cXFwiTWFpblN1bW1hcnlUaXRsZVxcXCI+XFxyXFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcInJlYWRNb3JlXFxcIiBocmVmPVxcXCIvRG90TmV0Tm90ZS9JbmRleFxcXCJcXHJcXG4gICAgICAgICAgICAgICB0aXRsZT1cXFwi64u364S364W47Yq4XFxcIj7rpqzsiqTtirg8L2E+XFxyXFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXRhYmxlXFxcIj48L2k+Jm5ic3A7Jm5ic3A7XFxyXFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInNwcml0ZSBzcHJpdGVfbm90aWNlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAg7LWc6re8IOuMk+q4gCDrpqzsiqTtirhcXHJcXG4gICAgICAgICAgICAgICAgPGkgc3R5bGU9XFxcImZvbnQtc2l6ZTpzbWFsbDtcXFwiPih3aXRoIFdlYiBBUEkgKyBBbmd1bGFyMik8L2k+XFxyXFxuICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgPC9oMz5cXHJcXG4gICAgICAgIDxkaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicG9zdF9pdGVtXFxcIiAqbmdGb3I9XFxcImxldCBjIG9mIGNvbW1lbnRzXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicG9zdF9pdGVtX3RleHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInBvc3RfZGF0ZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAge3sgYy5wb3N0RGF0ZS5zdWJzdHJpbmcoMCwgMTApICB9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInBvc3RfdGl0bGVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XFxcIi9Eb3ROZXROb3RlL0RldGFpbHMve3sgYy5ib2FyZElkIH19XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgYy5vcGluaW9uLnN1YnN0cmluZygwLCAzMSkgfX1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL21haW4tc3VtbWFyeS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==