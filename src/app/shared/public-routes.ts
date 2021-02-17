import { RouterModule, Routes } from '@angular/router';
import { PublicLayoutComponent } from '../shared/public-layout/public-layout.component'
import { LoginComponent } from '../components/login/login.component'
import { UsersComponent } from '../components/users/users.component'
import { DetailsComponent } from '../components/details/details.component';

//the routes to access by url
export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    pathMatch:'full',
    component: LoginComponent
  },
  {
    path: 'home',
    component: PublicLayoutComponent,
    children: [
      { path: '', component:  UsersComponent},
      { path: 'user/:name', component:  DetailsComponent},
      { path: 'users/:name', component:  UsersComponent}
    ]
  }

]
