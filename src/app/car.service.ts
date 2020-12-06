import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Car} from './car';
    
@Injectable()
export class CarService {
    
    constructor(private http: Http) {}

    getCarsLarge() {
        return this.http.get('../assets/showcase/resources/data/cars-large.json')
                    .toPromise()
                    .then(res => res.json())
                    .then(data => { 
                       // console.log('ccki: ' + data)
                        return data; });
    }
}