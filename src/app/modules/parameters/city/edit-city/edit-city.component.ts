import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { RegionModel } from 'src/app/models/region.model';
import { CityService } from 'src/app/services/parameters/city.service';
import { RegionService } from 'src/app/services/parameters/region.service';

declare const InitSelects: any;

@Component({
  selector: 'app-edit-city',
  templateUrl: './edit-city.component.html',
  styleUrls: ['./edit-city.component.css'],
})
export class EditCityComponent implements OnInit {
  formValidator: FormGroup = this.fb.group({});
  recordList: RegionModel[] = [];
  id: number = 0;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private cityService: CityService,
    private regionService: RegionService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.SearchRecord();
    this.LoadRegionList();
    this.BuildInitForm();
  }

  SearchRecord() {
    this.cityService.GetRecordById(this.id).subscribe({
      next: (data) => {
        this.getForm['idField'].setValue(data.id);
        this.getForm['nameField'].setValue(data.name);
        this.getForm['regionIdField'].setValue(data.regionId);
      },
    });
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
      idField: ['', Validators.required],
    });
  }

  EditRecord() {
    if (this.formValidator.invalid) {
      alert('Formulario inválido');
    } else {
      let name = this.getForm['nameField'].value;
      let regionId = this.getForm['regionIdField'].value;
      let id = this.getForm['idField'].value;
      let model = {
        name: name,
        regionId: parseInt(regionId),
        id: id,
      };
      this.cityService.EditNewRecord(model).subscribe({
        next: (data) => {
          alert('Editado correctamente');
          this.router.navigate(['/parameters/city']);
        },
      });
    }
  }

  get getForm() {
    return this.formValidator.controls;
  }
}
