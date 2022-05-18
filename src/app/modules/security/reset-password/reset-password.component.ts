import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent implements OnInit {
  formValidator: FormGroup = this.fb.group({});

  constructor(
    private fb: FormBuilder,
    private securityService: SecurityService
  ) {}

  ngOnInit(): void {
    this.BuildInitForm();
  }

  BuildInitForm() {
    this.formValidator = this.fb.group({
      emailField: ['', [Validators.required, Validators.email]],
      usernameField: ['', Validators.required],
    });
  }

  ResetPasswordEvent() {
    let username = this.getForm['usernameField'].value;
    let email = this.getForm['emailField'].value;
    if (this.formValidator.valid) {
      this.securityService.ResetPassword(username, email).subscribe({
        next: (data: object) => {
          alert(
            'Contraseña enviada por correo, verifique su bandeja de entrada.'
          );
        },
        error: (error: any) => {
          alert(
            'Ha ocurrido un fallo en el envío de su contraseña, inténtelo de nuevo.'
          );
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
