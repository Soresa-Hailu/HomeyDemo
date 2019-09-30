import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FeaturesRoutingModule } from './features-routing.module';

import { DashboardComponent } from './users/components/dashboard/dashboard-main/dashboard.component';
import { EditProfileComponent } from './users/components/profile/edit-profile/edit-profile.component';
import { DashboardHomeComponent } from './users/components/dashboard/dashboard-home/dashboard-home.component';
import { ReUsableModule } from '../common/re-usable.module';
import { RegistrationComponent } from './users/registration/registration.component';
import { EditHouseComponent } from './house/edit-house/edit-house.component';
import { FindHouseComponent } from './house/find-house/find-house.component';
import { HouseListingComponent } from './house/house-listing/house-listing.component';
import { HouseMainComponent } from './house/house-main/house-main.component';
import { HouseNewComponent } from './house/house-new/house-new.component';
import { HouseViewComponent } from './house/house-view/house-view.component';
import { DashboardMainComponent } from './agent/components/dashboard/dashboard-main/dashboard-main.component';
import { AgentRegistrationComponent } from './agent/agent-registration/agent-registration.component';
import { AdminDashboardComponent } from './admin/components/admin-dashboard/admin-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ReUsableModule
  ],
  declarations: [
    RegistrationComponent,
    DashboardComponent,
    EditProfileComponent, 
    DashboardHomeComponent, 
    EditHouseComponent,
    FindHouseComponent,
    HouseListingComponent,
    HouseMainComponent,
    HouseNewComponent,
    HouseViewComponent,
    DashboardMainComponent,
    AgentRegistrationComponent,
    AdminDashboardComponent
  ],
  providers: [
  ]
})
export class FeaturesModule { }
