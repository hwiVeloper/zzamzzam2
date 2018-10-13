class Content extends React.Component {
    constructor(props) {
        super(props);
        this.handleRadio = this.handleRadio.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
        this.handleSelecthange = this.handleSelecthange.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);

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
            },
            selectedValue: 'node',
            firstName: ''
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

    handleSelecthange(event) {
        this.setState({ selectedValue: event.target.value });
    }

    handleChange(event) {
        console.log(event.target.value);
    }

    handleFirstNameChange(event) {
        this.setState({ firstName: event.target.value });
    }

    handleInput(event) {
        console.log(event.target.value);
    }

    handleSubmit() {
        fetch(this.props['data-url'], { method: 'POST', body: JSON.stringify(this.state) }).then(response => {
            return response.text();
        }).then(data => {
            console.log('Submitted: ', data);
        });
    }

    render() {
        return React.createElement(
            'form',
            null,
            React.createElement('hr', null),
            React.createElement(
                'h2',
                null,
                'input: radio'
            ),
            React.createElement(
                'label',
                null,
                React.createElement('input', {
                    type: 'radio',
                    name: 'radioGroup',
                    value: 'angular',
                    checked: this.state.radioGroup['angular'],
                    onChange: this.handleRadio }),
                'Angular'
            ),
            React.createElement('br', null),
            React.createElement(
                'label',
                null,
                React.createElement('input', {
                    type: 'radio',
                    name: 'radioGroup',
                    value: 'react',
                    checked: this.state.radioGroup['react'],
                    onChange: this.handleRadio }),
                'React'
            ),
            React.createElement('br', null),
            React.createElement(
                'label',
                null,
                React.createElement('input', {
                    type: 'radio',
                    name: 'radioGroup',
                    value: 'vue',
                    checked: this.state.radioGroup['vue'],
                    onChange: this.handleRadio }),
                'Vue'
            ),
            React.createElement('hr', null),
            React.createElement(
                'h2',
                null,
                'input: checkbox'
            ),
            React.createElement('input', {
                type: 'checkbox',
                name: 'checkboxGroup',
                value: 'node',
                checked: this.state.checkboxGroup['node'],
                onChange: this.handleCheckbox }),
            ' Node ',
            React.createElement('br', null),
            React.createElement('input', {
                type: 'checkbox',
                name: 'checkboxGroup',
                value: 'react',
                checked: this.state.checkboxGroup['react'],
                onChange: this.handleCheckbox }),
            ' React ',
            React.createElement('br', null),
            React.createElement('input', {
                type: 'checkbox',
                name: 'checkboxGroup',
                value: 'express',
                checked: this.state.checkboxGroup['express'],
                onChange: this.handleCheckbox }),
            ' Express ',
            React.createElement('br', null),
            React.createElement('input', {
                type: 'checkbox',
                name: 'checkboxGroup',
                value: 'mongodb',
                checked: this.state.checkboxGroup['mongodb'],
                onChange: this.handleCheckbox }),
            ' MondoDB ',
            React.createElement('br', null),
            React.createElement('hr', null),
            React.createElement(
                'select',
                {
                    value: this.state.selectedValue,
                    onChange: this.handleSelecthange },
                React.createElement(
                    'option',
                    { value: 'ruby' },
                    'Ruby'
                ),
                React.createElement(
                    'option',
                    { value: 'node' },
                    'Node'
                ),
                React.createElement(
                    'option',
                    { value: 'python' },
                    'Python'
                )
            ),
            React.createElement('hr', null),
            React.createElement('input', {
                type: 'text',
                onChange: this.handleChange,
                defaultValue: 'zziller03@gmail.com' }),
            React.createElement('hr', null),
            React.createElement('input', {
                type: 'text',
                name: 'firstName',
                onChange: this.handleFirstNameChange }),
            React.createElement('input', {
                type: 'button',
                onClick: this.handleSubmit,
                value: 'Submit' })
        );
    }
}