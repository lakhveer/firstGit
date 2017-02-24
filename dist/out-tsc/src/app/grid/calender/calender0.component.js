var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import "fullcalendar/dist/fullcalendar.min.css";
var CalenderComponent0 = (function () {
    function CalenderComponent0() {
        this.returnDateOptions = {};
        this.dFormat = '';
    }
    CalenderComponent0.prototype.ngOnInit = function () {
        this.returnDateOptions = {
            inline: true,
            height: 'parent',
            fixedWeekCount: false,
            editable: true,
            eventLimit: true,
            events: [
                {
                    title: 'All Day Event',
                    start: '2017-02-21'
                }
            ]
        };
    };
    CalenderComponent0.prototype.onDateChanged = function (event) {
        var mon = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        this.dFormat = event.date.day + " " + mon[event.date.month - 1] + ", " + event.date.year;
        console.log('onDateChanged(): ', event.date, ' - jsdate: ', new Date(event.jsdate).toLocaleDateString(), ' - formatted: ', event.formatted, ' - epoc timestamp: ', event.epoc);
    };
    return CalenderComponent0;
}());
CalenderComponent0 = __decorate([
    Component({
        selector: 'return-date-calender',
        template: "<angular2-fullcalendar\n   [options] =\"returnDateOptions\"></angular2-fullcalendar>"
    }),
    __metadata("design:paramtypes", [])
], CalenderComponent0);
export { CalenderComponent0 };
//# sourceMappingURL=../../../../../../src/app/grid/calender/calender0.component.js.map