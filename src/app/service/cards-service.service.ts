import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardsServiceService {

  constructor(private _http:HttpClient) { }
  public getNews(){
    return this._http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=817121e23b1a4af38d3e0d92ca58548c');
  }
 
}
