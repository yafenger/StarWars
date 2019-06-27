import {Component, OnInit} from '@angular/core';
import {StarwarsService} from 'src/app/shared/starwars.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  cat:string
  itemid: string;
  itemdetails: any;
  // relateditemadress: string=string[];
  // relateditems:any=[];

  constructor(private _swService: StarwarsService,
              private _route: ActivatedRoute,
              private _router: Router) {
  }

  ngOnInit() {
    this.getItemDetialsByItem();
    // this.getRelatedItem()
  }

  // getRelatedItem(): void {
  //   this._route.paramMap.subscribe(
  //     (param) => {
  //       this.relateditemadress =this.itemdetails.film;
  //       this._swService.getRelatedItem(this.relateditemadress).subscribe(
  //         (response) => this.relateditems = response,
  //         (err) => console.log(err)
  //       );
  //       console.log("data", this.itemdetails);
  //     }
  //   )
  // }
  getItemDetialsByItem(): void {
    this._route.paramMap.subscribe(
      (param) => {
        this.cat = param.get('cat').toLowerCase();
        this.itemid = param.get('itemid');
        this._swService.getItemDetialsByItem(this.cat,this.itemid).subscribe(
          (response) => this.itemdetails = response,
          (err) => console.log(err)
        );
        console.log("data", this.itemdetails);
      }
    )
  }

  clickToBack() {
    this._router.navigate(['category/items',this.cat]);
  }
}
