import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FbService } from './fb.service';

@NgModule({
  imports: [
    CommonModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
  ],
  declarations: [],
  providers:[FbService]
})
export class FbModule { }
