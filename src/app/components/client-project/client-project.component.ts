import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { ApiResponseModel, IEmployee } from '../../model/interface/role';
import { Client } from '../../model/class/Client';
import { ClientProject } from '../../model/class/ClientProject';
import { DatePipe } from '@angular/common';
import { AlertComponent } from "../reusableComponents/alert/alert.component";

@Component({
  selector: 'app-client-project',
  standalone: true,
  imports: [ReactiveFormsModule, DatePipe, AlertComponent],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})
export class ClientProjectComponent implements OnInit{
 

  clientProjectForm = new FormGroup({
    clientProjectId: new FormControl(0),
    projectName: new FormControl("", [Validators.required, Validators.minLength(4)]),
    startDate : new FormControl(""),
    expectedEndDate: new FormControl(""),
    leadByEmpId: new FormControl(""),
    completedDate : new FormControl(""),
    contactPerson: new FormControl(""),
    contactPersonContactNo: new FormControl(""),
    totalEmpWorking : new FormControl(""),
    projectCost: new FormControl(""),
    projectDetails: new FormControl(""),
    contactPersonEmailId: new FormControl(""),
    clientId : new FormControl("")
  });

  clientService  = inject(ClientService);
  empList : IEmployee [] = [];
  clientList : Client[] = [];

  // clientProjectList : ClientProject[] = [];
  clientProjectList = signal<ClientProject[]>([]);

  initialFormValues = this.clientProjectForm.value;

  ngOnInit(): void {
    this.loadClientProjects();
    this.getAllEmployees();
    this.getAllClients();
  }

  loadClientProjects(){
    this.clientService.getAllClientProjects().subscribe((response: ApiResponseModel) =>{
      this.clientProjectList.set(response.data);
    });
  }

  getAllEmployees(){
    this.clientService.getAllEmployees().subscribe((response : ApiResponseModel) => {
      this.empList = response.data;
      
    });
  }
  getAllClients(){
    this.clientService.getAllClients().subscribe((response : ApiResponseModel) => {
      this.clientList = response.data;
      
    });
  }

  onSaveProject(){
    const formValue = this.clientProjectForm.value;
    debugger;
    this.clientService.addUpdateClientProject(formValue).subscribe((response: ApiResponseModel)=>{
      alert(response.message);
      this.clientProjectForm.reset(this.initialFormValues);
    });
  }

  onReset(){
    this.clientProjectForm.reset(this.initialFormValues);
  }
}
