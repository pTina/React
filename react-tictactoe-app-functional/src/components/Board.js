import React, { UseState } from 'react'
import Square from './Square';
import "./Board.css";

const Board = () => {
    const [squares, setSquares] = UseState(Array(9).fill(null));

    const handelClick = (i) => {
        const newSquares = squares.slice();
        let curInput = 'O';
        curInput === 'O' ? curInput = 'X' : curInput = 'O';

        newSquares[i] = curInput;
        setSquares(newSquares);
    }

    const renderSquer = (i) => {
        return <Square 
            onClick={() => handelClick(i)}
            value={squares[i]}/>;
    }

    const status = `Next player: ${squares}`;

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