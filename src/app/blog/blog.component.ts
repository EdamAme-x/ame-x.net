import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  ngOnInit(): void {
    if (typeof window == 'undefined') {
      return void 0;
    }

    if (localStorage.getItem('articles') == null) {
      fetch('/model/articles').then(
        (res) => res.json()
      ).then((d) => {
        this.articles = d.data;
      })
    } else {
      this.articles = JSON.parse(localStorage.getItem('articles') as string);
    }
  }

  articles: { [key: string]: any[] }[] = []
}
