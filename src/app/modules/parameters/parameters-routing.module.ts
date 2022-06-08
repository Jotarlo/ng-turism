import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedGuard } from 'src/app/guards/authenticated.guard';
import { CityListComponent } from './city/city-list/city-list.component';
import { CreateCityComponent } from './city/create-city/create-city.component';
import { EditCityComponent } from './city/edit-city/edit-city.component';
import { RegionListComponent } from './region/region-list/region-list.component';

const routes: Routes = [
  {
    path: 'city',
    component: CityListComponent,
    canActivate: [AuthenticatedGuard],
  },
  {
    path: 'city-creation',
    component: CreateCityComponent,
    canActivate: [AuthenticatedGuard],
  },
  {
    path: 'city-edition/:id',
    component: EditCityComponent,
    canActivate: [AuthenticatedGuard],
  },
  {
    path: 'region',
    component: RegionListComponent,
    canActivate: [AuthenticatedGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParametersRoutingModule {}
