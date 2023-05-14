import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
 
import { RegisterComponent } from './home/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerDisplayComponent } from './customer/customer-display/customer-display.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
 
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';
import { ApplyComponent } from './customer/apply/apply.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ContactAdminComponent } from './contact-admin/contact-admin.component';

import { VehicleAdminComponent } from './apply/vehicle-admin/vehicle-admin.component';
import { BorrowerAdminComponent } from './apply/borrower-admin/borrower-admin.component';
import { TokeninterceptorService } from './tokeninterceptor.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatusComponent } from './status/status.component';
import { PolicyAdminComponent } from './apply/policy-admin/policy-admin.component';
import { ClaimAdminComponent } from './apply/claim-admin/claim-admin.component';
import { InsurancecompanyAdminComponent } from './apply/insurancecompany-admin/insurancecompany-admin.component';
import { InsuranceCompaniesComponent } from './insurance-companies/insurance-companies.component';
 

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavigationComponent, 
        RegisterComponent,
        CustomerDisplayComponent,
        ContactUsComponent,
        AboutusComponent,
        ServicesComponent,
        ApplyComponent,
        LoginComponent,
        LogoutComponent,
        ContactAdminComponent,
        VehicleAdminComponent,
        BorrowerAdminComponent,
        PolicyAdminComponent,
        DashboardComponent,
        StatusComponent,
        ClaimAdminComponent,
        InsurancecompanyAdminComponent,
        InsuranceCompaniesComponent
        
   
    ],
    providers: [ {provide:HTTP_INTERCEPTORS,useClass:TokeninterceptorService,multi:true}],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule, 
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule
  
    ]
})
export class AppModule { }
