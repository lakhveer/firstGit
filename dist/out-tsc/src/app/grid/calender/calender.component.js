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
var CalenderComponent = (function () {
    function CalenderComponent() {
        this.calendarOptions = {
            inline: true,
            height: 'parent',
            fixedWeekCount: false,
            editable: true,
            eventLimit: true,
            events: [
                {
                    title: 'All Day Event',
                    start: '2017-02-01'
                },
                {
                    title: 'Long Event',
                    start: '2017-02-07',
                    end: '2016-09-10'
                }
            ]
        };
    }
    CalenderComponent.prototype.ngOnInit = function () {
    };
    return CalenderComponent;
}());
CalenderComponent = __decorate([
    Component({
        selector: 'app-calender',
        template: "<angular2-fullcalendar [options]=\"calendarOptions\"></angular2-fullcalendar>"
    }),
    __metadata("design:paramtypes", [])
], CalenderComponent);
export { CalenderComponent };
//# sourceMappingURL=../../../../../../src/app/grid/calender/calender.component.js.map