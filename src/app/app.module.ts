import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateProductsComponent } from './create-products/create-products.component';
import { UpdateProductsComponent } from './update-products/update-products.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { AppRoutingModule } from './app_routing_module';  
import { AdminServicesService } from './admin-services.service';
import { ViewCategoryComponent } from './view-category/view-category.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { OrdersComponent } from './orders/orders.component';
import { ViewUserOrderComponent } from './view-user-order/view-user-order.component';
import { ListAllUsersComponent } from './list-all-users/list-all-users.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { AddNewUserComponent } from './add-new-user/add-new-user.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';




@NgModule({
  declarations: [
    AppComponent,
   
    CreateProductsComponent,
    UpdateProductsComponent,
    ViewProductsComponent,
    LoginAdminComponent,
    ViewCategoryComponent,
    UpdateCategoryComponent,
    AddCategoryComponent,
    ViewProductComponent,
    OrdersComponent,
    ViewUserOrderComponent,
    ListAllUsersComponent,
    UpdateUserComponent,
    ViewUserComponent,
    AddNewUserComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule,
   AppRoutingModule,
   TooltipModule
   
  ],
  providers: [
    AdminServicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
