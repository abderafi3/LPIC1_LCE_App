import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LearnModusComponent } from './learn-modus/learn-modus.component';
import { CheckModusComponent } from './check-modus/check-modus.component';
import { ExamModusComponent } from './exam-modus/exam-modus.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'learn-modus', component: LearnModusComponent},
  {path: 'check-modus', component: CheckModusComponent},
  {path: 'exam-modus', component: ExamModusComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
