import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { Movies } from './pages/movies/movies';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Movies, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  nombre = 'Velita'
}
