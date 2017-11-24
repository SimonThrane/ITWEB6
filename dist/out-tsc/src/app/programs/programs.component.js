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
var auth_service_1 = require("../auth.service");
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
    core_1.Component({
        selector: 'app-programs',
        templateUrl: './programs.component.html',
        styleUrls: ['./programs.component.css']
    }),
    __metadata("design:paramtypes", [fitness_service_1.FitnessService, auth_service_1.AuthService])
], ProgramsComponent);
exports.ProgramsComponent = ProgramsComponent;
//# sourceMappingURL=programs.component.js.map