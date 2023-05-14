import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from '../shared/contact.service';


@Component({
  selector: 'app-contact-admin',
  templateUrl: './contact-admin.component.html',
  styleUrls: ['./contact-admin.component.css']
})
export class ContactAdminComponent implements OnInit {

  constructor(public objService:ContactService) {
    this.objService.getContact();
    this.resetForm();
   }

  ngOnInit(): void {
  }
  fillForm(selectedPP) {
    this.objService.ppData = Object.assign({}, selectedPP);
  }
  del(pid)
  {
    if(confirm("Are you sure to delete this record?")) {
      this.objService.deleteContact(pid).subscribe(res=>{ 
        this.objService.getContact();
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
      this.objService.ppData={Id:0, FullName:'',Email:'',Message:''};
    }
  }
  onSubmit(form:NgForm)
  {
    if(this.objService.ppData.Id==0){
      this.insertRecord(form);
    } else {
      this.updateRecord(form);
    }
  }
  insertRecord(form:NgForm)
  {
    this.objService.postContact().subscribe(
      res=>{this.resetForm(form);
      this.objService.getContact();
      alert("Record Insertion Success!!!");
      },
      err=>{alert('Error!!!'+err);}) 
  }

  updateRecord(form:NgForm)
  {
    this.objService.putContact().subscribe(
      res=>{this.resetForm(form);
      this.objService.getContact();
      alert('Record Updation Success!!!');
      },
      err=>{alert('Error!!!'+err);}) 
  }
}


