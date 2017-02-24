var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { GridService } from './../../services/grid.service';
import { SearchService } from './../../services/search.service';
import * as $ from 'jquery';
var CalenderComponent1 = (function () {
    function CalenderComponent1(searchService, gridService, route, router) {
        this.searchService = searchService;
        this.gridService = gridService;
        this.route = route;
        this.router = router;
        this.datato = [];
        this.leavingFrom = "";
        this.leavingTo = "";
        this.depDate = "";
        this.retDate = "";
        this.gridDates = [];
        this.countryCode = [];
        this.events = [];
        this.eventDate = [];
        this.data1 = [];
        this.calendarOptions1 = {};
        this.dateTo = [];
        var userLang1 = navigator.language;
        var market1 = userLang1.split("-")[1];
        this.userLang = userLang1;
        this.market = market1;
    }
    CalenderComponent1.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.leavingFrom = params['from'];
            _this.leavingTo = params['to'];
            _this.depDate = params['depDate'];
            _this.retDate = params['retDate'];
        });
        if (this.leavingFrom != null && this.leavingTo) {
            this.getCurrentLocationData();
        }
        this.getDates();
    };
    CalenderComponent1.prototype.getDates = function () {
        var counter = 0;
        var title = [];
        var zz = [];
        for (var z = 1; z <= 28; z++) {
            zz.push({ title: "$" + z, start: ("2017-02-" + ((z < 10) ? '0' + z : z)) });
        }
        this.calendarOptions1 = {
            inline: true,
            height: 'parent',
            fixedWeekCount: true,
            editable: false,
            eventLimit: false,
            events: zz,
            eventClick: function (event, jsEvent, view) {
                console.log(event.title);
                console.log(event.start._i);
            },
            dayClick: function (date, jsEvent) {
                counter++;
                this.dateTo = "date";
                this.datato = "@Input()";
                if (counter > 2) {
                    counter = 0;
                    $('td').removeClass('redbg');
                }
                else {
                    if ($(this, 'td').hasClass('redbg')) {
                        $(this, 'td').removeClass('redbg');
                    }
                    else {
                        $(this, 'td').addClass('redbg');
                    }
                }
            },
            eventMouseover: function (event, jsEvent, view) {
            },
            eventMouseout: function (event, jsEvent, view) {
            }
        };
        console.log('Title', this.datato);
    };
    CalenderComponent1.prototype.getCurrentLocationData = function () {
        var _this = this;
        this.searchService.getLocaleData().subscribe(function (data) {
            _this.countryCode.push(data.country);
            _this.getGridData();
        });
    };
    CalenderComponent1.prototype.getGridData = function () {
        var _this = this;
        if (this.depDate == null && this.retDate == null) {
            var gridData = { "from": this.leavingFrom, "to": this.leavingTo, "matket": this.countryCode };
            this.gridService.getGridDates(gridData).subscribe(function (data) { _this.gridDates = data; });
        }
        else {
            var gridDataWithDates = { "from": this.leavingFrom, "to": this.leavingTo, "depDate": this.depDate, "retDate": this.retDate, "matket": this.countryCode };
            this.gridService.getGridDates(gridDataWithDates).subscribe(function (data) { _this.gridDates = data; _this.events = data.Dates; _this.getFlightDates(); });
        }
    };
    CalenderComponent1.prototype.getFlightDates = function () {
        var data;
        var aa;
        for (var i = 0; i < this.events.length; i++) {
            data = this.events[i];
            for (var z = 0; z < data.length; z++) {
                if (data[z] != null) {
                    aa = { "start": z, "title": data[z].MinPrice == null ? '' : data[z].MinPrice };
                    this.data1.push(aa);
                }
            }
        }
    };
    return CalenderComponent1;
}());
__decorate([
    Input(),
    __metadata("design:type", Array)
], CalenderComponent1.prototype, "datato", void 0);
CalenderComponent1 = __decorate([
    Component({
        selector: 'app-calender',
        template: "<angular2-fullcalendar [options]=\"calendarOptions1\"></angular2-fullcalendar>\n  <br>\n  LAKHVEER {{datato}} "
    }),
    __metadata("design:paramtypes", [SearchService, GridService, ActivatedRoute, Router])
], CalenderComponent1);
export { CalenderComponent1 };
//# sourceMappingURL=../../../../../../src/app/grid/calender/calender1.component.js.map