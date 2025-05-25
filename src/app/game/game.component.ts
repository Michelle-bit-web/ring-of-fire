import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Game } from '../../models/game';


@Component({
  selector: 'app-game',
  imports: [
    CommonModule,
  ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})

export class GameComponent {
  pickCardAnimation = false;
  game?: Game;

  ngOnInit(): void{
    this.newGame();
  }

  newGame(){
    this.game = new Game();
    console.log(this.game)
  }

  takeCard(){
    this.pickCardAnimation = true;
    console.log('take card', this.pickCardAnimation)
  }
}
