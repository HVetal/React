import React, { useContext } from 'react';
import { ThemeContext } from '../utils/ThemeContext';
import './style.css';

export const Message = ({ text, author }) => {
    // const { messageColor } = useContext(ThemeContext);

    return (
        <div>
            {/* <span style={{ color: messageColor }}> */}
            <span>
                {author}: {text}
            </span>
        </div>
    );
};


// export class Message extends React.Component {
//     render() {
//         const { author, text } = this.props;
//         return (
//             <div className='header'>
//                 {author}: {text}
//             </div>
//         );
//     }
// }