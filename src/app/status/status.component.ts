import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerService } from '../shared/customer.service';
import { ClaimService } from '../shared/claim.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  data: string;

  constructor(public objSrv:ClaimService) { }

  ngOnInit(): void {
  }
  fillForm(selectedPP) {
    this.objSrv.ppData = Object.assign({}, selectedPP);
  }
  del(pid)
  {
    if(confirm("Are you sure to delete this record?")) {
      this.objSrv.deleteClaim(pid).subscribe(res=>{ 
        this.objSrv.getClaimList();
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
      this.objSrv.ppData= {ClaimId:0, PolicyId:'', VehicleBill:'', DriverLicenceNo:'', VehicleCondition:'', ClaimStatus:'', BankName:'', BankBranch:'', BankIfscCode:'', BankAccountNo:'', UserId:0};

    }
  }
  onSubmit(form:NgForm)
  {
    this.searchRecord(form);   
  }
  

  searchRecord(form:NgForm)
  {
    this.objSrv.searchClaim(this.objSrv.ppData.ClaimId).subscribe(res=>{
      this.data=res;
      console.log(this.data);
      const obj = JSON.parse(this.data);
      alert(obj.claimStatus+"!!!");
    },
    err=>{alert('Your application Id is invalid');}) 
  }
}
