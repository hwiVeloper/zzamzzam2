let helloWorldReactElement = React.createElement(
    'h1',
    null,
    'Hello World~'
);
class HelloWorld extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h1',
                null,
                'Added!'
            ),
            helloWorldReactElement,
            helloWorldReactElement
        );
    }
}
ReactDOM.render(React.createElement(HelloWorld, null), document.getElementById('content'));
