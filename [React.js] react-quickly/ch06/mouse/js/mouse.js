class Mouse extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'div',
                {
                    style: { border: '1px solid red' },
                    onMouseOver: (event => {
                        console.log('mouse is over with event');
                        console.dir(event, this);
                    }).bind(this) },
                'Open DevTools and move your mouse curdor over here'
            )
        );
    }
}