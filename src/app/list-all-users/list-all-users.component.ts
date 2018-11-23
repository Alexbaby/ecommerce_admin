import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AdminServicesService} from '../admin-services.service';
import {search}from '../search';

@Component({
  selector: 'app-list-all-users',
  templateUrl: './list-all-users.component.html',
  styleUrls: ['./list-all-users.component.css']
})
export class ListAllUsersComponent implements OnInit {
   user;
   nameflag=0;
   emailflag=0;
   order="id";
   usersearch='';

   search:search={
    //  id:null,
     username:"",
     email:"",
   }
   page = 1;
   pages = [];
   number: number;
   pagesize =5;
   totalpage;
   sortby="name asc"
  constructor(private router: Router,private AdminServicesService:AdminServicesService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(){
    this.list_all_users();
  }

list_all_users()
{
        console.log("inside this dispaly all users");
        this.AdminServicesService.list_all_users(this.page,this.pagesize,this.usersearch,this.sortby)
        .subscribe(
          (Response:any)=>{
            console.log(Response);
            this.user=Response.data;
            this.totalpage = Response.totalCount;
            console.log("", this.totalpage);
            this.number = this.totalpage / this.pagesize;
            console.log(this.number);
            this.pages = [];
            for (let i = 1; i <= this.number; i++) {
              this.pages.push(i);
            }
            console.log(this.pages);
            console.log("user details",this.user);

}
                 );
}

pageChange(i)
{
this.page=i+1;
this.list_all_users();
}


block(id)
{
        console.log("blocked id=",id);
        this.AdminServicesService.block(id)
        .subscribe(
          (Response:any)=>{
                              console.log("response",Response);
                              this.list_all_users();
                          }
                  );
}

//unblock user
unblock(id)
{
        console.log("insid this unblock function",id);
        this.AdminServicesService.unblock_user(id)
        .subscribe(
          (response:any)=>{
            console.log("unblock status:=",response);
            this.list_all_users();
          }
        );
}

// sort operations
sort_userlist(sortby='')
{
 console.log("sorting items",sortby);

 if(sortby =='name')
 {
   if(this.nameflag==0)
   {
   
    this.sortby="name desc";
     this.nameflag=1;
     this.list_all_users();
   }
   else{
     //this.list_all_users(this.usersearch,'name desc');
     this.sortby="name asc";
     this.nameflag=0;
     this.list_all_users();
   }
 }
 if(sortby=='email'){
   if(this.emailflag==0){
    this.sortby="email desc";
    // this.list_all_users(this.usersearch,'email asc');
     this.emailflag=1;

     this.list_all_users();
   }
   else{
    // this.list_all_users(this.usersearch,'email desc');
    this.sortby="email asc";
    this.emailflag=0;
    this.list_all_users();
   }
 }

}


// users search operation
searchuser(search)
{
  this.page=1;   
  console.log("search items",search);
  this.usersearch='';
  // if(search.id!="")
  // {
  //   this.usersearch+="&search[id]="+search.id;
  // }
  if(search.username!=="")
  {
    this.usersearch+="&search[name]="+search.username;
  }
  if(search.email!=="")
  {
    this.usersearch+="&search[email]="+search.email;
  }
  console.log("search items",this.usersearch);

  this.list_all_users();
 
}
}