import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { User } from 'app/auth/models';
import { error } from 'console';
import { environment } from 'environments/environment';
import { ToastrService } from 'ngx-toastr';

import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AccountSettingsService implements Resolve<any> {
  rows: any;
  onSettingsChanged: BehaviorSubject<any>;

  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  constructor(private _httpClient: HttpClient, private _toastrService: ToastrService) {
    // Set the defaults
    this.onSettingsChanged = new BehaviorSubject({});
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
      this._httpClient.get('api/account-settings-data').subscribe((response: any) => {
        this.rows = response;
        this.onSettingsChanged.next(this.rows);
        resolve(this.rows);
      }, reject);
    });
  }

  // uploadProfilePictureOfUser(profilePicId: any) {

  //   return this._httpClient
  //     .get<any>(`${environment.apiUrl}/api/auth/uploadProfile`,)
  //     .pipe(
  //       map(user => {
  //         // login successful if there's a jwt token in the response
  //         console.log(user);
  //         return user;
  //       })
  //     );

  // }

  uploadProfilePictureOfUser(formData: FormData) {


    return this._httpClient
      .post<any>(`${environment.apiUrl}/api/auth/uploadProfile`, formData)
      .pipe(
        map(user => {
          // login successful if there's a jwt token in the response
          console.log(user);
          setTimeout(() => {
            this._toastrService.success(
              'Profile Updated.',
              'Changes saved Successfully.',
              { positionClass: 'toast-top-center', toastClass: 'toast ngx-toastr', closeButton: true }
            );
          }, 1000);

          this.getDataTableRows();
          return user;
        })
      );


  }

  uploadProfileDetails(profileDetail: ProfileDetail) {



    return this._httpClient
      .post<any>(`${environment.apiUrl}/api/v1/updateDetail`, profileDetail)
      .pipe(
        map(user => {
          // login successful if there's a jwt token in the response
          console.log(user);
          setTimeout(() => {
            this._toastrService.success(
              'Profile Details Updated.',
              'Changes saved Successfully.',
              { positionClass: 'toast-top-center', toastClass: 'toast ngx-toastr', closeButton: true }
            );
          }, 1000);

          this.getDataTableRows();
          return user;
        }, error => {
          setTimeout(() => {
            this._toastrService.error(
              'Profile Details Failed to Update.',
              'Something went Wrong.',
              { positionClass: 'toast-top-center', toastClass: 'toast ngx-toastr', closeButton: true }
            );
          }, 1000);
        })
      );


  }


}
export class ProfileDetail {
  email: string;
  username: string;
  fullName: string;
}

