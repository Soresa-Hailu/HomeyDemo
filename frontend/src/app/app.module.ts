import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { ReUsableModule } from './common/re-usable.module';
import { AppRoutingModule } from './app-routing.module';
import { MatComponentsModule } from './mat-components.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HomierDashboardComponent } from './Homier/homier-dashboard/homier-dashboard.component';
import { RealtorDashboardComponent } from './Realtor/realtor-dashboard/realtor-dashboard.component';
import { ClientDashboardComponent } from './Client/client-dashboard/client-dashboard.component';
import { ThreehunderdComponent } from './Client/threehunderd/threehunderd.component';
import { CommonService } from './common/services/common.service';
import { UserService } from './common/services/user.service';
import { AgentService } from './common/services/agent.service';
import { HomierService } from './common/services/homier.service';
import { RealtorService } from './common/services/realtor.service';
import { TitleService } from './common/services/title.service';
import { RealTimeService } from './common/services/real-time.service';
import { ChatServiceService } from './common/services/chat-service.service';
import { ConfirmDialogService } from './common/services/confirm-dialog.service'
import { AddAgentComponent } from './add-agent/add-agent.component';
import { EditAgentComponent } from './edit-agent/edit-agent.component';
import { ListAgentComponent } from './list-agent/list-agent.component';
import { MaterialModule } from './material/material.module';
import { AddCityComponent } from './add-city/add-city.component';
import { ListCityComponent } from './list-city/list-city.component';
import { AddStateComponent } from './add-state/add-state.component';
import { ListStateComponent } from './list-state/list-state.component';
import { AddHouseTypeComponent } from './add-house-type/add-house-type.component';
import { ListHouseTypeComponent } from './list-house-type/list-house-type.component';
import { LoginComponent } from './login/login.component';
import { LoginRealtorComponent } from './login-realtor/login-realtor.component';
import { LoginHomierComponent } from './login-homier/login-homier.component';
import { PostHouseComponent } from './Homier/post-house/post-house.component';
import { KitchenComponent } from './Client/kitchen/kitchen.component';
import { AcceptedHouseComponent } from './Homier/accepted-house/accepted-house.component';
import { DataTableModule } from 'angular-6-datatable';
import { AgmCoreModule } from '@agm/core';
import { GoogleMapComponent } from './Homier/google-map/google-map.component';
import { FileUploadModule, FileSelectDirective } from 'ng2-file-upload';
import { CloudinaryModule, CloudinaryConfiguration, provideCloudinary } from '@cloudinary/angular-5.x';
import { ImageAlbum } from './common/services/image-album.service';
import * as cloudinary from 'cloudinary-core';
import cloudinaryConfiguration from './config';
import { ClientMenuComponent } from './Client/client-menu/client-menu.component';
import { FooterMainComponent } from './Client/footer-main/footer-main.component';
import { HomeComponent } from './Client/home/home.component';
import { MainHomeComponent } from './Client/main-home/main-home.component';
import { MortgageCalculatorComponent } from './Client/mortgage-calculator/mortgage-calculator.component';
import { LoanCalculatorComponent } from './Client/loan-calculator/loan-calculator.component';
import { EditProfileComponent } from './Client/edit-profile/edit-profile.component';
import { InputFormatDirective } from './common/directives/input-format.directive';
import { AppPasswordDirective } from './common/directives/app-password.directive';
import { ViewHouseComponent } from './Client/view-house/view-house.component';
import { HouseResumeComponent } from './Client/house-resume/house-resume.component';
import { ResumedHouseComponent } from './Homier/resumed-house/resumed-house.component';
import { FaqComponent } from './Client/faq/faq.component';
import { RentVsBuyCalculatorComponent } from './Client/rent-vs-buy-calculator/rent-vs-buy-calculator.component';
import { HouseForSellComponent } from './Realtor/house-for-sell/house-for-sell.component';
import { HouseForClaimComponent } from './Realtor/house-for-claim/house-for-claim.component';
import { FindHouseComponent } from './Client/find-house/find-house.component';
import { HouseListComponent } from './Client/house-list/house-list.component';
import { SoldHouseComponent } from './Realtor/sold-house/sold-house.component';
import { RentedHouseComponent } from './Realtor/rented-house/rented-house.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignUpComponent } from './Client/sign-up/sign-up.component';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { AcceptedHomesComponent } from './Client/accepted-homes/accepted-homes.component';
import { RejectedHouseComponent } from './Client/rejected-house/rejected-house.component';
import { MelemamejaComponent } from './melemameja/melemameja.component';
import { AffordabilityCalculatorComponent } from './Client/affordability-calculator/affordability-calculator.component';
import { ChartsModule } from 'ng2-charts';
import { NotificationPreferencesComponent } from './Client/notification-preferences/notification-preferences.component';
import { ViewResumedHouseComponent } from './Homier/view-resumed-house/view-resumed-house.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { HomierPasswordComponent } from './Homier/homier-password/homier-password.component';
import { RealtorPasswordComponent } from './Realtor/realtor-password/realtor-password.component';
import { ScoopComponent } from './scoop/scoop.component';
import { PostClientHouseComponent } from './Homier/post-client-house/post-client-house.component';
import { SatelliteEthiopiaComponent } from './Client/satellite-ethiopia/satellite-ethiopia.component';
import { MapEthiopiaComponent } from './Client/map-ethiopia/map-ethiopia.component';
import { LocalScoopComponent } from './Client/local-scoop/local-scoop.component';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
import { PostedByMeComponent } from './Homier/posted-by-me/posted-by-me.component';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { MineHouseComponent } from './Client/mine-house/mine-house.component';
import { BreakedDealComponent } from './Homier/breaked-deal/breaked-deal.component';
import { RealtorMainComponent } from './Realtor/realtor-main/realtor-main.component';
import { LikeByMeComponent } from './Client/like-by-me/like-by-me.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { JasperoConfirmationsModule } from '@jaspero/ng-confirmations';
import { SearchPipe } from './search.pipe';
import { SearchAgentPipe } from './search-agent.pipe';
import { SearchTypePipe } from './search-type.pipe';
import { ChatClientComponent } from './Realtor/chat-client/chat-client.component';
import { SendEmailComponent } from './Realtor/send-email/send-email.component';
import { RateTheAgentComponent } from './rate-the-agent/rate-the-agent.component';
import { ConfirmPasswordComponent } from './Client/confirm-password/confirm-password.component';

@NgModule({
  declarations: [
    RealtorMainComponent,
    SendEmailComponent,
    ConfirmPasswordComponent,
    ConfirmDialogComponent,
    RateTheAgentComponent,
    ChangePasswordComponent,
    ChatClientComponent,
    PostClientHouseComponent,
    BreakedDealComponent,
    PostedByMeComponent,
    LocalScoopComponent,
    MapEthiopiaComponent,
    MineHouseComponent,
    ScoopComponent,
    HomierPasswordComponent,
    RealtorPasswordComponent,
    RentVsBuyCalculatorComponent,
    AffordabilityCalculatorComponent,
    AcceptedHouseComponent,
    NotificationPreferencesComponent,
    ViewResumedHouseComponent,
    RejectedHouseComponent,
    AcceptedHomesComponent,
    MelemamejaComponent,
    SatelliteEthiopiaComponent,
    SignUpComponent,
    DashboardComponent,
    KitchenComponent,
    RentedHouseComponent,
    ThreehunderdComponent,
    HouseListComponent,
    HouseForClaimComponent,
    SoldHouseComponent,
    FindHouseComponent,
    HouseForSellComponent,
    HomeComponent,
    FaqComponent,
    HouseResumeComponent,
    ResumedHouseComponent,
    MortgageCalculatorComponent,
    LoanCalculatorComponent,
    FooterMainComponent,
    MainHomeComponent,
    AppComponent,
    MainComponent,
    AdminDashboardComponent,
    HomierDashboardComponent,
    RealtorDashboardComponent,
    ClientDashboardComponent,
    AddAgentComponent,
    EditAgentComponent,
    ListAgentComponent,
    AddCityComponent,
    ListCityComponent,
    AddStateComponent,
    ListStateComponent,
    AddHouseTypeComponent,
    ListHouseTypeComponent,
    LoginComponent,
    LoginRealtorComponent,
    LoginHomierComponent,
    PostHouseComponent,
    GoogleMapComponent,
    ClientMenuComponent,
    EditProfileComponent,
    InputFormatDirective,
    ViewHouseComponent,
    LikeByMeComponent,
    SearchPipe,
    SearchAgentPipe,
    SearchTypePipe
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    ShowHidePasswordModule,
    JasperoConfirmationsModule.forRoot(),
    SocketIoModule,
    MDBBootstrapModule.forRoot(),
    AgmCoreModule.forRoot({
       apiKey: 'AIzaSyBkJ6coGpL4iMpz6rd89BvE12O3gWTbO9k'
                          }),
    AgmSnazzyInfoWindowModule,
    DataTableModule,
    BrowserAnimationsModule,
    ReUsableModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatComponentsModule,
    MaterialModule,
    FileUploadModule,
    CloudinaryModule.forRoot(cloudinary, cloudinaryConfiguration),
    NgbModule.forRoot()
    // HttpModule,
    // HttpClientModule,
    // HttpClientXsrfModule.withOptions({
    //   cookieName: 'csrftoken',
    //   headerName: 'X-CSRFToken',
    // }),
  ],
  exports: [
    FormsModule
  ],
  providers: [ImageAlbum, CommonService, UserService, Title, AgentService, HomierService, RealtorService, RealTimeService, TitleService,
  ConfirmDialogService, ChatServiceService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { 
    
     constructor(titleService: TitleService) {
       titleService.init();
     }
 
}
