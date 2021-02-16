import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { TestComponent } from './components/test/test.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./components/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./components/register/register.module').then(
        (m) => m.RegisterModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./components/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'search',
    loadChildren: () =>
      import('./components/search/search.module').then((m) => m.SearchModule),
  },
  {
    path: 'reserve',
    loadChildren: () =>
      import('./components/reserve/reserve.module').then((m) => m.ReserveModule),
  },
  {
    path: 'users-profile',
    loadChildren: () =>
      import('./components/profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'experts-profile',
    loadChildren: () =>
      import('./components/profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'chat',
    loadChildren: () =>
      import('./components/chat/chat.module').then((m) => m.ChatModule),
  },
  {
    path: 'register-user',
    loadChildren: () =>
      import('./components/register-user/register-user.module').then((m) => m.RegisterUserModule),
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
  },
  {
    path: 'test',
    component: TestComponent,
    //canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: '/home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
