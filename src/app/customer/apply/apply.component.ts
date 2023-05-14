import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClaimService } from 'src/app/shared/claim.service';
 
import { CustomerService } from 'src/app/shared/customer.service';
import { PolicyService } from 'src/app/shared/policy.service';
import { VehicleService } from 'src/app/shared/vehicle.service';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {
  data: Object;
  a:number=0;
  constructor(public cusServ:CustomerService, public propSrv:VehicleService, public objLegal:PolicyService, public objClaim:ClaimService) { 
  
  }

  ngOnInit(): void {
    this.resetForm();
  }
  resetForm(form?:NgForm) {
    if(form!=null)
    {
      form.form.reset();
    }
    else {
      
      this.cusServ.ppData={UserId:0,UserName:'',Age:0,EmailId:'' ,Address:'',MobileNumber:'',State:'',Country:'', PinCode:'',NoOfClaims:''}; 
      this.propSrv.ppData={VehicleNo:0,VehicleName:'',VehicleType:'',VehicleModelMaker:'',GrossVehicleWeight:'',VehiclePower:'',VehicleCapacity:'',VehicleLength:'',VehicleOwner:'',VehicleEngineNo:'',FuelType:'',VehicleCompany:'',OwnerId:0};
      this.objLegal.ppData={PolicyId:0,VehicleId:0, PolicyName:'',EffectiveDate:new Date("01-01-2000"), ExpiryDate:new Date("01-01-2000"), CompanyId:0 };
      this.objClaim.ppData={ClaimId:0, PolicyId:'', VehicleBill:'', DriverLicenceNo:'', VehicleCondition:'', ClaimStatus:'Pending', BankName:'', BankBranch:'', BankIfscCode:'', BankAccountNo:'', UserId:0};
    }
  }
  onSubmit(form1:NgForm)
  { 
    this.cusServ.postCustomer().subscribe(
        res=>{this.resetForm(form1);
        this.cusServ.getCustomerList();   
        alert("Record is inserted and saved successfully!!!");
        },
        err=>{alert('Error!!!'+err);}
    )
  }
  onSubmitProperty(form2:NgForm) {
    this.propSrv.postProperty().subscribe(
      res=>{this.resetForm(form2);
      this.propSrv.getPropertyList();
      alert("Record is inserted and saved successfully" + this.cusServ.ppData.UserId);
      },
      err=>{alert('Error!!!'+err);}
  )
  }
  onSubmitLegal(form3:NgForm) {
    console.log(this.objLegal.ppData);
    this.objLegal.postLegal().subscribe(
      res=>{ this.resetForm(form3);
      this.objLegal.getLegalList();
      
      alert("Your application is submitted! and your Policy Id is " + this.objLegal.ppData.PolicyId);
      },
      err=>{alert('Error!!!'+err);})
  }
  onSubmitClaim(form3:NgForm) {
    console.log(this.objLegal.ppData);
    this.objLegal.postLegal().subscribe(
      res=>{ this.resetForm(form3);
      this.objLegal.getLegalList();
      
      alert("Your application is submitted! and your Claim Id is " + this.objLegal.ppData.PolicyId);
      },
      err=>{alert('Error!!!'+err);})
  }
  insertRecord(form:NgForm)
  {
    this.cusServ.postCustomer().subscribe(
      res=>{this.resetForm(form);
      this.cusServ.getCustomerList();
      alert("Record Insertion Success!!!");
      },
      err=>{alert('Error!!!'+err);}) 
  }

  updateRecord(form:NgForm)
  {
    this.cusServ.putCustomer().subscribe(
      res=>{this.resetForm(form);
      this.cusServ.getCustomerList();
      alert('Record Updation Success!!!');
      },
      err=>{alert('Error!!!'+err);}) 
  }
}
