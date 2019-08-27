import * as React from 'react';

export interface IUserProps {
  name: string;
}

export interface IUserState {
  present: boolean;
}

export default class User extends React.Component<IUserProps, IUserState> {
  public state = { present: false };

  public render() {
    return (
      <div>
        <p>
          User:<b> {this.props.name}</b>
          <p>
            {this.props.name} is <b>{this.state.present ? 'not' : false}</b> present
          </p>
          <button onClick={this.handleClick}>Toggle</button>
        </p>
      </div>
    );
  }

  private handleClick = () => {
    this.setState({ present: !this.state.present });
  };
}
