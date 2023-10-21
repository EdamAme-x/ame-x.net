import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  cpuUsage: number = 0;
  memUsage: number = 0;

  ngOnInit() {
    if (typeof window == 'undefined') {
      return;
    }

    fetch('/model/usage')
      .then((res) => res.json())
      .then((d) => {
        this.cpuUsage = d.cpu / 10000;
        this.memUsage = Math.floor((d.mem / 1024 / 1024) * 100) / 10;
      });
    setInterval(() => {
      this.cpuUsage =
        Math.floor((this.cpuUsage + (Math.random() - 0.5)) * 10) / 10;
      if (this.cpuUsage < 0) {
        this.cpuUsage += 1.2;
        this.cpuUsage = Math.floor(this.cpuUsage * 10) / 10;
      } else if (this.cpuUsage > 100) {
        this.cpuUsage -= 1.2;
        this.cpuUsage = Math.floor(this.cpuUsage * 10) / 10;
      }

      this.memUsage =
        Math.floor((this.memUsage + (Math.random() - 5)) * 10) / 10;
      if (this.memUsage < 0) {
        this.memUsage += 12;
        this.memUsage = Math.floor(this.memUsage * 10) / 10;
      }
    }, 1000);
  }

}
