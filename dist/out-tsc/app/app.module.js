var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { Ng2PaginationModule } from 'ng2-pagination';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { MyDatePickerModule } from 'mydatepicker';
import { SearchService } from './services/search.service';
import { GridService } from './services/grid.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FlightComponent } from './flight/flight.component';
import { HomeComponent } from './home/home.component';
import { LeavingFromComponent } from './flight/leavingFrom.component';
import { GridComponent } from './grid/grid.component';
import { CalenderComponent } from './grid/calender/calender.component';
import { CalenderComponent0 } from './grid/calender/calender0.component';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            HeaderComponent,
            FooterComponent,
            FlightComponent,
            HomeComponent,
            LeavingFromComponent,
            GridComponent,
            CalenderComponent,
            CalenderComponent0
        ],
        imports: [
            BrowserModule,
            FormsModule,
            HttpModule,
            routing,
            Ng2PaginationModule,
            Ng2AutoCompleteModule,
            MyDatePickerModule
        ],
        providers: [SearchService, GridService],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=../../../src/app/app.module.js.map