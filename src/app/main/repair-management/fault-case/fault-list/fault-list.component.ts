import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';

import { CoreConfigService } from '@core/services/config.service';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';

import { UserListService } from 'app/main/apps/user/user-list/user-list.service';
import { FaultListService, RepairCaseStatus, RepairDevice, ReplacementCaseStatusByUs, ReplacementCaseStatusByZebra } from './fault-list.service';
import { FileUploader } from 'ng2-file-upload';
import { NgbDateStruct, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-fault-list',
  templateUrl: './fault-list.component.html',
  styleUrls: ['./fault-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FaultListComponent implements OnInit {
  // Public
  private _unsubscribeAll: Subject<any>;
  private tempData = [];
  public sidebarToggleRef = false;

  // public
  public contentHeader: object;
  public rows: any;
  public selected = [];
  public kitchenSinkRows: any;
  public basicSelectedOption: number = 25;
  public ColumnMode = ColumnMode;
  public expanded = {};
  public editingName = {};
  public editingStatus = {};
  public editingAge = {};
  public editingSalary = {};
  public chkBoxSelected = [];
  public SelectionType = SelectionType;
  public exportCSVData;
  public repairDevice: RepairDevice = new RepairDevice;
  public repairCaseStatus: RepairCaseStatus = new RepairCaseStatus;
  public replacementByUsCaseStatus: ReplacementCaseStatusByUs = new ReplacementCaseStatusByUs;
  public replacementByZebraCaseStatus: ReplacementCaseStatusByZebra = new ReplacementCaseStatusByZebra;
  public emailDPdata: NgbDateStruct;
  public collectionDPdata: NgbDateStruct;

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
  public loading = false;

  // public updaterModalRMANumber = {
  //   rmaNumber: ''
  // };
  public rmaDetailUpdaterModel = { rmaNumber: '', emailAddress: '' };

  public replacementDetailUpdaterModel = { id: '', emailAddress: '' };

  // public faultListItem = {
  //   id: 0,
  //   emailDate: '',
  //   collectionDate: '',
  //   deviceModel: '',
  //   customer: '',
  //   serirepairDevice
  //   assetCode: '',
  //   faultDescription: '',
  //   rmaStatus: '',
  //   correctSerialNo: '',
  //   correctAssetCode: '',
  //   rmaFaultCategory: '',
  //   rmaFaultSubCategory: '',
  //   rmaFaultDescription: '',
  //   repairStatus: '',
  //   replacementSerialNo: '',
  //   createdDate: '',
  //   deliveryDate: '',
  //   rmaNumber: '',
  //   lastUpdated: '',
  //   updatedBy: '',
  //   createdBy: '',
  //   isInContract: '',
  //   customerNote: '',
  //   accessoryNote: '',
  //   extraNotes: '',
  //   deliveryNoteId: '',
  //   replacement: false,
  //   assetCorrect: true,
  //   serialCorrect: true,
  //   repairedByUs: true,
  //   replacementByUs: false,
  // };

  // public contentHeader: object;
  public isReload = false;

  @ViewChild(DatatableComponent) table: DatatableComponent;
  @ViewChild('tableRowDetails') tableRowDetails: any;

  public convertedDate: NgbDateStruct;


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

  onFileInput(event) {
    console.log('File Upload : ', event);

    const file: File = event.target.files[0];

    if (file) {

      // this.fileName = file.name;

      const formData = new FormData();

      formData.append("file", file);



      this._datatablesService
        .importCSVFile(formData)
        .pipe()
        .subscribe(
          data => {
            console.log(data);

          },
          error => {

            console.log(error)

          }
        );
    }
  }

  // modal Open Form
  modalOpenForm(modalForm) {
    this.rmaDetailUpdaterModel.rmaNumber = '';
    this.modalService.open(modalForm);
  }

  updateorAddRMANumber() {
    console.log("Modal RMA Number : " + this.rmaDetailUpdaterModel.rmaNumber);
    if (this.rmaDetailUpdaterModel.rmaNumber != null || this.rmaDetailUpdaterModel.rmaNumber.length > 0) {

      if (this.rmaDetailUpdaterModel.emailAddress !== null || this.rmaDetailUpdaterModel.emailAddress.length > 2) {
        console.log("Modal Email address : " + this.rmaDetailUpdaterModel.emailAddress);
        this.updateRMADetails();


      } else {

      }
    }
  }

  public updateRMADetails() {
    this.loading = true;
    this._datatablesService
      .getRMALookup(this.rmaDetailUpdaterModel.rmaNumber, this.rmaDetailUpdaterModel.emailAddress)
      .pipe()
      .subscribe(
        data => {
          console.log(data.actions[0].returnValue);

          this.loading = false;
          this.modalService.dismissAll();

        },
        error => {
          this.loading = false;
          console.log(error)
        }
      );
  }

  public getUpdatedRMAStatus(rmaNumber: string, emailAddress: string) {

    this._datatablesService
      .getRMALookup(rmaNumber, emailAddress)
      .pipe()
      .subscribe(
        data => {
          console.log(data);




        },
        error => {

          console.log(error)
        }
      );
  }

  public getUpdatedContractStatus(id: string) {

    this._datatablesService
      .updateContractStatus(id)
      .pipe()
      .subscribe(
        data => {
          console.log(data);




        },
        error => {

          console.log(error)
        }
      );
  }



  public updateReplacementSerialByUs(repairStatus: any) {

    this.replacementByUsCaseStatus.repairStatus = repairStatus;

    this.loading = true;
    this._datatablesService
      .updateFaultCaseReplacementByUsStatus(this.replacementByUsCaseStatus)
      .pipe()
      .subscribe(
        data => {
          console.log(data);

          this.loading = false;
          this.modalService.dismissAll();

        },
        error => {
          this.loading = false;
          console.log(error)
        }
      );
  }

  public updateReplacementSerialByZebra(repairStatus: any) {

    this.replacementByZebraCaseStatus.repairStatus = repairStatus;

    this.loading = true;
    this._datatablesService
      .updateFaultCaseReplacementByZebraStatus(this.replacementByZebraCaseStatus)
      .pipe()
      .subscribe(
        data => {
          console.log(data);

          this.loading = false;
          this.modalService.dismissAll();

        },
        error => {
          this.loading = false;
          console.log(error)
        }
      );
  }

  modalOpenReplacementByUsForm(modalForm, id: any) {
    this.replacementByUsCaseStatus.id = id;
    this.modalService.open(modalForm);
  }

  modalOpenReplacementByZebraForm(modalForm, id: any) {
    this.replacementByZebraCaseStatus.id = id;
    this.modalService.open(modalForm);
  }


  updateFaultCaseStatus(id: any, status: string) {

    this.repairCaseStatus.id = id;
    this.repairCaseStatus.repairStatus = status;

    this._datatablesService
      .updateFaultCaseStatus(this.repairCaseStatus)
      .pipe()
      .subscribe(
        data => {
          console.log(data);

          // this.toggleSidebar('edit-fault-sidebar');

          // location.reload();
          // this._unsubscribeAll = new Subject();


        },
        error => {
          console.log(error)


          // this.toggleSidebar('edit-fault-sidebar');
        }
      );
  }

  emittedEvents($event) {
    console.log('Action : ', $event);
  }

  toggleSidebar(name): void {
    this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
  }


  toggleEditSidebar(name, row: any): void {

    // this.repairDevice = row;

    console.log(row)
    this.repairDevice.id = row.id;
    this.repairDevice.emailDate = row.emailDate;
    this.repairDevice.collectionDate = row.collectionDate;
    this.repairDevice.deviceModel = row.deviceModel;
    this.repairDevice.customer = row.customer;
    this.repairDevice.serialNumber = row.serialNumber;
    this.repairDevice.assetCode = row.assetCode;
    this.repairDevice.faultDescription = row.faultDescription;
    this.repairDevice.rmaStatus = row.rmaStatus;
    this.repairDevice.correctSerialNo = row.correctSerialNo;
    this.repairDevice.correctAssetCode = row.correctAssetCode;
    this.repairDevice.rmaFaultCategory = row.rmaFaultCategory;
    this.repairDevice.rmaFaultSubCategory = row.rmaFaultSubCategory;
    this.repairDevice.rmaFaultDescription = row.rmaFaultDescription;
    this.repairDevice.repairStatus = row.repairStatus;
    this.repairDevice.replacementSerialNo = row.replacementSerialNo;
    this.repairDevice.createdDate = row.createdDate;
    this.repairDevice.deliveryDate = row.deliveryDate;
    this.repairDevice.rmaNumber = row.rmaNumber;
    this.repairDevice.lastUpdated = row.lastUpdated;
    this.repairDevice.updatedBy = row.updatedBy;
    this.repairDevice.createdBy = row.createdBy;
    this.repairDevice.isInContract = row.isInContract;
    this.repairDevice.customerNote = row.customerNote;
    this.repairDevice.accessoryNote = row.accessoryNote;
    this.repairDevice.extraNotes = row.extraNotes;
    this.repairDevice.deliveryNoteId = row.deliveryNoteId;
    this.repairDevice.replacement = row.replacement;
    this.repairDevice.assetCorrect = row.assetCorrect;
    this.repairDevice.serialCorrect = row.serialCorrect;
    this.repairDevice.repairedByUs = row.repairedByUs;
    this.repairDevice.replacementByUs = row.replacementByUs;

    this.emailDPdata = this.toDateStructure(row.emailDate);
    this.collectionDPdata = this.toDateStructure(row.collectionDate);
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
    const val = event.target.value;

    console.log("|-" + val + "-|");

    if (val == "") {
      console.log("Val empty");

      this.flag = true;
      this.onTimeOut();
    } else {
      this.flag = false;

    }

    // filter our data
    const temp = this.tempData.filter(function (d) {
      if (d.rmaNumber != null && d.assetCode != null && d.repairStatus != null && d.deviceModel != null) {
        return (d.serialNumber.toLowerCase().indexOf(val) !== -1 || !val) || (d.deviceModel.indexOf(val) !== -1 || !val) || (d.assetCode.indexOf(val) !== -1 || !val) || (d.rmaNumber.indexOf(val) !== -1 || !val) || (d.repairStatus.indexOf(val) !== -1 || !val);
      } else if (d.assetCode != null && d.repairStatus != null && d.deviceModel != null) {
        return (d.serialNumber.toLowerCase().indexOf(val) !== -1 || !val) || (d.deviceModel.indexOf(val) !== -1 || !val) || (d.assetCode.indexOf(val) !== -1 || !val) || (d.repairStatus.indexOf(val) !== -1 || !val);
      } else if (d.assetCode != null && d.deviceModel != null) {
        return (d.serialNumber.toLowerCase().indexOf(val) !== -1 || !val) || (d.deviceModel.indexOf(val) !== -1 || !val) || (d.assetCode.indexOf(val) !== -1 || !val);
      }

    }
    );

    // const temp2 = this.tempData.filter(function (d) {
    //   return d.repairStatus.indexOf(val) !== -1 || !val;
    // });

    // const temp3 = this.tempData.filter(function (d) {
    //   return d.rmaNumber.includes(val) !== -1 || !val;
    // });

    // const temp4 = this.tempData.filter(function (d) {
    //   return d.assetCode.toLowerCase().indexOf(val) !== -1 || !val;
    // });

    // update the rows
    this.kitchenSinkRows = temp;
    // this.kitchenSinkRows.append = temp2;
    // this.kitchenSinkRows.append = temp3;
    // this.kitchenSinkRows.append = temp4;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  toDateStructure(dateAsString: string): NgbDateStruct {

    // let convertedDate: NgbDateStruct
    console.log(dateAsString);

    if (!dateAsString) {
      this.convertedDate = null;
      console.log("null");
    }
    else {
      const parts = dateAsString.split('-');
      let newValue = {
        year: +parts[0],
        month: +parts[1],
        day: +parts[2],
      };

      console.log("new Value : " + newValue.year);

      this.convertedDate = { year: newValue.year, month: newValue.month, day: newValue.day };
      // { year: newValue.year, month: newValue.month, day: newValue.day };
      // if (this.emailDPdata != newValue) {
      // this.emailDPdata.year = newValue.year;
      // this.emailDPdata.month = newValue.month;
      // this.emailDPdata.day = newValue.day;
      console.log("email Value : " + this.convertedDate.year);
      // }
    }
    return this.convertedDate;
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

    if (this.selected.length > 0) {
      this.flag = false;
    } else {
      this.flag = true;
      this.onTimeOut();
    }
  }

  exportForCSV() {

    let repairDevices: RepairDevice[];
    repairDevices = this.selected;

    console.log("After Click on Export" + repairDevices[0].id);


    this._datatablesService
      .getCSVFileForRMA(repairDevices)
      .pipe()
      .subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
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
  constructor(private _datatablesService: FaultListService, private _coreSidebarService: CoreSidebarService, private modalService: NgbModal) {
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
    this.flag = true;
    this.onTimeOut();
  }

  private flag: boolean;


  ngOnDestroy() {
    this.flag = false;
  }

  onTimeOut() {

    this._datatablesService.getDataTableRows();

    setTimeout(() => {
      if (this.flag) {
        this.onTimeOut();
      }
    }, 10000);
  }
}

