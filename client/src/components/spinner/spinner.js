import './spinner.styl';
import React from 'react';
import { PureComponent } from 'react';


export default class Spinner extends PureComponent {
    render() {
        return (
            <div className="spinner">
                <div className="main"></div>
                <div className="text">{this.props.children}</div>
            </div>
        );
    }
}
Spinner.propTypes = {
    children: React.PropTypes.string,
};
