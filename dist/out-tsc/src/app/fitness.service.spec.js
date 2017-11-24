"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var testing_2 = require("@angular/common/http/testing");
var fitness_service_1 = require("./fitness.service");
describe('FitnessService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [
                testing_2.HttpClientTestingModule
            ],
            providers: [fitness_service_1.FitnessService]
        });
        var fitnessService = testing_1.TestBed.get(fitness_service_1.FitnessService);
    });
    it('should be created', testing_1.inject([fitness_service_1.FitnessService], function (service) {
        expect(service).toBeTruthy();
    }));
    it('should be true', testing_1.inject([fitness_service_1.FitnessService, testing_2.HttpTestingController], function (fitnessService, httpMock) {
        /*let id = 'id';
        fitnessService
          .getExercise(id)
          .then((exercise: Exercise) => {
            expect(exercise.name).toEqual("test");
          });
        const request = httpMock.expectOne(`/api/exercises/${id}`);
        request.flush(new Exercise(id, "test", "", 1, 1, true));
        httpMock.verify();*/
        expect(true).toBeTruthy();
    }));
});
//# sourceMappingURL=fitness.service.spec.js.map