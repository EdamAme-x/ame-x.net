import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import Fuse from 'fuse.js';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  constructor(private titleService: Title) {}

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
  }

  allArticles: { [key: string]: any }[] = [];
  articles: { [key: string]: any }[] = []; // View
  searchArticles: { [key: string]: any }[] = []; // Search

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
    console.log(this.target.value.length)
    if (this.target.value.length === 0) {
      this.searchArticles = Object.create(this.allArticles);
    }

    if (e.target?.value == '更新順') {
      this.articles = Object.create(
        Object.create(this.searchArticles).sort((a: any, b: any) => {
          return b.updated_at - a.updated_at;
        })
      );

      this.now = '更新順';
    } else if (e.target?.value == '評価順') {
      this.articles = Object.create(
        Object.create(this.searchArticles).sort((a: any, b: any) => {
          return b.liked_count - a.liked_count;
        })
      );

      this.now = '評価順';
    } else {
      this.articles = Object.create(this.allArticles);
    }
  }

  now: string = "更新順";
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
}
