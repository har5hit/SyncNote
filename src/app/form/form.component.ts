import { Component, OnInit } from '@angular/core';
import { MdSnackBar } from '@angular/material';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  isloaded: boolean = false;
  ngOnInit() {

  }

  data: FirebaseListObservable<Person[]>;

  // data:Array<Person>=[];

  constructor(public snackBar: MdSnackBar, db: AngularFireDatabase) {
    this.data = db.list('/items');
    this.data.subscribe((data:any)=> {this.isloaded=true;
  console.log("executed");});
  }

  onSubmit(form: any) {
    console.log(form);
    this.data.push(new Person(form.name, form.email, form.mobile, form.gender))
      .then((message: any) => console.log("suucess is" + message))
      .catch((error: Error) => console.log("err is" + error));
    this.snackBar.open("Added Successfully!");

  }

}


export class Person {
  constructor(public name: String, public email: String, public mobile: number, public gender: String) { };
}
