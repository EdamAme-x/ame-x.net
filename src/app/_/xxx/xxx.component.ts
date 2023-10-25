import { Component } from '@angular/core';
import { HashService } from 'src/app/utils/hash.service';

@Component({
  selector: '_Xxx',
  templateUrl: './xxx.component.html',
  styleUrls: ['./xxx.component.scss'],
})
export class XxxComponent {
  passwordHash: string =
    'bd8dcd8f38b30b56d99f7a9baabd1e1428bc0415bfdb4306a8f9f829500e3cda';
  password: string = '';

  constructor(private hash: HashService) {}

  guessPassword() {
    // console.log(this.hash.PowerHash(this.password))
    if (this.hash.PowerHash(this.password) == this.passwordHash) {
      alert('Password is correct');
      alert(' Please do send me an DM.');
    }
  }

  inputPassword(e: Event) {
    this.password = (e.target as HTMLInputElement).value;
  }
}
