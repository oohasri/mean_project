import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckLeaderboardComponent } from './check-leaderboard/check-leaderboard.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';


const routes: Routes = [
  { path: '',  component: CheckLeaderboardComponent},
  { path: 'leaderboard', component: LeaderboardComponent},
  { path: '*', pathMatch: 'full', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
