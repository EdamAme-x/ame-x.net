import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import Fuse from 'fuse.js';

@Component({
  selector: 'Blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  constructor(private titleService: Title) {}

  selector = '_' + parseInt(Math.random().toString().slice(-5)).toString(16);

  ngOnInit(): void {
    this.titleService.setTitle('Ame_x BLOG');

    if (typeof window == 'undefined') {
      return void 0;
    }

    if (localStorage.getItem('articles') == null) {
      fetch('/model/articles')
        .then((res) => res.json())
        .then((d) => {
          this.articles = d.data;
          // cache
          localStorage.setItem('articles', JSON.stringify(this.articles));
          localStorage.setItem('expiry_2', Date.now().toString());
        });
    } else {
      if (
        Date.now() -
          parseInt(localStorage.getItem('expiry_2') || Date.now().toString()) >
        1000 * 60 * 60 * 24
      ) {
        fetch('/model/articles')
          .then((res) => res.json())
          .then((d) => {
            this.articles = d.data;
            // cahce
            localStorage.setItem('articles', JSON.stringify(this.articles));
            localStorage.setItem('expiry_2', Date.now().toString());
          });
      }

      this.articles = JSON.parse(localStorage.getItem('articles') as string);
    }

    this.searchArticles = Object.create(this.articles);
    this.allArticles = Object.create(this.articles);

    this.allLiked = this.articles.map((x) => x.liked_count).reduce((a, b) => a + b, 0);
  }

  allArticles: { [key: string]: any }[] = [];
  articles: { [key: string]: any }[] = []; // View
  searchArticles: { [key: string]: any }[] = []; // Search

  allLiked: number = 0;

  convertToUserTime(input: string): string {
    try {
      const parsedDate = new Date(input);
      const year = parsedDate.getFullYear();
      const month = parsedDate.getMonth() + 1;
      const day = parsedDate.getDate();
      const hours = parsedDate.getHours();
      const minutes = parsedDate.getMinutes();
      return `${year} ${month}/${day} ${hours}:${minutes}`;
    } catch (error) {
      return 'invaid date';
    }
  }

  sortBy(e: Event | any) {
    if (!this.target) {
      this.target = document.querySelector(
        'div#' + this.selector + " > input[placeholder='Search']"
      );
    }

    if (this.target.value.length === 0) {
      this.searchArticles = Object.create(this.allArticles);
    }

    if (e.target?.value == '更新順') {
      this.articles = Object.create(
        Object.create(this.searchArticles).sort((a: any, b: any) => {
          return b.updated_at - a.updated_at;
        })
      );
    } else if (e.target?.value == '評価順') {
      this.articles = Object.create(
        Object.create(this.searchArticles).sort((a: any, b: any) => {
          return b.liked_count - a.liked_count;
        })
      );
    } else {
      this.articles = Object.create(this.allArticles);
    }
  }

  lengths: number = 1;
  target: any = null;

  searchBlog(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    if (!this.target) {
      this.target = e.target;
    }

    if (this.lengths === 0) {
      this.lengths = 1;
    }

    if ((e.target as HTMLInputElement).value.length <= this.lengths) {
      this.articles = Object.create(this.allArticles);
      this.lengths = (e.target as HTMLInputElement).value.length;
    }

    if (value == '') {
      this.articles = Object.create(this.allArticles);
      return void 0;
    }

    const options = {
      threshold: 0.2,
      keys: ['title'],
    };

    const fuse: Fuse<any> = new Fuse(this.articles, options);

    this.searchArticles = fuse.search(value).map((x) => x.item);
    this.articles = Object.create(this.searchArticles);
  }

  deleteCache(): void {
    localStorage.removeItem('articles');
    localStorage.removeItem('expiry_2');

    this.ngOnInit();
  }
}
