import { Component } from '@angular/core';

@Component({
  selector: 'LayoutPartsRocket',
  templateUrl: './rocket.component.html',
  styleUrls: ['./rocket.component.scss'],
})
export class RocketComponent {
  fired: number = 0;

  firing() {
    // add & refresh fried
    fetch('/model/post-fly?key=' + Math.random().toString(16), {});
    this.fired++;
  }

  ngOnInit() {
    // @ts-ignore
    if (typeof window === 'undefined' || window._after_fried_get === 'end') {
      return;
    }

    fetch('/model/get-fly?key=' + Math.random().toString(16), {})
      .then((res) => res.json())
      .then((d) => {
        this.fired = parseInt(d.data);
        fetch('/model/post-fly?key=' + Math.random().toString(16)).then(() => {
          this.fired++;
        });
        //@ts-ignore
        window._after_fried_get = 'end';
      });
  }
}
