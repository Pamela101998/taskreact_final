import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav>
            <ul>

                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/products">Product</Link>
                </li>
                <li>
                    <Link to="/login">LoginForm</Link>
                </li>
                <li>
                    <Link to="/default">Default</Link>
                </li>

                <li>
                    <h5>Bienvenido:</h5>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;