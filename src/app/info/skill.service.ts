import { Injectable } from '@angular/core';
import Fuse from 'fuse.js';

interface Skill {
  name: string;
  level: number;
  icon?: string; // アイコン
  case?: string; // 実際の事例(Github)
}

interface Skills {
  [key: string]: Skill[];
}

@Injectable({
  providedIn: 'root',
})
export class SkillService {
  constructor() {}

  protected skills: Skills = {
    Language: [
      {
        name: 'HTML',
        level: 100,
        icon: "https://www.svgrepo.com/show/452228/html-5.svg"
      },
      {
        name: 'CSS',
        level: 100,
        icon: "https://www.svgrepo.com/show/452185/css-3.svg"
      },
      {
        name: 'JavaScript',
        level: 100,
        icon: "https://www.svgrepo.com/show/452045/js.svg"
      },
      {
        name: 'TypeScript',
        level: 100,
        icon: "https://www.svgrepo.com/show/354478/typescript-icon.svg"
      },
      {
        name: 'C#',
        level: 100,
        icon: "https://www.svgrepo.com/show/452184/csharp.svg"
      },
      {
        name: 'C/C++',
        level: 100,
        icon: "https://www.svgrepo.com/show/373528/cpp3.svg"
      },
      {
        name: 'Python',
        level: 100,
        icon: "https://www.svgrepo.com/show/354238/python.svg"
      },
      {
        name: 'PHP',
        level: 100,
        icon: "https://www.svgrepo.com/show/373969/php2.svg"
      },
      // {
      //   name: 'Go',
      //   level: 100,
      // },
      // {
      //   name: 'Rust',
      //   level: 100,
      // },
      // {
      //   name: 'R',
      //   level: 100,
      // },
    ],
    'Framework-Library': [
      {
        name: 'Angular',
        level: 100,
        icon: "https://icongr.am/devicon/angularjs-original.svg?size=128&color=currentColor"
      },
      {
        name: 'React',
        level: 100,
        icon: "https://www.svgrepo.com/show/452092/react.svg"
      },
      {
        name: 'Vue',
        level: 100,
        icon: "https://www.svgrepo.com/show/354528/vue.svg"
      },
      {
        name: 'Svelte',
        level: 100,
        icon: "https://www.svgrepo.com/show/354416/svelte-icon.svg"
      },
      {
        name: 'VanJS',
        level: 100,
        icon: "https://www.svgrepo.com/show/407493/soft-ice-cream.svg"
      },
      {
        name: 'Next.js',
        level: 100,
        icon: "https://www.svgrepo.com/show/306466/next-dot-js.svg"
      },
      {
        name: 'Fresh',
        level: 100,
        icon: "https://www.svgrepo.com/show/406060/lemon.svg"
      },
      {
        name: 'Astro',
        level: 100,
        icon: "https://www.svgrepo.com/show/373446/astro.svg"
      },
      {
        name: 'Electron',
        level: 100,
        icon: "https://www.svgrepo.com/show/353689/electron.svg"
      },
      {
        name: 'Tauri',
        level: 100,
        icon: "https://tauri.app/meta/favicon-32x32.png"
      },
      {
        name: 'PReact',
        level: 100,
        icon: "https://www.svgrepo.com/show/354204/preact.svg"
      },
      {
        name: 'jQuery',
        level: 100,
        icon: "https://www.svgrepo.com/show/378431/jquery-fill.svg"
      },
      {
        name: 'And more...',
        level: 100,
        icon: "https://www.svgrepo.com/show/381623/elements.svg"
      },
    ],
    'CSS-Framework-Library': [
      {
        name: 'TailwindCSS',
        level: 100,
        icon: "https://www.svgrepo.com/show/354431/tailwindcss-icon.svg"
      },
      {
        name: 'UnoCSS',
        level: 100,
        icon: "https://www.svgrepo.com/show/491429/layout.svg"
      },
      {
        name: 'Twind',
        level: 100,
        icon: "https://twind.dev/assets/twind-logo.png"
      },
      {
        name: 'CSS modules',
        level: 100,
        icon: "https://www.svgrepo.com/show/501265/module.svg"
      },
      {
        name: 'Scss',
        level: 100,
        icon: "https://www.svgrepo.com/show/374067/scss2.svg"
      },
    ],
    Server: [
      {
        name: 'Hono',
        level: 100,
        icon: "https://hono.dev/favicon.ico"
      },
      {
        name: 'Oak',
        level: 100,
        icon: "https://www.svgrepo.com/show/481446/oak-leaf-1.svg"
      },
      {
        name: 'Express',
        level: 100,
        icon: "https://icongr.am/devicon/express-original.svg?size=128&color=ffffff"
      },
    ],
    "Others": [
      {
        name: 'Git / GitHub',
        level: 100,
        icon: "https://icongr.am/devicon/github-original.svg?size=128&color=ffffff"
      },
      {
        name: 'NodeJS',
        level: 100,
        icon: "https://www.svgrepo.com/show/354119/nodejs-icon.svg"
      },
      {
        name: 'Deno',
        level: 100,
        icon: "https://www.svgrepo.com/show/378789/deno.svg"
      },
      {
        name: 'Bun',
        level: 100,
        icon: "https://bun.sh/favicon.ico"
      },
      {
        name: 'NPM / YARN / PNPM',
        level: 100,
        icon: "https://www.svgrepo.com/show/505953/package.svg"
      },
      {
        name: 'VSCode',
        level: 100,
        icon: "https://www.svgrepo.com/show/374171/vscode.svg"
      },
      {
        name: 'VStudio',
        level: 100,
        icon: "https://www.svgrepo.com/show/443534/brand-visualstudio.svg"
      },
      {
        name: 'CRX',
        level: 100,
        icon: "https://www.svgrepo.com/show/63996/crx-file-format-symbol.svg"
      },
      {
        name: 'Deploy',
        level: 100,
        icon: "https://www.svgrepo.com/show/371821/deploy.svg"
      },
      {
        name: 'Blender',
        level: 100,
        icon: "https://www.svgrepo.com/show/353488/blender.svg"
      },
      {
        name: 'CTF',
        level: 100,
        icon: "https://www.svgrepo.com/show/527780/lock-unlocked.svg"
      },
      {
        name: 'Bash / Shell',
        level: 100,
        icon: "https://www.svgrepo.com/show/514087/console.svg"
      },
    ],
  };

  public getSkills(): Skills {
    return this.skills;
  }

  public searchSkill(str: string): Skills {
    let skills: Skills = this.skills;

    const keys = Object.keys(skills);

    for (let i: number = 0; i < keys.length; i++) {
      const skillKey = keys[i];
      const skillArray = skills[skillKey];
      skills[skillKey] = this.AmbiguousSearch(str, skillArray);
    }

    return skills;
  }

  private AmbiguousSearch(str: string, skillsArray: Skill[]): Skill[] {
    const options = {
      threshold: 0.5,
      keys: ['name']
    };

    const fuse: Fuse<Skill> = new Fuse(skillsArray, options);

    return fuse.search(str).map((x) =>  x.item);
  }
}
