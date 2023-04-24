
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';

import { CoreConfigService } from '@core/services/config.service';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';

import { UserListService } from 'app/main/apps/user/user-list/user-list.service';
import { Customer, CustomerListService } from './customer-list.service';
// import { FaultListService } from './fault-list.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class CustomerListComponent implements OnInit {
  // Public
  private _unsubscribeAll: Subject<any>;
  private tempData = [];
  public sidebarToggleRef = false;
  public sidebarEditToggleRef = false;
  public editCustomerItem = {
    id: 0,
    customerName: '',
    customerEmail: '',
    companyName: '',
    companyCode: '',
    deliveryAddressLine1: '',
    deliveryAddressLine2: '',
    deliveryAddressLine3: ''
  };

  // public
  public contentHeader: object;
  public rows: any;
  public selected = [];
  public kitchenSinkRows: any;
  public basicSelectedOption: number = 10;
  public ColumnMode = ColumnMode;
  public expanded = {};
  public editingName = {};
  public editingStatus = {};
  public editingAge = {};
  public editingSalary = {};
  public chkBoxSelected = [];
  public SelectionType = SelectionType;
  public exportCSVData;
  public customer: Customer = new Customer;


  // public contentHeader: object;
  public isReload = false;

  @ViewChild(DatatableComponent) table: DatatableComponent;
  @ViewChild('tableRowDetails') tableRowDetails: any;


  // Public Methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Inline editing Name
   *
   * @param event
   * @param cell
   * @param rowIndex
   */
  inlineEditingUpdateName(event, cell, rowIndex) {
    this.editingName[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
  }


  emittedEvents($event) {
    console.log('Action : ', $event);
  }

  toggleSidebar(name): void {
    this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
  }

  toggleEditSidebar(name, row: any): void {
    console.log(name);


    this.editCustomerItem.id = row.id;
    this.editCustomerItem.customerName = row.customerName;
    this.editCustomerItem.customerEmail = row.customerEmail;
    this.editCustomerItem.companyName = row.companyName;
    this.editCustomerItem.companyCode = row.companyCode;
    this.editCustomerItem.deliveryAddressLine1 = row.deliveryAddressLine1;
    this.editCustomerItem.deliveryAddressLine2 = row.deliveryAddressLine2;
    this.editCustomerItem.deliveryAddressLine3 = row.deliveryAddressLine3;

    this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
  }

  /**
   * Reload
   *
   * @param $event
   */
  reload($event) {
    // This is fake API call example for reload
    if ($event === 'reload') {
      console.log($event, ': Start');
      this.isReload = true;
      setTimeout(() => {
        this.isReload = false;
        console.log($event, ': End');
      }, 5000);
    }
  }

  /**
   * Inline editing Age
   *
   * @param event
   * @param cell
   * @param rowIndex
   */
  inlineEditingUpdateAge(event, cell, rowIndex) {
    this.editingAge[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
  }

  /**
   * Inline editing Salary
   *
   * @param event
   * @param cell
   * @param rowIndex
   */
  inlineEditingUpdateSalary(event, cell, rowIndex) {
    this.editingSalary[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
  }

  /**
   * Inline editing Status
   *
   * @param event
   * @param cell
   * @param rowIndex
   */
  inlineEditingUpdateStatus(event, cell, rowIndex) {
    this.editingStatus[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
  }

  /**
   * Search (filter)
   *
   * @param event
   */
  filterUpdate(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.tempData.filter(function (d) {
      return d.serialNumber.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.kitchenSinkRows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  /**
   * Row Details Toggle
   *
   * @param row
   */
  rowDetailsToggleExpand(row) {
    this.tableRowDetails.rowDetail.toggleExpandRow(row);
  }

  /**
   * For ref only, log selected values
   *
   * @param selected
   */
  onSelect({ selected }) {
    console.log('Select Event', selected, this.selected);

    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  /**
   * For ref only, log activate events
   *
   * @param selected
   */
  onActivate(event) {
    console.log('Activate Event', event);
  }

  /**
   * Custom Chkbox On Select
   *
   * @param { selected }
   */
  customChkboxOnSelect({ selected }) {
    this.chkBoxSelected.splice(0, this.chkBoxSelected.length);
    this.chkBoxSelected.push(...selected);
  }

  /**
   * Constructor
   *
   * @param {DatatablesService} _datatablesService
   * @param {CoreTranslationService} _coreTranslationService
   */
  constructor(private _datatablesService: CustomerListService, private _coreSidebarService: CoreSidebarService) {
    this._unsubscribeAll = new Subject();
    // this._coreTranslationService.translate(english, french, german, portuguese);
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit() {
    this._datatablesService.onDatatablessChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
      this.rows = response;
      this.tempData = this.rows;
      this.kitchenSinkRows = this.rows;
      this.exportCSVData = this.rows;
    });

    // content header
    // this.contentHeader = {
    //   headerTitle: 'Datatables',
    //   actionButton: true,
    //   breadcrumb: {
    //     type: '',
    //     links: [
    //       {
    //         name: 'Home',
    //         isLink: true,
    //         link: '/'
    //       },
    //       {
    //         name: 'Forms & Tables',
    //         isLink: true,
    //         link: '/'
    //       },
    //       {
    //         name: 'Datatables',
    //         isLink: false
    //       }
    //     ]
    //   }
    // };
  }
}

