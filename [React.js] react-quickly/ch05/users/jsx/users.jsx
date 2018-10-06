class Users extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
        // 초기화하지 않으면 매 번 값 존재 여부를 확인해야 하는 번거로움이 있다.
    }

    componentDidMount() {
        fetch(this.props['data-url'])
        .then((response) => response.json())
        .then((users) => this.setState({users: users}))
    }
    
    render() {
        return (
            <div className="container">
                <h1>List of Users</h1>
                <table className="table-striped table-condensed table table-bordered table-hover">
                    <tbody>
                    {this.state.users.map((user) =>
                        <tr key={user.id}>
                            <td>{user.first_name} {user.last_name}</td>
                            <td>{user.email}</td>
                            <td>{user.ip_address}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        )
    }
}