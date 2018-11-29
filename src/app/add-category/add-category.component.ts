import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AdminServicesService} from '../admin-services.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  category_name="";
  errors:{};
  constructor(private router: Router,private AdminServicesService:AdminServicesService) { }

  ngOnInit() {
  }

  Create(){
  console.log("inside this creation operation",);
  console.log(this.category_name);
  this.AdminServicesService.create(this.category_name)
  .subscribe(
    (Response:any)=>{
    console.log(Response);
    this.router.navigate(['view-category']);
  },
  (err)=>{
    console.log(err)
    this.errors=err.error.errors;
    console.log("error msg",this.category_name);
  }
  );
  }

}
