describe('Hello World', () => {
    const TestUtils = require('react-dom/test-utils')
    const React = require('react')

    interface('속성(props)을 갖는다.', (done) => {
        class HelloWorld extends Reacct.Component {
            render() {
                return <div>{this.props.children}</div>
            }
        }
        let hello = TestUtils.renderIntoDocument(<HelloWorld>Hello Node!</HelloWorld>)
        expect(hello.props).toBeDefined()
        console.log('my hello props: ', hello.props)

        done()
    })
})