import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from '../shared/contact.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  constructor(public objService:ContactService) { }

  ngOnInit(): void {
    this.resetForm();
  }
  resetForm(form?:NgForm) {
    if(form!=null)
    {
      form.form.reset();
    }
    else {
      this.objService.ppData={Id:0, FullName:'', Email: '', Message:''};
    }
  }
  onSubmit(form:NgForm)
  {
    this.objService.postContact().subscribe(
      res=>{this.resetForm(form);
      this.objService.getContact();
      alert('Record Insertion Success!!!');
      },
      err=>{alert('Error!!!'+err);}) 
    }

    
  }
  

  



  