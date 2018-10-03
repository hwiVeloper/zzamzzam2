class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.launchClock();
        this.state = {
            currentTime: new Date().toLocaleString('ko')
        };
    }

    launchClock() {
        setInterval(() => {
            console.log('Updating Time...');
            this.setState({
                currentTime: new Date().toLocaleString('ko')
            });
        }, 1000);
    }

    render() {
        console.log('Rendering Clock...');
        return React.createElement(
            'div',
            null,
            this.state.currentTime
        );
    }
}

ReactDOM.render(React.createElement(Clock, null), document.getElementById('content'));