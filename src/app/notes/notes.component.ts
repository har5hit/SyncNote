import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { DataPopupComponent } from '../data-popup/data-popup.component';
import { FbService } from '../services/fb.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  data: FirebaseListObservable<Note[]>;

  constructor(public dialog: MdDialog, public fb: FbService) {
    this.data = fb.getNotes()
  }

  ngOnInit() {

  }
  newPost() {
    var key = this.fb.getNotesReference().push().key;
    this.openPopup(key,"","");
  }

  openPopup(key:any,title:string,content:string) {
    let dialogRef = this.dialog.open(DataPopupComponent)
    dialogRef.componentInstance.setdata(key,title,content);
    dialogRef.afterClosed().subscribe((data: any) => {
      this.fb.getNotesReference().child(key).set(new Note(data.key, data.title, data.content));
    }, (err) => console.log(err))
  }

  updatePost(key: any,title:string,content:string) {
    this.openPopup(key,title,content);
  }

deletePost(key:any)
{
  this.fb.getNotesReference().child(key).remove()
}


}

export class Note {
  constructor(public id, public title: string, public content: string) { };
}