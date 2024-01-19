import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LearnModusComponent } from './learn-modus/learn-modus.component';
import { CheckModusComponent } from './check-modus/check-modus.component';
import { ExamModusComponent } from './exam-modus/exam-modus.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionItemComponent } from './question-item/question-item.component';
import { ScoreComponent } from './score/score.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LearnModusComponent,
    CheckModusComponent,
    ExamModusComponent,
    QuestionListComponent,
    QuestionItemComponent,
    ScoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
