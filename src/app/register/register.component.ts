import { Component, OnInit } from '@angular/core';
import { FbService } from '../services/fb.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public fb: FbService) { }

  ngOnInit() {
  }

  register(form: any) {
    this.fb.register(form.email, form.pwd).then((data)=>{
      alert(data);
      
    }).
      catch((err) => alert(err));
  }

}
