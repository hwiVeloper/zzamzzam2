class Content extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            counter: 0 // 초기상태는 0
        }
    }

    handleClick(event) {
        this.setState({counter: ++this.state.counter})
    }

    render() {
        return (
            <div>
                <ClickCounterButton clickHandler={this.handleClick} />
                <br />
                <Counter value={this.state.counter} />
            </div>
        )
    }
}