import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeRouteRoutes } from './home-route.routing';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
@NgModule({
  declarations: [HomeComponent, LoginComponent, CadastrarComponent],
  imports: [CommonModule, HomeRouteRoutes, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [],
})
export class HomeModule {}
