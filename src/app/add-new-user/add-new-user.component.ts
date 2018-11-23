import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AdminServicesService} from '../admin-services.service';
import {user}from '../user';

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.css']
})
export class AddNewUserComponent implements OnInit {
  user:user={
    id:null,
    name:"",
    phone:null,
    address:"",
    email:"",
  }
  constructor(private router: Router,private AdminServicesService:AdminServicesService) { }

  ngOnInit() {
  }
  create_new_user(user){
    console.log("adding new user,new user info",user);
    this.AdminServicesService.create_new_user(user)
    .subscribe(
      (Response:any)=>{
        console.log("new customer info",Response);
        this.router.navigate(['list-all-users']);
      }
    );
  }
}
