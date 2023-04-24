import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// import { FaultListComponent } from './fault-list/fault-list.component';
// import { NewFaultSidebarComponent } from './fault-list/new-fault-sidebar/new-fault-sidebar.component';
// import { FaultEditComponent } from './fault-edit/fault-edit.component';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { Ng2FlatpickrModule } from 'ng2-flatpickr';

import { CoreCommonModule } from '@core/common.module';
import { CoreDirectivesModule } from '@core/directives/directives';
import { CorePipesModule } from '@core/pipes/pipes.module';
import { CoreSidebarModule } from '@core/components';

import { InvoiceListService } from 'app/main/apps/invoice/invoice-list/invoice-list.service';
import { InvoiceModule } from 'app/main/apps/invoice/invoice.module';

import { UserEditComponent } from 'app/main/apps/user/user-edit/user-edit.component';
import { UserEditService } from 'app/main/apps/user/user-edit/user-edit.service';

import { UserListComponent } from 'app/main/apps/user/user-list/user-list.component';
import { UserListService } from 'app/main/apps/user/user-list/user-list.service';

import { UserViewComponent } from 'app/main/apps/user/user-view/user-view.component';
import { UserViewService } from 'app/main/apps/user/user-view/user-view.service';
import { NewUserSidebarComponent } from 'app/main/apps/user/user-list/new-user-sidebar/new-user-sidebar.component';
// import { FaultListService } from './fault-list/fault-list.service';
// import { FaultEditService } from './fault-edit/fault-edit.service';
import { CoreCardModule } from '@core/components/core-card/core-card.module';
import { CsvModule } from '@ctrl/ngx-csv';
// import { FaultBulkUploadComponent } from './fault-bulk-upload/fault-bulk-upload.component';
// import { FaultBulkUploadModule } from './fault-bulk-upload/fault-bulk-upload.module';
import { ToastrModule } from 'ngx-toastr';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerListService } from './customer-list/customer-list.service';
import { NewCustomerSidebarComponent } from './customer-list/new-customer-sidebar/new-customer-sidebar.component';
import { EditCustomerSidebarComponent } from './customer-list/edit-customer-sidebar/edit-customer-sidebar.component';

// routing
const routes: Routes = [
  {
    path: 'customer-list',
    component: CustomerListComponent,
    resolve: {
      uls: CustomerListService
    },
    data: { animation: 'CustomerListComponent' }
  },
  {
    path: 'user-view/:id',
    component: UserViewComponent,
    resolve: {
      data: UserViewService,
      InvoiceListService
    },
    data: { path: 'view/:id', animation: 'UserViewComponent' }
  },
  // {
  //   path: 'user-edit/:id',
  //   component: FaultEditComponent,
  //   resolve: {
  //     ues: FaultEditService
  //   },
  //   data: { animation: 'UserEditComponent' }
  // },
  // {
  //   path: 'user-view',
  //   redirectTo: '/apps/user/user-view/2' // Redirection
  // },
  // {
  //   path: 'fault-edit',
  //   redirectTo: '/repair/fault-edit/2' // Redirection
  // }
];





@NgModule({
  declarations: [
    CustomerListComponent,
    NewCustomerSidebarComponent,
    EditCustomerSidebarComponent,
    // NewFaultSidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CoreCommonModule,
    FormsModule,
    NgbModule,
    NgSelectModule,
    Ng2FlatpickrModule,
    NgxDatatableModule,
    CorePipesModule,
    CoreDirectivesModule,
    InvoiceModule,
    CoreSidebarModule,
    CoreCardModule,
    CsvModule, ToastrModule
  ],
  providers: [CustomerListService]
})
export class CustomerMainModule { }
