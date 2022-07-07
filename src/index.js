import React from 'react';
import ReactDOM from 'react-dom/client';
import en from './locale/en.json';
import store from './store/store';
import { BrowserRouter} from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';

import 'normalize.css/normalize.css';
import './index.css';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <IntlProvider locale={'en'} messages={en}>
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
        </IntlProvider>
    </React.StrictMode>
);
