import { Component } from '@angular/core';
import { HashService } from 'src/app/utils/hash.service';

@Component({
  selector: '_Xxx',
  templateUrl: './xxx.component.html',
  styleUrls: ['./xxx.component.scss'],
})
export class XxxComponent {
  passwordHash: string =
    '73d8424e4dfd9b377f23714ddf6451d241c6dfe2739337ac2c9d714ec242d30a';
  password: string = '';

  constructor(private hash: HashService) {}

  guessPassword() {
    if (this.hash.PowerHash(this.password) === this.passwordHash) {
      alert('Password is correct');
      alert(' Please do send me an DM.')
    }
  }

  inputPassword(e: Event) {
    this.password = (e.target as HTMLInputElement).value;
  }
}
