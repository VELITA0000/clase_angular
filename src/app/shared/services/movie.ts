import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Movie {
  title: string = '';

  getMovie(): string {
    return this.title;
  }

  setMovie(title: string): void {
    this.title = title;
  }

}
