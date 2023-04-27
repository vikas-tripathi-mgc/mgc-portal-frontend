"use strict";
(self["webpackChunkvuexy"] = self["webpackChunkvuexy"] || []).push([["src_app_main_apps_email_email_module_ts"],{

/***/ 97713:
/*!**************************************************************************!*\
  !*** ./src/app/main/apps/email/email-compose/email-compose.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailComposeComponent": () => (/* binding */ EmailComposeComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_main_apps_email_email_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/main/apps/email/email.service */ 11321);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _core_directives_core_ripple_effect_core_ripple_effect_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/directives/core-ripple-effect/core-ripple-effect.directive */ 75287);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 66279);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ 90413);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-quill */ 41588);











const _c0 = ["selectRef"];
function EmailComposeComponent_ng_container_0_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 62)(3, "p", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r6 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", item_r6.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", item_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r6.name);
} }
function EmailComposeComponent_ng_container_0_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 62)(3, "p", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r7 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", item_r7.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", item_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r7.name);
} }
function EmailComposeComponent_ng_container_0_div_30_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 62)(3, "p", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r11 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", item_r11.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", item_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r11.name);
} }
function EmailComposeComponent_ng_container_0_div_30_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 62)(3, "p", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r12 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", item_r12.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", item_r12.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r12.name);
} }
function EmailComposeComponent_ng_container_0_div_30_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 65)(1, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Cc: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 17)(4, "div", 18)(5, "ng-select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, EmailComposeComponent_ng_container_0_div_30_ng_template_6_Template, 5, 3, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, EmailComposeComponent_ng_container_0_div_30_ng_template_7_Template, 7, 3, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmailComposeComponent_ng_container_0_div_30_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r14.togglCcBcc("cc")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("items", ctx_r4.emailCCSelect)("multiple", true)("closeOnSelect", false)("searchable", false);
} }
function EmailComposeComponent_ng_container_0_div_31_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 62)(3, "p", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r18 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", item_r18.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", item_r18.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r18.name);
} }
function EmailComposeComponent_ng_container_0_div_31_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 62)(3, "p", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r19 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", item_r19.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", item_r19.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r19.name);
} }
function EmailComposeComponent_ng_container_0_div_31_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 68)(1, "label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Bcc: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 17)(4, "div", 18)(5, "ng-select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, EmailComposeComponent_ng_container_0_div_31_ng_template_6_Template, 5, 3, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, EmailComposeComponent_ng_container_0_div_31_ng_template_7_Template, 7, 3, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "a", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmailComposeComponent_ng_container_0_div_31_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r21.togglCcBcc("bcc")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("items", ctx_r5.emailBCCSelect)("multiple", true)("closeOnSelect", false)("searchable", false);
} }
function EmailComposeComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Compose Mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6)(8, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmailComposeComponent_ng_container_0_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r23.closeCompose()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmailComposeComponent_ng_container_0_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r25.closeCompose()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 13)(15, "form", 14)(16, "div", 15)(17, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "To: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 17)(20, "div", 18)(21, "ng-select", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, EmailComposeComponent_ng_container_0_ng_template_23_Template, 5, 3, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, EmailComposeComponent_ng_container_0_ng_template_24_Template, 7, 3, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div")(26, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmailComposeComponent_ng_container_0_Template_a_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r24); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r26.togglCcBcc("cc")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Cc");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmailComposeComponent_ng_container_0_Template_a_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r24); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r27.togglCcBcc("bcc")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Bcc");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, EmailComposeComponent_ng_container_0_div_30_Template, 10, 4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, EmailComposeComponent_ng_container_0_div_31_Template, 10, 4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 27)(33, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Subject: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 18)(37, "quill-editor", 30)(38, "div", 31)(39, "div", 32)(40, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "button", 34)(42, "button", 35)(43, "button", 36)(44, "button", 37)(45, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 39)(47, "div", 40)(48, "div", 41)(49, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmailComposeComponent_ng_container_0_Template_button_click_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r24); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r28.closeCompose()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "Send");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "button", 43)(52, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "Toggle Dropdown");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 45)(55, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, " Schedule Send");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 47)(58, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](59, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](60, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "div", 51)(62, "div", 52)(63, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](64, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 55)(66, "a", 46)(67, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, "Add Label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "a", 46)(70, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, "Plain text mode");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](72, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "a", 46)(74, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75, "Print");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "a", 46)(77, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, "Check Spelling");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmailComposeComponent_ng_container_0_Template_button_click_79_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r24); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r29.closeCompose()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](80, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("items", ctx_r0.emailToSelect)("multiple", true)("closeOnSelect", false)("searchable", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.isOpenCC === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.isOpenBCC === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("size", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("size", 18);
} }
class EmailComposeComponent {
    /**
     *
     * @param {EmailService} _emailService
     */
    constructor(_emailService) {
        this._emailService = _emailService;
        // Public
        this.emailToSelect = [
            { name: 'Jane Foster', avatar: 'assets/images/portrait/small/avatar-s-3.jpg' },
            { name: 'Donna Frank', avatar: 'assets/images/portrait/small/avatar-s-1.jpg' },
            { name: 'Gabrielle Robertson', avatar: 'assets/images/portrait/small/avatar-s-4.jpg' },
            { name: 'Lori Spears', avatar: 'assets/images/portrait/small/avatar-s-6.jpg' }
        ];
        this.emailCCSelect = [
            { name: 'Jane Foster', avatar: 'assets/images/portrait/small/avatar-s-3.jpg' },
            { name: 'Donna Frank', avatar: 'assets/images/portrait/small/avatar-s-1.jpg' },
            { name: 'Gabrielle Robertson', avatar: 'assets/images/portrait/small/avatar-s-4.jpg' },
            { name: 'Lori Spears', avatar: 'assets/images/portrait/small/avatar-s-6.jpg' }
        ];
        this.emailBCCSelect = [
            { name: 'Jane Foster', avatar: 'assets/images/portrait/small/avatar-s-3.jpg' },
            { name: 'Donna Frank', avatar: 'assets/images/portrait/small/avatar-s-1.jpg' },
            { name: 'Gabrielle Robertson', avatar: 'assets/images/portrait/small/avatar-s-4.jpg' },
            { name: 'Lori Spears', avatar: 'assets/images/portrait/small/avatar-s-6.jpg' }
        ];
        this.emailCCSelected = [];
        this.emailBCCSelected = [];
        this.isOpenCC = false;
        this.isOpenBCC = false;
        this.isComposeOpen = false;
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    }
    // Decorator
    fn() {
        this.closeCompose();
    }
    // Public Methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Toggle CC & BCC
     *
     * @param toggleRef
     */
    togglCcBcc(toggleRef) {
        if (toggleRef == 'cc') {
            this.isOpenCC = !this.isOpenCC;
        }
        else {
            this.isOpenBCC = !this.isOpenBCC;
        }
    }
    /**
     * Close Compose
     */
    closeCompose() {
        this.isComposeOpen = false;
        this._emailService.composeEmail(this.isComposeOpen);
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // Subscribe to Compose Model Changes
        this._emailService.composeEmailChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._unsubscribeAll)).subscribe(response => {
            this.isComposeOpen = response;
            if (this.isComposeOpen) {
                setTimeout(() => {
                    this._selectRef.searchInput.nativeElement.focus();
                }, 0);
            }
        });
    }
    /**
     * On destroy
     */
    ngOnDestroy() {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}
EmailComposeComponent.ɵfac = function EmailComposeComponent_Factory(t) { return new (t || EmailComposeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](app_main_apps_email_email_service__WEBPACK_IMPORTED_MODULE_0__.EmailService)); };
EmailComposeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: EmailComposeComponent, selectors: [["app-email-compose"]], viewQuery: function EmailComposeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._selectRef = _t.first);
    } }, hostBindings: function EmailComposeComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keydown.escape", function EmailComposeComponent_keydown_escape_HostBindingHandler() { return ctx.fn(); });
    } }, decls: 1, vars: 1, consts: [[4, "ngIf"], ["id", "compose-mail", 1, "modal", "modal-sticky", "d-block"], [1, "modal-dialog", "modal-lg", "modal-dialog-scrollable"], [1, "modal-content", "p-0"], [1, "modal-header"], [1, "modal-title"], [1, "modal-actions"], ["href", "javascript:void(0);", 1, "text-body", "mr-75", 3, "click"], ["data-feather", "minus"], ["href", "javascript:void(0);", 1, "text-body", "mr-75"], ["data-feather", "maximize-2"], ["data-dismiss", "modal", "aria-label", "Close", 1, "text-body", 3, "click"], ["data-feather", "x"], [1, "modal-body", "flex-grow-1", "p-0"], [1, "compose-form"], [1, "compose-mail-form-field", "select2-primary"], ["for", "email-to", 1, "form-label"], [1, "flex-grow-1"], [1, "form-group"], ["bindLabel", "name", "placeholder", "Select people", "name", "selectTo", 3, "items", "multiple", "closeOnSelect", "searchable"], ["selectRef", ""], ["ng-option-tmp", ""], ["ng-label-tmp", ""], [1, "toggle-cc", "text-body", "mr-1", 3, "click"], [1, "toggle-bcc", "text-body", 3, "click"], ["class", "compose-mail-form-field cc-wrapper", 4, "ngIf"], ["class", "compose-mail-form-field bcc-wrapper", 4, "ngIf"], [1, "compose-mail-form-field"], ["for", "emailSubject"], ["type", "text", "id", "emailSubject", "placeholder", "Subject", "name", "emailSubject", 1, "form-control"], ["name", "addDescription", "customToolbarPosition", "'bottom'", "placeholder", "Message", 1, "border-bottom-0"], ["quill-editor-toolbar", ""], [1, "desc-toolbar", "border-top-0"], [1, "ql-formats", "mr-0"], [1, "ql-bold"], [1, "ql-italic"], [1, "ql-underline"], [1, "ql-align"], [1, "ql-link"], [1, "compose-footer-wrapper"], [1, "btn-wrapper", "d-flex", "align-items-center"], ["ngbDropdown", "", 1, "btn-group", "dropup", "mr-1"], ["type", "button", "rippleEffect", "", 1, "btn", "btn-primary", 3, "click"], ["type", "button", "ngbDropdownToggle", "", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", "data-reference", "parent", "rippleEffect", "", 1, "btn", "btn-primary", "dropdown-toggle-split"], [1, "sr-only"], ["ngbDropdownMenu", ""], ["ngbDropdownItem", "", "href", "javascript:void(0);"], [1, "email-attachement"], ["for", "file-input"], ["data-feather", "paperclip", "width", "17", "height", "17", 1, "ml-50"], ["id", "file-input", "type", "file", 1, "d-none"], [1, "footer-action", "d-flex", "align-items-center"], ["ngbDropdown", ""], ["ngbDropdownToggle", "", 1, "hide-arrow"], ["data-feather", "more-vertical", "role", "button", "id", "composeActions", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "cursor-pointer", "mr-50", 3, "size"], ["ngbDropdownMenu", "", "aria-labelledby", "composeActions"], [1, "align-middle"], [1, "dropdown-divider"], ["type", "reset", 1, "btn", "p-0", 3, "click"], ["data-feather", "trash", "data-dismiss", "modal", 1, "cursor-pointer", 3, "size"], [1, "media", "align-items-center", "p-25"], ["height", "24", "width", "24", 1, "d-block", "rounded-circle", "mr-50", 3, "src", "alt"], [1, "media-body"], [1, "mb-0"], ["aria-hidden", "true", 1, "ng-value-icon", "right"], [1, "compose-mail-form-field", "cc-wrapper"], ["for", "emailCC"], ["href", "javascript:void(0);", 1, "text-body", "toggle-cc", 3, "click"], [1, "compose-mail-form-field", "bcc-wrapper"], ["for", "emailBCC"], ["href", "javascript:void(0);", 1, "text-body", "toggle-bcc", 3, "click"]], template: function EmailComposeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, EmailComposeComponent_ng_container_0_Template, 81, 8, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isComposeOpen === true);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, _core_directives_core_ripple_effect_core_ripple_effect_directive__WEBPACK_IMPORTED_MODULE_1__.RippleEffectDirective, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_2__.FeatherIconDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDropdownItem, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["ɵf"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["ɵh"], ngx_quill__WEBPACK_IMPORTED_MODULE_10__.QuillEditorComponent], encapsulation: 2 });


/***/ }),

/***/ 90146:
/*!**************************************************************************!*\
  !*** ./src/app/main/apps/email/email-details/email-details.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailDetailsComponent": () => (/* binding */ EmailDetailsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_main_apps_email_email_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/main/apps/email/email.service */ 11321);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 15375);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/extended */ 1570);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 66279);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);









const _c0 = function (a0, a1, a2, a3) { return { "badge-light-success": a0, "badge-light-primary": a1, "badge-light-warning": a2, "badge-light-danger": a3 }; };
function EmailDetailsComponent_ng_container_0_span_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const label_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction4"](2, _c0, label_r6 === "personal", label_r6 === "company", label_r6 === "important", label_r6 === "private"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](label_r6);
} }
function EmailDetailsComponent_ng_container_0_div_64_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 71)(1, "div", 37)(2, "a", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmailDetailsComponent_ng_container_0_div_64_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.openReplies()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " View 2 Earlier Messages ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} }
function EmailDetailsComponent_ng_container_0_ng_container_65_div_1_ng_container_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const emailToRef_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](emailToRef_r13.email);
} }
function EmailDetailsComponent_ng_container_0_ng_container_65_div_1_div_50_a_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "small", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const attachment_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", attachment_r15.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](attachment_r15.fileName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("(", attachment_r15.size, ")");
} }
function EmailDetailsComponent_ng_container_0_ng_container_65_div_1_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 74)(1, "div", 75)(2, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h5", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, EmailDetailsComponent_ng_container_0_ng_container_65_div_1_div_50_a_7_Template, 6, 3, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const replie_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("size", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", replie_r10.attachments.length, " Attachments");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", replie_r10.attachments);
} }
function EmailDetailsComponent_ng_container_0_ng_container_65_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 36)(1, "div", 37)(2, "div", 41)(3, "div", 42)(4, "div", 43)(5, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 46)(8, "h5", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 48)(11, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 50)(14, "table", 51)(15, "tbody")(16, "tr")(17, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "From:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "tr")(22, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "To:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, EmailDetailsComponent_ng_container_0_ng_container_65_div_1_ng_container_24_Template, 3, 1, "ng-container", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "tr")(26, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](30, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 54)(32, "small", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](34, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 56)(36, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 59)(39, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Reply");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Forward");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](50, EmailDetailsComponent_ng_container_0_ng_container_65_div_1_div_50_Template, 8, 3, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const replie_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", replie_r10.from.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](replie_r10.from.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", replie_r10.from.email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](replie_r10.from.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", replie_r10.to);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](30, 10, replie_r10.time, "short", "UTC"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](34, 14, replie_r10.time, "short", "UTC"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("size", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", replie_r10.message, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", replie_r10.attachments.length > 0);
} }
function EmailDetailsComponent_ng_container_0_ng_container_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, EmailDetailsComponent_ng_container_0_ng_container_65_div_1_Template, 51, 18, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.currentMail == null ? null : ctx_r3.currentMail.replies);
} }
function EmailDetailsComponent_ng_container_0_ng_container_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const emailToRef_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](emailToRef_r17.email);
} }
function EmailDetailsComponent_ng_container_0_div_116_a_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "small", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const attachment_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", attachment_r19.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](attachment_r19.fileName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("(", attachment_r19.size, ")");
} }
function EmailDetailsComponent_ng_container_0_div_116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 74)(1, "div", 75)(2, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h5", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, EmailDetailsComponent_ng_container_0_div_116_a_7_Template, 6, 3, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("size", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r5.openedEmail.attachments.length, " Attachments");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r5.openedEmail.attachments);
} }
const _c1 = function (a0, a1) { return { "fa-star text-warning": a0, "fa-star-o": a1 }; };
function EmailDetailsComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmailDetailsComponent_ng_container_0_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r20.toggleDetails()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h4", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7)(9, "ul", 8)(10, "li", 9)(11, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmailDetailsComponent_ng_container_0_Template_button_click_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); ctx_r22.toggleStarred(); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event.stopPropagation()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "li", 9)(14, "div", 12)(15, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 15)(18, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmailDetailsComponent_ng_container_0_Template_a_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r23.updateFolderOnSelectedMails("draft")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Draft");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmailDetailsComponent_ng_container_0_Template_a_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r24.updateFolderOnSelectedMails("spam")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Spam");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmailDetailsComponent_ng_container_0_Template_a_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r25.updateFolderOnSelectedMails("trash")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Trash");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "li", 9)(31, "div", 12)(32, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 22)(35, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmailDetailsComponent_ng_container_0_Template_a_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r26.updateLabelOnSelectedEmails("personal")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Personal");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmailDetailsComponent_ng_container_0_Template_a_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r27.updateLabelOnSelectedEmails("company")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Company");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmailDetailsComponent_ng_container_0_Template_a_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r28.updateLabelOnSelectedEmails("important")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Important");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmailDetailsComponent_ng_container_0_Template_a_click_44_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r29.updateLabelOnSelectedEmails("private")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Private");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "li", 9)(48, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmailDetailsComponent_ng_container_0_Template_button_click_48_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r30.unRead()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "li", 9)(51, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmailDetailsComponent_ng_container_0_Template_button_click_51_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r31.updateFolderOnSelectedMails("trash")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "li", 31)(54, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "li", 33)(57, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 35)(60, "div", 36)(61, "div", 37)(62, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](63, EmailDetailsComponent_ng_container_0_span_63_Template, 2, 7, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](64, EmailDetailsComponent_ng_container_0_div_64_Template, 4, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](65, EmailDetailsComponent_ng_container_0_ng_container_65_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 36)(67, "div", 37)(68, "div", 41)(69, "div", 42)(70, "div", 43)(71, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](72, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 46)(74, "h5", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 48)(77, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "div", 50)(80, "table", 51)(81, "tbody")(82, "tr")(83, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, "From:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "tr")(88, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, "To:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](90, EmailDetailsComponent_ng_container_0_ng_container_90_Template, 3, 1, "ng-container", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "tr")(92, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, "Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](96, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "div", 54)(98, "small", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](100, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "div", 56)(102, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](103, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "div", 59)(105, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](106, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](107, "Reply");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](109, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](110, "Forward");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](112, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](113, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](115, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](116, EmailDetailsComponent_ng_container_0_div_116_Template, 8, 3, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "div", 36)(118, "div", 37)(119, "div", 41)(120, "div", 67)(121, "div", 68)(122, "h5", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](123, " Click here to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "a", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](125, "Reply");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](126, " or ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "a", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](128, "Forward");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("show", ctx_r0.isOpen === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("size", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.openedEmail.subject);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](32, _c1, ctx_r0.openedEmail.isStarred === true, ctx_r0.openedEmail.isStarred !== true));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("size", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("size", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("size", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("size", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("size", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("size", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.openedEmail.labels);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r0.currentMail == null ? null : ctx_r0.currentMail.replies.length) > 0 && ctx_r0.emailAppDetailReplies === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r0.currentMail == null ? null : ctx_r0.currentMail.replies.length) > 0 && ctx_r0.emailAppDetailReplies === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r0.openedEmail.from.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.openedEmail.from.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.openedEmail.from.email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.openedEmail.from.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.openedEmail.to);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](96, 24, ctx_r0.openedEmail.time, "short", "UTC"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](100, 28, ctx_r0.openedEmail.time, "short", "UTC"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("size", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx_r0.openedEmail.message, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.openedEmail.attachments.length > 0);
} }
class EmailDetailsComponent {
    /**
     *
     * @param {EmailService} _emailService
     */
    constructor(_emailService) {
        this._emailService = _emailService;
        this.isOpen = false;
        this.emailAppDetailReplies = false;
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    }
    // Public Methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Open Replies
     */
    openReplies() {
        this.emailAppDetailReplies = true;
    }
    /**
     *  Toggle Details
     */
    toggleDetails() {
        this._emailService.closeEmailDetails();
        this._emailService.deselectEmails();
    }
    /**
     * Update Folder on Selected Emails
     *
     * @param folderRef
     */
    updateFolderOnSelectedMails(folderRef) {
        this._emailService.updateFolderOnSelectedEmails(folderRef);
    }
    /**
     * Update Labels On Selected Emails
     *
     * @param labelRef
     */
    updateLabelOnSelectedEmails(labelRef) {
        this._emailService.updateLabelOnSelectedEmails(labelRef);
    }
    /**
     * Un-read Email
     */
    unRead() {
        this._emailService.markAsUnread();
    }
    /**
     * Toggle Starred
     */
    /**
     * Toggle Starred
     */
    toggleStarred() {
        this._emailService.toggleStarred(this.openedEmail);
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // Subscribe to Email Close
        this._emailService.onEmailDetailChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this._unsubscribeAll)).subscribe(response => {
            setTimeout(() => {
                this.isOpen = response;
                // this._emailService.deselectEmails();
            });
        });
        // Subscribe to Email Open & Details
        this._emailService.onOpenedEmailChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this._unsubscribeAll)).subscribe(email => {
            this.openedEmail = email;
            if (Object.keys(this.openedEmail).length > 0) {
                this.isOpen = true;
                this._emailService.setOpenedEmail(this.openedEmail);
            }
        });
    }
    /**
     * On destroy
     */
    ngOnDestroy() {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}
EmailDetailsComponent.ɵfac = function EmailDetailsComponent_Factory(t) { return new (t || EmailDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](app_main_apps_email_email_service__WEBPACK_IMPORTED_MODULE_0__.EmailService)); };
EmailDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EmailDetailsComponent, selectors: [["app-email-details"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "email-app-details"], [1, "email-detail-header"], [1, "email-header-left", "d-flex", "align-items-center"], [1, "btn", "go-back", "p-0", "mr-1", 3, "click"], ["data-feather", "chevron-left", 3, "size"], [1, "email-subject", "mb-0"], [1, "email-header-right", "ml-2", "pl-1"], [1, "list-inline", "m-0"], [1, "list-inline-item", "mr-75"], [1, "action-icon", "btn", "p-0", 3, "click"], [1, "fa", "font-medium-3", 3, "ngClass"], ["ngbDropdown", "", 1, "no-arrow"], ["href", "javascript:void(0);", "ngbDropdownToggle", "", "id", "folder", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false"], ["data-feather", "folder", 3, "size"], ["ngbDropdownMenu", "", "aria-labelledby", "folder"], ["ngbDropdownItem", "", "href", "javascript:void(0);", 1, "d-flex", "align-items-center", 3, "click"], ["data-feather", "edit-2", 1, "font-small-4", "mr-50"], ["data-feather", "info", 1, "font-small-4", "mr-50"], ["data-feather", "trash", 1, "font-small-4", "mr-50"], ["href", "javascript:void(0);", "ngbDropdownToggle", "", "id", "tag", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false"], ["data-feather", "tag", 3, "size"], ["ngbDropdownMenu", "", "aria-labelledby", "tag"], ["ngbDropdownItem", "", "href", "javascript:void(0);", 3, "click"], [1, "mr-50", "bullet", "bullet-success", "bullet-sm"], [1, "mr-50", "bullet", "bullet-primary", "bullet-sm"], [1, "mr-50", "bullet", "bullet-warning", "bullet-sm"], [1, "mr-50", "bullet", "bullet-danger", "bullet-sm"], [1, "btn", "action-icon", "p-0", 3, "click"], ["data-feather", "mail", 3, "size"], ["data-feather", "trash", 3, "size"], [1, "list-inline-item", "mr-75", "email-prev"], [1, "action-icon"], [1, "list-inline-item", "mr-75", "email-next"], ["data-feather", "chevron-right", 3, "size"], [1, "email-scroll-area", 3, "perfectScrollbar"], [1, "row"], [1, "col-12"], [1, "email-label"], ["class", "mail-label badge badge-pill mr-50", 3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "row mb-1", 4, "ngIf"], [1, "card"], [1, "card-header", "email-detail-head"], [1, "user-details", "d-flex", "justify-content-between", "align-items-center", "flex-wrap"], [1, "avatar", "mr-75"], ["alt", "avatar img holder", "width", "48", "height", "48", 3, "src"], [1, "mail-items"], [1, "mb-0"], ["ngbDropdown", "", 1, "email-info-dropup"], ["role", "button", "id", "card_top01", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", "ngbDropdownToggle", "", 1, "font-small-3", "text-muted"], ["ngbDropdownMenu", "", "aria-labelledby", "card_top01"], [1, "table", "table-sm", "table-borderless"], [1, "text-right"], [4, "ngFor", "ngForOf"], [1, "mail-meta-item", "d-flex", "align-items-center"], [1, "mail-date-time", "text-muted"], ["ngbDropdown", "", 1, "ml-50"], ["role", "button", "id", "email_more", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", "ngbDropdownToggle", "", 1, "hide-arrow"], ["data-feather", "more-vertical", 3, "size"], ["ngbDropdownMenu", "", "aria-labelledby", "email_more", 1, "dropdown-menu-right"], ["ngbDropdownItem", ""], ["data-feather", "corner-up-left", 1, "mr-50"], ["data-feather", "corner-up-right", 1, "mr-50"], ["data-feather", "trash-2", 1, "mr-50"], [1, "card-body", "mail-message-wrapper", "pt-2"], [1, "mail-message", 3, "innerHTML"], ["class", "card-footer", 4, "ngIf"], [1, "card-body"], [1, "d-flex", "justify-content-between"], ["href", "javascript:void(0);"], [1, "mail-label", "badge", "badge-pill", "mr-50", 3, "ngClass"], [1, "row", "mb-1"], ["href", "javascript:void(0);", 1, "font-weight-bold", 3, "click"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "card-footer"], [1, "mail-attachments"], [1, "d-flex", "align-items-center", "mb-1"], ["data-feather", "paperclip", 1, "mr-50", 3, "size"], [1, "font-weight-bolder", "text-body", "mb-0"], [1, "d-flex", "flex-column"], ["href", "javascript:void(0);", "class", "mb-50", 4, "ngFor", "ngForOf"], ["href", "javascript:void(0);", 1, "mb-50"], ["alt", "png", "height", "18", 1, "mr-25", 3, "src"], [1, "text-muted", "font-weight-bolder"], [1, "text-muted", "font-small-2", "ml-25"]], template: function EmailDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, EmailDetailsComponent_ng_container_0_Template, 129, 35, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isOpen === true);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__.PerfectScrollbarDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__.DefaultClassDirective, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_1__.FeatherIconDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDropdownItem, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe], encapsulation: 2 });


/***/ }),

/***/ 42663:
/*!*****************************************************************************************!*\
  !*** ./src/app/main/apps/email/email-list/email-list-item/email-list-item.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailListItemComponent": () => (/* binding */ EmailListItemComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_main_apps_email_email_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/main/apps/email/email.service */ 11321);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/extended */ 1570);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 66279);
/* harmony import */ var _core_pipes_stripHtml_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/pipes/stripHtml.pipe */ 93798);









function EmailListItemComponent_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} }
const _c0 = function (a0, a1, a2, a3) { return { "bullet-success": a0, "bullet-primary": a1, "bullet-warning": a2, "bullet-danger": a3 }; };
function EmailListItemComponent_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 22);
} if (rf & 2) {
    const label_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction4"](1, _c0, label_r2 === "personal", label_r2 === "company", label_r2 === "important", label_r2 === "private"));
} }
const _c1 = function (a0, a1) { return { "mail-read": a0, "selected-row-bg": a1 }; };
const _c2 = function (a0, a1) { return { "fa-star text-warning": a0, "fa-star-o": a1 }; };
class EmailListItemComponent {
    /**
     *
     * @param {EmailService} _emailService
     */
    constructor(_emailService) {
        this._emailService = _emailService;
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    }
    /**
     * On Checkbox Change
     */
    onSelectedChange() {
        this._emailService.toggleSelectedMail(this.email.id);
    }
    /**
     * Toggle Starred
     */
    toggleStarred() {
        this._emailService.toggleStarred(this.email);
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // Subscribe to update on selected email change
        this._emailService.onSelectedEmailsChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._unsubscribeAll)).subscribe(selectedMails => {
            this.selected = false;
            if (selectedMails.length > 0) {
                for (const email of selectedMails) {
                    if (email.id === this.email.id) {
                        this.selected = true;
                        break;
                    }
                }
            }
        });
    }
    /**
     * On destroy
     */
    ngOnDestroy() {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}
EmailListItemComponent.ɵfac = function EmailListItemComponent_Factory(t) { return new (t || EmailListItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](app_main_apps_email_email_service__WEBPACK_IMPORTED_MODULE_0__.EmailService)); };
EmailListItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: EmailListItemComponent, selectors: [["email-list-item"]], inputs: { email: "email" }, decls: 27, vars: 25, consts: [[1, "media", 3, "ngClass"], [1, "media-left", "pr-50"], [1, "avatar"], ["alt", "avatar img holder", 3, "src"], [1, "user-action"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", 1, "custom-control-input", 3, "id", "name", "ngModel", "ngModelChange", "click"], [1, "custom-control-label", 3, "for"], [1, "email-favorite", "btn", "p-0", 3, "click"], [1, "fa", 3, "ngClass"], [1, "media-body"], [1, "mail-details"], [1, "mail-items"], [1, "mb-25"], [1, "text-truncate"], [1, "mail-meta-item"], [4, "ngIf"], ["class", "mx-50 bullet bullet-sm", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "mail-date"], [1, "mail-message"], [1, "text-truncate", "mb-0"], ["data-feather", "paperclip"], [1, "mx-50", "bullet", "bullet-sm", 3, "ngClass"]], template: function EmailListItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EmailListItemComponent_Template_input_ngModelChange_6_listener($event) { return ctx.selected = $event; })("ngModelChange", function EmailListItemComponent_Template_input_ngModelChange_6_listener() { return ctx.onSelectedChange(); })("click", function EmailListItemComponent_Template_input_click_6_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmailListItemComponent_Template_button_click_8_listener($event) { ctx.toggleStarred(); return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 10)(11, "div", 11)(12, "div", 12)(13, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, EmailListItemComponent_ng_container_18_Template, 2, 0, "ng-container", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, EmailListItemComponent_span_19_Template, 1, 6, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](22, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 19)(24, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](26, "striphtml");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](19, _c1, ctx.email.isRead === true, ctx.selected === true));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx.email.from.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "customCheck", ctx.email.id, "")("name", "customCheck", ctx.email.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("for", "customCheck", ctx.email.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](22, _c2, ctx.email.isStarred === true, ctx.email.isStarred === false));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.email.from.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.email.subject);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.email.attachments.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.email.labels);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](22, 13, ctx.email.time, "short", "UTC"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](26, 17, ctx.email.message));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__.DefaultClassDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_1__.FeatherIconDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe, _core_pipes_stripHtml_pipe__WEBPACK_IMPORTED_MODULE_2__.StripHtmlPipe], encapsulation: 2 });


/***/ }),

/***/ 25178:
/*!********************************************************************!*\
  !*** ./src/app/main/apps/email/email-list/email-list.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailListComponent": () => (/* binding */ EmailListComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_main_apps_email_email_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/main/apps/email/email.service */ 11321);
/* harmony import */ var _core_components_core_sidebar_core_sidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/components/core-sidebar/core-sidebar.service */ 66841);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 15375);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 66279);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var app_main_apps_email_email_list_email_list_item_email_list_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/main/apps/email/email-list/email-list-item/email-list-item.component */ 42663);










function EmailListComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 22)(1, "ul", 23)(2, "li", 24)(3, "div", 25)(4, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 28)(7, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EmailListComponent_div_17_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r5.updateFolderOnSelectedMails("draft")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Draft");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EmailListComponent_div_17_Template_a_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r7.updateFolderOnSelectedMails("spam")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Spam");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EmailListComponent_div_17_Template_a_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r8.updateFolderOnSelectedMails("trash")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Trash");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "li", 24)(20, "div", 25)(21, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 35)(24, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EmailListComponent_div_17_Template_a_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r9.updateLabelOnSelectedEmails("personal")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Personal");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EmailListComponent_div_17_Template_a_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r10.updateLabelOnSelectedEmails("company")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Company");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EmailListComponent_div_17_Template_a_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r11.updateLabelOnSelectedEmails("important")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "Important");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EmailListComponent_div_17_Template_a_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r12.updateLabelOnSelectedEmails("private")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Private");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "li", 41)(37, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EmailListComponent_div_17_Template_button_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r13.unRead()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](38, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "li", 44)(40, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EmailListComponent_div_17_Template_button_click_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r14.updateFolderOnSelectedMails("trash")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](41, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("size", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("size", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("size", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("size", 18);
} }
function EmailListComponent_email_list_item_20_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "email-list-item", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EmailListComponent_email_list_item_20_Template_email_list_item_click_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18); const email_r15 = restoredCtx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); ctx_r17.openEmail(email_r15.id); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event.stopPropagation()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const email_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("email", email_r15);
} }
function EmailListComponent_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
} }
function EmailListComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 47)(1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "No Items Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
class EmailListComponent {
    /**
     *
     * @param {EmailService} _emailService
     * @param {CoreSidebarService} _coreSidebarService
     */
    constructor(_emailService, _coreSidebarService) {
        this._emailService = _emailService;
        this._coreSidebarService = _coreSidebarService;
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    }
    // Public Methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Toggle the sidebar
     *
     * @param name
     */
    toggleSidebar(name) {
        this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
    }
    /**
     * Toggle Select All
     */
    toggleSelectAll() {
        this._emailService.toggleSelectAll();
    }
    /**
     * Update Folder On Selected Emails
     *
     * @param folderRef
     */
    updateFolderOnSelectedMails(folderRef) {
        this._emailService.updateFolderOnSelectedEmails(folderRef);
    }
    /**
     * Updated Labels On Selected Emails
     *
     * @param labelRef
     */
    updateLabelOnSelectedEmails(labelRef) {
        this._emailService.updateLabelOnSelectedEmails(labelRef);
    }
    /**
     * Open Email
     *
     * @param id
     */
    openEmail(id) {
        this._emailService.openEmailDetails(id);
    }
    /**
     * Un-Read
     */
    unRead() {
        this._emailService.markAsUnread();
    }
    /**
     * Query Update
     *
     * @param queryValue
     */
    queryUpdate(queryValue) {
        this._emailService.updateSearchText(queryValue.target.value);
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // Subscribe to Selected Emails changes
        this._emailService.onSelectedEmailsChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._unsubscribeAll)).subscribe(selectedMails => {
            setTimeout(() => {
                this.hasSelectedMails = selectedMails.length > 0;
                this.isIndeterminate = selectedMails.length !== this._emailService.emails.length && selectedMails.length > 0;
            }, 0);
        });
        // Subscribe to update Emails on changes
        this._emailService.onEmailsChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._unsubscribeAll)).subscribe(emails => {
            this.emails = emails;
        });
    }
    /**
     * On destroy
     */
    ngOnDestroy() {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}
EmailListComponent.ɵfac = function EmailListComponent_Factory(t) { return new (t || EmailListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_main_apps_email_email_service__WEBPACK_IMPORTED_MODULE_0__.EmailService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_components_core_sidebar_core_sidebar_service__WEBPACK_IMPORTED_MODULE_1__.CoreSidebarService)); };
EmailListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: EmailListComponent, selectors: [["app-email-list"]], decls: 24, vars: 7, consts: [[1, "email-app-list"], [1, "app-fixed-search", "d-flex", "align-items-center"], [1, "sidebar-toggle", "d-block", "d-lg-none", "ml-1"], [1, "btn", "p-0", 3, "click"], ["data-feather", "menu", 3, "size"], [1, "d-flex", "align-content-center", "justify-content-between", "w-100"], [1, "input-group", "input-group-merge"], [1, "input-group-prepend"], [1, "input-group-text"], ["data-feather", "search", 1, "text-muted"], ["type", "text", "id", "email-search", "placeholder", "Search email", "aria-label", "Search...", "aria-describedby", "email-search", 1, "form-control", 3, "keyup"], [1, "app-action"], [1, "action-left"], [1, "custom-control", "custom-checkbox", "selectAll"], ["type", "checkbox", "id", "selectAllCheck", 1, "custom-control-input", 3, "checked", "indeterminate", "click"], ["for", "selectAllCheck", 1, "custom-control-label", "font-weight-bolder", "pl-25"], ["class", "action-right", 4, "ngIf"], [1, "email-user-list", 3, "perfectScrollbar"], [1, "email-media-list"], [3, "email", "click", 4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], ["noResults", ""], [1, "action-right"], [1, "list-inline", "m-0"], [1, "list-inline-item"], ["ngbDropdown", ""], ["href", "javascript:void(0);", "ngbDropdownToggle", "", "id", "folder", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false"], ["data-feather", "folder", 3, "size"], ["ngbDropdownMenu", "", "aria-labelledby", "folder", 1, "dropdown-menu-right"], ["ngbDropdownItem", "", "href", "javascript:void(0);", 1, "d-flex", "align-items-center", 3, "click"], ["data-feather", "edit-2", 1, "font-small-4", "mr-50"], ["data-feather", "info", 1, "font-small-4", "mr-50"], ["data-feather", "trash", 1, "font-small-4", "mr-50"], ["href", "javascript:void(0);", "ngbDropdownToggle", "", "id", "tag", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false"], ["data-feather", "tag", 3, "size"], ["ngbDropdownMenu", "", "aria-labelledby", "tag", 1, "dropdown-menu-right"], ["ngbDropdownItem", "", "href", "javascript:void(0);", 3, "click"], [1, "mr-50", "bullet", "bullet-success", "bullet-sm"], [1, "mr-50", "bullet", "bullet-primary", "bullet-sm"], [1, "mr-50", "bullet", "bullet-warning", "bullet-sm"], [1, "mr-50", "bullet", "bullet-danger", "bullet-sm"], [1, "list-inline-item", "mail-unread"], [1, "action-icon", "btn", "p-0", 3, "click"], ["data-feather", "mail", 3, "size"], [1, "list-inline-item", "mail-delete"], ["data-feather", "trash-2", 3, "size"], [3, "email", "click"], [1, "no-results", "show"]], template: function EmailListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EmailListComponent_Template_button_click_3_listener() { return ctx.toggleSidebar("email-sidebar"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup", function EmailListComponent_Template_input_keyup_10_listener($event) { return ctx.queryUpdate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 11)(12, "div", 12)(13, "div", 13)(14, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EmailListComponent_Template_input_click_14_listener() { return ctx.toggleSelectAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Select All");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, EmailListComponent_div_17_Template, 42, 4, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 17)(19, "ul", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, EmailListComponent_email_list_item_20_Template, 1, 1, "email-list-item", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, EmailListComponent_ng_container_21_Template, 1, 0, "ng-container", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, EmailListComponent_ng_template_22_Template, 3, 0, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("size", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx.hasSelectedMails)("indeterminate", ctx.isIndeterminate);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.hasSelectedMails > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.emails);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.emails.length)("ngIfElse", _r3);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__.PerfectScrollbarDirective, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_2__.FeatherIconDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdownItem, app_main_apps_email_email_list_email_list_item_email_list_item_component__WEBPACK_IMPORTED_MODULE_3__.EmailListItemComponent], encapsulation: 2 });


/***/ }),

/***/ 62281:
/*!**************************************************************************!*\
  !*** ./src/app/main/apps/email/email-sidebar/email-sidebar.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailSidebarComponent": () => (/* binding */ EmailSidebarComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_main_apps_email_email_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/main/apps/email/email.service */ 11321);
/* harmony import */ var _core_components_core_sidebar_core_sidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/components/core-sidebar/core-sidebar.service */ 66841);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 15375);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/extended */ 1570);
/* harmony import */ var _core_directives_core_ripple_effect_core_ripple_effect_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/directives/core-ripple-effect/core-ripple-effect.directive */ 75287);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 66279);











const _c0 = function (a0, a1) { return { "badge-light-warning": a0, "badge-light-primary": a1 }; };
function EmailSidebarComponent_a_8_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const folder_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](2, _c0, folder_r2.handle === "draft", folder_r2.handle === "inbox"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](folder_r2.handle === "draft" ? ctx_r3.draftCount : folder_r2.handle === "inbox" ? ctx_r3.unReadInboxCount : ctx_r3.unReadInboxCount);
} }
function EmailSidebarComponent_a_8_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EmailSidebarComponent_a_8_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r5.toggleSidebar("email-sidebar")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, EmailSidebarComponent_a_8_span_4_Template, 2, 5, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const folder_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", "/apps/email/" + folder_r2.handle)("routerLinkActive", "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data-feather", folder_r2.icon)("size", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](folder_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", folder_r2.handle === "draft" || folder_r2.handle === "inbox");
} }
function EmailSidebarComponent_a_12_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EmailSidebarComponent_a_12_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r8.toggleSidebar("email-sidebar")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const label_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", "/apps/email/label/" + label_r7.handle)("routerLinkActive", "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("bullet bullet-sm mr-1 ", label_r7.color, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](label_r7.title);
} }
class EmailSidebarComponent {
    /**
     *
     * @param {EmailService} _emailService
     * @param {CoreSidebarService} _coreSidebarService
     */
    constructor(_emailService, _coreSidebarService) {
        this._emailService = _emailService;
        this._coreSidebarService = _coreSidebarService;
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    }
    // Public Methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Open Compose & Update Value in Service
     */
    openCompose() {
        this.openComposeRef = true;
        this._emailService.composeEmail(this.openComposeRef);
        this._coreSidebarService.getSidebarRegistry('email-sidebar').toggleOpen();
    }
    /**
     * Toggle Sidebar
     *
     * @param nameRef
     */
    toggleSidebar(nameRef) {
        this._coreSidebarService.getSidebarRegistry(nameRef).toggleOpen();
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // Subscribe to Folder
        this._emailService.onFoldersChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._unsubscribeAll)).subscribe(response => {
            this.folders = response;
        });
        // Subscribe to Labels
        this._emailService.onLabelsChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._unsubscribeAll)).subscribe(response => {
            this.labels = response;
        });
        // Subscribe to Draft and Unread Mail Count
        this._emailService.onDraftCountChanged
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._unsubscribeAll))
            .subscribe(response => (this.draftCount = response));
        this._emailService.onUnreadInboxCountChanged
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._unsubscribeAll))
            .subscribe(response => (this.unReadInboxCount = response));
    }
    /**
     * On destroy
     */
    ngOnDestroy() {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}
EmailSidebarComponent.ɵfac = function EmailSidebarComponent_Factory(t) { return new (t || EmailSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_main_apps_email_email_service__WEBPACK_IMPORTED_MODULE_0__.EmailService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_components_core_sidebar_core_sidebar_service__WEBPACK_IMPORTED_MODULE_1__.CoreSidebarService)); };
EmailSidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: EmailSidebarComponent, selectors: [["app-email-sidebar"]], decls: 13, vars: 2, consts: [[1, "sidebar"], [1, "sidebar-content", "email-app-sidebar", 3, "perfectScrollbar"], [1, "email-app-menu"], [1, "form-group-compose", "text-center", "compose-btn"], ["type", "button", "data-target", "#compose-mail", "rippleEffect", "", 1, "compose-email", "btn", "btn-primary", "btn-block", 3, "click"], [1, "sidebar-menu-list"], [1, "list-group", "list-group-messages"], ["class", "list-group-item list-group-item-action", 3, "routerLink", "routerLinkActive", "click", 4, "ngFor", "ngForOf"], [1, "section-label", "mt-3", "mb-1", "px-2"], [1, "list-group", "list-group-labels"], [1, "list-group-item", "list-group-item-action", 3, "routerLink", "routerLinkActive", "click"], [1, "mr-75", 3, "data-feather", "size"], [1, "align-middle"], ["class", "badge badge-pill float-right", 3, "ngClass", 4, "ngIf"], [1, "badge", "badge-pill", "float-right", 3, "ngClass"]], template: function EmailSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EmailSidebarComponent_Template_button_click_4_listener() { return ctx.openCompose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Compose ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5)(7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, EmailSidebarComponent_a_8_Template, 5, 6, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "h6", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Labels");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, EmailSidebarComponent_a_12_Template, 3, 6, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.folders);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.labels);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkActive, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__.PerfectScrollbarDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__.DefaultClassDirective, _core_directives_core_ripple_effect_core_ripple_effect_directive__WEBPACK_IMPORTED_MODULE_2__.RippleEffectDirective, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_3__.FeatherIconDirective], encapsulation: 2 });


/***/ }),

/***/ 69673:
/*!****************************************************!*\
  !*** ./src/app/main/apps/email/email.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailComponent": () => (/* binding */ EmailComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var app_main_apps_email_email_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/main/apps/email/email.service */ 11321);
/* harmony import */ var _core_components_core_sidebar_core_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/components/core-sidebar/core-sidebar.component */ 9831);
/* harmony import */ var app_main_apps_email_email_sidebar_email_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/main/apps/email/email-sidebar/email-sidebar.component */ 62281);
/* harmony import */ var app_main_apps_email_email_compose_email_compose_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/main/apps/email/email-compose/email-compose.component */ 97713);
/* harmony import */ var app_main_apps_email_email_list_email_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/apps/email/email-list/email-list.component */ 25178);
/* harmony import */ var app_main_apps_email_email_details_email_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/apps/email/email-details/email-details.component */ 90146);









class EmailComponent {
    /**
     *
     * @param {DOCUMENT} document
     * @param {ActivatedRoute} route
     * @param {EmailService} _emailService
     */
    constructor(document, route, _emailService) {
        this.document = document;
        this.route = route;
        this._emailService = _emailService;
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // Update Search Text on QueryParams Change
        this.route.queryParams.subscribe(val => {
            this._emailService.updateSearchText(val.q);
        });
    }
}
EmailComponent.ɵfac = function EmailComponent_Factory(t) { return new (t || EmailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_main_apps_email_email_service__WEBPACK_IMPORTED_MODULE_0__.EmailService)); };
EmailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: EmailComponent, selectors: [["app-email"]], hostAttrs: [1, "email-application"], decls: 9, vars: 0, consts: [[1, "content-area-wrapper", "container-xxl", "p-0"], ["name", "email-sidebar", "overlayClass", "body-content-overlay", "collapsibleSidebar", "bs-gt-lg", 1, "sidebar-left"], [1, "content-right"], [1, "content-wrapper", "container-xxl", "p-0"], [1, "content-body"]], template: function EmailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "core-sidebar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "app-email-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "app-email-compose");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 3)(6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "app-email-list")(8, "app-email-details");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();


/***/ }),

/***/ 97246:
/*!*************************************************!*\
  !*** ./src/app/main/apps/email/email.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailModule": () => (/* binding */ EmailModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _core_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components */ 69065);
/* harmony import */ var _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/pipes/pipes.module */ 30021);
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/common.module */ 75078);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-select/ng-select */ 90413);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 15375);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-quill */ 41588);
/* harmony import */ var app_main_apps_email_email_compose_email_compose_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/main/apps/email/email-compose/email-compose.component */ 97713);
/* harmony import */ var app_main_apps_email_email_details_email_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/apps/email/email-details/email-details.component */ 90146);
/* harmony import */ var app_main_apps_email_email_list_email_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/apps/email/email-list/email-list.component */ 25178);
/* harmony import */ var app_main_apps_email_email_list_email_list_item_email_list_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/main/apps/email/email-list/email-list-item/email-list-item.component */ 42663);
/* harmony import */ var app_main_apps_email_email_sidebar_email_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/main/apps/email/email-sidebar/email-sidebar.component */ 62281);
/* harmony import */ var app_main_apps_email_email_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/main/apps/email/email.component */ 69673);
/* harmony import */ var app_main_apps_email_email_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/main/apps/email/email.service */ 11321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);



















// routing
const routes = [
    {
        path: ':folder',
        component: app_main_apps_email_email_component__WEBPACK_IMPORTED_MODULE_8__.EmailComponent,
        resolve: {
            email: app_main_apps_email_email_service__WEBPACK_IMPORTED_MODULE_9__.EmailService
        },
        data: { animation: 'EmailComponent' }
    },
    {
        path: 'label/:label',
        component: app_main_apps_email_email_component__WEBPACK_IMPORTED_MODULE_8__.EmailComponent,
        resolve: {
            email: app_main_apps_email_email_service__WEBPACK_IMPORTED_MODULE_9__.EmailService
        },
        data: { animation: 'EmailComponent' }
    },
    {
        path: '**',
        redirectTo: 'inbox',
        data: { animation: 'EmailComponent' }
    }
];
class EmailModule {
}
EmailModule.ɵfac = function EmailModule_Factory(t) { return new (t || EmailModule)(); };
EmailModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: EmailModule });
EmailModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ providers: [app_main_apps_email_email_service__WEBPACK_IMPORTED_MODULE_9__.EmailService], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forChild(routes),
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__.PerfectScrollbarModule,
        _core_common_module__WEBPACK_IMPORTED_MODULE_2__.CoreCommonModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__.NgSelectModule,
        ngx_quill__WEBPACK_IMPORTED_MODULE_16__.QuillModule.forRoot(),
        _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__.CorePipesModule,
        _core_components__WEBPACK_IMPORTED_MODULE_0__.CoreSidebarModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](EmailModule, { declarations: [app_main_apps_email_email_component__WEBPACK_IMPORTED_MODULE_8__.EmailComponent,
        app_main_apps_email_email_sidebar_email_sidebar_component__WEBPACK_IMPORTED_MODULE_7__.EmailSidebarComponent,
        app_main_apps_email_email_compose_email_compose_component__WEBPACK_IMPORTED_MODULE_3__.EmailComposeComponent,
        app_main_apps_email_email_list_email_list_component__WEBPACK_IMPORTED_MODULE_5__.EmailListComponent,
        app_main_apps_email_email_details_email_details_component__WEBPACK_IMPORTED_MODULE_4__.EmailDetailsComponent,
        app_main_apps_email_email_list_email_list_item_email_list_item_component__WEBPACK_IMPORTED_MODULE_6__.EmailListItemComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__.PerfectScrollbarModule,
        _core_common_module__WEBPACK_IMPORTED_MODULE_2__.CoreCommonModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__.NgSelectModule, ngx_quill__WEBPACK_IMPORTED_MODULE_16__.QuillModule, _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__.CorePipesModule,
        _core_components__WEBPACK_IMPORTED_MODULE_0__.CoreSidebarModule] }); })();


/***/ }),

/***/ 11321:
/*!**************************************************!*\
  !*** ./src/app/main/apps/email/email.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailService": () => (/* binding */ EmailService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);




class EmailService {
    /**
     *
     * @param {HttpClient} _httpClient
     * @param {Router} router
     */
    constructor(_httpClient, router) {
        this._httpClient = _httpClient;
        this.router = router;
        this.searchText = '';
        this.folderHandle = 'inbox';
        this.labelHandle = '';
        this.selectedEmails = [];
        this.isEmailDetailOpen = false;
        this.onEmailsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
        this.onSelectedEmailsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
        this.onOpenedEmailChanged = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
        this.onFoldersChanged = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
        this.onLabelsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
        this.composeEmailChanged = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.onSearchTextChanged = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.onDraftCountChanged = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
        this.onUnreadInboxCountChanged = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
        this.onEmailDetailChanged = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    }
    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route, state) {
        this.routeParams = route.params;
        return new Promise((resolve, reject) => {
            Promise.all([
                this.getFolders(),
                this.getLabels(),
                this.getEmails(),
                this.updateDraftCount(),
                this.updateUnreadCount()
            ]).then(() => {
                // close Opened email on router change
                this.closeEmailDetails();
                // deselect Selected emails on router change
                this.deselectEmails();
                resolve();
            }, reject);
        });
    }
    /**
     * Get Emails
     */
    getEmails() {
        if (this.routeParams.label) {
            return this.getEmailsByLabel(this.routeParams.label);
        }
        return this.getEmailsByFolder(this.routeParams.folder);
    }
    /**
     * Get Emails By Folder
     *
     * @param folderHandle
     * @returns {Promise<Email[]>}
     */
    getEmailsByFolder(folderHandle) {
        const apiUrl = 'api/emails-data?folder=' + folderHandle;
        return new Promise((resolve, reject) => {
            this._httpClient.get(apiUrl).subscribe((response) => {
                this.folderHandle = folderHandle;
                this.labelHandle = '';
                this.emails = response;
                this.tempEmails = response;
                this.onEmailsChanged.next(this.emails);
                if (folderHandle === 'inbox') {
                    this.updateUnreadCount();
                }
                resolve();
            }, reject);
        });
    }
    /**
     * Get Emails By Label
     *
     * @param labelHandle
     * @returns {Promise<Email[]>}
     */
    getEmailsByLabel(labelHandle) {
        const apiUrl = 'api/emails-data?labels=' + labelHandle;
        return new Promise((resolve, reject) => {
            this._httpClient.get(apiUrl).subscribe((response) => {
                this.labelHandle = labelHandle;
                this.folderHandle = '';
                this.emails = response;
                this.tempEmails = response;
                this.onEmailsChanged.next(this.emails);
                resolve();
            }, reject);
        });
    }
    /**
     * Get Folders
     *
     * @returns {Promise<Email[]>}
     */
    getFolders() {
        const apiUrl = 'api/email-folders';
        return new Promise((resolve, reject) => {
            this._httpClient.get(apiUrl).subscribe((response) => {
                this.folders = response;
                this.onFoldersChanged.next(this.folders);
                resolve();
            }, reject);
        });
    }
    /**
     * Get  Labels
     *
     * @returns {Promise<any>}
     */
    getLabels() {
        return new Promise((resolve, reject) => {
            this._httpClient.get('api/email-labels').subscribe((response) => {
                this.labels = response;
                this.onLabelsChanged.next(this.labels);
                resolve(this.labels);
            }, reject);
        });
    }
    /**
     * Compose Email
     *
     * @param value
     */
    composeEmail(value) {
        this.composeEmailRef = value;
        this.composeEmailChanged.next(this.composeEmailRef);
    }
    /**
     * Set/Update Folder On Selected Emails
     *
     * @param folderId
     */
    updateFolderOnSelectedEmails(folderRef) {
        this.selectedEmails.map(email => {
            email.folder = folderRef;
            this.updateEmail(email);
        });
        this.deselectEmails();
        // close Opened email
        this.closeEmailDetails();
    }
    /**
     * Set/Update Labels On Selected Emails
     *
     * @param labelRef
     */
    updateLabelOnSelectedEmails(labelRef) {
        this.selectedEmails.map(email => {
            if (email.labels.indexOf(labelRef) === -1) {
                // If labelRef isn't in email labels add it
                email.labels.push(labelRef);
            }
            else {
                // If labelRef is in email labels remove it
                email.labels.splice(email.labels.indexOf(labelRef), 1);
            }
            this.updateEmail(email);
        });
    }
    /**
     * Get Draft Count
     *
     * @returns {Promise<Email[]>}
     */
    updateDraftCount() {
        const apiUrl = 'api/emails-data?folder=draft';
        return new Promise((resolve, reject) => {
            this._httpClient.get(apiUrl).subscribe((response) => {
                this.draftEmailsCount = response.length;
                this.onDraftCountChanged.next(this.draftEmailsCount);
                resolve();
            }, reject);
        });
    }
    /**
     * Update Un-read Emails Count
     *
     * @returns {Promise<Email[]>}
     */
    updateUnreadCount() {
        const apiUrl = 'api/emails-data?folder=inbox';
        return new Promise((resolve, reject) => {
            this._httpClient.get(apiUrl).subscribe((response) => {
                const emails = response;
                const unReadEmails = emails.filter(email => email.isRead === false);
                this.unReadInboxCount = unReadEmails.length;
                this.onUnreadInboxCountChanged.next(this.unReadInboxCount);
                resolve();
            }, reject);
        });
    }
    /**
     * Toggle select all
     */
    toggleSelectAll() {
        if (this.selectedEmails.length > 0) {
            this.deselectEmails();
        }
        else {
            this.selectEmails();
        }
    }
    /**
     * Select Emails
     *
     * @param filterParameter
     * @param filterValue
     */
    selectEmails() {
        this.selectedEmails = JSON.parse(JSON.stringify(this.emails));
        this.onSelectedEmailsChanged.next(this.selectedEmails);
    }
    /**
     * Deselect Emails
     */
    deselectEmails() {
        this.selectedEmails = [];
        // Trigger the next event
        this.onSelectedEmailsChanged.next(this.selectedEmails);
    }
    /**
     * Toggle Selected Email By Id
     *
     * @param id
     */
    toggleSelectedMail(id) {
        // First, check if we already have that Email as selected...
        if (this.selectedEmails.length > 0) {
            for (const email of this.selectedEmails) {
                // ...delete the unselected Email
                if (email.id === id) {
                    const index = this.selectedEmails.indexOf(email);
                    if (index !== -1) {
                        this.selectedEmails.splice(index, 1);
                        // Trigger the next event
                        this.onSelectedEmailsChanged.next(this.selectedEmails);
                        // Return
                        return;
                    }
                }
            }
        }
        // If we don't have it, push as selected
        this.selectedEmails.push(this.emails.find(email => {
            return email.id === id;
        }));
        // Trigger the next event
        this.onSelectedEmailsChanged.next(this.selectedEmails);
    }
    /**
     * Toggle Starred
     *
     * @param email
     */
    toggleStarred(email) {
        if (email.isStarred === false) {
            email.isStarred = true;
        }
        else {
            email.isStarred = false;
        }
        this.updateEmail(email);
    }
    /**
     * Update Email
     *
     * @param email
     * @returns {Promise<any>}
     */
    updateEmail(email) {
        return new Promise((resolve, reject) => {
            this._httpClient.post('api/emails-data/' + email.id, { ...email }).subscribe(response => {
                this.getEmails().then(emails => {
                    this.updateDraftCount();
                    resolve(emails);
                }, reject);
            });
        });
    }
    /**
     * Set/Update Opened Email
     *
     * @param openedEmail
     */
    setOpenedEmail(openedEmail) {
        this.selectedEmails = [];
        this.selectedEmails[0] = openedEmail;
        this.onSelectedEmailsChanged.next(this.selectedEmails);
    }
    /**
     * Set/Update Opened Email by id
     *
     * @param id
     */
    openEmailDetails(id) {
        this.openedEmail = this.emails.find(email => {
            return email.id === id;
        });
        this.onOpenedEmailChanged.next(this.openedEmail);
        // Set opened mail mark as read
        this.markAsRead(id);
    }
    /**
     * Close Email Details
     */
    closeEmailDetails() {
        this.isEmailDetailOpen = false;
        this.onEmailDetailChanged.next(this.isEmailDetailOpen);
    }
    /**
     * Read Email
     *
     * @param id
     */
    markAsRead(id) {
        this.selectedEmails.map(email => {
            if (email.id === id) {
                email.isRead = true;
            }
            this.updateEmail(email);
        });
    }
    /**
     * Un-read Email
     *
     */
    markAsUnread() {
        this.selectedEmails.map(email => {
            email.isRead = false;
            this.updateEmail(email);
            this.deselectEmails();
            // close Opened email
            this.closeEmailDetails();
        });
    }
    /**
     * Update SearchText & Route
     *
     * @param value
     */
    updateSearchText(value) {
        if (value !== undefined && value !== null) {
            if (this.labelHandle === '') {
                this.router.navigate(['apps/email/' + this.folderHandle], { queryParams: { q: value } });
            }
            else {
                this.router.navigate(['apps/email/label/' + this.labelHandle], { queryParams: { q: value } });
            }
            if (value === '' && this.labelHandle === '') {
                this.router.navigate(['apps/email/' + this.folderHandle], {});
            }
            else if (value === '' && this.labelHandle !== '') {
                this.router.navigate(['apps/email/label/' + this.labelHandle], {});
            }
            this.searchText = value.toLowerCase();
            this.getMailOnQuery(value);
        }
    }
    /**
     * Get Email On Query
     */
    getMailOnQuery(value) {
        const filteredMail = this.tempEmails.filter(email => {
            return email.subject.toLowerCase().includes(value);
        });
        this.emails = filteredMail;
        this.onEmailsChanged.next(this.emails);
    }
}
EmailService.ɵfac = function EmailService_Factory(t) { return new (t || EmailService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
EmailService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EmailService, factory: EmailService.ɵfac });


/***/ })

}]);
//# sourceMappingURL=src_app_main_apps_email_email_module_ts.js.map