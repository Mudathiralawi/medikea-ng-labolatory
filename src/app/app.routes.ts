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
        path: 'pending-perscription',
        title: 'Pending perscription | Medikea',
        loadComponent: () =>
          import('./pages/pending-perscription/pending-perscription.component'),
      },
      {
        path: 'completed-perscription',
        title: 'Completed perscription | Medikea',
        loadComponent: () =>
          import(
            './pages/completed-perscription/completed-perscription.component'
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
        path: 'all-perscription',
        title: 'All perscription | Medikea',
        loadComponent: () =>
          import('./pages/all-perscription/all-perscription.component'),
      },
      {
        path: 'manage-inventory',
        title: 'Inventory | Medikea',
        loadComponent: () =>
          import('./pages/manage-inventory/manage-inventory.component'),
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];
