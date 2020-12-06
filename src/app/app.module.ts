import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Injectable } from '@angular/core';
import { RouterModule,Routes } from "@angular/router";
import { DataViewModule } from "primeng/dataview";
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import { DropdownModule } from "primeng/dropdown";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';
import { GraphComponent } from './graph/graph.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CarService } from './car.service';
import { Http, Response, HttpModule } from '@angular/http';
import { ChartModule } from 'primeng/chart';
import { GalleriaModule } from 'primeng/galleria';
import { PlaygroundComponent } from './playground/playground.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'content', component: ContentComponent },
  { path: 'playground', component: PlaygroundComponent},
  { path: 'chart', component: GraphComponent},
  { path: 'gallery', component: GalleryComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SidebarComponent,
    ContentComponent,
    HomeComponent,
    GraphComponent,
    GalleryComponent,
    PlaygroundComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), DataViewModule,
    HttpModule, ChartModule, GalleriaModule, ButtonModule,
    DialogModule, DropdownModule, BrowserAnimationsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
