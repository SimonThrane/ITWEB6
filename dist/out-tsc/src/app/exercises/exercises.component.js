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
    core_1.Component({
        selector: 'app-exercises',
        templateUrl: './exercises.component.html',
        styleUrls: ['./exercises.component.css']
    }),
    __metadata("design:paramtypes", [fitness_service_1.FitnessService])
], ExercisesComponent);
exports.ExercisesComponent = ExercisesComponent;
//# sourceMappingURL=exercises.component.js.map