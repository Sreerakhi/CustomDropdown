import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Options } from '../custom-dropdown/custom-dropdown.component';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor( private http: HttpClient) { }

  //Api call to collect data from data source
  getData(): Observable<Options[]>{
    return this.http.get<Options[]>('assets/data.json');
  }
}
