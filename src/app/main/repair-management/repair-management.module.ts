import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';

// routing
const routes: Routes = [
  {
    path: 'fault-case',
    loadChildren: () => import('./fault-case/fault-case.module').then(m => m.FaultCaseModule)
  },
  {
    path: 'delivery-note',
    loadChildren: () => import('./delivery-note/delivery-note.module').then(m => m.DeliveryNoteModule)
  },
  {
    path: 'rma-lookup',
    loadChildren: () => import('./rma-lookup/rma-lookup.module').then(m => m.RmaLookupModule)
  },
  {
    path: 'contract-check',
    loadChildren: () => import('./contract-check/contract-check.module').then(m => m.ContractCheckModule)
  }
];

FullCalendarModule.registerPlugins([dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]);

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
// export class AppsModule { }

export class RepairManagementModule { }
