import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Policy } from './policy.model';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {
  readonly ppApiUrl="https://localhost:5001/api/Policies";
  ppList: Policy[];
  ppData: Policy = new Policy();
  constructor(public objLeg:HttpClient) { }
  
  getLegalList()
   {
    this.objLeg.get(this.ppApiUrl).toPromise().then(res=>this.ppList= res as Policy[]);
   }
   deleteLegal(id)
   {
    return this.objLeg.delete(this.ppApiUrl+"/"+id);
   }
   putLegal()
   {
    return this.objLeg.put(this.ppApiUrl+"/"+this.ppData.PolicyId, this.ppData);
   }
   postLegal()
   {
    return this.objLeg.post(this.ppApiUrl, this.ppData);
   }
}
