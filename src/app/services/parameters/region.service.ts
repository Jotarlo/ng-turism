import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralData } from 'src/app/config/general-data';
import { RegionModel } from 'src/app/models/region.model';
import { LocalStorageService } from '../local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class RegionService {
  url = GeneralData.url_bussiness;
  tk: string = '';
  constructor(
    private http: HttpClient,
    private lsService: LocalStorageService
  ) {
    this.tk = this.lsService.GetToken();
  }

  GetRecordList(): Observable<RegionModel[]> {
    let url_request = `${this.url}regions`;
    return this.http.get<RegionModel[]>(url_request);
  }

  SaveNewRecord(model: RegionModel): Observable<RegionModel> {
    let url_request = `${this.url}regions`;
    return this.http.post<RegionModel>(
      url_request,
      {
        name: model.name,
      },
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.tk}`,
        }),
      }
    );
  }
}
