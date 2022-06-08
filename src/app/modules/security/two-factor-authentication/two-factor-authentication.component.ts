import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-two-factor-authentication',
  templateUrl: './two-factor-authentication.component.html',
  styleUrls: ['./two-factor-authentication.component.css'],
})
export class TwoFactorAuthenticationComponent implements OnInit {
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
      codeField: ['', [Validators.required]],
    });
  }

  ValidateCode() {
    let code = this.getForm['codeField'].value;
    if (this.formValidator.valid) {
      let userId = this.lsService.GetUserId();
      this.securityService.ValidateCode(code, userId).subscribe({
        next: (data: any) => {
          console.log(data);
          let result = this.lsService.SaveToken(data.tk);
          if (result) {
            alert('Identificado correctamente');
            this.router.navigate(['/home']);
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
