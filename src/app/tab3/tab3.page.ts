import { Component } from '@angular/core';
import { APIService } from '../API.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public apiService: APIService) {}
  title = "Resources";
  user: string;



}
