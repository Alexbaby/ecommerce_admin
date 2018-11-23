import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AdminServicesService} from '../admin-services.service';
import { Product }from '../product';

@Component({
  selector: 'app-update-products',
  templateUrl: './update-products.component.html',
  styleUrls: ['./update-products.component.css']
})
export class UpdateProductsComponent implements OnInit {
  product:Product={
  id:null,
  category:"",
  name:"",
  price:null,
  image:"",
  count:null
  }
  image:string="";
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

        console.log("befor update",this.product);
      }
    );
    });
  }
  
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




  update_product(product){
    if(this.image!==''){
      alert('update image');
     product.image=this.image;
     this.image='';
    }
    else{
      product.image=" ";
    }
   // 
    //console.log("updated values",product);
    this.AdminServicesService.update_product(product)
    .subscribe(
      (Response:any)=>{
        console.log("updated dated image",Response);
        this.router.navigate(['view-product',product.id])

      }
    );
  }

}
