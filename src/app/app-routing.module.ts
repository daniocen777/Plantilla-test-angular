import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "user-registro", loadChildren: "./user/user.module#UserModule" },
  {
    path: "principal",
    loadChildren: "./principal/principal.module#PrincipalModule",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
