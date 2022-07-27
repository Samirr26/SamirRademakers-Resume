import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {RouterModule, Routes} from "@angular/router";
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { InformationComponent } from './components/information/information.component';
import { BiographyComponent } from './components/biography/biography.component';


const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'aboutme/biography', component: BiographyComponent},
  {path: 'aboutme/information', component: InformationComponent},
  {path: 'aboutme/achievements', component: AchievementsComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    SideNavbarComponent,
    HomepageComponent,
    AboutmeComponent,
    AchievementsComponent,
    InformationComponent,
    BiographyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDividerModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
