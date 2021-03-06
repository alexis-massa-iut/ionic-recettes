(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "74mu":
    /*!*************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
      \*************************************************************/

    /*! exports provided: c, g, h, o */

    /***/
    function mu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createColorClasses;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return getClassMap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hostContext;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "o", function () {
        return openURL;
      });

      var hostContext = function hostContext(selector, el) {
        return el.closest(selector) !== null;
      };
      /**
       * Create the mode and color classes for the component based on the classes passed in
       */


      var createColorClasses = function createColorClasses(color, cssClassMap) {
        return typeof color === 'string' && color.length > 0 ? Object.assign(_defineProperty({
          'ion-color': true
        }, "ion-color-".concat(color), true), cssClassMap) : cssClassMap;
      };

      var getClassList = function getClassList(classes) {
        if (classes !== undefined) {
          var array = Array.isArray(classes) ? classes : classes.split(' ');
          return array.filter(function (c) {
            return c != null;
          }).map(function (c) {
            return c.trim();
          }).filter(function (c) {
            return c !== '';
          });
        }

        return [];
      };

      var getClassMap = function getClassMap(classes) {
        var map = {};
        getClassList(classes).forEach(function (c) {
          return map[c] = true;
        });
        return map;
      };

      var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

      var openURL = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url, ev, direction, animation) {
          var router;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                    _context.next = 5;
                    break;
                  }

                  router = document.querySelector('ion-router');

                  if (!router) {
                    _context.next = 5;
                    break;
                  }

                  if (ev != null) {
                    ev.preventDefault();
                  }

                  return _context.abrupt("return", router.push(url, direction, animation));

                case 5:
                  return _context.abrupt("return", false);

                case 6:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function openURL(_x, _x2, _x3, _x4) {
          return _ref.apply(this, arguments);
        };
      }();
      /***/

    },

    /***/
    "92AE":
    /*!******************************************************************!*\
      !*** ./src/app/recettes/recette-detail/recette-detail.page.scss ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function AE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNldHRlLWRldGFpbC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "HjaM":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recettes/recette-detail/recette-detail.page.html ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function HjaM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/recettes-liste\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{recette.titre}}</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button *ngIf=\"this.recette.urlRecette\" (click)=\"onOpenUrl()\">Voir la recette</ion-button>\n      <ion-button (click)=\"onUpdatePicture();\">\n        <ion-icon name=\"camera\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"onDeleteRecette();\">\n        <ion-icon name=\"trash\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row>\n      <ion-col class=\"ion-no-padding\">\n        <ion-img [src]=\"recette.image\"></ion-img>\n      </ion-col>\n\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <h1 class=\"ion-text-center\">{{recette.titre}}</h1>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-list>\n          <ion-item *ngFor=\"let ingredient of recette.ingredients\">\n            {{ ingredient }}\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>";
      /***/
    },

    /***/
    "JbSX":
    /*!*********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/button-active-4927a4c1.js ***!
      \*********************************************************************/

    /*! exports provided: c */

    /***/
    function JbSX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createButtonActiveGesture;
      });
      /* harmony import */


      var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-7a8b7a1c.js */
      "wEJo");
      /* harmony import */


      var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./haptic-27b3f981.js */
      "qULd");
      /* harmony import */


      var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./index-f49d994d.js */
      "iWo5");

      var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
        var currentTouchedButton;
        var initialTouchedButton;

        var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
          if (typeof document === 'undefined') {
            return;
          }

          var target = document.elementFromPoint(x, y);

          if (!target || !isButton(target)) {
            clearActiveButton();
            return;
          }

          if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
          }
        };

        var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
          currentTouchedButton = button;

          if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.add('ion-activated');
          });
          hapticFeedbackFn();
        };

        var clearActiveButton = function clearActiveButton() {
          var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (!currentTouchedButton) {
            return;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.remove('ion-activated');
          });
          /**
           * Clicking on one button, but releasing on another button
           * does not dispatch a click event in browsers, so we
           * need to do it manually here. Some browsers will
           * dispatch a click if clicking on one button, dragging over
           * another button, and releasing on the original button. In that
           * case, we need to make sure we do not cause a double click there.
           */

          if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
            currentTouchedButton.click();
          }

          currentTouchedButton = undefined;
        };

        return Object(_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__["createGesture"])({
          el: el,
          gestureName: 'buttonActiveDrag',
          threshold: 0,
          onStart: function onStart(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["a"]);
          },
          onMove: function onMove(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["b"]);
          },
          onEnd: function onEnd() {
            clearActiveButton(true);
            Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["h"])();
            initialTouchedButton = undefined;
          }
        });
      };
      /***/

    },

    /***/
    "V/fZ":
    /*!******************************************************************!*\
      !*** ./src/app/recettes/recette-detail/recette-detail.module.ts ***!
      \******************************************************************/

    /*! exports provided: RecetteDetailPageModule */

    /***/
    function VFZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecetteDetailPageModule", function () {
        return RecetteDetailPageModule;
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


      var _recette_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./recette-detail-routing.module */
      "qBzK");
      /* harmony import */


      var _recette_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./recette-detail.page */
      "WTh0");

      var RecetteDetailPageModule = function RecetteDetailPageModule() {
        _classCallCheck(this, RecetteDetailPageModule);
      };

      RecetteDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _recette_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["RecetteDetailPageRoutingModule"]],
        declarations: [_recette_detail_page__WEBPACK_IMPORTED_MODULE_6__["RecetteDetailPage"]]
      })], RecetteDetailPageModule);
      /***/
    },

    /***/
    "WTh0":
    /*!****************************************************************!*\
      !*** ./src/app/recettes/recette-detail/recette-detail.page.ts ***!
      \****************************************************************/

    /*! exports provided: RecetteDetailPage */

    /***/
    function WTh0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecetteDetailPage", function () {
        return RecetteDetailPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_recette_detail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./recette-detail.page.html */
      "HjaM");
      /* harmony import */


      var _recette_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./recette-detail.page.scss */
      "92AE");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_recettes_recettes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/recettes/recettes.service */
      "mWRJ");
      /* harmony import */


      var src_app_services_photo_photo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/photo/photo.service */
      "bG/k");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/in-app-browser/ngx */
      "m/P+");

      var RecetteDetailPage = /*#__PURE__*/function () {
        function RecetteDetailPage(activatedRoute, recettesService, router, alertCtrl, // Controlleur pour cr??er une alerte
        photoService, // Composant pour prendre une photo
        toastController, // Controlleur pour cr??er un toast
        inAppBrowser) {
          _classCallCheck(this, RecetteDetailPage);

          this.activatedRoute = activatedRoute;
          this.recettesService = recettesService;
          this.router = router;
          this.alertCtrl = alertCtrl;
          this.photoService = photoService;
          this.toastController = toastController;
          this.inAppBrowser = inAppBrowser;
        }

        _createClass(RecetteDetailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.activatedRoute.paramMap.subscribe(function (paramMap) {
              if (!paramMap.has('recetteId')) {
                // si pas de param??tre recetteId dans la route
                _this.router.navigate(['/recettes-liste']); // on redirige sur la page des recettes


                return;
              }

              var recetteId = paramMap.get('recetteId');
              _this.recette = _this.recettesService.getRecette(recetteId);

              if (!_this.recette.id) {
                // si la recette n'existe pas, redirection
                _this.router.navigate(['/recettes-liste']); // on redirige sur la page des recettes

              }
            });
          }
          /**
           * M??thode pour prendre une photo
           */

        }, {
          key: "onUpdatePicture",
          value: function onUpdatePicture() {
            var _this2 = this;

            this.photoService.takePicture().then(function (ImageData) {
              _this2.recette.image = 'data:image/jpeg;base64,' + ImageData;

              _this2.recettesService.updateRecette(_this2.recette);
            })["catch"](function (error) {
              _this2.toastController.create({
                message: 'Erreur lors de la prise de photo',
                duration: 3000
              }).then(function (toast) {
                return toast.present();
              });
            });
          }
          /**
           * M??thode pour ouvrir le lien recette
           */

        }, {
          key: "onOpenUrl",
          value: function onOpenUrl() {
            var browser = this.inAppBrowser.create(this.recette.urlRecette);
            browser.show();
          }
          /**
           * M??thode pour stocker la recette dans le localStorage
           */

        }, {
          key: "onDeleteRecette",
          value: function onDeleteRecette() {
            var _this3 = this;

            this.alertCtrl.create({
              header: 'Confirmation',
              message: 'Supprimer la recette ' + this.recette.titre,
              buttons: [{
                text: 'Annuler',
                role: 'cancel '
              }, {
                text: 'Supprimer',
                handler: function handler() {
                  _this3.recettesService.deleteRecette(_this3.recette.id);

                  _this3.router.navigate(['/recettes-liste']);
                }
              }]
            }).then(function (alertEl) {
              alertEl.present();
            });
            this.recettesService.deleteRecette(this.recette.id);
          }
        }]);

        return RecetteDetailPage;
      }();

      RecetteDetailPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _services_recettes_recettes_service__WEBPACK_IMPORTED_MODULE_5__["RecettesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]
        }, {
          type: src_app_services_photo_photo_service__WEBPACK_IMPORTED_MODULE_6__["PhotoService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"]
        }, {
          type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__["InAppBrowser"]
        }];
      };

      RecetteDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-recette-detail',
        template: _raw_loader_recette_detail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_recette_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], RecetteDetailPage);
      /***/
    },

    /***/
    "acej":
    /*!**************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js ***!
      \**************************************************************************/

    /*! exports provided: a, d */

    /***/
    function acej(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return attachComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return detachComponent;
      });
      /* harmony import */


      var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./helpers-dd7e4b7b.js */
      "1vRN");

      var attachComponent = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(delegate, container, component, cssClasses, componentProps) {
          var el;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!delegate) {
                    _context2.next = 2;
                    break;
                  }

                  return _context2.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

                case 2:
                  if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                    _context2.next = 4;
                    break;
                  }

                  throw new Error('framework delegate is missing');

                case 4:
                  el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                  if (cssClasses) {
                    cssClasses.forEach(function (c) {
                      return el.classList.add(c);
                    });
                  }

                  if (componentProps) {
                    Object.assign(el, componentProps);
                  }

                  container.appendChild(el);
                  _context2.next = 10;
                  return new Promise(function (resolve) {
                    return Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["c"])(el, resolve);
                  });

                case 10:
                  return _context2.abrupt("return", el);

                case 11:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function attachComponent(_x5, _x6, _x7, _x8, _x9) {
          return _ref2.apply(this, arguments);
        };
      }();

      var detachComponent = function detachComponent(delegate, element) {
        if (element) {
          if (delegate) {
            var container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
          }

          element.remove();
        }

        return Promise.resolve();
      };
      /***/

    },

    /***/
    "bG/k":
    /*!*************************************************!*\
      !*** ./src/app/services/photo/photo.service.ts ***!
      \*************************************************/

    /*! exports provided: PhotoService */

    /***/
    function bGK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PhotoService", function () {
        return PhotoService;
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


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "a/9d");

      var PhotoService = /*#__PURE__*/function () {
        function PhotoService(camera) {
          _classCallCheck(this, PhotoService);

          this.camera = camera;
        }
        /**
         * Take a photo and return the base64 encoded data
         * @returns Promise<string>
         */


        _createClass(PhotoService, [{
          key: "takePicture",
          value: function takePicture() {
            var options = {
              quality: 50,
              targetHeight: 200,
              targetWidth: 200,
              correctOrientation: true,
              destinationType: this.camera.DestinationType.DATA_URL,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE
            };
            return this.camera.getPicture(options);
          }
          /**
           * Upload picture from library
           * @returns Promise<string>
           */

        }, {
          key: "uploadPicture",
          value: function uploadPicture() {
            var options = {
              quality: 50,
              targetHeight: 200,
              targetWidth: 200,
              correctOrientation: true,
              destinationType: this.camera.DestinationType.DATA_URL,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE,
              sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
            };
            return this.camera.getPicture(options);
          }
        }]);

        return PhotoService;
      }();

      PhotoService.ctorParameters = function () {
        return [{
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"]
        }];
      };

      PhotoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], PhotoService);
      /***/
    },

    /***/
    "h3R7":
    /*!***********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
      \***********************************************************************/

    /*! exports provided: S */

    /***/
    function h3R7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "S", function () {
        return SPINNERS;
      });

      var spinners = {
        'bubbles': {
          dur: 1000,
          circles: 9,
          fn: function fn(dur, index, total) {
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            var angle = 2 * Math.PI * index / total;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circles': {
          dur: 1000,
          circles: 8,
          fn: function fn(dur, index, total) {
            var step = index / total;
            var animationDelay = "".concat(dur * step - dur, "ms");
            var angle = 2 * Math.PI * step;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circular': {
          dur: 1400,
          elmDuration: true,
          circles: 1,
          fn: function fn() {
            return {
              r: 20,
              cx: 48,
              cy: 48,
              fill: 'none',
              viewBox: '24 24 48 48',
              transform: 'translate(0,0)',
              style: {}
            };
          }
        },
        'crescent': {
          dur: 750,
          circles: 1,
          fn: function fn() {
            return {
              r: 26,
              style: {}
            };
          }
        },
        'dots': {
          dur: 750,
          circles: 3,
          fn: function fn(_, index) {
            var animationDelay = -(110 * index) + 'ms';
            return {
              r: 6,
              style: {
                'left': "".concat(9 - 9 * index, "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 17,
              y2: 29,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines-small': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 12,
              y2: 20,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        }
      };
      var SPINNERS = spinners;
      /***/
    },

    /***/
    "mWRJ":
    /*!*******************************************************!*\
      !*** ./src/app/services/recettes/recettes.service.ts ***!
      \*******************************************************/

    /*! exports provided: RecettesService */

    /***/
    function mWRJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecettesService", function () {
        return RecettesService;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var RecettesService = /*#__PURE__*/function () {
        function RecettesService(toastController) {
          _classCallCheck(this, RecettesService);

          this.toastController = toastController;
          this.recettes = [{
            id: 'cassoulet',
            titre: 'Cassoulet Toulousain',
            image: 'https://img-3.journaldesfemmes.fr/rxBb0dQN_K7O2WiHKJ5NJ37v1yE=/748x499/smart/735a6b21a6fc45fa814f0ac921a3d1d2/recipe-jdf/372361.jpg',
            ingredients: ['Haricots Secs', 'Couenne', 'Tomates', 'Saucisse', 'Cuisse de Canard']
          }, {
            id: 'quiche',
            titre: 'Quiche Lorraine',
            image: 'https://files.meilleurduchef.com/mdc/photo/recette/quiche-lorraine/quiche-lorraine-1200.jpg',
            ingredients: ['P??te Bris??e', 'Lardons', 'Beurre', 'Oeufs', 'Cr??me Fra??che', 'Lait']
          }, {
            id: 'pizza',
            titre: 'Pizza Regina',
            image: 'https://img-3.journaldesfemmes.fr/w7YT75LG3R5TKLmLwyugJucwYh8=/748x499/smart/3fe7f1f6a26c4921b9f3150e129b358b/recipe-jdf/326376.jpg',
            ingredients: ['P??te ?? Pizza', 'Jambon', 'Mozzarella', 'Champignons', 'Sauce Tomate', 'Roquette'],
            urlRecette: 'https://cuisine.journaldesfemmes.fr/recette-pizza'
          }, {
            id: 'tofu',
            titre: 'Tofu Marin??',
            image: 'https://www.aufouraumoulin.com/wp-content/uploads/2015/01/tofu_marine_grille-4.jpg',
            ingredients: ['Tofu Nature', 'Sauce Soja', 'Gingembre', 'Huile de Tournesol', 'Besoin Vital de Manger'],
            urlRecette: 'https://www.marmiton.org/recettes/recette_tofu-marine_32904.aspx'
          }];
        }
        /**
         * Cr??er une nouvelle recette
         * @param formgroup : Recette ?? cr??er
         */


        _createClass(RecettesService, [{
          key: "createRecette",
          value: function createRecette(formgroup, image) {
            var recette = {
              id: formgroup.value.title.split(' ').join('_').toLowerCase(),
              titre: formgroup.value.title,
              image: image,
              ingredients: formgroup.value.ingredients.split('\n'),
              urlRecette: formgroup.value.urlRecette
            };

            if (window.localStorage.getItem(recette.id) === null) {
              window.localStorage.setItem(recette.id, JSON.stringify(recette));
              this.toastController.create({
                message: 'Recette cr????e !',
                duration: 3000
              }).then(function (toast) {
                return toast.present();
              });
            } else {
              this.toastController.create({
                message: 'Recette d??j?? existante !',
                duration: 3000
              }).then(function (toast) {
                return toast.present();
              });
            }
          }
          /**
           * R??cup??rer toutes les recettes
           * @returns toutes les recettes
           */

        }, {
          key: "getAllRecettes",
          value: function getAllRecettes() {
            var recettes = [],
                keys = Object.keys(localStorage),
                i = keys.length;

            while (i--) {
              recettes.push(JSON.parse(localStorage.getItem(keys[i])));
            }

            recettes.forEach(function (recette) {
              recette.ingredients = recette.ingredients[0].split(',');
            });
            return recettes;
          }
          /**
           * R??cup??rer une recette par son id
           * @param recetteId : id de la recette ?? r??cup??rer
           * @returns Recette correspondante
           */

        }, {
          key: "getRecette",
          value: function getRecette(recetteId) {
            return JSON.parse(window.localStorage.getItem(recetteId));
          }
          /**
           * Modifier une recette
           * @param recette : Recette ?? modifier
           */

        }, {
          key: "updateRecette",
          value: function updateRecette(recette) {
            window.localStorage.setItem(recette.id, JSON.stringify(recette));
          }
          /**
           * Supprimer une recette
           * @param recetteId : id de la recette ?? supprimer
           */

        }, {
          key: "deleteRecette",
          value: function deleteRecette(recetteId) {
            window.localStorage.removeItem(recetteId);
          }
        }]);

        return RecettesService;
      }();

      RecettesService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }];
      };

      RecettesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], RecettesService);
      /***/
    },

    /***/
    "qBzK":
    /*!**************************************************************************!*\
      !*** ./src/app/recettes/recette-detail/recette-detail-routing.module.ts ***!
      \**************************************************************************/

    /*! exports provided: RecetteDetailPageRoutingModule */

    /***/
    function qBzK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecetteDetailPageRoutingModule", function () {
        return RecetteDetailPageRoutingModule;
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


      var _recette_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./recette-detail.page */
      "WTh0");

      var routes = [{
        path: '',
        component: _recette_detail_page__WEBPACK_IMPORTED_MODULE_3__["RecetteDetailPage"]
      }];

      var RecetteDetailPageRoutingModule = function RecetteDetailPageRoutingModule() {
        _classCallCheck(this, RecetteDetailPageRoutingModule);
      };

      RecetteDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RecetteDetailPageRoutingModule);
      /***/
    },

    /***/
    "qULd":
    /*!**************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
      \**************************************************************/

    /*! exports provided: a, b, c, d, h */

    /***/
    function qULd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return hapticSelectionStart;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return hapticSelectionChanged;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return hapticSelection;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return hapticImpact;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hapticSelectionEnd;
      });

      var HapticEngine = {
        getEngine: function getEngine() {
          var win = window;
          return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
        },
        available: function available() {
          return !!this.getEngine();
        },
        isCordova: function isCordova() {
          return !!window.TapticEngine;
        },
        isCapacitor: function isCapacitor() {
          var win = window;
          return !!win.Capacitor;
        },
        impact: function impact(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.impact({
            style: style
          });
        },
        notification: function notification(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.notification({
            style: style
          });
        },
        selection: function selection() {
          this.impact({
            style: 'light'
          });
        },
        selectionStart: function selectionStart() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionStart();
          } else {
            engine.gestureSelectionStart();
          }
        },
        selectionChanged: function selectionChanged() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionChanged();
          } else {
            engine.gestureSelectionChanged();
          }
        },
        selectionEnd: function selectionEnd() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionEnd();
          } else {
            engine.gestureSelectionEnd();
          }
        }
      };
      /**
       * Trigger a selection changed haptic event. Good for one-time events
       * (not for gestures)
       */

      var hapticSelection = function hapticSelection() {
        HapticEngine.selection();
      };
      /**
       * Tell the haptic engine that a gesture for a selection change is starting.
       */


      var hapticSelectionStart = function hapticSelectionStart() {
        HapticEngine.selectionStart();
      };
      /**
       * Tell the haptic engine that a selection changed during a gesture.
       */


      var hapticSelectionChanged = function hapticSelectionChanged() {
        HapticEngine.selectionChanged();
      };
      /**
       * Tell the haptic engine we are done with a gesture. This needs to be
       * called lest resources are not properly recycled.
       */


      var hapticSelectionEnd = function hapticSelectionEnd() {
        HapticEngine.selectionEnd();
      };
      /**
       * Use this to indicate success/failure/warning to the user.
       * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
       */


      var hapticImpact = function hapticImpact(options) {
        HapticEngine.impact(options);
      };
      /***/

    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map