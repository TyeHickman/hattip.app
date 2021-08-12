import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs'
import { map, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EntryInputService {

  constructor(public http: HttpClient) { 
    console.debug("EntryInput Service At Your Service...");

  }
}
