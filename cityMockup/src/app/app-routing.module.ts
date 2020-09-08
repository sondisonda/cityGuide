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
    path: 'support',
    loadChildren: () => import('./pages/support/support.module').then(m => m.SupportModule)
  },
  {
    path: 'tutorial',
    loadChildren: () => import('./pages/tutorial/tutorial.module').then(m => m.TutorialModule),
    canLoad: [CheckTutorial]
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
    path: 'place-list',
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/place-list/place-list.module').then(m => m.PlaceListModule)
      },
      {
        path: 'event-detail/:eventId',
        loadChildren: () => import('./pages/event-detail/event-detail.module').then(m => m.EventDetailModule)
      },
      {
        path: 'place-details/:placeId',
        loadChildren: () => import('./pages/place-detail/place-detail.module').then(m => m.PlaceDetailModule)
      }]
  },

  {
    path: 'nav',
    loadChildren: () => import('./pages/nav-page/nav-page.module').then( m => m.NavPagePageModule)
  },
  {
    path: 'event-list',
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/event-list/event-list.module').then( m => m.EventListPageModule)
      },
      {
        path: 'event-detail/:eventId',
        loadChildren: () => import('./pages/event-detail/event-detail.module').then(m => m.EventDetailModule)
      }]
  },
  {
    path: 'scanner',
    loadChildren: () => import('./pages/scanner/scanner.module').then( m => m.ScannerPageModule)
  },
  {
    path: 'trail-list',    children: [
      {
        path: '',
        loadChildren: () => import('./pages/trail-list/trail-list.module').then( m => m.TrailListPageModule)
      },
      {
        path: 'trail-detail/:trailId',
        loadChildren: () => import('./pages/trail-detail/trail-detail.module').then( m => m.TrailDetailPageModule)
      }]
  },


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
