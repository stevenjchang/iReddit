/**
 * CardList
 */

import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';
import CardListItem from '../CardListItem';

const postHasImage = (item) => {
  const url = item.url.substring(0, 17);
  return url === 'https://i.redd.it';
};

function CardList(props) {
  return (
    <Wrapper>
      {props.items
        .filter((item) => postHasImage(item))
        .map((item) => <CardListItem item={item} />)
      }
    </Wrapper>
  );
}

CardList.propTypes = {
  items: PropTypes.array,
};


export default CardList;
