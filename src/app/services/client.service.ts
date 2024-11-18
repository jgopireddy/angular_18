import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponseModel } from '../model/interface/role';
import { environment } from '../../environments/environment';
import { Client } from '../model/class/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getAllClients() : Observable<ApiResponseModel>{
    return this.http.get<ApiResponseModel>(environment.API_URL + "GetAllClients");
  }

  addUpdateClient(object : Client) : Observable<ApiResponseModel>{
    return this.http.post<ApiResponseModel>(environment.API_URL + "AddUpdateClient", object);
  }

  deleteClientByClientId(clientId : number) : Observable<ApiResponseModel>{
    return this.http.delete<ApiResponseModel>(environment.API_URL + "DeleteClientByClientId?clientId="+clientId);
  }
}
