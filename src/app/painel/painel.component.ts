import { Frase } from './../../shared/frase.model';
import { Component, OnInit,EventEmitter,Output,OnDestroy} from '@angular/core';
import{FRASES}from './frase-mock'
@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit,OnDestroy {

  public frases:Frase[]=FRASES
  public instrucao:string="Traduza a Frase:"
  public resposta:string

  public rodada:number
  public rodadaFrase!: Frase;
  public progresso:number
  public tentativas:number
  @Output() public encerrarjogo=new EventEmitter()
  constructor() {this.resposta='',
  this.rodada=0,this.atualizaRodada(),
  this.progresso=0,this.tentativas=3}
  ngOnDestroy(): void {
  }
  ngOnInit(): void {
  }

  public atualizaResposta(resposta:Event):void{
    this.resposta=(<HTMLInputElement>resposta.target).value
  }
  public verificaResposta():void{
    if(this.rodadaFrase.frasePort.toUpperCase()==this.resposta.toUpperCase()){
    this.rodada++
    this.progresso=this.progresso+(100/this.frases.length)
    if(this.rodada==(this.frases.length)){
      this.encerrarjogo.emit('Vitoria')
    }else{
    this.atualizaRodada()}
    }else{
        this.tentativas--
    }
    if(this.tentativas===-1){
      this.encerrarjogo.emit('Derrota')
    }
  }
    public atualizaRodada():void{
      this.rodadaFrase=this.frases[this.rodada]
      this.resposta=""
    }
}
