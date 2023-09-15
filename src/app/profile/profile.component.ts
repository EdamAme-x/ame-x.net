import { Component } from '@angular/core';
import { SkillService } from '../info/skill.service';

type childSkills = {
  [key: string]: string | number
}[];

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  test: string = '';

  ngOnInit() {
    this.test = JSON.stringify(this.skillService.searchSkill('h'));
    if (typeof window !== 'undefined') {
      this.isInClient = true;
    }
  }

  constructor(private skillService: SkillService) {}

  isInClient: boolean = false;

  skills_all: {[key: string]: any[]} = this.skillService.getSkills();
  
  skill_Language: childSkills = this.skills_all['Language'];
  skill_Framework_Library: childSkills = this.skills_all['Framework-Library'];
  skill_CSS_Framework: childSkills = this.skills_all['CSS-Framework-Library'];
  skill_Others: childSkills = this.skills_all['Others'];

}
