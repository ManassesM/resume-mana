import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ErrorsComponent } from './pages/errors/errors.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: AppComponent, children: [
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', component: ErrorsComponent },
  ]   
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
