import User from './User';

import * as React from 'react';

export default class UserBoard extends React.Component {
  public render() {
    return (
      <div>
        <h1>"User Board"</h1>
        <div>
          <User name="Henk" />
        </div>
        <div>
          <User name="Ook Henk" />
        </div>
        <div>
          <User name="Nog Meer Henk" />
        </div>
      </div>
    );
  }
}
