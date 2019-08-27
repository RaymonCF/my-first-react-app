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
      color: 'blue',
    },
    orange: {
      color: 'orange',
    },
    red: {
      color: 'red',
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
        <span className="hours" style={this.styles.blue} />:
        <span className="minutes" style={this.styles.orange} />:
        <span className="seconds" style={this.styles.red} />
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
