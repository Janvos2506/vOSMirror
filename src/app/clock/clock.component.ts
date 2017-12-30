import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  public now: Date = new Date();
  public day: String;
  public month: String;
  days: string[] = ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'];
  months: string[] = ['Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'October', 'November', 'December'];

  constructor() {

    setInterval(() => {
      this.now = new Date();
      this.day = this.days[this.now.getDay()];
      this.month = this.months[this.now.getUTCMonth()];
    }, 1000);
  }

  ngOnInit() {
  }



}
