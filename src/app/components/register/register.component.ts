import { Component, OnInit } from '@angular/core';
import { authUser } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  registerUser: authUser = {
    email: '',
    password: ''
  }
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  register(registerUser: authUser) {
    this.authService.register(registerUser.email, registerUser.password)
  }

}
