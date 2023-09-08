import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'Icon',
  templateUrl: './icon.component.html',
  styleUrls: []
})
export class IconComponent implements OnInit {
  @Input() size: string | undefined;
  @Input() type: string | undefined;

  constructor() {}

  ngOnInit() {
    if (this.size === undefined) {
      this.size = '100px';
    }

    if (this.type === undefined) {
      this.type = '50%';
    }

  }
}
