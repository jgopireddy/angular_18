import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiResponseModel, IRole } from '../../model/interface/role';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit{

  roleList : IRole [] = [];
  http = inject(HttpClient);

  ngOnInit(): void {
    this.getAllRoles();
  }

  getAllRoles(){
    this.http.get<ApiResponseModel>("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles")
    .subscribe((res: ApiResponseModel) => {
      this.roleList = res.data;
    });
  }

  // firstName: string = "Angular 18";
  // angularVersion = "Version 18";
  // version: number = 18;
  // isActive: boolean = false;
  // currentDate : Date = new Date();
  // inputType : string = "button";
  // selectedState : string = "AL";

  // showWelcomeAlert(){
  //   alert("Welcome to Angular 18");
  // }

  // showMessage(message: string){
  //   alert(message);
  // }
  
}
