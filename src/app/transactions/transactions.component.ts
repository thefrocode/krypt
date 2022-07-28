import { Component, OnInit } from '@angular/core';
import transactions from '../utils/dummyData.json'
import Utils from '../utils/utils'
@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  transactions = transactions
  constructor() { }

  ngOnInit(): void {
  }

}
