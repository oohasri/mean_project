import { Component, OnInit } from '@angular/core';
// Dependency injection
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-check-leaderboard',
  templateUrl: './check-leaderboard.component.html',
  styleUrls: ['./check-leaderboard.component.css']
})
export class CheckLeaderboardComponent implements OnInit {
  user: any;
  isError = false;
  errors: [];
  constructor(private _httpService: HttpService,
              private _route: ActivatedRoute,
              private _router: Router,
              ) { }

  ngOnInit() {
    this.user = { name: '', score: ''};
  }
  onCreate() {
    console.log(this.user);
    const random = Math.floor((Math.random() * 10) + 1);
    console.log(random);
    this.user.score = random;
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
