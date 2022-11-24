import { Component, OnInit } from '@angular/core';
import { Category, Transaction } from 'src/app/models/transaction';
import { NgForm } from '@angular/forms';
import { TransactionService } from 'src/app/services/transaction.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-money-send',
  templateUrl: './money-send.component.html',
  styleUrls: ['./money-send.component.scss']
})
export class MoneySendComponent implements OnInit {
  errorList: string[] = []

  newTransaction: Transaction = {
    owner: "",
    category: Category.None,
    isDebet: true,
    amount: 1,
    date: new Date(),
    iban: ""
  }

  constructor(
    private transService: TransactionService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }
  submit(){
    
    if (this.newTransaction.amount <= 0){
      this.errorList.push("Amount has to be more than 0.");
    }
    if (this.newTransaction.iban.length != 32){
      this.errorList.push("Iban has to be 32 characters long.")
    }
    if (this.newTransaction.owner.length < 3){
      this.errorList.push("Owner field is too short");
    }

    if (this.errorList.length == 0){
      this.newTransaction.date = new Date();
      this.transService.addTransaction(this.newTransaction).subscribe(t => {
        this.router.navigate(['/transactions'])
      }, e => {});
    }
  }
}