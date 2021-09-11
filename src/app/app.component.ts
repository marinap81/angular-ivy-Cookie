import { Component, OnInit, VERSION } from '@angular/core';
import { CookieViewComponent } from './Components/cookie-view/cookie-view.component';
import { CookieAddComponent } from './Components/cookie-add/cookie-add.component';
import { Cookie } from './models/Cookie';
import { Colours } from './models/Colours.enum';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cookieListvar: Cookie[] = [
    {
      name: 'Marshmallow',
      colour: Colours.PINK
    },

    {
      name: 'Rockyroad',
      colour: Colours.BROWN
    }
  ];
  selectedCookie: Cookie; //used to display the cookie property in select box

  //addNewCookie: Cookie = { name: '', colour: '' };//initialised but has error

  ngOnInit() {
    this.selectedCookie = this.cookieListvar[0];
  }

  createCookie() {
    
   // this.cookieListvar.push({ ...this.addNewCookie });
  } 
}
