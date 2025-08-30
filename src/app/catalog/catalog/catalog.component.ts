import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-catalog',
  standalone: false,
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss'
})
export class CatalogComponent {
  @Input() nome!: string;
  @Input() descricao!: string;
  @Input() preco!: number;
  @Input() imagem!: string;

  produtos = [
    {
      nome: "Bolo de Chocolate",
      descricao: "Cobertura cremosa e recheio de brigadeiro",
      preco: 45.00,
      imagem: "/imgs/bolo_choclate.jpg"
    },
    {
      nome: "Bolo de Chocolate",
      descricao: "Cobertura cremosa e recheio de brigadeiro",
      preco: 45.00,
      imagem: "/imgs/bolo_choclate.jpg"
    },
    {
      nome: "Bolo de Chocolate",
      descricao: "Cobertura cremosa e recheio de brigadeiro",
      preco: 45.00,
      imagem: "/imgs/bolo_choclate.jpg"
    },
    {
      nome: "Bolo de Chocolate",
      descricao: "Cobertura cremosa e recheio de brigadeiro",
      preco: 45.00,
      imagem: "/imgs/bolo_choclate.jpg"
    },
    {
      nome: "Bolo de Chocolate",
      descricao: "Cobertura cremosa e recheio de brigadeiro",
      preco: 45.00,
      imagem: "/imgs/bolo_choclate.jpg"
    },
  ]
}
