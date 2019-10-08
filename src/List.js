import React from 'react';
import Card from './Card.js';

import './App.css';

function List(props) {
    const header = props.header;
    const cards = props.cards;
    console.log(cards);
    return (
        <section class="List">
            <header class="List-header">
                <h2>{header}</h2>
            </header>
            <div class="List-cards">
                {cards.map(card => (<Card key={card.id} header={card.title} desc={card.content}/>))}
                <button type="button" class="List-add-button">
                    + Add Random Card
                </button>
            </div>
        </section>
    );
}

export default List;
