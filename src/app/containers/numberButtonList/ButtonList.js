import React, { Component } from 'react';
import NumberButton from '../../components/numberButton/NumberButton';

export default class ButtonList extends Component {
    render() {
        const {numbers} = this.props;
        return (
            <>
                <ul className="list-unstyled number-list mb-2">
                    {numbers.map(item => (<NumberButton {...item} />))}
                </ul>
            </>
        )
    }
}
