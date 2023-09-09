import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})

export class HashService {

  constructor() { }

  public PowerHash(str: string) {
    return this.sha256(this.md5(this.sha512(str)));
  }

  private sha256(str: string) {
    return CryptoJS.SHA256(str).toString();
  }

  private sha512(str: string) {
    return CryptoJS.SHA512(str).toString();
  }

  private md5(str: string) {
    return CryptoJS.MD5(str).toString();
  }
}
