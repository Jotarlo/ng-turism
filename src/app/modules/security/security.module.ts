import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { TwoFactorAuthenticationComponent } from './two-factor-authentication/two-factor-authentication.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { LoginComponent } from './login/login.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { RemoveUserComponent } from './user/remove-user/remove-user.component';


@NgModule({
  declarations: [
    ChangePasswordComponent,
    TwoFactorAuthenticationComponent,
    ResetPasswordComponent,
    LoginComponent,
    CreateUserComponent,
    EditUserComponent,
    UserListComponent,
    RemoveUserComponent
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule
  ]
})
export class SecurityModule { }
