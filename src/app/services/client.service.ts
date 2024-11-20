import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponseModel } from '../model/interface/role';
import { environment } from '../../environments/environment';
import { Client } from '../model/class/Client';
import { Constant } from '../constant/Constant';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getAllClients() : Observable<ApiResponseModel>{
    return this.http.get<ApiResponseModel>(environment.API_URL + Constant.API_METHOD.GET_ALL_CLIENTS);
  }

  addUpdateClient(object : Client) : Observable<ApiResponseModel>{
    return this.http.post<ApiResponseModel>(environment.API_URL + "AddUpdateClient", object);
  }

  deleteClientByClientId(clientId : number) : Observable<ApiResponseModel>{
    return this.http.delete<ApiResponseModel>(environment.API_URL + "DeleteClientByClientId?clientId="+clientId);
  }

  getAllEmployees() : Observable<ApiResponseModel>{
    return this.http.get<ApiResponseModel>(environment.API_URL + "GetAllEmployee");
  }


  getAllClientProjects() : Observable<ApiResponseModel>{
    return this.http.get<ApiResponseModel>(environment.API_URL + "GetAllClientProjects");
  }

  addUpdateClientProject(object : any) : Observable<ApiResponseModel>{
    return this.http.post<ApiResponseModel>(environment.API_URL + "AddUpdateClientProject", object);
  }


  getAllUsers(){
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
}
