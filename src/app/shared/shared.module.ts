import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';



@NgModule({
  declarations: [NavbarComponent, HomeComponent, PageNotFoundComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
