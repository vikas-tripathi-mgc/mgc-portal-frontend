import { Component, OnInit, OnDestroy, ViewChild, ViewEncapsulation } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';

import { CoreConfigService } from '@core/services/config.service';

import { InvoiceListService } from 'app/main/apps/invoice/invoice-list/invoice-list.service';
import { DeliveryListService } from './delivery-list.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-delivery-list',
  templateUrl: './delivery-list.component.html',
  styleUrls: ['./delivery-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DeliveryListComponent implements OnInit {
  // public
  public data: any;
  public selectedOption = 10;
  public ColumnMode = ColumnMode;
  public selectStatus: any = [
    { name: 'All', value: '' },
    { name: 'Downloaded', value: 'Downloaded' },
    { name: 'Draft', value: 'Draft' },
    { name: 'Paid', value: 'Paid' },
    { name: 'Partial Payment', value: 'Partial Payment' },
    { name: 'Past Due', value: 'Past Due' },
    { name: 'Sent', value: 'Sent' }
  ];

  public selectedStatus = [];
  public searchValue = '';

  // decorator
  @ViewChild(DatatableComponent) table: DatatableComponent;

  // private
  private tempData = [];
  private _unsubscribeAll: Subject<any>;
  public rows;
  public tempFilterData;
  public previousStatusFilter = '';

  /**
   * Constructor
   *
   * @param {CoreConfigService} _coreConfigService
   * @param {CalendarService} _calendarService
   * @param {InvoiceListService} _invoiceListService
   */
  constructor(private _deliveryListService: DeliveryListService, private _coreConfigService: CoreConfigService, private toastr: ToastrService) {
    this._unsubscribeAll = new Subject();
  }

  // Public Methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * filterUpdate
   *
   * @param event
   */
  filterUpdate(event) {
    // Reset ng-select on search
    this.selectedStatus = this.selectStatus[0];

    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.tempData.filter(function (d) {
      return d.client.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  /**
   * Filter By Roles
   *
   * @param event
   */
  filterByStatus(event) {
    const filter = event ? event.value : '';
    this.previousStatusFilter = filter;
    this.tempFilterData = this.filterRows(filter);
    this.rows = this.tempFilterData;
  }

  /**
   * Filter Rows
   *
   * @param statusFilter
   */
  filterRows(statusFilter): any[] {
    // Reset search on select change
    this.searchValue = '';

    statusFilter = statusFilter.toLowerCase();

    return this.tempData.filter(row => {
      const isPartialNameMatch = row.invoiceStatus.toLowerCase().indexOf(statusFilter) !== -1 || !statusFilter;
      return isPartialNameMatch;
    });
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit(): void {

    this.getAllDeliveryList();
    // Subscribe config change
    // this._coreConfigService.config.pipe(takeUntil(this._unsubscribeAll)).subscribe(config => {
    //   // If we have zoomIn route Transition then load datatable after 450ms(Transition will finish in 400ms)
    //   if (config.layout.animation === 'zoomIn') {
    //     setTimeout(() => {
    //       this._invoiceListService.onInvoiceListChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
    //         this.data = response;
    //         this.rows = this.data;
    //         this.tempData = this.rows;
    //         this.tempFilterData = this.rows;
    //       });
    //     }, 450);
    //   } else {
    //     this._invoiceListService.onInvoiceListChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
    //       this.data = response;
    //       this.rows = this.data;
    //       this.tempData = this.rows;
    //       this.tempFilterData = this.rows;
    //     });
    //   }
    // });




  }

  getAllDeliveryList() {
    this._deliveryListService
      .getAllDeliveryNoteList()
      .pipe()
      .subscribe(
        deliveryNoteData => {
          console.log(deliveryNoteData);
          this.data = deliveryNoteData;
          this.rows = this.data;
          this.tempData = this.rows;
          this.tempFilterData = this.rows;
          // this.readyToDeliver = data;
          // this.customerListData = data;
        },
        error => {

          // this.toggleSidebar('new-user-sidebar');
        }
      );
  }

  updateMarkAsDelivered(id: any) {

    this._deliveryListService
      .updateDeliveryNoteStatus(id)
      .pipe()
      .subscribe(
        data => {
          console.log(data);
          this.getAllDeliveryList();
          setTimeout(() => {
            this.toastr.success(
              'If don\'t see updated information. Please contact admin',
              'Marked as Delivered',
              { positionClass: 'toast-top-center', toastClass: 'toast ngx-toastr', closeButton: true }
            );
          }, 1000);

        },
        error => {
          console.log(error)
          setTimeout(() => {
            this.toastr.error(
              '' + error,
              'Failed to update',
              { positionClass: 'toast-top-center', toastClass: 'toast ngx-toastr', closeButton: true }
            );
          }, 1000);

        }
      );



  }

  deleteDeliveryNote(id: any) {

    this._deliveryListService
      .deleteDeliveryNote(id)
      .pipe()
      .subscribe(
        data => {
          console.log(data);
          this.getAllDeliveryList();
          setTimeout(() => {
            this.toastr.success(
              'If don\'t see updated information. Please contact admin',
              'Deleted Successfully',
              { positionClass: 'toast-top-center', toastClass: 'toast ngx-toastr', closeButton: true }
            );
          }, 1000);

        },
        error => {
          console.log(error)
          setTimeout(() => {
            this.toastr.error(
              '' + error,
              'Failed to delete',
              { positionClass: 'toast-top-center', toastClass: 'toast ngx-toastr', closeButton: true }
            );
          }, 1000);

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
