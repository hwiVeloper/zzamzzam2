class Content extends React.Component {
    constructor(props) {
        super(props);
        this.handleRadio = this.handleRadio.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);

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
        };
    }

    handleRadio(event) {
        let obj = {};
        obj[event.target.value] = event.target.checked;
        this.setState({ radioGroup: obj });
    }

    handleCheckbox(event) {
        let obj = Object.assign(this.state.checkboxGroup);
        obj[event.target.value] = event.target.checked;
        this.setState({ checkboxGroup: obj });
    }

    render() {
        return React.createElement(
            "form",
            null,
            React.createElement("hr", null),
            React.createElement(
                "h2",
                null,
                "input: radio"
            ),
            React.createElement(
                "label",
                null,
                React.createElement("input", {
                    type: "radio",
                    name: "radioGroup",
                    value: "angular",
                    checked: this.state.radioGroup['angular'],
                    onChange: this.handleRadio }),
                "Angular"
            ),
            React.createElement("br", null),
            React.createElement(
                "label",
                null,
                React.createElement("input", {
                    type: "radio",
                    name: "radioGroup",
                    value: "react",
                    checked: this.state.radioGroup['react'],
                    onChange: this.handleRadio }),
                "React"
            ),
            React.createElement("br", null),
            React.createElement(
                "label",
                null,
                React.createElement("input", {
                    type: "radio",
                    name: "radioGroup",
                    value: "vue",
                    checked: this.state.radioGroup['vue'],
                    onChange: this.handleRadio }),
                "Vue"
            ),
            React.createElement("hr", null),
            React.createElement(
                "h2",
                null,
                "input: checkbox"
            ),
            React.createElement("input", {
                type: "checkbox",
                name: "checkboxGroup",
                value: "node",
                checked: this.state.checkboxGroup['node'],
                onChange: this.handleCheckbox }),
            " Node ",
            React.createElement("br", null),
            React.createElement("input", {
                type: "checkbox",
                name: "checkboxGroup",
                value: "react",
                checked: this.state.checkboxGroup['react'],
                onChange: this.handleCheckbox }),
            " React ",
            React.createElement("br", null),
            React.createElement("input", {
                type: "checkbox",
                name: "checkboxGroup",
                value: "express",
                checked: this.state.checkboxGroup['express'],
                onChange: this.handleCheckbox }),
            " Express ",
            React.createElement("br", null),
            React.createElement("input", {
                type: "checkbox",
                name: "checkboxGroup",
                value: "mongodb",
                checked: this.state.checkboxGroup['mongodb'],
                onChange: this.handleCheckbox }),
            " MondoDB ",
            React.createElement("br", null),
            React.createElement("hr", null)
        );
    }
}