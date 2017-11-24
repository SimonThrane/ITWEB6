"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var is_logged_in_guard_1 = require("./is-logged-in.guard");
describe('IsLoggedInGuard', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [is_logged_in_guard_1.IsLoggedInGuard]
        });
    });
    it('should ...', testing_1.inject([is_logged_in_guard_1.IsLoggedInGuard], function (guard) {
        expect(guard).toBeTruthy();
    }));
});
//# sourceMappingURL=is-logged-in.guard.spec.js.map