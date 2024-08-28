import { Coracao } from './../../shared/coracao.model';
import { Component, Input, OnInit,OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit,OnChanges {
  // public coracaoQuebrado: string ="bi bi-heartbreak"
  // public coracao:string="bi bi-heart-fill"
  @Input() public tentativas:number=0
  public coracoes:Array<Coracao>= new Array<Coracao>();
  constructor() {
    this.coracoes.push(
      new Coracao(true),new Coracao(true),new Coracao(true)
      )}

  ngOnInit(): void {
  }
  ngOnChanges(): void {
    if(this.tentativas!==this.coracoes.length){
      let indice=this.coracoes.length-this.tentativas-1
      this.coracoes[indice].exist=false
    }
  }
}
