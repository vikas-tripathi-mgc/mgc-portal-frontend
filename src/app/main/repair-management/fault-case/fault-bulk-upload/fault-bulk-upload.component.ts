import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';

import { cloneDeep } from 'lodash';
import { repeaterAnimation } from 'app/main/forms/form-repeater/form-repeater.animation';
import { GlobalConfig, ToastrService, Toast, ToastPackage } from 'ngx-toastr';
import { rmaFaultSelectionService } from '../../repair-fault-selection';
import { CustomToastrComponent } from 'app/main/extensions/toastr/custom-toastr/custom-toastr.component';
import { RepairDevice } from '../fault-list/fault-list.service';
import { FaultBulkUploadService } from './fault-bulk-upload.service';

@Component({
  selector: 'app-fault-bulk-upload',
  templateUrl: './fault-bulk-upload.component.html',
  styleUrls: ['./fault-bulk-upload.component.scss'],
  animations: [repeaterAnimation],
  encapsulation: ViewEncapsulation.None
})
export class FaultBulkUploadComponent implements OnInit {
  public contentHeader: object;
  public items = [{ itemId: '', serialNumber: '', assetCode: '', customer: '', faultCategory: '', faultSubCategory: '', faultDescription: '' }];

  public item = {
    serialNumber: '',
    assetCode: '', customer: '', faultCategory: '', faultSubCategory: '', faultDescription: ''
  };

  public serialNos = [];
  public assetNos = [];

  public bulkValues = { itemId: '', serialNumber: '', assetCode: '', customer: '', faultCategory: '', faultSubCategory: '', faultDescription: '' };

  public bulkTempValues = { serialNumbers: '', assetCodes: '', customer: '' };
  public rmaFaultSelectionService = new rmaFaultSelectionService;
  private toastRef: any;
  private options: GlobalConfig;
  public repairDevice: RepairDevice = new RepairDevice;
  public uniqueCustomerCodes = [];
  // snippet code variable
  // public _snippetCodeInvoiceRepeater = snippet.snippetCodeInvoiceRepeater;

  constructor(private _coreSidebarService: CoreSidebarService, private _faultbulkuploadService: FaultBulkUploadService, private toastr: ToastrService) {
    this.options = this.toastr.toastrConfig;
  }

  // Public Methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Add Item
   */
  addItem() {
    this.items.push({
      itemId: '', serialNumber: '', assetCode: '', customer: '', faultCategory: '', faultSubCategory: '', faultDescription: ''
    });
  }

  filterSubById(id) {
    console.log("IDDDDDDDDDD " + id)
    return this.rmaFaultSelectionService.subCategories.filter(item => item.parent === id);
  }

  addBulkItems() {

    console.log(this.bulkTempValues.serialNumbers.split('\n').map(e => {
      if (`${e}` != '') { this.serialNos.push(`${e}`) } else {
        console.log("Empty Found .........");
      }
    }));
    console.log(this.bulkTempValues.assetCodes.split('\n').map(e => {
      if (`${e}` != '') { this.assetNos.push(`${e}`) } else {
        console.log("Empty Found .........");
      }
    }));
    console.log(this.serialNos);
    console.log(this.assetNos);
    console.log(this.bulkTempValues.customer);

    // this.bulkTempValues.serialNumbers.split('\n').map(e => `'${e}'`)

    if (this.serialNos.length == this.assetNos.length) {

      if (this.items.indexOf(this.items[0]) === 0 && this.items[0].serialNumber === '') {
        this.items.splice(0, 1);
      }
      for (let i = 0; i < this.serialNos.length; i++) {
        this.items.push({
          itemId: '' + i,
          serialNumber: this.serialNos[i], assetCode: this.assetNos[i], customer: this.bulkTempValues.customer, faultCategory: '', faultSubCategory: '', faultDescription: ''
        });

        // this.item.
        //   serialNumber = this.serialNos[i];
      }



      console.log(this.items);

    } else {

      console.log("Not Matching...." + this.items);




      this.toastr.error(
        'No\'s of Serial doesn\'t match No\'s of Asset Code',
        'Invalid Data Format',
        { positionClass: 'toast-top-center', toastClass: 'toast ngx-toastr', closeButton: true }
      );
    }

  }


  toastrError(title: string, message: string) {
    this.toastRef = this.toastr.error(message, title, {
      toastClass: 'toast ngx-toastr',
      closeButton: true
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

  bulkUploadFaultCases() {

    for (let i = 0; i <= this.items.length; i++) {

      this.repairDevice.serialNumber = this.items[i].serialNumber;
      this.repairDevice.assetCode = this.items[i].assetCode;
      this.repairDevice.customer = this.items[i].customer;
      this.repairDevice.rmaFaultCategory = this.items[i].faultCategory;
      this.repairDevice.rmaFaultSubCategory = this.items[i].faultSubCategory;
      this.repairDevice.rmaFaultDescription = this.items[i].faultDescription;
      this.repairDevice.faultDescription = this.items[i].faultDescription;
      this.repairDevice.repairedByUs = true;
      this.repairDevice.assetCorrect = true;
      this.repairDevice.serialCorrect = true;

      if (this.repairDevice.rmaFaultCategory.length > 0) {
        this.repairDevice.repairedByUs = false;
      }
      // this.repairDevice.rmaFaultCategory = this.items[i].faultCategory;

      this._faultbulkuploadService
        .addNewFaultCase(this.repairDevice)
        .pipe()
        .subscribe(
          data => {
            console.log(data);

            setTimeout(() => {
              this.toastr.success(
                'If don\'t see updated information. Please contact admin',
                'Repair Case Added Successfully',
                { positionClass: 'toast-top-center', toastClass: 'toast ngx-toastr', closeButton: true }
              );
            }, 1000);
            // this.deleteItem()

          },
          error => {
            console.log(error)
            setTimeout(() => {
              this.toastr.success(
                'Failed to add ' + this.repairDevice.serialNumber,
                'Error',
                { toastClass: 'toast ngx-toastr', closeButton: true }
              );
            }, 1000);


          }
        );
    }

  }

  ngOnInit(): void {

    this.uniqueCustomerCodes = [];

    this._faultbulkuploadService
      .getCustomerUniqueCode()
      .pipe()
      .subscribe(
        data => {
          console.log(data);
          this.uniqueCustomerCodes = data;
        },
        error => {



        }
      );
  }

}
