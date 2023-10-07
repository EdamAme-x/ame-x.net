import { Injectable } from '@angular/core';
import Fuse from 'fuse.js';

interface Skill {
  name: string;
  level: 'Pro' | 'Specialty' | "One's forte" | 'Reasonably good' | 'Beginner';
  icon?: string; // アイコン
  config?: any;
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
        level: 'Pro',
        icon: 'https://www.svgrepo.com/show/452228/html-5.svg',
      },
      {
        name: 'CSS',
        level: 'Pro',
        icon: 'https://www.svgrepo.com/show/452185/css-3.svg',
      },
      {
        name: 'JavaScript',
        level: 'Pro',
        icon: 'https://www.svgrepo.com/show/452045/js.svg',
      },
      {
        name: 'TypeScript',
        level: 'Pro',
        icon: 'https://www.svgrepo.com/show/354478/typescript-icon.svg',
      },
      {
        name: 'C#',
        level: 'Pro',
        icon: 'https://www.svgrepo.com/show/452184/csharp.svg',
      },
      {
        name: 'C/C++',
        level: 'Pro',
        icon: 'https://www.svgrepo.com/show/373528/cpp3.svg',
      },
      {
        name: 'Python',
        level: 'Pro',
        icon: 'https://www.svgrepo.com/show/354238/python.svg',
      },
      {
        name: 'PHP',
        level: 'Pro',
        icon: 'https://www.svgrepo.com/show/373969/php2.svg',
      },
      {
        name: 'Zig',
        level: 'Pro',
        icon: 'https://avatars.githubusercontent.com/u/27973237?s=160&v=4',
      },
    ],
    'Framework-Library': [
      {
        name: 'Angular',
        level: 'Pro',
        icon: 'https://icongr.am/devicon/angularjs-original.svg?size=128&color=currentColor',
      },
      {
        name: 'React',
        level: 'Pro',
        icon: 'https://www.svgrepo.com/show/452092/react.svg',
      },
      {
        name: 'Vue',
        level: 'Pro',
        icon: 'https://www.svgrepo.com/show/354528/vue.svg',
      },
      {
        name: 'Svelte',
        level: 'Pro',
        icon: 'https://www.svgrepo.com/show/354416/svelte-icon.svg',
      },
      {
        name: 'VanJS',
        level: 'Pro',
        icon: 'https://www.svgrepo.com/show/407493/soft-ice-cream.svg',
      },
      {
        name: 'Naxt.js',
        level: 'Pro',
        icon: 'https://github.com/EdamAme-x/Naxt.js/raw/main/assets/icon.png',
      },
      {
        name: 'Next.js',
        level: 'Pro',
        icon: 'https://www.svgrepo.com/show/306466/next-dot-js.svg',
        config: {
          invert: 'invert-x',
        },
      },
      {
        name: 'Nuxt.js',
        level: 'Pro',
        icon: 'https://www.svgrepo.com/show/354131/nuxt-icon.svg',
      },
      {
        name: 'Fresh',
        level: 'Pro',
        icon: 'https://www.svgrepo.com/show/406060/lemon.svg',
      },
      {
        name: 'Astro',
        level: 'Pro',
        icon: 'https://www.svgrepo.com/show/373446/astro.svg',
      },
      {
        name: 'Electron',
        level: 'Pro',
        icon: 'https://www.svgrepo.com/show/353689/electron.svg',
      },
      {
        name: 'Tauri',
        level: 'Pro',
        icon: 'https://tauri.app/meta/favicon-32x32.png',
      },
      {
        name: 'PReact',
        level: 'Pro',
        icon: 'https://www.svgrepo.com/show/354204/preact.svg',
      },
      {
        name: 'Solid',
        level: 'Pro',
        icon: 'https://avatars.githubusercontent.com/u/79226042?s=280&v=4',
      },
      {
        name: 'Lit',
        level: 'Pro',
        icon: 'https://pbs.twimg.com/media/F7mGQz6awAAzO_K?format=png&name=small',
      },
      {
        name: 'jQuery',
        level: 'Pro',
        icon: 'https://static-00.iconduck.com/assets.00/jquery-icon-2018x2048-nrk2gcih.png',
      },
    ],
    'CSS-Framework-Library': [
      {
        name: 'TailwindCSS',
        level: 'Pro',
        icon: 'https://www.svgrepo.com/show/354431/tailwindcss-icon.svg',
      },
      {
        name: 'UnoCSS',
        level: 'Pro',
        icon: 'https://www.svgrepo.com/show/491429/layout.svg',
        config: {
          invert: 'invert-x',
        },
      },
      {
        name: 'Twind',
        level: 'Pro',
        icon: 'https://twind.dev/assets/twind-logo.png',
      },
      {
        name: 'CSS modules',
        level: 'Pro',
        icon: 'https://www.svgrepo.com/show/501265/module.svg',
        config: {
          invert: 'invert-x',
        },
      },
      {
        name: 'Scss',
        level: 'Pro',
        icon: 'https://www.svgrepo.com/show/374067/scss2.svg',
      },
    ],
    Server: [
      {
        name: 'Hono',
        level: 'Pro',
        icon: 'https://hono.dev/favicon.ico',
      },
      {
        name: 'Oak',
        level: 'Pro',
        icon: 'https://www.svgrepo.com/show/481446/oak-leaf-1.svg',
        config: {
          invert: 'invert-x',
        },
      },
      {
        name: 'Express',
        level: 'Pro',
        icon: 'https://icongr.am/devicon/express-original.svg?size=128&color=ffffff',
      },
    ],
    Others: [
      {
        name: 'Git / GitHub',
        level: 'Pro',
        icon: 'https://icongr.am/devicon/github-original.svg?size=128&color=ffffff',
        config: {
          invert: 'invert-x',
        },
      },
      {
        name: 'NodeJS',
        level: 'Pro',
        icon: 'https://www.svgrepo.com/show/354119/nodejs-icon.svg',
      },
      {
        name: 'Deno',
        level: 'Pro',
        icon: 'https://www.svgrepo.com/show/378789/deno.svg',
      },
      {
        name: 'Bun',
        level: 'Pro',
        icon: 'https://bun.sh/favicon.ico',
      },
      {
        name: 'PackageManager',
        level: 'Pro',
        icon: 'https://www.svgrepo.com/show/505953/package.svg',
        config: {
          invert: 'invert-x',
        },
      },
      {
        name: 'VSCode',
        level: 'Pro',
        icon: 'https://www.svgrepo.com/show/374171/vscode.svg',
      },
      {
        name: 'VStudio',
        level: 'Pro',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Visual_Studio_Icon_2019.svg/1200px-Visual_Studio_Icon_2019.svg.png',
      },
      {
        name: 'CRX',
        level: 'Pro',
        icon: 'https://www.svgrepo.com/show/63996/crx-file-format-symbol.svg',
        config: {
          invert: 'invert-x',
        },
      },
      {
        name: 'Deploy',
        level: 'Pro',
        icon: 'https://www.svgrepo.com/show/371821/deploy.svg',
        config: {
          invert: 'invert-x',
        },
      },
      {
        name: 'Blender',
        level: 'Pro',
        icon: 'https://www.svgrepo.com/show/353488/blender.svg',
      },
      {
        name: 'CTF',
        level: 'Pro',
        icon: 'https://www.svgrepo.com/show/527780/lock-unlocked.svg',
        config: {
          invert: 'invert-x',
        },
      },
      {
        name: 'Bash / Shell',
        level: 'Pro',
        icon: 'https://www.svgrepo.com/show/514087/console.svg',
        config: {
          invert: 'invert-x',
        },
      },
      {
        name: 'And more...',
        level: 'Pro',
        icon: 'https://www.svgrepo.com/show/381623/elements.svg',
        config: {
          invert: 'invert-x',
        },
      },
    ],
  };

  public getSkills(): Skills {
    const newSKills = Object.assign({}, this.skills);
    return newSKills;
  }

  public searchSkill(str: string): Skills {
    let skills: Skills = this.getSkills();

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
      threshold: 0.2,
      keys: ['name'],
    };

    const fuse: Fuse<Skill> = new Fuse(skillsArray, options);

    return fuse.search(str).map((x) => x.item);
  }

  haveIinvert(lang: Skill): string | undefined {
    if (typeof lang.config?.invert !== 'undefined') {
      return 'invert-x';
    }

    return '';
  }

  defines: {
    name: 'Pro' | 'Specialty' | "One's forte" | 'Reasonably good' | 'Beginner';
    desc: string;
  }[] = [
    { name: 'Pro', desc: 'I can make mighty apps, only individuals.' },
    { name: 'Specialty', desc: 'I have varied knowledge of it.' },
    { name: "One's forte", desc: 'A good application can be built.' },
    { name: 'Reasonably good', desc: 'I have a little knowledge and skill.' },
    { name: 'Beginner', desc: "I'm a novice at it." },
  ];
}
