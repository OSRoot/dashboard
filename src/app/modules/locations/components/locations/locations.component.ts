import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit{
@ViewChild(MapInfoWindow) infoWindow!:MapInfoWindow;
  // marker!: MapMarker;
  /*------------------------------------------
    --------------------------------------------*/
  constructor(){}
  ngOnInit(): void {
      this.markerPositions.push(this.faisal)
  }
  /*------------------------------------------
    --------------------------------------------*/
  vertices:google.maps.LatLngLiteral[]=[
    {lat:13,lng:13},
    {lat:-13,lng:0},
    {lat:13,lng:-13},
  ];
  imageUrl:string = 'https://picsum.photos/200/300/?blur=2'
  circleCenter:google.maps.LatLngLiteral = {lat:10, lng:15};
  bordersOrBounds:google.maps.LatLngBoundsLiteral={
    east:10,
    north:10,
    south:-10,
    west:-10
  }
  radius=5
  display:any;
  center:google.maps.LatLngLiteral = {
    lat:29.982795850250266,
    lng:31.31623764306501
  };
  faisal:google.maps.LatLngLiteral={lat: 30.044526848744603, lng: 31.235750892451765}
  zoom=4;
  /*------------------------------------------
    --------------------------------------------*/
  moveMap(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.center = (event.latLng.toJSON());
      // console.log(event.latLng);
  }
  /*------------------------------------------
    --------------------------------------------*/
  markerOptions:google.maps.MarkerOptions = {
    draggable:false,
  }
  markerPositions:google.maps.LatLngLiteral[] = []
  /*------------------------------------------
    --------------------------------------------*/
  addMarker(event:google.maps.MapMouseEvent){
    if(event.latLng !=null){
      this.markerPositions.push(event.latLng.toJSON())
      console.log(event.latLng.toJSON());

    }
  }
  /*------------------------------------------
    --------------------------------------------*/
  move(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.display = event.latLng.toJSON();
      // console.log(event.latLng);
  }

  openInfoWindow(marker:MapMarker){
    if(this.infoWindow !=undefined){
      this.infoWindow.open(marker)
    }
  }
  deleteMark(position:any){
    this.markerPositions = this.markerPositions.filter(pos1=> pos1!==position)
  }
}
