import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs'
import { map, catchError, filter} from 'rxjs/operators';
import { APIService, CreateJournalInput, ModelJournalFilterInput } from './API.service';
import { Auth } from 'aws-amplify';
import { Journal } from './journal'

@Injectable({
  providedIn: 'root'
})
export class JournalService {
  items: any = [];
  
  dataChanged$: Observable<boolean>;

  dateStamp: Date =  new Date();
        

  private dataChangeSubject: Subject<boolean>;

  

  constructor(public http: HttpClient, public apiService: APIService) {
    console.debug("Journal Service is here to help!");

  }

  async createJournal(journalInput: CreateJournalInput){
    await this.apiService.CreateJournal(journalInput).then((journalRes) => {
      console.log("Journal Created");
      console.log(journalRes);
    });
  }


  async getJournal(userSub: string) : Promise<Journal> {
    let filter = {userSub: {eq: userSub}}
    let foundJournal : Journal;
    let journalList = await this.apiService.ListJournals(filter)
    .then((res) =>{
      console.log(res.items[0]);
      foundJournal = {
        id : res.items[0].id,
        name : res.items[0].name,
        prompt : res.items[0].prompt,
        currentStreak : res.items[0].currentStreak
      }
      console.log(foundJournal);
      return foundJournal;
    })
    return journalList
  }

  
  
}
