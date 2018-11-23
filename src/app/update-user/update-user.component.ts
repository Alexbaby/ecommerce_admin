import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AdminServicesService} from '../admin-services.service';
import {user}from '../user';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  user:user={
    id:null,
    name:"",
    phone:null,
    address:"",
    email:"",
  }
  constructor(private router: Router,private AdminServicesService:AdminServicesService,private activatedRoute:ActivatedRoute) { }
  data
  ngOnInit() {

    console.log("id get here");
    this.activatedRoute.params.subscribe(paramsId => {
    let id  = paramsId.id;
    console.log( "user id ="+id);      
    this.AdminServicesService.view_user_details(id)
    .subscribe(
      (Response:any)=>{
     this.user=Response.data;

        console.log("user information is=",this.user);
      }
    );
    });
  }

  update_user(user){
    console.log("updated data",user);
    this.AdminServicesService.update_user(user)
    .subscribe(
      (Response:any)=>{
        //this.data=Response.data;
        console.log("new response",Response);
       this.router.navigate(['list-all-users']);

      }
    );
  }
}
