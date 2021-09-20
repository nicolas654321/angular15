import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder  } from '@angular/forms';
import { emailValidator } from './email-validator';
import { User } from './User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(4)]],
    adresse: [''],
    credential: this.fb.group({
      email: ['', [Validators.required, emailValidator]],
      motDePasse: ['']
    })
})

  monUser: User = new User();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  valide() {
    if (this.userForm.valid) {
      console.log("valide !");
      console.log(this.userForm);
      this.monUser.username = this.userForm.controls.username.value;
      this.monUser.email = this.userForm.controls.credential.value.email;
      this.monUser.motDePass = this.userForm.controls.credential.value.motDePasse;
      this.monUser.adresse = this.userForm.controls.adresse.value;
    } else {
      console.log("form non valide !");
    }
  }
}
