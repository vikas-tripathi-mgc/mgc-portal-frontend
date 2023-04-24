import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FlatpickrOptions } from 'ng2-flatpickr';

import { AccountSettingsService, ProfileDetail } from 'app/main/pages/account-settings/account-settings.service';
import { User } from 'app/auth/models';
import { AuthenticationService } from 'app/auth/service';
@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AccountSettingsComponent implements OnInit, OnDestroy {

  // public
  public contentHeader: object;
  public profileDetail = new ProfileDetail;
  public data: any;
  public birthDateOptions: FlatpickrOptions = {
    altInput: true
  };
  public passwordTextTypeOld = false;
  public passwordTextTypeNew = false;
  public passwordTextTypeRetype = false;
  public avatarImage: any;
  public file: File;
  public profilePicId: any;
  public currentUser: User;
  public reader;

  // private
  private _unsubscribeAll: Subject<any>;

  public isAdmin;
  /**
   * Constructor
   *
   * @param {AccountSettingsService} _accountSettingsService
   */
  constructor(private _accountSettingsService: AccountSettingsService, private _authenticationService: AuthenticationService) {
    this._unsubscribeAll = new Subject();

    this._authenticationService.currentUser.subscribe(x => (this.currentUser = x));
    this.isAdmin = this._authenticationService.isAdmin;
  }

  // Public Methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Toggle Password Text Type Old
   */
  togglePasswordTextTypeOld() {
    this.passwordTextTypeOld = !this.passwordTextTypeOld;
  }

  /**
   * Toggle Password Text Type New
   */
  togglePasswordTextTypeNew() {
    this.passwordTextTypeNew = !this.passwordTextTypeNew;
  }

  /**
   * Toggle Password Text Type Retype
   */
  togglePasswordTextTypeRetype() {
    this.passwordTextTypeRetype = !this.passwordTextTypeRetype;
  }

  /**
   * Upload Image
   *
   * @param event
   */
  uploadImage(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.reader = new FileReader();

      this.reader.onload = (event: any) => {
        this.avatarImage = event.target.result;
        this.file = event.target.result;
        console.log(event);

      };

      this.reader.readAsDataURL(event.target.files[0]);
    }
  }

  updateUserProfile() {

    console.log(this.file);
    if (this.reader) {

      // this.fileName = file.name;

      const formData = new FormData();

      formData.append("file", this.file);



      this._accountSettingsService
        .uploadProfilePictureOfUser(formData)
        .pipe()
        .subscribe(
          data => {
            console.log(data);

          },
          error => {

            console.log(error)

          }
        );


    }

    console.log(this.currentUser.email);

    this.profileDetail.email = this.currentUser.email;
    this.profileDetail.username = this.currentUser.username;
    this.profileDetail.fullName = this.currentUser.fullName;

    this._accountSettingsService
      .uploadProfileDetails(this.profileDetail)
      .pipe()
      .subscribe(
        data => {
          console.log(data);

        },
        error => {

          console.log(error)

        }
      );



  }

  requestProfilePictureOfUser(userId: any) {


    // this.profilePic = this._authenticationService.getProfilePictureOfUser(profilePicId);

    this._authenticationService.getProfilePictureOfUser(userId)
      .pipe()
      .subscribe(
        data => {
          console.log(data);
          this.avatarImage = data.message;
        },
        error => {
          console.log(error);
        }
      );

  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit() {
    this._accountSettingsService.onSettingsChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
      this.data = response;
      // this.avatarImage = this.data.accountSetting.general.avatar;
    });

    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

    console.log(this.currentUser);

    this.profilePicId = this.currentUser.id;
    this.requestProfilePictureOfUser(this.profilePicId);

    // content header
    this.contentHeader = {
      headerTitle: 'Account Settings',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Home',
            isLink: true,
            link: '/'
          },
          {
            name: 'Pages',
            isLink: true,
            link: '/'
          },
          {
            name: 'Account Settings',
            isLink: false
          }
        ]
      }
    };
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
