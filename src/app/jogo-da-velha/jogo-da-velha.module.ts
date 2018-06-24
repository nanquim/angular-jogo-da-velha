import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JogoDaVelhaComponent } from './jogo-da-velha.component';
import { JogoDaVelhaService } from './shared';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  	JogoDaVelhaComponent
  ],
  /** exports necessarios pq n trabalharemos com rotas, iremos 
  renderizar a tag do componente diretamente no modulo do 
  app.component */
  exports: [
  	JogoDaVelhaComponent
  ],
  providers: [
    JogoDaVelhaService
  ]
})
export class JogoDaVelhaModule { }
