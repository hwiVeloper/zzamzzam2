const React = require("react");

class PasswordInput extends React.Component {
  render() {
    return (
      <input
        type={this.props.visible ? "text" : "password"}
        className="form-control"
        name={this.props.name}
        value={this.props.value}
        onChange={this.props.onChange}
      />
    );
  }
}

module.exports = PasswordInput;
