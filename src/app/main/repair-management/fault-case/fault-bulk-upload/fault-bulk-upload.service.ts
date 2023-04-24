import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { environment } from 'environments/environment';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RepairDevice } from '../fault-list/fault-list.service';
@Injectable({
  providedIn: 'root'
})
export class FaultBulkUploadService {

  constructor(private _httpClient: HttpClient, private _toastrService: ToastrService) { }

  addNewFaultCase(repairDevice: RepairDevice) {


    return this._httpClient
      .post<any>(`${environment.apiUrl}/api/v1/repairDevice`, repairDevice)
      .pipe(
        map(user => {
          // login successful if there's a jwt token in the response
          console.log(user);


          return user;
        })
      );

    // this._httpClient.post<any>(`${environment.apiUrl}/api/v1/repairDevice`, formCaseData)
    //   .subscribe(data => {
    //     console.log(data);
    //   });

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
}
