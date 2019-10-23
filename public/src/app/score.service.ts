import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  session: any;
  constructor(private _http: HttpClient) { }
  postScore(score) {
    this.session = score;
    console.log('Final score', score);
    return this.session;
  }
  getScore() {
    return this.session;
  }
}
