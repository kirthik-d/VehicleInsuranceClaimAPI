import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerService } from 'src/app/shared/customer.service';

@Component({
  selector: 'app-customer-reg',
  templateUrl: './customer-reg.component.html',
  styleUrls: ['./customer-reg.component.css']
})
export class CustomerRegComponent implements OnInit {

  constructor(public objService:CustomerService) { }

  ngOnInit(): void {
    this.resetForm();
  }
  resetForm(form?:NgForm) {
    if(form!=null)
    {
      form.form.reset();
    }
     
  }
  onSubmit(form:NgForm)
  {
    this.objService.postCustomer().subscribe(
        res=>{this.resetForm(form);
        this.objService.getCustomerList();
        alert("Record Insertion Success!!!");
        },
        err=>{alert('Error!!!'+err);}
    )
  }
  insertRecord(form:NgForm)
  {
    this.objService.postCustomer().subscribe(
      res=>{this.resetForm(form);
      this.objService.getCustomerList();
      alert("Record Insertion Success!!!");
      },
      err=>{alert('Error!!!'+err);}) 
  }

  updateRecord(form:NgForm)
  {
    this.objService.putCustomer().subscribe(
      res=>{this.resetForm(form);
      this.objService.getCustomerList();
      alert('Record Updation Success!!!');
      },
      err=>{alert('Error!!!'+err);}) 
  }

}
