import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { ErrorsComponent } from './pages/errors/errors.component';
import { GoalsComponent } from './pages/goals/goals.component';
import { GradeComponent } from './pages/grade/grade.component';
import { HomeComponent } from './pages/home/home.component';
import { LanguagesComponent } from './pages/languages/languages.component';
import { SkillsComponent } from './pages/skills/skills.component';

const routes: Routes = [
  { path: '', component: AppComponent, children: [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'goals', component: GoalsComponent },
    { path: 'grade', component: GradeComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'languages', component: LanguagesComponent },
    { path: 'courses', component: CoursesComponent },
    { path: '**', component: ErrorsComponent },
  ]   
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
