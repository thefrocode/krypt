import { Component, OnInit } from '@angular/core';

//import logo from '../../assets/images/logo.png'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  nav_items=["Market", "Exchange", "Tutorials", "Wallets"]
  constructor() { }

  ngOnInit(): void {
  }

}
