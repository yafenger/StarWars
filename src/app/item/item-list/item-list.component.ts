import {Component, OnInit} from '@angular/core';
import {StarwarsService} from 'src/app/shared/starwars.service';
import {ActivatedRoute, Router} from '@angular/router';
import { ScreenSizeService } from 'src/app/shared/screen-size.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  cat: string;
  items: any = [];


  constructor(private _swService: StarwarsService,
              private _route: ActivatedRoute,
              private _router: Router,
              private _sizeService:ScreenSizeService) {
  }

  isMobileSize:boolean=this._sizeService.isMobileSize();

  ngOnInit() {
    this.getItemsByCategory();
  }

  getItemsByCategory(): void {
    this._route.paramMap.subscribe(
      (param) => {
        this.cat = param.get('cat');
        this._swService.getItemsByCategory(this.cat).subscribe(
          (response) => this.items = response.results,
          (err) => console.log(err)
        );
        console.log("data", this.items);
      }
    )
  }

  clickToBack() {
    this._router.navigate(['category']);
  }

    
  onClick(cat: string,itemurl:string) {
    var strs= new Array(); 
    strs=itemurl.split("/");
    var itemid=strs[strs.length-2];
    console.log(itemid);
    this._router.navigate(['item/'+cat+'/'+itemid]);
  }


}
