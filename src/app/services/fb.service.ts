import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Injectable()
export class FbService {

  user: Observable<firebase.User>;

  currentuser: firebase.User;
  constructor(public db: AngularFireDatabase, public afAuth: AngularFireAuth, public route: Router) {
    this.user = afAuth.authState;
    console.log("fb service constructing")
    this.user.subscribe((curr) => {
      if (curr) {
                  this.route.navigate(["dashboard"])
                  console.log("send to dash")
                  this.currentuser=curr;
      } else {
        this.route.navigate([""])
                          console.log("send to login")
      }
    }, (err) => alert(err));
  }

  isAuthenticated(): boolean {
    return this.currentuser ? true : false;
  }




  register(email: string, pwd: string): firebase.Promise<any> {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, pwd)
  }


  login(email: string, pwd: string): firebase.Promise<any> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, pwd)
  }


  logout() {
    return this.afAuth.auth.signOut()
  }


  getNotes(){
    return this.db.list("/user-notes/"+this.currentuser.uid)
  }

  getNotesReference(){
    return this.db.database.ref("/user-notes/"+this.currentuser.uid)
  }

}

class User {
  constructor(public name: string, public email: string) { };
}