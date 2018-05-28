/**
 * CardListItem
 */

import React from 'react';

// import Wrapper from './Wrapper';
import './Styles.css';

function CardListItem(props) {
  const { title, subreddit_name_prefixed, thumbnail, url } = props.item;

  return (
    <article className="card">
      <header className="card__title">
        <p>{subreddit_name_prefixed}</p>
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

export default CardListItem;
