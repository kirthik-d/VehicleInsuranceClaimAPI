import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CompaniesService } from '../shared/companies.service';

@Component({
  selector: 'app-insurance-companies',
  templateUrl: './insurance-companies.component.html',
  styleUrls: ['./insurance-companies.component.css']
})
export class InsuranceCompaniesComponent implements OnInit {

  constructor(public objSrv:CompaniesService) { 
    
    this.objSrv.getCompanyList();
  }

  ngOnInit(): void {
  }
  fillForm(selectedPP) {
    this.objSrv.ppData = Object.assign({}, selectedPP);
  }
  del(pid)
  {
    if(confirm("Are you sure to delete this record?")) {
      this.objSrv.deleteCompany(pid).subscribe(res=>{ 
       
        alert('Record Deleted Successfully!!!');
        },
        err=>{alert('Error!!!'+err);}) 
    }
  }
   
}
