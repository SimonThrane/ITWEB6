"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var forms_1 = require("@angular/forms");
var http_2 = require("@angular/http");
var app_component_1 = require("./app.component");
var router_1 = require("@angular/router");
var navbar_component_1 = require("./navbar/navbar.component");
var main_content_component_1 = require("./main-content/main-content.component");
var fitness_service_1 = require("./fitness.service");
var top_bar_component_1 = require("./top-bar/top-bar.component");
var home_component_1 = require("./home/home.component");
var register_component_1 = require("./register/register.component");
var login_component_1 = require("./login/login.component");
var is_logged_in_guard_1 = require("./is-logged-in.guard");
var auth_service_1 = require("./auth.service");
var programs_component_1 = require("./programs/programs.component");
var single_program_component_1 = require("./single-program/single-program.component");
var exercises_component_1 = require("./exercises/exercises.component");
var log_activity_component_1 = require("./log-activity/log-activity.component");
var appRoutes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'programs', component: programs_component_1.ProgramsComponent },
    { path: 'exercises', component: exercises_component_1.ExercisesComponent, canActivate: [is_logged_in_guard_1.IsLoggedInGuard] },
    { path: 'logactivity', component: log_activity_component_1.LogActivityComponent },
    { path: 'programs/:id', component: single_program_component_1.SingleProgramComponent, canActivate: [is_logged_in_guard_1.IsLoggedInGuard] },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    { path: '**', component: home_component_1.HomeComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpClientModule,
            http_2.HttpModule,
            forms_1.FormsModule,
            router_1.RouterModule.forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
            )
            // other imports here
        ],
        declarations: [
            app_component_1.AppComponent,
            navbar_component_1.NavbarComponent,
            main_content_component_1.MainContentComponent,
            top_bar_component_1.TopBarComponent,
            home_component_1.HomeComponent,
            register_component_1.RegisterComponent,
            login_component_1.LoginComponent,
            programs_component_1.ProgramsComponent,
            single_program_component_1.SingleProgramComponent,
            exercises_component_1.ExercisesComponent,
            log_activity_component_1.LogActivityComponent
        ],
        providers: [
            fitness_service_1.FitnessService,
            is_logged_in_guard_1.IsLoggedInGuard,
            auth_service_1.AuthService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map