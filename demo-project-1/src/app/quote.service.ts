import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  private QUOTES_API_URL = 'https://api.quotable.io/random';

  constructor(private http: HttpClient) { }

  fetchRandomQuote(): Observable<any> {
    return this.http.get<any>(this.QUOTES_API_URL).pipe(
      map(response => {
        return {
          content: response.content,
          author: response.author,
        };
  })
    );
  }
}
