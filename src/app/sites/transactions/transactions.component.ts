import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/models/transaction';
import { TransactionService } from '../../services/transaction.service';
import { Category } from 'src/app/models/transaction';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  Category = Category
  _transactions: Transaction[] = []
  get transactions(): Transaction[] {
    return this._transactions;
  }

  get transactionSum(): number {
    let num = 0;
    for (let t of this.transactions){
      if (t.isDebet){
        num -= t.amount;
      } else {
        num += t.amount;
      }
    }

    return num;
  }

  set transactions(value: Transaction[]){
    if (value != null){
      this._transactions = value;
    }
  }

  constructor(private transService: TransactionService) { }

  ngOnInit(): void {
    this.transService.getTransactions().subscribe((transactions) => {
      console.log(transactions);
      this.transactions = transactions
    });
  }
}
