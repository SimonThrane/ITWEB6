webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sidenav {\r\n  padding: 0;\r\n  height: 100vh;\r\n  background-color: rgba(125, 163, 177, 0.32);\r\n}\r\n.maincontent {\r\n  padding: 0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-top-bar></app-top-bar>\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <app-navbar class=\"col-md-2 sidenav d-none d-sm-block\"></app-navbar>\r\n    <app-main-content class=\"col-md-10 col-xs-12 maincontent\"></app-main-content>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fitness_service__ = __webpack_require__("../../../../../src/app/fitness.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__fitness_service__["a" /* FitnessService */]]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__main_content_main_content_component__ = __webpack_require__("../../../../../src/app/main-content/main-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__fitness_service__ = __webpack_require__("../../../../../src/app/fitness.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__top_bar_top_bar_component__ = __webpack_require__("../../../../../src/app/top-bar/top-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__is_logged_in_guard__ = __webpack_require__("../../../../../src/app/is-logged-in.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__programs_programs_component__ = __webpack_require__("../../../../../src/app/programs/programs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__single_program_single_program_component__ = __webpack_require__("../../../../../src/app/single-program/single-program.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__exercises_exercises_component__ = __webpack_require__("../../../../../src/app/exercises/exercises.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__log_activity_log_activity_component__ = __webpack_require__("../../../../../src/app/log-activity/log-activity.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var appRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */] },
    { path: 'programs', component: __WEBPACK_IMPORTED_MODULE_16__programs_programs_component__["a" /* ProgramsComponent */] },
    { path: 'exercises', component: __WEBPACK_IMPORTED_MODULE_18__exercises_exercises_component__["a" /* ExercisesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__is_logged_in_guard__["a" /* IsLoggedInGuard */]] },
    { path: 'logactivity', component: __WEBPACK_IMPORTED_MODULE_19__log_activity_log_activity_component__["a" /* LogActivityComponent */] },
    { path: 'programs/:id', component: __WEBPACK_IMPORTED_MODULE_17__single_program_single_program_component__["a" /* SingleProgramComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__is_logged_in_guard__["a" /* IsLoggedInGuard */]] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_12__register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_13__login_login_component__["a" /* LoginComponent */] },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
            )
            // other imports here
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_8__main_content_main_content_component__["a" /* MainContentComponent */],
            __WEBPACK_IMPORTED_MODULE_10__top_bar_top_bar_component__["a" /* TopBarComponent */],
            __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_12__register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_13__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_16__programs_programs_component__["a" /* ProgramsComponent */],
            __WEBPACK_IMPORTED_MODULE_17__single_program_single_program_component__["a" /* SingleProgramComponent */],
            __WEBPACK_IMPORTED_MODULE_18__exercises_exercises_component__["a" /* ExercisesComponent */],
            __WEBPACK_IMPORTED_MODULE_19__log_activity_log_activity_component__["a" /* LogActivityComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__fitness_service__["a" /* FitnessService */],
            __WEBPACK_IMPORTED_MODULE_14__is_logged_in_guard__["a" /* IsLoggedInGuard */],
            __WEBPACK_IMPORTED_MODULE_15__auth_service__["a" /* AuthService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__domain_User__ = __webpack_require__("../../../../../src/domain/User.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
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
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.tokenName = 'fitness-boys-token';
        this.baseUrl = 'http://localhost:11266/api/';
        if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
            this.baseUrl = 'http://localhost:11266/api/';
        }
    }
    AuthService.prototype.saveToken = function (token) {
        window.localStorage[this.tokenName] = token;
    };
    AuthService.prototype.getToken = function () {
        if (window.localStorage[this.tokenName]) {
            return window.localStorage[this.tokenName];
        }
        else {
            return '';
        }
    };
    AuthService.prototype.login = function (user) {
        var _this = this;
        var url = this.baseUrl + "Account/login";
        this.http.post(url, user).subscribe(function (data) {
            _this.saveToken(data.token);
            _this.router.navigateByUrl('/programs');
        });
    };
    ;
    AuthService.prototype.logout = function () {
        window.localStorage.removeItem(this.tokenName);
        this.router.navigateByUrl('/home');
    };
    ;
    AuthService.prototype.register = function (user) {
        var _this = this;
        var url = this.baseUrl + "Account/Register";
        this.http.post(url, user).subscribe(function (data) {
            _this.saveToken(data.token);
            _this.router.navigateByUrl('/programs');
            return true;
        }, 
        // Errors will call this callback instead:
        function (err) {
            if (err.error instanceof Error) {
                // A client-side or network error occurred. Handle it accordingly.
                console.log('An error occurred:', err.error.message);
            }
            else {
                // The backend returned an unsuccessful response code.
                // The response body may contain clues as to what went wrong,
                console.log("Backend returned code " + err.status + ", body was: " + err.error);
            }
            return false;
        });
        return false;
    };
    AuthService.prototype.isLoggedIn = function () {
        var token = this.getToken();
        if (token) {
            var payload = JSON.parse(window.atob(token.split('.')[1]));
            return payload.exp > Date.now() / 1000;
        }
        else {
            return false;
        }
    };
    ;
    AuthService.prototype.currentUser = function () {
        if (this.isLoggedIn()) {
            var token = this.getToken();
            var payload = JSON.parse(window.atob(token.split('.')[1]));
            return new __WEBPACK_IMPORTED_MODULE_1__domain_User__["a" /* User */](null, null, payload.name, payload.email, null);
        }
    };
    ;
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/exercises/exercises.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/exercises/exercises.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row text-center\">\r\n    <div class=\"col-md-12\" *ngIf=\"exercises\">\r\n      <h2>All Exercises</h2>\r\n    </div>\r\n  </div>\r\n  <hr>\r\n  <div class=\"row text-center\">\r\n    <div class=\"col-md-2\">\r\n      <h3>Name</h3>\r\n    </div>\r\n    <div class=\"col-md-2\">\r\n      <h3>Description</h3>\r\n    </div>\r\n    <div class=\"col-md-2\">\r\n        <h3>Repetition</h3>\r\n      </div>\r\n    <div class=\"col-md-4\">\r\n      <h3>Time/reps</h3>\r\n    </div>\r\n  </div>\r\n  <div class=\"row text-center\">\r\n    <div class=\"col-md-2\">\r\n      <input class=\"form-control\" type=\"text\" [(ngModel)]=\"exerciseAdd.name\" placeholder=\"name\">\r\n    </div>\r\n    <div class=\"col-md-2\">\r\n      <input class=\"form-control\" type=\"text\" [(ngModel)]=\"exerciseAdd.description\" placeholder=\"description\">\r\n    </div>\r\n    <div class=\"col-md-2\">\r\n      <input class=\"form-check-input\" type=\"checkbox\" [(ngModel)]=\"exerciseAdd.isRepetition\">\r\n    </div>\r\n    <div class=\"col-md-2\">\r\n      <input class=\"form-control\" type=\"text\" [(ngModel)]=\"exerciseAdd.sets\" placeholder=\"sets\">\r\n    </div>\r\n    <div class=\"col-md-2\" *ngIf=\"exerciseAdd.isRepetition\">\r\n      <input class=\"form-control\" type=\"text\" [(ngModel)]=\"exerciseAdd.reps\" placeholder=\"reps\">\r\n    </div>\r\n    <div class=\"col-md-2\" *ngIf=\"!exerciseAdd.isRepetition\">\r\n      <input class=\"form-control\" type=\"text\" [(ngModel)]=\"exerciseAdd.time\" placeholder=\"time\">\r\n    </div>\r\n    <div class=\"col-md-2\">\r\n      <button class=\"btn btn-primary\" style=\"cursor: pointer;\" (click)=\"addExercise()\">\r\n        <i style=\"font-size: 20px;\" class=\"fa fa-plus\" aria-hidden=\"true\"></i>\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"exercises\">\r\n    <div class=\"row text-center\" *ngFor=\"let exercise of exercises\">\r\n      <div class=\"col-md-2\">\r\n        <p>{{exercise.name}}</p>\r\n      </div>\r\n      <div class=\"col-md-2\">\r\n        <p>{{exercise.description}}</p>\r\n      </div>\r\n      <div class=\"col-md-2\">\r\n          <p>{{exercise.isRepetition}}</p>\r\n        </div>\r\n      <div *ngIf=\"exercise.isRepetition\" class=\"col-md-4\">\r\n        <p>{{exercise.sets + \" x \" + exercise.reps}}</p>\r\n      </div>\r\n      <div *ngIf=\"!exercise.isRepetition\" class=\"col-md-4\">\r\n        <p>{{exercise.time}}</p>\r\n      </div>\r\n      <div class=\"col-md-2\">\r\n          <button class=\"btn btn-primary\" style=\"cursor: pointer;\" (click)=\"deleteExercise(exercise)\">\r\n            <i style=\"font-size: 20px;\" class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n          </button>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/exercises/exercises.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExercisesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fitness_service__ = __webpack_require__("../../../../../src/app/fitness.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExercisesComponent = (function () {
    function ExercisesComponent(fitnessService) {
        this.fitnessService = fitnessService;
    }
    ExercisesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.exercises = new Array();
        this.exerciseSubscription = this.fitnessService.getExercises().subscribe(function (exercises) {
            _this.exercises = exercises;
        });
        this.exerciseAdd = { name: null, description: null, isRepetition: false, reps: null, sets: null, time: null };
    };
    ExercisesComponent.prototype.addExercise = function () {
        var _this = this;
        this.fitnessService.createExercise(this.exerciseAdd).subscribe(function (data) {
            _this.exercises.push(_this.exerciseAdd);
            _this.exerciseAdd = { name: null, description: null, isRepetition: false, reps: null, sets: null, time: null };
        });
    };
    ExercisesComponent.prototype.deleteExercise = function (exercise) {
        var _this = this;
        this.fitnessService.deleteExercise(exercise._id).subscribe(function (data) {
            _this.exercises = _this.exercises.filter(function (e) { return e._id !== exercise._id; });
        });
    };
    return ExercisesComponent;
}());
ExercisesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-exercises',
        template: __webpack_require__("../../../../../src/app/exercises/exercises.component.html"),
        styles: [__webpack_require__("../../../../../src/app/exercises/exercises.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__fitness_service__["a" /* FitnessService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__fitness_service__["a" /* FitnessService */]) === "function" && _a || Object])
], ExercisesComponent);

var _a;
//# sourceMappingURL=exercises.component.js.map

/***/ }),

/***/ "../../../../../src/app/fitness.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FitnessService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_first__ = __webpack_require__("../../../../rxjs/add/operator/first.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_first__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var FitnessService = (function () {
    function FitnessService(http, router, authentication) {
        this.http = http;
        this.router = router;
        this.authentication = authentication;
        this.baseUrl = 'http://localhost:11266/api/';
        this.exerciseUrl = 'exercises';
        this.programsUrl = 'programs';
        this.headers = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
        this.auhtHeader = this.headers.append('Authorization', 'Bearer ' + this.authentication.getToken());
        if (__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].production) {
            this.baseUrl = 'http://fitness-boys-api.herokuapp.com/';
        }
    }
    FitnessService.prototype.getExercise = function (id) {
        var url = this.baseUrl + this.exerciseUrl + "/" + id;
        return this.http.get(url)
            .first();
    };
    FitnessService.prototype.deleteProgram = function (id) {
        var url = this.baseUrl + this.programsUrl + "/" + id;
        return this.http.delete(url, { headers: this.auhtHeader })
            .first();
    };
    FitnessService.prototype.deleteExercise = function (id) {
        var url = this.baseUrl + this.exerciseUrl + "/" + id;
        return this.http.delete(url, { headers: this.auhtHeader })
            .first();
    };
    FitnessService.prototype.getPrograms = function () {
        return this.http.get(this.baseUrl + this.programsUrl)
            .first();
    };
    FitnessService.prototype.getProgram = function (id) {
        var url = this.baseUrl + this.programsUrl + "/" + id;
        return this.http.get(url, { headers: this.auhtHeader })
            .first();
    };
    FitnessService.prototype.getExercises = function () {
        return this.http.get(this.baseUrl + this.exerciseUrl, { headers: this.auhtHeader })
            .first();
    };
    FitnessService.prototype.getActivities = function () {
        return this.http.get(this.baseUrl + this.programsUrl + '/activities', { headers: this.auhtHeader })
            .first();
    };
    FitnessService.prototype.createExercise = function (exercise) {
        return this.http
            .post(this.baseUrl + this.exerciseUrl, JSON.stringify(exercise), { headers: this.auhtHeader })
            .first();
    };
    FitnessService.prototype.createProgram = function (program) {
        return this.http
            .post(this.baseUrl + this.programsUrl, JSON.stringify(program), { headers: this.auhtHeader })
            .first();
    };
    FitnessService.prototype.updateProgram = function (program) {
        console.log(program);
        return this.http
            .put(this.baseUrl + this.programsUrl + "/" + program._id.toString(), JSON.stringify(program), { headers: this.auhtHeader })
            .first();
    };
    FitnessService.prototype.updateExercise = function (exercise) {
        return this.http
            .put(this.baseUrl + this.exerciseUrl + "/" + exercise._id.toString(), JSON.stringify(exercise), { headers: this.headers })
            .first();
    };
    FitnessService.prototype.logActivity = function (activity) {
        var url = this.baseUrl + this.programsUrl + "/logactivity";
        return this.http
            .post(url, JSON.stringify(activity), { headers: this.auhtHeader })
            .first();
    };
    FitnessService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].of(error.message || error);
    };
    return FitnessService;
}());
FitnessService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], FitnessService);

var _a, _b, _c;
//# sourceMappingURL=fitness.service.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "Velkommen til fitness boys appen!\r\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/is-logged-in.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IsLoggedInGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IsLoggedInGuard = (function () {
    function IsLoggedInGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    IsLoggedInGuard.prototype.canActivate = function (next, state) {
        var isLoggedIn = this.authService.isLoggedIn();
        if (!isLoggedIn) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    };
    return IsLoggedInGuard;
}());
IsLoggedInGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], IsLoggedInGuard);

var _a, _b;
//# sourceMappingURL=is-logged-in.guard.js.map

/***/ }),

/***/ "../../../../../src/app/log-activity/log-activity.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/log-activity/log-activity.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6 col-sm-12\">\n      <p class=\"lead\">Track and log you training!</p>\n        <div class=\"form-group\">\n          <label for=\"program\">Program</label>\n          <select [(ngModel)]=\"activity.program\">\n            <option *ngFor=\"let program of programObservable | async\" [ngValue]=\"program\">{{program.name}}</option>\n          </select>\n      </div>\n        <div class=\"form-group\">\n          <label for=\"comment\">Comment</label>\n          <input type=\"textarea\" class=\"form-control\" id=\"comment\" placeholder=\"Enter a comment\" [(ngModel)]=\"activity.comment\">\n        </div>\n        <button (click)=\"register()\" class=\"btn btn-success\">Log activity!</button>\n    </div>\n  </div>\n    <div class=\"row text-center\">\n      <div class=\"col-md-4\">\n        <h3>Program</h3>\n      </div>\n      <div class=\"col-md-4\">\n        <h3>Comment</h3>\n      </div>\n      <div class=\"col-md-4\">\n          <h3>Date</h3>\n      </div>\n    </div>\n    <div class=\"row text-center\" *ngFor=\"let activity of activities\">\n      <div class=\"col-md-4\">\n          <p>{{activity.program.name}}</p>          \n      </div>\n      <div class=\"col-md-4\">\n          <p>{{activity.comment}}</p>\n      </div>\n      <div class=\"col-md-4\">\n          <p>{{activity.date}}</p>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/log-activity/log-activity.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogActivityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fitness_service__ = __webpack_require__("../../../../../src/app/fitness.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__domain_activity__ = __webpack_require__("../../../../../src/domain/activity.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LogActivityComponent = (function () {
    function LogActivityComponent(fitnessService, router) {
        this.fitnessService = fitnessService;
        this.router = router;
    }
    LogActivityComponent.prototype.ngOnInit = function () {
        this.programObservable = this.fitnessService.getPrograms();
        // this.activitySubscription = this.fitnessService.getActivities().subscribe(activities => {
        //   this.activities = activities;
        // });
        console.log(this.activities);
        this.activity = new __WEBPACK_IMPORTED_MODULE_3__domain_activity__["a" /* Activity */](null, null, new Date);
    };
    LogActivityComponent.prototype.ngOnDestroy = function () {
    };
    LogActivityComponent.prototype.register = function () {
        var _this = this;
        console.log(this.activity);
        this.fitnessService.logActivity(this.activity).subscribe(function (data) {
            _this.router.navigate(["/home"]);
        });
    };
    return LogActivityComponent;
}());
LogActivityComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-log-activity',
        template: __webpack_require__("../../../../../src/app/log-activity/log-activity.component.html"),
        styles: [__webpack_require__("../../../../../src/app/log-activity/log-activity.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__fitness_service__["a" /* FitnessService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__fitness_service__["a" /* FitnessService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LogActivityComponent);

var _a, _b;
//# sourceMappingURL=log-activity.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6 col-sm-8\">\r\n      <p class=\"lead\">Not a member? Please <a href=\"/register\">register</a> first.</p>\r\n        <div class=\"form-group\">\r\n          <label for=\"email\">Email address</label>\r\n          <input type=\"email\" class=\"form-control\" required id=\"email\" placeholder=\"Enter email\" [(ngModel)]=\"user.email\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"password\">Password</label>\r\n          <input type=\"password\" class=\"form-control\" required id=\"password\" placeholder=\"Password\" [(ngModel)]=\"user.password\">\r\n        </div>\r\n        <button type=\"submit\" (click)=\"login()\" class=\"btn btn-default\">Sign in!</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fitness_service__ = __webpack_require__("../../../../../src/app/fitness.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(fitnessService, authService) {
        this.fitnessService = fitnessService;
        this.authService = authService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.user = { email: null, password: null };
    };
    LoginComponent.prototype.login = function () {
        this.authService.login(this.user);
    };
    ;
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__fitness_service__["a" /* FitnessService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__fitness_service__["a" /* FitnessService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/main-content/main-content.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-content/main-content.component.html":
/***/ (function(module, exports) {

module.exports = "<main role=\"main\">\r\n  <div class=\"col-md-12\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</main>\r\n"

/***/ }),

/***/ "../../../../../src/app/main-content/main-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainContentComponent; });
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

var MainContentComponent = (function () {
    function MainContentComponent() {
    }
    MainContentComponent.prototype.ngOnInit = function () {
    };
    return MainContentComponent;
}());
MainContentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-main-content',
        template: __webpack_require__("../../../../../src/app/main-content/main-content.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main-content/main-content.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MainContentComponent);

//# sourceMappingURL=main-content.component.js.map

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\r\n  <ul class=\"nav nav-tabs flex-column\">\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" routerLink=\"/programs\" routerLinkActive=\"active\">Programs</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" routerLink=\"/exercises\" routerLinkActive=\"active\">Exercises</a>\r\n    </li>\r\n    <li class=\"nav-item\" *ngIf=\"!isLoggedIn\">\r\n      <a class=\"nav-link\" routerLink=\"/login\" routerLinkActive=\"active\">Login</a>\r\n    </li>\r\n    <li class=\"nav-item\" *ngIf=\"!isLoggedIn\">\r\n      <a class=\"nav-link\" routerLink=\"/register\" routerLinkActive=\"active\">Register</a>\r\n    </li>\r\n    <li *ngIf=\"isLoggedIn\" class=\"nav-item\">\r\n      <a class=\"nav-link\" routerLink=\"/logactivity\" routerLinkActive=\"active\">Log Activity</a>\r\n    </li>\r\n  </ul>\r\n  <div *ngIf=\"isLoggedIn\">\r\n    <p>{{currentUser}}</p>\r\n    <button (click)=\"logout()\" style=\"cursor: pointer;\" class=\"btn btn-primary\">Logout</button>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = (function () {
    function NavbarComponent(authService) {
        this.authService = authService;
    }
    Object.defineProperty(NavbarComponent.prototype, "isLoggedIn", {
        get: function () {
            return this.authService.isLoggedIn();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavbarComponent.prototype, "currentUser", {
        get: function () {
            return this.authService.currentUser().name;
        },
        enumerable: true,
        configurable: true
    });
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.logout = function () {
        this.authService.logout();
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], NavbarComponent);

var _a;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/programs/programs.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/programs/programs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row text-center\">\r\n    <div class=\"col-md-12\">\r\n      <h2>Programs</h2>\r\n    </div>\r\n  </div>\r\n  <hr>\r\n  <div class=\"row text-center\">\r\n    <div class=\"col-md-3\">\r\n      <h3>Name</h3>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <h3>Category</h3>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <h3>Date</h3>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row text-center\" *ngIf=\"isLoggedIn()\">\r\n    <div class=\"col-md-3\">\r\n      <input class=\"form-control\" type=\"text\" [(ngModel)]=\"programAdd.name\">\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <input class=\"form-control\" type=\"text\" [(ngModel)]=\"programAdd.category\">\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <button class=\"btn btn-primary\" style=\"cursor: pointer;\" (click)=\"addProgram(program)\">\r\n        <i style=\"font-size: 20px;\" class=\"fa fa-plus\" aria-hidden=\"true\"></i>\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row text-center\" *ngFor=\"let program of programs\">\r\n    <div class=\"col-md-3\">\r\n      <a *ngIf=\"isLoggedIn()\" [routerLink]=\"['/programs', program._id]\">{{program.name}}</a>\r\n      <p *ngIf=\"!isLoggedIn()\">{{program.name}}</p>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <p>{{program.category}}</p>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <p>{{program.create_date | date}}</p>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <button *ngIf=\"isLoggedIn()\" class=\"btn btn-primary\" style=\"cursor: pointer;\" (click)=\"deleteProgram(program)\">\r\n        <i style=\"font-size: 20px;\" class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/programs/programs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fitness_service__ = __webpack_require__("../../../../../src/app/fitness.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProgramsComponent = (function () {
    function ProgramsComponent(fitnessService, authService) {
        this.fitnessService = fitnessService;
        this.authService = authService;
    }
    ProgramsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.programsSubscription = this.fitnessService.getPrograms().subscribe(function (programs) {
            _this.programs = programs;
        });
        this.programAdd = { name: null, category: null };
    };
    ProgramsComponent.prototype.ngOnDestroy = function () {
        this.programsSubscription.unsubscribe();
    };
    ProgramsComponent.prototype.isLoggedIn = function () {
        return this.authService.isLoggedIn();
    };
    ProgramsComponent.prototype.deleteProgram = function (program) {
        var _this = this;
        this.fitnessService.deleteProgram(program._id).subscribe(function (data) {
            var index = _this.programs.indexOf(program._id);
            _this.programs.splice(index, 1);
        });
    };
    ProgramsComponent.prototype.addProgram = function () {
        var _this = this;
        this.fitnessService.createProgram(this.programAdd).subscribe(function (data) {
            _this.programAdd.create_date = new Date();
            _this.programs.push(_this.programAdd);
            _this.programAdd = { name: null, category: null };
        });
    };
    return ProgramsComponent;
}());
ProgramsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-programs',
        template: __webpack_require__("../../../../../src/app/programs/programs.component.html"),
        styles: [__webpack_require__("../../../../../src/app/programs/programs.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__fitness_service__["a" /* FitnessService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__fitness_service__["a" /* FitnessService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], ProgramsComponent);

var _a, _b;
//# sourceMappingURL=programs.component.js.map

/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n<div class=\"row\">\r\n  <div class=\"col-md-6 col-sm-12\">\r\n    <p class=\"lead\">Already a member? Please <a href=\"/login\">log in</a> instead.</p>\r\n      <div class=\"form-group\">\r\n        <label for=\"name\">Full name</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Enter your name\" [(ngModel)]=\"user.name\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"email\">Email address</label>\r\n        <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Enter email\" [(ngModel)]=\"user.email\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"password\">Password</label>\r\n        <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password\" [(ngModel)]=\"user.password\">\r\n      </div>\r\n      <button type=\"submit\" (click)=\"register()\" class=\"btn btn-default\">Register!</button>\r\n  </div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fitness_service__ = __webpack_require__("../../../../../src/app/fitness.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = (function () {
    function RegisterComponent(fitnessService, authService) {
        this.fitnessService = fitnessService;
        this.authService = authService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.user = { name: null, email: null, password: null };
    };
    RegisterComponent.prototype.register = function () {
        this.authService.register(this.user);
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__fitness_service__["a" /* FitnessService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__fitness_service__["a" /* FitnessService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], RegisterComponent);

var _a, _b;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/single-program/single-program.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/single-program/single-program.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row text-center\">\r\n    <div class=\"col-md-12\" *ngIf=\"program\">\r\n      <h2>{{program.name}}</h2>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-2\">\r\n      <div class=\"dropdown\">\r\n        <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n          aria-expanded=\"false\">\r\n          Add exercise\r\n        </button>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n          <a class=\"dropdown-item\" (click)=\"addExerciseToProgram(exercise)\" *ngFor=\"let exercise of exerciseObservable | async\">{{exercise.name}}</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <hr>\r\n  <div class=\"row text-center\">\r\n    <div class=\"col-md-4\">\r\n      <h3>Name</h3>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <h3>Description</h3>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <h3>Time/reps</h3>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"program\">\r\n  <div class=\"row text-center\" *ngFor=\"let exercise of program.exercises\">\r\n    <div class=\"col-md-4\">\r\n      <p>{{exercise.name}}</p>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <p>{{exercise.description}}</p>\r\n    </div>\r\n    <div *ngIf=\"exercise.isRepetition\" class=\"col-md-4\">\r\n      <p>{{exercise.sets + \" x \" + exercise.reps}}</p>\r\n    </div>\r\n    <div *ngIf=\"!exercise.isRepetition\" class=\"col-md-4\">\r\n      <p>{{exercise.time}}</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/single-program/single-program.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleProgramComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fitness_service__ = __webpack_require__("../../../../../src/app/fitness.service.ts");
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



var SingleProgramComponent = (function () {
    function SingleProgramComponent(fitnessService, route) {
        this.fitnessService = fitnessService;
        this.route = route;
    }
    SingleProgramComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routingSubscription = this.route.params.subscribe(function (params) {
            _this.programId = params.id;
            _this.programSubscription = _this.fitnessService.getProgram(_this.programId).subscribe(function (program) {
                _this.program = program;
            });
        });
        this.exerciseObservable = this.fitnessService.getExercises();
    };
    SingleProgramComponent.prototype.ngOnDestroy = function () {
        this.routingSubscription.unsubscribe();
        this.programSubscription.unsubscribe();
    };
    SingleProgramComponent.prototype.addExerciseToProgram = function (exercise) {
        var _this = this;
        var mappedProgram = JSON.parse(JSON.stringify(this.program));
        mappedProgram.exercises = this.program.exercises.map(function (exercise) { return exercise._id; });
        mappedProgram.exercises.push(String(exercise._id));
        this.fitnessService.updateProgram(mappedProgram).subscribe(function (data) {
            if (_this.program.exercises.filter(function (e) { return e._id === exercise._id; }).length === 0) {
                _this.program.exercises.push(exercise);
            }
        });
    };
    return SingleProgramComponent;
}());
SingleProgramComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-single-program',
        template: __webpack_require__("../../../../../src/app/single-program/single-program.component.html"),
        styles: [__webpack_require__("../../../../../src/app/single-program/single-program.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__fitness_service__["a" /* FitnessService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__fitness_service__["a" /* FitnessService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], SingleProgramComponent);

var _a, _b;
//# sourceMappingURL=single-program.component.js.map

/***/ }),

/***/ "../../../../../src/app/top-bar/top-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/top-bar/top-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\r\n  <a class=\"navbar-brand\" routerLink=\"/home\">Fitness Boys</a>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/top-bar/top-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopBarComponent; });
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

var TopBarComponent = (function () {
    function TopBarComponent() {
    }
    TopBarComponent.prototype.ngOnInit = function () {
    };
    return TopBarComponent;
}());
TopBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-top-bar',
        template: __webpack_require__("../../../../../src/app/top-bar/top-bar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/top-bar/top-bar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TopBarComponent);

//# sourceMappingURL=top-bar.component.js.map

/***/ }),

/***/ "../../../../../src/domain/User.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(id, exercises, name, email, password) {
        this.id = id;
        this.exercises = exercises;
        this.name = name;
        this.email = email;
        this.password = password;
    }
    return User;
}());

//# sourceMappingURL=User.js.map

/***/ }),

/***/ "../../../../../src/domain/activity.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Activity; });
var Activity = (function () {
    function Activity(comment, program, date) {
        this.comment = comment;
        this.program = program;
        this.date = date;
    }
    return Activity;
}());

//# sourceMappingURL=activity.js.map

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
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map