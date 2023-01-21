import React, { Component } from 'react'
import Square from './Square';

export default class Board extends Component {
    renderSquer() {
        return <Square />;
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
