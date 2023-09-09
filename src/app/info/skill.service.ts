import { Injectable } from '@angular/core';

interface Skill {
  name: string;
  level: number;
}

interface Skills {
  [key: string]: Skill[];
}

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor() { }

  public getSkills(): Skills {
    return {
      "Language": [
        {
          "name": "HTML",
          "level": 100
        },
        {
          "name": "CSS",
          "level": 100
        },
        {
          "name": "JavaScript",
          "level": 100
        },
        {
          "name": "TypeScript",
          "level": 100
        },
        {
          "name": "C#",
          "level": 100
        },
        {
          "name": "C/C++",
          "level": 100
        },
        {
          "name": "Python",
          "level": 100
        },
        {
          "name": "Java",
          "level": 100
        },
        {
          "name": "PHP",
          "level": 100
        },
        {
          "name": "Ruby",
          "level": 100
        },
        {
          "name": "Kotlin",
          "level": 100
        },
        {
          "name": "Swift",
          "level": 100
        },
        {
          "name": "Go",
          "level": 100
        },
        {
          "name": "Rust",
          "level": 100
        },
        {
          "name": "R",
          "level": 100
        }
      ],
      "Framework / Library": [
        {
          "name": "Angular",
          "level": 100
        },
        {
          "name": "React",
          "level": 100
        },
        {
          "name": "Vue",
          "level": 100
        },
        {
          "name": "Svelte",
          "level": 100
        },
        {
          "name": "VanJS",
          "level": 100
        },
        {
          "name": "Next.js",
          "level": 100
        },
        {
          "name": "Fresh",
          "level": 100
        },
        {
          "name": "Astro",
          "level": 100
        },
        {
          "name": "Electron",
          "level": 100
        },
        {
          "name": "Tauri",
          "level": 100
        },
        {
          "name": "PReact",
          "level": 100
        },
        {
          "name": "jQuery",
          "level": 100
        },
        {
          "name": "Webpack",
          "level": 100
        },
        {
          "name": "Other Library",
          "level": 100
        }
      ],
      "CSS Framework / Library": [
        {
          "name": "TailwindCSS",
          "level": 100
        },
        {
          "name": "UnoCSS",
          "level": 100
        },
        {
          "name": "Twind",
          "level": 100
        },
        {
          "name": "moduleCSS",
          "level": 100
        },
        {
          "name": "Sass",
          "level": 100
        }
      ],
      "Server": [
        {
          "name": "Hono",
          "level": 100
        },
        {
          "name": "Oak",
          "level": 100
        },
        {
          "name": "Express",
          "level": 100
        }
      ],
      "Others": [
        {
          "name": "Git / GitHub",
          "level": 100
        },
        {
          "name": "NodeJS",
          "level": 100
        },
        {
          "name": "Deno",
          "level": 100
        },
        {
          "name": "NodeJS",
          "level": 100
        },
        {
          "name": "NPM / YARN",
          "level": 100
        },
        {
          "name": "VSCode",
          "level": 100
        },
        {
          "name": "VStudio",
          "level": 100
        },
        {
          "name": "CRX",
          "level": 100
        },
        {
          "name": "Deno Deploy",
          "level": 100
        },
        {
          "name": "Blender",
          "level": 100
        },
        {
          "name": "CTF",
          "level": 100
        },
        {
          "name": "Bash",
          "level": 100
        }
      ]
    }
  }
}
