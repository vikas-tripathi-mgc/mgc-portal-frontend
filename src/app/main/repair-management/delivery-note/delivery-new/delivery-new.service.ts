import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { readyToDeliver } from '../models/readyToDeliver';

@Injectable({
  providedIn: 'root'
})
export class DeliveryNewService implements Resolve<any> {
  public apiData: any;
  public onInvoicAddChanged: BehaviorSubject<any>;

  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  constructor(private _httpClient: HttpClient) {
    // Set the defaults
    this.onInvoicAddChanged = new BehaviorSubject({});
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
      Promise.all([this.getApiData()]).then(() => {
        resolve();
      }, reject);
    });
  }

  /**
   * Get API Data
   */
  getApiData(): Promise<any[]> {
    const url = `api/invoice-data`;

    return new Promise((resolve, reject) => {
      this._httpClient.get(url).subscribe((response: any) => {
        this.apiData = response;
        this.onInvoicAddChanged.next(this.apiData);
        resolve(this.apiData);
      }, reject);
    });
  }


  getCustomersList() {


    return this._httpClient
      .get<any>(`${environment.apiUrl}/api/v1/customers`)
      .pipe(
        map(customer => {
          // login successful if there's a jwt token in the response
          console.log(customer);


          return customer;
        })
      );


  }

  getAllReadyForDeliveryItemsForCustomer(customerId: number) {


    return this._httpClient
      .get<any>(`${environment.apiUrl}/api/v1/deliveryNote/readyForDelivery/${customerId}`)
      .pipe(
        map(user => {
          // login successful if there's a jwt token in the response
          console.log(user);


          return user;
        })
      );


  }

  saveDeliveryNoteFromCustomer(readyToDeliver: readyToDeliver) {


    return this._httpClient
      .post<any>(`${environment.apiUrl}/api/v1/deliveryNote/save`, readyToDeliver)
      .pipe(
        map(user => {
          // login successful if there's a jwt token in the response
          console.log(user);


          return user;
        })
      );


  }
}
