import { Component } from '@angular/core';
import { HashService } from './utils/hash.service';

@Component({
  selector: 'root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent { 
  constructor(private HashService: HashService) { }

  ngOnInit() {
    console.log(this.HashService.PowerHash('test'))
  }
}
