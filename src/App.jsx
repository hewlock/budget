import './App.css';

import { FormattedMessage } from 'react-intl';
import {
    Link,
    Route,
    Routes,
} from 'react-router-dom';

export default function App() {
    return (
        <>
            <header>
                <h1>
                    <FormattedMessage id="budget" />
                </h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">
                                <FormattedMessage id="home" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/accounts">
                                <FormattedMessage id="accounts" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/categories">
                                <FormattedMessage id="categories" />
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<h2><FormattedMessage id="home" /></h2>} />
                    <Route path="/accounts" element={<h2><FormattedMessage id="accounts" /></h2>} />
                    <Route path="/categories" element={<h2><FormattedMessage id="categories" /></h2>} />
                </Routes>
                <p>
                    <FormattedMessage id="lorem" />
                </p>
                <code>
                    <FormattedMessage id="lorem" />
                </code>
            </main>
        </>
    );
}
