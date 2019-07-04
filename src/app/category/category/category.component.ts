import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {StarwarsService} from '../../shared/starwars.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  entries: { [key: string]: string };
  API_URL = 'https://swapi.co/api/';
  // links: string[];

  constructor(private http: HttpClient, private _swService: StarwarsService, private _router: Router) {
  }

  ngOnInit() {
    this._swService.get(this.API_URL).subscribe(data => {
      console.log(data);
      this.entries = Object(data);
    });
  }

  onClick(url: string) {
    this._router.navigate(['category/items', url]);
  }
}
