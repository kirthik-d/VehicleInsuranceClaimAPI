import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClaimService } from 'src/app/shared/claim.service';

@Component({
  selector: 'app-claim-admin',
  templateUrl: './claim-admin.component.html',
  styleUrls: ['./claim-admin.component.css']
})
export class ClaimAdminComponent implements OnInit {

  constructor(public objSrv:ClaimService) { 
    this.resetForm();
    this.objSrv.getClaimList();
  }

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

      this.objSrv.ppData={ClaimId:0, PolicyId:0, VehicleBill:'', DriverLicenceNo:'', VehicleCondition:'', ClaimStatus:'', BankName:'', BankBranch:'', BankIfscCode:'', BankAccountNo:'', UserId:0};
      
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
    this.objSrv.postClaim().subscribe(
      res=>{this.resetForm(form);
      this.objSrv.getClaimList();
      alert("Record Insertion Success!!!");
      },
      err=>{alert('Error!!!'+err);}) 
  }

  updateRecord(form:NgForm)
  {
    this.objSrv.putClaim().subscribe(
      res=>{this.resetForm(form);
      this.objSrv.getClaimList();
      alert('Record Updation Success!!!');
      },
      err=>{alert('Error!!!'+err);}) 
  }
}
