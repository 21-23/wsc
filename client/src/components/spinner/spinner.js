import './spinner.styl';
import React from 'react';

export default function Spinner (props) {
    return (
        <div className="spinner">
            <div className="main"></div>
            <div className="text">{props.children}</div>
        </div>
    );
}

Spinner.propTypes = {
    children: React.PropTypes.string,
};
