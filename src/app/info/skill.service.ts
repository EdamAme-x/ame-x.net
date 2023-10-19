import { Injectable } from '@angular/core';
import Fuse from 'fuse.js';

interface Skill {
  name: string;
  level: 'Pro' | 'Specialty' | "One's forte" | 'Reasonably good' | 'Beginner';
  icon?: string; // アイコン
  config?: any;
  case?: string; // 実際の事例(Github)
  desc?: string;
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
        case: 'https://github.com/EdamAme-x?tab=repositories&q=&type=&language=html&sort=',
      },
      {
        name: 'CSS',
        level: 'Pro',
        icon: 'https://www.svgrepo.com/show/452185/css-3.svg',
        case: 'https://github.com/EdamAme-x?tab=repositories&q=&type=&language=css&sort=',
      },
      {
        name: 'JavaScript',
        level: 'Pro',
        icon: 'https://www.svgrepo.com/show/452045/js.svg',
        case: 'https://github.com/EdamAme-x?tab=repositories&q=&type=&language=javascript&sort=',
      },
      {
        name: 'TypeScript',
        level: 'Specialty',
        icon: 'https://www.svgrepo.com/show/354478/typescript-icon.svg',
        case: 'https://github.com/EdamAme-x?tab=repositories&q=&type=&language=typescript&sort=',
      },
      {
        name: 'C#',
        level: 'Reasonably good',
        icon: 'https://www.svgrepo.com/show/452184/csharp.svg',
      },
      {
        name: 'C/C++',
        level: 'Beginner',
        icon: 'https://www.svgrepo.com/show/373528/cpp3.svg',
      },
      {
        name: 'Python',
        level: 'Specialty',
        icon: 'https://www.svgrepo.com/show/354238/python.svg',
        case: 'https://github.com/EdamAme-x?tab=repositories&q=&type=&language=python&sort=',
      },
      {
        name: 'PHP',
        level: 'One\'s forte',
        icon: 'https://www.svgrepo.com/show/373969/php2.svg',
        case: 'https://github.com/EdamAme-x?tab=repositories&q=&type=&language=php&sort=',
      },
      {
        name: 'Zig',
        level: 'Reasonably good',
        icon: 'https://avatars.githubusercontent.com/u/27973237?s=160&v=4',
        case: 'https://github.com/EdamAme-x?tab=repositories&q=&type=&language=zig&sort=',
      },
    ],
    'Framework-Library': [
      {
        name: 'Angular',
        level: 'Specialty',
        icon: 'https://icongr.am/devicon/angularjs-original.svg?size=128&color=currentColor',
        case: 'https://github.com/EdamAme-x/ame-x.net',
      },
      {
        name: 'React',
        level: 'Pro',
        icon: 'https://www.svgrepo.com/show/452092/react.svg',
        case: 'https://github.com/EdamAme-x?tab=repositories&q=React&type=&language=&sort=',
      },
      {
        name: 'Vue',
        level: 'Reasonably good',
        icon: 'https://www.svgrepo.com/show/354528/vue.svg',
        case: 'https://github.com/EdamAme-x/Awesome-ToDo',
      },
      {
        name: 'Svelte',
        level: 'Reasonably good',
        icon: 'https://www.svgrepo.com/show/354416/svelte-icon.svg',
        case: 'https://github.com/EdamAme-x/Awesome-ToDo',
      },
      {
        name: 'VanJS',
        level: 'Reasonably good',
        icon: 'https://www.svgrepo.com/show/407493/soft-ice-cream.svg',
      },
      {
        name: 'XueryJS',
        level: 'Pro',
        icon: 'https://cdn.ame-x.net/Xuery.png',
      },
      {
        name: 'Naxt.js',
        level: 'Pro',
        icon: 'https://github.com/EdamAme-x/Naxt.js/raw/main/assets/icon.png',
        case: 'https://github.com/EdamAme-x/Naxt.js',
      },
      {
        name: 'Next.js',
        level: 'One\'s forte',
        icon: 'https://www.svgrepo.com/show/306466/next-dot-js.svg',
        config: {
          invert: 'invert-x',
        },
        case: 'https://github.com/EdamAme-x/s0u7a-net',
      },
      {
        name: 'Nuxt.js',
        level: 'Reasonably good',
        icon: 'https://www.svgrepo.com/show/354131/nuxt-icon.svg',
      },
      {
        name: 'Fresh',
        level: 'Pro',
        icon: 'https://www.svgrepo.com/show/406060/lemon.svg',
        case: 'https://github.com/Liberluna/Liberchat',
      },
      {
        name: 'Astro',
        level: 'Reasonably good',
        icon: 'https://www.svgrepo.com/show/373446/astro.svg',
        case: 'https://github.com/Liberluna/liberluna.github.io',
      },
      {
        name: 'Electron',
        level: 'One\'s forte',
        icon: 'https://www.svgrepo.com/show/353689/electron.svg',
      },
      {
        name: 'Tauri',
        level: 'Reasonably good',
        icon: 'https://tauri.app/meta/favicon-32x32.png',
      },
      {
        name: 'PReact',
        level: 'Specialty',
        icon: 'https://www.svgrepo.com/show/354204/preact.svg',
        case: 'https://github.com/EdamAme-x/Naxt.js',
      },
      {
        name: 'Solid',
        level: 'Reasonably good',
        icon: 'https://avatars.githubusercontent.com/u/79226042?s=280&v=4',
        case: 'https://github.com/EdamAme-x/Awesome-ToDo',
      },
      {
        name: 'Lit',
        level: 'Reasonably good',
        icon: 'https://pbs.twimg.com/media/F7mGQz6awAAzO_K?format=png&name=small',
        case: 'https://github.com/EdamAme-x/Awesome-ToDo',
      },
      {
        name: 'jQuery',
        level: 'One\'s forte',
        icon: 'https://static-00.iconduck.com/assets.00/jquery-icon-2018x2048-nrk2gcih.png',
        case: 'https://github.com/EdamAme-x?tab=repositories&q=jQuery&type=&language=&sort=',
      },
    ],
    'CSS-Framework-Library': [
      {
        name: 'TailwindCSS',
        level: 'Specialty',
        icon: 'https://www.svgrepo.com/show/354431/tailwindcss-icon.svg',
        case: 'https://github.com/EdamAme-x?tab=repositories&q=tailwindcss&type=&language=&sort=',
      },
      {
        name: 'UnoCSS',
        level: 'One\'s forte',
        icon: 'https://www.svgrepo.com/show/491429/layout.svg',
        config: {
          invert: 'invert-x',
        },
        case: 'https://github.com/EdamAme-x?tab=repositories&q=fresh&type=&language=&sort=',
      },
      {
        name: 'Twind',
        level: 'Specialty',
        icon: 'https://twind.dev/assets/twind-logo.png',
      },
      {
        name: 'CSS modules',
        level: 'One\'s forte',
        icon: 'https://www.svgrepo.com/show/501265/module.svg',
        config: {
          invert: 'invert-x',
        },
      },
      {
        name: 'Scss',
        level: 'One\'s forte',
        icon: 'https://www.svgrepo.com/show/374067/scss2.svg',
      },
      {
        name: 'LIFF',
        level: 'Specialty',
        icon: 'https://www.svgrepo.com/show/530405/line-graph.svg',
      },
    ],
    Server: [
      {
        name: 'Hono',
        level: 'Pro',
        icon: 'https://hono.dev/favicon.ico',
        case: 'https://github.com/EdamAme-x?tab=repositories&q=Hono&type=&language=javascript&sort=',
      },
      {
        name: 'Oak',
        level: 'Reasonably good',
        icon: 'https://www.svgrepo.com/show/481446/oak-leaf-1.svg',
        config: {
          invert: 'invert-x',
        },
      },
      {
        name: 'Express',
        level: 'One\'s forte',
        icon: 'https://icongr.am/devicon/express-original.svg?size=128&color=ffffff',
        case: 'https://github.com/EdamAme-x/ITResearcher',
      },
    ],
    Others: [
      {
        name: 'Git / GitHub',
        level: 'One\'s forte',
        icon: 'https://icongr.am/devicon/github-original.svg?size=128&color=ffffff',
        config: {
          invert: 'invert-x',
        },
        case: 'https://github.com/EdamAme-x',
      },
      {
        name: 'NodeJS',
        level: 'Specialty',
        icon: 'https://www.svgrepo.com/show/354119/nodejs-icon.svg',
        case: 'https://github.com/EdamAme-x?tab=repositories&q=&type=&language=javascript&sort=',
      },
      {
        name: 'Deno',
        level: 'Pro',
        icon: 'https://www.svgrepo.com/show/378789/deno.svg',
        case: 'https://github.com/EdamAme-x?tab=repositories&q=deno&type=&language=&sort=',
      },
      {
        name: 'Bun',
        level: 'One\'s forte',
        icon: 'https://bun.sh/favicon.ico',
      },
      {
        name: 'PackageManager',
        level: 'Specialty',
        icon: 'https://www.svgrepo.com/show/505953/package.svg',
        config: {
          invert: 'invert-x',
        },
      },
      {
        name: 'VercelKV',
        level: 'Specialty',
        icon: 'https://www.svgrepo.com/show/354512/vercel.svg',
        case: 'https://github.com/EdamAme-x/ame-x.net',
        config: {
          invert: 'invert-x',
        },
      },
      {
        name: 'Supabase',
        level: 'Reasonably good',
        icon: 'https://supabase.com/favicon/favicon-128.png',
        case: 'https://github.com/EdamAme-x/OpenChatMatching',
      },
      {
        name: 'VSCode',
        level: 'Specialty',
        icon: 'https://www.svgrepo.com/show/374171/vscode.svg',
      },
      {
        name: 'VStudio',
        level: 'Reasonably good',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Visual_Studio_Icon_2019.svg/1200px-Visual_Studio_Icon_2019.svg.png',
      },
      {
        name: 'CRX',
        level: 'Specialty',
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
        level: 'Reasonably good',
        icon: 'https://www.svgrepo.com/show/353488/blender.svg',
      },
      {
        name: 'CTF',
        level: 'Reasonably good',
        icon: 'https://www.svgrepo.com/show/527780/lock-unlocked.svg',
        config: {
          invert: 'invert-x',
        },
      },
      {
        name: 'Bash / Shell',
        level: 'One\'s forte',
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
