class Content extends React.Component {
    constructor(props) {
        super(props)
        this.handleRadio = this.handleRadio.bind(this)
        this.handleCheckbox = this.handleCheckbox.bind(this)

        this.state = {
            radioGroup: {
                angular: false,
                react: true,
                vue: false
            },
            checkboxGroup: {
                node: false,
                react: true,
                express: false,
                mongodb: false
            }
        }
    }

    handleRadio(event) {
        let obj = {}
        obj[event.target.value] = event.target.checked
        this.setState({radioGroup: obj})
    }

    handleCheckbox(event) {
        let obj = Object.assign(this.state.checkboxGroup)
        obj[event.target.value] = event.target.checked
        this.setState({checkboxGroup: obj})
    }

    render() {
        return (
            <form>
                <hr/>
                {/* Radio Buttons START */}
                <h2>input: radio</h2>
                <label>
                    <input
                        type="radio"
                        name="radioGroup"
                        value="angular"
                        checked={this.state.radioGroup['angular']}
                        onChange={this.handleRadio}/>
                    Angular
                </label>
                <br/>
                <label>
                    <input
                        type="radio"
                        name="radioGroup"
                        value="react"
                        checked={this.state.radioGroup['react']}
                        onChange={this.handleRadio}/>
                    React
                </label>
                <br/>
                <label>
                    <input
                    type="radio"
                    name="radioGroup"
                    value="vue"
                    checked={this.state.radioGroup['vue']}
                    onChange={this.handleRadio}/>
                    Vue
                </label>
                {/* Radio Buttons END */}
                <hr/>
                {/* Checkbox START */}
                <h2>input: checkbox</h2>
                <input
                    type="checkbox"
                    name="checkboxGroup"
                    value="node"
                    checked={this.state.checkboxGroup['node']}
                    onChange={this.handleCheckbox}/> Node <br />
                <input
                    type="checkbox"
                    name="checkboxGroup"
                    value="react"
                    checked={this.state.checkboxGroup['react']}
                    onChange={this.handleCheckbox}/> React <br />
                <input
                    type="checkbox"
                    name="checkboxGroup"
                    value="express"
                    checked={this.state.checkboxGroup['express']}
                    onChange={this.handleCheckbox}/> Express <br />
                <input
                    type="checkbox"
                    name="checkboxGroup"
                    value="mongodb"
                    checked={this.state.checkboxGroup['mongodb']}
                    onChange={this.handleCheckbox}/> MondoDB <br />
                {/* Checkbox END */}
                <hr/>
            </form>
        )
    }
}