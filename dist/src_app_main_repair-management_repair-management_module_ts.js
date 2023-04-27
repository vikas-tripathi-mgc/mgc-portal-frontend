"use strict";
(self["webpackChunkvuexy"] = self["webpackChunkvuexy"] || []).push([["src_app_main_repair-management_repair-management_module_ts"],{

/***/ 50578:
/*!********************************************************************!*\
  !*** ./src/app/main/repair-management/repair-management.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RepairManagementModule": () => (/* binding */ RepairManagementModule)
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
        path: 'fault-case',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-select_ng-select___ivy_ngcc___fesm2015_ng-select-ng-select_js"), __webpack_require__.e("default-node_modules_ng2-flatpickr___ivy_ngcc___fesm2015_ng2-flatpickr_js"), __webpack_require__.e("default-node_modules_swimlane_ngx-datatable___ivy_ngcc___fesm2015_swimlane-ngx-datatable_js"), __webpack_require__.e("default-src_app_main_apps_invoice_invoice_module_ts"), __webpack_require__.e("default-node_modules_ng-block-ui___ivy_ngcc___fesm2015_ng-block-ui_js"), __webpack_require__.e("default-src_core_components_core-card_core-card_module_ts"), __webpack_require__.e("default-src_app_main_apps_user_user-view_user-view_component_ts"), __webpack_require__.e("default-node_modules_ng2-file-upload___ivy_ngcc___fesm2015_ng2-file-upload_js"), __webpack_require__.e("default-src_app_main_repair-management_contract-check_contract-list_contract-list_service_ts--119cba"), __webpack_require__.e("src_app_main_repair-management_fault-case_fault-case_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./fault-case/fault-case.module */ 2679)).then(m => m.FaultCaseModule)
    },
    {
        path: 'delivery-note',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-select_ng-select___ivy_ngcc___fesm2015_ng-select-ng-select_js"), __webpack_require__.e("default-node_modules_ng2-flatpickr___ivy_ngcc___fesm2015_ng2-flatpickr_js"), __webpack_require__.e("default-node_modules_swimlane_ngx-datatable___ivy_ngcc___fesm2015_swimlane-ngx-datatable_js"), __webpack_require__.e("src_app_main_repair-management_delivery-note_delivery-note_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./delivery-note/delivery-note.module */ 15860)).then(m => m.DeliveryNoteModule)
    },
    {
        path: 'rma-lookup',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-select_ng-select___ivy_ngcc___fesm2015_ng-select-ng-select_js"), __webpack_require__.e("default-node_modules_ng2-flatpickr___ivy_ngcc___fesm2015_ng2-flatpickr_js"), __webpack_require__.e("default-node_modules_swimlane_ngx-datatable___ivy_ngcc___fesm2015_swimlane-ngx-datatable_js"), __webpack_require__.e("default-src_app_main_apps_invoice_invoice_module_ts"), __webpack_require__.e("default-node_modules_ng-block-ui___ivy_ngcc___fesm2015_ng-block-ui_js"), __webpack_require__.e("default-src_core_components_core-card_core-card_module_ts"), __webpack_require__.e("src_app_main_repair-management_rma-lookup_rma-lookup_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./rma-lookup/rma-lookup.module */ 37412)).then(m => m.RmaLookupModule)
    },
    {
        path: 'contract-check',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-select_ng-select___ivy_ngcc___fesm2015_ng-select-ng-select_js"), __webpack_require__.e("default-node_modules_ng2-flatpickr___ivy_ngcc___fesm2015_ng2-flatpickr_js"), __webpack_require__.e("default-node_modules_swimlane_ngx-datatable___ivy_ngcc___fesm2015_swimlane-ngx-datatable_js"), __webpack_require__.e("default-src_app_main_apps_invoice_invoice_module_ts"), __webpack_require__.e("default-node_modules_ng-block-ui___ivy_ngcc___fesm2015_ng-block-ui_js"), __webpack_require__.e("default-src_core_components_core-card_core-card_module_ts"), __webpack_require__.e("src_app_main_repair-management_contract-check_contract-check_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./contract-check/contract-check.module */ 41804)).then(m => m.ContractCheckModule)
    }
];
_fullcalendar_angular__WEBPACK_IMPORTED_MODULE_4__.FullCalendarModule.registerPlugins([_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_0__["default"], _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_3__["default"], _fullcalendar_list__WEBPACK_IMPORTED_MODULE_2__["default"], _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_1__["default"]]);
// export class AppsModule { }
class RepairManagementModule {
}
RepairManagementModule.ɵfac = function RepairManagementModule_Factory(t) { return new (t || RepairManagementModule)(); };
RepairManagementModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: RepairManagementModule });
RepairManagementModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](RepairManagementModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_main_repair-management_repair-management_module_ts.js.map