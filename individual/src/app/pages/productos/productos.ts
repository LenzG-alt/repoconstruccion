import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productos',
  imports: [CommonModule],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {
  productos = [
    {
      codigo: 'SUP-001',
      nombre: 'Gold Standard Whey Protein 2 lb',
      categoria: 'Proteínas',
      precio: 189.90,
      stock: 15,
      imagen: '/productos/whey-protein.webp'
    },
    {
      codigo: 'SUP-002',
      nombre: 'Creatina Monohidratada 300 g',
      categoria: 'Rendimiento',
      precio: 99.90,
      stock: 22,
      imagen: '/productos/creatina.webp'
    },
    {
      codigo: 'SUP-003',
      nombre: 'BCAA 2:1:1 400 g',
      categoria: 'Recuperación',
      precio: 119.90,
      stock: 8,
      imagen: '/productos/bcaa.webp'
    },
    {
      codigo: 'SUP-004',
      nombre: 'Pre Workout 300 g',
      categoria: 'Energía',
      precio: 129.90,
      stock: 12,
      imagen: '/productos/pre-entreno.webp'
    },
    {
      codigo: 'SUP-005',
      nombre: 'Omega 3 1000 mg',
      categoria: 'Bienestar',
      precio: 69.90,
      stock: 30,
      imagen: ''
    },
    {
      codigo: 'SUP-006',
      nombre: 'Mass Gainer 5 lb',
      categoria: 'Ganancia muscular',
      precio: 159.90,
      stock: 6,
      imagen: ''
    },
    {
      codigo: 'SUP-007',
      nombre: 'Glutamina 300 g',
      categoria: 'Recuperación',
      precio: 89.90,
      stock: 18,
      imagen: ''
    },
    {
      codigo: 'SUP-008',
      nombre: 'Multivitamínico 60 cápsulas',
      categoria: 'Bienestar',
      precio: 59.90,
      stock: 25,
      imagen: ''
    }
  ];
}
