import React, { Component } from 'react';
import Countdown from 'react-countdown-now';

const Completionist = () => <span>You are good to go!</span>;

const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
        // Render a completed state
        return <Completionist />;
    } else {
        // Render a countdown
        return <span>{hours}:{minutes}:{seconds}</span>;
    }
};

class CountdownTimer extends Component {
    render() {
        return (
            <Countdown
                date={Date.now() + 5000}
                renderer={renderer}
            />
        );
    }
}

export default CountdownTimer;
