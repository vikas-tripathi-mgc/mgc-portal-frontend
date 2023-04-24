import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { DeliveryPreviewService } from '../delivery-preview/delivery-preview.service';
import { DeliveryNewService } from './delivery-new.service';
import { readyToDeliver } from '../models/readyToDeliver';
import { repeaterAnimation } from 'app/main/forms/form-repeater/form-repeater.animation';
import { ToastrService } from 'ngx-toastr';
import { formatDate } from '@angular/common';

// import { InvoicePreviewService } from 'app/main/apps/invoice/invoice-preview/invoice-preview.service';

@Component({
  selector: 'app-delivery-new',
  templateUrl: './delivery-new.component.html',
  styleUrls: ['./delivery-new.component.scss'],
  animations: [repeaterAnimation],
  encapsulation: ViewEncapsulation.None
})
export class DeliveryNewComponent implements OnInit, OnDestroy {

  public apiData;
  public sidebarToggleRef = false;
  public invoiceSelect;
  public invoiceSelected;
  public readyToDeliver: readyToDeliver;
  public isPreviewEnabled = false;
  public isAssetHidden = false;

  public paymentDetails = {
    totalDue: '$12,110.55',
    bankName: 'American Bank',
    country: 'United States',
    iban: 'ETD95476213874685',
    swiftCode: 'BR91905'
  };


  public customerListData = [{
    companyCode: '', companyName: '', customerEmail: '', customerName: '', deliveryAddressLine1: '', deliveryAddressLine2: '', deliveryAddressLine3: '', id: 0
  }];

  public selectedCustomer = {
    companyCode: '', companyName: '', customerEmail: '', customerName: '', deliveryAddressLine1: '', deliveryAddressLine2: '', deliveryAddressLine3: '', id: 0
  };

  public items = [{ itemId: '', itemName: '', itemQuantity: '', itemCost: '' }];

  public item = {
    itemName: '',
    itemQuantity: '',
    itemCost: ''
  };

  // ng2-flatpickr options
  public dateOptions = {
    altInput: true,
    mode: 'single',
    altInputClass: 'form-control flat-picker flatpickr-input invoice-edit-input',
    defaultDate: new Date(),
    altFormat: 'Y-n-j',
    dateFormat: 'Y-m-d',
    onChange: (selectedDates: any) => { let formattedDt = formatDate(selectedDates[0], 'yyyy-MM-dd', 'en_US'); console.log(selectedDates[0]); console.log(formattedDt); this.readyToDeliver.deliveryDate = formattedDt }
  };
  // public dueDateOptions = {
  //   altInput: true,
  //   mode: 'single',
  //   altInputClass: 'form-control flat-picker flatpickr-input invoice-edit-input',
  //   defaultDate: ['2020-05-17'],
  //   altFormat: 'Y-n-j'
  // };




  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {InvoiceAddService} _invoiceAddService
   * @param {CoreSidebarService} _coreSidebarService
   */
  constructor(private _deliveryNewService: DeliveryNewService, private _coreSidebarService: CoreSidebarService, private toastr: ToastrService) {
    this._unsubscribeAll = new Subject();
  }

  // Public Methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Add Item
   */
  addItem() {
    this.items.push({
      itemId: '',
      itemName: '',
      itemQuantity: '',
      itemCost: ''
    });
  }

  /**
   * DeleteItem
   *
   * @param id
   */
  deleteItem(id) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items.indexOf(this.items[i]) === id) {
        this.items.splice(i, 1);
        break;
      }
    }
  }

  getReadyForDeliverItems() {

    this._deliveryNewService
      .getAllReadyForDeliveryItemsForCustomer(this.selectedCustomer.id)
      .pipe()
      .subscribe(
        data => {
          console.log(data);

          this.readyToDeliver = data;
          // this.customerListData = data;
        },
        error => {

          // this.toggleSidebar('new-user-sidebar');
        }
      );

  }

  saveDeliveryNote() {

    this.readyToDeliver.assetCodeHidden = this.isAssetHidden;
    this._deliveryNewService
      .saveDeliveryNoteFromCustomer(this.readyToDeliver)
      .pipe()
      .subscribe(
        data => {
          console.log(data);

          setTimeout(() => {
            this.toastr.success(
              'Delivery Note saved successfully!',
              'Saved',
              { toastClass: 'toast ngx-toastr', closeButton: true }
            );
          }, 1000);

          this.isPreviewEnabled = true;
          // this.readyToDeliver = data;
          // this.customerListData = data;
        },
        error => {
          setTimeout(() => {
            this.toastr.error(
              '' + error,
              'Failed',
              { toastClass: 'toast ngx-toastr', closeButton: true }
            );
          }, 1000);

          this.isPreviewEnabled = false;
          // this.toggleSidebar('new-user-sidebar');
        }
      );

  }

  /**
   * Toggle Sidebar
   *
   * @param name
   */
  toggleSidebar(name) {
    this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit(): void {
    // this._deliveryNewService.onInvoicAddChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
    //   let responseData = response;
    //   this.apiData = responseData.slice(5, 10);
    // });
    this.invoiceSelect = this.apiData;
    this.invoiceSelected = this.invoiceSelect;

    this._deliveryNewService
      .getCustomersList()
      .pipe()
      .subscribe(
        data => {
          console.log(data);
          this.customerListData = data;
        },
        error => {

          // this.toggleSidebar('new-user-sidebar');
        }
      );






  }



  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
