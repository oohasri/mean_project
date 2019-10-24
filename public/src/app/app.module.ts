import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Registering service http
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
// Form module
import { FormsModule } from '@angular/forms';
import { CheckLeaderboardComponent } from './check-leaderboard/check-leaderboard.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
// Bootstrap
import bootstrap from 'bootstrap';
import { GameComponent } from './game/game.component';
import { ScoreService } from './score.service';
import { ReadyComponent } from './ready/ready.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckLeaderboardComponent,
    LeaderboardComponent,
    GameComponent,
    ReadyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ],
  providers: [HttpService,
              ScoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
