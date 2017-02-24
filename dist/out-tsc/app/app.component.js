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
import { SearchService } from './services/search.service';
var AppComponent = (function () {
    function AppComponent(searchService) {
        this.searchService = searchService;
        this.items = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getDepCity();
    };
    AppComponent.prototype.getDepCity = function () {
        var _this = this;
        this.searchService.getCityCountries().subscribe(function (data) { _this.items = data; });
    };
    AppComponent.prototype.searchFlight = function (form) {
        var _this = this;
        var leavingFrom = jQuery('.leavingFrom').val();
        var leavingTo = jQuery('.leavingTo').val();
        var depDate = jQuery('#departure_date').val();
        var retDate = jQuery('#return_date').val();
        var guests = jQuery('.guests').val();
        var userLang = navigator.language;
        var market = userLang.split("-")[1];
        var search = { "leavingFrom": leavingFrom, "leavingTo": leavingTo, "depDate": depDate, "retDate": retDate, "guests": guests,
            "market": market, "currency": "USD", "locale": userLang };
        this.searchService.searchFlight(search).subscribe(function (data) { _this.items = data; });
        console.log(search);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    }),
    __metadata("design:paramtypes", [SearchService])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=../../../src/app/app.component.js.map