import React from 'react';
import { render } from 'react-dom';

const num = 5;

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            data: []
        };
    }
    render () {
        console.log(this.state.data);
        let rend = this.state.data.map(item => {
            return <li></li>;
        }).join('');
        console.log(rend);
        return rend;
    }
}

render(<App/>, document.getElementById('app'));
