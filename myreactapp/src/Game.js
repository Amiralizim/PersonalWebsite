import React, {useState} from 'react';
import './Game.css';
function Game() {
    const CELL_SIZE = 20;
    const WIDTH_SIZE = 800;
    const HEIGHT = 600;
    const WIDTH = 600;
    const rows = HEIGHT / CELL_SIZE;
    const cols = WIDTH / CELL_SIZE;
    let cells = useState(true);

    function makeEmptyBoard() {
        let board = [];
        for (let y=0; y<rows; y++){
            board[y] = [];
            for (let x=0; x < this.cols; x++){
                board[y][x] = false;
            }
        }
        return board;
    }

    function makeCells(board){
        let cells = [];
        for (let y=0; y < rows; y++){
            for (let x=0; x< cols; x++){
                if(board[y][x]){
                    cells.push({x,y})
                }
            }
        }
        return cells;
    }

    function getElementOffset(){

    }


    return ( 
        <div>        
            <div className="Board"          
            style={{ 
                width: WIDTH, 
                height: HEIGHT,
                backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px` 
            }}> 
            </div>      
        </div>    
    );
}

export default Game;
