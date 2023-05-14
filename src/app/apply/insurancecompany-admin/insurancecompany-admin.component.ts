import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CompaniesService } from 'src/app/shared/companies.service';

@Component({
  selector: 'app-insurancecompany-admin',
  templateUrl: './insurancecompany-admin.component.html',
  styleUrls: ['./insurancecompany-admin.component.css']
})
export class InsurancecompanyAdminComponent implements OnInit {

  constructor(public objSrv:CompaniesService) { 
    this.resetForm();
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
        this.objSrv.getCompanyList();
        alert('Record Deleted Successfully!!!');
        },
        err=>{alert('Error!!!'+err);}) 
    }
    
  }
  resetForm(form?:NgForm) {
    if(form!=null)
    {
      form.form.reset();
    }
    else {
      this.objSrv.ppData={companyIdentificationNo:0 ,companyName:'',companyContact:'', companyAddress:''};


    }
  }
  onSubmit(form:NgForm)
  {
    if(this.objSrv.ppData.companyIdentificationNo==0){
      this.insertRecord(form);
    } else {
      this.updateRecord(form);
    }
  }
  insertRecord(form:NgForm)
  {
    console.log(this.objSrv.ppData);
    this.objSrv.postCompany().subscribe(
      res=>{this.resetForm(form);
      this.objSrv.getCompanyList();
      alert("Record Insertion Success!!!");
      },
      err=>{alert('Error!!!'+err);}) 
  }

  updateRecord(form:NgForm)
  {
    this.objSrv.putCompany().subscribe(
      res=>{this.resetForm(form);
      this.objSrv.getCompanyList();
      alert('Record Updation Success!!!');
      },
      err=>{alert('Error!!!'+err);}) 
  }

}
