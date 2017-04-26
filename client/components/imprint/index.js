import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import { main } from './styles';

export default class Imprint extends Component {
  /*eslint-disable */
  static onEnter({store, nextState, replaceState, callback}) {
    // Load here any data.
    callback(); // this call is important, don't forget it
  }
  /*eslint-enable */

  render() {
    return <div>
      <Helmet
        title='Imprint'
        meta={[
          {
            property: 'og:title',
            content: 'Imprint'
          }
        ]} />
      <h1 className={main}>
        Imprint is needed in Germany. TMG 5 bitches!
      </h1>
    </div>;
  }

}
