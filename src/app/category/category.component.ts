import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories:string[]=[];
  constructor() { }

  ngOnInit() {
    //haven't found data in SWAPI, just hard code for now
    this.categories=[
      'Planets',
      'Spaceships',
      'Vehicles',
      'People',
      'Films',
      'Species'
    ]
  }

}
