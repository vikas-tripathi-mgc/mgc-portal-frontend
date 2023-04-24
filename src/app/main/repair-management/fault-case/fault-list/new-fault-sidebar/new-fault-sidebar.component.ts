import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { NgbDateStruct, NgbCalendar, NgbDate, NgbDateParserFormatter, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { FaultListService, RepairDevice } from '../fault-list.service';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { CoreConfigService } from '@core/services/config.service';
import { ToastrService } from 'ngx-toastr';
import { ContractListService } from 'app/main/repair-management/contract-check/contract-list/contract-list.service';
import { rmaFaultSelectionService } from 'app/main/repair-management/repair-fault-selection';

import { delay, tap } from 'rxjs/operators';

@Component({
  selector: 'app-new-fault-sidebar',
  templateUrl: './new-fault-sidebar.component.html',
  styleUrls: ['./new-fault-sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NewFaultSidebarComponent implements OnInit {

  public fullname;
  public username;
  public email;
  public selectFaultCategory: any;
  public selectFaultCategoryLoading = false;
  public selectFaultSubCategory: any;
  public selectFaultSubCategoryLoading = false;

  public contractCheckValidation = { isValid: 0, message: "" };

  public form: UntypedFormGroup;
  public emailDPdata: NgbDateStruct;
  public collectionDPdata: NgbDateStruct;
  public rmaFaultSelectionService = new rmaFaultSelectionService;
  public repairDevice = new RepairDevice;
  public uniqueCustomerCodes = [];

  filterSubById(id) {

    return this.rmaFaultSelectionService.subCategories.filter(item => item.parent === id);
  }

  // public _faultService: FaultListService;
  // Private

  /**
   * Constructor
   *
   * @param {CoreSidebarService} _coreSidebarService
   */
  constructor(
    private _coreSidebarService: CoreSidebarService,
    private _faultListService: FaultListService,
    private _coreConfigService: CoreConfigService,
    private _contractListService: ContractListService,
    private _formBuilder: UntypedFormBuilder, private _toastrService: ToastrService) { }

  /**
   * Toggle the sidebar
   *
   * @param name
   */
  toggleSidebar(name): void {
    this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
  }

  // get f() {
  //   return this.loginForm.controls;
  // }
  // submit(form) {
  //   if (form.valid) {
  //     this.toggleSidebar('new-user-sidebar');
  //   }
  // }

  /**
   * Submit
   *
   * @param form
   */

  // private selectcategoryMethod() {
  //   this.selectFaultCategoryLoading = true;
  //   this.selectFaultCategory = this.getFaultCategory().subscribe(x => {
  //     this.selectFaultCategory = x;
  //     this.selectFaultCategoryLoading = false;
  //   });;

  // }

  // private selectSubCategoryMethod() {
  //   this.selectFaultSubCategoryLoading = true;
  //   this.selectFaultSubCategory = this.getFaultSubCategory().subscribe(x => {
  //     this.selectFaultSubCategory = x;
  //     this.selectFaultSubCategoryLoading = false;
  //   });;

  // }


  // getFaultCategory(term: string = null): Observable<Faults[]> {
  //   let items = this.getMockSelection();
  //   if (term) {
  //     items = items.filter(x => x.name.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) > -1);
  //     console.log(items);
  //   }
  //   return of(items).pipe(delay(50));
  // }

  // getFaultSubCategory(term: string = null): Observable<Faults[]> {
  //   let items = this.getMockSelection();
  //   // items.forEach(x => name)
  //   if (term) {
  //     items = items.filter(x => x.name === "Battery");
  //     console.log(items);
  //   }
  //   return of(items).pipe(delay(50));

  // }

  onSerialNumberEvent(event: any) {

    console.log(event.target.value);
    if (event.target.value.length > 10) {

      this.validateContractForEvent(event.target.value);
      console.log("CHECKING FOR CONTRACT");
    } else {
      console.log("NOT CHECKING");
    }

  }

  getValidationServiceDateStatus(startDate: string, endDate: string) {
    const date = new Date();

    const start = new Date(startDate);
    const end = new Date(endDate);
    if (date > start && date < end) {
      console.log('✅ date is between the 2 dates');
      return true;
    } else {
      console.log('⛔️ date is not in the range');
      return false;
    }
  }

  public validateContractForEvent(serialNumber: string) {

    this._contractListService
      .getValidityCheck(serialNumber)
      .pipe()
      .subscribe(
        data => {
          console.log(data.actions[0].returnValue);

          if (!data.actions[0].returnValue.ListOfZEBSerialNumber?.Asset[0]) {

            // this.onDatatablessChanged.next(this.rows);
            console.log("EMPTY NOT FOUND");
          } else {
            if ((data.actions[0].returnValue.ListOfZEBSerialNumber.Asset[0].ListOfServiceDetails.ServiceDetails).length > 0) {
              console.log("IN CONTRACTTTTTTTT....");
              this.contractCheckValidation = { isValid: 1, message: "In Contract" };
            } else {

              //Checking for Warranty
              const inWarranty = this.getValidationServiceDateStatus(data.actions[0].returnValue.ListOfZEBSerialNumber.Asset[0].WarrantyStartDate, data.actions[0].returnValue.ListOfZEBSerialNumber.Asset[0].WarrantyEndDate);
              if (inWarranty) {
                this.contractCheckValidation = { isValid: 1, message: "In Warranty" };
              } else {
                this.contractCheckValidation = { isValid: 2, message: "Billable" };
              }

            }
            this.repairDevice.deviceModel = data.actions[0].returnValue.ListOfZEBSerialNumber.Asset[0].Product;
            console.log("FOUND");
          }


        },
        error => {

          console.log(error)

        }
      );
  }

  submit(form) {
    // this.submitted = true;

    // stop here if form is invalid
    if (form.invalid) {
      console.log("Invalid Form");
      this._toastrService.error(
        'Please check data before submitting.',
        'Invalid Data',
        { positionClass: 'toast-top-center', toastClass: 'toast ngx-toastr', closeButton: true }
      );
      return;
    }

    this.repairDevice.replacement;

    if (this.emailDPdata == null || this.collectionDPdata == null) {
      this._toastrService.error(
        'Email and Collection Date null.',
        'Invalid Data',
        { positionClass: 'toast-top-center', toastClass: 'toast ngx-toastr', closeButton: true }
      );
    } else {
      this.repairDevice.emailDate = this.emailDPdata.year + "-" + this.emailDPdata.month + "-" + this.emailDPdata.day;
      this.repairDevice.collectionDate = this.collectionDPdata.year + "-" + this.collectionDPdata.month + "-" + this.collectionDPdata.day;
      console.log("Email Date :" + this.repairDevice.emailDate);
    }

    // Login
    // this.loading = true;
    this._faultListService
      .addNewFaultCase(this.repairDevice)
      .pipe()
      .subscribe(
        data => {
          console.log(data);


          setTimeout(() => {
            this._toastrService.success(
              'You have added a new case. Please proceed with the RMA.',
              'Case Added Successfully.',
              { positionClass: 'toast-top-center', toastClass: 'toast ngx-toastr', closeButton: true }
            );
          }, 1000);

          this.toggleSidebar('new-user-sidebar');

          this.resetForm();

        },
        error => {
          console.log(error)
          setTimeout(() => {
            this._toastrService.success(
              'You have added a new case. Please proceed with the RMA.',
              'Case Added Successfully.',
              { toastClass: 'toast ngx-toastr', closeButton: true }
            );
          }, 1000);

          this.toggleSidebar('new-user-sidebar');
        }
      );


    // this.toggleSidebar('new-user-sidebar');
  }

  resetForm() {
    this.repairDevice = new RepairDevice;
    this.repairDevice.repairedByUs = true;
    this.repairDevice.assetCorrect = true;
    this.repairDevice.serialCorrect = true;
    this.repairDevice.replacement = false;
  }

  ngOnInit(): void {
    // this.selectcategoryMethod();
    // this.selectSubCategoryMethod();

    // this._rmaFaultSelectionService = new rmaFaultSelectionService();

    this.uniqueCustomerCodes = [];

    this._faultListService
      .getCustomerUniqueCode()
      .pipe()
      .subscribe(
        data => {
          console.log(data);
          this.uniqueCustomerCodes = data;
        },
        error => {

          this.toggleSidebar('new-user-sidebar');
        }
      );


    this.repairDevice.repairedByUs = true;
    this.repairDevice.assetCorrect = true;
    this.repairDevice.serialCorrect = true;
    this.repairDevice.replacement = false;



  }

  getMockSelection() {
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


}



