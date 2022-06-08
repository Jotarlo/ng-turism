import { Component, OnInit } from '@angular/core';
import { GeneralData } from 'src/app/config/general-data';
import { CityModel } from 'src/app/models/city.model';
import { CityService } from 'src/app/services/parameters/city.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css'],
})
export class CityListComponent implements OnInit {
  p: number = 1;
  itemsPerPage: number = GeneralData.itemsPerPage;
  recordList: CityModel[] = [];
  constructor(private cityService: CityService) {}

  ngOnInit(): void {
    this.cityService.GetRecordList().subscribe({
      next: (data) => {
        this.recordList = data;
      },
      error: (err) => {
        alert('Problemas en la comunicación con el servidor');
      },
    });
  }
}
