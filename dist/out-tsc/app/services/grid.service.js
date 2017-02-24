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
var GridService = (function () {
    function GridService(http) {
        this.http = http;
        this.base_url = "http://localhost:8080/trip/webapi";
    }
    GridService.prototype.getGridDates = function (data) {
        return this.http.get(this.base_url + '/flights/grids/' + data['from'] + "/" + data['to'] + "/" + data['matket']).map(function (response) { return response.json(); });
    };
    GridService.prototype.changeGridDates = function (data) {
        return this.http.get(this.base_url + '/flights/changeGrids/' + data['from'] + "/" + data['to'] + "/" + data['depDate'] + "/" + data['retDate'] + "/" + data['matket']).map(function (response) { return response.json(); });
    };
    return GridService;
}());
GridService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], GridService);
export { GridService };
//# sourceMappingURL=../../../../src/app/services/grid.service.js.map