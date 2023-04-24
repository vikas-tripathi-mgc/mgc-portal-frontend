import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { environment } from 'environments/environment';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FaultListService {

  // public rows: any;
  // public onUserListChanged: BehaviorSubject<any>;
  rows: any;
  onDatatablessChanged: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  //private
  private currentUserSubject: BehaviorSubject<any>;

  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  constructor(private _httpClient: HttpClient, private _toastrService: ToastrService) {
    // Set the defaults
    this.onDatatablessChanged = new BehaviorSubject({});
  }

  /**
   * Resolver
   *
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @returns {Observable<any> | Promise<any> | any}
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return new Promise<void>((resolve, reject) => {
      Promise.all([this.getDataTableRows()]).then(() => {
        resolve();
      }, reject);
    });
  }

  /**
   * Get rows
   */
  getDataTableRows(): Promise<any[]> {
    return new Promise((resolve, reject) => {



      this._httpClient.get(`${environment.apiUrl}/api/v1/repairDevices`).subscribe((response: any) => {
        this.rows = response;


        this.onDatatablessChanged.next(this.rows);
        resolve(this.rows);
      }, reject);
    });
  }




  addNewFaultCase(repairDevice: RepairDevice) {


    return this._httpClient
      .post<any>(`${environment.apiUrl}/api/v1/repairDevice`, repairDevice)
      .pipe(
        map(user => {
          // login successful if there's a jwt token in the response
          console.log(user);
          setTimeout(() => {
            this._toastrService.success(
              'Please proceed with the RMA.',
              'Case Added Successfully.',
              { positionClass: 'toast-top-center', toastClass: 'toast ngx-toastr', closeButton: true }
            );
          }, 1000);

          this.getDataTableRows();
          return user;
        })
      );


  }


  updateFaultCase(repairDevice: RepairDevice) {


    return this._httpClient
      .put<any>(`${environment.apiUrl}/api/v1/repairDevice`, repairDevice)
      .pipe(
        map(user => {
          // login successful if there's a jwt token in the response
          console.log(user);

          setTimeout(() => {
            this._toastrService.success(
              'Please proceed with the RMA.',
              'Case Updated Successfully.',
              { positionClass: 'toast-top-center', toastClass: 'toast ngx-toastr', closeButton: true }
            );
          }, 1000);

          this.getDataTableRows();

          return user;
        })
      );

  }




  updateFaultCaseStatus(repairCaseStatus: RepairCaseStatus) {

    return this._httpClient
      .put<any>(`${environment.apiUrl}/api/v1/repairDevice/updateCaseStatus`, repairCaseStatus)
      .pipe(
        map(user => {
          // login successful if there's a jwt token in the response
          console.log(user);

          setTimeout(() => {
            this._toastrService.success(
              'Fault Case Status updated',
              'Updated to ' + repairCaseStatus.repairStatus,
              { positionClass: 'toast-top-center', toastClass: 'toast ngx-toastr', closeButton: true }
            );
          }, 1000);


          this.getDataTableRows();

          return user;
        })
      );
  }

  updateFaultCaseReplacementByUsStatus(repairCaseStatus: RepairCaseStatus) {

    return this._httpClient
      .put<any>(`${environment.apiUrl}/api/v1/repairDevice/updateReplacementByUs`, repairCaseStatus)
      .pipe(
        map(user => {
          // login successful if there's a jwt token in the response
          console.log(user);

          setTimeout(() => {
            this._toastrService.success(
              'Fault Case Status updated',
              'Updated to ' + repairCaseStatus.repairStatus,
              { positionClass: 'toast-top-center', toastClass: 'toast ngx-toastr', closeButton: true }
            );
          }, 1000);

          this.getDataTableRows();

          return user;
        })
      );


  }

  updateFaultCaseReplacementByZebraStatus(repairCaseStatus: RepairCaseStatus) {


    return this._httpClient
      .put<any>(`${environment.apiUrl}/api/v1/repairDevice/updateReplacementByZebra`, repairCaseStatus)
      .pipe(
        map(user => {
          // login successful if there's a jwt token in the response
          console.log(user);

          setTimeout(() => {
            this._toastrService.success(
              'Fault Case Status updated',
              'Updated to ' + repairCaseStatus.repairStatus,
              { positionClass: 'toast-top-center', toastClass: 'toast ngx-toastr', closeButton: true }
            );
          }, 1000);

          this.getDataTableRows();

          return user;
        })
      );


  }

  getCustomerUniqueCode() {


    return this._httpClient
      .get<any>(`${environment.apiUrl}/api/v1/uniqueCustomers`)
      .pipe(
        map(user => {
          // login successful if there's a jwt token in the response
          console.log(user);


          return user;
        })
      );


  }

  getRMALookup(rmaNumber: string, emailAddress: string) {


    return this._httpClient
      .post<any>(`${environment.apiUrl}/api/v1/updateRMADetails`, { rmaNumber, emailAddress })
      .pipe(
        map(data => {
          console.log(data);

          setTimeout(() => {
            this._toastrService.success(
              'If don\'t see updated information. Please contact admin',
              'RMA Status updated',
              { positionClass: 'toast-top-center', toastClass: 'toast ngx-toastr', closeButton: true }
            );
          }, 1000);
          // this.rows = user.actions[0].returnValue;
          // this.onDatatablessChanged.next(this.rows);
          // resolve(this.rows);
          this.getDataTableRows();
          return data;
        }),
      );


  }

  updateContractStatus(id: any) {


    return this._httpClient
      .post<any>(`${environment.apiUrl}/api/v1/repairDevice/updateContractStatus/` + id, '')
      .pipe(
        map(data => {
          console.log(data);

          setTimeout(() => {
            this._toastrService.success(
              'If don\'t see updated information. Please contact admin',
              'Contract Status updated',
              { positionClass: 'toast-top-center', toastClass: 'toast ngx-toastr', closeButton: true }
            );
          }, 1000);
          // this.rows = user.actions[0].returnValue;
          // this.onDatatablessChanged.next(this.rows);
          // resolve(this.rows);
          this.getDataTableRows();
          return data;
        }),
      );


  }



  getCSVFileForRMA(repairDevices: any) {

    console.log("Repair Device ... Calling under Csv File for RMA" + repairDevices[0]);



    return this._httpClient
      .post<any>(`${environment.apiUrl}/api/v1/export-rma`, repairDevices, { observe: 'body', responseType: 'text' as 'json' })
      .pipe(
        map(user => {
          // login successful if there's a jwt token in the response
          console.log(user);

          const a = document.createElement("a");
          a.href = "data:text/csv," + user;
          let filename = "Bulk Load V6";
          a.setAttribute("download", filename + ".csv");
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          return user;
        })
      );


  }

  importCSVFile(formData: FormData) {


    return this._httpClient
      .post<any>(`${environment.apiUrl}/api/v1/repairDevice/upload`, formData)
      .pipe(
        map(user => {
          // login successful if there's a jwt token in the response
          console.log(user);
          setTimeout(() => {
            this._toastrService.success(
              'Please proceed with the RMA.',
              'CSV Imported Successfully.',
              { positionClass: 'toast-top-center', toastClass: 'toast ngx-toastr', closeButton: true }
            );
          }, 1000);

          this.getDataTableRows();
          return user;
        })
      );


  }

}

export class RepairDevice {
  id: any;
  emailDate: string;
  collectionDate: string;
  deviceModel: string;
  customer: string;
  serialNumber: string;
  assetCode: string;
  faultDescription: string;
  rmaStatus: string;
  correctSerialNo: string;
  correctAssetCode: string;
  rmaFaultCategory: string;
  rmaFaultSubCategory: string;
  rmaFaultDescription: string;
  repairStatus: string;
  replacementSerialNo: string;
  replacementSerialNoByUs: string;
  createdDate: string;
  deliveryDate: string;
  rmaNumber: string;
  lastUpdated: string;
  updatedBy: string;
  createdBy: string;
  isInContract: string;
  notRepaired: boolean
  customerNote: string;
  accessoryNote: string;
  extraNotes: string;
  deliveryNoteId: string;
  replacement: boolean;
  assetCorrect: boolean;
  serialCorrect: boolean;
  repairedByUs: boolean;
  replacementByUs: boolean;
  replacementByZebra: boolean;
}

export class RepairCaseStatus {
  id: any;
  repairStatus: string;
}

export class ReplacementCaseStatusByUs {
  id: any;
  repairStatus: string;
  replacementSerialNoByUs: string;

}

export class ReplacementCaseStatusByZebra {
  id: any;
  repairStatus: string;
  replacementSerialNo: string;
}
