import { RouterModule } from "@angular/router";
import { FlightComponent } from './flight/flight.component';
import { HomeComponent } from './home/home.component';
import { GridComponent } from './grid/grid.component';
var APP_ROUTES = [
    { path: '', component: HomeComponent },
    { path: 'flight-list', component: FlightComponent },
    { path: 'flight-list/:leavingFrom/:leavingTo/:depDate/:retDate', component: FlightComponent },
    { path: 'date-grid/:from/:to', component: GridComponent },
    { path: 'date-grid/:from/:to/:depDate/:retDate', component: GridComponent }
];
export var routing = RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=../../../src/app/app.routing.js.map