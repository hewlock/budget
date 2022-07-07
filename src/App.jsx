import './App.css';

import {
    Link,
    Route,
    Routes,
} from 'react-router-dom';

export default function App() {
    return (
        <>
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
                <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida efficitur quam accumsan sodales. Maecenas felis erat, molestie et aliquet vel, volutpat vel mi. Ut efficitur metus urna. Cras viverra, nunc euismod ultricies tempus, purus felis eleifend risus, eget tristique nulla sem varius purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec nec posuere nunc, in faucibus sem. Morbi in tortor eu sapien rhoncus volutpat et a nunc. Nulla porttitor justo sit amet porttitor lobortis.
                </p>
                <code>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida efficitur quam accumsan sodales. Maecenas felis erat, molestie et aliquet vel, volutpat vel mi. Ut efficitur metus urna. Cras viverra, nunc euismod ultricies tempus, purus felis eleifend risus, eget tristique nulla sem varius purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec nec posuere nunc, in faucibus sem. Morbi in tortor eu sapien rhoncus volutpat et a nunc. Nulla porttitor justo sit amet porttitor lobortis.
                </code>
            </main>
        </>
    );
}
