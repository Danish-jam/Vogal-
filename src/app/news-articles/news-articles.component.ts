import { Component, OnInit } from '@angular/core';
import { LogoService } from '../Services/logo.service';

@Component({
  selector: 'app-news-articles',
  templateUrl: './news-articles.component.html',
  styleUrls: ['./news-articles.component.css'],

})
export class NewsArticlesComponent implements OnInit{
  newsArticles : any[] = []
  constructor(private logoSer : LogoService){

  }

  ngOnInit(): void {
     this.logoSer.getNewsArticle().subscribe((res) =>{
        this.newsArticles = res.filter( val => val.showHomePage == "true")
     })
  }
}
