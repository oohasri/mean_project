import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckLeaderboardComponent } from './check-leaderboard/check-leaderboard.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { GameComponent } from './game/game.component';


const routes: Routes = [
  { path: '',  component: CheckLeaderboardComponent},
  { path: 'leaderboard', component: LeaderboardComponent},
  { path: 'game', component: GameComponent},
  { path: 'game/:score' , component: CheckLeaderboardComponent},
  { path: '*', pathMatch: 'full', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
