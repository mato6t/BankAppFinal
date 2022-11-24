import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { isNumber } from '@ng-bootstrap/ng-bootstrap/util/util';
import { Category, Transaction } from 'src/app/models/transaction';
import { ProfilService } from 'src/app/services/profil.service';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  id: number = 0;
  idecko: string | null = null;
  Category = Category;
  transaction: Transaction = {
    id: this.id,
    owner: "",
    amount: 0,
    category: Category.None,
    isDebet: true,
    date: new Date(),
    iban: ""
  };

  cardNumber: number = 0

  constructor(
    private activatedRout: ActivatedRoute,
    private transService: TransactionService,
    private profilService: ProfilService
    ) { }

  ngOnInit(): void {
    this.idecko = this.activatedRout.snapshot.paramMap.get('id');
    if (this.idecko != null){
      this.id = Number.parseFloat(this.idecko);
    }
    
    this.transService.getTransaction(this.id).subscribe((trans) => {
      this.transaction = trans;
    })

    this.profilService.getProfils().subscribe((ps) => this.cardNumber = ps[0].cardNumber)
  }

}
