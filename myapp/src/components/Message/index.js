import React from 'react';
import './style.css';

export class Message extends React.Component {
    render() {
        const { msg, onMessageClick } = this.props;
        return (
            <span className='header' onClick={onMessageClick}>
                Author: {msg.author}, Text: {msg.text}
            </span>
        );
    }
}