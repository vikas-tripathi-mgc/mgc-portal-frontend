
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';

import { repeaterAnimation } from 'app/main/forms/form-repeater/form-repeater.animation';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';
import { ContractListService, RmaLookupRequest } from './contract-list.service';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.scss'],
  animations: [],
  encapsulation: ViewEncapsulation.None
})
export class ContractListComponent implements OnInit {


  public myStartDate = new Date();




  private _unsubscribeAll: Subject<any>;
  private tempData = [];
  public sidebarToggleRef = false;

  // public
  public contentHeader: object;
  public rows: any;
  public selected = [];
  public kitchenSinkRows: any;
  public loading = false;
  public allRMAListRows: any;
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

  // public contentHeader: object;
  public isReload = false;

  // public RmaLookupRequest;

  @ViewChild(DatatableComponent) table: DatatableComponent;
  @ViewChild('tableRowDetails') tableRowDetails: any;


  public contractDetail = { serialNumber: '' };
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

  emittedEvents($event) {
    console.log('Action : ', $event);
  }

  toggleSidebar(name): void {
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

    this.allRMAListRows = temp;
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
  constructor(private _datatablesService: ContractListService, private _coreSidebarService: CoreSidebarService) {

    this._unsubscribeAll = new Subject();
    // this._coreTranslationService.translate(english, french, german, portuguese);
  }


  public validateContract() {
    this.loading = true;
    this._datatablesService
      .getValidityCheck(this.contractDetail.serialNumber)
      .pipe()
      .subscribe(
        data => {
          console.log(data.actions[0].returnValue);

          this.loading = false;

          this.getValidationServiceDateStatus("23/12/2022", "02/05/2023");
          // setTimeout(() => {
          //   this._toastrService.success(
          //     'You have added a new case. Please proceed with the RMA.',
          //     'Case Added Successfully.',
          //     { positionClass: 'toast-top-center', toastClass: 'toast ngx-toastr', closeButton: true }
          //   );
          // }, 1000);

          // this.toggleSidebar('new-user-sidebar');

          // this.resetForm();

        },
        error => {
          this.loading = false;
          console.log(error)
          // setTimeout(() => {
          //   this._toastrService.success(
          //     'You have added a new case. Please proceed with the RMA.',
          //     'Case Added Successfully.',
          //     { toastClass: 'toast ngx-toastr', closeButton: true }
          //   );
          // }, 1000);

          // this.toggleSidebar('new-user-sidebar');
        }
      );
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
      // this.allRMAListRows = this.rows;
      this.exportCSVData = this.rows;
    });
    // this.kitchenSinkRows = this.rows;
    this.allRMAListRows = [];

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

