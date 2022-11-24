import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bank-app';
  active = '';

  @HostListener("window:resize", ["$event"])
  get isVertical():boolean {
    return window.innerWidth < 656;
  }
  
  constructor( private router: Router, private location: Location){}
  ngOnInit(){
    this.active = this.location.path().substring(1)
    this.location.onUrlChange(x => {
      this.active = this.location.path().substring(1);
    })
  }
}
