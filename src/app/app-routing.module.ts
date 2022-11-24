import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoneySendComponent } from './sites/money-send/money-send.component';
import { ProfilComponent } from './sites/profil/profil.component';
import { ReportComponent } from './sites/report/report.component';
import { TransactionComponent } from './sites/transaction/transaction.component';
import { TransactionsComponent } from './sites/transactions/transactions.component';

const routes: Routes = [
  {path: 'profil', component: ProfilComponent},
  {path: 'transactions', component: TransactionsComponent},
  {path: 'transactions/:id', component: TransactionComponent},
  {path: 'report', component: ReportComponent},
  {path: 'money-send', component: MoneySendComponent},
  {path: '', redirectTo: '/profil', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
