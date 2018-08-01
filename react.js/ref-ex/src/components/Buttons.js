import React from 'react';
import './Buttons.css';

const pairs = ['BTCUSD', 'ETHUSD', 'TRXUSD'];

const Buttons = ({ onChangePair }) => {
    const buttonList = pairs.map(
        pair => (<button key={pair} onClick={() => onChangePair(pair)}>{pair}</button>)
    );

    return (
        <div className="Buttons">
            {
                buttonList
            }
        </div>
    );
};

export default Buttons;