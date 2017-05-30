import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Note } from '../notes/notes.component';


@Component({
  selector: 'app-data-popup',
  templateUrl: './data-popup.component.html',
  styleUrls: ['./data-popup.component.css']
})
export class DataPopupComponent implements OnInit {

  title: string;
  content: string;

  constructor(public dialogRef: MdDialogRef<DataPopupComponent>) {  }

  ngOnInit() {
  }

  key: any;
  setdata(key,title,content) {
    this.key = key
    this.title=title
    this.content=content
    console.log("key set"+key)
  }


  add() {
    this.dialogRef.close({ 'key':this.key, 'title': this.title, 'content': this.content });
  }
}
