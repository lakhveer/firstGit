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
import { Router, ActivatedRoute } from "@angular/router";
import { GridService } from './../services/grid.service';
import { SearchService } from './../services/search.service';
var GridComponent = (function () {
    function GridComponent(searchService, gridService, route, router) {
        this.searchService = searchService;
        this.gridService = gridService;
        this.route = route;
        this.router = router;
        this.leavingFrom = "";
        this.leavingTo = "";
        this.depDate = "";
        this.retDate = "";
        this.gridDates = [];
        this.countryCode = [];
        this.items = [];
        this.items1 = [];
        this.leavingFromClk = function (id, name) {
            this.isClassVisible = true;
            var z = jQuery(".leavingFrom").val(name + " [" + id + "]");
            var z1 = jQuery(".fromCode").val(id);
        };
        this.leavingToClk = function (id, name) {
            this.isClassVisible1 = true;
            var z = jQuery(".leavingTo").val(name + " [" + id + "]");
            var z1 = jQuery(".toCode").val(id);
        };
        var userLang1 = navigator.language;
        var market1 = userLang1.split("-")[1];
        this.userLang = userLang1;
        this.market = market1;
        this.ulList = true;
        this.ulListData = true;
        this.isDivSetting = true;
    }
    GridComponent.prototype.ngOnInit = function () {
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
    };
    GridComponent.prototype.FromResponse = function (event) {
        var _this = this;
        this.isClassVisible = false;
        this.isDivSetting = true;
        var search = { "market": this.market, "locale": this.userLang, "data": event };
        this.searchService.getSearchPlace(search).subscribe(function (data) { _this.items = data.Places; });
    };
    GridComponent.prototype.toResponse = function (event) {
        var _this = this;
        this.isDivSetting = true;
        this.isClassVisible1 = false;
        var search = { "market": this.market, "locale": this.userLang, "data": event };
        this.searchService.getSearchPlace(search).subscribe(function (data) { _this.items1 = data.Places; });
    };
    GridComponent.prototype.getCurrentLocationData = function () {
        var _this = this;
        this.searchService.getLocaleData().subscribe(function (data) {
            _this.countryCode.push(data.country);
            _this.getGridData();
        });
    };
    GridComponent.prototype.getGridData = function () {
        var _this = this;
        if (this.depDate == null && this.retDate == null) {
            var gridData = { "from": this.leavingFrom, "to": this.leavingTo, "matket": this.countryCode };
            this.gridService.getGridDates(gridData).subscribe(function (data) { _this.gridDates = data; console.log(data); });
        }
        else {
            var gridDataWithDates = { "from": this.leavingFrom, "to": this.leavingTo, "depDate": this.depDate, "retDate": this.retDate, "matket": this.countryCode };
            this.gridService.getGridDates(gridDataWithDates).subscribe(function (data) { _this.gridDates = data; console.log(data); });
        }
    };
    GridComponent.prototype.searchFlight = function () {
        var leavingFrom = jQuery('.fromCode').val();
        var leavingTo = jQuery('.toCode').val();
        var depDate = jQuery('#departure_date').val();
        var retDate = jQuery('#return_date').val();
        var dDate = (depDate == "" ? "nodate" : depDate);
        var rDate = (retDate == "" ? "nodate" : retDate);
        this.router.navigate(['/date-grid', leavingFrom, leavingTo, depDate.split("/").join("-"), retDate.split("/").join("-")]);
        window.location.reload();
    };
    return GridComponent;
}());
GridComponent = __decorate([
    Component({
        selector: 'app-grid',
        templateUrl: './grid.component.html',
        styleUrls: ['./grid.component.css'],
        styles: [
            '.sel-div { display: none;position: absolute; z-index:9999;}',
            '.sel-div1 { display: none; }',
            '.lst { background-color: #fff; }',
            '.lstData { list-style: none; padding: 5px 10px; margin-left : -40px; }',
            '.lstData:hover { background-color : #00adef; cursor: pointer; }',
            '.div-setting {position: absolute; z-index: 9999; width : 90%;}'
        ]
    }),
    __metadata("design:paramtypes", [SearchService, GridService, ActivatedRoute, Router])
], GridComponent);
export { GridComponent };
//# sourceMappingURL=../../../../../src/app/grid/grid.component.js.map