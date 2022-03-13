import { Component } from '@angular/core';
import { Users } from './users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App-Registro';
  topics= ['Angular','Vue','React'];
  userModel = new Users ('Rob Stewart','robertmiles@getMaxListeners.com',11548889,'Angular','tarde',true);
constructor(){
  console.log(this.userModel)
}
}

