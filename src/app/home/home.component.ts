import { Component } from '@angular/core';
import { cpuUsage } from 'process';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  cpuUsage: number = 0;

  ngOnInit() {
    if (typeof window == 'undefined') {
      return;
    }

    fetch('/model/cpuUsage')
      .then((res) => res.json())
      .then((d) => {
        this.cpuUsage = d.data / 10000;
      });
  }
}
