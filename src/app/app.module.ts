import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LearnModusComponent } from './learn-modus/learn-modus.component';
import { CheckModusComponent } from './check-modus/check-modus.component';
import { ExamModusComponent } from './exam-modus/exam-modus.component';
import { QuestionListComponent } from './questions/question-list/question-list.component';
import { QuestionItemComponent } from './questions/question-item/question-item.component';
import { ScoreComponent } from './score/score.component';
import { SingleModusComponent } from './learn-modus/single-modus/single-modus.component';
import { MultiModusComponent } from './learn-modus/multi-modus/multi-modus.component';
import { CheckResultComponent } from './check-modus/check-result/check-result.component';
import { ExamResultComponent } from './exam-modus/exam-result/exam-result.component';

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
    ScoreComponent,
    SingleModusComponent,
    MultiModusComponent,
    CheckResultComponent,
    ExamResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
