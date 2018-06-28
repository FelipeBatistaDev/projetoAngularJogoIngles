import { Component, OnInit, EventEmitter,Output, OnDestroy } from '@angular/core';
import { Frase } from "../shared/frase.model"
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES;
  public instrucao: string = 'Traduza a frase';
  public resposta: string = '';

  public rodada: number = 0;
  public rodadaFrase: Frase;
  public progresso = 0;

  public tentativas: number = 3;

  @Output() public encerrarJogo: EventEmitter<String> = new EventEmitter()

  constructor() {
    this.rodadaFrase = this.frases[this.rodada];
  }

  ngOnInit() {
  }

  ngOnDestroy(){
  }

  atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  verificaResposta(): void {
    if (this.rodadaFrase.frasePtBr == this.resposta) {

      //trocar pergunta da rodada
      this.rodada++;

      //progresso
      this.progresso = this.progresso + (100 / this.frases.length);

      if(this.rodada === 4){
        this.encerrarJogo.emit('vitoria')

      }

      // atualiza o objeto rodadaFrase
      this.atualizaRodada();


    } else {
      //diminuir tentativas
      this.tentativas--;

      //limpa text area
      this.resposta = '';

      //valida derrota
      if (this.tentativas === -1) {
        this.encerrarJogo.emit('derrota')
        
      }
    }
  }

  atualizaRodada(): void {
    this.resposta = '';

    this.rodadaFrase = this.frases[this.rodada];
  }

}
