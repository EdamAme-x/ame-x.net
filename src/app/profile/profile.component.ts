import { Component } from '@angular/core';
import { SkillService } from '../info/skill.service';

type childSkills = {
  [key: string]: any;
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

  haveIinvert(lang: any): string | undefined {
    return this.skillService.haveIinvert(lang);
  }

  isInClient: boolean = false;

  skills_all: { [key: string]: any[] } = this.skillService.getSkills();
  defines = this.skillService.defines;

  skill_Language: childSkills = this.skills_all['Language'];
  skill_Framework_Library: childSkills = this.skills_all['Framework-Library'];
  skill_CSS_Framework: childSkills = this.skills_all['CSS-Framework-Library'];
  skill_Server: childSkills = this.skills_all['Server'];
  skill_Others: childSkills = this.skills_all['Others'];

  skills: childSkills = this.skill_Language.concat(
    this.skill_Framework_Library,
    this.skill_CSS_Framework,
    this.skill_Server,
    this.skill_Others
  );

  searchSkill(e: Event): void | undefined {
    const value = (e.target as HTMLInputElement).value;
    console.log(value);

    if (value == '') {
      this.skills = this.skill_Language.concat(
        this.skill_Framework_Library,
        this.skill_CSS_Framework,
        this.skill_Server,
        this.skill_Others
      );

      return undefined;
    }

    let results: childSkills = [];
    const searchResults = this.skillService.searchSkill(value);
    console.log(searchResults);

    for (const key in searchResults) {
      results = results.concat(searchResults[key]);
    }

    this.skills = results;
  }
}
