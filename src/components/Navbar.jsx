import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const form = useSelector(state => state.form);

   const userName = form.formData.email;

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
                    <h5>Bienvenido:{userName}</h5>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;