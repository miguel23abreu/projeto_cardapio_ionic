import { Alimento } from '../models/Alimento.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  constructor() {}

  nome_produto: string = '';
  descricao_produto: string = '';
  preco_produto: number = 0;


  public alimento = '';

  public falseAdicionarAlimento: boolean = false;

  public btn_mudaAdionarAlimento_t(): void{
      this.falseAdicionarAlimento = true;
  }
  public btn_mudaAdionarAlimento_f(): void{
    this.falseAdicionarAlimento = false;
  }

  ngOnInit(): void {
      
  }

  public salvarProduto(): void{
    console.log('nome do produto: ', this.nome_produto);
    console.log('descrição: ',this.descricao_produto);
    console.log('preço: ', this.preco_produto);
    alert('Salvo com sucesso');
  }

  public false_listaAlimentos:boolean = false;
  public if_listaAlimentos_vazio(): void{
    if(this.listaAlimentos.length == 0){
      this.falseAdicionarAlimento = true;
    }
    else{
      this.falseAdicionarAlimento = false;
    }
  }

  public listaAlimentos: Alimento[] = [
    {
      nome: 'Pokémon Yellow',
      descricao: 'Descrição do produto',
      preco: 20.99,
      imagem: 'https://th.bing.com/th/id/R.749802d4046b9280203db9bd59cb3ebd?rik=CoyJn9IO2vQvFg&riu=http%3a%2f%2f3.bp.blogspot.com%2f-EmuddJ60f5o%2fVZWv3DhZi9I%2fAAAAAAAAB6c%2fMxTt_LcqTHM%2fs1600%2fpokemon_yellow_cover_art_by_comunello76-d4xfrr5.jpg&ehk=vJ7C8dRab%2fjzO7d4aovyx%2bv3ZzLzP5mLYfyu63ovaEM%3d&risl=&pid=ImgRaw&r=0'
    },
    /*{
      nome: '',
      descricao: '',
      preco: 0,
      imagem: 'https://www.promoview.com.br/uploads/2017/04/b72a1cfe.png'
    }*/
  ];


  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

}
