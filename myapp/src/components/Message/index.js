import './style.css';

export const Message = ({ text }) => {
return (
    <h3 className="header"> 
        Message Text, {text}
    </h3>
    );
};