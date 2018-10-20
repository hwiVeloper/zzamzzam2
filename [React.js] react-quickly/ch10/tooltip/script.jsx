class Tooltip extends React.Component {
    constructor(props) {
        super(props)
        this.state = {opacity: false}
        this.toggle = this.toggle.bind(this)
    }

    toggle() {
        const tooltipNode = ReactDOM.findDOMNode(this)

        this.setState({
            opacity: !this.state.opacity,
            top: tooltipNode.offsetTop, // 표준 DOM 노드 속성
            left: tooltipNode.offsetLeft // 표준 DOM 노드 속성
        })
    }

    render() {
        const style = {
            zIndex: (this.state.opacity) ? 1000 : -1000,
            opacity: +this.state.opacity,
            top: (this.state.top || 0) + 20,
            left: (this.state.left || 0) - 30
        }
        return (
            <div style={{display: 'inline'}}>
                <span style={{color: 'blue'}}
                    onMouseEnter={this.toggle}
                    onMouseOut={this.toggle}>
                    {this.props.children} {/* Tooltip 컴포넌트 내용으로 입력되는 html을 보여준다. */}
                </span>
                <div className="tooltip bottom" style={style} role="tooltip">
                    <div className="tooltip-arrow"></div>
                    <div className="tooltip-inner">
                        {this.props.text}
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <div>
        <Tooltip text="zziller03@gmail.com">hwiveloper</Tooltip>
        is a developer's nickname.
    </div>,
    document.getElementById('tooltip')
)