import { Component } from '@angular/core';

@Component({
  selector: 'LayoutPartsTechs',
  templateUrl: './techs.component.html',
  styleUrls: ['./techs.component.scss']
})
export class TechsComponent {
  techs: {
    name: string,
    icon: string
  }[] = [
    {
      name: 'Angular',
      icon: 'https://icongr.am/devicon/angularjs-original.svg?size=128&color=currentColor'
    },
    {
      name: 'Express',
      icon: 'https://icongr.am/devicon/express-original.svg?size=128&color=ffffff'
    },
    {
      name: 'Node.js',
      icon: 'https://icongr.am/devicon/nodejs-original.svg?size=128&color=currentColor'
    },
    {
      name: 'TypeScript',
      icon: 'https://icongr.am/devicon/typescript-original.svg?size=128&color=currentColor'
    },
    {
      name: 'Tailwind',
      icon: 'https://www.svgrepo.com/show/374118/tailwind.svg'
    },
    {
      name: 'Scss',
      icon: 'https://icongr.am/devicon/sass-original.svg?size=128&color=currentColor'
    },
    {
      name: 'VercelKV',
      icon: 'https://www.svgrepo.com/show/527682/database.svg'
    }
  ]
}
