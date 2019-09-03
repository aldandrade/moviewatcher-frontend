import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MainPageComponent } from './main-page/main-page.component';
import { MovieServiceService } from './services/movie-service.service';
import { FormsModule } from '@angular/forms';
import { MovieGridComponent } from './movie-grid/movie-grid.component';
import { MovieCardComponent } from './movieGrid/movie-card.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MovieGridComponent,
    MovieCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MovieServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
