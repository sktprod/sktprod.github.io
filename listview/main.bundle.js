webpackJsonp([0,3],{

/***/ 338:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 338;


/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(449);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=D:/workspace/listview/src/main.js.map

/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.data = {
            "ZIP_FILE_NAME": "DeployConfig.zip",
            "ZIP_ENTRIES": {
                "ITEM_NAME": "DeployConfig",
                "ITEM_TYPE": "FOLDER",
                "CHILD": [
                    {
                        "ITEM_NAME": "ActiveQAMode.bat",
                        "ITEM_TYPE": "FILE"
                    }, {
                        "ITEM_NAME": "ActiveRealMode.bat",
                        "ITEM_TYPE": "FILE"
                    }, {
                        "ITEM_NAME": "test.jpg",
                        "ITEM_TYPE": "FILE"
                    }, {
                        "ITEM_NAME": "subfolder",
                        "ITEM_TYPE": "FOLDER",
                        "CHILD": [{
                                "ITEM_NAME": "my.gif",
                                "ITEM_TYPE": "FILE"
                            }, {
                                "ITEM_NAME": "subsubfolder",
                                "ITEM_TYPE": "FOLDER",
                                "CHILD": [
                                    {
                                        "ITEM_NAME": "22322.txt",
                                        "ITEM_TYPE": "FILE"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        };
        this.title = "";
        this.count = 0;
        this.parent = null;
        this.title = this.data.ZIP_FILE_NAME;
        this.count = this.data.ZIP_ENTRIES.CHILD.length;
        this.entries = this.data.ZIP_ENTRIES.CHILD;
    }
    AppComponent.prototype.onClick = function (selectedFolderName) {
        for (var _i = 0, _a = this.entries; _i < _a.length; _i++) {
            var entry = _a[_i];
            if (entry.ITEM_NAME == selectedFolderName) {
                var temp = this.entries;
                this.parent = temp;
                this.entries = entry.CHILD;
                this.count = this.entries.length;
                this.entries["PARENT"] = temp;
                break;
            }
        }
    };
    AppComponent.prototype.onBack = function () {
        if (this.entries["PARENT"] == undefined)
            return;
        this.entries = this.entries["PARENT"];
        this.count = this.entries.length;
        this.parent = this.entries["PARENT"];
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(605),
            styles: [__webpack_require__(604)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=D:/workspace/listview/src/app.component.js.map

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(448);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=D:/workspace/listview/src/app.module.js.map

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=D:/workspace/listview/src/environment.js.map

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(617);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=D:/workspace/listview/src/polyfills.js.map

/***/ }),

/***/ 604:
/***/ (function(module, exports) {

module.exports = "BODY {\r\n  background-color: black;\r\n}\r\n\r\n.box {\r\n  padding: 20px;\r\n  border-radius: 20px;\r\n  box-shadow: 0 4px 15px 2px rgba(0,0,0,0.35);\r\n  background-color: white;\r\n}\r\n\r\n.wrap {\r\n  margin: 0 20px 0 20px;\r\n}\r\n\r\n.title-box {\r\n  position: relative;  \r\n}\r\n\r\n.title {\r\n  height: 48px;\r\n  border-bottom: 1px solid #cececf;\r\n  margin: 0 20px 0 20px;  \r\n}\r\n\r\n.back {\r\n  position: absolute;\r\n  top: 10px;\r\n  left: 0;\r\n  width: 21px;\r\n  height: 21px;\r\n  background: #ffffff url(https://ssl.gstatic.com/docs/common/viewer/v3/v-sprite6.svg) no-repeat 0 -1760px;\r\n}\r\n\r\n.back:hover {\r\n  background-color: #dddddd;\r\n  cursor: pointer;\r\n}\r\n\r\n.title-large {\r\n  margin: 0 10px 0 10px;\r\n  font-size: 24px;\r\n  font-family: Roboto, arial, sans-serif;\r\n}\r\n\r\n.title-small {\r\n  font-size: 16px;\r\n  font-family: Roboto, arial, sans-serif;\r\n}\r\n\r\n.row-container {\r\n  height: 152px;\r\n  overflow-y: auto;\r\n}\r\n\r\n.row {\r\n  height: 38px;\r\n  position: relative;\r\n  border-bottom: 1px solid #cececf;\r\n}\r\n\r\n.row:hover {\r\n  background-color: #dddddd;\r\n}\r\n\r\n.folder_row:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.icon {\r\n  margin-top: 11px;\r\n  margin-left: 10px;\r\n  width: 16px;\r\n  height: 16px;\r\n  position: absolute;\r\n  background-image: url(https://drive-thirdparty.googleusercontent.com/16/type/application/x-msdos-program);\r\n  background-position: left top;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.folder {\r\n  background-image: url(https://ssl.gstatic.com/docs/doclist/images/mediatype/icon_1_folder_x16.png);\r\n  background-position: left top;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.content {\r\n  margin-left: 36px;\r\n  line-height: 38px;\r\n  font-family: Roboto, arial, sans-serif;\r\n  font-size: 14px;\r\n}\r\n"

/***/ }),

/***/ 605:
/***/ (function(module, exports) {

module.exports = "<div class=\"box\">\n  <div class=\"title-box\">\n    <div class=\"title\">\n      <span class=\"title-large\">{{title}}</span>\n      <span class=\"title-small\">항목 {{count}}개</span>\n    </div>\n    <div *ngIf=\"(parent != null)\" class=\"back\" (click)=\"onBack()\"></div>\n  </div>\n  <div class=\"wrap\">\n    <div *ngFor=\"let entry of entries\" class=\"row\" [ngClass]=\"entry.ITEM_TYPE === 'FOLDER' ? 'folder_row' : ''\">\n      <div class=\"icon\" [ngClass]=\"entry.ITEM_TYPE === 'FOLDER' ? 'folder' : ''\"></div>\n      <div class=\"content\" *ngIf=\"entry.ITEM_TYPE === 'FILE'\">{{entry.ITEM_NAME}}</div>\n      <div class=\"content\" *ngIf=\"entry.ITEM_TYPE === 'FOLDER'\" (click)=\"onClick($event.target.innerText)\">{{entry.ITEM_NAME}}</div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 618:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(339);


/***/ })

},[618]);
//# sourceMappingURL=main.bundle.map