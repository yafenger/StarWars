import { Component, OnInit } from '@angular/core';
import { StarwarsService } from 'src/app/shared/starwars.service';
import { ActivatedRoute } from '@angular/router';

import {Item} from '../../model/item.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  cat:string;
  items:any=[];
  constructor(private _swService:StarwarsService,
              private _route:ActivatedRoute) { }

  ngOnInit() {
    this.getItemsByCategory();
  }

  getItemsByCategory():void{
    this._route.paramMap.subscribe(
      (param)=>{
        this.cat=param.get('cat').toLowerCase();
        this._swService.getItemsByCategory(this.cat).subscribe(
          (response)=>this.items=response.results,
          (err)=>console.log(err)
        );
        console.log("data",this.items);
      }
    )
  }

}
