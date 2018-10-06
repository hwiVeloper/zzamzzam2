class Note extends React.Component {
    confirmLeave(e) {
        let confirmationMessage = '정말 닫나요?';
        e.returnValue = confirmationMessage;
        return confirmationMessage;
    }

    componentDidMount() {
        console.log('beforeunload 이벤트에 confirmLeave 이벤트 리스너를 등록한다.');
        window.addEventListener('beforeunload', this.confirmLeave);
    }

    componentWillUnmount() {
        console.log('beforeunload 이벤트에 confirmLeave 이벤트 리스너를 제거한다.');
        window.removeEventListener('beforeunload', this.confirmLeave);
    }

    render() {
        console.log('!!! Render !!!');
        return React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                '\uBD80\uBAA8 \uCEF4\uD3EC\uB10C\uD2B8\uB294 ',
                this.props.secondsLeft,
                '\uCD08 \uB4A4\uC5D0 \uC81C\uAC70\uB41C\uB2E4.'
            ),
            React.createElement('input', { type: 'text' })
        );
    }
}