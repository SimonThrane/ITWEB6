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
                //console.log(program);
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
        mappedProgram.exercises = [exercise.id];
        this.fitnessService.updateProgram(mappedProgram).subscribe(function (data) {
            if (_this.program.exercises.filter(function (e) { return e.id === exercise.id; }).length === 0) {
                _this.program.exercises.push(exercise);
            }
        });
    };
    return SingleProgramComponent;
}());
SingleProgramComponent = __decorate([
    core_1.Component({
        selector: 'app-single-program',
        templateUrl: './single-program.component.html',
        styleUrls: ['./single-program.component.css']
    }),
    __metadata("design:paramtypes", [fitness_service_1.FitnessService, router_1.ActivatedRoute])
], SingleProgramComponent);
exports.SingleProgramComponent = SingleProgramComponent;
//# sourceMappingURL=single-program.component.js.map