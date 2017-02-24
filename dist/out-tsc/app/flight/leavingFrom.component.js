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
import { DomSanitizer } from "@angular/platform-browser";
import { SearchService } from './../services/search.service';
var LeavingFromComponent = (function () {
    function LeavingFromComponent(_sanitizer, searchService) {
        var _this = this;
        this._sanitizer = _sanitizer;
        this.searchService = searchService;
        this.items = [];
        this.continents = [{
                id: 1,
                name: 'Asia',
                population: '4,157,300,000'
            }, {
                id: 2,
                name: 'Africa',
                population: '1,030,400,000'
            }, {
                id: 3,
                name: 'Europe',
                population: '738,600, 000'
            }, {
                id: 4,
                name: 'North America',
                population: '461,114,000'
            }, {
                id: 5,
                name: 'South America',
                population: '390,700,000'
            }, {
                id: 6,
                name: 'Australia',
                population: '36,700,000'
            }, {
                id: 7,
                name: 'Antartica',
                population: 0
            }
        ];
        this.autocompleListFormatter = function (data) {
            var search = { "market": _this.market, "locale": _this.userLang, "data": event };
            _this.searchService.getSearchPlace(search).subscribe(function (data) { _this.items = data.Places; });
            var html = "<span>" + data + "</span>";
            return _this._sanitizer.bypassSecurityTrustHtml(html);
        };
        var userLang1 = navigator.language;
        var market1 = userLang1.split("-")[1];
        this.userLang = userLang1;
        this.market = market1;
    }
    return LeavingFromComponent;
}());
LeavingFromComponent = __decorate([
    Component({
        selector: 'app-leavingFrom',
        templateUrl: './leavingForm.component.html',
        styleUrls: ['./flight.component.css'],
    }),
    __metadata("design:paramtypes", [DomSanitizer, SearchService])
], LeavingFromComponent);
export { LeavingFromComponent };
//# sourceMappingURL=../../../../src/app/flight/leavingFrom.component.js.map