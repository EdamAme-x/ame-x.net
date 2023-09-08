import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { 

    VueHtml: any = `
      <button v-on:click="decrement">-</button>
      {{ num }}
      <button v-on:click="increment">+</button>
    `;

    VueScript: string = `
      new Vue({
        el: '#vue-test',
        data: {
          num: 0
        },
        methods: {
          increment() {
            this.num++
          },
          decrement() {
            this.num--
          }
        }
      })
    `;

    constructor(private sanitizer: DomSanitizer) {
      this.VueHtml = sanitizer.bypassSecurityTrustHtml(this.VueHtml);
    }
}
