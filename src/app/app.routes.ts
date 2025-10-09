import { Routes } from '@angular/router';
import { Movies } from './pages/movies/movies';
import { MovieItem } from './pages/movies/movie-item/movie-item';
import { MovieDetails } from './pages/movies/movie-details/movie-details';
import { NotFound } from './pages/not-found/not-found'
export const routes: Routes = [
    // { path: '', component: Home},
    // para evitar que parezca que 2 paginas tienen el mismo contenido
    { path: '', redirectTo: 'movies', pathMatch: 'full'},
    { path: 'movies', component: Movies},
    { path: 'movie-items', component: MovieItem},
    { path: 'movie-details', component: MovieDetails},
    { path: '**', component: NotFound}
    // primero poner rutas fijas, con valores que no cambian y luego los variables, como id que puede cambiar
];
