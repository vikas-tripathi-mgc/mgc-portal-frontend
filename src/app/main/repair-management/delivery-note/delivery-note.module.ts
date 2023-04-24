import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
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

// import { InvoiceListComponent } from 'app/main/apps/invoice/invoice-list/invoice-list.component';
// import { InvoiceListService } from 'app/main/apps/invoice/invoice-list/invoice-list.service';

// import { InvoiceAddComponent } from 'app/main/apps/invoice/invoice-add/invoice-add.component';
// import { InvoiceAddService } from 'app/main/apps/invoice/invoice-add/invoice-add.service';
// import { AddCustomerSidebarComponent } from 'app/main/apps/invoice/invoice-add/add-customer-sidebar/add-customer-sidebar.component';

// import { InvoiceEditComponent } from 'app/main/apps/invoice/invoice-edit/invoice-edit.component';
// import { InvoiceEditService } from 'app/main/apps/invoice/invoice-edit/invoice-edit.service';
// import { SendInvoiceSidebarComponent } from 'app/main/apps/invoice/invoice-edit/sidebar/send-invoice-sidebar/send-invoice-sidebar.component';
// import { AddPaymentSidebarComponent } from 'app/main/apps/invoice/invoice-edit/sidebar/add-payment-sidebar/add-payment-sidebar.component';

// import { InvoicePreviewComponent } from 'app/main/apps/invoice/invoice-preview/invoice-preview.component';
// import { InvoicePreviewService } from 'app/main/apps/invoice/invoice-preview/invoice-preview.service';
// import { AddPaymentSidebarPreviewComponent } from 'app/main/apps/invoice/invoice-preview/sidebar/add-payment-sidebar-preview/add-payment-sidebar-preview.component';
// import { SendInvoiceSidebarPreviewComponent } from 'app/main/apps/invoice/invoice-preview/sidebar/send-invoice-sidebar-preview/send-invoice-sidebar-preview.component';
import { DeliveryEditComponent } from './delivery-edit/delivery-edit.component';
import { DeliveryListComponent } from './delivery-list/delivery-list.component';
import { DeliveryNewComponent } from './delivery-new/delivery-new.component';
import { DeliveryPreviewComponent } from './delivery-preview/delivery-preview.component';
import { DeliveryListService } from './delivery-list/delivery-list.service';
import { DeliveryPreviewService } from './delivery-preview/delivery-preview.service';
import { DeliveryEditService } from './delivery-edit/delivery-edit.service';
import { DeliveryNewService } from './delivery-new/delivery-new.service';


// routing
const routes: Routes = [
  {
    path: 'dn-new',
    component: DeliveryNewComponent,
    resolve: {
      Ias: DeliveryNewService
    },
    data: { animation: 'DeliveryNewComponent' }
  },
  {
    path: 'dn-list',
    component: DeliveryListComponent,
    resolve: {
      uls: DeliveryListService
    },
    data: { animation: 'DeliveryListComponent' }
  },
  {
    path: 'dn-preview/:id',
    component: DeliveryPreviewComponent,
    resolve: {
      data: DeliveryPreviewService
    },
    data: { path: 'user-view/:id', animation: 'DeliveryPreviewComponent' }
  },
  {
    path: 'dn-edit/:id',
    component: DeliveryEditComponent,
    resolve: {
      data: DeliveryEditService
    },
    data: { path: 'user-view/:id', animation: 'DeliveryEditComponent' }
  },
  {
    path: 'dn-preview',
    redirectTo: '/repair/delivery-note/dn-preview/YYYY' // Redirection
  },
  // {
  //   path: 'dn-edit',
  //   redirectTo: '/repair/delivery-note/dn-edit' // Redirection
  // }
];

@NgModule({
  declarations: [
    DeliveryEditComponent,
    DeliveryListComponent,
    DeliveryNewComponent,
    DeliveryPreviewComponent,
    // AddCustomerSidebarComponent,
    // SendInvoiceSidebarComponent,
    // AddPaymentSidebarComponent,
    // SendInvoiceSidebarPreviewComponent,
    // AddPaymentSidebarPreviewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CoreCommonModule,
    CoreDirectivesModule,
    Ng2FlatpickrModule,
    NgxDatatableModule,
    FormsModule,
    CorePipesModule,
    NgbModule,
    NgSelectModule,
    CoreSidebarModule
  ],
  providers: [DeliveryListService, DeliveryPreviewService, DeliveryEditService, DeliveryNewService],
  exports: [DeliveryListComponent]
})
export class DeliveryNoteModule { }
