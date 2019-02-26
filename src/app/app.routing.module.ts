import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: "auth",
    loadChildren: "./modules/authentication/authentication.module#AuthenticationModule"
  },
  {
    path: "home",
    loadChildren: "./modules/home/home.module#HomeModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
