import { Component } from '@angular/core';

@Component({
  selector: 'LayoutHeader',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isOpen = false;
  changeMenu() {
    this.isOpen = !this.isOpen;
  }

  toPage(url: string) {
    window.location.href = url;
  }
}
