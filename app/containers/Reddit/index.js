import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import axios from 'axios';

import List from '../../components/List';
import CardList from '../../components/CardList';


const redditModel = (array) => {
  return array.data.map((rawData) => {
    const { id, title, thumbnail, subreddit_name_prefixed } = rawData;
    const data = {
      id,
      title,
      thumbnail,
      subreddit_name_prefixed,
    };
    return data;
  });
};

export default class Reddit extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }
  componentDidMount() {
    this.getAxios();
  }
  getAxios() {
    axios.get('http://localhost:3002/reddit')
      .then((response) => {
        const data = redditModel(response);
        this.setState({ items: data });
      });
  }
  render() {
    return (
      // <List items={this.state.items} component={CardList} />
      <CardList items={this.state.items} />
    );
  }
}
