class Mouse extends React.Component {
    handleMouseOver(event) {
        console.log('mouse is over with event.');
        window.e = event; // Anti-Pattern
        console.dir(event.target);
        setTimeout(() => {
            console.table(event.target);
            console.table(window.e.target); // 기본적으로 이벤트를 비동기 콜백함수나 전역변수에 담아 사용 불가.
        }, 2345);
    }
    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'div',
                {
                    style: { border: '1px solid red' },
                    onMouseOver: this.handleMouseOver.bind(this) },
                'Open DevTools and move your mouse curdor over here'
            )
        );
    }
}