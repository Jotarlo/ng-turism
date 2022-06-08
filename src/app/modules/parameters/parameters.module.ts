import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametersRoutingModule } from './parameters-routing.module';
import { CreateAmusementComponent } from './amusement/create-amusement/create-amusement.component';
import { EditAmusementComponent } from './amusement/edit-amusement/edit-amusement.component';
import { RemoveAmusementComponent } from './amusement/remove-amusement/remove-amusement.component';
import { AmusementListComponent } from './amusement/amusement-list/amusement-list.component';
import { CreateRegionComponent } from './region/create-region/create-region.component';
import { EditRegionComponent } from './region/edit-region/edit-region.component';
import { RemoveRegionComponent } from './region/remove-region/remove-region.component';
import { RegionListComponent } from './region/region-list/region-list.component';
import { CreateCityComponent } from './city/create-city/create-city.component';
import { EditCityComponent } from './city/edit-city/edit-city.component';
import { RemoveCityComponent } from './city/remove-city/remove-city.component';
import { CityListComponent } from './city/city-list/city-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CreateAmusementComponent,
    EditAmusementComponent,
    RemoveAmusementComponent,
    AmusementListComponent,
    CreateRegionComponent,
    EditRegionComponent,
    RemoveRegionComponent,
    RegionListComponent,
    CreateCityComponent,
    EditCityComponent,
    RemoveCityComponent,
    CityListComponent,
  ],
  imports: [
    CommonModule,
    ParametersRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ParametersModule {}
