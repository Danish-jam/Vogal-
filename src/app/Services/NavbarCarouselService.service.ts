import { Injectable } from '@angular/core';
import { NavigationLink } from '../models/navlink.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { carouselData } from '../models/carousel.model';

@Injectable({
  providedIn: 'root'
})
export class NavbarCarouselService {

  constructor(private http: HttpClient) { }

  // json-server --watch db.json --port 3200


  private apiUrl: string = 'http://localhost:3200/'



  getNavLinkGroup(): Observable<NavigationLink[]> {
    return this.http.get<NavigationLink[]>(this.apiUrl + 'navbar')
  }

  postNavLinkGroup(newLink: NavigationLink): Observable<NavigationLink[]> {
    return this.http.post<NavigationLink[]>(`${this.apiUrl}navbar`, newLink)
  }

  deleteNavLinkGroupFromService(LinkId: number): Observable<NavigationLink[]> {
    return this.http.delete<NavigationLink[]>(`${this.apiUrl}navbar/${LinkId}`)
  }

  getNavLinkGroupId(id: number): Observable<NavigationLink> {
    return this.http.get<NavigationLink>(`${this.apiUrl}navbar/${id}`)
  }

 updateNavLinkGroup(Id: number, updatelink: NavigationLink) {
  return this.http.put<NavigationLink>(`${this.apiUrl}navbar/${Id}`,updatelink);
}



  getCarouselData(): Observable<carouselData[]> {
    return this.http.get<carouselData[]>(this.apiUrl + 'carouselData')
  }

  postCarouselData(newCarsouleData: carouselData): Observable<carouselData[]> {
    return this.http.post<carouselData[]>(`${this.apiUrl}carouselData`, newCarsouleData)
  }

  deleteCarouselDataFromService(carouselId: number): Observable<carouselData[]> {
    return this.http.delete<carouselData[]>(`${this.apiUrl}carouselData/${carouselId}`)
  }

  getCarouselDataId(id: number): Observable<carouselData> {
    return this.http.get<carouselData>(`${this.apiUrl}carouselData/${id}`)
  }

 updateCarouselData(Id: number, updateCarouselData: carouselData) {
  return this.http.put<carouselData>(`${this.apiUrl}carouselData/${Id}`, updateCarouselData);
}


}
