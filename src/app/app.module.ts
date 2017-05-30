import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdButtonModule, MdInputModule,
  MdCardModule, MdListModule,
  MdGridListModule, MdSnackBarModule,
  MdCheckboxModule, MdRadioModule,
  MdProgressSpinnerModule,
} from '@angular/material';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Route } from '@angular/router';
import { environment } from '../environments/environment';

import { FbModule } from './services/fb.module';
import { AngularFireModule } from 'angularfire2';


const rootRoutes: Route[] = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule',
  
},
  {
    path: '',
    component: LoginComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MdButtonModule,
    MdInputModule,
    MdCardModule,
    MdListModule,
    MdGridListModule,
    MdSnackBarModule,
    MdCheckboxModule,
    MdRadioModule,
    MdProgressSpinnerModule,
    FbModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot(rootRoutes)
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
