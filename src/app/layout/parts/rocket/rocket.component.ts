import { Component } from '@angular/core';

@Component({
  selector: 'LayoutPartsRocket',
  templateUrl: './rocket.component.html',
  styleUrls: ['./rocket.component.scss']
})
export class RocketComponent {

  fired: number = 0;

  firing() {
    // add & refresh fried
    fetch('/model/post-fly');
    this.fired++;
  }

  ngOnInit() {
    if (typeof window === 'undefined') {
      return;
    }

    fetch('/model/get-fly').then(res => res.json()).then(d => {
      this.fired = parseInt(d.data);
    })
  }
}
