const React = require('react')
const ReactDOM = require('react-dom')

class Content extends React.Component {
    constructor(props) {
        super(props)
        this.submit = this.submit.bind(this)
        this.prompt = 'Please enter your email to win 10,000,000 won!'
    }

    submit(event) {
        let emailAddress = this.refs.emailAddress
        let comments = this.refs.comments

        // 참조를 이용하여 값에 접근한다.
        console.log(ReactDOM.findDOMNode(emailAddress).value)
        console.log(ReactDOM.findDOMNode(comments).value)
    }

    render() {
        return (
            <div className="well">
                <p>{this.prompt}</p>
                <div className="form-group">
                    Email: <input ref="emailAddress" className="form-control" type="text"
                                placeholder="zziller03@gmail.com" />
                </div>
                <div className="form-group">
                    Comments: <textarea ref="comments" className="form-control" placeholder="I like your website~" />
                </div>
                <div className="form-group">
                    <a className="btn btn-primary" value="Submit" onClick={this.submit}>Submit</a>
                </div>
            </div>
        )
    }
}

module.exports = Content