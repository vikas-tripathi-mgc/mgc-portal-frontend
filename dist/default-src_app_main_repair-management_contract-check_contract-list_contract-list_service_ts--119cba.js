"use strict";
(self["webpackChunkvuexy"] = self["webpackChunkvuexy"] || []).push([["default-src_app_main_repair-management_contract-check_contract-list_contract-list_service_ts--119cba"],{

/***/ 91563:
/*!**********************************************************************************************!*\
  !*** ./src/app/main/repair-management/contract-check/contract-list/contract-list.service.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContractListService": () => (/* binding */ ContractListService),
/* harmony export */   "RmaLookupLine": () => (/* binding */ RmaLookupLine),
/* harmony export */   "RmaLookupRequest": () => (/* binding */ RmaLookupRequest)
/* harmony export */ });
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 82808);






class ContractListService {
    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(_httpClient, _toastrService) {
        this._httpClient = _httpClient;
        this._toastrService = _toastrService;
        // Set the defaults
        this.onDatatablessChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject({});
    }
    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route, state) {
        return new Promise((resolve, reject) => {
            Promise.all([this.getDataTableRows()]).then(() => {
                resolve();
            }, reject);
        });
    }
    /**
     * Get rows
     */
    getDataTableRows() {
        return new Promise((resolve, reject) => {
            this._httpClient.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/api/v1/repairDevices`).subscribe((response) => {
                this.rows = response;
                this.onDatatablessChanged.next(this.rows);
                resolve(this.rows);
            }, reject);
        });
    }
    getValidityCheck(serialNumber) {
        return this._httpClient
            .post(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/api/v1/getContractStatus`, { serialNumber })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(user => {
            // console.log(user.actions[0].returnValue.ListOfZEBSerialNumber.Asset[0].ListOfServiceDetails.ServiceDetails);
            if (!user.actions[0].returnValue.ListOfZEBSerialNumber?.Asset[0]) {
                this.rows = [];
                // this.onDatatablessChanged.next(this.rows);
                console.log("EMPTY NOT FOUND");
            }
            else {
                this.rows = user.actions[0].returnValue.ListOfZEBSerialNumber.Asset[0].ListOfServiceDetails.ServiceDetails;
                this.onDatatablessChanged.next(this.rows);
                console.log("FOUND");
            }
            // resolve(this.rows);
            return user;
        }, error => {
            console.log(error);
            console.log("EMPTY IN ERROR");
            setTimeout(() => {
                this.rows = [];
                this.onDatatablessChanged.next(this.rows);
                this._toastrService.success('Not a Valid Serial Number.', 'Faied to check Contract validity', { toastClass: 'toast ngx-toastr', closeButton: true });
            }, 1000);
            // this.toggleSidebar('new-user-sidebar');
        }));
    }
}
ContractListService.ɵfac = function ContractListService_Factory(t) { return new (t || ContractListService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService)); };
ContractListService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ContractListService, factory: ContractListService.ɵfac, providedIn: 'root' });
class RmaLookupLine {
}
class RmaLookupRequest {
}


/***/ }),

/***/ 17335:
/*!******************************************************************!*\
  !*** ./src/app/main/repair-management/repair-fault-selection.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rmaFaultSelectionService": () => (/* binding */ rmaFaultSelectionService)
/* harmony export */ });
class rmaFaultSelectionService {
    constructor() {
        this.mainCategory = {
            title: 'Battery',
            id: 1
        };
        this.subcategory = {
            title: 'Battery TC2x change request',
            parentId: 1
        };
        this.mainGroups = [
            {
                title: 'Battery',
                id: 1
            },
            {
                title: 'Cable',
                id: 2
            },
            {
                title: 'Camera',
                id: 3
            },
            {
                title: 'Charging',
                id: 4
            },
            {
                title: 'Communication',
                id: 5
            },
            {
                title: 'Cradle',
                id: 6
            },
            {
                title: 'Damage',
                id: 7
            },
            {
                title: 'Display',
                id: 8
            },
            {
                title: 'Docking',
                id: 9
            },
            {
                title: 'Fan',
                id: 10
            },
            {
                title: 'Keyboard',
                id: 11
            },
            {
                title: 'Laser',
                id: 12
            },
            {
                title: 'Led',
                id: 13
            },
            {
                title: 'Lockup/Reset',
                id: 14
            },
            {
                title: 'Memory',
                id: 15
            },
            {
                title: 'Others',
                id: 16
            },
            {
                title: 'Payment Terminal',
                id: 17
            },
            {
                title: 'Power',
                id: 18
            },
            {
                title: 'Printer',
                id: 19
            },
            {
                title: 'Software',
                id: 20
            },
            {
                title: 'Speaker',
                id: 21
            },
            {
                title: 'Touch Panel',
                id: 22
            },
            {
                title: 'Trigger',
                id: 23
            },
            {
                title: 'Wand',
                id: 24
            }
        ];
        this.subCategories = [
            //Battery
            {
                title: 'Battery TC2x change request',
                parentId: 1,
                parent: 'Battery'
            },
            {
                title: 'Battery backup',
                parentId: 1,
                parent: 'Battery'
            },
            {
                title: 'Battery broken conn or wire',
                parentId: 1,
                parent: 'Battery'
            },
            {
                title: 'Battery drain problem',
                parentId: 1,
                parent: 'Battery'
            },
            {
                title: 'Battery general problem',
                parentId: 1,
                parent: 'Battery'
            },
            {
                title: 'Battery won\'t charge',
                parentId: 1,
                parent: 'Battery'
            },
            {
                title: 'Battery won\'t hold charge',
                parentId: 1,
                parent: 'Battery'
            },
            //Cable
            {
                title: 'Cable connector',
                parentId: 2,
                parent: 'Cable'
            },
            {
                title: 'Cable cut',
                parentId: 2,
                parent: 'Cable'
            },
            {
                title: 'Cable general problem',
                parentId: 2,
                parent: 'Cable'
            },
            {
                title: 'Cable intermittent',
                parentId: 2,
                parent: 'Cable'
            },
            {
                title: 'Cable loose',
                parentId: 2,
                parent: 'Cable'
            },
            {
                title: 'Cable worn',
                parentId: 2,
                parent: 'Cable'
            },
            //Camera
            {
                title: 'Camera error message',
                parentId: 3,
                parent: 'Camera'
            },
            {
                title: 'Camera image failure',
                parentId: 3,
                parent: 'Camera'
            },
            {
                title: 'Camera no decode',
                parentId: 3,
                parent: 'Camera'
            },
            //Charger
            {
                title: 'Charger general problem',
                parentId: 4,
                parent: 'Charging'
            },
            {
                title: 'Charger not charging',
                parentId: 4,
                parent: 'Charging'
            },
            {
                title: 'Charger over charging',
                parentId: 4,
                parent: 'Charging'
            },
            //Communication
            {
                title: 'Comms CC Chip reader error',
                parentId: 5,
                parent: 'Communication'
            },
            {
                title: 'Comms finger print reader',
                parentId: 5,
                parent: 'Communication'
            },
            {
                title: 'Comms mag stripe reader',
                parentId: 5,
                parent: 'Communication'
            },
            {
                title: 'Comms wrong rf card type',
                parentId: 5,
                parent: 'Communication'
            },
            {
                title: 'Communication NFC issue',
                parentId: 5,
                parent: 'Communication'
            },
            {
                title: 'Communication SIM slot issue',
                parentId: 5,
                parent: 'Communication'
            },
            {
                title: 'Communication USB',
                parentId: 5,
                parent: 'Communication'
            },
            {
                title: 'Communication bluetooth',
                parentId: 5,
                parent: 'Communication'
            },
            {
                title: 'Communication general problem',
                parentId: 5,
                parent: 'Communication'
            },
            {
                title: 'Communication interface',
                parentId: 5,
                parent: 'Communication'
            },
            {
                title: 'Communication loose gprs conn',
                parentId: 5,
                parent: 'Communication'
            },
            {
                title: 'Communication modem',
                parentId: 5,
                parent: 'Communication'
            },
            {
                title: 'Communication optical/ir',
                parentId: 5,
                parent: 'Communication'
            },
            {
                title: 'Communication printer',
                parentId: 5,
                parent: 'Communication'
            },
            {
                title: 'Communication range/coverage',
                parentId: 5,
                parent: 'Communication'
            },
            {
                title: 'Communication voice/calls',
                parentId: 5,
                parent: 'Communication'
            },
            {
                title: 'Communication wifi',
                parentId: 5,
                parent: 'Communication'
            },
            {
                title: 'Communication int problem',
                parentId: 5,
                parent: 'Communication'
            },
            {
                title: 'Communication low signal',
                parentId: 5,
                parent: 'Communication'
            },
            {
                title: 'Communication not connect',
                parentId: 5,
                parent: 'Communication'
            },
            {
                title: 'Gps general problem',
                parentId: 5,
                parent: 'Communication'
            },
            {
                title: 'Gps intermittent problem',
                parentId: 5,
                parent: 'Communication'
            },
            {
                title: 'Gps loose position',
                parentId: 5,
                parent: 'Communication'
            },
            {
                title: 'Gps low signal',
                parentId: 5,
                parent: 'Communication'
            },
            //Cradle
            {
                title: 'Cradle no charge/power',
                parentId: 6,
                parent: 'Cradle'
            },
            {
                title: 'Cradle no ethernet',
                parentId: 6,
                parent: 'Cradle'
            },
            //Damage
            {
                title: 'Damage antenna',
                parentId: 7,
                parent: 'Damage'
            },
            {
                title: 'Damage antenna mount',
                parentId: 7,
                parent: 'Damage'
            },
            {
                title: 'Damage battery',
                parentId: 7,
                parent: 'Damage'
            },
            {
                title: 'Damage by water',
                parentId: 7,
                parent: 'Damage'
            },
            {
                title: 'Damage case major damage',
                parentId: 7,
                parent: 'Damage'
            },
            {
                title: 'Damage case minor damage',
                parentId: 7,
                parent: 'Damage'
            },
            {
                title: 'Damage connector',
                parentId: 7,
                parent: 'Damage'
            },
            {
                title: 'Damage end cap',
                parentId: 7,
                parent: 'Damage'
            },
            {
                title: 'Damage general problem',
                parentId: 7,
                parent: 'Damage'
            },
            {
                title: 'Damage handle',
                parentId: 7,
                parent: 'Damage'
            },
            {
                title: 'Damage main board/pcb',
                parentId: 7,
                parent: 'Damage'
            },
            {
                title: 'Damage printer latch broken',
                parentId: 7,
                parent: 'Damage'
            },
            {
                title: 'Damage reset button',
                parentId: 7,
                parent: 'Damage'
            },
            {
                title: 'Damage scan engine',
                parentId: 7,
                parent: 'Damage'
            },
            {
                title: 'Damage scan head housing',
                parentId: 7,
                parent: 'Damage'
            },
            {
                title: 'Damage tp & display unit',
                parentId: 7,
                parent: 'Damage'
            },
            {
                title: 'Damage tp or display',
                parentId: 7,
                parent: 'Damage'
            },
            {
                title: 'Damage trigger',
                parentId: 7,
                parent: 'Damage'
            },
            {
                title: 'Damage warranty seal',
                parentId: 7,
                parent: 'Damage'
            },
            {
                title: 'Damage window/lens',
                parentId: 7,
                parent: 'Damage'
            },
            //Display
            {
                title: 'Display backlight',
                parentId: 8,
                parent: 'Display'
            },
            {
                title: 'Display colour distortion',
                parentId: 8,
                parent: 'Display'
            },
            {
                title: 'Display debris',
                parentId: 8,
                parent: 'Display'
            },
            {
                title: 'Display does not display',
                parentId: 8,
                parent: 'Display'
            },
            {
                title: 'Display general problem',
                parentId: 8,
                parent: 'Display'
            },
            {
                title: 'Display intermittent problem',
                parentId: 8,
                parent: 'Display'
            },
            {
                title: 'Display lines',
                parentId: 8,
                parent: 'Display'
            },
            {
                title: 'Display missing characters',
                parentId: 8,
                parent: 'Display'
            },
            {
                title: 'Display problem (no tp)',
                parentId: 8,
                parent: 'Display'
            },
            {
                title: 'Display resolution',
                parentId: 8,
                parent: 'Display'
            },
            //Docking
            {
                title: 'Docking general failure',
                parentId: 9,
                parent: 'Docking'
            },
            //Fan
            {
                title: 'Fan general problem',
                parentId: 10,
                parent: 'Fan'
            },
            //Keyboard
            {
                title: 'Keyboard backlight',
                parentId: 11,
                parent: 'Keyboard'
            },
            {
                title: 'Keyboard double key entry',
                parentId: 11,
                parent: 'Keyboard'
            },
            {
                title: 'Keyboard general problem',
                parentId: 11,
                parent: 'Keyboard'
            },
            {
                title: 'Keyboard intermittent problem',
                parentId: 11,
                parent: 'Keyboard'
            },
            {
                title: 'Keyboard keys not functional',
                parentId: 11,
                parent: 'Keyboard'
            },
            {
                title: 'Keyboard missing keys',
                parentId: 11,
                parent: 'Keyboard'
            },
            {
                title: 'Keyboard sticking keys',
                parentId: 11,
                parent: 'Keyboard'
            },
            {
                title: 'Keyboard worn keys',
                parentId: 11,
                parent: 'Keyboard'
            },
            {
                title: 'Keyboard wrong mapping or bios',
                parentId: 11,
                parent: 'Keyboard'
            },
            //Laser
            {
                title: 'Laser alignment/beam size',
                parentId: 12,
                parent: 'Laser'
            },
            {
                title: 'Laser general problem',
                parentId: 12,
                parent: 'Laser'
            },
            {
                title: 'Laser intermittent',
                parentId: 12,
                parent: 'Laser'
            },
            {
                title: 'Laser no beam',
                parentId: 12,
                parent: 'Laser'
            },
            {
                title: 'Laser no decode',
                parentId: 12,
                parent: 'Laser'
            },
            {
                title: 'Laser scan line speed',
                parentId: 12,
                parent: 'Laser'
            },
            {
                title: 'Laser weak/dim beam',
                parentId: 12,
                parent: 'Laser'
            },
            //Led
            {
                title: 'Led flickering',
                parentId: 13,
                parent: 'Led'
            },
            {
                title: 'Led general problem',
                parentId: 13,
                parent: 'Led'
            },
            //Lockup/Reset
            {
                title: 'Lockup general problem',
                parentId: 14,
                parent: 'Lockup/Reset'
            },
            {
                title: 'Lockup intermittent',
                parentId: 14,
                parent: 'Lockup/Reset'
            },
            {
                title: 'Reset general problem',
                parentId: 14,
                parent: 'Lockup/Reset'
            },
            {
                title: 'Reset unexpected reboots',
                parentId: 14,
                parent: 'Lockup/Reset'
            },
            //Memory
            {
                title: 'Disk general problem',
                parentId: 15,
                parent: 'Memory'
            },
            {
                title: 'Disk power problem',
                parentId: 15,
                parent: 'Memory'
            },
            {
                title: 'Disk read/write problem',
                parentId: 15,
                parent: 'Memory'
            },
            {
                title: 'Memory error',
                parentId: 15,
                parent: 'Memory'
            },
            {
                title: 'Memory general problem',
                parentId: 15,
                parent: 'Memory'
            },
            {
                title: 'Memory insufficient',
                parentId: 15,
                parent: 'Memory'
            },
            {
                title: 'Memory intermittent',
                parentId: 15,
                parent: 'Memory'
            },
            {
                title: 'Memory sd card r/w issue',
                parentId: 15,
                parent: 'Memory'
            },
            //Others
            {
                title: 'Error received (see notes)',
                parentId: 16,
                parent: 'Others'
            },
            {
                title: 'Unspecified',
                parentId: 16,
                parent: 'Others'
            },
            //Payment Terminal
            {
                title: 'PT CC Chip reader error',
                parentId: 17,
                parent: 'Payment Terminal'
            },
            {
                title: 'PT Display problem (no tp)',
                parentId: 17,
                parent: 'Payment Terminal'
            },
            {
                title: 'PT Keyboard not functional',
                parentId: 17,
                parent: 'Payment Terminal'
            },
            {
                title: 'PT Mag stripe reader',
                parentId: 17,
                parent: 'Payment Terminal'
            },
            {
                title: 'PT No Power',
                parentId: 17,
                parent: 'Payment Terminal'
            },
            {
                title: 'PT Not Charging',
                parentId: 17,
                parent: 'Payment Terminal'
            },
            {
                title: 'PT/Device Separated',
                parentId: 17,
                parent: 'Payment Terminal'
            },
            //Power
            {
                title: 'Power does not work',
                parentId: 18,
                parent: 'Power'
            },
            {
                title: 'Power general problem',
                parentId: 18,
                parent: 'Power'
            },
            {
                title: 'Power intermittent',
                parentId: 18,
                parent: 'Power'
            },
            {
                title: 'Power overheating',
                parentId: 18,
                parent: 'Power'
            },
            {
                title: 'Power shortage',
                parentId: 18,
                parent: 'Power'
            },
            {
                title: 'Power won\'t power up',
                parentId: 18,
                parent: 'Power'
            },
            //Printer
            {
                title: 'Printer bad/broken gear',
                parentId: 19,
                parent: 'Printer'
            },
            {
                title: 'Printer cable',
                parentId: 19,
                parent: 'Printer'
            },
            {
                title: 'Printer calibration issue',
                parentId: 19,
                parent: 'Printer'
            },
            {
                title: 'Printer communication problem',
                parentId: 19,
                parent: 'Printer'
            },
            {
                title: 'Printer cover will not close',
                parentId: 19,
                parent: 'Printer'
            },
            {
                title: 'Printer cutter issue',
                parentId: 19,
                parent: 'Printer'
            },
            {
                title: 'Printer feed',
                parentId: 19,
                parent: 'Printer'
            },
            {
                title: 'Printer general problem',
                parentId: 19,
                parent: 'Printer'
            },
            {
                title: 'Printer head problem',
                parentId: 19,
                parent: 'Printer'
            },
            {
                title: 'Printer media arm broken',
                parentId: 19,
                parent: 'Printer'
            },
            {
                title: 'Printer media cover issue',
                parentId: 19,
                parent: 'Printer'
            },
            {
                title: 'Printer paper jam',
                parentId: 19,
                parent: 'Printer'
            },
            {
                title: 'Printer printing quality',
                parentId: 19,
                parent: 'Printer'
            },
            {
                title: 'Printer ribbon issue',
                parentId: 19,
                parent: 'Printer'
            },
            {
                title: 'Printer roller issue',
                parentId: 19,
                parent: 'Printer'
            },
            //Sofware
            {
                title: 'Downgrade',
                parentId: 20,
                parent: 'Sofware'
            },
            {
                title: 'Software application problem',
                parentId: 20,
                parent: 'Sofware'
            },
            {
                title: 'Software bios general problem',
                parentId: 20,
                parent: 'Sofware'
            },
            {
                title: 'Software configuration issue',
                parentId: 20,
                parent: 'Sofware'
            },
            {
                title: 'Sofware does not load',
                parentId: 20,
                parent: 'Sofware'
            },
            {
                title: 'Software error',
                parentId: 20,
                parent: 'Sofware'
            },
            {
                title: 'Software general problem',
                parentId: 20,
                parent: 'Sofware'
            },
            {
                title: 'Software int applic problem',
                parentId: 20,
                parent: 'Sofware'
            },
            {
                title: 'Software revision/version',
                parentId: 20,
                parent: 'Sofware'
            },
            {
                title: 'Sofware wrong os',
                parentId: 20,
                parent: 'Sofware'
            },
            {
                title: 'Software wrong service pack',
                parentId: 20,
                parent: 'Sofware'
            },
            {
                title: 'Upgrade',
                parentId: 20,
                parent: 'Sofware'
            },
            //Speaker
            {
                title: 'Speaker audio jack problem',
                parentId: 21,
                parent: 'Speaker'
            },
            {
                title: 'Speaker intermittent',
                parentId: 21,
                parent: 'Speaker'
            },
            {
                title: 'Speaker low volume',
                parentId: 21,
                parent: 'Speaker'
            },
            {
                title: 'Speaker no sound',
                parentId: 21,
                parent: 'Speaker'
            },
            //Touch Panel
            {
                title: 'Touch panel & display problem',
                parentId: 22,
                parent: 'Touch Panel'
            },
            {
                title: 'Touch panel callibration',
                parentId: 22,
                parent: 'Touch Panel'
            },
            {
                title: 'Touch panel does not work',
                parentId: 22,
                parent: 'Touch Panel'
            },
            {
                title: 'Touch panel incorrect reaction',
                parentId: 22,
                parent: 'Touch Panel'
            },
            {
                title: 'Touch panel problem',
                parentId: 22,
                parent: 'Touch Panel'
            },
            //Trigger
            {
                title: 'Trigger intermittent',
                parentId: 23,
                parent: 'Trigger'
            },
            {
                title: 'Trigger not work',
                parentId: 23,
                parent: 'Trigger'
            },
            {
                title: 'Trigger scan button not work',
                parentId: 23,
                parent: 'Trigger'
            },
            //Wand
            {
                title: 'Wand broken tip',
                parentId: 24,
                parent: 'Wand'
            },
            {
                title: 'Wand dirty tip',
                parentId: 24,
                parent: 'Wand'
            },
            {
                title: 'Wand general problem',
                parentId: 24,
                parent: 'Wand'
            },
            {
                title: 'Wand missing tip',
                parentId: 24,
                parent: 'Wand'
            },
            {
                title: 'Wand no beam/decode',
                parentId: 24,
                parent: 'Wand'
            }
        ];
    }
}
function getMockSelection() {
    return [
        {
            name: "Battery",
            children: [
                "Battery TC2x change request",
                "Battery backup",
                "Battery broken conn or wire",
                "Battery drain problem",
                "Battery general problem",
                "Battery won't charge",
                "Battery won't hold charge",
            ]
        },
        {
            name: "Cable",
            children: [
                "Cable connector",
                "Cable cut",
                "Cable general problem",
                "Cable intermittent",
                "Cable loose",
                "Cable worn"
            ]
        },
        {
            name: "Camera",
            children: [
                "Camera error message",
                "Camera image failure",
                "Camera no decode"
            ]
        }
    ];
}


/***/ }),

/***/ 30839:
/*!**************************************************************************!*\
  !*** ./node_modules/@ctrl/ngx-csv/__ivy_ngcc__/fesm2015/ctrl-ngx-csv.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CsvDirective": () => (/* binding */ CsvDirective),
/* harmony export */   "CsvModule": () => (/* binding */ CsvModule),
/* harmony export */   "arrays2csv": () => (/* binding */ arrays2csv),
/* harmony export */   "blob": () => (/* binding */ blob),
/* harmony export */   "buildURI": () => (/* binding */ buildURI),
/* harmony export */   "elementOrEmpty": () => (/* binding */ elementOrEmpty),
/* harmony export */   "isArrays": () => (/* binding */ isArrays),
/* harmony export */   "isJsons": () => (/* binding */ isJsons),
/* harmony export */   "joiner": () => (/* binding */ joiner),
/* harmony export */   "jsons2arrays": () => (/* binding */ jsons2arrays),
/* harmony export */   "jsons2csv": () => (/* binding */ jsons2csv),
/* harmony export */   "jsonsHeaders": () => (/* binding */ jsonsHeaders),
/* harmony export */   "string2csv": () => (/* binding */ string2csv),
/* harmony export */   "toCSV": () => (/* binding */ toCSV)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 34497);





const isJsons = array => Array.isArray(array) && array.every(row => typeof row === 'object' && !(row instanceof Array));

const isArrays = array => Array.isArray(array) && array.every(row => Array.isArray(row));

function jsonsHeaders(array) {
  return Array.from(new Set(array.map(item => Object.keys(item)).reduce((a, b) => [...a, ...b], [])));
}

function jsons2arrays(jsons, headers) {
  headers = headers || jsonsHeaders(jsons); // allow headers to have custom labels, defaulting to having the header data key be the label

  let headerLabels = headers;
  let headerKeys = headers;

  if (isJsons(headers)) {
    headerLabels = headers.map(header => header.label);
    headerKeys = headers.map(header => header.key);
  }

  const data = jsons.map(object => headerKeys.map(header => header in object ? object[header] : ''));
  return [headerLabels, ...data];
}

const elementOrEmpty = element => element || element === 0 ? element : '';

function joiner(data, delimiter = ',') {
  return data.map((row, index) => row.map(element => '"' + elementOrEmpty(element) + '"').join(delimiter)).join(`\n`);
}

function arrays2csv(data, headers, delimiter) {
  return joiner(headers ? [headers, ...data] : data, delimiter);
}

function jsons2csv(data, headers, delimiter) {
  return joiner(jsons2arrays(data, headers), delimiter);
}

function string2csv(data, headers, delimiter) {
  return headers ? `${headers.join(delimiter)}\n${data}` : data;
}

function toCSV(data, headers, delimiter) {
  if (isJsons(data)) {
    return jsons2csv(data, headers, delimiter);
  }

  if (isArrays(data)) {
    return arrays2csv(data, headers, delimiter);
  }

  if (typeof data === 'string') {
    return string2csv(data, headers, delimiter);
  }

  throw new TypeError(`Data should be a "String", "Array of arrays" OR "Array of objects" `);
}

function blob(data, uFEFF = true, headers, delimiter) {
  const csv = toCSV(data, headers, delimiter);
  return new Blob([uFEFF ? '\uFEFF' : '', csv], {
    type: 'text/csv'
  });
}

function buildURI(data, uFEFF = true, headers, delimiter) {
  return URL.createObjectURL(blob(data, uFEFF, headers, delimiter));
}

class CsvDirective {
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
    /** the body of the csv */

    this.data = [];
    /** Set the seperator between values */

    this.delimiter = ',';
    /** adds a Byte order mark to setup the csv as UTF-8  */

    this.uFEFF = true;
    /** filename */

    this.download = 'data.csv';
    this.target = this.isIEBrowser() ? '' : '_blank';
  }
  /** Set the filename of the csv. Default is `data.csv` */


  set filename(a) {
    this.download = a;
  }

  onClick() {
    // IE handling
    if (this.isIEBrowser()) {
      const file = blob(this.data, this.uFEFF, this.headers, this.delimiter);
      window.navigator.msSaveBlob(file, this.download);
    }
  }

  isIEBrowser() {
    return !!window.navigator.msSaveOrOpenBlob;
  }

  ngOnChanges() {
    this.href = this.sanitizer.bypassSecurityTrustResourceUrl(buildURI(this.data, this.uFEFF, this.headers, this.delimiter));
  }

}

CsvDirective.ɵfac = function CsvDirective_Factory(t) {
  return new (t || CsvDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer));
};

CsvDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: CsvDirective,
  selectors: [["", "csvLink", ""]],
  hostVars: 3,
  hostBindings: function CsvDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CsvDirective_click_HostBindingHandler() {
        return ctx.onClick();
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("download", ctx.download)("target", ctx.target)("href", ctx.href, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrlOrResourceUrl"]);
    }
  },
  inputs: {
    data: "data",
    delimiter: "delimiter",
    uFEFF: "uFEFF",
    target: "target",
    filename: "filename",
    headers: "headers"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});

CsvDirective.ctorParameters = () => [{
  type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer
}];

CsvDirective.propDecorators = {
  data: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  headers: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  delimiter: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  filename: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  uFEFF: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  href: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding
  }],
  download: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding
  }],
  target: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding
  }],
  onClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
    args: ['click']
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CsvDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[csvLink]'
    }]
  }], function () {
    return [{
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer
    }];
  }, {
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    delimiter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    uFEFF: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    download: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding
    }],
    target: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding
    }],
    filename: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['click']
    }],
    href: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding
    }],
    headers: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

class CsvModule {}

CsvModule.ɵfac = function CsvModule_Factory(t) {
  return new (t || CsvModule)();
};

CsvModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: CsvModule
});
CsvModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CsvModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [CsvDirective],
      exports: [CsvDirective]
    }]
  }], null, null);
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CsvModule, {
    declarations: [CsvDirective],
    exports: [CsvDirective]
  });
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=default-src_app_main_repair-management_contract-check_contract-list_contract-list_service_ts--119cba.js.map