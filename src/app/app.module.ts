import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { HeaderComponent } from './component/header/header.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ContentComponent } from './component/content/content.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap'
import { Routes, RouterModule } from '@angular/router';
import { ModelsComponent } from './component/models/models.component';
import { BrandComponent } from './component/brand/brand.component';
import { OwnershipComponent } from './component/ownership/ownership.component';
import { ExperienceComponent } from './component/experience/experience.component';
import { MotorsportComponent } from './component/motorsport/motorsport.component';
import { StoreComponent } from './component/store/store.component';
import { HomeComponent } from './component/home/home.component';


// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    ModelsComponent,
    BrandComponent,
    OwnershipComponent,
    ExperienceComponent,
    MotorsportComponent,
    StoreComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonToggleModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    Routes,
    RouterModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
