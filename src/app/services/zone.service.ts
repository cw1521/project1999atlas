import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Zone } from '../shared/zone';

import {map, toArray, flatMap} from "rxjs/operators";


import db from '../../assets/db/zones_db.json';


@Injectable({
  providedIn: 'root'
})

export class ZoneService {

  constructor(private http: HttpClient) {}



  getZoneByName(name: string)  {
    return this.http.get<Zone>(`Http://localhost:3000/p99atlasdb-api/zones/${name}`);
  }


  getZones() {
    return this.http.get<Zone[]>("http://localhost:3000/p99atlasdb-api/zones");
  }

}
