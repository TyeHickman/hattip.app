import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthModule } from  './auth/auth.module';
import { JwtModule } from '@auth0/angular-jwt';

import { IonicStorageModule } from '@ionic/storage-angular';

export function tokenGetter() {
  return localStorage.getItem("access_token");
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports:  [ BrowserModule, 
              IonicModule.forRoot(), 
              AppRoutingModule, 
              AuthModule,
              IonicStorageModule.forRoot(),
              JwtModule.forRoot({
                config: {
                  tokenGetter: tokenGetter,
                  allowedDomains: ["amplifyapp.com"],
                  // disallowedRoutes: ["http://example.com/examplebadroute/"],
                },
              })
            ],
  providers: [  { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
