import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientXsrfModule, HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';
import { AdminSidebarComponent } from '../admin-sidebar/admin-sidebar.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

import { LoginService } from './services/login.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthAgentGuardService } from './services/auth-agent-guard.service';
import { AuthAgentHomierGuardService } from './services/auth-agent-homier-guard.service';
import { AuthAgentRealtorGuardService } from './services/auth-agent-realtor-guard.service';
import { RegistrationValidators } from './validators/registration.validators';
import { PageLoaderComponent } from './components/page-loader/page-loader.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginModalComponent } from './components/login-modal/login-modal.component';
import { RateModalComponent } from './components/rate-modal/rate-modal.component'
import { MatComponentsModule } from '../mat-components.module';
import { HouselistComponent } from './components/houselist/houselist.component';
import { HomierNavbarComponent } from '../Homier/homier-navbar/homier-navbar.component';
import { RealtorNavbarComponent } from '../Realtor/realtor-navbar/realtor-navbar.component';
import { HomierSidebarComponent } from '../Homier/homier-sidebar/homier-sidebar.component';
import { ClientSidebarComponent } from '../Client/client-sidebar/client-sidebar.component';
import { RealtorSidebarComponent } from '../Realtor/realtor-sidebar/realtor-sidebar.component';
//import { ImagePreview } from '../Homier/image-preview.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    //ImagePreview,
    MatComponentsModule,
    NgbModule.forRoot()

    // HttpClientXsrfModule.withOptions({
    //   cookieName: 'csrftoken',
    //   headerName: 'X-CSRFToken',
    // })
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    AdminSidebarComponent,
    AdminNavbarComponent,
    PageLoaderComponent,
    NotFoundComponent,
    LoginModalComponent,
    RateModalComponent,
    HouselistComponent,
    HomierSidebarComponent,
    RealtorSidebarComponent,
    HomierNavbarComponent,
    RealtorNavbarComponent,
    ClientSidebarComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    AdminSidebarComponent,
    AdminNavbarComponent,
    HomierSidebarComponent,
    HomierNavbarComponent,
    RealtorSidebarComponent,
    RealtorNavbarComponent,
    ClientSidebarComponent,
    HouselistComponent,
    PageLoaderComponent,
    NotFoundComponent
  ],
  providers: [
    LoginService,
    RegistrationValidators,
    AuthGuardService,
    AuthAgentGuardService,
    AuthAgentHomierGuardService,
    AuthAgentRealtorGuardService
  ],
  entryComponents: [
    LoginModalComponent,
    RateModalComponent
  ]
})
export class ReUsableModule { }
