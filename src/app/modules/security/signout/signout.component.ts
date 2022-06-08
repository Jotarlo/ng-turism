import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.css'],
})
export class SignoutComponent implements OnInit {
  constructor(
    private securityService: SecurityService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.securityService.Signout();
    this.router.navigate(['/home']);
  }
}
