(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\r\n    <title>Document</title>\r\n    <!-- <script src=\"https://cdn.jsdelivr.net/npm/canvas-confetti@0.4.0/dist/confetti.browser.min.js\"></script> -->\r\n</head>\r\n<body>\r\n    <!-- <canvas id=\"my-canvas\">ddfdf</canvas> -->\r\n    <router-outlet></router-outlet>\r\n</body>\r\n</html>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/check-leaderboard/check-leaderboard.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/check-leaderboard/check-leaderboard.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container\">\n\n                <div *ngIf=\"top\">\n\n                        <h2>You are in top 5</h2>\n                        <!-- <div class=\"party\" title=\":party:\">\n                                <a title=\":party:\" href=\"https://abstract.com\">\n                                        <ul>\n                                                <li></li>\n                                                <li></li>\n                                                <li></li>\n                                                <li></li>\n                                        </ul>\n                                </a>\n                        </div>                            -->\n                </div>\n                <h6 *ngIf=\"score\">SCORE</h6>\n                <h1 class=\"bigtext\">{{score}}</h1>\n                <h3 class=\"inline\">BEST SCORE {{ bestscore }}</h3>\n                <h1></h1>\n                <div *ngIf=\"isError\">        \n                        <h6 *ngIf=\"errors.name\">{{errors.name.message}}</h6>\n                        <h6 *ngIf=\"errors.qty\">{{errors.qty.message}}</h6>\n                        <h6 *ngIf=\"errors.price\">{{errors.price.message}}</h6>\n                </div>\n                <!-- <div *ngIf=(!name.valid)>{{ name.errors | json }}</div> -->\n                <!-- <p>{{ user | json}}</p> -->\n                <!-- <button [routerLink]=\"['/game']\" >PLAY AGAIN!</button> -->\n        \n        \n        <!-- <h1>Leader Board</h1>    -->\n        <div *ngIf=\"scores.length!=0\">\n                <table id=\"table\">\n                        <tr>\n                                <th>Name</th>\n                                <th>Score</th>\n                        </tr>\n                        <tr *ngFor=\"let score of scores\">\n                                <td>{{score.name}}</td>\n                                <td>{{score.score}}</td>\n                        </tr>\n                </table>\n        </div>\n        <form (submit)=\"onCreate()\">\n        <input type=\"text\" name=\"name\" \n        required \n        minlength=\"3\" \n        [(ngModel)]=\"user.name\"\n        #name = \"ngModel\"\n        placeholder=\"Enter your name\"\n        id=\"input\" />\n        <input type=\"submit\" name=\"Check Leaderboard\" value=\"SAVE\">\n        </form>\n\n        <button class=\"playbutton\" [routerLink]=\"['/game']\" >PLAY AGAIN</button>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/game.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/game/game.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<head>\n    <!-- Latest compiled and minified CSS -->    \n</head>\n\n<div class=\"game\">\n    <div class=\"top\">\n        <div class=\"timer\">\n            <div id=\"countdown\">\n                <div id=\"countdown-number\">{{timer}}</div>\n                <svg>\n                    <circle r=\"18\" cx=\"20\" cy=\"20\"></circle>\n                </svg>\n            </div>\n        </div>\n        <h2 class=\"display_inline right\">Score : {{score}}</h2>\n    </div>\n    <!-- <div class=\"header {{ bgcolor}}\"> -->\n    <div class=\"header\">     \n        <h1 class=\"{{textcolor}}\">{{ text }}</h1>\n    </div>\n    <div class=\"footer\">\n        <div class=\"block\">\n            <div class=\"red btn redbgcolor\" (click)=\"red(text)\"></div>\n            <div class=\"blue btn bluebgcolor\" (click)=\"blue(text)\"></div>\n        </div>\n        <div class=\"block\">\n            <div class=\"green btn greenbgcolor\" (click)=\"green(text)\"></div>\n            <div class=\"yellow btn yellowbgcolor\" (click)=\"yellow(text)\"></div>\n        </div>\n    </div>\n</div>\n\n<!-- <div class=\"container\">\n    <h2>Modal Example</h2>\n    <!-- Trigger the modal with a button -->\n    <!-- <button type=\"button\" class=\"btn btn-info btn-lg\" data-toggle=\"modal\" data-target=\"#myModal\">Open Modal</button> -->\n    \n    <!-- Modal -->\n    <!-- <div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n        <div class=\"modal-dialog\"> -->\n            \n            <!-- Modal content-->\n            <!-- <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                    <h4 class=\"modal-title\">Modal Header</h4>\n                </div>\n                <div class=\"modal-body\">\n                    <p>Some text in the modal.</p>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                </div>\n            </div>\n            \n        </div> -->\n        <!-- </div> -->\n        \n        \n        ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/leaderboard/leaderboard.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/leaderboard/leaderboard.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Leader Board</h1>   \n<table id=\"table\">\n        <tr>\n            <th>Name</th>\n            <th>Score</th>\n        </tr>\n        <tr *ngFor=\"let score of scores\">\n            <td>{{score.name}}</td>\n            <td>{{score.score}}</td>\n        </tr>\n    </table>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ready/ready.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ready/ready.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"demo\">\n        <div class=\"demo__colored-blocks\">\n          <div class=\"demo__colored-blocks-rotater\">\n            <div class=\"demo__colored-block\"></div>\n            <div class=\"demo__colored-block\"></div>\n            <div class=\"demo__colored-block\"></div>\n          </div>\n          <div class=\"demo__colored-blocks-inner\"></div>\n          <div class=\"demo__text\">Ready!</div>\n\n        </div>\n        <div class=\"demo__inner\">\n          <svg class=\"demo__numbers\" viewBox=\"0 0 100 100\">\n            <defs>\n              <path class=\"demo__num-path-1\" d=\"M40,28 55,22 55,78\"/>\n              <path class=\"demo__num-join-1-2\" d=\"M55,78 55,83 a17,17 0 1,0 34,0 a20,10 0 0,0 -20,-10\"/>\n              <path class=\"demo__num-path-2\" d=\"M69,73 l-35,0 l30,-30 a16,16 0 0,0 -22.6,-22.6 l-7,7\"/>\n              <path class=\"demo__num-join-2-3\" d=\"M28,69 Q25,44 34.4,27.4\"/>\n              <path class=\"demo__num-path-3\" d=\"M30,20 60,20 40,50 a18,15 0 1,1 -12,19\"/>\n            </defs>\n            <path class=\"demo__numbers-path\" \n                  d=\"M-10,20 60,20 40,50 a18,15 0 1,1 -12,19 \n                     Q25,44 34.4,27.4\n                     l7,-7 a16,16 0 0,1 22.6,22.6 l-30,30 l35,0 L69,73 \n                     a20,10 0 0,1 20,10 a17,17 0 0,1 -34,0 L55,83 \n                     l0,-61 L40,28\" />\n          </svg>\n        </div>\n      </div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _check_leaderboard_check_leaderboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./check-leaderboard/check-leaderboard.component */ "./src/app/check-leaderboard/check-leaderboard.component.ts");
/* harmony import */ var _leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./leaderboard/leaderboard.component */ "./src/app/leaderboard/leaderboard.component.ts");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");
/* harmony import */ var _ready_ready_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ready/ready.component */ "./src/app/ready/ready.component.ts");







const routes = [
    { path: 'game', component: _game_game_component__WEBPACK_IMPORTED_MODULE_5__["GameComponent"] },
    { path: 'leaderboard', component: _leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_4__["LeaderboardComponent"] },
    // { path: 'game', component: GameComponent},
    { path: 'checkin', component: _check_leaderboard_check_leaderboard_component__WEBPACK_IMPORTED_MODULE_3__["CheckLeaderboardComponent"] },
    { path: '', component: _ready_ready_component__WEBPACK_IMPORTED_MODULE_6__["ReadyComponent"] },
    { path: '*', pathMatch: 'full', redirectTo: '/' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");


// Dependency injection

let AppComponent = class AppComponent {
    constructor(_httpService) {
        this._httpService = _httpService;
        this.title = 'public';
    }
};
AppComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _check_leaderboard_check_leaderboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./check-leaderboard/check-leaderboard.component */ "./src/app/check-leaderboard/check-leaderboard.component.ts");
/* harmony import */ var _leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./leaderboard/leaderboard.component */ "./src/app/leaderboard/leaderboard.component.ts");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");
/* harmony import */ var _score_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./score.service */ "./src/app/score.service.ts");
/* harmony import */ var _ready_ready_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ready/ready.component */ "./src/app/ready/ready.component.ts");





// Registering service http


// Form module






let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _check_leaderboard_check_leaderboard_component__WEBPACK_IMPORTED_MODULE_8__["CheckLeaderboardComponent"],
            _leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_9__["LeaderboardComponent"],
            _game_game_component__WEBPACK_IMPORTED_MODULE_10__["GameComponent"],
            _ready_ready_component__WEBPACK_IMPORTED_MODULE_12__["ReadyComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        ],
        providers: [_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"],
            _score_service__WEBPACK_IMPORTED_MODULE_11__["ScoreService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/check-leaderboard/check-leaderboard.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/check-leaderboard/check-leaderboard.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url('https://unpkg.com/bootstrap@3.3.7/dist/css/bootstrap.min.css');\r\n*{\r\n    padding: 0px;\r\n    margin: 0px;\r\n}\r\ninput[type=text], select {\r\n    /* width: 100%; */\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    box-sizing: border-box;\r\n  }\r\ninput[type=submit], button {\r\n    /* width: 100%; */\r\n    width: 30%;\r\n    /* background-color: #4CAF50; */\r\n    background-color: #37c0ce;\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px;\r\n    border: none;\r\n    border-radius: 25px;\r\n    cursor: pointer;\r\n  }\r\ninput[type=submit]:hover, button {\r\n    /* background-color: #45a049; */\r\n    background-color: #37c0ce;\r\n\r\n  }\r\nform, table {\r\n      width: 30%;\r\n      margin: 10px auto;\r\n      /* background-color: #f2f2f2; */\r\n      /* padding: 20px; */\r\n  }\r\ndiv {\r\n    padding-top: 20px;\r\n    padding-bottom: 20px;\r\n    /* background-color: #f2f2f2; */\r\n    background-color: #32386D;\r\n    text-align: center;\r\n    /* height: 100%; */\r\n  }\r\nh3, h1, h6, h4 {\r\n      text-align: center;\r\n      color: white;\r\n  }\r\n.inline {\r\n    display: inline;\r\n  }\r\ntable {\r\n    border-collapse: collapse;\r\n    /* width: 50%;\r\n    margin: 0px auto;\r\n    padding: 20px; */\r\n  }\r\nth, td {\r\n    text-align: center;\r\n    padding: 8px;\r\n    color: #f2f2f2;\r\n  }\r\ntr:nth-child(even){\r\n    /* background-color: #f2f2f2 */\r\n    color: #f2f2f2;\r\n  }\r\nth {\r\n    /* background-color: #4CAF50; */\r\n    background-color: #37c0ce;\r\n    color: white;\r\n  }\r\nh1, h2 {\r\n    text-align: center;\r\n    color: white;\r\n  }\r\n.max_width{\r\n    width: 100%;\r\n  }\r\n@media only screen and (max-width: 700px) {\r\n    /* we will set these stylings only if the device is a screen with a width of 480px or less */\r\n    table {\r\n        width: 100%;\r\n    }\r\n  }\r\n@media only screen and (max-width: 700px) {\r\n    /* we will set these stylings only if the device is a screen with a width of 480px or less */\r\n    form {\r\n        width: 100%;\r\n        margin: 0px;\r\n    }\r\n    div {\r\n      padding: 0px;\r\n    }\r\n  }\r\n* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n    text-decoration: none;\r\n    color: inherit;\r\n    outline: none;\r\n    font-weight: inherit;\r\n    font-size: 1em;\r\n  }\r\nbody {\r\n    background-color: #3D3E6F;\r\n    /* height: 100%; */\r\n  }\r\n.container {\r\n    height: 100vh;\r\n    font-size: 20px;\r\n    font-style: ;\r\n    background-color: #3D3E6F\r\n  }\r\n.playbutton {\r\n  border-radius:25px;\r\n  position: fixed;\r\n  bottom: 0px;\r\n  left: 0px;\r\n  margin: 10px;\r\n  width: 95%;\r\n}\r\n.bigtext {\r\n  font-size: 100px;\r\n}\r\n#input {\r\n  border: none;\r\n  color: white;\r\n  background: none;\r\n  border-bottom: 1px solid white;\r\n}\r\n#input::-webkit-input-placeholder {\r\n  color: white;\r\n  opacity: 1; /* Firefox */\r\n}\r\n#input::-moz-placeholder {\r\n  color: white;\r\n  opacity: 1; /* Firefox */\r\n}\r\n#input::-ms-input-placeholder {\r\n  color: white;\r\n  opacity: 1; /* Firefox */\r\n}\r\n#input::placeholder {\r\n  color: white;\r\n  opacity: 1; /* Firefox */\r\n}\r\n.white {\r\n  color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hlY2stbGVhZGVyYm9hcmQvY2hlY2stbGVhZGVyYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyRUFBMkU7QUFDM0U7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixzQkFBc0I7RUFDeEI7QUFFQTtJQUNFLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsK0JBQStCO0lBQy9CLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGVBQWU7RUFDakI7QUFFQTtJQUNFLCtCQUErQjtJQUMvQix5QkFBeUI7O0VBRTNCO0FBRUE7TUFDSSxVQUFVO01BQ1YsaUJBQWlCO01BQ2pCLCtCQUErQjtNQUMvQixtQkFBbUI7RUFDdkI7QUFFQTtJQUNFLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsK0JBQStCO0lBQy9CLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsa0JBQWtCO0VBQ3BCO0FBRUE7TUFDSSxrQkFBa0I7TUFDbEIsWUFBWTtFQUNoQjtBQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUVBO0lBQ0UseUJBQXlCO0lBQ3pCOztvQkFFZ0I7RUFDbEI7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osY0FBYztFQUNoQjtBQUVBO0lBQ0UsOEJBQThCO0lBQzlCLGNBQWM7RUFDaEI7QUFFQTtJQUNFLCtCQUErQjtJQUMvQix5QkFBeUI7SUFDekIsWUFBWTtFQUNkO0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsWUFBWTtFQUNkO0FBRUE7SUFDRSxXQUFXO0VBQ2I7QUFHQTtJQUNFLDRGQUE0RjtJQUM1RjtRQUNJLFdBQVc7SUFDZjtFQUNGO0FBRUE7SUFDRSw0RkFBNEY7SUFDNUY7UUFDSSxXQUFXO1FBQ1gsV0FBVztJQUNmO0lBQ0E7TUFDRSxZQUFZO0lBQ2Q7RUFDRjtBQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixjQUFjO0VBQ2hCO0FBRUE7SUFDRSx5QkFBeUI7SUFDekIsa0JBQWtCO0VBQ3BCO0FBRUE7SUFDRSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFlBQVk7SUFDWjtFQUNGO0FBRUY7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFdBQVc7RUFDWCxTQUFTO0VBQ1QsWUFBWTtFQUNaLFVBQVU7QUFDWjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQjtFQUNoQiw4QkFBOEI7QUFDaEM7QUFFQTtFQUNFLFlBQVk7RUFDWixVQUFVLEVBQUUsWUFBWTtBQUMxQjtBQUhBO0VBQ0UsWUFBWTtFQUNaLFVBQVUsRUFBRSxZQUFZO0FBQzFCO0FBSEE7RUFDRSxZQUFZO0VBQ1osVUFBVSxFQUFFLFlBQVk7QUFDMUI7QUFIQTtFQUNFLFlBQVk7RUFDWixVQUFVLEVBQUUsWUFBWTtBQUMxQjtBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY2hlY2stbGVhZGVyYm9hcmQvY2hlY2stbGVhZGVyYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL3VucGtnLmNvbS9ib290c3RyYXBAMy4zLjcvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnKTtcclxuKntcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXRleHRdLCBzZWxlY3Qge1xyXG4gICAgLyogd2lkdGg6IDEwMCU7ICovXHJcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9c3VibWl0XSwgYnV0dG9uIHtcclxuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzdjMGNlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTRweCAyMHB4O1xyXG4gICAgbWFyZ2luOiA4cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICBpbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIsIGJ1dHRvbiB7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjNDVhMDQ5OyAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM3YzBjZTtcclxuXHJcbiAgfVxyXG5cclxuICBmb3JtLCB0YWJsZSB7XHJcbiAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyOyAqL1xyXG4gICAgICAvKiBwYWRkaW5nOiAyMHB4OyAqL1xyXG4gIH1cclxuICBcclxuICBkaXYge1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIzODZEO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLyogaGVpZ2h0OiAxMDAlOyAqL1xyXG4gIH1cclxuXHJcbiAgaDMsIGgxLCBoNiwgaDQge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIC5pbmxpbmUge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gIH1cclxuXHJcbiAgdGFibGUge1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIC8qIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgcGFkZGluZzogMjBweDsgKi9cclxuICB9XHJcbiAgXHJcbiAgdGgsIHRkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGNvbG9yOiAjZjJmMmYyO1xyXG4gIH1cclxuICBcclxuICB0cjpudGgtY2hpbGQoZXZlbil7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyICovXHJcbiAgICBjb2xvcjogI2YyZjJmMjtcclxuICB9XHJcbiAgXHJcbiAgdGgge1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDsgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzN2MwY2U7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICBoMSwgaDIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgLm1heF93aWR0aHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gICAgLyogd2Ugd2lsbCBzZXQgdGhlc2Ugc3R5bGluZ3Mgb25seSBpZiB0aGUgZGV2aWNlIGlzIGEgc2NyZWVuIHdpdGggYSB3aWR0aCBvZiA0ODBweCBvciBsZXNzICovXHJcbiAgICB0YWJsZSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgICAvKiB3ZSB3aWxsIHNldCB0aGVzZSBzdHlsaW5ncyBvbmx5IGlmIHRoZSBkZXZpY2UgaXMgYSBzY3JlZW4gd2l0aCBhIHdpZHRoIG9mIDQ4MHB4IG9yIGxlc3MgKi9cclxuICAgIGZvcm0ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgfVxyXG4gICAgZGl2IHtcclxuICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gIH1cclxuICBcclxuICBib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzRDNFNkY7XHJcbiAgICAvKiBoZWlnaHQ6IDEwMCU7ICovXHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXN0eWxlOiA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0QzRTZGXHJcbiAgfVxyXG4gIFxyXG4ucGxheWJ1dHRvbiB7XHJcbiAgYm9yZGVyLXJhZGl1czoyNXB4O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDBweDtcclxuICBsZWZ0OiAwcHg7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIHdpZHRoOiA5NSU7XHJcbn0gIFxyXG4gIFxyXG4uYmlndGV4dCB7XHJcbiAgZm9udC1zaXplOiAxMDBweDtcclxufVxyXG5cclxuI2lucHV0IHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xyXG59XHJcblxyXG4jaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgb3BhY2l0eTogMTsgLyogRmlyZWZveCAqL1xyXG59XHJcblxyXG4ud2hpdGUge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/check-leaderboard/check-leaderboard.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/check-leaderboard/check-leaderboard.component.ts ***!
  \******************************************************************/
/*! exports provided: CheckLeaderboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckLeaderboardComponent", function() { return CheckLeaderboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _score_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../score.service */ "./src/app/score.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");


// Dependency injection



let CheckLeaderboardComponent = class CheckLeaderboardComponent {
    constructor(_httpService, _route, _router, _scoreService) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this._scoreService = _scoreService;
        this.isError = false;
        this.scores = [];
        this.topscores = [];
        this.top = false;
    }
    ngOnInit() {
        this.user = { name: '', score: '' };
        this.score = this._scoreService.getScore();
        this.getLeaderboard();
    }
    onCreate() {
        console.log(this.user);
        // const random = Math.floor((Math.random() * 10) + 1);
        // console.log(random);
        // this.user.score = random;
        this.user.score = this.score;
        const observable = this._httpService.create(this.user);
        observable.subscribe((data) => {
            console.log('data inserted');
            this.getLeaderboard();
            console.log(data);
            if ('errors' in data) {
                this.isError = true;
                this.errors = data.errors;
            }
            else {
                this._router.navigate(['/checkin']);
            }
        });
    }
    getLeaderboard() {
        this.scores = [];
        const observable = this._httpService.getAll();
        observable.subscribe(data => {
            console.log('Data retrived');
            for (const score of data[Symbol.iterator]()) {
                this.scores.push(score);
                // this.topscores.push(score.score);
            }
            console.log('test', this.scores);
            if (this.score) {
                for (const top5scores of this.scores) {
                    if (this.score >= top5scores.score) {
                        this.top = true;
                        console.log('status', this.top);
                    }
                }
            }
            console.log('*********', this.scores);
            if (this.scores.length !== 0) {
                this.bestscore = this.scores[0].score;
            }
            else {
                this.bestscore = 0;
                if (this.score) {
                    this.top = true;
                }
            }
            console.log('best score', this.bestscore);
        });
    }
};
CheckLeaderboardComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _score_service__WEBPACK_IMPORTED_MODULE_3__["ScoreService"] }
];
CheckLeaderboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-check-leaderboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./check-leaderboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/check-leaderboard/check-leaderboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./check-leaderboard.component.css */ "./src/app/check-leaderboard/check-leaderboard.component.css")).default]
    })
], CheckLeaderboardComponent);



/***/ }),

/***/ "./src/app/game/game.component.css":
/*!*****************************************!*\
  !*** ./src/app/game/game.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\r\n    padding: 0px;\r\n    margin: 0px auto;\r\n}\r\n\r\n.game{\r\n    width: 100%;\r\n    height: 100%;\r\n    max-width: 500px;\r\n    /* border: 1px solid black; */\r\n}\r\n\r\n.header {\r\n    height: 50%;\r\n    border: 1px solid white;\r\n    background-color: white;\r\n}\r\n\r\n.footer {\r\n    height: 40%;\r\n    width: 100%;\r\n    max-width: 500px;\r\n    position: fixed;\r\n    bottom: 0px;\r\n}\r\n\r\n.block {\r\n    display: block;\r\n    height: 50%;\r\n    width: 100%;\r\n    max-width: 500px;\r\n    background-color: rgb(199, 199, 219);\r\n}\r\n\r\n.red, .blue, .green, .yellow {\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    width: 50%;\r\n    height: 100%;\r\n}\r\n\r\n.redbgcolor{\r\n    background: #FD3359;\r\n}\r\n\r\n.greenbgcolor {\r\n    background: #1c9c73;\r\n}\r\n\r\n.bluebgcolor {\r\n    background: #21BDFF;\r\n}\r\n\r\n.yellowbgcolor {\r\n    background: #F4D302;\r\n}\r\n\r\n.redtextcolor{\r\n    color: #FD3359;\r\n}\r\n\r\n.greentextcolor {\r\n    color: #1c9c73;\r\n}\r\n\r\n.bluetextcolor {\r\n    color: #21BDFF;\r\n}\r\n\r\n.yellowtextcolor {\r\n    color: #F4D302;\r\n}\r\n\r\nh1 {\r\n    text-align: center;\r\n    font-size: 90px;\r\n    color: #fff;\r\n    position: absolute;\r\n    top: 24%;\r\n    margin: 0 auto;\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n\r\n.top {\r\n    height: 10%;\r\n    width: 100%;\r\n}\r\n\r\n.timer {\r\n    display: inline-block;\r\n    width: 15%;\r\n    vertical-align: top;\r\n    \r\n}\r\n\r\n.display_inline {\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    width: 85%;\r\n    padding: 3%;\r\n}\r\n\r\n.right {\r\n    -moz-text-align-last: end;\r\n         text-align-last: end;\r\n}\r\n\r\n.btn {\r\n    position: relative;\r\n    display: inline-block;\r\n    box-sizing: border-box;\r\n    border: none;\r\n    text-overflow: ellipsis;\r\n    text-transform: uppercase;\r\n    color: rgb(var(--pure-material-onprimary-rgb, 255, 255, 255));\r\n    font-family: var(--pure-material-font, \"Roboto\", \"Segoe UI\", BlinkMacSystemFont, system-ui, -apple-system);          \r\n    overflow: hidden;\r\n    outline: none;\r\n    cursor: pointer;\r\n    transition: box-shadow 0.2s;\r\n    border: 10px solid white;\r\n}\r\n\r\n.btn::-moz-focus-inner {\r\n    border: none;\r\n}\r\n\r\n/* Overlay */\r\n\r\n.btn::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    background-color: rgb(var(--pure-material-onprimary-rgb, 255, 255, 255));\r\n    opacity: 0;\r\n    transition: opacity 0.2s;\r\n}\r\n\r\n/* Ripple */\r\n\r\n.btn::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    border-radius: 50%;\r\n    padding: 50%;\r\n    width: 32px; /* Safari */\r\n    height: 32px; /* Safari */\r\n    background-color: rgb(var(--pure-material-onprimary-rgb, 255, 255, 255));\r\n    opacity: 0;\r\n    transform: translate(-50%, -50%) scale(1);\r\n    transition: opacity 1s, transform 0.5s;\r\n}\r\n\r\n/* Hover, Focus */\r\n\r\n.btn:hover,\r\n.btn:focus {\r\n    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.btn:hover::before {\r\n    opacity: 0.08;\r\n}\r\n\r\n.btn:focus::before {\r\n    opacity: 0.24;\r\n}\r\n\r\n.btn:hover:focus::before {\r\n    opacity: 0.3;\r\n}\r\n\r\n/* Active */\r\n\r\n.btn:active {\r\n    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.btn:active::after {\r\n    opacity: 0.32;\r\n    transform: translate(-50%, -50%) scale(0);\r\n    transition: transform 0s;\r\n}\r\n\r\n/* Disabled */\r\n\r\n.btn:disabled {\r\n    color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.38);\r\n    background-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.12);\r\n    box-shadow: none;\r\n    cursor: initial;\r\n}\r\n\r\n.btn:disabled::before {\r\n    opacity: 0;\r\n}\r\n\r\n.btn:disabled::after {\r\n    opacity: 0;\r\n}\r\n\r\n#countdown {\r\n    position: relative;\r\n    margin: 5px auto;\r\n    /* margin-top: 100px; */\r\n    height: 40px;\r\n    width: 40px;\r\n    text-align: center;\r\n  }\r\n\r\n#countdown-number {\r\n    color:black;\r\n    display: inline-block;\r\n    line-height: 40px;\r\n  }\r\n\r\nsvg {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    width: 40px;\r\n    height: 40px;\r\n    transform: rotateY(-180deg) rotateZ(-90deg);\r\n  }\r\n\r\nsvg circle {\r\n    stroke-dasharray: 113px;\r\n    stroke-dashoffset: 0px;\r\n    stroke-linecap: round;\r\n    stroke-width: 2px;\r\n    stroke: black;\r\n    fill: none;\r\n    -webkit-animation: countdown 15s linear infinite forwards;\r\n            animation: countdown 15s linear infinite forwards;\r\n  }\r\n\r\n@-webkit-keyframes countdown {\r\n    from {\r\n      stroke-dashoffset: 0px;\r\n    }\r\n    to {\r\n      stroke-dashoffset: 113px;\r\n    }\r\n  }\r\n\r\n@keyframes countdown {\r\n    from {\r\n      stroke-dashoffset: 0px;\r\n    }\r\n    to {\r\n      stroke-dashoffset: 113px;\r\n    }\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9nYW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksV0FBVztJQUNYLHVCQUF1QjtJQUN2Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixjQUFjO0lBQ2QsV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsVUFBVTtJQUNWLG1CQUFtQjs7QUFFdkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx5QkFBb0I7U0FBcEIsb0JBQW9CO0FBQ3hCOztBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsNkRBQTZEO0lBQzdELDBHQUEwRztJQUMxRyxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0Isd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQSxZQUFZOztBQUNaO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1Isd0VBQXdFO0lBQ3hFLFVBQVU7SUFDVix3QkFBd0I7QUFDNUI7O0FBRUEsV0FBVzs7QUFDWDtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7SUFDUixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVcsRUFBRSxXQUFXO0lBQ3hCLFlBQVksRUFBRSxXQUFXO0lBQ3pCLHdFQUF3RTtJQUN4RSxVQUFVO0lBQ1YseUNBQXlDO0lBQ3pDLHNDQUFzQztBQUMxQzs7QUFFQSxpQkFBaUI7O0FBQ2pCOztJQUVJLGdIQUFnSDtBQUNwSDs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQSxXQUFXOztBQUNYO0lBQ0kscUhBQXFIO0FBQ3pIOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHlDQUF5QztJQUN6Qyx3QkFBd0I7QUFDNUI7O0FBRUEsYUFBYTs7QUFDYjtJQUNJLDhEQUE4RDtJQUM5RCx5RUFBeUU7SUFDekUsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUU7SUFDRSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtFQUNwQjs7QUFFQTtJQUNFLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsaUJBQWlCO0VBQ25COztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixRQUFRO0lBQ1IsV0FBVztJQUNYLFlBQVk7SUFDWiwyQ0FBMkM7RUFDN0M7O0FBRUE7SUFDRSx1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLFVBQVU7SUFDVix5REFBaUQ7WUFBakQsaURBQWlEO0VBQ25EOztBQUVBO0lBQ0U7TUFDRSxzQkFBc0I7SUFDeEI7SUFDQTtNQUNFLHdCQUF3QjtJQUMxQjtFQUNGOztBQVBBO0lBQ0U7TUFDRSxzQkFBc0I7SUFDeEI7SUFDQTtNQUNFLHdCQUF3QjtJQUMxQjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvZ2FtZS9nYW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbn1cclxuXHJcbi5nYW1le1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICovXHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZm9vdGVyIHtcclxuICAgIGhlaWdodDogNDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbi5ibG9jayB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5OSwgMTk5LCAyMTkpO1xyXG59XHJcblxyXG4ucmVkLCAuYmx1ZSwgLmdyZWVuLCAueWVsbG93IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ucmVkYmdjb2xvcntcclxuICAgIGJhY2tncm91bmQ6ICNGRDMzNTk7XHJcbn1cclxuXHJcbi5ncmVlbmJnY29sb3Ige1xyXG4gICAgYmFja2dyb3VuZDogIzFjOWM3MztcclxufVxyXG5cclxuLmJsdWViZ2NvbG9yIHtcclxuICAgIGJhY2tncm91bmQ6ICMyMUJERkY7XHJcbn1cclxuXHJcbi55ZWxsb3diZ2NvbG9yIHtcclxuICAgIGJhY2tncm91bmQ6ICNGNEQzMDI7XHJcbn1cclxuXHJcbi5yZWR0ZXh0Y29sb3J7XHJcbiAgICBjb2xvcjogI0ZEMzM1OTtcclxufVxyXG5cclxuLmdyZWVudGV4dGNvbG9yIHtcclxuICAgIGNvbG9yOiAjMWM5YzczO1xyXG59XHJcblxyXG4uYmx1ZXRleHRjb2xvciB7XHJcbiAgICBjb2xvcjogIzIxQkRGRjtcclxufVxyXG5cclxuLnllbGxvd3RleHRjb2xvciB7XHJcbiAgICBjb2xvcjogI0Y0RDMwMjtcclxufVxyXG5cclxuaDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiA5MHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDI0JTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50b3Age1xyXG4gICAgaGVpZ2h0OiAxMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRpbWVyIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxNSU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgXHJcbn1cclxuXHJcbi5kaXNwbGF5X2lubGluZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIHBhZGRpbmc6IDMlO1xyXG59XHJcblxyXG4ucmlnaHQge1xyXG4gICAgdGV4dC1hbGlnbi1sYXN0OiBlbmQ7XHJcbn1cclxuXHJcblxyXG4uYnRuIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBjb2xvcjogcmdiKHZhcigtLXB1cmUtbWF0ZXJpYWwtb25wcmltYXJ5LXJnYiwgMjU1LCAyNTUsIDI1NSkpO1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXB1cmUtbWF0ZXJpYWwtZm9udCwgXCJSb2JvdG9cIiwgXCJTZWdvZSBVSVwiLCBCbGlua01hY1N5c3RlbUZvbnQsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSk7ICAgICAgICAgIFxyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMnM7XHJcbiAgICBib3JkZXI6IDEwcHggc29saWQgd2hpdGU7XHJcbn1cclxuXHJcbi5idG46Oi1tb3otZm9jdXMtaW5uZXIge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4vKiBPdmVybGF5ICovXHJcbi5idG46OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKHZhcigtLXB1cmUtbWF0ZXJpYWwtb25wcmltYXJ5LXJnYiwgMjU1LCAyNTUsIDI1NSkpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcclxufVxyXG5cclxuLyogUmlwcGxlICovXHJcbi5idG46OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHBhZGRpbmc6IDUwJTtcclxuICAgIHdpZHRoOiAzMnB4OyAvKiBTYWZhcmkgKi9cclxuICAgIGhlaWdodDogMzJweDsgLyogU2FmYXJpICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IodmFyKC0tcHVyZS1tYXRlcmlhbC1vbnByaW1hcnktcmdiLCAyNTUsIDI1NSwgMjU1KSk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzLCB0cmFuc2Zvcm0gMC41cztcclxufVxyXG5cclxuLyogSG92ZXIsIEZvY3VzICovXHJcbi5idG46aG92ZXIsXHJcbi5idG46Zm9jdXMge1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDRweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG5cclxuLmJ0bjpob3Zlcjo6YmVmb3JlIHtcclxuICAgIG9wYWNpdHk6IDAuMDg7XHJcbn1cclxuXHJcbi5idG46Zm9jdXM6OmJlZm9yZSB7XHJcbiAgICBvcGFjaXR5OiAwLjI0O1xyXG59XHJcblxyXG4uYnRuOmhvdmVyOmZvY3VzOjpiZWZvcmUge1xyXG4gICAgb3BhY2l0eTogMC4zO1xyXG59XHJcblxyXG4vKiBBY3RpdmUgKi9cclxuLmJ0bjphY3RpdmUge1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG59XHJcblxyXG4uYnRuOmFjdGl2ZTo6YWZ0ZXIge1xyXG4gICAgb3BhY2l0eTogMC4zMjtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDApO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDBzO1xyXG59XHJcblxyXG4vKiBEaXNhYmxlZCAqL1xyXG4uYnRuOmRpc2FibGVkIHtcclxuICAgIGNvbG9yOiByZ2JhKHZhcigtLXB1cmUtbWF0ZXJpYWwtb25zdXJmYWNlLXJnYiwgMCwgMCwgMCksIDAuMzgpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1wdXJlLW1hdGVyaWFsLW9uc3VyZmFjZS1yZ2IsIDAsIDAsIDApLCAwLjEyKTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBjdXJzb3I6IGluaXRpYWw7XHJcbn1cclxuXHJcbi5idG46ZGlzYWJsZWQ6OmJlZm9yZSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4uYnRuOmRpc2FibGVkOjphZnRlciB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG59XHJcbiAgXHJcbiAgI2NvdW50ZG93biB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDVweCBhdXRvO1xyXG4gICAgLyogbWFyZ2luLXRvcDogMTAwcHg7ICovXHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgI2NvdW50ZG93bi1udW1iZXIge1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICB9XHJcbiAgXHJcbiAgc3ZnIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZykgcm90YXRlWigtOTBkZWcpO1xyXG4gIH1cclxuICBcclxuICBzdmcgY2lyY2xlIHtcclxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDExM3B4O1xyXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDBweDtcclxuICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcclxuICAgIHN0cm9rZS13aWR0aDogMnB4O1xyXG4gICAgc3Ryb2tlOiBibGFjaztcclxuICAgIGZpbGw6IG5vbmU7XHJcbiAgICBhbmltYXRpb246IGNvdW50ZG93biAxNXMgbGluZWFyIGluZmluaXRlIGZvcndhcmRzO1xyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIGNvdW50ZG93biB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDBweDtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDExM3B4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/game/game.component.ts":
/*!****************************************!*\
  !*** ./src/app/game/game.component.ts ***!
  \****************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _score_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../score.service */ "./src/app/score.service.ts");





let GameComponent = class GameComponent {
    // countdown: any;
    constructor(_httpService, _route, _router, _scoreService) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this._scoreService = _scoreService;
        this.colors = ['Blue', 'Red', 'Yellow', 'Green'];
        this.score = 0;
        this.timer = 0;
    }
    ngOnInit() {
        this.colors = ['Blue', 'Red', 'Yellow', 'Green'];
        this.text = this.random();
        this.bgcolor = this.random().toLocaleLowerCase() + 'bgcolor';
        this.textcolor = this.random().toLocaleLowerCase() + 'textcolor';
        if (this.timer === 0) {
            this.countdown();
        }
    }
    random() {
        const randomtext = this.colors[Math.floor(Math.random() * this.colors.length)];
        return randomtext;
    }
    red(text) {
        if (text === 'Red') {
            this.score = this.score + 1;
            console.log(this.score);
            this.ngOnInit();
        }
        else {
            console.log('game over');
            this._scoreService.postScore(this.score);
            this._router.navigate(['/checkin']);
        }
    }
    green(text) {
        if (text === 'Green') {
            this.score = this.score + 1;
            console.log(this.score);
            this.ngOnInit();
        }
        else {
            console.log('game over');
            this._scoreService.postScore(this.score);
            this._router.navigate(['/checkin']);
        }
    }
    blue(text) {
        if (text === 'Blue') {
            this.score = this.score + 1;
            console.log(this.score);
            this.ngOnInit();
        }
        else {
            console.log('game over');
            this._scoreService.postScore(this.score);
            this._router.navigate(['/checkin']);
        }
    }
    yellow(text) {
        if (text === 'Yellow') {
            this.score = this.score + 1;
            console.log(this.score);
            this.ngOnInit();
        }
        else {
            console.log('game over');
            this._scoreService.postScore(this.score);
            this._router.navigate(['/checkin']);
        }
    }
    countdown() {
        console.log('*******', this.timer);
        this.interval = setInterval(() => {
            if (this.timer !== 15) {
                this.timer = this.timer + 1;
                // this.countdown = this.countdown === 0 ? 10 : this.countdown;
            }
            else {
                // clearInterval(this.interval);
                this._scoreService.postScore(this.score);
                this._router.navigate(['/checkin']);
            }
        }, 1000);
    }
};
GameComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _score_service__WEBPACK_IMPORTED_MODULE_4__["ScoreService"] }
];
GameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-game',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./game.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/game.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./game.component.css */ "./src/app/game/game.component.css")).default]
    })
], GameComponent);



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");


// Dependency InjectionToken

let HttpService = class HttpService {
    constructor(_http) {
        this._http = _http;
    }
    create(userBody) {
        return this._http.post('/users/new', userBody);
    }
    getAll() {
        return this._http.get('/users');
    }
};
HttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HttpService);



/***/ }),

/***/ "./src/app/leaderboard/leaderboard.component.css":
/*!*******************************************************!*\
  !*** ./src/app/leaderboard/leaderboard.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* @import url('https://unpkg.com/bootstrap@3.3.7/dist/css/bootstrap.min.css'); */\r\n\r\ntable {\r\n    border-collapse: collapse;\r\n    width: 50%;\r\n    margin: 0px auto;\r\n  }\r\n\r\nth, td {\r\n    text-align: center;\r\n    padding: 8px;\r\n  }\r\n\r\ntr:nth-child(even){background-color: #f2f2f2}\r\n\r\nth {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n  }\r\n\r\nh1{\r\n    text-align: center;\r\n  }\r\n\r\n@media only screen and (max-width: 700px) {\r\n    /* we will set these stylings only if the device is a screen with a width of 480px or less */\r\n    table {\r\n        width: 100%;\r\n    }\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVhZGVyYm9hcmQvbGVhZGVyYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpRkFBaUY7O0FBRWpGO0lBQ0kseUJBQXlCO0lBQ3pCLFVBQVU7SUFDVixnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsWUFBWTtFQUNkOztBQUVBLG1CQUFtQix5QkFBeUI7O0FBRTVDO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7RUFDZDs7QUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7QUFFQTtJQUNFLDRGQUE0RjtJQUM1RjtRQUNJLFdBQVc7SUFDZjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvbGVhZGVyYm9hcmQvbGVhZGVyYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEBpbXBvcnQgdXJsKCdodHRwczovL3VucGtnLmNvbS9ib290c3RyYXBAMy4zLjcvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnKTsgKi9cclxuXHJcbnRhYmxlIHtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxuICB9XHJcbiAgXHJcbiAgdGgsIHRkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICB9XHJcbiAgXHJcbiAgdHI6bnRoLWNoaWxkKGV2ZW4pe2JhY2tncm91bmQtY29sb3I6ICNmMmYyZjJ9XHJcbiAgXHJcbiAgdGgge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIGgxe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gICAgLyogd2Ugd2lsbCBzZXQgdGhlc2Ugc3R5bGluZ3Mgb25seSBpZiB0aGUgZGV2aWNlIGlzIGEgc2NyZWVuIHdpdGggYSB3aWR0aCBvZiA0ODBweCBvciBsZXNzICovXHJcbiAgICB0YWJsZSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gICJdfQ== */");

/***/ }),

/***/ "./src/app/leaderboard/leaderboard.component.ts":
/*!******************************************************!*\
  !*** ./src/app/leaderboard/leaderboard.component.ts ***!
  \******************************************************/
/*! exports provided: LeaderboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderboardComponent", function() { return LeaderboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");


// Dependency injection


let LeaderboardComponent = class LeaderboardComponent {
    constructor(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.scores = [];
    }
    ngOnInit() {
        this.getLeaderboard();
    }
    getLeaderboard() {
        this.scores = [];
        const observable = this._httpService.getAll();
        observable.subscribe(data => {
            console.log('Data retrived');
            for (const score of data[Symbol.iterator]()) {
                this.scores.push(score);
            }
            console.log(this.scores);
        });
    }
};
LeaderboardComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LeaderboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-leaderboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./leaderboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/leaderboard/leaderboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./leaderboard.component.css */ "./src/app/leaderboard/leaderboard.component.css")).default]
    })
], LeaderboardComponent);



/***/ }),

/***/ "./src/app/ready/ready.component.css":
/*!*******************************************!*\
  !*** ./src/app/ready/ready.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("*, *:before, *:after {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  \r\n  body {\r\n    background: #32386D;\r\n    font-family: Helvetica, Arial, sans-serif;\r\n  }\r\n  \r\n  .demo {\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    width: 500px;\r\n    height: 140px;\r\n    margin-top: -70px;\r\n    padding: 10px;\r\n    border-radius: 20px;\r\n    transform: translateX(-50%);\r\n  }\r\n  \r\n  .demo__colored-blocks {\r\n    overflow: hidden;\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 0;\r\n    width: 500px;\r\n    height: 100%;\r\n    margin-left: -250px;\r\n    padding: 10px;\r\n    border-radius: 20px;\r\n    perspective: 1000px;\r\n    -webkit-animation: demoAnim 4s ease-in-out infinite, contAnim 4s infinite;\r\n            animation: demoAnim 4s ease-in-out infinite, contAnim 4s infinite;\r\n  }\r\n  \r\n  .demo__colored-blocks-rotater {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: inherit;\r\n    -webkit-animation: rotation 1.3s linear infinite;\r\n            animation: rotation 1.3s linear infinite;\r\n  }\r\n  \r\n  .demo__colored-blocks-inner {\r\n    overflow: hidden;\r\n    position: relative;\r\n    height: 100%;\r\n    background: #32386D;\r\n    border-radius: inherit;\r\n  }\r\n  \r\n  .demo__colored-block {\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    width: 300%;\r\n    height: 300%;\r\n    transform-origin: 0 0;\r\n  }\r\n  \r\n  .demo__colored-block:nth-child(1) {\r\n    transform: rotate(0deg) skewX(-30deg);\r\n    background-color: #FD3359;\r\n  }\r\n  \r\n  .demo__colored-block:nth-child(2) {\r\n    transform: rotate(120deg) skewX(-30deg);\r\n    background-color: #F4D302;\r\n  }\r\n  \r\n  .demo__colored-block:nth-child(3) {\r\n    transform: rotate(240deg) skewX(-30deg);\r\n    background-color: #21BDFF;\r\n  }\r\n  \r\n  .demo__inner {\r\n    overflow: hidden;\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n  \r\n  .demo__numbers {\r\n    overflow: visible;\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    width: 100px;\r\n    height: 100px;\r\n    margin-left: -50px;\r\n    margin-top: -50px;\r\n  }\r\n  \r\n  .demo__numbers-path {\r\n    fill: none;\r\n    stroke-width: 10px;\r\n    stroke: #fff;\r\n    stroke-linecap: round;\r\n    stroke-linejoin: round;\r\n    stroke-dasharray: 0, 518.055065155;\r\n    stroke-dashoffset: 0;\r\n    -webkit-animation: numAnim 4s ease-in-out infinite;\r\n            animation: numAnim 4s ease-in-out infinite;\r\n    opacity: 0;\r\n  }\r\n  \r\n  .demo__text {\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 0;\r\n    width: 500px;\r\n    height: 100%;\r\n    margin-left: -250px;\r\n    text-align: center;\r\n    line-height: 140px;\r\n    font-size: 80px;\r\n    color: #fff;\r\n    text-transform: uppercase;\r\n    letter-spacing: 15px;\r\n    transform: translateX(10px);\r\n    -webkit-animation: hideText 4s infinite;\r\n            animation: hideText 4s infinite;\r\n  }\r\n  \r\n  @-webkit-keyframes contAnim {\r\n    15%, 100% {\r\n      margin-left: -250px;\r\n      width: 500px;\r\n    }\r\n    25%, 90% {\r\n      margin-left: -70px;\r\n      width: 140px;\r\n    }\r\n  }\r\n  \r\n  @keyframes contAnim {\r\n    15%, 100% {\r\n      margin-left: -250px;\r\n      width: 500px;\r\n    }\r\n    25%, 90% {\r\n      margin-left: -70px;\r\n      width: 140px;\r\n    }\r\n  }\r\n  \r\n  @-webkit-keyframes numAnim {\r\n    15% {\r\n      stroke-dasharray: 0, 518.055065155;\r\n      stroke-dashoffset: 0;\r\n      opacity: 0;\r\n    }\r\n    25%, 41% {\r\n      opacity: 1;\r\n      stroke-dasharray: 144.4256591797, 518.055065155;\r\n      stroke-dashoffset: -40;\r\n    }\r\n    53%, 66% {\r\n      stroke-dasharray: 136.0216217041, 518.055065155;\r\n      stroke-dashoffset: -227.238697052;\r\n    }\r\n    76% {\r\n      stroke-dasharray: 113.4751205444, 518.055065155;\r\n      stroke-dashoffset: -445.8995704651;\r\n    }\r\n    88%, 100% {\r\n      stroke-dasharray: 72.1554946899, 518.055065155;\r\n      stroke-dashoffset: -445.8995704651;\r\n    }\r\n    92% {\r\n      opacity: 1;\r\n    }\r\n    100% {\r\n      opacity: 0;\r\n    }\r\n  }\r\n  \r\n  @keyframes numAnim {\r\n    15% {\r\n      stroke-dasharray: 0, 518.055065155;\r\n      stroke-dashoffset: 0;\r\n      opacity: 0;\r\n    }\r\n    25%, 41% {\r\n      opacity: 1;\r\n      stroke-dasharray: 144.4256591797, 518.055065155;\r\n      stroke-dashoffset: -40;\r\n    }\r\n    53%, 66% {\r\n      stroke-dasharray: 136.0216217041, 518.055065155;\r\n      stroke-dashoffset: -227.238697052;\r\n    }\r\n    76% {\r\n      stroke-dasharray: 113.4751205444, 518.055065155;\r\n      stroke-dashoffset: -445.8995704651;\r\n    }\r\n    88%, 100% {\r\n      stroke-dasharray: 72.1554946899, 518.055065155;\r\n      stroke-dashoffset: -445.8995704651;\r\n    }\r\n    92% {\r\n      opacity: 1;\r\n    }\r\n    100% {\r\n      opacity: 0;\r\n    }\r\n  }\r\n  \r\n  @-webkit-keyframes rotation {\r\n    to {\r\n      transform: rotate(360deg);\r\n    }\r\n  }\r\n  \r\n  @keyframes rotation {\r\n    to {\r\n      transform: rotate(360deg);\r\n    }\r\n  }\r\n  \r\n  @-webkit-keyframes demoAnim {\r\n    15% {\r\n      border-radius: 20px;\r\n      transform: rotate(0);\r\n    }\r\n    30%, 43% {\r\n      border-radius: 50%;\r\n      transform: rotate(360deg);\r\n    }\r\n    52%, 65% {\r\n      border-radius: 0;\r\n      transform: rotate(720deg);\r\n    }\r\n    78%, 90% {\r\n      border-radius: 50%;\r\n      transform: rotate(1080deg);\r\n    }\r\n    100% {\r\n      border-radius: 20px;\r\n      transform: rotate(1440deg);\r\n    }\r\n  }\r\n  \r\n  @keyframes demoAnim {\r\n    15% {\r\n      border-radius: 20px;\r\n      transform: rotate(0);\r\n    }\r\n    30%, 43% {\r\n      border-radius: 50%;\r\n      transform: rotate(360deg);\r\n    }\r\n    52%, 65% {\r\n      border-radius: 0;\r\n      transform: rotate(720deg);\r\n    }\r\n    78%, 90% {\r\n      border-radius: 50%;\r\n      transform: rotate(1080deg);\r\n    }\r\n    100% {\r\n      border-radius: 20px;\r\n      transform: rotate(1440deg);\r\n    }\r\n  }\r\n  \r\n  @-webkit-keyframes hideText {\r\n    15%, 100% {\r\n      opacity: 1;\r\n    }\r\n    20%, 96% {\r\n      opacity: 0;\r\n    }\r\n  }\r\n  \r\n  @keyframes hideText {\r\n    15%, 100% {\r\n      opacity: 1;\r\n    }\r\n    20%, 96% {\r\n      opacity: 0;\r\n    }\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVhZHkvcmVhZHkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtFQUNaOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLHlDQUF5QztFQUMzQzs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtJQUNSLFlBQVk7SUFDWixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQkFBbUI7SUFFWCwyQkFBMkI7RUFDckM7O0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxNQUFNO0lBQ04sWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG1CQUFtQjtJQUVYLG1CQUFtQjtJQUMzQix5RUFBeUU7WUFDakUsaUVBQWlFO0VBQzNFOztFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxNQUFNO0lBQ04sV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsZ0RBQWdEO1lBQ3hDLHdDQUF3QztFQUNsRDs7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixzQkFBc0I7RUFDeEI7O0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7SUFDUixXQUFXO0lBQ1gsWUFBWTtJQUVKLHFCQUFxQjtFQUMvQjs7RUFDQTtJQUVVLHFDQUFxQztJQUM3Qyx5QkFBeUI7RUFDM0I7O0VBQ0E7SUFFVSx1Q0FBdUM7SUFDL0MseUJBQXlCO0VBQzNCOztFQUNBO0lBRVUsdUNBQXVDO0lBQy9DLHlCQUF5QjtFQUMzQjs7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFDQTtJQUNFLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7SUFDUixZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7O0VBQ0E7SUFDRSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLGtDQUFrQztJQUNsQyxvQkFBb0I7SUFDcEIsa0RBQWtEO1lBQzFDLDBDQUEwQztJQUNsRCxVQUFVO0VBQ1o7O0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULE1BQU07SUFDTixZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLG9CQUFvQjtJQUVaLDJCQUEyQjtJQUNuQyx1Q0FBdUM7WUFDL0IsK0JBQStCO0VBQ3pDOztFQUVBO0lBQ0U7TUFDRSxtQkFBbUI7TUFDbkIsWUFBWTtJQUNkO0lBQ0E7TUFDRSxrQkFBa0I7TUFDbEIsWUFBWTtJQUNkO0VBQ0Y7O0VBRUE7SUFDRTtNQUNFLG1CQUFtQjtNQUNuQixZQUFZO0lBQ2Q7SUFDQTtNQUNFLGtCQUFrQjtNQUNsQixZQUFZO0lBQ2Q7RUFDRjs7RUFDQTtJQUNFO01BQ0Usa0NBQWtDO01BQ2xDLG9CQUFvQjtNQUNwQixVQUFVO0lBQ1o7SUFDQTtNQUNFLFVBQVU7TUFDViwrQ0FBK0M7TUFDL0Msc0JBQXNCO0lBQ3hCO0lBQ0E7TUFDRSwrQ0FBK0M7TUFDL0MsaUNBQWlDO0lBQ25DO0lBQ0E7TUFDRSwrQ0FBK0M7TUFDL0Msa0NBQWtDO0lBQ3BDO0lBQ0E7TUFDRSw4Q0FBOEM7TUFDOUMsa0NBQWtDO0lBQ3BDO0lBQ0E7TUFDRSxVQUFVO0lBQ1o7SUFDQTtNQUNFLFVBQVU7SUFDWjtFQUNGOztFQUNBO0lBQ0U7TUFDRSxrQ0FBa0M7TUFDbEMsb0JBQW9CO01BQ3BCLFVBQVU7SUFDWjtJQUNBO01BQ0UsVUFBVTtNQUNWLCtDQUErQztNQUMvQyxzQkFBc0I7SUFDeEI7SUFDQTtNQUNFLCtDQUErQztNQUMvQyxpQ0FBaUM7SUFDbkM7SUFDQTtNQUNFLCtDQUErQztNQUMvQyxrQ0FBa0M7SUFDcEM7SUFDQTtNQUNFLDhDQUE4QztNQUM5QyxrQ0FBa0M7SUFDcEM7SUFDQTtNQUNFLFVBQVU7SUFDWjtJQUNBO01BQ0UsVUFBVTtJQUNaO0VBQ0Y7O0VBQ0E7SUFDRTtNQUVVLHlCQUF5QjtJQUNuQztFQUNGOztFQUNBO0lBQ0U7TUFFVSx5QkFBeUI7SUFDbkM7RUFDRjs7RUFDQTtJQUNFO01BQ0UsbUJBQW1CO01BRVgsb0JBQW9CO0lBQzlCO0lBQ0E7TUFDRSxrQkFBa0I7TUFFVix5QkFBeUI7SUFDbkM7SUFDQTtNQUNFLGdCQUFnQjtNQUVSLHlCQUF5QjtJQUNuQztJQUNBO01BQ0Usa0JBQWtCO01BRVYsMEJBQTBCO0lBQ3BDO0lBQ0E7TUFDRSxtQkFBbUI7TUFFWCwwQkFBMEI7SUFDcEM7RUFDRjs7RUFDQTtJQUNFO01BQ0UsbUJBQW1CO01BRVgsb0JBQW9CO0lBQzlCO0lBQ0E7TUFDRSxrQkFBa0I7TUFFVix5QkFBeUI7SUFDbkM7SUFDQTtNQUNFLGdCQUFnQjtNQUVSLHlCQUF5QjtJQUNuQztJQUNBO01BQ0Usa0JBQWtCO01BRVYsMEJBQTBCO0lBQ3BDO0lBQ0E7TUFDRSxtQkFBbUI7TUFFWCwwQkFBMEI7SUFDcEM7RUFDRjs7RUFDQTtJQUNFO01BQ0UsVUFBVTtJQUNaO0lBQ0E7TUFDRSxVQUFVO0lBQ1o7RUFDRjs7RUFDQTtJQUNFO01BQ0UsVUFBVTtJQUNaO0lBQ0E7TUFDRSxVQUFVO0lBQ1o7RUFDRiIsImZpbGUiOiJzcmMvYXBwL3JlYWR5L3JlYWR5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqLCAqOmJlZm9yZSwgKjphZnRlciB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgXHJcbiAgYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzIzODZEO1xyXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIFxyXG4gIC5kZW1vIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgaGVpZ2h0OiAxNDBweDtcclxuICAgIG1hcmdpbi10b3A6IC03MHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gIH1cclxuICAuZGVtb19fY29sb3JlZC1ibG9ja3Mge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMjUwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEwMDBweDtcclxuICAgICAgICAgICAgcGVyc3BlY3RpdmU6IDEwMDBweDtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBkZW1vQW5pbSA0cyBlYXNlLWluLW91dCBpbmZpbml0ZSwgY29udEFuaW0gNHMgaW5maW5pdGU7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogZGVtb0FuaW0gNHMgZWFzZS1pbi1vdXQgaW5maW5pdGUsIGNvbnRBbmltIDRzIGluZmluaXRlO1xyXG4gIH1cclxuICAuZGVtb19fY29sb3JlZC1ibG9ja3Mtcm90YXRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHJvdGF0aW9uIDEuM3MgbGluZWFyIGluZmluaXRlO1xyXG4gICAgICAgICAgICBhbmltYXRpb246IHJvdGF0aW9uIDEuM3MgbGluZWFyIGluZmluaXRlO1xyXG4gIH1cclxuICAuZGVtb19fY29sb3JlZC1ibG9ja3MtaW5uZXIge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICMzMjM4NkQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xyXG4gIH1cclxuICAuZGVtb19fY29sb3JlZC1ibG9jayB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHdpZHRoOiAzMDAlO1xyXG4gICAgaGVpZ2h0OiAzMDAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcclxuICB9XHJcbiAgLmRlbW9fX2NvbG9yZWQtYmxvY2s6bnRoLWNoaWxkKDEpIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZykgc2tld1goLTMwZGVnKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZykgc2tld1goLTMwZGVnKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRDMzNTk7XHJcbiAgfVxyXG4gIC5kZW1vX19jb2xvcmVkLWJsb2NrOm50aC1jaGlsZCgyKSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEyMGRlZykgc2tld1goLTMwZGVnKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTIwZGVnKSBza2V3WCgtMzBkZWcpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RDMwMjtcclxuICB9XHJcbiAgLmRlbW9fX2NvbG9yZWQtYmxvY2s6bnRoLWNoaWxkKDMpIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjQwZGVnKSBza2V3WCgtMzBkZWcpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNDBkZWcpIHNrZXdYKC0zMGRlZyk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjFCREZGO1xyXG4gIH1cclxuICAuZGVtb19faW5uZXIge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICAuZGVtb19fbnVtYmVycyB7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNTBweDtcclxuICAgIG1hcmdpbi10b3A6IC01MHB4O1xyXG4gIH1cclxuICAuZGVtb19fbnVtYmVycy1wYXRoIHtcclxuICAgIGZpbGw6IG5vbmU7XHJcbiAgICBzdHJva2Utd2lkdGg6IDEwcHg7XHJcbiAgICBzdHJva2U6ICNmZmY7XHJcbiAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7XHJcbiAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kO1xyXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMCwgNTE4LjA1NTA2NTE1NTtcclxuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IG51bUFuaW0gNHMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogbnVtQW5pbSA0cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIC5kZW1vX190ZXh0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMjUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMTQwcHg7XHJcbiAgICBmb250LXNpemU6IDgwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMTVweDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogaGlkZVRleHQgNHMgaW5maW5pdGU7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogaGlkZVRleHQgNHMgaW5maW5pdGU7XHJcbiAgfVxyXG4gIFxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBjb250QW5pbSB7XHJcbiAgICAxNSUsIDEwMCUge1xyXG4gICAgICBtYXJnaW4tbGVmdDogLTI1MHB4O1xyXG4gICAgICB3aWR0aDogNTAwcHg7XHJcbiAgICB9XHJcbiAgICAyNSUsIDkwJSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtNzBweDtcclxuICAgICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIGNvbnRBbmltIHtcclxuICAgIDE1JSwgMTAwJSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMjUwcHg7XHJcbiAgICAgIHdpZHRoOiA1MDBweDtcclxuICAgIH1cclxuICAgIDI1JSwgOTAlIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IC03MHB4O1xyXG4gICAgICB3aWR0aDogMTQwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBudW1BbmltIHtcclxuICAgIDE1JSB7XHJcbiAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDAsIDUxOC4wNTUwNjUxNTU7XHJcbiAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgMjUlLCA0MSUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICBzdHJva2UtZGFzaGFycmF5OiAxNDQuNDI1NjU5MTc5NywgNTE4LjA1NTA2NTE1NTtcclxuICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC00MDtcclxuICAgIH1cclxuICAgIDUzJSwgNjYlIHtcclxuICAgICAgc3Ryb2tlLWRhc2hhcnJheTogMTM2LjAyMTYyMTcwNDEsIDUxOC4wNTUwNjUxNTU7XHJcbiAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMjI3LjIzODY5NzA1MjtcclxuICAgIH1cclxuICAgIDc2JSB7XHJcbiAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDExMy40NzUxMjA1NDQ0LCA1MTguMDU1MDY1MTU1O1xyXG4gICAgICBzdHJva2UtZGFzaG9mZnNldDogLTQ0NS44OTk1NzA0NjUxO1xyXG4gICAgfVxyXG4gICAgODglLCAxMDAlIHtcclxuICAgICAgc3Ryb2tlLWRhc2hhcnJheTogNzIuMTU1NDk0Njg5OSwgNTE4LjA1NTA2NTE1NTtcclxuICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC00NDUuODk5NTcwNDY1MTtcclxuICAgIH1cclxuICAgIDkyJSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICB9XHJcbiAgQGtleWZyYW1lcyBudW1BbmltIHtcclxuICAgIDE1JSB7XHJcbiAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDAsIDUxOC4wNTUwNjUxNTU7XHJcbiAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgMjUlLCA0MSUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICBzdHJva2UtZGFzaGFycmF5OiAxNDQuNDI1NjU5MTc5NywgNTE4LjA1NTA2NTE1NTtcclxuICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC00MDtcclxuICAgIH1cclxuICAgIDUzJSwgNjYlIHtcclxuICAgICAgc3Ryb2tlLWRhc2hhcnJheTogMTM2LjAyMTYyMTcwNDEsIDUxOC4wNTUwNjUxNTU7XHJcbiAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMjI3LjIzODY5NzA1MjtcclxuICAgIH1cclxuICAgIDc2JSB7XHJcbiAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDExMy40NzUxMjA1NDQ0LCA1MTguMDU1MDY1MTU1O1xyXG4gICAgICBzdHJva2UtZGFzaG9mZnNldDogLTQ0NS44OTk1NzA0NjUxO1xyXG4gICAgfVxyXG4gICAgODglLCAxMDAlIHtcclxuICAgICAgc3Ryb2tlLWRhc2hhcnJheTogNzIuMTU1NDk0Njg5OSwgNTE4LjA1NTA2NTE1NTtcclxuICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC00NDUuODk5NTcwNDY1MTtcclxuICAgIH1cclxuICAgIDkyJSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICB9XHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0aW9uIHtcclxuICAgIHRvIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgcm90YXRpb24ge1xyXG4gICAgdG8ge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIH1cclxuICB9XHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGRlbW9BbmltIHtcclxuICAgIDE1JSB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMCk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XHJcbiAgICB9XHJcbiAgICAzMCUsIDQzJSB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB9XHJcbiAgICA1MiUsIDY1JSB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNzIwZGVnKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg3MjBkZWcpO1xyXG4gICAgfVxyXG4gICAgNzglLCA5MCUge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTA4MGRlZyk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTA4MGRlZyk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxNDQwZGVnKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNDQwZGVnKTtcclxuICAgIH1cclxuICB9XHJcbiAgQGtleWZyYW1lcyBkZW1vQW5pbSB7XHJcbiAgICAxNSUge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDApO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xyXG4gICAgfVxyXG4gICAgMzAlLCA0MyUge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgfVxyXG4gICAgNTIlLCA2NSUge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDcyMGRlZyk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNzIwZGVnKTtcclxuICAgIH1cclxuICAgIDc4JSwgOTAlIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEwODBkZWcpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDEwODBkZWcpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTQ0MGRlZyk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTQ0MGRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBoaWRlVGV4dCB7XHJcbiAgICAxNSUsIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gICAgMjAlLCA5NiUge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBAa2V5ZnJhbWVzIGhpZGVUZXh0IHtcclxuICAgIDE1JSwgMTAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgICAyMCUsIDk2JSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gICJdfQ== */");

/***/ }),

/***/ "./src/app/ready/ready.component.ts":
/*!******************************************!*\
  !*** ./src/app/ready/ready.component.ts ***!
  \******************************************/
/*! exports provided: ReadyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadyComponent", function() { return ReadyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ReadyComponent = class ReadyComponent {
    constructor(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    ngOnInit() {
        this.start();
    }
    start() {
        console.log('start');
        setTimeout(() => this._router.navigate(['/game']), 3500);
    }
};
ReadyComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ReadyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ready',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ready.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ready/ready.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ready.component.css */ "./src/app/ready/ready.component.css")).default]
    })
], ReadyComponent);



/***/ }),

/***/ "./src/app/score.service.ts":
/*!**********************************!*\
  !*** ./src/app/score.service.ts ***!
  \**********************************/
/*! exports provided: ScoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreService", function() { return ScoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ScoreService = class ScoreService {
    constructor(_http) {
        this._http = _http;
    }
    postScore(score) {
        this.session = score;
        console.log('Final score', score);
        return this.session;
    }
    getScore() {
        return this.session;
    }
};
ScoreService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ScoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ScoreService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\oohas\Documents\CodingDojo\MEAN\Angular\project\public\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map