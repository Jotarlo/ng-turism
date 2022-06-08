import { RegionModel } from './region.model';

export interface CityModel {
  id?: number;
  name?: string;
  regionId?: number;
  region?: RegionModel;
}
