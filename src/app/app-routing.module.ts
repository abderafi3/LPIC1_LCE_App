import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LearnModusComponent } from './learn-modus/learn-modus.component';
import { CheckModusComponent } from './check-modus/check-modus.component';
import { ExamModusComponent } from './exam-modus/exam-modus.component';
import { SingleModusComponent } from './learn-modus/single-modus/single-modus.component';
import { MultiModusComponent } from './learn-modus/multi-modus/multi-modus.component';
import { CheckResultComponent } from './check-modus/check-result/check-result.component';
import { ExamResultComponent } from './exam-modus/exam-result/exam-result.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'learn-modus', redirectTo:'learn-modus/single-modus/1', pathMatch:'full'},
  {path: 'learn-modus', component: LearnModusComponent, children:[
    {path: 'single-modus', redirectTo:'single-modus/1', pathMatch:'full'},
    {path: 'single-modus/:id', component: SingleModusComponent},
    {path: 'multi-modus', component: MultiModusComponent}
  ]},
  {path: 'check-modus/:id', component: CheckModusComponent},
  {path: 'check-result', component: CheckResultComponent},
  {path: 'exam-modus', component: ExamModusComponent},
  {path: 'exam-result', component: ExamResultComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
