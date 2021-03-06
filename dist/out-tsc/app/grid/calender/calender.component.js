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
        this.dFormat = '';
        this.myDatePickerOptions = {
            inline: true,
            showTodayBtn: true,
            todayBtnTxt: 'Today',
            dateFormat: 'yyyy-mm-dd',
            firstDayOfWeek: 'mo',
            sunHighlight: true,
            height: '34px',
            width: '260px',
            selectionTxtFontSize: '16px'
        };
    }
    CalenderComponent.prototype.ngOnInit = function () {
    };
    CalenderComponent.prototype.onDateChanged = function (event) {
        var mon = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        this.dFormat = event.date.day + " " + mon[event.date.month - 1] + ", " + event.date.year;
    };
    return CalenderComponent;
}());
CalenderComponent = __decorate([
    Component({
        selector: 'app-calender',
        template: "<my-date-picker [options]=\"myDatePickerOptions\"\n                (dateChanged)=\"onDateChanged($event)\"></my-date-picker><br>\n                {{dFormat}} <i class=\"fa fa-arrow-right arrow\" aria-hidden=\"true\"></i>"
    }),
    __metadata("design:paramtypes", [])
], CalenderComponent);
export { CalenderComponent };
//# sourceMappingURL=../../../../../src/app/grid/calender/calender.component.js.map