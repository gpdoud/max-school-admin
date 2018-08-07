import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ClassListComponent } from '@class/class-list/class-list.component';
import { ClassItemComponent } from './class/class-item/class-item.component';

import { Error404Component } from '@misc/error404/error404.component';

@NgModule({
  declarations: [
    AppComponent
    , ClassListComponent, ClassItemComponent
    , Error404Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
