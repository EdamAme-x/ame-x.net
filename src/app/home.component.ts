import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent { 

    VueHtml: any = `
      <button v-on:click="decrement">-</button>
      <input type="text" v-model="num">
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
