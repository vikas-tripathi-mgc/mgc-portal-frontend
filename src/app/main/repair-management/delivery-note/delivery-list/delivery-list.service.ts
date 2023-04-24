import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { environment } from 'environments/environment';

import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DeliveryListService {

  rows: any;
  onInvoiceListChanged: BehaviorSubject<any>;

  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  constructor(private _httpClient: HttpClient) {
    // Set the defaults
    this.onInvoiceListChanged = new BehaviorSubject({});
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
      this._httpClient.get('api/invoice-data').subscribe((response: any) => {
        this.rows = response;
        this.onInvoiceListChanged.next(this.rows);
        resolve(this.rows);
      }, reject);
    });
  }


  getAllDeliveryNoteList() {




    return this._httpClient
      .get<any>(`${environment.apiUrl}/api/v1/deliveryNotes`)
      .pipe(
        map(customer => {
          // login successful if there's a jwt token in the response
          console.log(customer);


          return customer;
        })
      );


  }

  updateDeliveryNoteStatus(id: any) {

    return this._httpClient
      .post<any>(`${environment.apiUrl}/api/v1/deliveryNote/markAsDelivered/${id}`, '')
      .pipe(
        map(user => {
          // login successful if there's a jwt token in the response
          console.log(user);


          return user;
        })
      );
  }

  deleteDeliveryNote(id: any) {

    return this._httpClient
      .post<any>(`${environment.apiUrl}/api/v1/deliveryNote/delete/${id}`, '')
      .pipe(
        map(user => {
          // login successful if there's a jwt token in the response
          console.log(user);


          return user;
        })
      );
  }

}
