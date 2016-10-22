import React from 'react';

//components
import { PureComponent } from 'react';

//helpers
import { prettyDate } from '../../helpers/date';

export default class RemainingTime extends PureComponent {
    constructor(props) {
        super(props);
        const { start, end } = this.props;
        this.state = {
            timer: end - start
        }
    }
    componentDidMount() {
        this.start();
    }

    componentWillUnmount() {
        this.stop();
    }

    start() {
        this.interval = setInterval(() => {
            this.setState({
                timer: this.props.end - new Date()
            });
        }, 1000)
    }

    stop() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <span>{this.props.text}{prettyDate(this.state.timer)}</span>
        );
    }
};
