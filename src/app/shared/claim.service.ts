import { Injectable } from '@angular/core';
import { Claim } from './claim.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  readonly ppApiUrl="https://localhost:5001/api/Claims";
  ppList: Claim[];
  ppData: Claim = new Claim();
  constructor(public objLeg:HttpClient) { }
  
  getClaimList()
   {
    this.objLeg.get(this.ppApiUrl).toPromise().then(res=>this.ppList= res as Claim[]);
   }
   deleteClaim(id)
   {
    return this.objLeg.delete(this.ppApiUrl+"/"+id);
   }
   putClaim()
   {
    return this.objLeg.put(this.ppApiUrl+"/"+this.ppData.PolicyId, this.ppData);
   }
   postClaim()
   {
    return this.objLeg.post(this.ppApiUrl, this.ppData);
   }

   searchClaim(id) {
    return this.objLeg.get(this.ppApiUrl+"/"+id).map(res=>{
      return JSON.stringify(res);
    });
   }
}
