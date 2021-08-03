import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Launch } from './launch';

@Injectable()
export class LaunchesService{
    constructor(private http: HttpClient) {}

private launchesApi='https://api.spacexdata.com/v4/launches';
getLaunches(): Observable<any>{
return this.http.get<any>('https://api.spacexdata.com/v4/launches');
}
}