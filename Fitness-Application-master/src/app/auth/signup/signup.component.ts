import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  constructor(private authService : AuthService) {
    
  }
  onSubmit(form: NgForm) {
    
   this.authService.registerUser({
    email: form.value.email,
    password: form.value.password
   })

  }

}
