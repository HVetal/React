import React, { useEffect, useState, useCallback } from "react";

// export const Counter = () => {
//     console.log('counter called')
//     const [count, setCount] = useState(0);

//     return (
//         <div>
//             <h3>{count}</h3>
//             <button onClick={() => {
//                 const newCount = count + 1;
//                 setCount(newCount);
//             }}
//             >
//                 onClick
//             </button>
//         </div>
//     );
// };

// export const Counter = () => {
//     console.log('counter called')
//     const [count, setCount] = useState(0);
//     const [name, setName] = useState('Alex');

//     return (
//         <div>
//             <h3>{count}</h3>
//             <h3>{name}</h3>
//             <button onClick={() => {
//                 setCount((prevCount) => prevCount + 1);
//             }}
//             >
//                 onClick
//             </button>
//         </div>
//     );
// };

// Стадии и методы жизненного цикла компонентов Реакт Хуки

export const Counter = () => {
    console.log('counter called')
    const [count, setCount] = useState(0);
    const [name, setName] = useState('Alex');

    const updateCount = useCallback(() => {
        console.log("before: ", count);
        setCount((prevCount) => prevCount + 1);
    }, [count]);

    useEffect(() => {
        console.log("after: ", count);
        console.log('counter did mount OR count changed');
    }, [count]);

    useEffect(() => {
        console.log('counter did mount');
    }, []);

    useEffect(() => {
        console.log('counter did mount + did update');
    });

    useEffect(() => {
        console.log('counter did mount OR name changed');
    }, [name]);

    useEffect(() => {
        console.log('counter did mount OR name changed OR count changed');
    }, [name, count]);

    useEffect(() => {
        return () => {
            console.log('will unmount');
        };
    }, []);

    return (
        <div>
            <h3>{count}</h3>
            <h3>{name}</h3>
            <button onClick={updateCount}>
                onClick
            </button>
            <button onClick={() => {
                setName((prevName) => prevName + count);
            }}
            >
                onClick
            </button>
        </div>
    );
};

//-------------------------------------------------------------------------

// export class Counter extends React.Component {
//     state = {
//         count: 0,
//         name: 'Alex',
//     }

// updateCount = () => {
//     console.log('before: ', this.state.count);
//     this.setState({ count: this.state.count + 1 });
//     console.log('after: ', this.state.count);
// }

//     render() {
//         return (
//         <div>
//             <h3>{this.state.count}</h3>
//             <h3>{this.state.name}</h3>
//             <button onClick={this.updateCount}
//             >
//                 onClick
//             </button>
//         </div>
//         );
//     }
// }

// export class Counter extends React.Component {
//     state = {
//         count: 0,
//         name: 'Alex',
//     }

// updateCount = () => {
//     console.log('before: ', this.state.count);
//     this.setState({ name: 'new name' });
//     this.setState((prevState) =>({ count: prevState.count + 1 }),
//     () => {
//         console.log('after: ', this.state.count);
//     });
    
// }

//     render() {
//         return (
//         <div>
//             <h3>{this.state.count}</h3>
//             <h3>{this.state.name}</h3>
//             <button onClick={this.updateCount}
//             >
//                 onClick
//             </button>
//         </div>
//         );
//     }
// }

// Стадии и методы жизненного цикла компонентов Реакт

// class Button extends React.Component {
//     constructor(props) {
//         super(props);
//         console.log('Button constructor');
//         this.state = {
//             timer: 0,
//         }
//     }

//     componentDidMount() {
//         console.log('Button did mount');
//         this.interval = setInterval(() => {
//         this.setState((prevState) => ({ timer: prevState.timer + 1}));
//     }, 1000);
//     }
    
//     componentDidUpdate(prevProps, prevState) {
//         console.log('Button did update', prevProps, prevState);
//     }
    
//     componentWillUnmount() {
//         console.log('Button will unmount');
//         clearInterval(this.interval);
//     }

//     render() {
//         return <button onClick={this.props.onClick}>{this.props.title} {this.state.timer}</button>
//     }
// }

// export class Counter extends React.Component {
//     constructor(props) {
//         super(props);
//         console.log('Counter constructor');

//         this.state = {
//             count: 0,
//             name: 'Alex',
//             showButton: true,
//         };
//     }

// updateCount = () => {
//     console.log('before: ', this.state.count);
//     this.setState({ name: 'new name' });
//     this.setState((prevState) =>({ count: prevState.count + 1 }),
//     () => {
//         console.log('after: ', this.state.count);
//     });
// }

// componentDidMount() {
//     console.log('Counter did mount');
// }

// componentDidUpdate(prevProps, prevState) {
//     console.log('Counter did update', prevProps, prevState);
// }

// componentWillUnmount() {
//     console.log('Counter will unmount');
// }

// toggleButton = () => {
//     this.setState((prevState) => ({ showButton: !prevState.showButton }));
// }
 
//     render() {
//         console.log('Counter render');
//         return (
//         <div>
//             <h3>{this.state.count}</h3>
//             <h3>{this.state.name}</h3>
//             <button onClick={this.toggleButton}>Toggle button</button> 
//             {this.state.showButton && <Button onClick={this.updateCount} title="Click" />}
//         </div>
//         );
//     }
// }