import { Component, OnInit, AfterViewInit } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";
import { Category, Transaction } from 'src/app/models/transaction';
import { TransactionService } from 'src/app/services/transaction.service';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  showSpendingChart = false;
  showReportChart = false;


  labels = ["credit", "debet"]
  series = [0, 0]
  chart: ApexChart = {
    type: "donut"
  }
  title= {
    text: "Report of account"
  }


  labelsSpending = ["groceries", "technologies", "investment", "bills", "other"]
  seriesSpending = [0, 0, 0, 0, 0]
  chartSpending: ApexChart = {
    type: "donut"
  }
  titleSpending= {
    text: "Report of spending"
  }
  transactions: Transaction[] = [];
  constructor(private transactionService: TransactionService) {
    
  }

  ngOnInit(): void {
    this.transactionService.getTransactions().subscribe(trs => 
      {
        this.transactions = trs;
        this.transactions.forEach(t => {
          if(t.isDebet == false){
            this.series[0] += t.amount;
          } else {
            this.series[1] += t.amount;

            if (t.category == Category.Grocerries){
              this.seriesSpending[0] += t.amount;
            } else if (t.category == Category.Technologies){
              this.seriesSpending[1] += t.amount;
            } else if (t.category == Category.Investment){
              this.seriesSpending[2] += t.amount;
            } else if (t.category == Category.Bills){
              this.seriesSpending[3] += t.amount;
            } else {
              this.seriesSpending[4] += t.amount;
            }
          }
        })

        console.log("done")
      })
  }

  showSpendingChartClicked(){
    this.showSpendingChart = !this.showSpendingChart;
  }

  showReportChartClicked(){
    this.showReportChart = !this.showReportChart;
  }
}
