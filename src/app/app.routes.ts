import { Routes } from '@angular/router';
import { LayoutComponent } from './core/components/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'pending-labs',
        title: 'Pending labs | Medikea',
        loadComponent: () =>
          import('./pages/pending-lab/pending-lab.component'),
      },
      {
        path: 'done-labs',
        title: 'Done labs | Medikea',
        loadComponent: () =>
          import(
            './pages/done-labs/done-labs.component'
          ),
      },
      {
        path: 'dashboard',
        title: 'Dashboard | Medikea',
        loadComponent: () => import('./pages/dashboard/dashboard.component'),
      },
      {
        path: 'profile',
        title: 'My profile | Medikea',
        loadComponent: () => import('./pages/account/account.component'),
      },
      {
        path: 'all-labs',
        title: 'All labs | Medikea',
        loadComponent: () =>
          import('./pages/all-ordered-labs/all-ordered-labs.component'),
      },
      {
        path: 'manage-labs',
        title: 'Manage labs | Medikea',
        loadComponent: () =>
          import('./pages/manage-labs/manage-labs.component'),
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];
