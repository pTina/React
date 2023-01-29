import React, { useState } from 'react'
import Square from './Square';
import "./Board.css";

const Board = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for( let i=0; i<lines.length; i++){
            const [a,b,c] = lines[i];

            if(
                squares[a] 
                && squares[a] === squares[b] 
                && squares[a] === squares[c]
            ){
                return squares[a];
            }
        }

        return null;
    }

    const winner = calculateWinner(squares);
    let status = '';
    if(winner){
        status = `Winner is ${winner}`;

    }else{
        status = `Next player: ${xIsNext ? 'X' : 'O'}`;
    }
    

    const handelClick = (i) => {
        const newSquares = squares.slice();

        if(calculateWinner(squares) || newSquares[i] ){
            return;
        }
        newSquares[i] = xIsNext ? 'X' : 'O';
        setSquares(newSquares);
        setXIsNext(prev => !prev);
    }

    const renderSquer = (i) => {
        return <Square 
            onClick={() => handelClick(i)}
            value={squares[i]}/>;
    }

    

    

    return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
                {renderSquer(0)}
                {renderSquer(1)}
                {renderSquer(2)}
            </div>
            <div className="board-row">
                {renderSquer(3)}
                {renderSquer(4)}
                {renderSquer(5)}
            </div>
            <div className="board-row">
                {renderSquer(6)}
                {renderSquer(7)}
                {renderSquer(8)}
            </div>
        </div>
    )
}

export default Board