import { Component, OnInit } from '@angular/core';
import { faEthereum } from '@fortawesome/free-brands-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  ethereum = faEthereum
  info = faInfoCircle
  constructor() { }

  ngOnInit(): void {
  }
  connectWallet(){

  }

}
