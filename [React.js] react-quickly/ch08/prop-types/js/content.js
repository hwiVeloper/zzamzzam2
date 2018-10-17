class Content extends React.Component {
    render() {
        let number = 1;
        return React.createElement(
            "div",
            null,
            React.createElement(Button, { buttonLabel: "Start" }),
            React.createElement(Button, null),
            " ",
            React.createElement(Button, { title: number }),
            " ",
            React.createElement(Button, null),
            React.createElement(Button, { email: "not-a-valid-email" }),
            " ",
            React.createElement(Button, { email: "zziller03@gmail.com" })
        );
    }
}
// Content를 render할 때 같은 경고더라도 한 번만 표시한다.
// 난독화 또는 압축을 거치지 않은 개발 모드인 경우만 경고가 표시된다.