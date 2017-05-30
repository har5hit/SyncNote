import { Component, OnInit } from '@angular/core';
import { FbService } from '../services/fb.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public fb:FbService,public router:Router) { }

  ngOnInit() {
  }

 logout(){
   this.fb.logout().then((data)=>{
     console.log(data)
   },(err)=>console.log(err));
  }


}
