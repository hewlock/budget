import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import 'normalize.css/normalize.css';
import './index.css';

import en from './locale/en.json';

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <IntlProvider locale={'en'} messages={en}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </IntlProvider>
    </React.StrictMode>
);
