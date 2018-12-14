import React from 'react';
import {StaticRouter} from 'react-router';
import App from 'shared/App';
import configureStore from 'redux/configureStore';
import {Provider} from 'react-redux';

import {renderToString} from 'react-router-server';

const render = async (location) => {
    const store = configureStore();

    const {html} = await renderToString(
        <StaticRouter location={location}>
            <Provider store={store}>
                <App/>
            </Provider>
        </StaticRouter>
    );

    return {
        html,
        state: store.getState()
    };
}

export default render;