import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RmaListComponent } from './rma-list/rma-list.component';
import { RmaListService } from './rma-list/rma-list.service';

import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


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

import { CoreCardModule } from '@core/components/core-card/core-card.module';
import { CsvModule } from '@ctrl/ngx-csv';

const routes: Routes = [
  {
    path: 'rma-list',
    component: RmaListComponent,
    // resolve: {
    //   uls: RmaListService
    // },
    data: { animation: 'RmaListComponent' }
  }
];

@NgModule({
  declarations: [
    RmaListComponent

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
    CsvModule
  ],
  providers: [RmaListService]
})
export class RmaLookupModule { }
