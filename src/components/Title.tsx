// src/components/Title.tsx
import * as React from 'react';

export interface ITitleProps {
  content: string;
}
// Old school ways be like:
// class Title extends React.Component<ITitleProps> {
//   public render() {
//     return <h1>{this.props.content}</h1>;
//   }
//  }

// Legit school ways be like:
const Title = ({ content }: ITitleProps) => <h1>{content}</h1>;

export default Title;
