let secondsLeft = 5

let interval = setInterval(() => {
    if (secondsLeft == 0) {
        ReactDOM.render(
            <div>
                Note was remove after {secondsLeft} seconds.
            </div>,
            document.getElementById('content')
        )
    } else {
        ReactDOM.render(
            <div>
                <Note secondsLeft={secondsLeft} />
            </div>,
            document.getElementById('content')
        )
    }
    secondsLeft--
}, 1000)