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
export class ContractListService {


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




  getValidityCheck(serialNumber: string) {


    return this._httpClient
      .post<any>(`${environment.apiUrl}/api/v1/getContractStatus`, { serialNumber })
      .pipe(
        map(user => {
          // console.log(user.actions[0].returnValue.ListOfZEBSerialNumber.Asset[0].ListOfServiceDetails.ServiceDetails);

          if (!user.actions[0].returnValue.ListOfZEBSerialNumber?.Asset[0]) {
            this.rows = [];
            // this.onDatatablessChanged.next(this.rows);
            console.log("EMPTY NOT FOUND");
          } else {
            this.rows = user.actions[0].returnValue.ListOfZEBSerialNumber.Asset[0].ListOfServiceDetails.ServiceDetails;
            this.onDatatablessChanged.next(this.rows);
            console.log("FOUND");
          }

          // resolve(this.rows);

          return user;
        },
          error => {
            console.log(error)
            console.log("EMPTY IN ERROR");
            setTimeout(() => {
              this.rows = [];
              this.onDatatablessChanged.next(this.rows);
              this._toastrService.success(
                'Not a Valid Serial Number.',
                'Faied to check Contract validity',
                { toastClass: 'toast ngx-toastr', closeButton: true }
              );
            }, 1000);

            // this.toggleSidebar('new-user-sidebar');
          })
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
