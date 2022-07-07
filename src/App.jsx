import {
    BrowserRouter,
    Link,
    Route,
    Routes,
} from 'react-router-dom';

export default function App() {
    return (
        <BrowserRouter>
            <header>
                <h1>Budget</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/accounts">Accounts</Link>
                        </li>
                        <li>
                            <Link to="/categories">Categories</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<h2>Home</h2>} />
                    <Route path="/accounts" element={<h2>Accounts</h2>} />
                    <Route path="/categories" element={<h2>Categories</h2>} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}
