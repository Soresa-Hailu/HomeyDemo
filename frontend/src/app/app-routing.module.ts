import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HomierDashboardComponent } from './Homier/homier-dashboard/homier-dashboard.component';
import { RealtorDashboardComponent } from './Realtor/realtor-dashboard/realtor-dashboard.component';
import { ClientDashboardComponent } from './Client/client-dashboard/client-dashboard.component';
import { NotFoundComponent } from './common/components/not-found/not-found.component';
import { AddAgentComponent } from './add-agent/add-agent.component';
import { EditAgentComponent } from './edit-agent/edit-agent.component';
import { ListAgentComponent } from './list-agent/list-agent.component';
import { AddCityComponent } from './add-city/add-city.component';
import { ListCityComponent } from './list-city/list-city.component';
import { AddStateComponent } from './add-state/add-state.component';
import { ListStateComponent } from './list-state/list-state.component';
import { AddHouseTypeComponent } from './add-house-type/add-house-type.component';
import { ListHouseTypeComponent } from './list-house-type/list-house-type.component';
import { PostHouseComponent } from './Homier/post-house/post-house.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './common/services/auth-guard.service';
import { AuthAgentGuardService } from './common/services/auth-agent-guard.service';
import { AuthAgentHomierGuardService } from './common/services/auth-agent-homier-guard.service';
import { AuthAgentRealtorGuardService } from './common/services/auth-agent-realtor-guard.service';
import { LoginRealtorComponent } from './login-realtor/login-realtor.component'; 
import { LoginHomierComponent } from './login-homier/login-homier.component';
import { GoogleMapComponent } from './Homier/google-map/google-map.component';
import { ClientMenuComponent } from './Client/client-menu/client-menu.component';
import { FooterMainComponent } from './Client/footer-main/footer-main.component';
import { HomeComponent } from './Client/home/home.component';
import { MainHomeComponent } from './Client/main-home/main-home.component';
import { MortgageCalculatorComponent } from './Client/mortgage-calculator/mortgage-calculator.component';
import { LoanCalculatorComponent } from './Client/loan-calculator/loan-calculator.component';
import { EditProfileComponent } from './Client/edit-profile/edit-profile.component';
import { ViewHouseComponent } from './Client/view-house/view-house.component';
import { HouseResumeComponent } from './Client/house-resume/house-resume.component';
import { ResumedHouseComponent } from './Homier/resumed-house/resumed-house.component';
import { FaqComponent } from './Client/faq/faq.component';
import { RentVsBuyCalculatorComponent } from './Client/rent-vs-buy-calculator/rent-vs-buy-calculator.component';
import { HouseForSellComponent } from './Realtor/house-for-sell/house-for-sell.component';
import { FindHouseComponent } from './Client/find-house/find-house.component';
import { SoldHouseComponent } from './Realtor/sold-house/sold-house.component';
import { RentedHouseComponent } from './Realtor/rented-house/rented-house.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignUpComponent } from './Client/sign-up/sign-up.component';
import { HouseForClaimComponent } from './Realtor/house-for-claim/house-for-claim.component';
import { AcceptedHomesComponent } from './Client/accepted-homes/accepted-homes.component';
import { RejectedHouseComponent } from './Client/rejected-house/rejected-house.component';
import { MelemamejaComponent } from './melemameja/melemameja.component';
import { AffordabilityCalculatorComponent } from './Client/affordability-calculator/affordability-calculator.component';
import { AcceptedHouseComponent } from './Homier/accepted-house/accepted-house.component';
import { NotificationPreferencesComponent } from './Client/notification-preferences/notification-preferences.component';
import { ViewResumedHouseComponent } from './Homier/view-resumed-house/view-resumed-house.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { HomierPasswordComponent } from './Homier/homier-password/homier-password.component';
import { RealtorPasswordComponent } from './Realtor/realtor-password/realtor-password.component';
import { PostClientHouseComponent } from './Homier/post-client-house/post-client-house.component';
import { ScoopComponent } from './scoop/scoop.component';
import { LocalScoopComponent } from './Client/local-scoop/local-scoop.component';
import { PostedByMeComponent } from './Homier/posted-by-me/posted-by-me.component';
import { KitchenComponent } from './Client/kitchen/kitchen.component';
import { SatelliteEthiopiaComponent } from './Client/satellite-ethiopia/satellite-ethiopia.component';
import { MapEthiopiaComponent } from './Client/map-ethiopia/map-ethiopia.component';
import { MineHouseComponent } from './Client/mine-house/mine-house.component';
import { BreakedDealComponent } from './Homier/breaked-deal/breaked-deal.component';
import { RealtorMainComponent } from './Realtor/realtor-main/realtor-main.component';
import { LikeByMeComponent } from './Client/like-by-me/like-by-me.component';
import { ChatClientComponent } from './Realtor/chat-client/chat-client.component';
import { SendEmailComponent } from './Realtor/send-email/send-email.component';
import { RateTheAgentComponent } from './rate-the-agent/rate-the-agent.component';
import { ConfirmPasswordComponent } from './Client/confirm-password/confirm-password.component';
// const routes: Routes = [
//   {
//     path: '',
//     component: MainComponent
//   }
// ]

const routes: Routes = [
  {
    path: '',
    component: MainHomeComponent,
    data: {title: "Homey"}
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'local-scoop',
    component: LocalScoopComponent
  },
  {
    path: 'melemameja',
    component: MelemamejaComponent
  },
  {
    path: 'map-ethiopia',
    component: MapEthiopiaComponent
  },
  {
    path: 'satellite-ethiopia',
    component: SatelliteEthiopiaComponent
  },
  {
    path: 'kitchen',
    component: KitchenComponent
  },
  {
    path: 'mortgage-calculator',
    component: MortgageCalculatorComponent
  },
  {
    path: 'affordability-calculator',
    component: AffordabilityCalculatorComponent
  },
  {
    path: 'find-house',
    component: FindHouseComponent
  },
  {
    path: 'loan-calculator',
    component: LoanCalculatorComponent
  },
  {
    path: 'rent-vs-buy-calculator',
    component: RentVsBuyCalculatorComponent
  },
  {
    path: 'faq',
    component: FaqComponent
  },
  {
    path: 'client',
    component: ClientDashboardComponent,
    children: [ 
  {
    path: 'edit-profile',
    component: EditProfileComponent
  },
  {
    path: 'notification-preferences',
    component: NotificationPreferencesComponent,
    data: { title: "password-preferences" }
  },
  {
    path: 'confirm-password',
    component: ConfirmPasswordComponent
  },
  {
    path: 'house-resume',
    component: HouseResumeComponent
  },
  {
    path: 'mine-house',
    component: MineHouseComponent
  },
  {
    path: 'like-by-me',
    component: LikeByMeComponent
  },
  {
    path: 'accepted-homes',
    component: AcceptedHomesComponent
  },
  {
    path: 'rejected-house',
    component: RejectedHouseComponent
  }
     ],
  canActivate: [AuthGuardService] 
  },
  {
    path: 'view-house/:id/:city',
    component: ViewHouseComponent
  },
  {
    path: 'admin',
    component: AdminDashboardComponent,
    children: [ 
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'scoop',
    component: ScoopComponent
  },
  {
    path: 'add',
    component: AddAgentComponent
  },
  {
    path: 'editAgent/:id',
    component: EditAgentComponent
  },
  {
    path: 'list',
    component: ListAgentComponent
  },
  {
    path: 'change-password',
    component: ChangePasswordComponent
  },
  {
    path: 'rate-the-agent/:id/:rating',
    component: RateTheAgentComponent
  },
  {
    path: 'addCity',
    component: AddCityComponent
  },
  {
    path: 'addState',
    component: AddStateComponent
  },
  {
    path: 'listState',
    component: ListStateComponent
  },
  {
    path: 'listCity',
    component: ListCityComponent
  },
  {
    path: 'addHouseType',
    component: AddHouseTypeComponent
  },
  {
    path: 'listHouseType',
    component: ListHouseTypeComponent
  }
      ],
  canActivate: [AuthAgentGuardService]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'loginRealtor',
    component: LoginRealtorComponent
  },
  {
    path: 'loginHomier',
    component: LoginHomierComponent
  },
  {
    path: 'homier',
    component: HomierDashboardComponent,
    children: [
   {
    path: 'postHouse',
    component: PostHouseComponent       
   },
   {
    path: 'googleMap',
    component: GoogleMapComponent
   },
   {
    path: 'resumed-house',
    component: ResumedHouseComponent
   },
   {
    path: 'breaked-deal',
    component: BreakedDealComponent
   },
   {
    path: 'view-resumed-house/:id',
    component: ViewResumedHouseComponent
   },
   {
    path: 'posted-by-me',
    component: PostedByMeComponent
   },
   {
    path: 'post-client-house/:id',
    component: PostClientHouseComponent
   },
   { 
    path: 'posted-house',
    component: AcceptedHouseComponent
   },
   {
    path: 'homier-password',
    component: HomierPasswordComponent
   }
    ],
  canActivate: [AuthAgentHomierGuardService]
  },
  {
    path: 'realtor',
    component: RealtorDashboardComponent,
  children: [
   {
    path: 'realtor-main',
    component: RealtorMainComponent
   },
   {
    path: 'house-for-sell',
    component: HouseForSellComponent     
   },
   {
    path: 'sold-house',
    component: SoldHouseComponent
   },
   {
    path: 'chat-client',
    component: ChatClientComponent,
    data: {title: "request-house-by-client"}
   },
   {
    path: 'rented-house',
    component: RentedHouseComponent
   },
   {
    path: 'house-for-claim',
    component: HouseForClaimComponent
   },
   {
    path: 'send-email/:id',
    component: SendEmailComponent
   },
   {
    path: 'realtor-password',
    component: RealtorPasswordComponent
   }
 ],
  canActivate: [AuthAgentRealtorGuardService]
  },
  {
    path: '**',
    component: NotFoundComponent,
    data: {title: "404-not-found"}
  }
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes //, {enableTracing: true} 
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
