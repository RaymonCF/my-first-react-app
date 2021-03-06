import * as React from 'react';

interface IClockState {
  h: string;
  m: string;
  s: string;
}

export default class Clock extends React.Component<{}, IClockState> {
  public state = {
    h: '00',
    m: '00',
    s: '00',
  };
  public styles = {
    blue: {
      color: '#0E2F44',
    },
    orange: {
      color: '#FF4500',
    },
    red: {
      color: '#A3040A',
    },
  };

  public componentDidMount = () => {
    let hoursString = 0;
    const element = document.getElementById('clock-block');
    const hours = document.getElementsByClassName('.hours');
    const minutes = document.getElementsByClassName('.minutes');
    const seconds = document.getElementsByClassName('.seconds');
    setInterval(() => {
      const d = new Date();
      const newHours = d.getHours();
      if (newHours !== hoursString) {
        hoursString = newHours;
        this.setState({ h: this.zeroPad(hoursString) });
      }
      this.setState({ m: this.zeroPad(d.getMinutes()) });
      this.setState({ s: this.zeroPad(d.getSeconds()) });
    }, 50);
  };

  public render() {
    return (
      <div id="clock-block">
        <span className="hours" style={this.styles.blue} />
        {this.state.h}:
        <span className="minutes" style={this.styles.orange} />
        {this.state.m}:
        <span className="seconds" style={this.styles.red} />
        {this.state.s}
      </div>
    );
  }
  private zeroPad(text: any) {
    text = text + '';
    if (text.length === 1) {
      text = '0' + text;
    }
    return text;
  }
}
