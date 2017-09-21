import React from 'react';
import { render } from 'react-dom';

const num = 5;

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            data: ['uno']
        };
    }
    render () {
        let ul = this.state.data.map((item, index) =>
          <li key={index}>{item}</li>
        );
        return <ul>{ul}</ul>
    }
}

render(<App/>, document.getElementById('app'));
