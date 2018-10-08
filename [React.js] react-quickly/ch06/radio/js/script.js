ReactDOM.render(React.createElement(
    "div",
    null,
    React.createElement(Radio, { id: "radio1", name: "react-radio", label: "Credit card", order: "1" }),
    React.createElement(Radio, { id: "radio2", name: "react-radio", label: "Paypal", order: "2" }),
    React.createElement(Radio, { id: "radio3", name: "react-radio", label: "Check", order: "3" })
), document.getElementById('content'));