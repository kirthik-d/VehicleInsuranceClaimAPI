import { getLocaleDateTimeFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerService } from 'src/app/shared/customer.service';
import { PolicyService } from 'src/app/shared/policy.service';

@Component({
  selector: 'app-policy-admin',
  templateUrl: './policy-admin.component.html',
  styleUrls: ['./policy-admin.component.css']
})
export class PolicyAdminComponent implements OnInit {

  constructor(public objSrv:PolicyService) { 
    this.resetForm();
    this.objSrv.getLegalList();
  }

  ngOnInit(): void {
  }
  fillForm(selectedPP) {
    this.objSrv.ppData = Object.assign({}, selectedPP);
  }
  del(pid)
  {
    if(confirm("Are you sure to delete this record?")) {
      this.objSrv.deleteLegal(pid).subscribe(res=>{ 
        this.objSrv.getLegalList();
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
      this.objSrv.ppData = {PolicyId:0,VehicleId:0, PolicyName:'',EffectiveDate:new Date("2000-01-01T00:12:00.005Z"), ExpiryDate:new Date("2000-01-01T00:12:00.005Z"), CompanyId:0 };
    }
  }
  onSubmit(form:NgForm)
  {
    if(this.objSrv.ppData.PolicyId==0){
      this.insertRecord(form);
    } else {
      this.updateRecord(form);
    }
  }
  insertRecord(form:NgForm)
  {
    console.log(this.objSrv.ppData);
    this.objSrv.postLegal().subscribe(
      res=>{this.resetForm(form);
      this.objSrv.getLegalList();
      alert("Record Insertion Success!!!");
      },
      err=>{alert('Error!!!'+err);}) 
  }

  updateRecord(form:NgForm)
  {
    this.objSrv.putLegal().subscribe(
      res=>{this.resetForm(form);
      this.objSrv.getLegalList();
      alert('Record Updation Success!!!');
      },
      err=>{alert('Error!!!'+err);}) 
  }
}
