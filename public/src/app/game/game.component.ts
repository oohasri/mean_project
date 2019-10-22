import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  colors = ['Blue', 'Red', 'Yellow', 'Green'];
  text: any;
  score = 0;
  constructor(private _httpService: HttpService,
              private _route: ActivatedRoute,
              private _router: Router) {
  }

  ngOnInit() {
    this.colors = ['Blue', 'Red', 'Yellow', 'Green'];
    this.text = this.random();
  }
  random() {
    const randomtext = this.colors[Math.floor(Math.random() * this.colors.length)];
    // console.log(randomtext);
    return randomtext;
  }
  red(text) {
    if (text === 'Red') {
      this.score = this.score + 1;
      console.log(this.score);
      // console.log('reddddd');
      this.ngOnInit();
    } else {
        if (this.score > 0) {
          this.score = this.score - 1;
          console.log(this.score);
        } else {
          console.log('game over');
          this._router.navigate(['/gameover']);
        }
    }
  }
  green(text) {
    if (text === 'Green') {
      this.score = this.score + 1;
      console.log(this.score);
      // console.log('green');
      this.ngOnInit();
    } else {
        if (this.score > 0) {
          this.score = this.score - 1;
          console.log(this.score);
        } else {
          console.log('game over');
          this._router.navigate(['/gameover']);
        }
    }
  }
  blue(text) {
    if (text === 'Blue') {
      this.score = this.score + 1;
      console.log(this.score);
      // console.log('blue');
      this.ngOnInit();
    } else {
        if (this.score > 0) {
          this.score = this.score - 1;
          console.log(this.score);
        } else {
          console.log('game over');
          this._router.navigate(['/gameover']);
        }
    }
  }
  yellow(text) {
    if (text === 'Yellow') {
      this.score = this.score + 1;
      console.log(this.score);
      // console.log('Yellow');
      this.ngOnInit();
    } else {
        if (this.score > 0 ) {
          this.score = this.score - 1;
          console.log(this.score);
        } else {
          console.log('game over');
          this._router.navigate(['/gameover']);
        }
    }
  }
  stopTimer(score) {
    console.log('score is ', score);
    // this._router.navigate(['/gameover']);
  }
}
