import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';

import { InvoicePreviewService } from 'app/main/apps/invoice/invoice-preview/invoice-preview.service';
import { DeliveryPreviewService } from './delivery-preview.service';
import { readyToDeliver } from '../models/readyToDeliver';

@Component({
  selector: 'app-delivery-preview',
  templateUrl: './delivery-preview.component.html',
  styleUrls: ['./delivery-preview.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DeliveryPreviewComponent implements OnInit {

  // public
  public apiData;
  public urlLastValue;
  public url = this.router.url;
  public sidebarToggleRef = false;
  public paymentSidebarToggle = false;
  public paymentDetails = {
    totalDue: '$12,110.55',
    bankName: 'American Bank',
    country: 'United States',
    iban: 'ETD95476213874685',
    swiftCode: 'BR91905'
  };

  public generatedDeliveryNote: readyToDeliver;

  // private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {Router} router
   * @param {InvoicePreviewService} _invoicePreviewService
   * @param {CoreSidebarService} _coreSidebarService
   */
  constructor(
    private router: Router,
    private _deliveryPreviewService: DeliveryPreviewService,
    private _coreSidebarService: CoreSidebarService
  ) {
    this._unsubscribeAll = new Subject();
    this.urlLastValue = this.url.substr(this.url.lastIndexOf('/') + 1);
  }

  // Public Methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Toggle the sidebar
   *
   * @param name
   */
  toggleSidebar(name): void {
    this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
  }


  getReadyForDeliverItems() {

    this._deliveryPreviewService
      .getDeliveryNoteData(2)
      .pipe()
      .subscribe(
        data => {
          console.log(data);

          this.generatedDeliveryNote = data;
          this.generatedDeliveryNote.assetCodeHidden = data.isAssetCodeHidden;

          console.log(this.generatedDeliveryNote.customerDetails.customerName + "---" + data.isAssetCodeHidden);

          // this.customerListData = data;
        },
        error => {

          // this.toggleSidebar('new-user-sidebar');
        }
      );

  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit(): void {
    this._deliveryPreviewService.onDeliveryPreviewChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
      // this.apiData = response;
      this.generatedDeliveryNote = response;
      this.generatedDeliveryNote.assetCodeHidden = response.isAssetCodeHidden;
    });
    // this.getReadyForDeliverItems();
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

