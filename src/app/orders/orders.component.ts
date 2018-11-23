import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AdminServicesService} from '../admin-services.service';
// import { search }from '../searchorder';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
   all_products

  constructor(private router: Router,private AdminServicesService:AdminServicesService) { }
   totalpage;
   pagesize=8;
   pages=[];
   number:number;
   page=1;
   emailflag=0;
   sortby="email asc"
    search:any={
    email:"",
    created:"",
    delivered:"",
  }
   usersearch='';

   ngOnInit()
   {
           this.dispaly_allorders();
   }

   pageChange(i){
   
     this.page=i+1;
    //  alert("current page: "+this.page );
     this.dispaly_allorders();
   }

  dispaly_allorders()
  {
          console.log("inside this dispalying all users orders");
          console.log("page : ",this.page,"pageSize",this.pagesize);
          this.AdminServicesService.display_allorders(this.page ,this.pagesize,this.usersearch,this.sortby)
          .subscribe(
            (Response:any)=>
            {
              //console.log("response=",Response);
              this.all_products=Response.data;
              console.log("all orders",this.all_products);
              this.totalpage=Response.totalCount;
              console.log(this.totalpage);
              this.number=this.totalpage/this.pagesize;
              console.log("number of pages=",this.number);
              this.pages=[];
              for(let i=1;i<=this.number;i++)
              {
                     this.pages.push(i);
              }
               console.log(this.pages);
      
            }
                    );

  }
//order sorting
sort_orderlist(sortby='')
{
  console.log("sorting email",sortby);


  if(sortby =='email')
 {
   if(this.emailflag==0)
   {
     this.sortby="email desc"
    //  this.dispaly_allorders(this.usersearch,'email asc');
     this.emailflag=1;
     this.dispaly_allorders();
   }
   else{
    this.sortby="email asc";
    this.emailflag=0;
    this.dispaly_allorders();
   }
 }
}

  searchorder(search:any)
  {
    this.page=1;
  console.log("search items",search);
  this.usersearch='';
  if(search.email!=="")
  {
    this.usersearch+="&search[email]="+search.email;
  }
  if(search.created!=="")
  {
    this.usersearch+="&search[created]="+search.created;
  }
  if(search.delivered!=="")
  {
    this.usersearch+="&search[delivered]="+search.delivered;
  }
  console.log("search items",this.usersearch);
  this.dispaly_allorders();
 
  }

  delete_userorder(id){
    console.log("inside this user order cancel fn",id);
    this.AdminServicesService.delete_userorder(id)
    .subscribe(
      (Response:any)=>{
        console.log(Response);
        this.dispaly_allorders();
      }
    );
  }
 
}
