import React, { Component } from 'react';
import Countdown from 'react-countdown-now';

const Completionist = () => <span>Contract has ended!</span>;

const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        return <Completionist />;
    } else {
        return <span> Days Remaining: {days} | {hours}:{minutes}:{seconds} </span>;
    }
};

class CountdownTimer extends Component {
    render() {
        return (
            <Countdown
                date={this.props.date}
                renderer={renderer}
            />
        );
    }
}

export default CountdownTimer;
