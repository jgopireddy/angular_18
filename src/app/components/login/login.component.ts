import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObject : any = {
    email: '',
    password: ''
  }

  router = inject(Router);

  onLogin(){
    if(this.loginObject.email === 'admin@gmail.com'
      && this.loginObject.password === '112233'
    ){
      this.router.navigateByUrl("/master");
      localStorage.setItem('empErpUser', this.loginObject.email);
    }else{
      alert("Wrong Credentials");
    }
  }
}
