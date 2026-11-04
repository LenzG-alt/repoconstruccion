import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Productos } from './pages/productos/productos';
import { NoEncontrado} from './pages/no-encontrado/no-encontrado'


export const routes: Routes = [
    {
        path: '',
        component: Inicio
    },
    {
        path: 'productos',
        component: Productos
    },
    {
        path: '**',
        component: NoEncontrado
    }

];
