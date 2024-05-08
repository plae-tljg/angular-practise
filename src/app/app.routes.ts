import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Main02detailsComponent } from './main02details/main02details.component';
import { Main00dashboardComponent } from './main00dashboard/main00dashboard.component';
import { Main01listComponent } from './main01list/main01list.component';


export const routes: Routes = [
    { path: 'product/detail/:id', component: Main02detailsComponent},
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: Main00dashboardComponent },
    { path: 'product', component: Main01listComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes), RouterModule],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
