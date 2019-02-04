const React = require("react");

class PasswordVisibility extends React.Component {
  render() {
    return (
      <label className="form-control">
        <input
          type="checkbox"
          className=""
          checked={this.props.checked}
          onChange={this.props.onChange}
        />
        Show password
      </label>
    );
  }
}

module.exports = PasswordVisibility;
