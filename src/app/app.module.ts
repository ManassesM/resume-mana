import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorsComponent } from './pages/errors/errors.component';
import { GoalsComponent } from './pages/goals/goals.component';
import { GradeComponent } from './pages/grade/grade.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { LanguagesComponent } from './pages/languages/languages.component';
import { CoursesComponent } from './pages/courses/courses.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    ErrorsComponent,
    GoalsComponent,
    GradeComponent,
    SkillsComponent,
    LanguagesComponent,
    CoursesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
