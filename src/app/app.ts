import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
// import { Movies } from './pages/movies/movies'; para agregar el Movies hardcodeado

@Component({
  selector: 'app-root',
  imports: [Header, Footer, RouterOutlet], // se pone Movies para hardcodear
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  nombre = 'Velita'
}
