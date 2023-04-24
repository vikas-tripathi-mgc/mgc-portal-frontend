import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { LongPressDirective } from '@swimlane/ngx-datatable';
import { environment } from 'environments/environment';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CustomerListService {

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
      this._httpClient.get(`${environment.apiUrl}/api/v1/customers`).subscribe((response: any) => {
        this.rows = response;
        this.onDatatablessChanged.next(this.rows);
        resolve(this.rows);
      }, reject);
    });
  }




  addNewCustomer(customer: Customer) {


    return this._httpClient
      .post<any>(`${environment.apiUrl}/api/v1/customer`, customer)
      .pipe(
        map(user => {
          // login successful if there's a jwt token in the response
          console.log(user);

          this.getDataTableRows();
          return user;
        })
      );

  }

  editCustomer(customer: Customer) {


    return this._httpClient
      .put<any>(`${environment.apiUrl}/api/v1/customer`, customer)
      .pipe(
        map(user => {
          // login successful if there's a jwt token in the response
          console.log(user);

          this.getDataTableRows();
          return user;
        })
      );

  }

}

export class Customer {

  id: any;
  customerName: string;
  customerEmail: string;
  companyName: string;
  companyCode: string;
  deliveryAddressLine1: string;
  deliveryAddressLine2: string;
  deliveryAddressLine3: string;
}

export class RepairDevice {

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
  createdDate: string;
  deliveryDate: string;
  rmaNumber: string;
  lastUpdated: string;
  updatedBy: string;
  createdBy: string;
  isInContract: string;
  customerNote: string;
  accessoryNote: string;
  extraNotes: string;
  deliveryNoteId: string;
  replacement: boolean;
  assetCorrect: boolean;
  serialCorrect: boolean;
  repairedByUs: boolean;
  replacementByUs: boolean;
}
