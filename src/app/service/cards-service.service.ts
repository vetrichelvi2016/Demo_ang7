import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardsServiceService {

  constructor() { }
  getStud(){
    return [
      {id:101,name:'raja',mark:80},
      {id:101,name:'mk',mark:80},
      {id:101,name:'ks',mark:80}
    ];
  }
}
