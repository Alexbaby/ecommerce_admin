import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AdminServicesService} from '../admin-services.service';
import { Product }from '../product';
import {new_cat}from '../cat'

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {

  constructor(private router: Router,private AdminServicesService:AdminServicesService ) { }
   items;
   new_cat:new_cat[];
   page = 1;
   pages = [];
   number: number;
   pagesize = 4;
   totalpage;
   category_search='';
   nameflag=0;
   sortby="category_name asc"
   usersearch='';
  ngOnInit() 
  {
        this.view_category();
  }

  view_category()
  {
              console.log("inside this category dispalying");
              this.AdminServicesService.view_category(this.page,this.pagesize,this.category_search,this.sortby)
              .subscribe(
                (Response:any)=>{
                  this.items=Response.data;
                  console.log("categories",this.items);
                  
            this.totalpage = Response.totalCount;
            console.log("", this.totalpage);
            this.number = this.totalpage / this.pagesize;
            console.log(this.number);
            this.pages = [];
            for (let i = 1; i <= this.number; i++) {
              this.pages.push(i);
            }
            console.log(this.pages);
           


      }
    );
  }
  // pagination click eventfunction
  pageChange(i)
  {
          this.page=i+1;
          this.view_category();
  }

  //category sorting
  sort_catlist(sortby='')
  {
                            console.log("sorting name=",sortby);

                           if(sortby=='name')
                          {
                          if(this.nameflag==0)
                          {
                            this.sortby="category_name desc"
                            //this.view_category(this.category_search,'name asc');
                            this.nameflag=1;
                            this.view_category();
                          }
                          else{
                                this.sortby="category_name asc"
                                this.nameflag=0;
                                this.view_category();
                            //this.view_category(this.category_search,'name desc');
                          }
                        }
  }

  // search category
  search_cat(category)
  {         
            this.page=1;
            console.log("inside search box",category);
            this.category_search=category;
            console.log("searched item",this.category_search);
            this.view_category();

  }

  delete(id)
  {
                console.log("inside delete here id =",id);
                this.AdminServicesService.delete(id)
                .subscribe(
                  (Response:any)=>{
                    console.log("deleted",Response);
                    this.view_category();
                  }
                );
              }
}
