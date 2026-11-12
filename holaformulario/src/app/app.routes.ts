import { Routes } from '@angular/router';
import { FormPlantilla } from './form-plantilla/form-plantilla';
import { FormActividad } from './form-actividad/form-actividad';

export const routes: Routes = [
    { path: '', component: FormPlantilla, title:'Formulario basado en plantilla' },
    { path: 'form2', component: FormActividad, title: 'Registro de estudiantes'}
];