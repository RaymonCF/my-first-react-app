// src/components/Title.tsx
import * as React from 'react';

export interface ITitleProps {
  content: string;
}

class Title extends React.Component<ITitleProps> {
  public render() {
    return <h1>{this.props.content}</h1>;
  }
}

export default Title;
