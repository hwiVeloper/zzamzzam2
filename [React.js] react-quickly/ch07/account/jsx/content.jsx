class Content extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.state = {accountNumber: ''} // 계좌번호 초기화
    }

    handleChange(event) {
        console.log('Typed: ', event.target.value)
        // 숫자만 입력 가능하도록 상태 갱신
        this.setState({accountNumber: event.target.value.replace(/[^0-9]/ig, '')})
    }

    render() {
        return (
            <div>
                Account Number:
                <input
                    type="text"
                    onChange={this.handleChange}
                    placeholder="123456"
                    value={this.state.accountNumber}/>
                <br/>
                <span>{this.state.accountNumber.length > 0 ? 'You entered: ' + this.state.accountNumber : ''}</span>
            </div>
        )
    }
}