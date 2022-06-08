import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegionModel } from 'src/app/models/region.model';
import { CityService } from 'src/app/services/parameters/city.service';
import { RegionService } from 'src/app/services/parameters/region.service';
import { SecurityService } from 'src/app/services/security.service';

declare const InitSelects: any;

@Component({
  selector: 'app-create-city',
  templateUrl: './create-city.component.html',
  styleUrls: ['./create-city.component.css'],
})
export class CreateCityComponent implements OnInit {
  formValidator: FormGroup = this.fb.group({});
  recordList: RegionModel[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private cityService: CityService,
    private regionService: RegionService
  ) {}

  ngOnInit(): void {
    this.LoadRegionList();
    this.BuildInitForm();
  }

  LoadRegionList() {
    this.regionService.GetRecordList().subscribe({
      next: (data) => {
        this.recordList = data;
        setTimeout(() => {
          InitSelects();
        }, 500);
      },
      error: (err) => {
        alert('Error leyendo datos de regiones');
      },
    });
  }

  BuildInitForm() {
    this.formValidator = this.fb.group({
      nameField: ['', [Validators.required]],
      regionIdField: ['', Validators.required],
    });
  }

  SaveRecord() {
    if (this.formValidator.invalid) {
      alert('Formulario inválido');
    } else {
      let name = this.getForm['nameField'].value;
      let regionId = this.getForm['regionIdField'].value;
      let model = {
        name: name,
        regionId: parseInt(regionId),
      };
      this.cityService.SaveNewRecord(model).subscribe({
        next: (data) => {
          if (data) {
            alert('Almacenado correctamente');
            this.router.navigate(['/parameters/city']);
          } else {
            alert('Error almacenando');
          }
        },
      });
    }
  }

  get getForm() {
    return this.formValidator.controls;
  }
}
