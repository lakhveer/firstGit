var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
var SearchService = (function () {
    function SearchService(http) {
        this.http = http;
        this.base_url = "http://localhost:8080/trip/webapi";
    }
    SearchService.prototype.getLocaleData = function () {
        return this.http.get('http://ipinfo.io').map(function (response) { return response.json(); });
    };
    SearchService.prototype.getSearchPlace = function (data) {
        return this.http.get(this.base_url + '/countries/places/' + data['market'] + "/" + data['locale'] + "/" + data['data']).map(function (response) { return response.json(); });
    };
    SearchService.prototype.getCityCountries = function () {
        return this.http.get(this.base_url + '/countries/cities').map(function (response) { return response.json(); });
    };
    SearchService.prototype.searchFlight = function (searchData) {
        return this.http.get(this.base_url + '/flights/' + searchData['leavingFrom'] + "/" + searchData['leavingTo']
            + "/" + searchData['depDate'].split("/").join("-") + "/" + searchData['retDate'].split("/").join("-") + "/" + searchData['market']
            + "/" + searchData['locale'])
            .map(function (response) { return response.json(); });
    };
    return SearchService;
}());
SearchService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], SearchService);
export { SearchService };
//# sourceMappingURL=../../../../src/app/services/search.service.js.map