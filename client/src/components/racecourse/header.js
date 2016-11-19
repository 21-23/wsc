import React from 'react';

//components
import { PureComponent } from 'react';


export default class Header extends PureComponent {

    render() {
        return (
            <div className="header">
                <h1>Break the distance as soon as possible!</h1>
                <h5>Show how fast you are</h5>
            </div>
        );
    }
}
