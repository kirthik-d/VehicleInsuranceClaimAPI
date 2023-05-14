import { Injectable } from '@angular/core';
import { Companies } from './companies.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  ppApiUrl="https://localhost:5001/api/InsuranceCompanies";
  ppList: Companies[];
  ppData: Companies = new Companies();
  constructor(public objLeg:HttpClient) { }
  
  getCompanyList()
   {
    this.objLeg.get(this.ppApiUrl).toPromise().then(res=>this.ppList= res as Companies[]);
    console.log(this.ppList);
   }
   deleteCompany(id)
   {
    return this.objLeg.delete(this.ppApiUrl+"/"+id);
   }
   putCompany()
   {
    return this.objLeg.put(this.ppApiUrl+"/"+this.ppData.companyIdentificationNo, this.ppData);
   }
   postCompany()
   {
    return this.objLeg.post(this.ppApiUrl, this.ppData);
   }
}
