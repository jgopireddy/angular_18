import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IRole } from '../../model/interface/role';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule],
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
    this.http.get("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles")
    .subscribe((res: any) => {
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
