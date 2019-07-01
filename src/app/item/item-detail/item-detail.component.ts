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
  relatedfilms:string [];
  key:string;
  initcomments:string;
  constructor(private _swService: StarwarsService,
              private _route: ActivatedRoute,
              private _router: Router) {
  }

  ngOnInit() {
    this.getItemDetialsByItem();
  }
  
  getItemDetialsByItem(): void {
    this._route.paramMap.subscribe(
      (param) => {
        this.cat = param.get('cat');
        this.itemid = param.get('itemid');
        this._swService.getItemDetialsByItem(this.cat,this.itemid).subscribe(
          (response) =>{ this.itemdetails = response;
            if(this.cat!="films")
            {
              this.key=response.name;
            }
            else{
              this.key=response.title;
            }
            console.log("data", this.itemdetails);
            console.log("key", this.key);
          this.initcomments=localStorage.getItem(this.key)},
          (err) => console.log(err)
        );
        
      }
    )
  }

  onClick(cat: string,itemurl:string) {
    var strs= new Array(); 
    strs=itemurl.split("/");
    var itemid=strs[strs.length-2];
    console.log(itemid);
    this._router.navigate(['item/'+cat+'/'+itemid]);
  }
  WriteToStorage(key:string,comments:string) {
    console.log(key);
    localStorage.setItem(key,comments);
    console.log(comments);
  }
  
  clickToBack() {
    this._router.navigate(['category/items',this.cat]);
  }
}
