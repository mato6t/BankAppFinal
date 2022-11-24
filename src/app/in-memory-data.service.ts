import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Profil } from './models/profil';
import { Category, Transaction } from './models/transaction';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let ownersList: Owner[] = [
      {name: 'Work', iban: "SK125000000000000170648789890", category: Category.Work, isDebet: false},
      {name:'Billa', iban: "SK125000000000000170648489890", category: Category.Grocerries, isDebet: true},
      {name: 'Apple', iban: "EN125000000000000170648489890", category: Category.Technologies, isDebet: true},
      {name: 'EIC', iban: "CZ125000000000000170648489890", category: Category.Investment, isDebet: true}
    ]
    var transactions: Transaction[] = [
      {
        id: 12,
        owner: ownersList[0].name,
        amount: 1000,
        category: ownersList[0].category,
        isDebet: ownersList[0].isDebet,
        date: new Date(),
        iban: ownersList[0].iban
      },
      {
        id: 13,
        owner: ownersList[1].name,
        amount: 100,
        category: ownersList[1].category,
        isDebet: ownersList[1].isDebet,
        date: new Date(),
        iban: ownersList[1].iban
      },
      {
        id: 14,
        owner: ownersList[3].name,
        amount: 100,
        category: ownersList[3].category,
        isDebet: ownersList[3].isDebet,
        date: new Date(),
        iban: ownersList[3].iban
      },
      {
        id: 15,
        owner: ownersList[2].name,
        amount: 100,
        category: ownersList[2].category,
        isDebet: ownersList[2].isDebet,
        date: new Date(),
        iban: ownersList[2].iban
      },
    ];
    console.log(transactions);
    var profils: Profil[] = [{id: 12, name: "Ferko", surname: "Mrkvicka", address: "Moja Adresa", correspondanceAddress: "Moja korespondencna adresa", cardNumber: 1234567812392242, titleAfterName: "", titleBeforeName: "", imgUrl: ""}];

    return {transactions: transactions, profils: profils};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  /*genId(heroes: any[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }*/
}

export interface Owner {
  name: string;
  iban: string;
  category: Category;
  isDebet: boolean;
}
