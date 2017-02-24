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
import { SearchService } from './../services/search.service';
import { Http } from "@angular/http";
var FlightComponent = (function () {
    function FlightComponent(searchService, route, router, http) {
        this.searchService = searchService;
        this.route = route;
        this.router = router;
        this.http = http;
        this.items = [];
        this.items1 = [];
        this.flights = {};
        this.flights1 = [];
        this.countryCode = [];
        this.airLine = [];
        this.Carriers = [];
        this.Quotes = [];
        this.currency = [];
        this.dates = [];
        this.places = [];
        this.leavingFrom = "";
        this.leavingTo = "";
        this.depDate = "";
        this.retDate = "";
        this.countryData = [];
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
    FlightComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.leavingFrom = params['leavingFrom'];
            _this.leavingTo = params['leavingTo'];
            _this.depDate = params['depDate'];
            _this.retDate = params['retDate'];
        });
        if (this.leavingFrom != null && this.leavingTo != null && this.depDate != null) {
            this.getCurrentLocationData();
        }
    };
    FlightComponent.prototype.getCurrentLocationData = function () {
        var _this = this;
        this.searchService.getLocaleData().subscribe(function (data) {
            _this.countryCode.push(data.country);
            _this.getResultByHomeSearch();
        });
    };
    FlightComponent.prototype.getResultByHomeSearch = function () {
        var _this = this;
        var locale = this.userLang.split("-")[0] + "-" + this.countryCode[0];
        var search = { "leavingFrom": this.leavingFrom, "leavingTo": this.leavingTo, "depDate": this.depDate, "retDate": this.retDate,
            "market": this.countryCode[0], "locale": "en-US" };
        console.log(search);
        this.searchService.searchFlight(search).subscribe(function (data) { _this.flights = data; _this.Carriers = data.Carriers; _this.Quotes = data.Quotes; _this.flights1 = data.Quotes; _this.places = data.Places; _this.dates = data.Dates; _this.currency = data.Currencies; });
    };
    FlightComponent.prototype.FromResponse = function (event) {
        var _this = this;
        this.isClassVisible = false;
        this.isDivSetting = true;
        var search = { "market": this.market, "locale": this.userLang, "data": event };
        this.searchService.getSearchPlace(search).subscribe(function (data) { _this.items = data.Places; });
    };
    FlightComponent.prototype.toResponse = function (event) {
        var _this = this;
        this.isDivSetting = true;
        this.isClassVisible1 = false;
        var search = { "market": this.market, "locale": this.userLang, "data": event };
        this.searchService.getSearchPlace(search).subscribe(function (data) { _this.items1 = data.Places; });
    };
    FlightComponent.prototype.filterAirLines = function (name, event) {
        var _this = this;
        var quotes = [];
        if (event.target.checked == true) {
            this.airLine.push(name);
            for (var z = 0; z < this.flights1.length; z++) {
                if (this.flights1[z].InboundLeg) {
                    this.Quotes = this.flights1;
                    for (var i = 0; i < this.airLine.length; i++) {
                        if (this.Quotes[z].InboundLeg.CarrierIds.findIndex(function (x) { return x == _this.airLine[i]; }) > -1) {
                            quotes.push(this.Quotes[z]);
                        }
                    }
                }
                if (this.flights1[z].OutboundLeg) {
                    this.Quotes = this.flights1;
                    for (var i = 0; i < this.airLine.length; i++) {
                        if (this.Quotes[z].OutboundLeg.CarrierIds.findIndex(function (x) { return x == _this.airLine[i]; }) > -1) {
                            quotes.push(this.Quotes[z]);
                        }
                    }
                }
            }
        }
        else if (!event.target.checked) {
            var index = this.airLine.indexOf(name);
            this.airLine.splice(index, 1);
            for (var z = 0; z < this.flights1.length; z++) {
                if (this.flights1[z].InboundLeg) {
                    this.Quotes = this.flights1;
                    for (var i = 0; i < this.airLine.length; i++) {
                        if (this.Quotes[z].InboundLeg.CarrierIds.findIndex(function (x) { return x == _this.airLine[i]; }) > -1) {
                            quotes.push(this.Quotes[z]);
                        }
                    }
                }
                if (this.flights1[z].OutboundLeg) {
                    this.Quotes = this.flights1;
                    for (var i = 0; i < this.airLine.length; i++) {
                        if (this.Quotes[z].OutboundLeg.CarrierIds.findIndex(function (x) { return x == _this.airLine[i]; }) > -1) {
                            quotes.push(this.Quotes[z]);
                        }
                    }
                }
            }
        }
        this.flights = { "Quotes": quotes, "Places": this.places, "Dates": this.dates, "Currencies": this.currency };
    };
    FlightComponent.prototype.searchFlight = function () {
        var leavingFrom = jQuery('.fromCode').val().split("-")[0];
        var leavingTo = jQuery('.toCode').val().split("-")[0];
        var depDate = jQuery('#departure_date').val();
        var retDate = jQuery('#return_date').val();
        var dDate = (depDate == "" ? "nodate" : depDate);
        var rDate = (retDate == "" ? "nodate" : retDate);
        this.router.navigate(['/flight-list', leavingFrom, leavingTo, dDate.split("/").join("-"), rDate.split("/").join("-")]);
        window.location.reload();
    };
    return FlightComponent;
}());
FlightComponent = __decorate([
    Component({
        selector: 'app-flight',
        templateUrl: './flight.component.html',
        styleUrls: ['./flight.component.css'],
        styles: [
            ' .sel-div { display: none;position: absolute; z-index:9999;}',
            '.sel-div1 { display: none; }',
            '.lst { background-color: #fff; }',
            '.lstData { list-style: none; padding: 5px 10px; margin-left : -40px; }',
            '.lstData:hover { background-color : #00adef; cursor: pointer; }',
            '.div-setting {position: absolute; z-index: 9999; width : 90%;}'
        ]
    }),
    __metadata("design:paramtypes", [SearchService, ActivatedRoute, Router, Http])
], FlightComponent);
export { FlightComponent };
//# sourceMappingURL=../../../../src/app/flight/flight.component.js.map