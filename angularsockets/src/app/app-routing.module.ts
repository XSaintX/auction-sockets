import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component'
import { PanelComponent } from './pages/panel/panel.component';
import { MainComponent } from './pages/main/main.component';
import { UserGuard } from './guards/user-guard.service';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'panel', component: PanelComponent,
    canActivate: [UserGuard]
  },
  {
    path: 'main', component: MainComponent,
    canActivate: [UserGuard]
  },
  { path: '**', component: LoginComponent }
]
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
