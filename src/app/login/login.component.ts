import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder  } from '@angular/forms';
import { User } from './User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm = this.fb.group({
    username: [''],
    adresse: [''],
    credential: this.fb.group({
      email: [''],
      motDePasse: ['']
    })
})

  monUser: User = new User();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  valide() {
    console.log("valide !");
    console.log(this.userForm);
    this.monUser.username = this.userForm.controls.username.value;
    this.monUser.email = this.userForm.controls.credential.value.email;
    this.monUser.motDePass = this.userForm.controls.credential.value.motDePasse;
    this.monUser.adresse = this.userForm.controls.adresse.value;
  }
}
