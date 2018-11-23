import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';
import {Product} from '../product';
import { AdminServicesService } from '../admin-services.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-view-user-order',
  templateUrl: './view-user-order.component.html',
  styleUrls: ['./view-user-order.component.css']
})
export class ViewUserOrderComponent implements OnInit {
  // product:Product={
  //   id:null,
  //   category:"",
  //   name:"",
  //   price:null,
  //   image:"",
  //   count:null
  //  }
   products:Product[]=[];
  constructor(private router:Router,private Adminservices:AdminServicesService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(){

    console.log("id get here");
    this.activatedRoute.params.subscribe(paramsId => {
    let id  = paramsId.id;
    console.log( "Product id ="+id);      
    this.Adminservices.view_oneuser_product(id)
    .subscribe(
      (Response:any)=>{
        
        this.products=Response.products;

        console.log("perticular user orders",this.products);
      }
    );
}
)}; 
  
  }


