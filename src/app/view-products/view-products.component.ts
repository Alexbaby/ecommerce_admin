import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';
import {Product} from '../product';
import { AdminServicesService } from '../admin-services.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {
  items
  product :Product={
    id:null,
    category:"",
    name:"",
    price:null,
    image:"",
    count:null
  } 

  page = 1;
  pages = [];
  number: number;
  pagesize = 8;
  totalpage:number;
  usersearch='';
  nameflag=0;
  categoryflag=0;
  sortby="category asc"
  
  search:any={
    category:"",
    name:"",
   
  }
  constructor(private router:Router,private Adminservices:AdminServicesService,private http:HttpClient,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
  this.display_items();
  }
  // dispaly items functions
  
 display_items()
                 {
                      console.log("display items");
                      this.Adminservices.display_items(this.page,this.pagesize,this.usersearch,this.sortby)
                      .subscribe(
                        (response:any)=>{
                          this.items=response.data;
                          console.log("products",this.items);
                          this.totalpage=response.totalCount;
                          console.log("count",this.totalpage);
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

pageChange(i)
{
      this.page=i+1;
      this.display_items();
}

//sorting products
sort_productlist(sortby='')
{
                    console.log("sorting items",sortby);
                  
                    if(sortby =='category')
                    {
                      if(this.categoryflag==0)
                      {
                      
                      this.sortby="category desc";
                        this.categoryflag=1;
                        this.display_items()
                      }
                      else{
                        //this.list_all_users(this.usersearch,'name desc');
                        this.sortby="category asc";
                        this.categoryflag=0;
                        this.display_items();
                      }
                    }
                    
  if(sortby=='name')
  {
                if(this.nameflag==0){
                this.sortby="name desc";
                // this.list_all_users(this.usersearch,'email asc');
                  this.nameflag=1;
            
                  this.display_items();
                }
                else{
                // this.list_all_users(this.usersearch,'email desc');
                this.sortby="name asc";
                this.nameflag=0;
                this.display_items();
                }
              }
}

//search product
search_product(search)
{
              this.page=1;
              console.log("inside this product search",search);
              this.usersearch='';
              if(search.category!="")
              {
                this.usersearch+="&search[category]="+search.category;
              }
              if(search.name!=="")
              {
                this.usersearch+="&search[name]="+search.name;
              }
              
              console.log("search items",this.usersearch);
              this.display_items();
}

 
delete1(id:number)
{    
        if(confirm("are you sure to delete this item")){  
        console.log("inside this delete operations",id);
        this.Adminservices.delete1(id)
        .subscribe(
          (Response:any)=>{
            console.log("deleted items",Response);
            this.display_items();
    
    }
  );

}
}
}



