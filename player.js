class Player{
    constructor(){
        this.board = new Board()
        this.enemyBoard = new Board()
        this.ships = [
            ['submarine',3]
            ['destructor',2]
            ['carrier',5]
            ['cruiser',3]
            ['battleship',4]
        ]
    }

    setShip(name,x,y,orientation){
        let index 
        for(let i = 0; i < 5; i++) {
            if(this.ships[i][1] == name) index = i;
        }

        this.board()
    }
}