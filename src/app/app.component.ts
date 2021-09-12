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
  public Colours = Colours;
  nameNewCookie: string;
  newCookieColour: Colours;

  cookieListvar: Cookie[] = [
    {
      name: 'Marshmallow',
      colour: Colours.PINK
    },

    {
      name: 'Rockyroad',
      colour: Colours.BLUE
    }
  ];
  selectedCookie: Cookie; //used to display the cookie property in select box

  ngOnInit() {
    this.selectedCookie = this.cookieListvar[0];
  }

  createCookie() {
    this.cookieListvar.push(
      new Cookie(this.nameNewCookie, this.newCookieColour)
    ); //initialised but has error

    // this.cookieListvar.push({ ...this.addNewCookie });
  }
}
