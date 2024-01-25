import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { QuestionsDataService } from './questions/questions-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LearnModusComponent } from './learn-modus/learn-modus.component';
import { CheckModusComponent } from './check-modus/check-modus.component';
import { ExamModusComponent } from './exam-modus/exam-modus.component';
import { QuestionListComponent } from './questions/question-list/question-list.component';
import { QuestionItemComponent } from './questions/question-item/question-item.component';
import { SingleModusComponent } from './learn-modus/single-modus/single-modus.component';
import { MultiModusComponent } from './learn-modus/multi-modus/multi-modus.component';
import { CheckResultComponent } from './check-modus/check-result/check-result.component';
import { ExamResultComponent } from './exam-modus/exam-result/exam-result.component';
import { SingleChoiceComponent } from './questions/question-item/single-choice/single-choice.component';
import { MultiChoiceComponent } from './questions/question-item/multi-choice/multi-choice.component';
import { FillInComponent } from './questions/question-item/fill-in/fill-in.component';
import { FormsModule } from '@angular/forms';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

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
    SingleModusComponent,
    MultiModusComponent,
    CheckResultComponent,
    ExamResultComponent,
    SingleChoiceComponent,
    MultiChoiceComponent,
    FillInComponent,
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(QuestionsDataService, {dataEncapsulation: false}),
    NgbModule,
    
  ],
  providers: [NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
