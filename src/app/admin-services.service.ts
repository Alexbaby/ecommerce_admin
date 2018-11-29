import { Injectable } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';
import { HttpClient} from '@angular/common/http';
import {Product}from './product';
import { new_cat } from './cat';
@Injectable()
export class AdminServicesService {

  constructor(private router: Router, private http:HttpClient) { }

errors={};
 display_items(page,limit,usersearch,order)
 {
            console.log("display items here");
            let url=`api/product/index?page=${page}&limit=${limit}${usersearch}&order=${order}`;
            return this.http.get(url);
  }
// dispaly categorys
 view_category(page,limit,category,order)
 {
        console.log("category dispaly here");
        let url=`api/product/list_category?page=${page}&limit=${limit}&search[category_name]=${category}&order=${order}`;
        return this.http.get(url);
      
}
 
// id to display category name
  category_id(id)
  {
          console.log(id);
          console.log("update category");
          let url=`api/product/view_category?id=${id}`
          return this.http.get(url);
  
}

update_category(new_cat)
{

              let body=new_cat;
              console.log("inside this update operation",new_cat);
              let url=`api/product/update?id=${new_cat.id}`;
              return this.http.put(url,body);

}


//displaying category in product creation
category_list()
{
        console.log("display category list");
        let url="api/product/list_category";
        return this.http.get(url);
}
// delete operation
delete(id)
{
      console.log("delete operation",id);
      let url=`api/product/delete?id=${id}`
      return this.http.delete(url);
}
// add new category
create(category_name)
{
        console.log("inside this ",category_name);
         let body={
             category_name:category_name
          };
            console.log("name of category",body);
            let url="api/product/category_adding";
            return this.http.post(url,body);
}
// new product creation
product_creation(product)
{
        console.log("inside this adding new product",product);
  // let body={
  //  product:product
  // }
          let url="api/product/create";
          return this.http.post(url,product);

}
// product deletion
delete1(id)
{
        console.log("deleted item id=",id);
        let url=`api/product/delete_product?id=${id}`
        return this.http.delete(url);
        
}
// product view 
product(id)
{
          console.log("inside this view each product id=",id);
          let url=`api/product/view?id=${id}`
          return this.http.get(url);
}
update_product(product)
{
            console.log("inside this product updation",product);
            let url=`api/product/update_product?id=${product.id}`;
            return this.http.put(url,product);

}
display_allorders(page,limit,usersearch,order)
{
  // console.log("current page=",page=1);
            console.log("inside this all orders of a user");
            let url=`api/product/list_allorders?page=${page}&limit=${limit}${usersearch}&order=${order}`;
            return this.http.get(url);
      
}
// display perticular user product information
view_oneuser_product(id)
{
              console.log("inside this one user orders",id);
              let url=`api/product/list_oneorder?order_id=${id}`
              return this.http.get(url);
}

delete_userorder(id)
{
              console.log("inside this cancel user order",id);
              let url=`api/product/cancel_all?order_id=${id}`
              return this.http.delete(url);  
}

list_all_users(page,limit,search,order)
{
              console.log("list all uses");
              let url=`api/product/list_customer?page=${page}&limit=${limit}${search}&order=${order}`;
              return this.http.get(url);
  
}
// display perticular user information
view_user_details(id)
{
              console.log("information of perticular user",id);
              let url=`api/product/view_customer?id=${id}`
              return this.http.get(url);
}
// update user data
update_user(user)
{
              let id=user.id
              console.log("new values =",user,id);
              let url=`api/product/update_customer?id=${id}`
              return this.http.put(url,user);
}
// add new user
create_new_user(user)
{
              console.log("new customer",user);
              let url="api/product/create_customer"
              return this.http.post(url,user);
  
}
// block perticular user
block(id)
{
              console.log("blocked id=",id);
              let url=`api/product/block_user?id=${id}`
              return this.http.get(url);
}
// unblock user
unblock_user(id)
{
            console.log("unblock operation",id);
            let url=`api/product/user_unblock?id=${id}`
            return this.http.get(url);
}

}


