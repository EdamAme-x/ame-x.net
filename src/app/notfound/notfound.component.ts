import { Component } from '@angular/core';
import { routes } from '../app-routing.module';
import Fuse from 'fuse.js';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss'],
})
export class NotfoundComponent {
  missingPath: string = '';
  maybePath: string = '/home';

  ngOnInit() {
    if (typeof window === 'undefined') {
      return;
    }
    this.missingPath = window.location.pathname.slice(1);

    const options = {
      threshold: 0.5,
      keys: ['path'],
    };

    const fuse: Fuse<any> = new Fuse(routes, options);

    this.maybePath =
      '/' + fuse.search(this.missingPath).map((x) => x.item)[0].path;
  }
}
