import { Component, OnInit, Input } from '@angular/core';
import { Coracao } from '../shared/coracao.model';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

  @Input() public tentativas: number


  public coracoes: Coracao[] = [
        new Coracao(true),
        new Coracao(true),
        new Coracao(true)
  ];


  constructor() {
  }
  
  ngOnInit() {
    
  }

  ngOnChanges(){
    if(this.tentativas !== this.coracoes.length){
      let indice = this.coracoes.length - this.tentativas
      this.coracoes[indice - 1].cheio = false

    }
  }

}
