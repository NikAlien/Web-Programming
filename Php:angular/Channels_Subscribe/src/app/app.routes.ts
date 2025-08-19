import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { ViewDetailsComponent } from './view-details/view-details.component';

export const routes: Routes = [
    {path: '', redirectTo: '/details', pathMatch: 'full'},
    {path: 'details', component: ViewDetailsComponent}
];
