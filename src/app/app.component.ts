import { Component } from '@angular/core';

export class Person{

id:number;
name: String;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app works!';

  isError:boolean;

	//data:Person[]=[{id:20,name:"lol"},{id:20,name:"lol"},{id:20,name:"lol"},{id:20,name:"lol"}];

	submit(v1:number,v2:String)
  {
      console.log("logging:  "+v1+v2)
  }

  onSubmit(form:any)
  {
    console.log(form);
  }
}


