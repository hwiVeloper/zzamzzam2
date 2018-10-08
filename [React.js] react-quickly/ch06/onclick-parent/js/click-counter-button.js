class ClickCounterButton extends React.Component {
    render() {
        return React.createElement(
            "button",
            {
                onClick: this.props.clickHandler,
                className: "btn btn-danger" },
            "Don't touch me with your dirty hands!!"
        );
    }
}