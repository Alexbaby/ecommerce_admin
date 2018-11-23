import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateProductsComponent} from './update-products/update-products.component';
import { CreateProductsComponent } from './create-products/create-products.component';
import { ViewProductsComponent} from './view-products/view-products.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { ViewCategoryComponent} from './view-category/view-category.component';
import { UpdateCategoryComponent} from './update-category/update-category.component';
import { AddCategoryComponent} from './add-category/add-category.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { OrdersComponent}from './orders/orders.component';
import { ViewUserOrderComponent} from './view-user-order/view-user-order.component';
import { ListAllUsersComponent} from './list-all-users/list-all-users.component';
import { UpdateUserComponent}from './update-user/update-user.component';
import { ViewUserComponent}from'./view-user/view-user.component';
import { AddNewUserComponent}from'./add-new-user/add-new-user.component';



const router: Routes=[
  
  { path: 'update-products/:id', component: UpdateProductsComponent },
  { path: 'create-products',component: CreateProductsComponent},
  { path: 'view-products',component:ViewProductsComponent},
  { path: 'login-admin',component:LoginAdminComponent},
  { path:'add-category',component:AddCategoryComponent},
  { path:'view-category',component:ViewCategoryComponent}, 
  { path:'update_category/:id',component:UpdateCategoryComponent},
  { path:'view-product/:id',component:ViewProductComponent},
  { path:'orders',component:OrdersComponent},
  { path: 'view-user-order/:id',component:ViewUserOrderComponent},
  { path:'list-all-users',component:ListAllUsersComponent},
  { path:'update-user/:id',component:UpdateUserComponent},
  { path:'view-user/:id',component:ViewUserComponent},
  { path:'add_new_user',component:AddNewUserComponent},

];




@NgModule({
    imports: [ RouterModule.forRoot(router) ],
    exports: [ RouterModule ],
    declarations: []
    })
  export class AppRoutingModule { }
  