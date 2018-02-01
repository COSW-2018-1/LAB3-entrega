webpackJsonp(["main"],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse\">\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n  <a class=\"navbar-brand\" href=\"#\">COSW Angular4</a>\n  <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n    <ul *ngIf=\"!isLoggedIn()\" class=\"navbar-nav mr-auto\">\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"/\" routerLink=\"/\">Home</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"/tasks\" routerLink=\"/tasks\">Tasks</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"/edit\" routerLink=\"/edit\">Edit</a>\n\t  </li>\n\t  <li *ngIf=\"isLoggedIn()\" class=\"nav-item\">\n\t\t<a href=\"#\" class=\"nav-link\" (click)=\"signOut()\">(Sign Out)</a>\n\t  </li>\n\t  \n    </ul>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_auth_service__ = __webpack_require__("../../../../../src/app/common/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
    function AppComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.title = 'app';
        if (!this.authService.isLoggedIn()) {
            this.router.navigate(['/']);
        }
    }
    AppComponent.prototype.isLoggedIn = function () {
        return this.authService.isLoggedIn();
    };
    AppComponent.prototype.signOut = function () {
        this.authService.signOut();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__common_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__common_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_todo_service__ = __webpack_require__("../../../../../src/app/services/todo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_config_app_configuration_service__ = __webpack_require__("../../../../../src/app/common/config/app-configuration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_config_initial_config__ = __webpack_require__("../../../../../src/app/common/config/initial-config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_page_home_page_component__ = __webpack_require__("../../../../../src/app/pages/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_task_list_page_task_list_page_component__ = __webpack_require__("../../../../../src/app/pages/task-list-page/task-list-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_task_edit_page_task_edit_page_component__ = __webpack_require__("../../../../../src/app/pages/task-edit-page/task-edit-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/pages/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__common_auth_service__ = __webpack_require__("../../../../../src/app/common/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_sign_in_sign_in_page_component__ = __webpack_require__("../../../../../src/app/pages/sign-in/sign-in-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__common_app_data_service__ = __webpack_require__("../../../../../src/app/common/app-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_15__pages_sign_in_sign_in_page_component__["a" /* SignInPageComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_8__pages_home_page_home_page_component__["a" /* HomePageComponent */] },
    {
        path: 'tasks', component: __WEBPACK_IMPORTED_MODULE_9__pages_task_list_page_task_list_page_component__["a" /* TaskListPageComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_14__common_auth_service__["a" /* AuthService */]],
    },
    {
        path: 'edit', component: __WEBPACK_IMPORTED_MODULE_10__pages_task_edit_page_task_edit_page_component__["a" /* TaskEditPageComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_14__common_auth_service__["a" /* AuthService */]],
    },
    {
        path: '**', component: __WEBPACK_IMPORTED_MODULE_11__pages_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */]
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_page_home_page_component__["a" /* HomePageComponent */],
            __WEBPACK_IMPORTED_MODULE_9__pages_task_list_page_task_list_page_component__["a" /* TaskListPageComponent */],
            __WEBPACK_IMPORTED_MODULE_10__pages_task_edit_page_task_edit_page_component__["a" /* TaskEditPageComponent */],
            __WEBPACK_IMPORTED_MODULE_11__pages_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_15__pages_sign_in_sign_in_page_component__["a" /* SignInPageComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_12__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(ROUTES),
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_http__["c" /* HttpModule */]
        ],
        providers: [
            {
                provide: __WEBPACK_IMPORTED_MODULE_7__common_config_initial_config__["a" /* INITIAL_CONFIG */],
                useValue: {
                    apiURL: 'http://localhost:8080'
                }
            },
            __WEBPACK_IMPORTED_MODULE_4__services_todo_service__["a" /* TodoService */],
            __WEBPACK_IMPORTED_MODULE_6__common_config_app_configuration_service__["a" /* AppConfiguration */],
            __WEBPACK_IMPORTED_MODULE_14__common_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_16__common_app_data_service__["a" /* AppDataService */],
            __WEBPACK_IMPORTED_MODULE_17__services_users_service__["a" /* UsersService */],
            __WEBPACK_IMPORTED_MODULE_13__angular_http__["c" /* HttpModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/common/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APIService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_config_app_configuration_service__ = __webpack_require__("../../../../../src/app/common/config/app-configuration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_auth_service__ = __webpack_require__("../../../../../src/app/common/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var APIService = (function () {
    function APIService(config, authService, http) {
        this.config = config;
        this.authService = authService;
        this.http = http;
    }
    APIService.prototype.get = function (url, options) {
        return this.http
            .get(this.config.apiURL + "/" + url, this.getRequestOptions(options))
            .map(this.extractData)
            .catch(this.handleError);
    };
    APIService.prototype.post = function (url, body, options) {
        return this.http
            .post(this.config.apiURL + "/" + url, body, this.getRequestOptions(options))
            .map(this.extractData)
            .catch(this.handleError);
    };
    APIService.prototype.getRequestOptions = function (options) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var innerOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        if (!options || options.credentials === undefined || options.credentials === true) {
            headers.append('Authorization', 'Bearer ' + this.authService.accessToken);
        }
        return innerOptions;
    };
    APIService.prototype.extractData = function (res) {
        return res.json();
    };
    APIService.prototype.handleError = function (error) {
        var errObj;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Response */]) {
            var body = error.json();
            errObj = body;
        }
        else {
            errObj = error.message ? { message: error.message } : { message: error };
        }
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(errObj);
    };
    return APIService;
}());
APIService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__common_config_app_configuration_service__["a" /* AppConfiguration */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_config_app_configuration_service__["a" /* AppConfiguration */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__common_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _c || Object])
], APIService);

var _a, _b, _c;
//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ "../../../../../src/app/common/app-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppDataService = (function () {
    function AppDataService() {
        this._accessToken = null;
    }
    Object.defineProperty(AppDataService.prototype, "accessToken", {
        get: function () {
            if (!this._accessToken) {
                this._accessToken = localStorage.getItem('AT');
            }
            return this._accessToken;
        },
        set: function (accessToken) {
            this._accessToken = accessToken;
            localStorage.setItem('AT', accessToken);
        },
        enumerable: true,
        configurable: true
    });
    AppDataService.prototype.removeAccessToken = function () {
        this._accessToken = null;
        localStorage.removeItem('AT');
    };
    return AppDataService;
}());
AppDataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], AppDataService);

//# sourceMappingURL=app-data.service.js.map

/***/ }),

/***/ "../../../../../src/app/common/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_app_data_service__ = __webpack_require__("../../../../../src/app/common/app-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(router, appData) {
        this.router = router;
        this.appData = appData;
    }
    Object.defineProperty(AuthService.prototype, "accessToken", {
        get: function () {
            return this.appData.accessToken;
        },
        set: function (accessToken) {
            this.appData.accessToken = accessToken;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.isLoggedIn = function () {
        return this.appData.accessToken != null && this.appData.accessToken !== undefined;
    };
    AuthService.prototype.signOut = function () {
        this.appData.removeAccessToken();
        this.router.navigate(['']);
    };
    AuthService.prototype.canActivate = function () {
        if (!this.isLoggedIn()) {
            this.router.navigate(['']);
            return false;
        }
        return true;
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__common_app_data_service__["a" /* AppDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_app_data_service__["a" /* AppDataService */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/common/config/app-configuration.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfiguration; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_interface__ = __webpack_require__("../../../../../src/app/common/config/config.interface.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__config_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__initial_config__ = __webpack_require__("../../../../../src/app/common/config/initial-config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var AppConfiguration = (function () {
    function AppConfiguration(initialConfig) {
        this.config = initialConfig;
    }
    Object.defineProperty(AppConfiguration.prototype, "apiURL", {
        get: function () {
            return this.config && this.config.apiURL;
        },
        enumerable: true,
        configurable: true
    });
    return AppConfiguration;
}());
AppConfiguration = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__initial_config__["a" /* INITIAL_CONFIG */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__config_interface__["IConfig"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__config_interface__["IConfig"]) === "function" && _a || Object])
], AppConfiguration);

var _a;
//# sourceMappingURL=app-configuration.service.js.map

/***/ }),

/***/ "../../../../../src/app/common/config/config.interface.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=config.interface.js.map

/***/ }),

/***/ "../../../../../src/app/common/config/initial-config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return INITIAL_CONFIG; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");

var INITIAL_CONFIG = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* InjectionToken */]('app.config');
//# sourceMappingURL=initial-config.js.map

/***/ }),

/***/ "../../../../../src/app/models/todo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Todo; });
var Todo = (function () {
    function Todo(description, priority, completed) {
        if (priority === void 0) { priority = 1; }
        if (completed === void 0) { completed = false; }
        this.description = description;
        this.completed = completed;
        this.priority = priority;
    }
    return Todo;
}());

//# sourceMappingURL=todo.js.map

/***/ }),

/***/ "../../../../../src/app/pages/home-page/home-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/home-page/home-page.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  Welcome to COSW angular seed\n</p>"

/***/ }),

/***/ "../../../../../src/app/pages/home-page/home-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomePageComponent = (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    return HomePageComponent;
}());
HomePageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home-page',
        template: __webpack_require__("../../../../../src/app/pages/home-page/home-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/home-page/home-page.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomePageComponent);

//# sourceMappingURL=home-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  The page you were looking for was not found\n</p>\n<p>\n  <a routerLink=\"/\">Back to Home</a>\n</p>"

/***/ }),

/***/ "../../../../../src/app/pages/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-not-found',
        template: __webpack_require__("../../../../../src/app/pages/page-not-found/page-not-found.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/page-not-found/page-not-found.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);

//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/sign-in/sign-in-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\t<h2>Sign In</h2>\r\n\t<form [formGroup]=\"signInForm\" (ngSubmit)=\"doLogin()\" novalidate>\r\n\t  <div class=\"form-group\">\r\n\t\t<label for=\"description\">Username</label>\r\n\t\t<input type=\"text\" class=\"form-control\" id=\"description\" formControlName=\"username\" required>\r\n\t  </div>\r\n  \r\n\t  <div class=\"form-group\">\r\n\t\t<label for=\"priority\">Password</label>\r\n\t\t<input type=\"password\" class=\"form-control\" id=\"alterEgo\" formControlName=\"password\">\r\n\t  </div>\r\n  \r\n\t  <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!signInForm.valid\">Sign In</button>\r\n  \r\n\t  <p class=\"text-danger mt-1\" *ngIf=\"loginError\">{{loginError}}</p>\r\n  \r\n\t</form>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/pages/sign-in/sign-in-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignInPageComponent = (function () {
    function SignInPageComponent(loginError, formBuilder, router, usersService) {
        this.loginError = loginError;
        this.formBuilder = formBuilder;
        this.router = router;
        this.usersService = usersService;
    }
    SignInPageComponent.prototype.ngOnInit = function () {
        this.signInForm = this.formBuilder.group({
            username: '',
            password: ''
        });
    };
    SignInPageComponent.prototype.doLogin = function () {
        var _this = this;
        this.usersService.login(this.signInForm.get('username').value, this.signInForm.get('password').value).subscribe(function (loginResponse) {
            _this.router.navigate(['tasks']);
        }, function (error) {
            _this.loginError = 'Error Signing in: ' + (error && error.message ? error.message : '');
        });
    };
    return SignInPageComponent;
}());
SignInPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-sing-in-page',
        template: __webpack_require__("../../../../../src/app/pages/sign-in/sign-in-page.component.html")
    }),
    __metadata("design:paramtypes", [String, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */]) === "function" && _c || Object])
], SignInPageComponent);

var _a, _b, _c;
//# sourceMappingURL=sign-in-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/task-edit-page/task-edit-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/task-edit-page/task-edit-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<h2>Edit Task</h2>\n\t<form [formGroup]=\"todoForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n\t  <div class=\"form-group\">\n\t\t<label for=\"description\">Description</label>\n\t\t<input type=\"text\" class=\"form-control\" id=\"description\" formControlName=\"description\" required>\n\t  </div>\n  \n\t  <div class=\"form-group\">\n\t\t<label for=\"priority\">Priority</label>\n\t\t<input type=\"number\" class=\"form-control\" id=\"alterEgo\" formControlName=\"priority\">\n\t  </div>\n  \n\t  <div class=\"form-group\">\n\t\t<label for=\"completed\">Completed</label>\n\t\t<input type=\"checkbox\" class=\"form-control\" id=\"completed\" formControlName=\"completed\">\n\t  </div>\n  \n\t  <button type=\"submit\" class=\"btn btn-success\">Save</button>\n  \n\t</form>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/pages/task-edit-page/task-edit-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskEditPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_todo_service__ = __webpack_require__("../../../../../src/app/services/todo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TaskEditPageComponent = (function () {
    function TaskEditPageComponent(todoService, formBuilder, router) {
        this.todoService = todoService;
        this.formBuilder = formBuilder;
        this.router = router;
    }
    TaskEditPageComponent.prototype.ngOnInit = function () {
        this.todoForm = this.formBuilder.group({
            description: '',
            completed: '',
            priority: ''
        });
    };
    TaskEditPageComponent.prototype.onSubmit = function () {
        var _this = this;
        this.todoService.create(this.todoForm.get('description').value, this.todoForm.get('priority').value, Boolean(this.todoForm.get('completed').value)).subscribe(function (serverResponse) {
            _this.router.navigate(['/tasks']);
        }, function (error) {
            console.log(error);
        });
        this.router.navigate(['/tasks']);
    };
    return TaskEditPageComponent;
}());
TaskEditPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-task-edit-page',
        template: __webpack_require__("../../../../../src/app/pages/task-edit-page/task-edit-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/task-edit-page/task-edit-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_todo_service__["a" /* TodoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_todo_service__["a" /* TodoService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object])
], TaskEditPageComponent);

var _a, _b, _c;
//# sourceMappingURL=task-edit-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/task-list-page/task-list-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/task-list-page/task-list-page.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Tasks</h2>\n<table class=\"table table-bordered\">\n <thead>\n   <tr>\n     <th>Description</th>\n     <th>Priority</th>\n     <th>Completed</th>\n   </tr>\n </thead>\n <tr *ngFor=\"let todo of todos\">\n   <td>{{todo.description}}</td>\n   <td>{{todo.priority}}</td>\n   <td>{{todo.completed}}</td>\n </tr>\n</table>"

/***/ }),

/***/ "../../../../../src/app/pages/task-list-page/task-list-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskListPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_todo_service__ = __webpack_require__("../../../../../src/app/services/todo.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TaskListPageComponent = (function () {
    function TaskListPageComponent(todoService) {
        this.todoService = todoService;
        this.todos = [];
    }
    TaskListPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.todoService.list().subscribe(function (todosResponse) {
            _this.todos = todosResponse;
        });
    };
    return TaskListPageComponent;
}());
TaskListPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-task-list-page',
        template: __webpack_require__("../../../../../src/app/pages/task-list-page/task-list-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/task-list-page/task-list-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_todo_service__["a" /* TodoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_todo_service__["a" /* TodoService */]) === "function" && _a || Object])
], TaskListPageComponent);

var _a;
//# sourceMappingURL=task-list-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/todo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_todo__ = __webpack_require__("../../../../../src/app/models/todo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_api_service__ = __webpack_require__("../../../../../src/app/common/api.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TodoService = (function (_super) {
    __extends(TodoService, _super);
    function TodoService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resourceUrl = 'api/todo';
        _this.todos = [
            new __WEBPACK_IMPORTED_MODULE_1__models_todo__["a" /* Todo */]('todo 1'),
            new __WEBPACK_IMPORTED_MODULE_1__models_todo__["a" /* Todo */]('todo 2', 1, true),
            new __WEBPACK_IMPORTED_MODULE_1__models_todo__["a" /* Todo */]('todo 3')
        ];
        return _this;
        /*
          list(): Todo[] {
            return this.todos;
        }
        */
    }
    TodoService.prototype.create = function (description, priority, completed) {
        //this.todos.push(new Todo(description, priority, completed));
        return this.post(this.resourceUrl, new __WEBPACK_IMPORTED_MODULE_1__models_todo__["a" /* Todo */](description, priority, completed));
    };
    TodoService.prototype.list = function () {
        return this.get(this.resourceUrl);
    };
    return TodoService;
}(__WEBPACK_IMPORTED_MODULE_2__common_api_service__["a" /* APIService */]));
TodoService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], TodoService);

//# sourceMappingURL=todo.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_config_app_configuration_service__ = __webpack_require__("../../../../../src/app/common/config/app-configuration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_auth_service__ = __webpack_require__("../../../../../src/app/common/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_api_service__ = __webpack_require__("../../../../../src/app/common/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UsersService = (function (_super) {
    __extends(UsersService, _super);
    function UsersService(config, authService, http) {
        var _this = _super.call(this, config, authService, http) || this;
        _this.config = config;
        _this.authService = authService;
        _this.http = http;
        return _this;
    }
    UsersService.prototype.login = function (username, password) {
        var _this = this;
        return this.post('user/login', { username: username, password: password }, { credentials: false }).map(function (loginResponse) {
            if (loginResponse) {
                _this.authService.accessToken = loginResponse.accessToken;
            }
        });
    };
    return UsersService;
}(__WEBPACK_IMPORTED_MODULE_3__common_api_service__["a" /* APIService */]));
UsersService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__common_config_app_configuration_service__["a" /* AppConfiguration */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__common_config_app_configuration_service__["a" /* AppConfiguration */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__common_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__common_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _c || Object])
], UsersService);

var _a, _b, _c;
//# sourceMappingURL=users.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map