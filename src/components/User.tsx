import * as React from 'react';

export interface IUserProps {
  name: string;
}

export default class User extends React.Component<IUserProps> {
  public render() {
    return (
      <div>
        <p>
          "User:"
          <b>{this.props.name}</b>
        </p>
      </div>
    );
  }
}
