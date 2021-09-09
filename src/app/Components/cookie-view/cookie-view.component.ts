import { Component, Input, OnInit } from '@angular/core';
import { Cookie } from '../../models/Cookie';

@Component({
  selector: 'app-cookie-view',
  templateUrl: './cookie-view.component.html',
  styleUrls: ['./cookie-view.component.css']
})
export class CookieViewComponent implements OnInit {
  @Input() selectedCookie: Cookie;

  constructor() { }

  ngOnInit() {
  }

}

