import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Game } from '../../models/game';
import { PlayerComponent } from '../player/player.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';


@Component({
  selector: 'app-game',
  imports: [
    CommonModule,
    PlayerComponent,
    MatIconModule, 
    MatButtonModule,
  ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})

export class GameComponent {
  arrNumb: number[] = [1,2,3,4];
  pickCardAnimation = false;
  game!: Game;
  currentCard: string = '';

  constructor(public dialog: MatDialog){}

  ngOnInit(): void{
    this.newGame();
  }

  newGame(){
    this.game = new Game();
    console.log(this.game)
  }

  takeCard(){
    if(!this.pickCardAnimation){
      this.currentCard = this.game.stack.pop() ?? '';
      this.pickCardAnimation = true;
      
      setTimeout(() => {
        this.pickCardAnimation = false;
        this.game.playedCards.push(this.currentCard);
      }, 1500);
    };
  }

   openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);
    dialogRef.afterClosed().subscribe((name: string) => {
      this.game.players.push(name);
    })
    ;
  }
}
