import {Routes} from '@angular/router';
import {HomeComponent} from './componentes/home/home.component';
import {GrupoListaComponent} from './componentes/grupo/grupo-lista/grupo-lista.component';

export const routes: Routes = [
{path: '', redirectTo: '/home', pathMatch: 'full'},
{path: 'home', component: HomeComponent},
{path: 'teste', component: GrupoListaComponent}
];
