import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AdminServicesService} from '../admin-services.service';
import { Product }from '../product';
import {new_cat}from '../cat'

@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.css']
})
export class CreateProductsComponent implements OnInit {
  new_cat:new_cat[];
  product :Product={
    id:null,
    category:"",
    name:"",
    price:null,
    image:"",
    count:null
  } 
 image:string="";
 errors;

  constructor(private router: Router,private AdminServicesService:AdminServicesService ) { }
   categorylist:any[]=[];
   
   ngOnInit() {
    this.cat_list();
  }
  cat_list(){
    console.log("inside cat_list");
    this.AdminServicesService.category_list()
    .subscribe(
      (Response:any)=>{
        this.categorylist=Response.data;
        console.log("items",this.categorylist);
      }
    );
  }
// dropdown selector function
  selectChangehandler( event :any)
  {

    this.product.category=event.target.value;  
    console.log("selected item",this.product.category);
  }

  //base 64 image encoding
  changeListener($event) : void {
    this.readThis($event.target);
  }
  readThis(inputValue: any): void {
    var file:File = inputValue.files[0];
    var myReader:any = new FileReader();
  
    myReader.onloadend = (e) => {
      this.image = myReader.result.split(',')[1];
       
    }
    myReader.readAsDataURL(file);
  }

  product_creation(product){
     product.image=this.image;
    console.log("inside this fn new product creation",product);
    this.AdminServicesService.product_creation(product)
    .subscribe(
      (Response:any)=>{
        console.log("new product",Response);
        this.router.navigate(['view-products']);
      },
      (err)=>{
        console.log("errors",err);
        this.errors=err.error.errors;
        console.log("error data",this.errors);
        console.log("price",this.errors.price);
        console.log("count",this.errors.count);
      }
    );


  }
}
