import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralData } from 'src/app/config/general-data';
import { CityModel } from 'src/app/models/city.model';
import { LocalStorageService } from '../local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  url = GeneralData.url_bussiness;
  tk: string = '';
  constructor(
    private http: HttpClient,
    private lsService: LocalStorageService
  ) {
    this.tk = this.lsService.GetToken();
  }

  GetRecordList(): Observable<CityModel[]> {
    let url_request = `${this.url}cities?filter={"include":["region"]}`;
    return this.http.get<CityModel[]>(url_request);
  }

  GetRecordById(id: number): Observable<CityModel> {
    let url_request = `${this.url}cities/${id}`;
    return this.http.get<CityModel>(url_request);
  }

  SaveNewRecord(model: CityModel): Observable<CityModel> {
    let url_request = `${this.url}cities`;
    return this.http.post<CityModel>(
      url_request,
      {
        name: model.name,
        regionId: model.regionId,
      },
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.tk}`,
        }),
      }
    );
  }

  EditNewRecord(model: CityModel): Observable<CityModel> {
    let url_request = `${this.url}cities/${model.id}`;
    return this.http.put<CityModel>(
      url_request,
      {
        name: model.name,
        regionId: model.regionId,
      },
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.tk}`,
        }),
      }
    );
  }
}
