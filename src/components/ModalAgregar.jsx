import { motion } from 'framer-motion';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveDictionaryWord } from '../redux/dictionary/dictionaryActions';
import useForm from '../hooks/useForm';

const ModalAgregar = ({ visible, onClose }) => {
    const [values, handleChange, resetForm] = useForm({ español: '', ingles: '', portugues: '' });
    const form = useSelector(state => state.form);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(saveDictionaryWord(values)); 
        alert('Palabras agregadas con éxito');
        resetForm()
        onClose(); 
    };

    if (!visible) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <motion.div
                className="notification-success"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
        
                <div className="container">
                    <form onSubmit={handleSubmit}>
                        <h2>TRADUCTOR USIP</h2>

                        <h5>Español: {form.formData.español}</h5>
                        <h5>Email: {form.formData.email}</h5>
                        <h5>Password: {form.formData.password}</h5>

                        <div>
                            <label htmlFor="español">Español</label>
                            <input
                                type="text"
                                id="español"
                                name="español"
                                value={values.español}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="ingles">Inglés</label>
                            <input
                                type="text"
                                id="ingles"
                                name="ingles"
                                value={values.ingles}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="portugues">Portugués</label>
                            <input
                                type="text"
                                id="portugues"
                                name="portugues"
                                value={values.portugues}
                                onChange={handleChange}
                            />
                        </div>

                        <button 
                            type="submit" 
                            style={{ marginRight: '20px' }}>
                            Agregar
                        </button>
                       
                    </form>
                </div>
                <button
                    className="close-btn-success"
                    onClick={onClose}>
                    X
                </button>
            </motion.div>
        </div>
    );
};

export default ModalAgregar;