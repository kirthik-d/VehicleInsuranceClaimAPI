import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VehicleService } from 'src/app/shared/vehicle.service';

@Component({
  selector: 'app-vehicle-admin',
  templateUrl: './vehicle-admin.component.html',
  styleUrls: ['./vehicle-admin.component.css']
})
export class VehicleAdminComponent implements OnInit {
  
  constructor(public propSrv:VehicleService) { }

  ngOnInit(): void {
    this.resetForm();
    this.propSrv.getPropertyList();
  }
  fillForm(selectedPP) {
    this.propSrv.ppData = Object.assign({}, selectedPP);
  }

  del(pid)
  {
    if(confirm("Are you sure to delete this record?")) {
      this.propSrv.deleteProperty(pid).subscribe(res=>{ 
        this.propSrv.getPropertyList();
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
      this.propSrv.ppData={VehicleNo:0,VehicleName:'',VehicleType:'',VehicleModelMaker:'',GrossVehicleWeight:'',VehiclePower:'',VehicleCapacity:'',VehicleLength:'',VehicleOwner:'',VehicleEngineNo:'',FuelType:'',VehicleCompany:'',OwnerId:0};

    }
  }
  onSubmit(form:NgForm)
  {
    if(this.propSrv.ppData.VehicleNo==0){
      this.insertRecord(form);
    } else {
      this.updateRecord(form);
    }
  }
  insertRecord(form:NgForm)
  {
    this.propSrv.postProperty().subscribe(
      res=>{this.resetForm(form);
      this.propSrv.getPropertyList();
      alert("Record Insertion Success!!!");
      },
      err=>{alert('Error!!!'+err);}) 
  }

  updateRecord(form:NgForm)
  {
    this.propSrv.putProperty().subscribe(
      res=>{this.resetForm(form);
      this.propSrv.getPropertyList();
      alert('Record Updation Success!!!');
      },
      err=>{alert('Error!!!'+err);}) 
  }
}


