import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ScoreService } from '../score.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  colors = ['Blue', 'Red', 'Yellow', 'Green'];
  text: any;
  score = 0;
  timer = 0;
  interval: any;
  constructor(private _httpService: HttpService,
              private _route: ActivatedRoute,
              private _router: Router,
              private _scoreService: ScoreService) {
  }

  ngOnInit() {
    this.colors = ['Blue', 'Red', 'Yellow', 'Green'];
    this.text = this.random();
    if (this.timer === 0) {
      this.countdown();
    }
  }
  random() {
    const randomtext = this.colors[Math.floor(Math.random() * this.colors.length)];
    return randomtext;
  }
  red(text) {
    if (text === 'Red') {
      this.score = this.score + 1;
      console.log(this.score);
      this.ngOnInit();
    } else {
          console.log('game over');
          this._scoreService.postScore(this.score);
          this._router.navigate(['/']);
    }
  }
  green(text) {
    if (text === 'Green') {
      this.score = this.score + 1;
      console.log(this.score);
      this.ngOnInit();
    } else {
          console.log('game over');
          this._scoreService.postScore(this.score);
          this._router.navigate(['/']);
    }
  }
  blue(text) {
    if (text === 'Blue') {
      this.score = this.score + 1;
      console.log(this.score);
      this.ngOnInit();
    } else {
          console.log('game over');
          this._scoreService.postScore(this.score);
          this._router.navigate(['/']);
    }
  }
  yellow(text) {
    if (text === 'Yellow') {
      this.score = this.score + 1;
      console.log(this.score);
      this.ngOnInit();
    } else {
      console.log('game over');
      this._scoreService.postScore(this.score);
      this._router.navigate(['/']);
    }
  }
  countdown() {
    console.log('*******', this.timer);
    this.interval = setInterval( () => {
      if (this.timer !== 10) {
        this.timer = this.timer + 1;
      } else {
        clearInterval(this.interval);
        this._scoreService.postScore(this.score);
        this._router.navigate(['/']);
      }
    }, 1000);
  }
}
