import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminMainComponent } from './components/admin-main/admin-main.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {
    path: 'dashboard',
    component: AdminDashboardComponent,
    // children: [
    //   {
    //     path: '',
    //   }
    // ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  declarations: [
    AdminDashboardComponent,
    AdminMainComponent,
   //AddAgentComponent,
 //ListAgentComponent,
    //EditAgentComponent,
  //AdminNavbarComponent,
    //AdminFooterComponent,
   // AdminSidebarComponent
  ]
})
export class AdminModule { }
