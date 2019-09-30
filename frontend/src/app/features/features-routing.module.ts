import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './users/components/dashboard/dashboard-main/dashboard.component';
import { EditProfileComponent } from './users/components/profile/edit-profile/edit-profile.component';
import { DashboardHomeComponent } from './users/components/dashboard/dashboard-home/dashboard-home.component';
import { AuthGuardService } from '../common/services/auth-guard.service';
import { EditHouseComponent } from './house/edit-house/edit-house.component';
import { FindHouseComponent } from './house/find-house/find-house.component';
import { HouseListingComponent } from './house/house-listing/house-listing.component';
import { HouseMainComponent } from './house/house-main/house-main.component';
import { HouseNewComponent } from './house/house-new/house-new.component';
import { HouseViewComponent } from './house/house-view/house-view.component';
import { RegistrationComponent } from './users/registration/registration.component';
import { AgentRegistrationComponent } from './agent/agent-registration/agent-registration.component';
//import { AddAgentComponent } from './admin/components/add-agent/add-agent.component';
//import { EditAgentComponent } from './admin/components/edit-agent/edit-agent.component';
//import { ListAgentComponent } from './admin/components/list-agent/list-agent.component';
//import { AdminDashboardComponent } from './admin/components/admin-dashboard/admin-dashboard.component';

const Routes: Routes = [
  {
    path: 'sign-up', 
    component: RegistrationComponent
  },
    {
    path: 'sign-in', 
    component: AgentRegistrationComponent
  },
  
  {
    path: 'dashboard', 
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: DashboardHomeComponent
      }
    ],
    canActivate: [AuthGuardService]
  },
  {
    path: 'house',
    component: DashboardComponent,
    children: [
      {
        path: 'new',
        component: HouseNewComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'search',
        component: FindHouseComponent
      },
      {
        path: 'listing',
        component: HouseMainComponent,
        children: [
          {
            path: 'all',
            component: HouseListingComponent,
            data: { data: 'all' }
          },
          {
            path: 'active',
            component: HouseListingComponent,
            data: { data: 'available' }
          },
          {
            path: 'sold',
            component: HouseListingComponent,
            data: { data: 'sold' }
          },
          {
            path: 'inactive',
            component: HouseListingComponent,
            data: { data: 'expired' }
          },
          {
            path: '',
            redirectTo: 'all'
          }
        ],
        canActivate: [AuthGuardService]
      },
      {
        path: 'edit/:houseId',
        component: EditHouseComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'view/:houseId',
        component: HouseViewComponent
      },
      {
        path: '',
        redirectTo: 'new'
      }
    ]    
  },
  {
    path: 'profile',
    component: DashboardComponent,
    children: [
      {
        path: 'edit',
        component: EditProfileComponent
      }
    ],
    canActivate: [AuthGuardService]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(Routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class FeaturesRoutingModule { }
