import { Component } from '@angular/core';
import { Career, CareerService } from '../info/career.service';

@Component({
  selector: 'Career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent {
  careers: Career[] = [];

  ngOnInit(): void {
    this.careers = this.careerService.getCareers();
  }

  constructor(private careerService: CareerService) { }
}
