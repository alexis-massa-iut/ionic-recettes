(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recettes-recette-create-recette-create-module"], {
    /***/
    "Z+4O":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recettes/recette-create/recette-create.page.html ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Z4O(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/recette-liste\"></ion-back-button>\n      <ion-title>Créer une recette</ion-title>\n    </ion-buttons>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"onCreateRecette()\" [disabled]=\"!formRecette.valid\">\n        <ion-icon name=\"checkmark\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <form [formGroup]=\"formRecette\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size-sm=\"8\" offset-sm=\"2\">\n          <ion-item>\n            <ion-label position=\"floating\">Titre</ion-label>\n            <ion-input type=\"text\" autocomplete autocorrect formControlName=\"title\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"8\" offset-sm=\"2\">\n          <ion-item>\n            <ion-button color=\"primary\" (click)=\"onAddPicture('library')\" full>\n              <ion-icon name=\"image\" slot=\"icon-only\"></ion-icon>\n              Choisir dans la bibliothèque\n            </ion-button>\n\n            <ion-button color=\"primary\" (click)=\"onAddPicture('camera')\" full>\n              <ion-icon name=\"camera\" slot=\"icon-only\"></ion-icon>\n              Prendre une photo\n            </ion-button>\n\n            <ion-img [src]=\"image\"></ion-img>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"8\" offset-sm=\"2\">\n          <ion-item>\n            <ion-label position=\"floating\">Ingrédients - séparés par des , (virgules)</ion-label>\n            <ion-input type=\"text\" autocorrect formControlName=\"ingredients\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"8\" offset-sm=\"2\">\n          <ion-item>\n            <ion-label position=\"floating\">URL de la recette</ion-label>\n            <ion-input type=\"text\" formControlName=\"urlRecette\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"2\" offset-sm=\"5\">\n          <ion-button color=\"primary\" [disabled]=\"!formRecette.valid\" type=\"submit\" (click)=\"onCreateRecette()\">Submit\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>";
      /***/
    },

    /***/
    "Zxtu":
    /*!**************************************************************************!*\
      !*** ./src/app/recettes/recette-create/recette-create-routing.module.ts ***!
      \**************************************************************************/

    /*! exports provided: RecetteCreatePageRoutingModule */

    /***/
    function Zxtu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecetteCreatePageRoutingModule", function () {
        return RecetteCreatePageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _recette_create_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./recette-create.page */
      "vFOj");

      var routes = [{
        path: '',
        component: _recette_create_page__WEBPACK_IMPORTED_MODULE_3__["RecetteCreatePage"]
      }];

      var RecetteCreatePageRoutingModule = function RecetteCreatePageRoutingModule() {
        _classCallCheck(this, RecetteCreatePageRoutingModule);
      };

      RecetteCreatePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RecetteCreatePageRoutingModule);
      /***/
    },

    /***/
    "tkeb":
    /*!******************************************************************!*\
      !*** ./src/app/recettes/recette-create/recette-create.page.scss ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function tkeb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNldHRlLWNyZWF0ZS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "vFOj":
    /*!****************************************************************!*\
      !*** ./src/app/recettes/recette-create/recette-create.page.ts ***!
      \****************************************************************/

    /*! exports provided: RecetteCreatePage */

    /***/
    function vFOj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecetteCreatePage", function () {
        return RecetteCreatePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_recette_create_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./recette-create.page.html */
      "Z+4O");
      /* harmony import */


      var _recette_create_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./recette-create.page.scss */
      "tkeb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_photo_photo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/photo/photo.service */
      "bG/k");
      /* harmony import */


      var src_app_services_recettes_recettes_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/recettes/recettes.service */
      "mWRJ");

      var RecetteCreatePage = /*#__PURE__*/function () {
        function RecetteCreatePage(photoService, // Composant pour prendre une photo
        recettesService, router) {
          _classCallCheck(this, RecetteCreatePage);

          this.photoService = photoService;
          this.recettesService = recettesService;
          this.router = router;
          this.image = 'https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png'; // Default image
        }

        _createClass(RecetteCreatePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.generateFormValidation();
          }
          /**
           * Création du formulaire de création de recette
           */

        }, {
          key: "generateFormValidation",
          value: function generateFormValidation() {
            this.formRecette = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
              title: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, {
                updateOn: 'change',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(50)]
              }),
              ingredients: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, {
                updateOn: 'change',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
              }),
              urlRecette: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, {
                updateOn: 'change',
                validators: []
              })
            });
          }
          /**
           * Méthode pour upload une photo
           * @param source (string) : source de la photo
           */

        }, {
          key: "onAddPicture",
          value: function onAddPicture(source) {
            var _this = this;

            if (source === 'camera') {
              this.photoService.takePicture().then(function (imageData) {
                _this.image = 'data:image/jpeg;base64,' + imageData;

                _this.formRecette.patchValue({
                  image: _this.image
                }); // Image in form input

              });
            } else {
              this.photoService.uploadPicture().then(function (imageData) {
                _this.image = 'data:image/jpeg;base64,' + imageData;

                _this.formRecette.patchValue({
                  image: _this.image
                }); // Image in form input

              });
            }
          }
          /**
           * Méthode pour créer une recette
           */

        }, {
          key: "onCreateRecette",
          value: function onCreateRecette() {
            if (!this.formRecette.valid) return;
            this.recettesService.createRecette(this.formRecette, this.image);
            this.router.navigate(['/recettes-liste']);
          }
        }]);

        return RecetteCreatePage;
      }();

      RecetteCreatePage.ctorParameters = function () {
        return [{
          type: src_app_services_photo_photo_service__WEBPACK_IMPORTED_MODULE_6__["PhotoService"]
        }, {
          type: src_app_services_recettes_recettes_service__WEBPACK_IMPORTED_MODULE_7__["RecettesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      RecetteCreatePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-recette-create',
        template: _raw_loader_recette_create_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_recette_create_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], RecetteCreatePage);
      /***/
    },

    /***/
    "wKX/":
    /*!******************************************************************!*\
      !*** ./src/app/recettes/recette-create/recette-create.module.ts ***!
      \******************************************************************/

    /*! exports provided: RecetteCreatePageModule */

    /***/
    function wKX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecetteCreatePageModule", function () {
        return RecetteCreatePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _recette_create_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./recette-create-routing.module */
      "Zxtu");
      /* harmony import */


      var _recette_create_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./recette-create.page */
      "vFOj");

      var RecetteCreatePageModule = function RecetteCreatePageModule() {
        _classCallCheck(this, RecetteCreatePageModule);
      };

      RecetteCreatePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _recette_create_routing_module__WEBPACK_IMPORTED_MODULE_5__["RecetteCreatePageRoutingModule"]],
        declarations: [_recette_create_page__WEBPACK_IMPORTED_MODULE_6__["RecetteCreatePage"]]
      })], RecetteCreatePageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=recettes-recette-create-recette-create-module-es5.js.map