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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var User_1 = require("../domain/User");
var http_1 = require("@angular/common/http");
var router_1 = require("@angular/router");
var environment_1 = require("../environments/environment");
var AuthService = (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.tokenName = 'fitness-boys-token';
        this.baseUrl = 'http://localhost:11266/api/';
        if (environment_1.environment.production) {
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
            return new User_1.User(null, null, payload.name, payload.email, null);
        }
    };
    ;
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map