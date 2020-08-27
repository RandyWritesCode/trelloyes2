import React from 'react';
import Card from './Card'
import './List.css';

export default function List(props) {
  return (
    <section className='List'>
      <header className='List-header'>
        <h2>{props.header}</h2>
      </header>
      <div className='List-cards'>
        {props.cards.map(card => {

          return (<Card
          key={card.id}
          title={card.title}
          content={card.content}
          item={card.id}
          onDeleteItem = {props.onDeleteItem}
          onRandomItem = {props.onRandomItem}
          />)
        }
        )}
        <button
          type='button'
          className='List-add-button'
        >
          + Add Random Card
        </button>
      </div>
    </section>
  )
}
