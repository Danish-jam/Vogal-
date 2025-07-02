import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { logo } from '../models/logo.model';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class LogoService {


  constructor(private http: HttpClient) { }

  private apiUrl: string = 'http://localhost:3200/'

  getSiteLogo(): Observable<logo[]> {
    return this.http.get<logo[]>(this.apiUrl + 'partner')
  }

  postSiteLogo(newlogo: logo): Observable<logo[]> {
    return this.http.post<logo[]>(`${this.apiUrl}partner`, newlogo)
  }

  deleteSiteLogoFromService(proId: number): Observable<logo[]> {
    return this.http.delete<logo[]>(`${this.apiUrl}partner/${proId}`)
  }

  getSiteLogoId(id: number): Observable<logo> {
    return this.http.get<logo>(`${this.apiUrl}partner/${id}`)
  }

  updateSiteLogo(Id: number, updatePro: logo) {
    return this.http.put<logo>(`${this.apiUrl}partner/${Id}`, updatePro);
  }



  getNewsArticle(): Observable<Article[]> {
    return this.http.get<Article[]>(this.apiUrl + 'ArticleVault')
  }

  postNewsArticle(newArticle: Article): Observable<Article[]> {
    return this.http.post<Article[]>(`${this.apiUrl}ArticleVault`, newArticle)
  }

  deleteNewsArticleFromService(proId: number): Observable<Article[]> {
    return this.http.delete<Article[]>(`${this.apiUrl}ArticleVault/${proId}`)
  }

  getNewsArticleId(id: number): Observable<Article> {
    return this.http.get<Article>(`${this.apiUrl}ArticleVault/${id}`)
  }

  updateNewsArticle(Id: number, updatePro: Article) {
    return this.http.put<Article>(`${this.apiUrl}ArticleVault/${Id}`, updatePro);
  }
}
