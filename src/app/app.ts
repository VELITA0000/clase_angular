import { ChangeDetectorRef, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { HttpClient } from '@angular/common/http';
import { Post } from './shared/types/post';
import { environment } from '../environments/environment';

// import { Movies } from './pages/movies/movies'; para agregar el Movies hardcodeado

@Component({
  selector: 'app-root',
  imports: [Header, Footer, RouterOutlet], // se pone Movies para hardcodear
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  nombre = 'Velita'

  posts: Post[] = [];

  constructor(
    private changeDetectorRef: ChangeDetectorRef, 
    private httpClient: HttpClient) {
    setTimeout(() => {
      this.nombre = 'David';
      changeDetectorRef.markForCheck();
    }, 3000);
  }

  ngOnInit(): void {
    this.httpClient
    .get<Post[]>(environment.apiUrl)
    .subscribe({
      // cuando lleguen los datos se ejecuta la funcion
      next: (response: Post[]) => {
        this.posts = response;
      },
      error: (error) => {
        console.log('Algo salio mal', error);
      }
    });
  }
}
