class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.launchClock();
        this.state = {
            currentTime: (new Date()).toLocaleString('ko')
        }
    }
    
    launchClock() {
        setInterval(() => {
            console.log('Updating Time...')
            this.setState({
                currentTime: (new Date()).toLocaleString('ko')
            })
        }, 1000)
    }

    render() {
        console.log('Rendering Clock...')
        return <div>{this.state.currentTime}</div>
    }
}

ReactDOM.render(
    <Clock/>,
    document.getElementById('content')
)