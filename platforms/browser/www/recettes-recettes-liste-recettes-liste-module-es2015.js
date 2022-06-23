(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recettes-recettes-liste-recettes-liste-module"],{

/***/ "/obU":
/*!*****************************************************************!*\
  !*** ./src/app/recettes/recette-item/recette-item.component.ts ***!
  \*****************************************************************/
/*! exports provided: RecetteItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecetteItemComponent", function() { return RecetteItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_recette_item_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./recette-item.component.html */ "Lfg6");
/* harmony import */ var _recette_item_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recette-item.component.scss */ "y8Uf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let RecetteItemComponent = class RecetteItemComponent {
    constructor() { }
    ngOnInit() { }
};
RecetteItemComponent.ctorParameters = () => [];
RecetteItemComponent.propDecorators = {
    recette: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
RecetteItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-recette-item',
        template: _raw_loader_recette_item_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_recette_item_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RecetteItemComponent);



/***/ }),

/***/ "0e/z":
/*!**************************************************************************!*\
  !*** ./src/app/recettes/recettes-liste/recettes-liste-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: RecettesListePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecettesListePageRoutingModule", function() { return RecettesListePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _recettes_liste_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recettes-liste.page */ "pktG");




const routes = [
    {
        path: '',
        component: _recettes_liste_page__WEBPACK_IMPORTED_MODULE_3__["RecettesListePage"]
    },
    {
        path: 'recette-detail',
        loadChildren: () => __webpack_require__.e(/*! import() | recette-detail-recette-detail-module */ "common").then(__webpack_require__.bind(null, /*! ../recette-detail/recette-detail.module */ "V/fZ")).then(m => m.RecetteDetailPageModule)
    }
];
let RecettesListePageRoutingModule = class RecettesListePageRoutingModule {
};
RecettesListePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RecettesListePageRoutingModule);



/***/ }),

/***/ "C6NY":
/*!******************************************************************!*\
  !*** ./src/app/recettes/recettes-liste/recettes-liste.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNldHRlcy1saXN0ZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "Lfg6":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recettes/recette-item/recette-item.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-item  [routerLink]=\"['/recette-detail', recette.id]\">\n  <ion-avatar slot=\"start\">\n    <ion-img [src]=\"recette.image\"></ion-img>\n  </ion-avatar>\n  <ion-label>{{ recette.titre }}</ion-label>\n</ion-item>\n");

/***/ }),

/***/ "SqHW":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recettes/recettes-liste/recettes-liste.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Mes Recettes Favorites</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n  <app-recette-item *ngFor=\"let uneRecette of recettes\" [recette]=\"uneRecette\"></app-recette-item>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "U8H0":
/*!******************************************************************!*\
  !*** ./src/app/recettes/recettes-liste/recettes-liste.module.ts ***!
  \******************************************************************/
/*! exports provided: RecettesListePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecettesListePageModule", function() { return RecettesListePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _recettes_liste_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recettes-liste-routing.module */ "0e/z");
/* harmony import */ var _recettes_liste_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recettes-liste.page */ "pktG");
/* harmony import */ var _recette_item_recette_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../recette-item/recette-item.component */ "/obU");








let RecettesListePageModule = class RecettesListePageModule {
};
RecettesListePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _recettes_liste_routing_module__WEBPACK_IMPORTED_MODULE_5__["RecettesListePageRoutingModule"]
        ],
        declarations: [_recettes_liste_page__WEBPACK_IMPORTED_MODULE_6__["RecettesListePage"], _recette_item_recette_item_component__WEBPACK_IMPORTED_MODULE_7__["RecetteItemComponent"]] // importer RecetteItem à la main
    })
], RecettesListePageModule);



/***/ }),

/***/ "pktG":
/*!****************************************************************!*\
  !*** ./src/app/recettes/recettes-liste/recettes-liste.page.ts ***!
  \****************************************************************/
/*! exports provided: RecettesListePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecettesListePage", function() { return RecettesListePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_recettes_liste_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./recettes-liste.page.html */ "SqHW");
/* harmony import */ var _recettes_liste_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recettes-liste.page.scss */ "C6NY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_recettes_recettes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/recettes/recettes.service */ "mWRJ");





let RecettesListePage = class RecettesListePage {
    constructor(RecettesService) {
        this.RecettesService = RecettesService;
    } // private crée un attribut dans la classe
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.recettes = this.RecettesService.getAllRecettes();
    }
};
RecettesListePage.ctorParameters = () => [
    { type: _services_recettes_recettes_service__WEBPACK_IMPORTED_MODULE_4__["RecettesService"] }
];
RecettesListePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-recettes',
        template: _raw_loader_recettes_liste_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_recettes_liste_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RecettesListePage);



/***/ }),

/***/ "y8Uf":
/*!*******************************************************************!*\
  !*** ./src/app/recettes/recette-item/recette-item.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNldHRlLWl0ZW0uY29tcG9uZW50LnNjc3MifQ== */");

/***/ })

}]);
//# sourceMappingURL=recettes-recettes-liste-recettes-liste-module-es2015.js.map