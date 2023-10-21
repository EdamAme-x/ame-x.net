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
        // cache
        localStorage.setItem('articles', JSON.stringify(this.articles));
        localStorage.setItem('expiry_2', Date.now().toString());
      })
    } else {

      if (Date.now() - parseInt(localStorage.getItem('expiry_2') || Date.now().toString()) > 1000 * 60 * 60 * 24) {
        fetch('/model/articles').then(
          (res) => res.json()
        ).then((d) => {
          this.articles = d.data;
          // cahce
          localStorage.setItem('articles', JSON.stringify(this.articles));
          localStorage.setItem('expiry_2', Date.now().toString());
        })
      }

      this.articles = JSON.parse(localStorage.getItem('articles') as string);
    }
  }

  articles: { [key: string]: any }[] = [];

  convertToUserTime(input: string): string {
    try {
        const parsedDate = new Date(input);
        const year = parsedDate.getFullYear();
        const month = parsedDate.getMonth() + 1;
        const day = parsedDate.getDate();
        const hours = parsedDate.getHours();
        const minutes = parsedDate.getMinutes();
        const seconds = parsedDate.getSeconds();
        return `${year} ${month}/${day} ${hours}:${minutes}`;
    } catch (error) {
        return "invaid date";
    }
}

}
