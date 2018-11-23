import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AdminServicesService} from '../admin-services.service';
import { Product }from '../product';
import {new_cat}from '../cat'

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit{
  cat;
  new_cat:new_cat={
    category:"",
  };
  constructor(private router: Router,private AdminServicesService:AdminServicesService,private activatedRoute:ActivatedRoute) { }
 
  ngOnInit(){

    console.log("id get here");
    this.activatedRoute.params.subscribe(paramsId => {
    let id  = paramsId.id;
    console.log( "Product id ="+id);      
    this.AdminServicesService.category_id(id)
    .subscribe(
      (Response:any)=>{
     this.new_cat=Response.data;

        console.log("category",this.new_cat);
      }
    );
}
)}; 

//update category here

update(new_cat,id){
  console.log("inside this update category name",new_cat);
  this.AdminServicesService.update_category(new_cat)
  .subscribe(
    (Response:any)=>{
      console.log("updated category",Response);
     this.router.navigate(['view-category']);
    }
  );

}
}