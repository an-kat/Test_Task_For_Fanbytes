import React from 'react';
import s from './Board.module.css';

function Board() {

    return (
        <div className={s.container}>
            <p className={s.firstHeader}>Rank</p>
            <p className={s.secondHeader}>Player</p>
            <p className={s.thirdHeader}>Points</p>
        </div>
    );
}

export default Board;
