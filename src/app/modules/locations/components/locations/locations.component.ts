import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { GooglegeocoderService } from '../../services/googlegeocoder.service';
// import { ToastrService } from 'ngx-toastr';
import { GeocoderResponse } from 'src/app/models/geocoder-response.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit{
@ViewChild(MapInfoWindow, {static:false}) infoWindow!:MapInfoWindow;
@ViewChild(GoogleMap, {static:false}) map!:GoogleMap;
  // marker!: MapMarker;
  /*------------------------------------------
    --------------------------------------------*/
  constructor(
    private geocoder:GooglegeocoderService,

  ){}
  ngOnInit(): void {
      // this.markerPositions.push(this.faisal)
  }
  // /*------------------------------------------
  //   --------------------------------------------*/
  // vertices:google.maps.LatLngLiteral[]=[
  //   {lat:13,lng:13},
  //   {lat:-13,lng:0},
  //   {lat:13,lng:-13},
  // ];
  // imageUrl:string = 'https://picsum.photos/200/300/?blur=2'
  // circleCenter:google.maps.LatLngLiteral = {lat:10, lng:15};
  // bordersOrBounds:google.maps.LatLngBoundsLiteral={
  //   east:10,
  //   north:10,
  //   south:-10,
  //   west:-10
  // }
  // radius=5
  display:any;
  // center:google.maps.LatLngLiteral = {
  //   lat:29.982795850250266,
  //   lng:31.31623764306501
  // };
  // faisal:google.maps.LatLngLiteral={lat: 30.044526848744603, lng: 31.235750892451765}
  zoom=12;
  // define the map and it's type
  mapCenter!:google.maps.LatLng;
  //define the maps' options and set the default options
  mapOptions:google.maps.MapOptions= {
    mapTypeId:google.maps.MapTypeId.ROADMAP,
    zoomControl:true,
    scrollwheel:false,
    disableDoubleClickZoom:true,
    maxZoom:20,
    minZoom:4
  };
  // define the marker content string
  markerInfoContent:string='';
  // define the switch to start and stop geocoding service;
  geocoderWorking:boolean = false;
  geolocationWorking:boolean= false;
  // Important ones
  address:string|undefined;
  formattedAddress?:string|null=null;
  locationCoords?:google.maps.LatLng | null = null;

  get isWorking():boolean{
    return this.geolocationWorking||this.geocoderWorking;
  };


  // /*------------------------------------------
  //   --------------------------------------------*/
  // moveMap(event: google.maps.MapMouseEvent) {
  //     if (event.latLng != null) this.center = (event.latLng.toJSON());
  //     // console.log(event.latLng);
  // }
  // /*------------------------------------------
  //   --------------------------------------------*/
  markerPositions:google.maps.LatLngLiteral[] = []
  // /*------------------------------------------
  //   --------------------------------------------*/
  addMarker(event:google.maps.MapMouseEvent){
      if(event.latLng !=null){
          this.markerPositions.push(event.latLng.toJSON())
          console.log(event.latLng.toJSON());

        }
      }
      // /*------------------------------------------
      //   --------------------------------------------*/
      move(event: google.maps.MapMouseEvent) {
            if (event.latLng != null) this.display = event.latLng.toJSON();
            // console.log(event.latLng);
        }

  markerOptions:google.maps.MarkerOptions = {
          draggable:false,
          animation:google.maps.Animation.BOUNCE
    }
    openInfoWindow(marker: MapMarker) {
      this.infoWindow.open(marker);
    }
  deleteMark(position:any){
    this.markerPositions = this.markerPositions.filter(pos1=> pos1!==position)
  }


  getCurrentLocation(){
    this.geolocationWorking=true;
    navigator.geolocation.getCurrentPosition(
      (position)=>{
        this.geolocationWorking = false;
        const point:google.maps.LatLngLiteral={
          lat:position.coords.latitude,
          lng:position.coords.longitude
        };

        this.geocoderWorking = true;
        this.geocoder.geocodeLatLng(point).then(
          (res:GeocoderResponse)=>{
            console.log(res);

            if (res.status ==='OK' && res.results?.length){
              const value = res.results[0];
              console.log(`I am inside the getCurrentLocation fn: `, res);
              console.log(`I am inside the getCurrentLocation fn: `, res.results);
              this.locationCoords= new google.maps.LatLng(point);
              this.markerPositions.push(this.locationCoords.toJSON())
              this.mapCenter= new google.maps.LatLng(point);
              this.map.panTo(point);
              this.address = value.formatted_address;
              this.markerInfoContent = value.formatted_address;
              this.markerOptions={
                animation:google.maps.Animation.BOUNCE,
                draggable:true
              }
            }
            else{
              alert(res.error_message + res.status )
            }
          }
        ).finally(()=>{
          this.geocoderWorking = false
        });
      },
      (error)=>{
        this.geolocationWorking = false;
        if (error.PERMISSION_DENIED){
          alert("Can;t get your location ,permission denied")
        }
        else if (error.TIMEOUT){
          alert("Can;t get your location, Time Out")

        }
        else{
          alert(error.message+ `Error: ${error.code}`)
        }
      },
      {enableHighAccuracy:true}
    )
  }


  findAddress(){
    if (!this.address||this.address.length === 0){
      return
    }
    this.geocoderWorking = true;
    this.geocoder.getLocation(this.address).subscribe(
      (res:GeocoderResponse)=>{
        console.log(res);

        if (res.status ==='OK' && res.results?.length){
          const location = res.results[0];
          const loc:any=location.geometry.location;
          this.locationCoords =new google.maps.LatLng(loc.lat, loc.lng);
          this.mapCenter = location.geometry.location;
          setTimeout(() => {
            if (this.map !==undefined){
              this.map.panTo(location.geometry.location)
            }
          }, 500);
          this.address =location.formatted_address;
          this.formattedAddress =  location.formatted_address;
          this.markerInfoContent = location.formatted_address;

          this.markerOptions={
            draggable:true,
            animation:google.maps.Animation.BOUNCE
          }
        }else{
          alert(res.error_message+res.status);
        }
      },
      (err:HttpErrorResponse)=>{
        console.error('geocoder err', err)
      }
    )
    .add(()=>{
      this.geocoderWorking=false;
    })
  }

  onMapDragEnd(event:google.maps.MapMouseEvent){
    const point :google.maps.LatLngLiteral = {
      lat: event.latLng?.lat() as number,
      lng: event.latLng?.lng() as number,
    }

    this.geocoderWorking = true;
    this.geocoder.geocodeLatLng(point).then(
      (res:GeocoderResponse)=>{
        console.log(res);

        if (res.status ==='OK'){
          if (res.results.length){
            const value =  res.results[0];
            this.locationCoords = new google.maps.LatLng(point);
            this.mapCenter = new google.maps.LatLng(point);
            this.map.panTo(point);
            this.address = value.formatted_address;
            this.formattedAddress = value.formatted_address;
            this.markerOptions = {
              draggable:true,
              animation:google.maps.Animation.BOUNCE
            };
            this.markerInfoContent = value.formatted_address;
          }
        }
      }
    ).finally(()=>{
      this.geocoderWorking = false;
    })
  }

}
