import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  
  apiUrl = 'http://localhost:8080/api/v1/author/';

  constructor(private http : HttpClient) { }
  
  authentication(userName : string, type : string, identifier : string) : Observable<number> {
    return this.http.get<number>(this.apiUrl + userName, {
      params: new HttpParams()
      .set('type', type)
      .set('identifier', identifier)
    });
  }

  getAuthor(userName :  string) : Observable<Author> {
    return this.http.get<Author>(this.apiUrl + "get/" + userName);
  }

}
