class Board{
    constructor() {
        this.board = new Array(10)
        setBoard()
    }

    setBoard(){
        for(let i = 0; i < 10; i++)
            this.board[i] = new Array(10)

        for(let i = 0; i < 10; i++)
            for(let j = 0; j < 10; j++)
                this.board[i][j] = 0
    }
}