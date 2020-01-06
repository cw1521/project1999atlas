import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Map } from '../shared/map';


@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private http: HttpClient) { }


  // getMapById(zoneName, mapId) {
  //   const url = `http://localhost:4000/p99atlasdb-api/maps/${zoneName}/${mapId}`;
  //   return this.http.get(url);
  // }

  
  getMapById(zoneName, mapId) {
    const url = `p99atlasdb-api/maps/${zoneName}/${mapId}`;
    return this.http.get(url);
  }


}
