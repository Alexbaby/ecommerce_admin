import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AdminServicesService } from '../admin-services.service';
import { user } from '../user';


@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  user: user = {
    id: null,
    name: "",
    phone: null,
    address: "",
    email: "",
  }
 
  userId: number;

  constructor(private router: Router, private AdminServicesService: AdminServicesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log("id get here");
    this.activatedRoute.params.subscribe(paramsId => {
      this.userId = paramsId.id;
      console.log("user id =" + this.userId);
 this.userView();
    });
  }

  userView() {

    this.AdminServicesService.view_user_details(this.userId)
      .subscribe(
        (Response: any) => {
          this.user = Response.data;
          console.log("user information is=", this.user);
        }
      );
  }
}


