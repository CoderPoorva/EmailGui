import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmailComponent } from './email/email.component';

const routes: Routes = [
  {
    path: '',component: HomeComponent,pathMatch:"full"
  },
  
  {
    path: 'email', component: EmailComponent,pathMatch:"full"
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
