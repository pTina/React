import React, { Component } from 'react'
import Square from './Square';
import "./Board.css";

export default class Board extends Component {
    constructor(props){
        super(props);
        this.state = {
            squares: Array(9).fill(null),
        }
    }

    handelClick(i){
        const squares = this.state.squares.slice();

        squares[i] = 'X';
        this.setState({ squares: squares });
    }

    renderSquer(i) {
        return <Square value={this.state.squares[i]} 
                    onClick={()=>this.handelClick(i)}/>;
    }
    render() {
        const status = 'Next player: X';

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquer(0)}
                    {this.renderSquer(1)}
                    {this.renderSquer(2)}
                </div>
                <div className="board-row">
                    {this.renderSquer(3)}
                    {this.renderSquer(4)}
                    {this.renderSquer(5)}
                </div>
                <div className="board-row">
                    {this.renderSquer(6)}
                    {this.renderSquer(7)}
                    {this.renderSquer(8)}
                </div>
            </div>
        )
    }
}
