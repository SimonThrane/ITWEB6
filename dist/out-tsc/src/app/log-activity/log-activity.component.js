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
var fitness_service_1 = require("../fitness.service");
var router_1 = require("@angular/router");
var activity_1 = require("../../domain/activity");
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
        this.activity = new activity_1.Activity(null, null, new Date);
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
    core_1.Component({
        selector: 'app-log-activity',
        templateUrl: './log-activity.component.html',
        styleUrls: ['./log-activity.component.css']
    }),
    __metadata("design:paramtypes", [fitness_service_1.FitnessService, router_1.Router])
], LogActivityComponent);
exports.LogActivityComponent = LogActivityComponent;
//# sourceMappingURL=log-activity.component.js.map