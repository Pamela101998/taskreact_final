import { createBrowserRouter } from 'react-router-dom';
import Default from '../screens/Default/Default';
import Product from '../screens/Products/Product';
import LoginForm from '../screens/Forms/LoginForm';
import LandingPage from '../screens/LandingPage/LandingPage'; 
import App from '../App';
import DictionaryPage from '../screens/Dictionary/DictionaryPage';

const basename = process.env.NODE_ENV === 'production' ? '/taskreact_final' : '/';
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
            {
                path: 'dictionary',
                element: <DictionaryPage />,
            },
            
        ]
    }
],
    {
        basename:    basename
    }
);

export default routes;