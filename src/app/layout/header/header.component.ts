import { Component } from '@angular/core';

@Component({
  selector: 'LayoutHeader',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isOpen = false;
  menuOpacity = 100;
  changeMenu() {
    this.isOpen = !this.isOpen;
  }

  toPage(url: string) {
    window.location.href = url;
  }

  ngAfterViewInit() {
    if (typeof window === 'undefined') {
      return;
    }

    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        this.menuOpacity = 0;
      } else {
        this.menuOpacity = 100
      }
    })
  }
}
