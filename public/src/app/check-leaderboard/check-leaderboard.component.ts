import { Component, OnInit } from '@angular/core';
// Dependency injection
import { HttpService } from '../http.service';
import { ScoreService } from '../score.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-check-leaderboard',
  templateUrl: './check-leaderboard.component.html',
  styleUrls: ['./check-leaderboard.component.css']
})
export class CheckLeaderboardComponent implements OnInit {
  user: any;
  isError = false;
  errors: [];
  score: any;
  constructor(private _httpService: HttpService,
              private _route: ActivatedRoute,
              private _router: Router,
              private _scoreService: ScoreService) { }

  ngOnInit() {
    this.user = { name: '', score: ''};
    this.score = this._scoreService.getScore();
  }
  onCreate() {
    console.log(this.user);
    // const random = Math.floor((Math.random() * 10) + 1);
    // console.log(random);
    // this.user.score = random;
    this.user.score = this.score;
    const observable = this._httpService.create(this.user);
    observable.subscribe((data: any) => {
      console.log('data inserted');
      console.log(data);
      if ('errors' in data) {
        this.isError = true;
        this.errors = data.errors;
      } else {
        this._router.navigate(['/leaderboard']);
      }
    });
  }
}
