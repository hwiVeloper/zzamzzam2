import React, {Component} from 'react';

const withSplitting = getComponent => {
    // getComponent? : () => import('./SplitMe')의 형태로 전달
    class WithSplitting extends Component {
        state = {
            Splitted: null
        };

        constructor(props) {
            super(props);
            getComponent().then(({default: Splitted}) => {
                this.setState({
                    Splitted
                });
            });
        };

        render() {
            const {Splitted} = this.state;

            if (!Splitted) {
                return null;
            }

            return <Splitted {...this.props} />;
        }
    }

    return WithSplitting;
};

export default withSplitting;