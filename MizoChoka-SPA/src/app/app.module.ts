import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { RouterModule } from '@angular/router';
import { NgxGalleryModule } from 'ngx-gallery-9';
import { JwtModule } from '@auth0/angular-jwt';

import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { EiturBuatsaihDanComponent } from './Eitur/EiturBuatsaihDan/EiturBuatsaihDan.component';
import { appRoutes } from 'src/routes';
import { DahbelhnaComponent } from './Dahbelhna/Dahbelhna.component';
import { EiturCardComponent } from './Eitur/EiturBuatsaihDan/Eitur-card/Eitur-card.component';
import { EiturDetailedComponent } from './Eitur/EiturBuatsaihDan/Eitur-detailed/Eitur-detailed.component';
import { EiturDetailResolver } from './_resolvers/eitur-detail.resolver';
import { EiturBuatsaihDan } from './_resolvers/EiturBuatsaihDan.resolver';


export function tokenGetter() {
   return localStorage.getItem('token');
}


@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      EiturBuatsaihDanComponent,
      DahbelhnaComponent,
      EiturCardComponent,
      EiturDetailedComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      BrowserAnimationsModule,
      BsDropdownModule.forRoot(),
      TabsModule.forRoot(),
      RouterModule.forRoot(appRoutes),
      NgxGalleryModule,
      JwtModule.forRoot({
         config: {
            tokenGetter,
            whitelistedDomains: ['localhost:5000'],
            blacklistedRoutes: ['localhost:5000/api/auth']
         }
      })
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider,
      EiturDetailResolver,
      EiturBuatsaihDan
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
