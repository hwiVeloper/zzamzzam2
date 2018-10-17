class Content extends React.Component {
    render() {
        let number = 1
        return (
            <div>
                <Button buttonLabel = "Start" />
                <Button /> {/* 속성이 없다는 경고를 받을 것임 */}
                <Button title={number} /> {/* title은 문자여야 한다는 경고를 받을 것임 */}
                <Button />
                <Button email="not-a-valid-email" /> {/* 잘못된 이메일 형식이라는 경고를 받을 것임 */}
                <Button email="zziller03@gmail.com" />
            </div>
        )
    }
}
// Content를 render할 때 같은 경고더라도 한 번만 표시한다.
// 난독화 또는 압축을 거치지 않은 개발 모드인 경우만 경고가 표시된다.