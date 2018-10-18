const LoadWebsite = (Component) => {
    class _LoadWebsite extends React.Component {
        constructor(props) {
            super(props)
            this.state = {label: 'Run'}
            this.state.handleClick = this.handleClick.bind(this)
        }

        getUrl() {
            return 'http://reactquickly.co/'
        }

        handleClick(event) {
            // 웹사이트를 iframe으로 불러온다.
            var iframe = document.getElementById('frame').src = this.getUrl()
        }

        componentDidMount() {
            console.log(ReactDOM.findDOMNode(this))
        }

        render() {
            console.log(this.state)
            return <Component {...this.state} {...this.props} className="main" />
        }
    }

    _LoadWebsite.displayName = 'EnhancedComponent' // 고차 컴포넌트의 표시 이름을 지정
    return _LoadWebsite
}

// 보통 언더바(_)는 공개 인터페이스로 사용할 수 없는 비공개 속성, 변수, 메서드를 의미한다.
// 비공개 API는 자주 변경되기 때문에 예기치 않은 오류를 발생시킬 수 있으므로 사용을 권장하지 않는다.