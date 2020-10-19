import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../../../core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formRegister: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
  ) {
    this.buildForm();
  }

  ngOnInit(): void {  }

  register(event: Event){
    event.preventDefault();
    if(this.formRegister.valid){
      this.authService.createUser(
        this.formRegister.value.email.toString(),
        this.formRegister.value.password.toString()
      )
      .then(() => {
        this.router.navigate(['/auth/login']);
      }).catch(e =>{
        console.log(e);

      })
    }
    console.log(this.formRegister.value);

  }

  private buildForm(){
    this.formRegister = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
}
