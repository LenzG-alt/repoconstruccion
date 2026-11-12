import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-actividad',
  imports: [CommonModule, FormsModule],
  templateUrl: './form-actividad.html',
  styleUrl: './form-actividad.css',
})
export class FormActividad {
  estudiantes: any[] = [];

  onSubmit(form: NgForm) {

    console.log('Datos del formulario:', form.value);

    let obj = form.value;

    // Agregar el objeto a la lista
    this.estudiantes.push(obj);

    // Limpiar el formulario
    form.resetForm();
  }
}
