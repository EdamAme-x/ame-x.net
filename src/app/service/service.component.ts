import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

async function getRepos(username: string, specificRepos: string[]) {
  let repos = JSON.parse(localStorage.getItem('repos') as string);

  const now = Date.now();
  const expiry = localStorage.getItem('expiry') as string;

  if (!repos || now > parseInt(expiry)) {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100`
    );
    repos = await response.json();

    const topStarredRepos = [...repos]
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 5);

    const recentlyUpdatedRepos = [...repos];

    const specificRepoData = await Promise.all(
      specificRepos.map(async (repoName) => {
        const response = await fetch(
          `https://api.github.com/repos/${username}/${repoName}`
        );
        return response.json();
      })
    );

    repos = [...topStarredRepos, ...recentlyUpdatedRepos, ...specificRepoData];

    localStorage.setItem('repos', JSON.stringify(repos));
    localStorage.setItem('expiry', (now + 12 * 60 * 60 * 1000).toString());
  }

  const pinnedRepo = [
    {
      name: "Naxt.js",
      description: "Framework using Hono 🔥 x HTMX </> | Ultrafast",
      stargazers_count: "24",
      html_url: "https://github.com/EdamAme-x/Naxt.js"
    },
    {
      name: "Hono",
      description: "Fast, Lightweight, Web-standards",
      stargazers_count: "8.5k",
      html_url: "https://github.com/honojs/hono"
    },
    {
      name: "line-tool-box",
      description: "lineで使えるWebツール集",
      stargazers_count: "6"
    },
    {
      name: "Misskey",
      description: "🌎 An interplanetary microblogging platform 🚀",
      stargazers_count: "8.7k"
    }
  ]

  return pinnedRepo.concat(repos);
}

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent {
  contributedRepos: any[] = [
    {
      name: "Loading...",
      description: "Loading...",
      html_url: "#",
      stargazers_count: 999,
    }
  ];

  constructor(
    private titleService: Title
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Ame_x SERVICE & WORKS');

    if (typeof window === 'undefined') {
      return;
    }

    getRepos('EdamAme-x', []).then((repos) => {
      repos.pop();
      this.contributedRepos = repos.map((repo: any) => {
        if (repo.description === null) {
          repo.description = "No description";
        }
        return repo;
      });
    });
  }

  
  deleteCache(): void {
    localStorage.removeItem('repos');
    localStorage.removeItem('expiry');

    this.ngOnInit();
  }
}
