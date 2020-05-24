import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RegistroComponent } from "./registro/registro.component";

import { Routes, RouterModule } from "@angular/router";
import { PruebaComponent } from "./prueba/prueba.component";

// Material
import { MatButtonModule } from "@angular/material/button";

const routes: Routes = [
  { path: "", component: RegistroComponent },
  { path: "user-prueba", component: PruebaComponent },
];

@NgModule({
  declarations: [RegistroComponent, PruebaComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MatButtonModule],
})
export class UserModule {}
