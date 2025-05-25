export class Game {
    public players: string[] = ["Gary", "Simon", "Jonas"];
    public stack: string[] = [];
    public playedCards: string[] = [];
    public currentPlayer: number = 0;

    constructor(){
        for (let i = 1; i < 14; i++) {
            this.stack.push('spade_' + i);
            this.stack.push('clubs_' + i);
            this.stack.push('hearts_' + i);
            this.stack.push('diamonds_' + i); 
        }
        shuffle(this.stack);
    }
}

function shuffle(array: string[]){
    for(let i = array.length - 1; i > 0; i--){
        const random = Math.floor(Math.random() * (i+1));

        [array[i], array [random]] = [array [random], array[i]]
    }
}