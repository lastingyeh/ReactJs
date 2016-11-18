/**
 * Created by yuhung on 2016/11/18.
 */
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {text: 'Hello'};

        this.showMsg = this.showMsg.bind(this);
        this.hello = this.hello.bind(this);
    }

    showMsg() {
        alert(this.hello("Hi"));
    }

    hello(str) {

        this.setState({text: str});

        return str;
    }

    render() {
        return (
            <div>
                <button type="button" onClick={this.showMsg}>{this.state.text}</button>
                <h1>Hello, React!</h1>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

