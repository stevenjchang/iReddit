/**
 * CardList
 */

import React from 'react';

import CardListItem from '../CardListItem';

function CardList(props) {
  return (
    <div>
      {props.items.map((item) => {
        return (
          <CardListItem item={item} />
        );
      })}
    </div>
  );
}

export default CardList;
