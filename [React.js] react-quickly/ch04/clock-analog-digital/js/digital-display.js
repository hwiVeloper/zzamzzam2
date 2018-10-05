const DigitalDisplay = function (props) {
    let date = new Date(props.time).toLocaleString('ko-KR');

    return React.createElement(
        'div',
        null,
        date
    );
};