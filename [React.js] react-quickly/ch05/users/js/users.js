class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
            // 초기화하지 않으면 매 번 값 존재 여부를 확인해야 하는 번거로움이 있다.
        };
    }

    componentDidMount() {
        fetch(this.props['data-url']).then(response => response.json()).then(users => this.setState({ users: users }));
    }

    render() {
        return React.createElement(
            "div",
            { className: "container" },
            React.createElement(
                "h1",
                null,
                "List of Users"
            ),
            React.createElement(
                "table",
                { className: "table-striped table-condensed table table-bordered table-hover" },
                React.createElement(
                    "tbody",
                    null,
                    this.state.users.map(user => React.createElement(
                        "tr",
                        { key: user.id },
                        React.createElement(
                            "td",
                            null,
                            user.first_name,
                            " ",
                            user.last_name
                        ),
                        React.createElement(
                            "td",
                            null,
                            user.email
                        ),
                        React.createElement(
                            "td",
                            null,
                            user.ip_address
                        )
                    ))
                )
            )
        );
    }
}