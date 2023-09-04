import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (<div>
            <Header />
            <Content />
        </div>);
    }
}

export default Home;
