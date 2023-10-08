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
  }
}
