import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { SecurityService } from 'src/app/services/security.service';
import { MD5 } from 'crypto-js';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formValidator: FormGroup = this.fb.group({});

  constructor(
    private fb: FormBuilder,
    private securityService: SecurityService,
    private lsService: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.BuildInitForm();
  }

  BuildInitForm() {
    this.formValidator = this.fb.group({
      emailField: ['', [Validators.required]],
      passwordField: ['', Validators.required],
    });
  }

  Login() {
    let password = this.getForm['passwordField'].value;
    password = MD5(password).toString();
    let email = this.getForm['emailField'].value;
    if (this.formValidator.valid) {
      this.securityService.LoginUser(email, password).subscribe({
        next: (data: object) => {
          let result = this.lsService.SaveUser(data);
          if (result) {
            alert('Identificado correctamente');
            this.router.navigate(['/security/2fa']);
          } else {
            alert('Ya existe una sesión activa');
          }
        },
        error: (error: any) => {
          alert('Datos inválidos');
        },
      });
    } else {
      alert('Formulario inválido');
    }
  }

  get getForm() {
    return this.formValidator.controls;
  }
}
