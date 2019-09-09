import { Component, OnInit } from '@angular/core';
import { CardsServiceService } from '../../service/cards-service.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  public articles;

  constructor(private _data:CardsServiceService) { }

  ngOnInit() {
    this._data.getNews().subscribe((data)=>{
      this.articles = data['articles'];
    })
  }
  openModal(){
    alert('click');
  }

}
