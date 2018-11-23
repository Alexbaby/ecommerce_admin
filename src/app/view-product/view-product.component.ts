import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AdminServicesService} from '../admin-services.service';
import { Product }from '../product';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
 product:Product={
  id:null,
  category:"",
  name:"",
  price:null,
  image:"",
  count:null
 }
  constructor(private router: Router,private AdminServicesService:AdminServicesService,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    console.log("id get here");
    this.activatedRoute.params.subscribe(paramsId => {
    let id  = paramsId.id;
    console.log( "Product id ="+id);      
    this.AdminServicesService.product(id)
    .subscribe(
      (Response:any)=>{
     this.product=Response.data;

        console.log("category",this.product);
      }
    );
    });
  }
}
