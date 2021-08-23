import { Component } from '@angular/core';
import { APIService } from '../API.service';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  title = "Resources";
  user: User;


  constructor(
    public apiService: APIService,
    public authService: AuthService) {
      this.user = this.authService.getUserInfo();
    }
  
  



  exitApp(){
    this.authService.logout();
  }

}
