let helloWorldReactElement = <h1>Hello World~</h1>
class HelloWorld extends React.Component {
    render() {
        return (
            <div>
                <h1>Added!</h1>
                {helloWorldReactElement}
                {helloWorldReactElement}
            </div>
        )
    }
}
ReactDOM.render(
    <HelloWorld/>,
    document.getElementById('content')
)