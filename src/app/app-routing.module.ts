import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "user-registro", loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  {
    path: "principal",
    loadChildren: () => import('./principal/principal.module').then(m => m.PrincipalModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
