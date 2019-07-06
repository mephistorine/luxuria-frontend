import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'lux-auth-container',
  templateUrl: './auth-container.component.html',
  styleUrls: [ './auth-container.component.css' ]
})
export class AuthContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('auth')
  }

}
