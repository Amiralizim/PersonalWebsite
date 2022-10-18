import React, {useState, useRef, useEffect} from 'react';
import './Game.css';
import Cell from './Cell';

function Game() {
    const CELL_SIZE = 20;
    const WIDTH_SIZE = 800;
    const HEIGHT = 600;
    const WIDTH = 600;
    const rows = HEIGHT / CELL_SIZE;
    const cols = WIDTH / CELL_SIZE;
    let [cells, setCells] = useState([]);
    let boardRef = useRef([]);
    let [board, setBoard] = useState([]);
    console.log("board reset called: ", board);

    useEffect(() => {
        setBoard(makeEmptyBoard)
    }, []);

    function makeEmptyBoard() {
        let board = [];
        for (let y=0; y<rows; y++){
            board[y] = [];
            for (let x=0; x < cols; x++){
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
        const rect = boardRef.current.getBoundingClientRect();
        const doc = document.documentElement;
        return {
            x: (rect.left + window.pageXOffset) - doc.clientLeft,
            y: (rect.top + window.pageYOffset) - doc.clientTop,
        };
    }

    function handleClick(event){
        const elemOffset = getElementOffset();
        const offsetX = event.clientX - elemOffset.x;
        const offsetY = event.clientY - elemOffset.y;
        const x = Math.floor(offsetX / CELL_SIZE);
        const y = Math.floor(offsetY / CELL_SIZE);
        if (x >= 0 && x <= cols && y >= 0 && y <= rows) {
            board[y][x] = !board[y][x];
        }

        setCells(makeCells(board));
    }


    return ( 
        <div>        
            <div className="Board"          
            style={{ 
                width: WIDTH, 
                height: HEIGHT,
                backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px` 
            }}
            onClick={(event) => handleClick(event)}
            ref={boardRef}
            > 
            {
                cells.map(cell => (
                    <Cell x={cell.x} y={cell.y} key={`${cell.x}, ${cell.y}`}/>
                ))
            }
            </div>      
        </div>    
    );
}

export default Game;
