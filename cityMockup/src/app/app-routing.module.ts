import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckTutorial } from './providers/check-tutorial.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tutorial',
    pathMatch: 'full'
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule)
  },
  {
    path: 'support',
    loadChildren: () => import('./pages/support/support.module').then(m => m.SupportModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignUpModule)
  },
  {
    path: 'tutorial',
    loadChildren: () => import('./pages/tutorial/tutorial.module').then(m => m.TutorialModule),
    canLoad: [CheckTutorial]
  },
  {
    path: 'schedule',
    loadChildren: () => import('./pages/schedule/schedule.module').then(m => m.ScheduleModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./pages/map/map.module').then(m => m.MapModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'speakers',
    loadChildren: () => import('./pages/speaker-list/speaker-list.module').then(m => m.SpeakerListModule)
  },
  {
    path: 'nav',
    loadChildren: () => import('./pages/nav-page/nav-page.module').then( m => m.NavPagePageModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
