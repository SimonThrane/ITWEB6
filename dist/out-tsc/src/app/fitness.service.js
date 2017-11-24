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
var environment_1 = require("../environments/environment");
require("rxjs/add/operator/first");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/of");
var http_1 = require("@angular/common/http");
var Observable_1 = require("rxjs/Observable");
var router_1 = require("@angular/router");
var auth_service_1 = require("./auth.service");
var FitnessService = (function () {
    function FitnessService(http, router, authentication) {
        this.http = http;
        this.router = router;
        this.authentication = authentication;
        this.baseUrl = 'http://localhost:11266/api/';
        this.exerciseUrl = 'exercises';
        this.programsUrl = 'programs';
        this.headers = new http_1.HttpHeaders().set('Content-Type', 'application/json');
        this.auhtHeader = this.headers.append('Authorization', 'Bearer ' + this.authentication.getToken());
        if (environment_1.environment.production) {
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
        return Observable_1.Observable.of(error.message || error);
    };
    return FitnessService;
}());
FitnessService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router, auth_service_1.AuthService])
], FitnessService);
exports.FitnessService = FitnessService;
//# sourceMappingURL=fitness.service.js.map