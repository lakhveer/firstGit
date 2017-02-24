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
import { SearchService } from './../services/search.service';
import { Router, ActivatedRoute } from "@angular/router";
var HomeComponent = (function () {
    function HomeComponent(searchService, route, router) {
        this.searchService = searchService;
        this.route = route;
        this.router = router;
        this.items = [];
        this.items1 = [];
        this.flights = [];
        this.countryCode = [];
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
        this.getCurrentLocationData();
        this.ulList = true;
        this.ulListData = true;
        this.isDivSetting = true;
    }
    HomeComponent.prototype.FromResponse = function (event) {
        var _this = this;
        this.isClassVisible = false;
        this.isDivSetting = true;
        var search = { "market": this.market, "locale": this.userLang, "data": event };
        this.searchService.getSearchPlace(search).subscribe(function (data) { _this.items = data.Places; });
    };
    HomeComponent.prototype.toResponse = function (event) {
        var _this = this;
        this.isClassVisible1 = false;
        this.isDivSetting = true;
        var search = { "market": this.market, "locale": this.userLang, "data": event };
        this.searchService.getSearchPlace(search).subscribe(function (data) { _this.items1 = data.Places; });
    };
    HomeComponent.prototype.getCurrentLocationData = function () {
        var _this = this;
        this.searchService.getLocaleData().subscribe(function (data) { _this.countryCode.push(data.country); });
    };
    HomeComponent.prototype.searchFlight = function (form) {
        var leavingFrom = jQuery('.fromCode').val().split("-")[0];
        var leavingTo = jQuery('.toCode').val().split("-")[0];
        var depDate = jQuery('#departure_date').val();
        var retDate = jQuery('#return_date').val();
        var guests = jQuery('.guests').val();
        var locale = this.userLang.split("-")[0] + "-" + this.countryCode[0];
        var dDate = (depDate == "" ? "nodate" : depDate);
        var rDate = (retDate == "" ? "" : retDate);
        console.log(dDate.split("/").join("-"));
        var search = { "leavingFrom": leavingFrom, "leavingTo": leavingTo, "depDate": dDate, "retDate": rDate,
            "market": this.countryCode[0], "locale": locale };
        this.router.navigate(['/flight-list', leavingFrom, leavingTo, dDate.split("/").join("-"), rDate.split("/").join("-")]);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css'],
        styles: [
            ' .sel-div { display: none;position: absolute; z-index:9999;}',
            '.sel-div1 { display: none; }',
            '.lst { background-color: #fff; }',
            '.lstData { list-style: none; padding: 5px 10px; margin-left : -40px; color: #000; }',
            '.lstData:hover { background-color : #00adef; cursor: pointer; }',
            '.div-setting {position: absolute; z-index: 9999; width : 90%;}'
        ]
    }),
    __metadata("design:paramtypes", [SearchService, ActivatedRoute,
        Router])
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=../../../../src/app/home/home.component.js.map