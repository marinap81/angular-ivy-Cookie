import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Colours } from './models/Colours.enum';
import { Cookie } from './models/Cookie';
import { CookieViewComponent } from './Components/cookie-view/cookie-view.component';
import { CookieAddComponent } from './Components/cookie-add/cookie-add.component';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
//import { CookieAddComponent } from './cookie-add/cookie-add.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, CookieViewComponent, CookieAddComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
