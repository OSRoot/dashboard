import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationsComponent } from './components/locations/locations.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { GoogleMapsModule } from '@angular/google-maps';
import { MapMarkerComponent } from './components/map-marker/map-marker.component';
import { MapPolylineComponent } from './components/map-polyline/map-polyline.component';
import { MapPolygonComponent } from './components/map-polygon/map-polygon.component';




@NgModule({
  declarations: [
    LocationsComponent,
    MapMarkerComponent,
    MapPolylineComponent,
    MapPolygonComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    GoogleMapsModule
  ],
  exports:[LocationsComponent]
})
export class LocationsModule { }
