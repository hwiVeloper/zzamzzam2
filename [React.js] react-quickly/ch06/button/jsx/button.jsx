class SaveButton extends React.Component {
    handleSave(event) {
        console.log(this, event)
    }

    render() {
        return <button onClick={this.handleSave.bind(this)}>Save</button>
        // bind()가 반환하는 함수 정의를 onClick에 전달한다.
    }
}