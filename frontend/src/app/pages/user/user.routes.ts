import { userPageResolver } from './../../resolvers/user-page.resolver';
import { Routes } from '@angular/router';
import { UserComponent } from './user.component';

export const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    resolve: { user: userPageResolver },
  },
];
