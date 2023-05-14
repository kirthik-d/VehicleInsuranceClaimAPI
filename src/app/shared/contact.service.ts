import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Contact } from './contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  readonly ppApiUrl="https://localhost:5001/api/Contacts";
  ppList: Contact[];
  ppData:Contact=new Contact();
  constructor(private objcHttp:HttpClient) { 

   }
   getContact()
   {
    this.objcHttp.get(this.ppApiUrl).toPromise().then(res=>this.ppList =res as Contact[]);
   }
   
   postContact()
   {
    return this.objcHttp.post(this.ppApiUrl, this.ppData);
   }
   putContact()
   {
    return this.objcHttp.put(this.ppApiUrl+"/"+this.ppData.Id, this.ppData);
   }
   deleteContact(id)
   {
    return this.objcHttp.delete(this.ppApiUrl+"/"+id);
   } 

 
}

