import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'
import moment from 'moment';
import axios from 'axios';
import Buttons from './components/Buttons';
import LineChart from './components/LineChart';

class App extends Component {
    state = {
        pair: "BTCUSD",
        data: []
    }

    handleChangePair = (pair) => {
        // pair 값을 바꾼다.
        this.setState({ pair });
    }

    getData = async () => {
        const { pair } = this.state;
        try {
            // API 호출
            const response = await axios.get(`https://api.bitfinex.com/v2/candles/trade:5m:t${pair}/hist?limit=288`);
            // 데이터
            /* [ MTS, OPEN, CLOSE, HIGH, LOW, VOLUME ] */
            const data = response.data.map(
                (candle) => ({
                    date: moment(candle[0]).format('LT'), // 시간만
                    value: candle[2]
                })
            ).reverse(); // order by desc
            this.setState({
                data
            });
        } catch (e) {
            console.log(e);
        }
    }

    componentDidMount() {
        // 로딩 시 getData 호출한다.
        this.getData();
    }

    componentDidUpdate(prevProps, prevState) {
        // pair 값이 바뀌면 getData를 호출한다.
        if (prevState.pair !== this.state.pair) {
            this.getData();
        }
    }
    render() {
        return (
            <div className="App">
                <Buttons onChangePair={this.handleChangePair} />
                { /* 데이터가 없으면 렌더링하지 않음 */ }
                { this.state.data.length > 0 && <LineChart data={this.state.data} pair={this.state.pair}/> }
            </div>
        );
    }
}

export default App;
