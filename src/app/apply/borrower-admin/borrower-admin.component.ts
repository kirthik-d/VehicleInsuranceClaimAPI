import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerService } from 'src/app/shared/customer.service';

@Component({
  selector: 'app-borrower-admin',
  templateUrl: './borrower-admin.component.html',
  styleUrls: ['./borrower-admin.component.css']
})
export class BorrowerAdminComponent implements OnInit {

  constructor(public objSrv:CustomerService) { }

  ngOnInit(): void {
    this.resetForm();
    this.objSrv.getCustomerList();

  }
  fillForm(selectedPP) {
    this.objSrv.ppData = Object.assign({}, selectedPP);
  }
  del(pid)
  {
    if(confirm("Are you sure to delete this record?")) {
      this.objSrv.deleteCustomer(pid).subscribe(res=>{ 
        this.objSrv.getCustomerList();
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
      this.objSrv.ppData = {UserId:0, UserName:'',Age:0,EmailId:'' ,Address:'',MobileNumber:'',State:'',Country:'', PinCode:'',NoOfClaims:0};
    }
  }
  onSubmit(form:NgForm)
  {
    console.log(this.objSrv.ppData);

    if(this.objSrv.ppData.UserId==0){
      this.insertRecord(form);
    } else {
      this.updateRecord(form);
    }
  }
  insertRecord(form:NgForm)
  {
    this.objSrv.postCustomer().subscribe(
      res=>{this.resetForm(form);
      this.objSrv.getCustomerList();

      alert("Record Insertion Success!!!");
      },
      err=>{alert('Error!!!'+err);}) 
  }

  updateRecord(form:NgForm)
  {
    this.objSrv.putCustomer().subscribe(
      res=>{this.resetForm(form);
      this.objSrv.getCustomerList();
      alert('Record Updation Success!!!');
      },
      err=>{alert('Error!!!'+err);}) 
  }
}

