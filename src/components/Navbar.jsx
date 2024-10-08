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
                    <Link to="/dictionary">Dictionary</Link>
                </li>
              
                <li>
                    <h5>
                        Bienvenido: 
                            <span 
                                style={{ color: 'red', 
                                         fontSize: '1.2em',
                                         marginLeft: '20px'
                                       }}
                            >
                                {userName}
                            </span>
                    </h5>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;