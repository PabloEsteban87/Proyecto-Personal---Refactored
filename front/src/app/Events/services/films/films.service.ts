import { Injectable } from '@angular/core';
import { Observable } from "rxjs/internal/Observable";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private http: HttpClient) { }

   getFilms(): Observable<any[]> {
  
    return this.http.get<any[]>('http://localhost:8000/films');
  }
}
