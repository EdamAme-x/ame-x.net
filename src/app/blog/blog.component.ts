import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

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

    this.orderDateArticle = Object.create(this.articles);
    this.orderLikeArticle = Object.create(this.articles).sort(
      (a: any, b: any) => {
        return b.liked_count - a.liked_count;
      }
    );
  }

  articles: { [key: string]: any }[] = []; // View
  orderDateArticle: { [key: string]: any }[] = []; // order date
  orderLikeArticle: { [key: string]: any }[] = []; // order like article

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
    if (e.target?.value == '更新順') {
      this.articles = Object.create(this.orderDateArticle);
    } else if (e.target?.value == '評価順') {
      this.articles = Object.create(this.orderLikeArticle);
    }

    console.log(e.target?.value);
  }
}
