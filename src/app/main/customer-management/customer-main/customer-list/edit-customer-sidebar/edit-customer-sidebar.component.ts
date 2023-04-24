import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core'
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { NgbDateStruct, NgbCalendar, NgbDate, NgbDateParserFormatter, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';

import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { CoreConfigService } from '@core/services/config.service';
import { ToastrService } from 'ngx-toastr';
import { ContractListService } from 'app/main/repair-management/contract-check/contract-list/contract-list.service';
import { rmaFaultSelectionService } from 'app/main/repair-management/repair-fault-selection';

import { delay, tap } from 'rxjs/operators';
import { Customer, CustomerListService, RepairDevice } from '../customer-list.service';

@Component({
  selector: 'app-edit-customer-sidebar',
  templateUrl: './edit-customer-sidebar.component.html',
  styleUrls: ['./edit-customer-sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditCustomerSidebarComponent implements OnInit {

  public fullname;
  public username;
  public email;
  public selectFaultCategory: any;
  public selectFaultCategoryLoading = false;
  public selectFaultSubCategory: any;
  public selectFaultSubCategoryLoading = false;

  @Input() item = {
    id: 0,
    customerName: '',
    customerEmail: '',
    companyName: '',
    companyCode: '',
    deliveryAddressLine1: '',
    deliveryAddressLine2: '',
    deliveryAddressLine3: ''
  };

  public contractCheckValidation = { isValid: 0, message: "" };

  public form: UntypedFormGroup;
  public emailDPdata: NgbDateStruct;
  public collectionDPdata: NgbDateStruct;
  public rmaFaultSelectionService = new rmaFaultSelectionService;
  public repairDevice: RepairDevice = new RepairDevice;
  public customer: Customer = new Customer;

  filterSubById(id) {
    console.log("IDDDDDDDDDD " + id)
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
    private _customerListService: CustomerListService,
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
        { positionClass: 'toast-top-right', toastClass: 'toast ngx-toastr', closeButton: true }
      );
      return;
    }


    this.customer.id = this.item.id
    this.customer.customerName = this.item.customerName
    this.customer.customerEmail = this.item.customerEmail
    this.customer.companyName = this.item.companyName
    this.customer.companyCode = this.item.companyCode
    this.customer.deliveryAddressLine1 = this.item.deliveryAddressLine1
    this.customer.deliveryAddressLine2 = this.item.deliveryAddressLine2
    this.customer.deliveryAddressLine3 = this.item.deliveryAddressLine3


    // Login
    // this.loading = true;
    this._customerListService
      .editCustomer(this.customer)
      .pipe()
      .subscribe(
        data => {
          console.log(data);


          setTimeout(() => {
            this._toastrService.success(
              'Details updated for ' + this.customer.customerName,
              'Successfully Updated',
              { positionClass: 'toast-top-center', toastClass: 'toast ngx-toastr', closeButton: true }
            );
          }, 1000);

          this.toggleSidebar('edit-user-sidebar');



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

          this.toggleSidebar('edit-user-sidebar');
        }
      );


    // this.toggleSidebar('new-user-sidebar');
  }

  resetForm() {
    this.customer = new Customer;
  }

  ngOnInit(): void {

    console.log(this.item.customerName);
    // this.customer.id = editCustomerItem.id;
    // this.customer.customerName = row.customerName;
    // this.customer.customerEmail = row.customerEmail;
    // this.customer.companyName = row.companyName;
    // this.customer.companyCode = row.companyCode;
    // this.customer.deliveryAddressLine1 = row.deliveryAddressLine1;
    // this.customer.deliveryAddressLine2 = row.deliveryAddressLine2;
    // this.customer.deliveryAddressLine3 = row.deliveryAddressLine3;

    // this.selectcategoryMethod();
    // this.selectSubCategoryMethod();

    // this._rmaFaultSelectionService = new rmaFaultSelectionService();


  }




}


