class SaveButton extends React.Component {
    handleSave(event) {
        console.log(this, event);
    }

    render() {
        return React.createElement(
            "button",
            { onClick: this.handleSave.bind(this) },
            "Save"
        );
        // bind()가 반환하는 함수 정의를 onClick에 전달한다.
    }
}