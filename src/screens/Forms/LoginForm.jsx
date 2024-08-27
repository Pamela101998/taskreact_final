import useForm from "../../hooks/useForm";
import { useSelector, useDispatch } from 'react-redux';
import {saveFormData} from "../../redux/form/formActions";
import { setUsername } from "../../redux/form/formActions";
import { clearFormData } from "../../redux/form/formActions";
import { motion } from 'framer-motion';
import ModalInfo from "../../components/ModalInfo";
import ModalLogout from "../../components/ModalLogout";
// import { Link } from "react-router-dom";

import { useState } from "react";

const LoginForm = () => {
    const [values, handleChange, resetForm] = useForm({ username: '', email: '', password: ''});
    const [showModalInfo, setShowModalInfo] = useState(false);
    const [showModalLogout, setShowModalLogout] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const form = useSelector(state => state.form);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();

        // para verificar la contraseña antes de guardar los datos
        if (values.password === '123456') {
            console.log('Datos guardados:', values);
            
            dispatch(saveFormData(values)); 
            dispatch(setUsername(values.username));
            
        } else {
            showModal();  
        }
    };

    const hideModalInfo = () => {
        setShowModalInfo(false);
    };
   
    const showModal = () => {
        setShowModalInfo(true);
    };

   
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    const handleLogout = () => {
        resetForm(); 
        dispatch(clearFormData(values));
        hideModalLogout();
    };

    const hideModalLogout = () => {
        setShowModalLogout(false);
    };
   
    const showModalLog = () => {
        setShowModalLogout(true);
    };
    return (
        <motion.div
            initial={{opacity: 0, y: -70}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1}}
        >
            <ModalInfo
                visible={showModalInfo}
                message="Password incorrecto"
                onClose={hideModalInfo}
            />

            <ModalLogout
                visible={showModalLogout}
                message="¿Estas seguro de que quieres cerrar sesión?"
                onLogout={handleLogout}
                onClose={hideModalLogout}
            />


            <div className="container">
                <form onSubmit={handleSubmit}>
                    <h5>username: {form.formData.username}</h5>
                    <h5>email: {form.formData.email}</h5>
                    <h5>password: {form.formData.password}</h5>

                    <h3>Username: {values.username} </h3>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={values.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <div style={{ position: 'relative' }}>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                               
                            />
                        </div>
                        <button
                                type="button"
                                onClick={togglePasswordVisibility} 
                            >
                                {showPassword ? 'Hide' : 'Show'}
                            </button>        
                        </div>

                    <div className="button-container">
                        <button type="submit">Submit</button>
                        <a onClick={showModalLog}>Logout</a>

                    </div>
                    
                </form>
            </div>
           
        </motion.div>
      
        
   
    );
};

export default LoginForm;