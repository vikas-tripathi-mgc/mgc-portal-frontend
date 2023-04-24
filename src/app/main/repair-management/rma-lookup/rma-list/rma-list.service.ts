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
export class RmaListService {


  public rows: any;
  // public onUserListChanged: BehaviorSubject<any>;
  // ssrows: any;
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




  getRMALookup(rmaNumber: string, emailAddress: string) {


    return this._httpClient
      .post<any>(`${environment.apiUrl}/api/v1/getRMADetails`, { rmaNumber, emailAddress })
      .pipe(
        map(user => {
          console.log(user);

          this.rows = user.actions[0].returnValue;
          this.onDatatablessChanged.next(this.rows);
          // resolve(this.rows);

          return user;
        }),
      );


  }

  getAllRMAWithCaseDetails() {


    return this._httpClient
      .get<any>(`${environment.apiUrl}/api/v1/getAllRMAs`)
      .pipe(
        map(user => {
          console.log(user);

          // this.rows = user.actions[0].returnValue;
          // this.onDatatablessChanged.next(this.rows);
          // resolve(this.rows);



          return user;
        }),
      );


  }

}

export class RmaLookupLine {

  jobType: string
  lineNumber: number
  lineStatus: string
  product: string
  rmaProcessed: boolean
  serialNumber: string
  trackingNumber: string
}

export class RmaLookupRequest {

  rmaNumber: string
  emailAddress: string
}

export type AllRMAs = RmaDetailList[]

export interface RmaDetailList {
  rmaNumber: string
  overAllStatusClosed: boolean
  totalDevices: number
  rmaClosedDevices: number
  associatedAccount: string
  rrDetailList: RrDetailList[]
}

export interface RrDetailList {
  id: number
  emailDate: string
  collectionDate: string
  deviceModel: string
  customer: string
  serialNumber: string
  assetCode: string
  faultDescription: string
  rmaStatus: string
  correctSerialNo: any
  correctAssetCode: any
  rmaEmailAddress: string
  rmaFaultCategory?: string
  rmaFaultSubCategory?: string
  rmaFaultDescription?: string
  repairStatus?: string
  replacementSerialNo: any
  replacementSerialNoByUs: any
  createdDate: string
  deliveryDate?: string
  rmaNumber: string
  lastUpdated: string
  updatedBy: any
  createdBy: any
  isInContract: string
  customerNote: any
  accessoryNote: any
  extraNotes: any
  deliveryNoteId?: string
  replacementByZebra: boolean
  replacementByUs: boolean
  assetCorrect: boolean
  replacement: boolean
  repairedByUs: boolean
  serialCorrect: boolean
}
