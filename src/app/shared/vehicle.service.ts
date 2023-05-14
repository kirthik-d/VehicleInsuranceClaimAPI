import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehicle } from './vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  readonly ppApiUrl="https://localhost:5001/api/Vehicles";
  ppList: Vehicle[];
  ppData: Vehicle = new Vehicle();
  pid:any;
  constructor(public objcHttp:HttpClient) { }

  getPropertyList()
   {
    this.objcHttp.get(this.ppApiUrl).toPromise().then(res=>this.ppList= res as Vehicle[]);
   }
   deleteProperty(id)
   {
    return this.objcHttp.delete(this.ppApiUrl+"/"+id);
   }
   putProperty()
   {
    return this.objcHttp.put(this.ppApiUrl+"/"+this.ppData.VehicleNo, this.ppData);
   }
   postProperty()
   {
    return this.objcHttp.post(this.ppApiUrl, this.ppData);
   }
   
}
