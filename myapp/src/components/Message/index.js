import React from 'react';
import './style.css';

export class Message extends React.Component {
    render() {
        const { author, text } = this.props;
        return (
            <div className='header'>
                {author}: {text}
            </div>
        );
    }
}