import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'Client',
  templateUrl: './client.component.html',
  styleUrls: []
})
export class ClientComponent {
  InClient: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.InClient = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
  }
}
