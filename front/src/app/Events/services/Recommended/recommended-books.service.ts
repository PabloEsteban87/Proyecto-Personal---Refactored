import { Injectable } from '@angular/core';
import { Observable } from "rxjs/internal/Observable";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RecommendedBooksService {

  constructor(private http: HttpClient) { }



  getRecommendedBooks(): Observable<any[]> {
  
    return this.http.get<any[]>('http://localhost:8000/recommended');
  }

  postRecommendedBooks(data: any): Observable<any[]> {
  
    return this.http.post<any[]>('http://localhost:8000/recommended', data);
  }

}
