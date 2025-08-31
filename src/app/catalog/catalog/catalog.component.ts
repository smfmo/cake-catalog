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
      nome: "Bolo de Banana com canela",
      descricao: "Bolo fofinho de banana com um delicado toque de canela.",
      preco: 20.00,
      imagem: "/imgs/bolo_banana_canela.jpg"
    },
    {
      nome: "Bolo de leite",
      descricao: "Bolo macio e leve, com o sabor suave do leite.",
      preco: 40.00,
      imagem: "/imgs/bolo_leite.jpg"
    },
    {
      nome: "Bolo de limão simples",
      descricao: "Fofinho e saboroso",
      preco: 20.00,
      imagem: "/imgs/limao.jpg"
    },
    {
      nome: "Bolo de laranja simples",
      descricao: "Fofinho e saboroso",
      preco: 20.00,
      imagem: "/imgs/laranja.jpg"
    },
    {
      nome: "Bolo de cenoura com calda",
      descricao: "calda cremosa",
      preco: 30.00,
      imagem: "/imgs/cenoura_calda.jpg"
    },
     {
      nome: "Bolo de chocolate com calda",
      descricao: "Com granulado",
      preco: 30.00,
      imagem: "/imgs/chocolate_calda.jpg"
    }
  ]
}
