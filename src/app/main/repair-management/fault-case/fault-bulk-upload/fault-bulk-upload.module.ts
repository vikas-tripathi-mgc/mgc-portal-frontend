import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaultBulkUploadComponent } from './fault-bulk-upload.component';
import { CoreCommonModule } from '@core/common.module';
import { FormsModule } from '@angular/forms';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { RouterModule, Routes } from '@angular/router';
import { CoreCardModule } from '@core/components/core-card/core-card.module';
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {
    path: 'fault-bulk-loader',
    component: FaultBulkUploadComponent,
    data: { animation: 'toastr' }
  }
];

@NgModule({
  declarations: [
    FaultBulkUploadComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule, CoreCommonModule, ContentHeaderModule, NgbModule, CoreCardModule, ToastrModule]
})
export class FaultBulkUploadModule { }
