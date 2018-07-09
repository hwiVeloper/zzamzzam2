import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PhoneForm from './components/PhoneForm';

class App extends Component {
    id = 2
    state = {
        information: [
            {
                id: 0,
                name: '홍길동',
                phone: '010-0000-0000'
            },
            {
                id: 1,
                name: '홍길서',
                phone: '010-0000-0001'
            }
        ]
    }
    handleCreate = (data) => {
        const { information } = this.state;
        this.setState({
            information: information.concat({id: this.id++, ...data})
        })
        console.log(data);
    }
    render() {
        const { information } = this.state;
        return (
            <div>
                <PhoneForm onCreate={this.handleCreate}/>
                {JSON.stringify(information)}
            </div>
        );
    }
}

export default App;