import { Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { userPageResolver } from '../../routes/resolvers/user-page.resolver';
import { userPageGuard } from '../../routes/auth-guards/user-page.guard';

export const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    canActivate: [userPageGuard],
    resolve: { user: userPageResolver },
  },
];
