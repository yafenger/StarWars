import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories:string[]=[];
  constructor(private _router:Router) { }

  ngOnInit() {
    //haven't found data in SWAPI, just hard code for now
    this.categories=[
      'Planets',
      'Starships',
      'Vehicles',
      'People',
      'Films',
      'Species'
    ]
  }

  onClick(cat:string){
    this._router.navigate(['category/items',cat]);
  }

}
