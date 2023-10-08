import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, take } from 'rxjs';
import { googlemapKey } from 'src/app/core/services/data/data.service';
import { GeocoderResponse } from 'src/app/models/geocoder-response.model';
// import { environment } from '';



@Injectable({
  providedIn: 'root'
})
export class GooglegeocoderService {
  constructor(private http:HttpClient) { }

  geocodeLatLng(location:google.maps.LatLngLiteral):Promise<GeocoderResponse>{
      let geocoder = new  google.maps.Geocoder();
      return new Promise((resolve,_reject)=>{
        geocoder.geocode({'location':location}, (results, status)=>{
          if (status === google.maps.GeocoderStatus.OK){
            const res = new GeocoderResponse(status, results as google.maps.GeocoderResult[])
            resolve(res)
          }
          else{
            _reject(status)
          }
          });
        });
  }

  getLocation(term:string):Observable<GeocoderResponse>{
    const url = `https://maps.google.com/maps/api/geocode/json?address=${term}&sensor=false&key=${googlemapKey}`;
    return this.http.get<GeocoderResponse>(url).pipe(take(1))
  }

}
