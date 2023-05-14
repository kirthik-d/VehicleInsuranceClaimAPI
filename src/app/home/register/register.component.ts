import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { SignupService } from 'src/app/shared/signup.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  responsedata: Object;
   
  
  constructor(public objSrv:SignupService, public service:AuthService,private route:Router) { }

  ngOnInit(): void {
    this.resetForm();
  }
  resetForm(form?:NgForm) {
    if(form!=null)
    {
      form.form.reset();
    }
    else {
      this.objSrv.ppData={Id:0, UserNameOrEmail: '', Password:'', ConfirmPassword:''};
      this.objSrv.ppLogData={UserName: '', Password:''};
    }
  }
  onSubmit(form:NgForm)
  {
    // this.objSrv.postUser().subscribe(
    //     res=>{this.resetForm(form);
    //       localStorage.setItem("jwt",res["Data"])
    //       let tokenInfo = JSON.parse(atob(localStorage.jwt.split('.')[1]));
    //       localStorage.setItem("role",tokenInfo["role"]);
    //       localStorage.setItem("userNameOrEmail",tokenInfo["nameid"]);
          
    //     this.objSrv.getUser();
    //     alert("Record Insertion Success!!!");
    //     },
    //     err=>{alert('Error!!! Check your inputted field');}
    // )
    console.log(this.objSrv.ppData);
    if(this.objSrv.ppData.Id==0){
      //perform signup
      this.objSrv.postUser().subscribe(
        res=>{ 
          this.resetForm();
        this.objSrv.getUser();
        alert("Record Insertion Success!!!");
        },
        err=>{alert('Not able to register using this credentials Try again!!!');}
    )  
  }
  }
  
   
   
  // onSubmitLogin(){
  //   console.log(this.objSrv.ppLogData);
  // if(this.objSrv.ppLogData!=null){
   
  //   //Send obj to db
  //   this.objSrv.postLogin().subscribe(result => {
  //     if(result!=null){
  //       this.responsedata=result;
         
  //       localStorage.setItem('token',this.responsedata['token'])
  //       this.route.navigate([''])
  //     }
  //   },
  //     err=>{alert('Invalid Username or Password');}
  //   )
  
  //   }
  // }
  onSubmitLogin() {
    if (this.objSrv.ppLogData!=null) {
      this.service.ProceedLogin(this.objSrv.ppLogData).subscribe(result => {
        if(result!=null){
          this.responsedata=result;
           
          localStorage.setItem('token',this.responsedata['token'])
          this.route.navigate([''])
        }

      });
    }
  }
  
}
  
   
