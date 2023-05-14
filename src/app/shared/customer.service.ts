import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import {HttpClient} from '@angular/common/http';
import { Customer } from './customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  readonly ppApiUrl="https://localhost:5001/api/Users";
  ppList: Customer[];
  ppData: Customer = new Customer();
  id:any;
  constructor(public objcHttp:HttpClient) { 

   }
   getCustomerList()
   {
    this.objcHttp.get(this.ppApiUrl).toPromise().then(res=>this.ppList= res as Customer[]);
   }
   deleteCustomer(id)
   {
    return this.objcHttp.delete(this.ppApiUrl+"/"+id);
   }
   putCustomer()
   {
    return this.objcHttp.put(this.ppApiUrl+"/"+this.ppData.UserId, this.ppData);
   }
   postCustomer()
   {
    return this.objcHttp.post(this.ppApiUrl, this.ppData);
   }
   searchCustomer(id) {
    return this.objcHttp.get(this.ppApiUrl+"/"+id).map(res=>{
      return JSON.stringify(res);
    });
   }
   
   
}
