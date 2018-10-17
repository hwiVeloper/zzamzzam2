class Button extends React.Component {
    render() {
        return React.createElement(
            'button',
            { className: 'btn btn-default' },
            this.props.buttonLabel
        );
    }
}

Button.defaultProps = { buttonLabel: 'Submit' };

Button.propTypes = {
    handler: PropTypes.func.isRequired,
    title: PropTypes.string,
    email(props, propName, componentName) {
        // 유효성 검사를 위해 정규식 사용
        let emailRegularExpression = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

        if (!emailRegularExpression.test(props[propName])) {
            return new Error('Email validation failed!!');
        }
    }
};