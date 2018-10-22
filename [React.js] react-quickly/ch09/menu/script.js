class Menu extends React.Component {
    render() {
        let menus = [
            'Home',
            'About',
            'Services',
            'Portfolio',
            'Contact us'
        ]

        return React.createElement(
            'div',
            null,
            menus.map((v, i) => { // value, index
                return React.createElement(
                    'div',
                    {key: i}, // null일 경우 warning
                    React.createElement(Link, {label: v})
                )
            })
        )
    }
}

class Link extends React.Component {
    render() {
        const url = '/'
            + this.props.label
              .toLowerCase()
              .trim()
              .replace(' ', '-')

        return React.createElement(
            'div',
            null,
            React.createElement(
                'a',
                {href: url},
                this.props.label
            ),
            React.createElement('br')
        )
    }
}

const menuOptions = []

ReactDOM.render(
    React.createElement(
        Menu,
        {menus: menuOptions}
    ),
    document.getElementById('menu')
)