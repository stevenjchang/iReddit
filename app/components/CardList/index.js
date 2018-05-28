/**
 * CardList
 */

import React from 'react';
import Wrapper from './Wrapper';

import CardListItem from '../CardListItem';

const postHasImage = (item) => {
  const url = item.url.substring(0, 17);
  return url === 'https://i.redd.it';
} 

function CardList(props) {
  return (
    <Wrapper>
      {props.items
        .filter(item => postHasImage(item))
        .map((item) => {
          return (
            <CardListItem item={item} />
          );
        })}
    </Wrapper>
  );
}

export default CardList;
