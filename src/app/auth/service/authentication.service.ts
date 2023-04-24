import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'environments/environment';
import { User, Role } from 'app/auth/models';
import { ToastrService } from 'ngx-toastr';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  //public
  public currentUser: Observable<User>;

  //private
  private currentUserSubject: BehaviorSubject<User>;

  /**
   *
   * @param {HttpClient} _http
   * @param {ToastrService} _toastrService
   */
  constructor(private _http: HttpClient, private _toastrService: ToastrService) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  // getter: currentUserValue
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }


  /**
   *  Confirms if user is admin
   */
  get isAdmin() {
    return this.currentUser && this.currentUserSubject.value.roles[0] === Role.Admin;
  }

  /**
   *  Confirms if user is client
   */
  get isClient() {
    return this.currentUser && this.currentUserSubject.value.roles[0] === Role.Client;
  }

  /**
   * User login
   *
   * @param username
   * @param password
   * @returns user
   */
  login(username: string, password: string) {
    // username = "admin";
    // password = "mgc@2564630"
    return this._http
      .post<any>(`${environment.apiUrl}/api/auth/login`, { username: username, password: password })
      .pipe(
        map(user => {
          // login successful if there's a jwt token in the response
          if (user && user.accessToken) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));

            // Display welcome toast!
            setTimeout(() => {
              this._toastrService.success(
                'You have successfully logged to MGC Portal.',
                '👋 Welcome!',
                { positionClass: 'toast-top-center', toastClass: 'toast ngx-toastr', closeButton: true }
              );
            }, 2500);

            // notify
            this.currentUserSubject.next(user);
          }

          return user;
        })
      );
  }

  getProfilePictureOfUser(profilePicId: any) {

    console.log("Requesting Profile Picture ... " + environment.apiUrl + " / api / auth / getProfilePicture / " + profilePicId + "");


    // getImage(id: string): Observable < Blob > {
    //   return this._http.get('http://myip/image/' + id, { responseType: "blob" });
    // }

    return this._http
      .get<any>(`${environment.apiUrl}/api/auth/getProfilePicture/${profilePicId}`)
      .pipe(
        map(user => {
          // login successful if there's a jwt token in the response
          console.log(user);

          return user;
        })
      );




  }



  /**
   * User logout
   *
   */
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    // notify
    this.currentUserSubject.next(null);
  }


}

export class Profile {
  profilePicture: any;
}
