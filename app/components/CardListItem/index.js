/**
 * CardListItem
 */

import React from 'react';
import PropTypes from 'prop-types';

// import Wrapper from './Wrapper';
import './Styles.css';

function CardListItem(props) {
  const { title, subreddit, url } = props.item;
  return (
    <article className="card">
      <header className="card__title">
        <p>{subreddit}</p>
      </header>
      <main className="card__description">
        {title}
      </main>
      <figure className="card__thumbnail">
        <img src={url} alt="" />
      </figure>
    </article>
  );
}

CardListItem.propTypes = {
  item: PropTypes.object,
};

export default CardListItem;
