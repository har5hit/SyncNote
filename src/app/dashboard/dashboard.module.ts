import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormComponent } from '../form/form.component';
import { RouterModule, Route } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { NotesComponent } from '../notes/notes.component';
import { DataPopupComponent } from '../data-popup/data-popup.component';

import {
  MdButtonModule, MdInputModule,
  MdCardModule, MdListModule,
  MdGridListModule, MdSnackBarModule,
  MdCheckboxModule, MdRadioModule,
  MdProgressSpinnerModule,
  MdToolbarModule,
  MdDialogModule,
} from '@angular/material';


const dashRoutes: Route[] = [
  {
    path: '',
    component: DashboardComponent,
    children: [
	{
        path: '',
		        component: NotesComponent

      },
      {
        path: 'profile',
        component: FormComponent
      },
      {
        path: 'notes',
        component: NotesComponent
      }

    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdButtonModule,
    MdInputModule,
    MdCardModule,
    MdListModule,
    MdGridListModule,
    MdSnackBarModule,
    MdCheckboxModule,
    MdRadioModule,
    MdProgressSpinnerModule,
    MdToolbarModule,
    MdDialogModule,
    RouterModule.forChild(dashRoutes)
  ],
  declarations: [
    FormComponent,
    DashboardComponent,
    NotesComponent,
    DataPopupComponent
  ],
  entryComponents: [
  DataPopupComponent
  ],

  providers: [
  ]
})
export class DashboardModule { }
