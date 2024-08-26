import { createBrowserRouter } from 'react-router-dom';
import Default from '../screens/Default/Default';
import Product from '../screens/Products/Product';
import LoginForm from '../screens/Forms/LoginForm';
import LandingPage from '../screens/LandingPage/LandingPage'; // Asegúrate de ajustar la ruta si es diferente
import App from '../App';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true, 
                element: <LandingPage />,
            },
            {
                path: 'default',
                element: <Default />,
            },
            {
                path: 'products',
                element: <Product />,
            },
            {
                path: 'login',
                element: <LoginForm />,
            },
        ]
    }
]);

export default routes;