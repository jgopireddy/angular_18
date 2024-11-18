import { ClientService } from './../../services/client.service';
import { Component, OnInit, inject } from '@angular/core';
import { Client } from '../../model/class/Client';
import { FormsModule } from '@angular/forms';
import { ApiResponseModel } from '../../model/interface/role';


@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit{
 

  clientObj : Client = new Client();
  clientList : Client[] = [];

  clientService = inject(ClientService);

  ngOnInit(): void {
    this.loadClient();
  }

  loadClient(){
    this.clientService.getAllClients().subscribe((response: ApiResponseModel) =>{
      this.clientList = response.data;
    });
  }
  onSaveClient(){
    this.clientService.addUpdateClient(this.clientObj).subscribe((response:ApiResponseModel) =>{
      if(response.result){
        alert("Client Creating Successful");
        this.loadClient();
        this.clientObj = new Client();
      }else{
        alert(response.message);
      }
    });
  }

  onEdit(data: Client){
    this.clientObj = data;
  }

  onDelete(clientId:number){
    const isDelete = confirm("Are you sure want to delete");

    if (isDelete) {
      this.clientService.deleteClientByClientId(clientId).subscribe((response: ApiResponseModel) => {
        if (response.result) {
          alert("Deleted the Client successfully");
          this.loadClient();
        } else {
          alert(response.message);
        }
      });
    }
  }
}
