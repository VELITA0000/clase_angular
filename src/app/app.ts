import { Component, signal } from '@angular/core';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { Movies } from './pages/movies/movies';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Movies],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  nombre = 'Velita'
}
