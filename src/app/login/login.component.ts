import { Component, OnInit } from '@angular/core';
import { FbService } from '../services/fb.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(public fb:FbService,public  router:Router) { 
  }

  ngOnInit() {
  }


  login(form:any)
  {
      this.fb.login(form.email, form.pwd).then((data)=>this.router.navigate(["dashboard"])).catch((err) => alert(err));
  }

}


