"use strict";
(self["webpackChunkvuexy"] = self["webpackChunkvuexy"] || []).push([["src_app_main_apps_apps_module_ts"],{

/***/ 63430:
/*!******************************************!*\
  !*** ./src/app/main/apps/apps.module.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppsModule": () => (/* binding */ AppsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fullcalendar/angular */ 35717);
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullcalendar/daygrid */ 13947);
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/interaction */ 85194);
/* harmony import */ var _fullcalendar_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullcalendar/list */ 80296);
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullcalendar/timegrid */ 69901);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);









// routing
const routes = [
    {
        path: 'email',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-select_ng-select___ivy_ngcc___fesm2015_ng-select-ng-select_js"), __webpack_require__.e("default-node_modules_ngx-quill___ivy_ngcc___fesm2015_ngx-quill_js"), __webpack_require__.e("src_app_main_apps_email_email_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./email/email.module */ 97246)).then(m => m.EmailModule)
    },
    {
        path: 'chat',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_main_apps_chat_chat_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./chat/chat.module */ 22562)).then(m => m.ChatModule)
    },
    {
        path: 'todo',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-select_ng-select___ivy_ngcc___fesm2015_ng-select-ng-select_js"), __webpack_require__.e("default-node_modules_ng2-flatpickr___ivy_ngcc___fesm2015_ng2-flatpickr_js"), __webpack_require__.e("default-node_modules_ngx-quill___ivy_ngcc___fesm2015_ngx-quill_js"), __webpack_require__.e("default-node_modules_ng2-dragula___ivy_ngcc___dist_fesm2015_ng2-dragula_js"), __webpack_require__.e("src_app_main_apps_todo_todo_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./todo/todo.module */ 43261)).then(m => m.TodoModule)
    },
    {
        path: 'calendar',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-select_ng-select___ivy_ngcc___fesm2015_ng-select-ng-select_js"), __webpack_require__.e("default-node_modules_ng2-flatpickr___ivy_ngcc___fesm2015_ng2-flatpickr_js"), __webpack_require__.e("src_app_main_apps_calendar_calendar_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./calendar/calendar.module */ 3448)).then(m => m.CalendarModule)
    },
    {
        path: 'invoice',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-select_ng-select___ivy_ngcc___fesm2015_ng-select-ng-select_js"), __webpack_require__.e("default-node_modules_ng2-flatpickr___ivy_ngcc___fesm2015_ng2-flatpickr_js"), __webpack_require__.e("default-node_modules_swimlane_ngx-datatable___ivy_ngcc___fesm2015_swimlane-ngx-datatable_js"), __webpack_require__.e("default-src_app_main_apps_invoice_invoice_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./invoice/invoice.module */ 55569)).then(m => m.InvoiceModule)
    },
    {
        path: 'e-commerce',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng2-nouislider___ivy_ngcc___ng2-nouislider_js-node_modules_ngx-swiper-wr-324052"), __webpack_require__.e("default-node_modules_bs-stepper_dist_js_bs-stepper_js"), __webpack_require__.e("src_app_main_apps_ecommerce_ecommerce_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ecommerce/ecommerce.module */ 46130)).then(m => m.EcommerceModule)
    },
    {
        path: 'user',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-select_ng-select___ivy_ngcc___fesm2015_ng-select-ng-select_js"), __webpack_require__.e("default-node_modules_ng2-flatpickr___ivy_ngcc___fesm2015_ng2-flatpickr_js"), __webpack_require__.e("default-node_modules_swimlane_ngx-datatable___ivy_ngcc___fesm2015_swimlane-ngx-datatable_js"), __webpack_require__.e("default-src_app_main_apps_invoice_invoice_module_ts"), __webpack_require__.e("default-src_app_main_apps_user_user-view_user-view_component_ts"), __webpack_require__.e("src_app_main_apps_user_user_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./user/user.module */ 62442)).then(m => m.UserModule)
    }
];
_fullcalendar_angular__WEBPACK_IMPORTED_MODULE_4__.FullCalendarModule.registerPlugins([_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_0__["default"], _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_3__["default"], _fullcalendar_list__WEBPACK_IMPORTED_MODULE_2__["default"], _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_1__["default"]]);
class AppsModule {
}
AppsModule.ɵfac = function AppsModule_Factory(t) { return new (t || AppsModule)(); };
AppsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppsModule });
AppsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppsModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_main_apps_apps_module_ts.js.map