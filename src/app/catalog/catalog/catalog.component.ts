import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-catalog',
  standalone: false,
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss'
})
export class CatalogComponent {
  
  produtos = [
    {
      nome: "Bolo de maracujá com cobertura",
      descricao: "Bolo de maracujá com cobertura deliciosa de maracuja",
      preco: 30.00,
      imagem: "/imgs/bolo-maracuja-cobertura.jpg"
    },
    {
      nome: "Bolo de maracujá simples",
      descricao: "Bolo de maracujá simples, fofinho é delicioso",
      preco: 25.00,
      imagem: "/imgs/bolo-maracuja.jpg"
    },
    {
      nome: "Bolo de Banana com canela",
      descricao: "Bolo fofinho de banana com um delicado toque de canela.",
      preco: 20.00,
      imagem: "/imgs/banana_canela.jpg"
    },
     {
      nome: "Bolo de mandioca",
      descricao: "Bolo delicioso de mandioca",
      preco: 40.00,
      imagem: "/imgs/bolo-mandioca.jpg"
    },
    {
      nome: "Bolo de leite",
      descricao: "Bolo macio e leve, com o sabor suave do leite.",
      preco: 25.00,
      imagem: "/imgs/bolo-leite-sem-cobertura.jpg"
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
