const DigitalDisplay = function(props) {
    let date = new Date(props.time).toLocaleString('ko-KR')

    return (
        <div>
            {date}
        </div>
    )
}