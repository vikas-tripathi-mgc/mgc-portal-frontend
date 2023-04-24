import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { environment } from 'environments/environment';

import { BehaviorSubject, Observable, } from 'rxjs';
import { map } from 'rxjs/operators';
import { readyToDeliver } from '../models/readyToDeliver';

@Injectable({
  providedIn: 'root'
})
export class DeliveryPreviewService {
  apiData: any;
  public generatedDeliveryNote: readyToDeliver;
  onDeliveryPreviewChanged: BehaviorSubject<any>;

  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  constructor(private _httpClient: HttpClient) {
    // Set the defaults
    this.onDeliveryPreviewChanged = new BehaviorSubject({});
  }

  /**
   * Resolver
   *
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @returns {Observable<any> | Promise<any> | any}
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    let currentId = route.paramMap.get('id');
    console.log(currentId);

    return new Promise<void>((resolve, reject) => {
      Promise.all([this.getApiData(currentId)]).then(() => {
        console.log(currentId);
        resolve();
      }, reject);
    });
  }

  /**
   * Get API Data
   */
  getApiData(id: string): Promise<any[]> {
    // const url = `api/invoice-data/${id}`;



    console.log("getAPI Data " + id);
    return new Promise((resolve, reject) => {
      console.log("getAPI Data " + environment.apiUrl + "/ api / v1 / deliveryNote / preview / " + id);
      // this._httpClient
      //   .get<any>(`${environment.apiUrl}/api/v1/deliveryNote/preview/${id}`)
      //   .pipe(
      //     map(user => {
      //       console.log(user);
      //       this.generatedDeliveryNote = user;
      //       // this.apiData = user;
      //       this.onDeliveryPreviewChanged.next(this.apiData);
      //       resolve(this.apiData);
      //       return user;
      //     }, reject)
      //   );

      this._httpClient.get(`${environment.apiUrl}/api/v1/deliveryNote/preview/${id}`).subscribe((response: any) => {
        this.apiData = response;
        this.generatedDeliveryNote = response;
        this.onDeliveryPreviewChanged.next(this.apiData);
        resolve(this.apiData);
      }, reject);

      // return this._httpClient
      //   .get<any>(`${environment.apiUrl}/api/v1/deliveryNote/preview/${id}`)
      //   .pipe(
      //     map(user => {
      //       console.log(user);


      //       return user;
      //     })
      //   );
    });
  }


  getCustomersList() {


    return this._httpClient
      .get<any>(`${environment.apiUrl}/api/v1/customers`)
      .pipe(
        map(customer => {
          console.log(customer);


          return customer;
        })
      );


  }

  getDeliveryNoteData(customerId: number) {


    return this._httpClient
      .get<any>(`${environment.apiUrl}/api/v1/deliveryNote/${customerId}`)
      .pipe(
        map(user => {
          console.log(user);


          return user;
        })
      );


  }
}
