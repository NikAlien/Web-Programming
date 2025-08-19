import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Record } from '../models/record';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {

  apiUrl = 'http://localhost:8080/api/v1/data';

  constructor(private http: HttpClient) { 
    // this.initUpdateSocket();
  }


  delCategory(name :  String): Observable<boolean> {
    return this.http.delete<boolean>(this.apiUrl + '/delete_' + name);
  }

  getRecords(page: number, elements: number, cate : string): Observable<Record[]> {
    const recs = this.http.get<Record[]>(this.apiUrl+'/page_'+ page, {
      params: new HttpParams()
      .set('number', elements)
      .set('category', cate)
    });
    return recs;
  }

  getSize(cate: string): Observable<number> {
    return this.http.get<number>(this.apiUrl + '/size', {params: new HttpParams()
      .set('category', cate)});
  }

  getAuthor(): Observable<string> {
    return this.http.get<string>('http://localhost:8080/api/v1/data/author');
  }



  // addDoc(name: string, content : string, userId: number): Observable<number> {
  //   return this.http.post<number>(this.apiUrl + '/insert/'+ name, {
  //     params: new HttpParams()
  //     .set('content', content)
  //     .set('userId', userId)
  //   });
  // }

  // getDocuments(): Observable<Document[]> {
  //   return this.http.get<Document[]>(this.apiUrl + '/doc');
  // }

  // getMovies(): Observable<Movie[]> {
  //   return this.http.get<Movie[]>(this.apiUrl + '/movie');
  // }
}
